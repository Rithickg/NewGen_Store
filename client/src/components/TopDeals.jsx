
// Carousel.js

import { useState } from 'react';
import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query'
import { getProducts } from '../utils/Fetcher';

const CarouselContainer = styled.div`
  width:100%;
  overflow: hidden;
  position: relative;
`;

const CarouselContent = styled.div`
  display: flex;
  transition: transform 0.5s ease;
  /* width: calc(100% * ${props => props.productCount}); */
`;

const ProductCard = styled.div`
   flex: 0 0 30%; /* Each product card takes the full width of the container */
  margin: 0 7px; 
  background-color:red; // Adjust margins as needed
`;

export const TopDeals = () => {
    const { data: products, } = useQuery({
        queryKey: ['products'],
        queryFn: getProducts
    })
    console.log("productsggh", products)
    // const [currentIndex, setCurrentIndex] = useState(0);

    // const nextSlide = () => {
    //     setCurrentIndex((currentIndex + 1) % products.length);
    // };

    // const prevSlide = () => {
    //     setCurrentIndex((currentIndex - 1 + products.length) % products.length);

    // };
    const [currentIndex, setCurrentIndex] = useState(0);

    const productCount = products.length;

    const nextSlide = () => {
        if (currentIndex < productCount - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <CarouselContainer>

            <CarouselContent productCount={productCount} style={{
                transform: `translateX(-${currentIndex * (100 / productCount)}%)`, // Adjust for product count
            }}>
                {products.map((product, index) => (
                    <ProductCard key={index}>
                        {/* Display product information and image */}
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                    </ProductCard>
                ))}
            </CarouselContent>
            <button onClick={prevSlide}>Previous</button>
            <button onClick={nextSlide}>Next</button>
        </CarouselContainer>
    );
}


