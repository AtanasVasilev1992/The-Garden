import { useEffect, useState } from "react";
import fruitsApi from "../api/fruits-api-js";

export function useGetAllFruits() {
    const [fruits, setFruits] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await fruitsApi.getAll();

            setFruits(result);
        })();
    }, []);

    return [fruits, setFruits]
};

export function useGetOneFruits(fruitsId) {
    const [fruits, setFruits] = useState({
        title: '',
        imageUrl: '',
        details: '',
    });

    useEffect(() => {
        (async ()=> {
            const result = await fruitsApi.getOne(fruitsId);

            setFruits(result);
        })();
    }, [fruitsId]);

    return [fruits, setFruits];
};

export function useCreateFruit() {
    const fruitCreateHadler = (fruitData) => fruitsApi.create(fruitData);

    return fruitCreateHadler;
};