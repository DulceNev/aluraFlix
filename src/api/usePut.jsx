import { useState } from "react";

// PUT request

const usePut = () => {
    const [data, setData] = useState(null); // Estado para los datos de la API
    const url = 'https://6769dc5c863eaa5ac0dcd927.mockapi.io/api/1/ImageCard';

    const updateData = (id, updateData) => {
        return fetch(`${url}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateData),
        })

            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json(); // Parsear la respuesta como JSON
            })

            .then((data) => {
                setData(data); // Guardar los datos en el estado
            })

            .catch((error) => {
                console.error('Error updating data:', error); // Manejar errores
            });
    };

    return { updateData, data }; // Retornar los datos de la API


}

export default usePut;