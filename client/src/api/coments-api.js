import requester from "./requester";

const BASE_URL = "http://localhost:3030/data/comments";

const createFruitComment = (fruitId, comment) =>
  requester.post(BASE_URL, { fruitId, comment });
const createVegetableComment = (vegetableId, comment) =>
  requester.post(BASE_URL, { vegetableId, comment });

const getAllFruitsComments = (fruitId) => {
  const params = new URLSearchParams({
    where: `fruitId="${fruitId}"`,
    load: `author=_ownerId:users`,
  });
  return requester.get(`${BASE_URL}?${params.toString()}`);
};

const getAllVegetablesComments = (fruitId) => {
  const params = new URLSearchParams({
    where: `vegetableId="${fruitId}"`,
    load: `author=_ownerId:users`,
  });
  return requester.get(`${BASE_URL}?${params.toString()}`);
};

const commentsAPI = {
  createFruitComment,
  createVegetableComment,
  getAllFruitsComments,
  getAllVegetablesComments,
};

export default commentsAPI;
