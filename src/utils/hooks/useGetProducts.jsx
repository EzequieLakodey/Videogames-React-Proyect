// FireBase
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/FireBaseConfig";
// Tanstack Query
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router";
import { useState, useEffect } from "react";

/* Imports */

// useGetProducts.jsx

const consultaBaseFirestore = collection(db, "Fake Store Api ");

const fetchProducts = async () => {
    const capturaDeConsulta = await getDocs(consultaBaseFirestore);
    const productos = capturaDeConsulta.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
    }));
    console.log("🚀 ~ productos ~ productos:", productos);
    return productos;
};

const fetchProductsByCategory = async (categoryId) => {
    const productosPorCategoria = query(
        consultaBaseFirestore,
        where("category", "==", categoryId)
    );
    const capturaDeConsulta = await getDocs(productosPorCategoria);
    const productosFiltrados = capturaDeConsulta.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
    }));
    console.log("🚀 ~ fetchProductsByCategory ~ categoryId:", categoryId);
    console.log(
        "🚀 ~ productosFiltrados ~ productosFiltrados:",
        productosFiltrados
    );
    return productosFiltrados;
};

export const useGetProducts = (categoryId) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const invocadorDeProductos = async () => {
            setIsLoading(true);
            try {
                let url = "http://localhost:5173/";
                if (categoryId) {
                    const productos = await fetchProductsByCategory(categoryId);
                    setData(productos);
                } else {
                    const productos = await fetchProducts();
                    setData(productos);
                }
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };
        invocadorDeProductos();
    }, [categoryId]);

    return { data, isLoading, error };
};
