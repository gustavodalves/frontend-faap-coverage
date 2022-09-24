import { CarouselContainer, CarouselItem } from "../styles";

const Carousel = ({ images }) => {
    return (
        <CarouselContainer>
            <img src={images[0]} className='img-fluid'/>
        </CarouselContainer>
    )
}

export default Carousel;