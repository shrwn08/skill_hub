const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8080/api";

function getToken() {
  return localStorage.getItem("token");
}

export async function apiRequest(endpoint, options = {}) {
  const token = getToken();

  const headers = {
    "content-type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...options.headers,
  };
  const res = await fetch(`${BASE_URL}${endpoint}`,{...options, headers});

  const data = await res.json();

  if(!res.ok) throw new Error(data.message || `Request failed: ${res.status}`);

  return data;

}

//convenience helpers

export const get = (url) => apiRequest(url);
export const post = (url,body)=> apiRequest(url,body);
export const put = (url, body) =>apiRequest(url,body);
export const del = url => apiRequest(url);
