import axios from "axios";

const api = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_ENVIRONMENT === "DEV"
      ? `http://localhost:${process.env.NEXT_PUBLIC_PORT}`
      : `${process.env.NEXT_PUBLIC_SERVICE_PROFILE_URL}`,
});
// const baseUrl =
//   process.env.NEXT_PUBLIC_ENVIRONMENT === "DEV"
//     ? `http://localhost:${process.env.NEXT_PUBLIC_PORT}`
//     : `${process.env.NEXT_PUBLIC_SERVICE_PROFILE_URL}`;

export default class RequestHandler {
  private url: string;
  api: typeof api;

  constructor(url: string) {
    this.url = url;
    this.api = api;
  }

  get<T>(params?: Record<string, unknown> | undefined): Promise<T> {
    return new Promise((resolve, reject) => {
      api
        .get<T>(this.url, {
          ...params,
        })
        .then((response) => {
          if (response.status >= 200 && response.status < 300) {
            resolve(response.data);
          } else {
            reject(response);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  find(param: any) {
    return new Promise((resolve, reject) => {
      api
        .get(`${this.url}/${param}`)
        .then((response) => {
          if (response.status >= 200 && response.status < 300) {
            resolve(response.data);
          } else {
            reject(response);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  store(body: Record<string, unknown>, url = this.url) {
    return new Promise((resolve, reject) => {
      api
        .post(`${this.url}/${url}`, body)
        .then((response) => {
          if (response.status >= 200 && response.status < 300) {
            resolve(response.data);
          } else {
            reject(response);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  update(id: string, body: Record<string, unknown>) {
    return new Promise((resolve, reject) => {
      api
        .put(`${this.url}/${id}`, body)
        .then((response) => {
          if (response.status >= 200 && response.status < 300) {
            resolve(response.data);
          } else {
            reject(response);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  delete(id: string) {
    return new Promise((resolve, reject) => {
      api
        .delete(`${this.url}/${id}`)
        .then((response) => {
          if (response.status >= 200 && response.status < 300) {
            resolve(response.data);
          } else {
            reject(response);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  getUrl() {
    return process.env.NEXT_PUBLIC_API_BASE + "/" + this.url;
  }

  download(params?: any, url = this.url) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch(
          `${this.api.defaults.baseURL}/${url}/download`,
          {
            method: "GET",
          },
        );

        if (response.ok) {
          const link = document.createElement("a");
          link.href = response.url;
          link.setAttribute("download", "");
          link.click();
          resolve(response);
        } else {
          const error = new Error(
            `Download failed: ${response.status} ${response.statusText}`,
          );
          (error as any).status = response.status;
          (error as any).originalMessage =
            `Server returned ${response.status}: ${response.statusText}`;
          reject(error);
        }
      } catch (error) {
        const err = error as Error;
        (err as any).originalMessage = err.message || "Network error occurred";
        reject(err);
      }
    });
  }
}
