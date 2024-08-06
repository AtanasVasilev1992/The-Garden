import * as request from './requester';

const BASE_URL = 'http://localhost:3030/data/fruits';

export const getAll = async () => {
    const result = await request.get(BASE_URL);

    const fruits = Object.values(result);

    return fruits;
};


export const getOne = (fruitId) => request.get(`${BASE_URL}/${fruitId}`);

export const create = (fruitData) => request.post(`${BASE_URL}`, fruitData);

export const remove = (fruitId) => request.del(`${BASE_URL}/${fruitId}`);

export const update = (fruitId, fruitData) => request.put(`${BASE_URL}/${fruitId}`, fruitData);

export const getLatest = async () => {
    const urlSearchParams = new URLSearchParams({
        sortBy: '_createdOn desc',
        pageSize: '3',
    });

    const result = await request.get(`${BASE_URL}?${urlSearchParams.toString()}`);

    const latestFruits = Object.values(result)

    return latestFruits;
};

const fruitsApi = {
    getAll,
    getOne,
    create,
    remove,
    update,
    getLatest
}

export default fruitsApi;