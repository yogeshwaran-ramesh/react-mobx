export const fetchImages = () => {
  return fetch("https://picsum.photos/v2/list?page=1&limit=9")
    .then((response) => response.json())
    .catch((e) => console.log(e));
};
