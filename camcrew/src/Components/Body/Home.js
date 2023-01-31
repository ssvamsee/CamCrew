import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../Assets/Carousel1.png';
import img2 from '../../Assets/Carousel2.png';
import img3 from '../../Assets/Carousel3.png';


function Home() {
  return (
    <Carousel variant="dark">
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 carouselimg"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption className='CarouselCaptioncon1'>
          <h5 className="CarouselCaption1">We combine design, thinking and technical</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 carouselimg"
          src={img2}
          alt="Second slide"
        />
        <Carousel.Caption className='CarouselCaptioncon2'>
          <h5 className="CarouselCaption2">We always stay on the cutting edge of digital</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 carouselimg"
          src={img3}
          alt="Third slide"
        />
        <Carousel.Caption className='CarouselCaptioncon2'>
          <h5 className="CarouselCaption2">We crafts stunning and intuitive stuff</h5>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Home;