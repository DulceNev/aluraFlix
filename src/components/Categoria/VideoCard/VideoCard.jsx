// import Button from '../../ui/Button';
import './VideoCard.css';
import { TiDelete } from "react-icons/ti";
import { MdEditSquare } from "react-icons/md";

const VideoCard = () => {
    return (<article className='video-card'>
        <TiDelete className='delete' />
        <MdEditSquare className='edit' />
        <iframe
            className='video'
            width="100%"
            height="260"
            src="https://www.youtube.com/embed/kcdSjvUBrDA?si=JFOQO36DzcvapUE2"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen>
        </iframe>
        <p className='title-video'>Titulo del video</p>
        <div className='button-section'>
            {/* <Button className="">Editar card</Button> */}
        </div>
    </article>
    )
}

export default VideoCard;