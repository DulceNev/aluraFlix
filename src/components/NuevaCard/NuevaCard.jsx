import useApi from '../../services/Api'
import './NuevaCard.css'

import { useNavigate } from "react-router";


const NuevoVideo = () => {

    const { addData } = useApi();
    const navigate = useNavigate();

    const addNewCard = async (e) => {
        e.preventDefault();

        const title = document.getElementById('title').value;
        const team = document.getElementById('team').value;
        const url = document.getElementById('image').value;

        // console.log({ title, team, url });
        await addData(title, team, url);
        alert("Card agregada exitosamente 🎉");

        navigate("/");
    }

    return <section className="nueva-card">
        <h2>NUEVA CARD</h2>
        <p>COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA</p>
        <div className='space'></div>
        <form onSubmit={addNewCard}>
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
                        <option value="frontend">Frontend</option>
                        <option value="backend">Backend</option>
                        <option value="design">Diseño</option>
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