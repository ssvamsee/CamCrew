import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';
import img1 from '../../Assets/About.png';
import img2 from '../../Assets/abouticon1.svg';
import img3 from '../../Assets/abouticon2.svg';
import img4 from '../../Assets/abouticon3.svg';
import img5 from '../../Assets/abouticon4.svg';
import img6 from '../../Assets/abouticon5.svg';



function About(){
    return(
        <>
         <Helmet>
      <title>CamCrew | About</title>
      <meta 
      name="description"
      content="Get info About Camcrew"/>
      </Helmet>
        <div className="About">
            <div className="Aboutcon1">
                <div className="Aboutsubcon1">
                    <img src={img1} alt="about"/>
                </div>
                <div className="Aboutsubcon2">
                    <h1 className='Abouth1'>Who We Are</h1>
                    <div className='Abouttextarea'>
                    <p className='Aboutspan'><span className='aboutspan'>Camcrew.in is a Hyderabad based Startup,</span> offers a wide range of services, including provider of camera crews for the film and television camera rental, production support, and crew hiring.</p>

                    <p className='Aboutspan'>  One of the key features of Camcrew.in is their extensive network of highly skilled and experienced camera crews. We have a team of professionals that includes Photographers, cinematographers, camera operators, gaffers, and grips, who have worked on a variety of projects, including feature films, commercials, music videos, Big fat Weddings.</p>

                    <p className='Aboutspan'>  In addition to our services, Camcrew.in also offers a wide range of equipment rental options, including cameras, lenses, lighting, and grip equipment. We have a variety of the latest cameras available for rental, such as the Black Magic Pocket, Canon and Sony's range of cameras. This makes us a one-stop-shop for all your production needs.</p>

                    <p className='Aboutspan'>  Another unique aspect of Camcrew.in is our commitment to customer service. The company's goal is to provide their clients with a hassle-free and smooth experience, whether they're a first-time filmmaker or an experienced production company. They provide customized solutions for each project, which helps clients to get the best results for their production needs.</p>
                    <button className='Aboutbutton'><NavLink to="/Contact" className="aboutbuttext"><p className='Aboutbuttontext'>Make An Enquiry!</p></NavLink></button>

                    </div>

                    {/* <button class="btn btn-slide-left">Make An Enquiry!</button> */}

                </div>
            </div>
            <div className="Aboutcon2">
                <div className='Aboutsubcon3'>
                    <h1 className='Abouth1-1'>We are delivering beautiful digital products for you</h1>
                </div>
                <div>
                <hr></hr></div>
                <div className='aaaaaa'>
                <div className="Aboutsubcon4">
                    <div className="Aboutsubcon4-1">
                        <div className="Aboutsub4-1-1">
                            <div className="Aboutsub4-1-2">
                                    <img src={img2} alt="icon"/>
                            </div>
                            <div className="Aboutsub4-1-3">
                                <h1 className='Aboutsub4h1'>Expert Photographers at Your Service</h1>
                            </div>
                        </div>
                        <hr className="Abouthrline"></hr>
                        <div className="Aboutsub4-2-1">
                            <p className='Aboutsub4p'>Our team of photographers are experts in their field, so you can rest assured that no detail is too small for them to capture. We have a wide range of styles and techniques that we use to make sure your photos look amazing.</p>
                        </div>
                    </div>
                    <div className="Aboutsubcon4-1">
                        <div className="Aboutsub4-1-1">
                            <div className="Aboutsub4-1-2">
                                    <img src={img3} alt="icon"/>
                            </div>
                            <div className="Aboutsub4-1-3">
                                <h1 className='Aboutsub4h1'>High Quality Images Guaranteed</h1>
                            </div>
                        </div>
                        <hr className="Abouthrline"></hr>
                        <div className="Aboutsub4-2-1">
                            <p className='Aboutsub4p'>We guarantee that every photo taken by our team will be printed in high quality. We use state-of-the-art cameras and lenses so you can be sure that your images will be crisp and clear, no matter what kind of event you're hosting.</p>
                        </div>
                    </div>
                    <div className="Aboutsubcon4-1">
                        <div className="Aboutsub4-1-1">
                            <div className="Aboutsub4-1-2">
                                    <img src={img4} alt="icon"/>
                            </div>
                            <div className="Aboutsub4-1-3">
                                <h1 className='Aboutsub4h1'>Affordable Photography Services</h1>
                            </div>
                        </div>
                        <hr className="Abouthrline"></hr>
                        <div className="Aboutsub4-2-1">
                            <p className='Aboutsub4p'>Choose from our reliable and affordable packages to suit your budget. With no hidden charges or long term contracts, you can get great value for your money!</p>
                        </div>
                    </div>
                    <div className="Aboutsubcon4-1">
                        <div className="Aboutsub4-1-1">
                            <div className="Aboutsub4-1-2">
                                    <img src={img5} alt="icon"/>
                            </div>
                            <div className="Aboutsub4-1-4">
                                <h1 className='Aboutsub4h1'>Flexible Booking Options</h1>
                            </div>
                        </div>
                        <hr className="Abouthrline"></hr> 
                        <div className="Aboutsub4-2-1">
                            <p className='Aboutsub4p'>We make booking photographers easy and convenient with our flexible booking options. You can book appointment online or speak with one of our customer service representatives if you have any questions or concerns about your order.</p>
                        </div>
                    </div>  
                    
                </div>
                <div className='Aboutimageicon'>
                        <img src={img6} alt="icon"/>
                    </div>
            </div>
            </div>
        </div>
        
        </>
    );
}

export default About;