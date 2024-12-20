import './Categoria.css';
import VideoCard from './VideoCard/VideoCard';

const Categoria = () => {
    return (
        <section className='section-container'>

            <button className='team-name'>
                FRONT END
            </button>

            <section className='video-section'>

                <VideoCard />
                <VideoCard />
                <VideoCard />

            </section>
        </section>
    );
}

export default Categoria;