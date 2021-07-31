import { getRandomJoke as getRandomChucknorrisJoke } from "api/chucknorris";
import { Joke } from "models/Joke";
import { atom, selector, useSetRecoilState } from "recoil";

const currentJokeQuery = selector<Joke>({
  key: "currentJokeQuery",
  get: async () => {
    const chucknorrisJoke = await getRandomChucknorrisJoke();
    return chucknorrisJoke;
  },
});

export const currentJokeState = atom<Joke>({
  key: "currentJokeAtom",
  default: currentJokeQuery,
});

export const useRefreshCurrentJoke = () => {
  const setJoke = useSetRecoilState(currentJokeState);

  return async () => {
    setJoke(await getRandomChucknorrisJoke());
  };
};
