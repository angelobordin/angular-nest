export function successReponse(data: any, message: string = '') {
  return {
    status: 200,
    error: false,
    message,
    data,
  };
}

export function errorReponse(err: Error) {
  return {
    status: 400,
    error: true,
    message: err.message,
    data: err,
  };
}
