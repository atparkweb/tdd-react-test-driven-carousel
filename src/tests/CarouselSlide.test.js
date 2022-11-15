import React from 'react';
import { mount, shallow } from 'enzyme';
import CarouselSlide from '../CarouselSlide';

describe('CarouselSlide', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <CarouselSlide
        imgUrl="https://example.com/default.png"
        description="Test image"
      />
    );
  });

  it('renders a <figure>', () => {
    expect(wrapper.type()).toBe('figure');
  });

  it('renders an <img> and a <figcaption> as children', () => {
    // WARN: childAt() requires strict DOM structure
    expect(wrapper.childAt(0).type()).toBe(CarouselSlide.defaultProps.Img);
    expect(wrapper.childAt(1).type()).toBe('figcaption');
  });

  it('passes `imgUrl` through to the <img>', () => {
    const imgUrl = 'https://example.com/image.png';
    wrapper.setProps({ imgUrl });
    const img = wrapper.find(CarouselSlide.defaultProps.Img);
    expect(img.prop('src')).toBe(imgUrl);
  });

  it('uses `description` and `attribution` as the <figcaption>', () => {
    const description =
      "A single plum floating in perfume, served in a man's hat";
    const attribution = 'Japanese conceptual artist';
    wrapper.setProps({ attribution, description });
    expect(wrapper.find('figcaption').text()).toBe(
      `${description} ${attribution}`
    );
    expect(wrapper.find('figcaption strong').text()).toBe(description);
  });

  it('passes other props through to the figure', () => {
    const style = {},
      onClick = () => {},
      className = 'my-carousel-slide';
    wrapper.setProps({ style, onClick, className });
    expect(wrapper.prop('style')).toBe(style);
    expect(wrapper.prop('onClick')).toBe(onClick);
    expect(wrapper.prop('className')).toBe(className);
  });
});

describe('Img', () => {
  let mounted;
  const imgUrl = 'https://example.com/default.jpg';

  beforeEach(() => {
    const Img = CarouselSlide.defaultProps.Img;
    mounted = mount(<Img src={imgUrl} imgHeight={500} />);
  });

  it('renders and <img> with the given src', () => {
    expect(mounted.containsMatchingElement(<img src={imgUrl} />)).toBe(true);
  });
});
