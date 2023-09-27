const BASE_URL = "http://localhost:8000/transactions";

export const apiCall = async (
  method: string,
  endpoint?: string,
  options?: {}
) => {
  const requestURL = `${BASE_URL}/${endpoint || ""}`;

  const requestOptions: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    ...(method !== "GET" && {
      body: options ? JSON.stringify(options) : undefined,
    }),
  };

  const response = await fetch(requestURL, requestOptions);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};
