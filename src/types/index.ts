export type AsyncOperationStatus = 'idle' | 'pending' | 'success' | 'error';

export interface Service {
  id: number;
  name: string;
  price: number;
}
