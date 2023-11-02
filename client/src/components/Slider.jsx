import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SliderContainer, SliderImage, LeftArrow, RightArrow, Dot, DotContainer } from '../styles/Slider.styled';

const images = [
    { url: 'https://t4.ftcdn.net/jpg/04/95/28/65/360_F_495286577_rpsT2Shmr6g81hOhGXALhxWOfx1vOQBa.jpg', path: '/products-1' },
    { url: 'https://static.vecteezy.com/system/resources/previews/000/677/302/original/abstract-technology-banner-background.jpg', path: '/products-2' },
    { url: 'https://t4.ftcdn.net/jpg/04/95/28/65/360_F_495286577_rpsT2Shmr6g81hOhGXALhxWOfx1vOQBa.jpg', path: '/products-3' },
    { url: 'https://static.vecteezy.com/system/resources/thumbnails/005/715/816/small/banner-abstract-background-board-for-text-and-message-design-modern-free-vector.jpg', path: '/products-4' },
    { url: 'https://cdn.pixabay.com/photo/2021/09/12/07/58/banner-6617550_960_720.png', path: '/products-5' }
];

export const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const slideInterval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => {
            clearInterval(slideInterval);
        };
    }, []);

    return (
        <SliderContainer>
            <Link to={images[currentIndex].path}>
                <SliderImage
                    src={images[currentIndex].url}
                    alt={images[currentIndex].path}
                />
            </Link>

            <LeftArrow onClick={prevSlide}>&#10094;</LeftArrow>
            <RightArrow onClick={nextSlide}>&#10095;</RightArrow>

            <DotContainer>
                {images.map((_, index) => (
                    <Dot
                        key={index}
                        onClick={() => goToSlide(index)}
                        active={index === currentIndex}
                    />
                ))}
            </DotContainer>
        </SliderContainer>
    );
};

