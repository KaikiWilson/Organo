import bannerImg from './imagens/banner.png';
import "./Banner.css"

const Banner = () => {
    return (
        <div className='box-img'>
            <img src={bannerImg} alt='Banner do Organo' className="banner" />
        </div>
    )
}

export default Banner;