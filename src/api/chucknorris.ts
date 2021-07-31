import { ChucknorrisJoke } from "models/ChucknorrisJoke";

export async function getRandomJoke(): Promise<ChucknorrisJoke> {
  const response = await fetch("https://api.chucknorris.io/jokes/random", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  const json = await response.json();

  return json;
}
