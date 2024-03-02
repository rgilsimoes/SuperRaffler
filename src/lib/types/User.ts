
export default interface User {
  uid?: string,
  email: string,
  name: string,
  channelUrl: string,
  status?: number, //0 - Active, 1 - Canceled
  createdAt?: string,
  updatedAt?: string,
}