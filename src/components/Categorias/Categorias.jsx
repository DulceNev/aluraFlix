import './Categorias.css';

const Categorias = () => {
    return (
        <section className='section-container'>

            <button className='team-name'>
                FRONT END
            </button>

            <section className='video-section'>

                <article className='video-card'>
                    <iframe
                        className='video'
                        width="100%"
                        height="450"
                        src="https://www.youtube.com/embed/kcdSjvUBrDA?si=JFOQO36DzcvapUE2"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen>
                    </iframe>
                    <p className='title-video'>Titulo de el video</p>
                    <div className='button-section'>
                        <button className='button category'>Borrar</button>
                        <button className='button category'>Editar</button>
                    </div>
                </article>

                <article className='video-card'>
                    <iframe
                        className='video'
                        width="100%"
                        height="450"
                        src="https://www.youtube.com/embed/kcdSjvUBrDA?si=JFOQO36DzcvapUE2"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen>
                    </iframe>
                    <p className='title-video'>Titulo de el video</p>
                    <div className='button-section'>
                        <button className='button category'>Borrar</button>
                        <button className='button category'>Editar</button>
                    </div>
                </article>
            </section>
        </section>
    );
}

export default Categorias;