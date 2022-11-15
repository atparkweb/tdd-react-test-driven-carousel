import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: ${props =>
    typeof props.imgHeight === 'number'
      ? `${props.imgHeight}px`
      : props.imgHeight};
`;

const CarouselSlide = ({
  attribution,
  description,
  imgHeight,
  imgUrl,
  ...rest
}) => (
  <figure {...rest}>
    <Img src={imgUrl} imgHeight={imgHeight} />
    <figcaption>
      <strong>{description}</strong> {attribution}
    </figcaption>
  </figure>
);

CarouselSlide.propTypes = {
  attribution: PropTypes.node,
  description: PropTypes.node.isRequired,
  imgUrl: PropTypes.string.isRequired,
  imgHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

CarouselSlide.defaultProps = {
  imgHeight: 500,
};

export default CarouselSlide;
