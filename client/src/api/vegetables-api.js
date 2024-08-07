import * as request from "./requester";

const BASE_URL = "http://localhost:3030/data/vegetables";

export const getAll = async () => {
  const result = await request.get(BASE_URL);

  const vegetables = Object.values(result);

  return vegetables;
};

export const getOne = (vegetableId) =>
  request.get(`${BASE_URL}/${vegetableId}`);

export const create = (vegetableData) =>
  request.post(`${BASE_URL}`, vegetableData);

export const remove = (vegetableId) =>
  request.del(`${BASE_URL}/${vegetableId}`);

export const update = (vegetableId, vegetableData) =>
  request.put(`${BASE_URL}/${vegetableId}`, vegetableData);

export const getLatest = async () => {
  const urlSearchParams = new URLSearchParams({
    sortBy: "_createdOn desc",
    pageSize: "3",
  });

  const result = await request.get(`${BASE_URL}?${urlSearchParams.toString()}`);

  const latestVegetables = Object.values(result);

  return latestVegetables;
};

const vegetablesApi = {
  getAll,
  getOne,
  create,
  remove,
  update,
  getLatest,
};

export default vegetablesApi;
