const BASE_URL = "https://api.chucknorris.io/jokes";

export async function getRandomJoke() {
  const resp = await fetch(`${BASE_URL}/random`);
  const joke = await resp.json();
  return joke.value;
}
