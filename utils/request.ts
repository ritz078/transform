export default async function request(url: string, data: any) {
  const res = await fetch(url, {
    method: "POST",
    body: typeof data === "object" ? JSON.stringify(data) : data
  });

  return await res.text();
}
