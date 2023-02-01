import img1 from '../../Assets/About.png';

function About(){
    return(
        <>
        <div className="About">
            <div className="Aboutcon1">
                <div className="Aboutsubcon1">
                    <img src={img1} alt="about"/>
                </div>
                <div className="Aboutsubcon2">
                    <h1 className='Abouth1'>Who We Are</h1>
                    <span className='Aboutspan'><span className='aboutspan'>Camcrew.in is a Hyderabad based Startup,</span> offers a wide range of services, including provider of camera crews for the film and television camera rental, production support, and crew hiring.<br/><br/>

                            One of the key features of Camcrew.in is their extensive network of highly skilled and experienced camera crews. We have a team of professionals that includes Photographers, cinematographers, camera operators, gaffers, and grips, who have worked on a variety of projects, including feature films, commercials, music videos, Big fat Weddings.<br></br><br/>

                            In addition to our services, Camcrew.in also offers a wide range of equipment rental options, including cameras, lenses, lighting, and grip equipment. We have a variety of the latest cameras available for rental, such as the Black Magic Pocket, Canon and Sony's range of cameras. This makes us a one-stop-shop for all your production needs.<br></br><br/>

                            Another unique aspect of Camcrew.in is our commitment to customer service. The company's goal is to provide their clients with a hassle-free and smooth experience, whether they're a first-time filmmaker or an experienced production company. They provide customized solutions for each project, which helps clients to get the best results for their production needs.<br></br><br/>
                    </span>
                    <button className='Aboutbutton'><p className='Aboutbuttontext'>Make An Enquiry!</p></button>
                </div>
            </div>
            <div className="Aboutcon2">

            </div>

        </div>
        
        </>
    );
}

export default About;