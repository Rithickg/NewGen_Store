import styled from "styled-components";

export const SliderContainer = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
  position: relative;
`;

export const SliderImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  opacity: ${(props) => (props.active ? 1 : 0)};
  transition: opacity 0.5s;
`;

export const Arrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  font-size: 2rem;
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
  padding: 5px;
  border-radius: 50%;
  z-index: 1;
`;

export const LeftArrow = styled(Arrow)`
  left: 0;
`;

export const RightArrow = styled(Arrow)`
  right: 0;
`;

export const Dot = styled.span`
  width: 12px;
  height: 12px;
  background: #fff;
  border-radius: 50%;
  display: inline-block;
  margin: 0 5px;
  cursor: pointer;
  opacity: ${(props) => (props.active ? 1 : 0.6)};
  transition: opacity 0.3s;
`;

export const DotContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
`;