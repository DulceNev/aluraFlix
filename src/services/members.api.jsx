import { useEffect, useState } from 'react';

const useMembers = () => {

    const [members, setMembers] = useState([]); // Estado para GET
    // const [updateResponse, setUpdateResponse] = useState(null); // Estado para PUT
    const apiUrl = 'https://6769dc5c863eaa5ac0dcd927.mockapi.io/api/1/member';

    // **GET request**: Obtener datos
    const getMembers = async () => {
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const fetchedData = await response.json();
            setMembers(fetchedData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // useEffect(() => {
    //     getMembers(); // Ejecutar GET al montar el componente
    // }, []);

    // **PUT request**: Actualizar datos
    const updateMembers = async (id, updatedData) => {
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
            // const responseData = await response.json();
            // setUpdateResponse(responseData); // Guardar la respuesta del PUT
        } catch (error) {
            console.error('Error updating data:', error);
        }
    };

    // **POST request**: Agregar datos

    const addMember = async (title, team, url) => {
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
        return responseData;

    }

    // **DELETE request**: Eliminar datos

    const deleteMember = async (id) => {
        const response = await fetch(`${apiUrl}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const responseData = await response.json();
        return responseData;
    }

    // Retornar las funciones y estados necesarios
    return { members, getMembers, updateMembers, addMember, deleteMember };
};

export default useMembers;
