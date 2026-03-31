const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8080/api";

function getToken() {
  return localStorage.getItem("token");
}

export async function apiRequest(endpoint, options = {}) {
  const token = getToken();

  console.log(token);

  const config = {
    method: options.method || "GET",
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
    ...(options.body ? {body : JSON.stringify(options.body)}:{}),
  };



  const res = await fetch(`${BASE_URL}${endpoint}`, config);

  const data = await res.json();

  if (!res.ok) throw new Error(data.message || `Request failed: ${res.status}`);

  return data;
}

//convenience helpers

export const get = (url) => apiRequest(url);
export const post = (url, body) => apiRequest(url, {method: "POST",body});
export const put = (url, body) => apiRequest(url,{method:"PUT", body});
export const del = (url) => apiRequest(url,{method : "DELETE"});
