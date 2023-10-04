export interface CreatePostDTO {
  userId: number
  title: string
  body: string
}
export interface PostDTO extends CreatePostDTO {
  id: number
}
