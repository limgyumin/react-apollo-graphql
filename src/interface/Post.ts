export interface IPost {
  idx?: number;
  title?: string;
  description?: string;
  content?: string;
  is_deleted?: boolean;
  created_at?: Date;
  updated_at?: Date;
}

export interface IPostInput {
  title: string;
  description: string;
  content: string;
}
