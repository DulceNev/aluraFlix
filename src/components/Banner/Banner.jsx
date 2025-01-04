import './Banner.css'

const Banner = () => {
    return <section className='banner-container'>
        <section>
            <article className='banner-content'>
                <button className='team-name'>
                    Frontend
                </button>

                <div className=''>
                    <p className='section-title'>React Challenge</p>
                    <p className='section-content-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quis unde, minus distinctio commodi aspernatur sequi odio maiores error similique consectetur odit, accusamus rem. Laborum, in. Iure quasi magnam itaque.</p>
                </div>
            </article>

            <iframe
                className='banner-section-video'
                width="50%"
                height="370"
                src="https://www.youtube.com/embed/19zGq_--hNs?si=jpb9UMqlGe6RX52H"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen>
            </iframe>
        </section>
    </section>
}

export default Banner