import requester from "./requester";


const BASE_URL = 'http://localhost:3030/data/comments';

const create = (fruitId, text) => requester.post(BASE_URL, { fruitId, text });

const getAll = (gameId) => {
    const params = new URLSearchParams({
        where: `fruitId="${gameId}"`,
        load: `author=_ownerId:users`
    })
    return requester.get(`${BASE_URL}?${params.toString()}`);
}

const commentsAPI = {
    create,
    getAll
}

export default commentsAPI;