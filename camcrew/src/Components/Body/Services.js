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

function Services(){
    return(
        <>
            <div className="Service" id='Services'>
                <div className="Servicetextcon">
                    <h1 className="Servicetexthead">Our Services</h1>
                    <hr></hr>
                </div>
                <div className="Servicecon">
                <div className="Servicecontainer">
                    <div className="Servicecon1"><img src={img1} alt="service  "/></div>
                    <div className="Servicecon3"><img src={img2} alt="service  "/></div>
                    <div className="Servicecon4"><img src={img3} alt="service  "/></div>
                </div>
                <div className="Servicecontainer">
                    <div className="Servicecon5"><img src={img4} alt="service  "/></div>
                    <div className="Servicecon1"><img src={img5} alt="service  "/></div>
                    
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
                    </div>
                </div>
                <div className="Servicecontainer">
                    <div className="Servicecon1"><img src={img12} alt="service"/></div>
                    <div className="Servicecon3"><img src={img13} alt="service"/></div>
                    <div className="Servicecon4"><img src={img14} alt="service"/></div>
                </div>
                </div>
            </div>
        </>
    );
}
export default Services;