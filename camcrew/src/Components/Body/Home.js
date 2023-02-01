import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../Assets/Carousel1.png';
import img2 from '../../Assets/Carousel2.png';
import img3 from '../../Assets/Carousel3.png';
import About from './About';
import Services from './Services';

function Home() {
  return (
    <>
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
    <div className='HomeItemsContainer'>
      <div className='Homecon'>
        <div className='homecon-1_1'>
            <div className='homesubcon1'><h1 className='homenumber'>01.</h1></div>
            <div className='homesubcon2'><p className='hometext'>On Demand Marketplace </p></div>
        </div>
        <div className='homecon-1_2'><p className='hometext1'>Camcrew.in is a one-stop-shop for all your photography needs, offering a wide range of services for any and every occasion. From weddings to corporate events, Camcrew.in has the perfect team to capture all of your special moments.</p></div>
      </div>
      <div className='Homecon'>
      
        <div className='homecon-1_1'>
            <div className='homesubcon1'><h1 className='homenumber'>02.</h1></div>
            <div className='homesubcon2'><p className='hometext'><span className='homespan'>500+ </span>Professionals.  </p></div>
        </div>
        <div className='homecon-1_2'><p className='hometext1'>We are a team of over 500+ Professionals, all with a wide range of skills and expertise  to help bring your visual projects to life. Our  team can handle any type of project, from corporate event photography to full-scale film production.</p></div>
     
      </div>
      <div className='Homecon'>
        <div className='homecon-1_1'>
            <div className='homesubcon1'><h1 className='homenumber'>03.</h1></div>
            <div className='homesubcon2'><p className='hometext'>In-house Editors.  </p></div>
        </div>
        <div className='homecon-1_2'><p className='hometext1'>We understand that every production is unique, and our team of in-house editors ensure the highest quality and consistency of our work, and always willing to work closely with our clients to understand their specific needs and goals.</p></div>
     
      </div>
    </div>
    <About/>
    <Services/>
    </>
  );
}

export default Home;