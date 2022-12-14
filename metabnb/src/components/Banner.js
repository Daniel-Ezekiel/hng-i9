import Image from './Image';

const Banner = () => {
    return (
        <section id="banner-section">
            <div>
                <Image imgSrc="img/org-imgs/mbtoken.png" />
                <Image imgSrc="img/org-imgs/metamask.png" />
                <Image imgSrc="img/org-imgs/opensea.png" />
            </div>
        </section>
    );
}

export default Banner;