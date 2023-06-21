export interface Error {
  message: string
  name?: string
  cause?: Error
  stack?: string
}

export const isError = function (error: any): error is Error {
  return error.message != null && error.stack != null
}
