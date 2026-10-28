import axios from "axios";
import { apiGatewayClient } from './apiConfig';

export const getSearchData = async (requestParams) => {
  const url = apiGatewayClient.invokeUrl;
  const additionalParams = {
    headers: {
      'Strict-Transport-Security':
        'max-age=63072000; includeSubDomains; preload',
      'Content-Security-Policy': "default-src 'self'",
      "Access-Control-Allow-Headers" : "Content-Type",
      "Access-Control-Allow-Origin": "https://www.bluewaveenergy.ca",
      "Access-Control-Allow-Methods": "OPTIONS,GET"
    },
    queryParams: {
      q: `"${requestParams}"`,
      size: 10000,
    },
  };
  
  try {
    const response = await axios.get(url, 
      {
        params: additionalParams.queryParams
      });
      return response;
  } catch (error) {
      console.error('Error:', error);
      throw error;
  }
};
