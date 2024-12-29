import './ImageCard.css';
import { TiDelete } from "react-icons/ti";
import { MdEditSquare } from "react-icons/md";
import { FaWindowClose } from "react-icons/fa";

import Modal from 'react-modal';
import { useState } from 'react';

// import usePut from '../../../api/usePut';
import useApi from '../../../services/Api';

const ImageCard = (props) => {

    const [modalIsOpen, setIsOpen] = useState(false);
    // const { updateData } = usePut();
    const { updateData, DeleteData } = useApi();

    function openModal() {
        setIsOpen(true);
        console.log(props.image);
        setTimeout(() => {
            document.getElementById('title').value = props.image.title;
            document.getElementById('team').value = props.image.team;
            document.getElementById('image').value = props.image.url;
        }, 100);

    }

    function closeModal() {
        setIsOpen(false);
    }


    Modal.setAppElement('#root');

    // UsePut

    const handleUpdate = async (e) => {
        e.preventDefault();

        const title = document.getElementById('title').value;
        const team = document.getElementById('team').value;
        const url = document.getElementById('image').value;

        console.log({ title, team, url });

        const data = {
            title: title,
            team: team,
            url: url,
        };

        await updateData(props.image.id, data);
        props.getData();
        closeModal();
    }

    const deleteImageCard = async () => {
        await DeleteData(props.id);
        await props.getData();
    }
    return (<article className='image-card'>
        <TiDelete className='delete' onClick={deleteImageCard} />
        <MdEditSquare onClick={openModal} className='edit' />

        <Modal
            className="Modal form-container"
            overlayClassName="Overlay"
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
        >
            <FaWindowClose className='icon-close-modal delete' onClick={closeModal} />
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
                            <option value="frontend">Frontend</option>
                            <option value="backend">Backend</option>
                            <option value="design">Diseño</option>
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


        </Modal>

        <img className='image' src={props.image.url} alt={props.image.title} />
        <div className='color-section my-4'></div>
        <p className='title-video'>{props.image.title}</p>

    </article>


    )
}


export default ImageCard;