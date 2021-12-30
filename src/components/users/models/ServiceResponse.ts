interface ServiceResponse<T> {
  success: boolean
  status: number
  errorMesage?: string
  data?: T[] | T
}

export default ServiceResponse
