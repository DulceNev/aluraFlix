import { useEffect, useState } from 'react';

const useApi = () => {

    const [data, setData] = useState([]); // Estado para GET
    const [updateResponse, setUpdateResponse] = useState(null); // Estado para PUT
    const apiUrl = 'https://6769dc5c863eaa5ac0dcd927.mockapi.io/api/1/ImageCard';

    // **GET request**: Obtener datos
    const getData = async () => {
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const fetchedData = await response.json();
            setData(fetchedData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        getData(); // Ejecutar GET al montar el componente
    }, []);

    // **PUT request**: Actualizar datos
    const updateData = async (id, updatedData) => {
        try {
            const response = await fetch(`${apiUrl}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedData),
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const responseData = await response.json();
            setUpdateResponse(responseData); // Guardar la respuesta del PUT
        } catch (error) {
            console.error('Error updating data:', error);
        }
    };

    // **POST request**: Agregar datos

    const addData = async (title, team, url) => {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: title,
                team: team,
                url: url,
            }),
        });

        const responseData = await response.json();
        console.log(responseData);

    }

    // Retornar las funciones y estados necesarios
    return { data, getData, updateData, updateResponse, addData };
};

export default useApi;
