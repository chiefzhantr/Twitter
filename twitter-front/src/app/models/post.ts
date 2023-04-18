import { Media } from "./media";

export interface Post {
  id: number;
  username: string;
  user_id: number;
  profilePicture: string;
  body: string;
  medias: Media[];
}
