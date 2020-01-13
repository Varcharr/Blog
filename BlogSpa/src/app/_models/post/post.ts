export interface Post {
    id: string
    name: string
    content: string
    comments: Comment[],
    createdOn: Date,

}