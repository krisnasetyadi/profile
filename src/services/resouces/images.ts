import { ENDPOINT } from "@/config/endpoint";
import RequestHandler from "../request-handler";

class Images extends RequestHandler {
  constructor() {
    super(ENDPOINT.IMAGES);
  }

  storeImages(body: any) {
    return new Promise((resolve, reject) => {
      this.store(body, `${ENDPOINT.IMAGES}/upload`)
        .then((response: any) => {
          if (response.ok) resolve(response);
          else reject(response);
        })
        .catch((error: any) => {
          reject(error);
        });
    });
  }
}
const ImagesApi = new Images();

export default ImagesApi;
