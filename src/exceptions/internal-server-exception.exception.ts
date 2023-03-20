import HttpException from "./http.exception";

class InternalServerException extends HttpException {
  constructor() {
    super(403, "InternalServerException", ``);
  }
}
export default InternalServerException;
