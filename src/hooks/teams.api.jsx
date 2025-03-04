import { useState } from 'react';

const useTeams = () => {

    const [teams, setTeams] = useState([]); // Estado para GET
    // const [updateResponse, setUpdateResponse] = useState(null); // Estado para PUT
    const apiUrl = 'https://6769dc5c863eaa5ac0dcd927.mockapi.io/api/1/team';

    // **GET request**: Obtener datos
    const getTeams = async () => {
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const fetchedData = await response.json();
            setTeams(fetchedData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // useEffect(() => {
    //     getTeams(); // Ejecutar GET al montar el componente
    // }, []);

    // **PUT request**: Actualizar datos
    const updateTeam = async (id, updatedData) => {
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

    const addTeam = async (title, team, url) => {
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

    const deleteTeam = async (id) => {
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
    return { teams, updateTeam, addTeam, deleteTeam, getTeams };
};

export default useTeams;
