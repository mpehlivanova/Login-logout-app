import { authManager } from '../App';
import { MethodType } from '../types';
import { HEADERS } from './constants';

export const request = async (
  endpoint: string,
  method: MethodType,
  body?: any,
  authorization = true
) => {
  const headers = {
    ...HEADERS,
    ...(authorization
      ? {
          Authorization: `Bearer ${authManager.getAccessToken()}`,
        }
      : {}),
  };
  let response = null;
  try {
    response = await fetch(`${endpoint}`, {
      headers,
      method,
      body: JSON.stringify(body),
    });
  } catch {
    throw new Error('error response');
  }
  if (!response.ok) {
    const error = await response.json();
    alert(error.error_description);
    throw new Error(error.error_description);
  }
  return await response.json();
};
