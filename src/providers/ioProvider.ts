import axios from 'axios';

interface IoErrorProps  {
  status: number;
  message: string;
}

interface IoInstanceProps {
  get: <T>(url: string, params: Record<string, string>) => 
    Promise<[T | null, IoErrorProps | null]>;
}

export const createIoInstance = (baseUrl: string): IoInstanceProps => {
  const instance = axios.create({
    baseURL: baseUrl,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return {
    get: <T>(url: string, params: Record<string, string>) => instance
      .get<T>(url, { params })
      .then<[T, null]>(res => [res.data, null])
      .catch<[null, IoErrorProps]>(err => [null, {
        status: err?.response?.status,
        message: err?.response?.data?.message,
      }]),
  };
}