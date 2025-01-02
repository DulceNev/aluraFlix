




import PropTypes from 'prop-types';
import useMembers from '../../hooks/members.api';


const EditMemberForm = (props) => {


    const { updateMembers } = useMembers();


    const handleUpdate = async (e) => {
        e.preventDefault();

        const title = document.getElementById('title').value;
        const team = document.getElementById('team').value;
        const url = document.getElementById('image').value;

        console.log({ title, team, url });

        const data = {
            title: title,
            team: team,
            image_url: url,
        };

        await updateMembers(props.id, data);
        props.getData();
        props.closeModal();
    }


    return (
        <form onSubmit={handleUpdate} method="POST" >
            <fieldset className="form-fieldset">
                <legend className="form-legend">Editar Card</legend>

                {/* Título */}
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

                {/* Selección de Equipos */}
                <div className="form-group">
                    <label htmlFor="team" className="form-label">Selecciona un equipo:</label>
                    <select id="team" name="team" className="form-select" required>
                        {
                            props.teams.map((team) => (
                                <option key={team.id} value={team.id}>{team.name}</option>
                            ))
                        }
                    </select>
                </div>

                {/* Enlace de imagen */}
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

                {/* Botón de Envío */}
                <div className="form-group">
                    <button type="submit" className="form-button">Guardar</button>
                </div>
            </fieldset>
        </form>
    )
}

EditMemberForm.propTypes = {
    closeModal: PropTypes.func,
    id: PropTypes.string,
    getData: PropTypes.func,
    teams: PropTypes.array,
};


export default EditMemberForm;