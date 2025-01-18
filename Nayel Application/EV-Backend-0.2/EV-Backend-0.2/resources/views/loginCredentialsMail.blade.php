<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #ffffff;
            border-radius: 5px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .logo {
            display: block;
            margin: 0 auto;
            text-align: center;
        }
        .logo img {
            max-width: 200px;
        }
        .content {
            margin-top: 20px;
            padding: 20px;
            border-top: 2px solid #37c6f5;
        }
        .content h2 {
            font-size: 24px;
            margin-bottom: 10px;
            color: #333;
        }
        .content p {
            font-size: 16px;
            margin-bottom: 15px;
            color: #555;
        }
        .credentials {
            padding: 15px;
            background-color: #f8f9fa;
            border-radius: 5px;
            border: 1px solid #e9ecef;
        }
        .credentials p {
            font-size: 16px;
            margin: 5px 0;
        }
        .footer {
            margin-top: 20px;
            font-size: 12px;
            color: #888;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="logo">
            <img src="https://aim-motors.com/assets/img/img1.png" alt="Company Logo">
        </div>
        <div class="content">
            <h2>Hello {{$name}},</h2>
            <p>Welcome to Aim-Motors! Below are the credentials which will be used to log in to the NAYEL-APP.</p>
            <div class="credentials">
                <h4>Account Information</h4>
                <p><strong>Username:</strong> {{$email}}</p>
                <p><strong>Password:</strong> {{$randomPassword}}</p>
            </div>
        </div>

        <div class="footer">
            <p>If you have any questions or need assistance, please contact us at:</p>
            <p>Aim Motors Pvt. Ltd.</p>
            <p>WAK House 3rd Floor,
                <br> Building No. 25-C,
                <br> Al-Murtaza Commercial Lane 4,
                <br> DHA, Phase VIII,
                <br> Karachi 75500 (Pakistan)</p>
            <p>Email: contact@aim-motors.com</p>
        </div>
    </div>
</body>
</html>



