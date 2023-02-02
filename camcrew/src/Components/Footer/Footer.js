import { IconContext } from 'react-icons';
import img1 from '../../Assets/footericon1.svg';
import img2 from '../../Assets/footericon2.svg';
import img3 from '../../Assets/footericon3.svg';
import img4 from '../../Assets/logo1.svg';
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';


function Footer(){
    return(
        <>
        <div className="Footer">
            <div className="Footer1">
                <div className="Footer1-1">
                    <div className="Aboutsub4-1-1">
                            <div className="Aboutsub4-1-2">
                                    <img src={img1} alt="icon"/>
                            </div>
                            <div className="Aboutsub4-1-3">
                                <h1 className='Aboutsub4h1'><p className='hometext'><span className='Footercountspan'>180+ </span><p className='Footercountp'>HAPPY CLIENTS </p> </p></h1>
                            </div>
                    </div>
                    <div className="Aboutsub4-1-1">
                            <div className="Aboutsub4-1-2">
                                    <img src={img2} alt="icon"/>
                            </div>
                            <div className="Aboutsub4-1-3">
                                <h1 className='Aboutsub4h1'><p className='hometext'><span className='Footercountspan'>90K+ </span><p className='Footercountp'>PHOTOS CAPTURED </p>  </p></h1>
                            </div>
                    </div>
                    <div className="Aboutsub4-1-1">
                            <div className="Aboutsub4-1-2">
                                    <img src={img3} alt="icon"/>
                            </div>
                            <div className="footersub4-1-3">
                                <h1 className='Aboutsub4h1'><p className='hometext'><span className='Footercountspan'>500+ </span><p className='Footercountp'>PROJECTS COMPLETED </p>  </p></h1>
                            </div>
                    </div>
                </div>
            </div>
            <div className="Footer2">
                    <div className='Footer2-1con'>
                        <div className='Footerlogocon'>
                            <img src={img4} alt="logo"/>
                        </div>
                        <div className="Footericons">
        <IconContext.Provider value={{ className: "shared-class", size: 30 }} >
            <AiOutlineFacebook/>
            <AiOutlineInstagram/>
            <AiOutlineTwitter/>
        </IconContext.Provider>
        </div>
                    </div>
                    <div className='Footer2-1con'>
                        <div className='Footertextcon1'>
                            <h1 className='Footerletstext'>Let's Talk?</h1>
                        </div>
        
                    </div>
                    <div className='Footer2-1con'>
                        <div className='footerbuttoncon'>
                        <button className='Footerbutton'><p className='Footerbuttontext'>Make An Enquiry!</p></button>
                        </div>
            
                    </div>
            </div>
            <div className="Footer3">
                <div className='Footer3-1con'>
                    <h1 className='Footer3text'>ANDHRA PRADESH</h1>
                    <pre className='Footer3num'>+91 9440 631668</pre>
                </div>
                <div className='Footer3-1con'>
                    <h1 className='Footer3text'>TELANGANA</h1>
                    <pre className='Footer3num'>+91 90006 94911</pre>
                </div>
                <div className='Footer3-1con'>
                    <h1 className='Footer3text'>BENGULURU</h1>
                    <pre className='Footer3num'>+91 91770 98908</pre>
                </div>
            </div>
            <div className="Footer4">
            <div className='Footer4-1con'>
                    <span className='copyright'>2023 © camcrew.in, All rights reserved.</span>
                </div>
                <div className='Footer4-1con'>
                    
                </div>
                <div className='Footer4-1con'>
                    
                <div><span className='copyright'>Terms</span></div>
                <div><span className='copyright'>Privacy Policies</span></div>
                <div><span className='copyright'>Cookies</span></div>

                </div>
            </div>
        </div>
        </>
    );
}

export default Footer;