import { useEffect, useReducer } from "react";
import commentsAPI from "../api/coments-api";

export function useCreateFruitComment() {
  const createHandler = (fruitId, comment) =>
    commentsAPI.createFruitComment(fruitId, comment);

  return createHandler;
}

export function useCreateVegetableComment() {
  const createHandler = (vegetableId, comment) =>
    commentsAPI.createVegetableComment(vegetableId, comment);

  return createHandler;
}

function commentsReducer(state, action) {
  switch (action.type) {
    case "GET_ALL":
      return action.payload.slice();

    case "ADD_COMMENT":
      return [...state, action.payload];
    default:
      return state;
  }
}

export function useGetAllFruitComennts(fruitId) {
  const [comments, dispatch] = useReducer(commentsReducer, []);

  useEffect(() => {
    (async () => {
      const result = await commentsAPI.getAllFruitsComments(fruitId);

      dispatch({ type: "GET_ALL", payload: result });
    })();
  }, [fruitId]);

  return [comments, dispatch];
}

export function useGetAllVegetableComennts(vegetableId) {
  const [comments, dispatch] = useReducer(commentsReducer, []);

  useEffect(() => {
    (async () => {
      const result = await commentsAPI.getAllVegetablesComments(vegetableId);

      dispatch({ type: "GET_ALL", payload: result });
    })();
  }, [vegetableId]);

  return [comments, dispatch];
}
