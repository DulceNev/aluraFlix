// import useFetch from '../../api/useFetch';
import useApi from '../../services/Api';

import './Categoria.css';
import ImageCard from './ImageCard/ImageCard';


const Categoria = () => {
    const { data, getData } = useApi();


    return (
        <section className='section-container'>

            <button className='team-name'>
                FRONT END
            </button>

            <section className='video-section'>
                {data?.map((image) => (
                    <ImageCard
                        key={image.id}
                        id={image.id}
                        video={image}
                        image={image}

                        getData={getData}
                    />
                ))}
            </section>
        </section>
    );
}

export default Categoria;