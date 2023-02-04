import img1 from '../../Assets/service1.png';
import img2 from '../../Assets/service2.png';
import img3 from '../../Assets/service3.png';
import img4 from '../../Assets/service4.png';
import img5 from '../../Assets/service5.png';
import img6 from '../../Assets/service6.png';
import img7 from '../../Assets/service7.png';
import img8 from '../../Assets/service8.png';
import img9 from '../../Assets/service9.png';
import img10 from '../../Assets/service10.png';
import img11 from '../../Assets/service11.png';
import img12 from '../../Assets/service12.png';
import img13 from '../../Assets/service13.png';
import img14 from '../../Assets/service14.png';
import { Helmet } from 'react-helmet';

function Services(){
    return(
        <>
         <Helmet>
      <title>CamCrew | Services</title>
      <meta 
      name="description"
      content="Get info on CamCrew Services"/>
      </Helmet>
            <div className="Service" id='Services'>
                <div className="Servicetextcon">
                    <h1 className="Servicetexthead">Our Services</h1>
                    <hr></hr>
                </div>
                <div className="Servicecon">
                <div className="Servicecontainer">
                    <div className="Servicecon1">
                        <img className='serviceimg1' src={img1} alt="service  "/>
                            <div class="overlay">
                                <div class="content">
                                    <h1 className='servicehoverh1'>Service Name</h1>
                                    <p className='servicehoverp'> need some text here</p>
                                </div>
                            </div>
                    </div>
                    <div className="Servicecon3">
                        <img className='serviceimg1' src={img2} alt="service  "/>
                        <div class="overlay">
                                <div class="content">
                                    <h1 className='servicehoverh1'>4K Camcorders</h1>
                                    <p className='servicehoverp'> AVC HD 4K camcorders are video cameras that are capable of recording high-definition video at 4K resolution, which is four times the resolution of Full HD. They typically use advanced image sensors and processors to deliver high-quality images and videos, and often feature advanced features such as manual controls and interchangeable lenses for professional use.
</p>
                                </div>
                            </div>
                    </div>
                    <div className="Servicecon4"><img src={img3} alt="service  "/></div>
                </div>
                <div className="Servicecontainer">
                    <div className="Servicecon5">
                        <img className='serviceimg1' src={img4} alt="service  "/>
                            <div class="overlay1">
                                <div class="content1">
                                    <h1 className='servicehoverh1'>Chroma Keying</h1>
                                    <p className='servicehoverp'> In video production, blue and green screen mattes are commonly used to composite two separate images together in post-production. This process is called chroma keying and it is used to remove the background and replace it with another image or video. This allows the video to be composited with other elements like special effects, virtual sets, and other background footage.</p>
                                </div>
                            </div>
                    </div>
                    <div className="Servicecon1">
                        <img className='serviceimg1' src={img5} alt="service  "/>
                        <div class="overlay">
                                <div class="content">
                                    <h1 className='servicehoverh1'>Live Streaming Service</h1>
                                    <p className='servicehoverp'> We are offering a professional live streaming service that provides high-quality video production and streaming solutions for a variety of events and platforms. Whether it's a corporate event, concert, or online class, CamCrew.in has the equipment and expertise to make your live stream a success.</p>
                                </div>
                            </div>
                        </div>
                    
                </div>
                <div className="Servicecontainer">
                    <div className="Servicecon1"><img src={img6} alt="service  "/></div>
                    <div className="Servicecon6">
                 
                        <div className="Servicesubcontainer">
                            <div className="Servicesubcon1"><img src={img7} alt="service  "/></div>
                            <div className="Servicesubcon2"><img src={img8} alt="service  "/></div>
                        </div>
                        <div className="Servicesubcontainer1"><img src={img9} alt="service  "/></div>
                        <div className="Servicesubcontainer">
                            <div className="Servicesubcon1"><img src={img10} alt="service  "/></div>
                            <div className="Servicesubcon2"><img src={img11} alt="service  "/></div>
                        </div>
                        <div class="overlay1">
                                <div class="content1">
                                    <h1 className='servicehoverh1'>Live Streaming Service</h1>
                                    <p className='servicehoverp'> We are offering a professional live streaming service that provides high-quality video production and streaming solutions for a variety of events and platforms. Whether it's a corporate event, concert, or online class, CamCrew.in has the equipment and expertise to make your live stream a success.</p>
                                </div>
                            </div>
                    </div>
                </div>
                <div className="Servicecontainer">
                    <div className="Servicecon1"><img src={img12} alt="service"/>
                    <div class="overlay">
                                <div class="content2">
                                    <h1 className='servicehoverh1'>Post-Production</h1>
                                    <p className='servicehoverp'> We use Adobe Creative Suite for graphic design, video editing. It includes popular applications such as Photoshop, Illustrator, InDesign, Premiere Pro, and After Effects, providing users with a comprehensive set of tools for creating and editing digital content.</p>
                                </div>
                            </div>
                    </div>
                    <div className="Servicecon3"><img src={img13} alt="service"/></div>
                    <div className="Servicecon4"><img src={img14} alt="service"/></div>
                </div>
                </div>
            </div>
        </>
    );
}
export default Services;