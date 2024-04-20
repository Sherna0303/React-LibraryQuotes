/* eslint-disable @typescript-eslint/no-explicit-any */
export default {
  post: <T>(url: string, headers: HeadersInit, body: any): Promise<T> => fetch(url, { headers, method: 'POST', body: JSON.stringify(body) }).then((response) => response.json()),
  get: <T>(url: string, headers: HeadersInit): Promise<T> => fetch(url, { headers, method: 'GET' }).then((response) => response.json()),
  put: <T>(url: string, headers: HeadersInit,body: any): Promise<T> => fetch(url, { headers, method: 'PUT', body: JSON.stringify(body) }).then((response) => response.json()),
  delete: <T>(url: string, headers: HeadersInit): Promise<T> => fetch(url, { headers, method: 'DELETE' }).then((response) => response.json())
};