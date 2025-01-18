import { Server } from 'socket.io';
import { Server as HttpServer } from 'http';
import * as http from 'http';
import { SerialPort } from 'serialport';
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');
import { Request, Response } from 'express';
import { readLogs, writeLogs } from './logFile'; // Adjust the path accordingly
app.use(cors());
app.use(bodyParser.json());


const server: HttpServer = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
  },
});

// Endpoint to get logs
app.get('/logs', (req: Request, res: Response) => {
  const logs = readLogs();
  res.json(logs);
});

// Endpoint to log data
app.post('/log', (req: Request, res: Response) => {
  const { timestamp, message } = req.body;
  const logs = readLogs();
  logs.push({ timestamp, message });
  writeLogs(logs);
  console.log(`Log entry: ${timestamp} - ${message}`);
  res.send('Log entry sent to server successfully');
});


const maxRetries = 10;
let retryCount = 0;

async function initializeSerialPort() {
  // try{
  const ports: any[] = await SerialPort.list();
    // console.log('Available Ports:', ports); // Log all available ports

    const espPort: any | undefined = ports.find((port: any) => port.manufacturer === 'wch.cn');
    console.log(espPort);
    if(espPort===undefined){
        retrySerialPortConnection();
    }
    else{
    const portName = espPort.path; // Access the 'path' property directly
    console.log('ESP Port:', portName); // Log the found ESP port
    const port = new SerialPort({ path: portName, baudRate: 9600 });




  port.on('error', (err) => {
    console.error('Error connecting to serial port:', err.message);
    retrySerialPortConnection();
  });

  port.on('open', () => {
    console.log('Serial port connected successfully');

    const startByte = 0x01;
    const endByte = 0x09;

    interface SlotData {
      voltage: string;
      current: string;
      soc: string;
      maxTemperature: number;
      batteryID: string;
      bpi: number;
      slotID: number;
      nodeHealthOK: boolean;
      batteryPresent: boolean;
      chargingStatus: boolean;
    }

    const extractedParameters: Record<number, SlotData> = {};

    const emitExtractedParameters = () => {
      io.emit('extractedParameters', extractedParameters);
      console.log(extractedParameters);
    };

    const sendBytesWithDelay = (currentByte: number) => {
      if (currentByte <= endByte) {
        const bytesToSend = Buffer.from([0x01, 0x01, currentByte]);

        port.write(bytesToSend, (err) => {
          if (err) {
            console.error('Error writing to serial port:', err);
          } else {
            console.log(`Data written to serial port for byte 0x01 0x01 ${currentByte.toString(16)}`);
          }

          setTimeout(() => sendBytesWithDelay(currentByte + 1), 1000);
        });
      } else {
        console.log('Finished sending bytes. Restarting in 5 seconds...');

        setTimeout(() => {
          addEmptySlots(extractedParameters, endByte);
          sendBytesWithDelay(startByte);
          emitExtractedParameters();
        }, 5000);
      }
    };

    port.on('data', (data: Buffer) => {
      console.log(`Received data: ${data}`);
      const bytes: number[] = Array.from(data);
      bytes.splice(0, 2);

      const buffer = Buffer.from(bytes);
      const voltage = buffer.readUInt16BE(0) * 0.1;
      const current = (buffer.readUInt16BE(2) - 30000) / 10;
      const soc = (bytes[4] << 8 | bytes[5]) * 0.1;
      const maxTemperature = bytes[6];
      const batteryID = bytes.slice(7, 13).map(byte => byte.toString(16).padStart(2, '0')).join(':').toUpperCase();
      const bpi = bytes[13];
      const slotID = bytes[14];

      const flags = bytes[15];
      const nodeHealthOK = (flags & 0b00000001) === 0b00000001;
      const batteryPresent = (flags & 0b00000010) === 0b00000010;
      const chargingStatus = (flags & 0b00000100) === 0b00000100;

      const slotData: SlotData = {
        voltage: voltage.toFixed(1),
        current: current.toFixed(1),
        soc: soc.toFixed(1),
        maxTemperature: maxTemperature - 40,
        batteryID,
        bpi,
        slotID,
        nodeHealthOK,
        batteryPresent,
        chargingStatus,
      };

      extractedParameters[slotID] = slotData;
    });

    io.on('connection', (socket) => {
      console.log('Client connected');
    
      socket.on('disconnect', () => {
        console.log('Client disconnected');
      });
    });

    function addEmptySlots(data: Record<number, SlotData>, maxSlot: number) {
      for (let slot = 1; slot <= maxSlot; slot++) {
        if (!(slot in data)) {
          data[slot] = {
            voltage: '72.9',
            current: '1',
            soc: '10.1',
            maxTemperature: 33,
            batteryID: '00:00:00:00:00:00',
            bpi: 30,
            slotID: slot,
            nodeHealthOK: false,
            batteryPresent: false,
            chargingStatus: false,
          };
        }
      }
    }
    sendBytesWithDelay(startByte); // Start sending bytes after the port is open
    const PORT: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 8080;
    server.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  });
  

}
}
function retrySerialPortConnection() {
  if (retryCount < maxRetries) {
    console.log(`Retrying connection... Attempt ${retryCount + 1}`);
    setTimeout(() => {
      retryCount++;
      initializeSerialPort();
    }, 5000);
  
  } else {
    console.error('Maximum retries reached. Unable to connect to the serial port.');
    // Handle maximum retries reached scenario
  }
}

initializeSerialPort();
