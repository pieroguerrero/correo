import axios from "axios";
/**
 * Generic get method to retrrieve data with axios.
 * @param apiUrl
 * @param urlParams Optional Key-Value pair object that contains the URL Parameters to use
 * @returns
 */
export async function getData<T>(
  apiUrl: string,
  urlParams: object | null = null
) {
  //Identifying if there are URL Parameters or not.
  const response = await (urlParams
    ? axios.get(apiUrl, { params: urlParams })
    : axios.get(apiUrl));

  const data = (await response.data) as T;

  return data;
}
