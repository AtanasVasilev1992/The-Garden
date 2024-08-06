import { useEffect, useReducer } from "react";
import commentsAPI from "../api/coments-api";

export function useCreateComment() {
    const createHandler = (fruitId, comment) =>  commentsAPI.create(fruitId, comment);

    return createHandler;
};

function commentsReducer(state, action) {
    switch (action.type) {
        case 'GET_ALL':
            return action.payload.slice();

        case 'ADD_COMMENT' :
            return [...state, action.payload]
        default:
            return state;
    }
};

export function useGetAllComennts(fruitId) {
    const [comments, dispatch] = useReducer(commentsReducer, []);

    useEffect(() => {
        (async () => {
            const result = await commentsAPI.getAll(fruitId);

            dispatch({type: 'GET_ALL', payload: result});
        })();
    }, [fruitId]);

    return [comments, dispatch];
};