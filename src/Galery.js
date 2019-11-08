import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    id: 1,
    url: "./Images/nat.jpg",
    altText: 'First',
    caption: 'Nature'
  },
  {
    id: 2,
    url: "./Images/011_prod-yourshot-1125771-11123487.jpg",
    altText: 'Second',
    caption: 'Nature'
  },
  {
    id: 3,
    url: "./Images/Planet-Earth.jpg",
    altText: 'Third',
    caption: 'Nature'
  },
  {
    id: 4,
    url: "./Images/amazing-nature-landscapes-5.jpg",
    altText: 'Fourth',
    caption: 'Nature'
  },
  {
    id: 5,
    url: "./Images/Brown_County_Hills_Leonetti.jpg",
    altText: 'Fourth',
    caption: 'Nature'
    
  },
  {
    id: 6,
    url: "./Images/epic-fire-background-2.jpg",
    altText: 'Fourth',
    caption: 'Nature',
  },
  {
    id: 7,
    url: "./Images/shutterstock_124738093.jpg",
    altText: 'Fourth',
    caption: 'Nature'
    
  },
  {
    id: 8,
    url: "./Images/DSCF3946-HDR-Edit.jpg",
    altText: 'Fourth',
    caption: 'Nature'
  },
  {
    id: 9,
    url: "./Images/Epic-mountains.jpg",
    altText: 'Fourth',
    caption: 'Nature'
    
  },
  {
    id: 10,
    url: "./Images/Tom-Archer.jpg",
    altText: 'Fourth',
    caption: 'Nature'
    
  },
];

const Galery = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <div style={{margin:-26}}><CarouselCaption className="text-danger" captionText={item.caption} captionHeader={item.caption} /></div>
        <img style={{marginLeft:70,marginTop:15,width:530}} src={item.url} alt="nature"/>
      </CarouselItem>
      
    );
  });

  return (
    <div>
      <style>
        {
          `.custom-tag {
              max-width: 100%;
              height: 500px;
              background: black;
            }`
        }
      </style>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    </div>
  );
}

export default Galery;