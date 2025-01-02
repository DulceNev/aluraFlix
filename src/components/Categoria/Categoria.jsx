import useApi from '../../services/Api';

import './Categoria.css';
import ImageCard from './ImageCard/ImageCard';


const Categoria = () => {
    const { data, getData } = useApi();


    return (
        <section className='section-container'>

            <section className='image-card-section'>
                {data?.map((image) => (
                    <ImageCard
                        key={image.id}
                        id={image.id}
                        image={image}
                        getData={getData}
                    />
                ))}
            </section>
        </section>
    );
}

export default Categoria;