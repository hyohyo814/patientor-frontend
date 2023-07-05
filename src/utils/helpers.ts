export const assertNever = (obj: any): never => {
  throw new Error('An error has occurred');
}