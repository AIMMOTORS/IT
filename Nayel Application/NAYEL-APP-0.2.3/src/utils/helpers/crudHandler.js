import * as Keychain from 'react-native-keychain';

export const API_BASE_URL = 'https://aim-motors.com/api/user'; //http://aimmotors.ap-southeast-1.elasticbeanstalk.com/api/user
// export const API_BASE_URL = 'http://10.57.186.96:8000/api/user';

const crudHandler = {
  read: async resource => {
    try {
      const url = `${API_BASE_URL}${resource}`;
      const credentials = await Keychain.getGenericPassword();
      if (!credentials) {
        throw new Error ('No credentials stored');
      }
      const response = await fetch(url, {  
        headers: {
          Authorization: `Bearer ${credentials.password}`,
          'Content-Type': 'application/json'
        }, 
      });
      if (!response.ok) {
        throw new Error(`Failed to read ${resource}`);
      }
      const data = response.json();
      console.log("API RESPONSE IN GENERAL",data)
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  create: async (resource, body) => {
    try {
      const url = `${API_BASE_URL}${resource}`;
      const credentials = await Keychain.getGenericPassword();
      if (!credentials) {
        throw new Error('No credentials stored');
      }
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${credentials.password}`,
        },
        body: JSON.stringify(body),
      });
      if (!response.ok) {
        throw new Error(`Failed to create ${resource}`);
      }
      const data = response.json();
      console.log("API RESPONSE IN GENERAL",response)
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  update: async (resource, id, body) => {
    try {
      const url = `${API_BASE_URL}${resource}/${id}`;
      const credentials = await Keychain.getGenericPassword();
      if (!credentials) {
        throw new Error('No credentials stored');
      }
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${credentials.password}`,
        },
        body: JSON.stringify(body),
      });
      if (!response.ok) {
        throw new Error(`Failed to update ${resource} with id ${id}`);
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  remove: async (resource, id) => {
    try {
      const url = `${API_BASE_URL}${resource}/${id}`;
      const credentials = await Keychain.getGenericPassword();
      if (!credentials) {
        throw new Error('No credentials stored');
      }
      const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${credentials.password}`,
        },
      });
      if (!response.ok) {
        throw new Error(`Failed to delete ${resource} with id ${id}`);
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
};

export default crudHandler;