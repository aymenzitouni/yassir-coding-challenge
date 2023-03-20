class HttpException extends Error {
  status: number;
  code: string;
  message: string;
  constructor(status: number, code: string, message: string) {
    super(message);
    this.status = status;
    this.code = code;
    this.message = message;
  }
}

export default HttpException;
