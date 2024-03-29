export type Todo = {
  id?: number;
  title: string;
  description: string;
  completed: boolean;
  createdAt?: DateTime;
  updatedAt?: DateTime;
};
