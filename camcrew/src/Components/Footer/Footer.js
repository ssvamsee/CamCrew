import { IconContext } from 'react-icons';
import img1 from '../../Assets/footericon1.svg';
import img2 from '../../Assets/footericon2.svg';
import img3 from '../../Assets/footericon3.svg';
import img4 from '../../Assets/logo1.svg';
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

function Footer(){
    return(
        <>
        <div className="Footer">
            <div className="Footer1">
                <div className="Footer1-1">
                    
                    {/* Block 1: Happy Clients */}
                    <div className="Aboutsub4-1-1">
                        <div className="Aboutsub4-1-2">
                            <img src={img1} alt="icon"/>
                        </div>
                        <div className="Aboutsub4-1-3">
                            {/* FIX: Changed outer paragraph to a div, and inner paragraph to a span to prevent nested paragraph validation issues */}
                            <h1 className='Aboutsub4h1'>
                                <div className='hometext'>
                                    <span className='Footercountspan'>180+ </span>
                                    <span className='Footercountp'>HAPPY CLIENTS </span> 
                                </div>
                            </h1>
                        </div>
                    </div>

                    {/* Block 2: Photos Captured */}
                    <div className="Aboutsub4-1-1">
                        <div className="Aboutsub4-1-2">
                            <img src={img2} alt="icon"/>
                        </div>
                        <div className="Aboutsub4-1-3">
                            {/* FIX: Structural clean up */}
                            <h1 className='Aboutsub4h1'>
                                <div className='hometext'>
                                    <span className='Footercountspan'>90K+ </span>
                                    <span className='Footercountp'>PHOTOS CAPTURED </span>  
                                </div>
                            </h1>
                        </div>
                    </div>

                    {/* Block 3: Projects Completed */}
                    <div className="Aboutsub4-1-1">
                        <div className="Aboutsub4-1-2">
                            <img src={img3} alt="icon"/>
                        </div>
                        <div className="footersub4-1-3">
                            {/* FIX: Structural clean up */}
                            <h1 className='Aboutsub4h1'>
                                <div className='hometext'>
                                    <span className='Footercountspan'>500+ </span>
                                    <span className='Footercountp'>PROJECTS COMPLETED </span>  
                                </div>
                            </h1>
                        </div>
                    </div>

                </div>
            </div>
            
            <div className="Footer2">
                <div className='Footer2-1con'>
                    <div className='Footerlogocon'>
                        <NavLink to="/Home"> <img src={img4} alt="logo"/></NavLink>
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
                        <NavLink to="/Contact"><h1 className='Footerletstext'>Let's Talk?</h1></NavLink>
                    </div>
                </div>

                <div className='Footer2-1con'>
                    <div className='footerbuttoncon'>
                        {/* 
                          Note: Wrapping <NavLink> inside a button is perfectly functional, 
                          but you could alternatively use `as={NavLink} to="/Contact"` on a React Bootstrap Button 
                          if you encounter click boundary layout issues down the line. 
                        */}
                        <button className='Footerbutton'>
                            <NavLink to="/Contact"><p className='Footerbuttontext'>Make An Enquiry!</p></NavLink>
                        </button>
                    </div>
                </div>
            </div>

            <div className="Footer3">
                <div className='Footer3-1con'>
                    <h1 className='Footer3text'>TELANGANA</h1>
                    <pre className='Footer3num'>+91 98854 73939</pre>
                </div>
                <div className='Footer3-1con'>
                    <h1 className='Footer3text'>ANDHRA PRADESH</h1>
                    <pre className='Footer3num'>+91 99498 60503</pre>
                </div>
                <div className='Footer3-1con'>
                    <h1 className='Footer3text'>BENGULURU</h1>
                    <pre className='Footer3num'>+91 99498 60503</pre>
                </div>
                <div className='Footer3-1con'>
                    <h1 className='Footer3text'>CHENNAI</h1>
                    <pre className='Footer3num'>+91 99498 60503</pre>
                </div>
            </div>
            
            <div className="Footer4">
                <div className='Footer4-1con'>
                    <span className='copyright'>2023 © camcrew.net, All rights reserved.</span>
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