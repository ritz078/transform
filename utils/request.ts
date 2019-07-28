import debounce from "lodash/debounce";

async function request(url: string, data: any) {
  const res = await fetch(url, {
    method: "POST",
    body: typeof data === "object" ? JSON.stringify(data) : data
  });

  return await res.text();
}
const debounced = debounce(request, 500);

export default debounced;
