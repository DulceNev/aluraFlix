import { useEffect } from 'react';
import useTeams from '../../services/teams.api';
import './NuevaCard.css'

import { useNavigate } from "react-router";
import useMembers from '../../services/members.api';


const NuevoVideo = () => {


    const { teams, getTeams } = useTeams();
    const { addMember: addMemberApi } = useMembers();
    useEffect(() => {
        getTeams();
    }, []);

    const navigate = useNavigate();

    const addMember = async (e) => {
        e.preventDefault();

        const title = document.getElementById('title').value;
        const team = document.getElementById('team').value;
        const url = document.getElementById('image').value;

        // console.log({ title, team, url });
        await addMemberApi(title, team, url);
        alert("Card agregada exitosamente 🎉");

        navigate("/");
    }

    return <section className="nueva-card">
        <h2>NUEVA CARD</h2>
        <p>COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA</p>
        <div className='space'></div>
        <form onSubmit={addMember}>
            <div>
                <div className="form-group">
                    <label htmlFor="title" className="form-label">Título:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Escribe el título"
                        className="form-input"
                        required
                        maxLength="100"
                    />
                </div>

                <div className="form-group">
                    <label className="form-label">URL de la Imagen:</label>
                    <input
                        type="url"
                        id="image"
                        name="image"
                        placeholder="https://example.com/imagen.jpg"
                        pattern="https?://.+"
                        className="form-input"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="team" className="form-label">Selecciona un equipo:</label>
                    <select id="team" name="team" className="form-select" required>
                        {
                            teams.map((team) => (
                                <option key={team.id} value={team.id}>{team.name}</option>
                            ))
                        }

                    </select>
                </div>
            </div>



            <div className="form-group">
                <button type="submit" className="form-button">Agregar Card</button>
            </div>

        </form>
    </section>
}

export default NuevoVideo