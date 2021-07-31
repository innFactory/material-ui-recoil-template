import { Joke } from "./Joke";

export interface ChucknorrisJoke extends Joke {
  icon_url: string;
  id: string;
  url: string;
}
