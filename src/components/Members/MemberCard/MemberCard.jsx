import './MemberCard.css';
import { TiDelete } from "react-icons/ti";
import { MdEditSquare } from "react-icons/md";
import { FaWindowClose } from "react-icons/fa";

import { useEffect } from 'react';


import Modal from 'react-modal';
import { useState } from 'react';



import PropTypes from 'prop-types';
import useTeams from '../../../hooks/teams.api';
import useMembers from '../../../hooks/members.api';
import EditMemberForm from './../EditMemberForm';
const ImageCard = (props) => {

    const [modalIsOpen, setIsOpen] = useState(false);
    const { teams, getTeams } = useTeams();
    const { deleteMember } = useMembers();
    useEffect(() => {
        getTeams();
    }, []);
    function openModal() {
        setIsOpen(true);
        console.log(props.image);
        setTimeout(() => {
            document.getElementById('title').value = props.image.title;
            document.getElementById('team').value = props.image.team;
            document.getElementById('image').value = props.imageUrl;
        }, 100);

    }

    function closeModal() {
        setIsOpen(false);
    }


    Modal.setAppElement('#root');



    const deleteImageCard = async () => {
        await deleteMember(props.id);
        await props.getData();
    }


    const colorPrimario = {
        backgroundColor: props.colorPrimario
    }
    // console.log(props)
    return (
        <section className='image-card-container'>

            <article className='image-card'>
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
                    <EditMemberForm teams={teams} closeModal={closeModal} id={props.id} getData={props.getData} />


                </Modal>

                <img className='image' src={props.url} alt={props.title} />
                <div className='color-section my-5' style={colorPrimario}></div>
                <p className='title-video'>{props.title}</p>

            </article>
        </section>
    )
}

ImageCard.propTypes = {
    image: PropTypes.object,
    id: PropTypes.string,
    getData: PropTypes.func,
    url: PropTypes.string,
    imageUrl: PropTypes.string,
    title: PropTypes.string,
    colorPrimario: PropTypes.string,

};


export default ImageCard;