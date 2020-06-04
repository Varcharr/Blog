// Predstavlja model za novi post
// Potencijalno prosirenje u buducnost bilo bi generisanje modela iz serverske strane
// ? oznacava property nije obavezan
export interface Post {
  id?: string;
  name: string;
  content: string;
  createdById?: string;
  createdBy?: any;
  createdOn?: Date;
  modifiedOn?: Date;
}
