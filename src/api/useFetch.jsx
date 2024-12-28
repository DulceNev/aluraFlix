import { useEffect, useState } from 'react';


// GET request
const url = 'https://6769dc5c863eaa5ac0dcd927.mockapi.io/api/1/ImageCard';

const useFetch = () => {
    const [data, setData] = useState([]); // Estado para los datos de la API
    const getData = () => fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json(); // Parsear la respuesta como JSON
        })
        .then((image) => {
            setData(image); // Guardar las imagenes en el estado
        })
        .catch((error) => {
            console.error('Error fetching videos:', error); // Manejar errores
        });
    useEffect(() => {
        getData()

    }, []); // Ejecutar solo una vez al montar el componente

    return { data, getData }; // Retornar los datos de la API
}



export default useFetch;