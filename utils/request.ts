import axios, { CancelTokenSource } from "axios";
import { type } from "os";

let cancelTokenSource: CancelTokenSource;
export default async function request(
  url: string,
  data: any,
  contentType = "application/json"
) {
  if (cancelTokenSource) cancelTokenSource.cancel();
  cancelTokenSource = axios.CancelToken.source();

  const res = await axios.post(url, data, {
    cancelToken: cancelTokenSource.token,
    headers: { "Content-Type": contentType }
  });

  cancelTokenSource = null;
  return res.data;
}
