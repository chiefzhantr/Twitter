import { Media } from "./media";

export interface Post {
  id: number;
  username: string;
  user_id: number;
  profile_picture: string;
  body: string;
  medias: Media[];
}
