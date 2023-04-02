import { Media } from "./media";

export interface Post {
  id: number;

  author_username: string;

  author_id: number;

  profilePicture: string;
  body: string;

  medias: Media[];
}
