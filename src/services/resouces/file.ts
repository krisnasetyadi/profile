import { ENDPOINT } from "@/config/endpoint"
import RequestHandler from "../request-handler"

class FileApi extends RequestHandler {
    constructor() {
        super(ENDPOINT.FILE)
    }
}

export default new FileApi()