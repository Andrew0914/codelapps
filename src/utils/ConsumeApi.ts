export type HTTPMethod = "GET" | "POST";

export async function consume<T>(
  url: string,
  method: HTTPMethod = "GET",
  body?: { [key: string]: any }
) {
  const request = new Request(url, { method, body: JSON.stringify(body) });

  const res = await fetch(request);

  if (!res.ok) throw new Error(`Failed to fetch data from: ${url} ❌`);

  const json = await res.json();

  return json as T;
}
