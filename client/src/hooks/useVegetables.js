import { useEffect, useState } from "react";

import vegetablesApi from "../api/vegetables-api";

export function useGetAllVegetables() {
    const [vegetables, setVegetables] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await vegetablesApi.getAll();

            setVegetables(result);
        })();
    }, []);

    return [vegetables, setVegetables]
};

export function useGetOneVegetables(vegetableId) {
    const [vegetables, setVegetables] = useState({
        title: '',
        imageUrl: '',
        details: '',
    });

    useEffect(() => {
        (async ()=> {
            const result = await vegetablesApi.getOne(vegetableId);

            setVegetables(result);
        })();
    }, [vegetableId]);

    return [
        vegetables,
        setVegetables
    ];
};

export function useCreateVegetable() {
    const vegetableCreateHadler = (vegetableData) => vegetablesApi.create(vegetableData);

    return vegetableCreateHadler;
};