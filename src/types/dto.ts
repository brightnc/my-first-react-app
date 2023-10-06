export interface CreatePostDTO {
  userId: number
  title: string
  body: string
}
export interface PostDTO extends CreatePostDTO {
  id: number
}

export interface LoginDTO {
  username: string
  password: string
}

export interface CredentialDTO {
  accessToken: string
}
