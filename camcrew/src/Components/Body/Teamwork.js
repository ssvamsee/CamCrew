import { Helmet } from 'react-helmet';
import img1 from '../../Assets/teamwork1.svg';
import img2 from '../../Assets/teamwork2.png';
import img3 from '../../Assets/teamwork3.png';
import img4 from '../../Assets/teamwork4.png';
import img5 from '../../Assets/Vector.svg';
import img6 from '../../Assets/wcu.svg';




function Teamwork(){
    return(
        <>
         <Helmet>
      <title>CamCrew | Team</title>
      <meta 
      name="description"
      content="Get info on CamCrew Team"/>
      </Helmet>
            <div className='Teamwork'>
                <div className="Teamwork1">
                    <p className="Teamworktext1">TEAMWORK BUILDS TRUST</p>
                    <h1 className="Teamworktext2">CREATIVE PEOPLE</h1>
                </div>
                <div className="Teamwork2">
                    <div className="Teamworksub2">
                        <div className="Teamworksub2-1">
                            <img src={img1} alt="teamwork"/>
                        </div>

                        <h1 className='teamworksubtext'>RAGHAV TAMMAREDDY</h1>
                        <p className='teamworksubtext1'>VFX-SUP</p>
                    </div>
                    <div className="Teamworksub2">
                        <div className="Teamworksub2-1">
                            <img src={img2} alt="teamwork"/>
                        </div>

                        <h1 className='teamworksubtext'>P MAHESH</h1>
                        <p className='teamworksubtext1'>CINEMATOGRAPHER, TFI</p>
                    </div>
                    <div className="Teamworksub2">
                        <div className="Teamworksub2-1">
                            <img src={img3} alt="teamwork"/>
                        </div>

                        <h1 className='teamworksubtext'>K SRINIVASAN</h1>
                        <p className='teamworksubtext1'>MSW,NITD</p>
                    </div>
                    <div className="Teamworksub2">
                        <div className="Teamworksub2-1">
                            <img src={img4} alt="teamwork"/>
                        </div>

                        <h1 className='teamworksubtext'>SURESH BUDDIGA</h1>
                        <p className='teamworksubtext1'>CG ARTIST</p>
                    </div>
                   


                </div>

            </div>  
            <div className='WCU'>
                <div className='WCUimgcon'>
                    <img src={img6} alt="WCU"/>
                    <div className='wcutext1'>
                        <p className="Teamworktext1">WHY CHOOSE US</p>
                        <div className='twcon1'>
                            <h1 className="twcontext1">We deliver 100% and provide instant response</h1>
                        </div>
                        <div className='twcon2'>
                            <p className="twcontext2">We the team at Camcrew.in is made up of experienced professionals who are dedicated to providing the best possible service to our clients. We understand the importance of having the right equipment for the job, and our in-house editors ensure the highest quality and consistency of our work. We are always on hand to provide expert advice and assistance.
</p>
                        </div>

                    </div>
                </div>
                <div>
                    
                </div>
            </div>           
        </>
    );
}
export default Teamwork;