export interface Post {
  id?: string;
  name: string;
  content: string;
  createdById?: string;
  createdBy?: any;
  createdOn?: Date;
  modifiedOn?: Date;
}
