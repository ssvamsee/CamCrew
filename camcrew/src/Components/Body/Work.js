import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import { Helmet } from 'react-helmet';


function Work(){
      return(
        <>
         <Helmet>
      <title>CamCrew | Home</title>
      <meta 
      name="description"
      content="Get info about work of Camcrew"/>
      </Helmet>
        <div className="Work">
            <div className="Worktextcon">
                <h1 className="Worktext1">WANT TO WORK WITH US <span className="Workspan">?</span></h1>
            </div>
            <div className="formcon">
                <div className='workformcon'>
                <Form>
                    <Form.Group controlId="formBasicText">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" required  className="formcontrol"/>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" required className="formcontrol" />
                    </Form.Group>

                    <Form.Group controlId="formBasicNumber">
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control type="number" required className="formcontrol" />
                    </Form.Group> 
                    <div className='forminline'>
                    <Form.Group>
                    <Form.Label>Applying For</Form.Label>
                    <Form.Select aria-label="Default select example" required className='workoptionlist'>
                        <option className='workformoption'>Video Editor</option>
                        <option className='workformoption' value="1">Photoshop Designer/Lightroom Specialist</option>
                        <option className='workformoption' value="2">Wedding Photographer</option>
                        <option className='workformoption' value="3">Cameraman</option>
                        <option className='workformoption' value="4">Graphic Designer</option>
                        <option className='workformoption' value="5">Others</option>
                    </Form.Select> 
                    </Form.Group>
                    <Form.Group controlId="formFile" >
                        <Form.Label>Attach Your Resume </Form.Label>
                        <Form.Control type="file" className='workoptionlist formcontrol' />
                    </Form.Group>             
                    </div>
                    <Button variant="primary" type="submit" className='worksendbutton'>Send</Button>
                </Form>

                </div>
                <div className='workdropdowncon'>
                    <div className='worklistcon'>
                    {/* <div className='workdropdown1'>
                        <h1 className='workdropdownlist'>Video Editor</h1>
                    </div>
                    <div className='workdropdown1'>
                        <h1 className='workdropdownlist'>Photoshop Designer/Lightroom Specialist</h1>
                    </div>
                    <div className='workdropdown1'>
                        <h1 className='workdropdownlist'>Wedding Photographer</h1>
                    </div>
                    <div className='workdropdown1'>
                        <h1 className='workdropdownlist'>Cameraman</h1>
                    </div>
                    <div className='workdropdown1'>
                        <h1 className='workdropdownlist'>Graphic Designer</h1>
                    </div>
                    <div className='workdropdown1'>  
                        <h1 className='workdropdownlist'>Others</h1>
                    </div> */}
                    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Video Editor</Accordion.Header>
        <Accordion.Body>
        <h1 className='Accordionhead'>Responsibilities:</h1>
        <p className='Accordiontext'>
Reviewing and editing raw footage, including selecting and arranging the best takes
Assembling footage into a logical and cohesive sequence
Adding visual and audio effects, such as color correction, sound mixing, and special effects
Collaborating with the director, producer, and other members of the production team to ensure the final product meets the intended vision
Exporting and compressing final video files for distribution or broadcast
Staying up-to-date with the latest video editing software and technologies</p>
<h1 className="Accordionhead">Requirements:</h1><p className='Accordiontext'>
Bachelor's degree in film, video production, or a related field
Proven experience as a video editor, with a portfolio of work to demonstrate skills
Strong understanding of storytelling and visual communication
Proficiency in video editing software such as Adobe Premiere, Final Cut Pro, and Avid Media Composer
Experience with visual effects, color correction, and sound mixing
Strong attention to detail, with the ability to work under tight deadlines
Ability to work well in a team environment</p>
        </Accordion.Body>
      </Accordion.Item>
      <hr className="Accordionhr"></hr>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Photoshop Designer/Lightroom Specialist</Accordion.Header>
        <Accordion.Body>
        <h1 className='Accordionhead'>Responsibilities:</h1>
        <p className='Accordiontext'>
        Retouching and editing photographs using Adobe Photoshop and Lightroom software
Adjusting color, contrast, and other image properties to enhance the overall look and feel of the photograph
Removing blemishes, wrinkles, and other imperfections from photographs
Creating composites by combining multiple images
Collaborating with photographers, art directors, and other members of the creative team to ensure the final product meets the intended vision
Creating and maintaining image libraries
Staying up-to-date with the latest software and technologies
</p>
<h1 className="Accordionhead">Requirements:</h1><p className='Accordiontext'>
Bachelor's degree in graphic design, photography, or a related field
Proven experience as a Photoshop designer or Lightroom specialist, with a portfolio of work to demonstrate skills
Strong understanding of color theory, composition, and image manipulation
Proficiency in Adobe Photoshop and Lightroom software
Experience with visual effects and compositing
Strong attention to detail, with the ability to work under tight deadlines
Ability to work well in a team environment
</p>
        </Accordion.Body>
      </Accordion.Item>
      <hr className="Accordionhr"></hr>

      <Accordion.Item eventKey="2">
        <Accordion.Header>Wedding Photographer</Accordion.Header>
        <Accordion.Body>
        <h1 className='Accordionhead'>Responsibilities:</h1>
        <p className='Accordiontext'>
        Meeting with the bride and groom to discuss their photography needs and preferences
Planning and executing a photography plan for the wedding day
Capturing candid and posed shots of the ceremony, reception, and other special moments
Communicating with the wedding planner and other vendors to ensure smooth coordination
Editing and retouching photographs to ensure high-quality final images
Providing the couple with a final set of edited photographs in a timely manner
Staying up-to-date with the latest photography equipment and techniques
</p>
<h1 className="Accordionhead">Requirements:</h1><p className='Accordiontext'>
Proven experience as a wedding photographer with a portfolio of work to demonstrate skills
Strong understanding of composition, lighting, and color theory
Proficiency in photography equipment and software, such as Adobe Lightroom and Photoshop
Strong communication and interpersonal skills
Ability to work well under pressure and in a fast-paced environment
A flexible schedule and the ability to travel as required
Strong attention to detail
</p>
        </Accordion.Body>
      </Accordion.Item>
      <hr className="Accordionhr"></hr>

      <Accordion.Item eventKey="3">
        <Accordion.Header>Cameraman</Accordion.Header>
        <Accordion.Body>
        <h1 className='Accordionhead'>Responsibilities:</h1>
        <p className='Accordiontext'>
        Operating the camera and capturing footage for television, video production, live events, and other visual media.
Collaborating with the r members of the production team to ensure that the footage is of high quality and meets the intended vision.
Setting up and adjusting lighting equipment, sound equipment, and other technical equipment as needed
Maintaining and troubleshooting camera and other equipment
Managing and organizing footage, including logging, transferring, and archiving footage
Keeping abreast of new technologies and techniques in the field
Communicating with clients or other crew members to ensure that all requirements are met
</p>
<h1 className="Accordionhead">Requirements:</h1><p className='Accordiontext'>
Proven experience as a Cameraman with a portfolio of work to demonstrate skills
Strong understanding of composition, lighting, and camera operation
Proficiency in operating various types of cameras and related equipment
Strong attention to detail, with the ability to work under tight deadlines
Ability to work well in a team environment
Strong communication and interpersonal skills
A flexible schedule and the ability to travel as required
Experience with editing software, such as Adobe Premiere or Final Cut Pro
</p>
        </Accordion.Body>
      </Accordion.Item>
      <hr className="Accordionhr"></hr>

      <Accordion.Item eventKey="4">
        <Accordion.Header>Graphic Designer</Accordion.Header>
        <Accordion.Body>
        <h1 className='Accordionhead'>Responsibilities:</h1>
        <p className='Accordiontext'>
Reviewing and editing raw footage, including selecting and arranging the best takes
Assembling footage into a logical and cohesive sequence
Adding visual and audio effects, such as color correction, sound mixing, and special effects
Collaborating with the director, producer, and other members of the production team to ensure the final product meets the intended vision
Exporting and compressing final video files for distribution or broadcast
Staying up-to-date with the latest video editing software and technologies</p>
<h1 className="Accordionhead">Requirements:</h1><p className='Accordiontext'>
Bachelor's degree in film, video production, or a related field
Proven experience as a video editor, with a portfolio of work to demonstrate skills
Strong understanding of storytelling and visual communication
Proficiency in video editing software such as Adobe Premiere, Final Cut Pro, and Avid Media Composer
Experience with visual effects, color correction, and sound mixing
Strong attention to detail, with the ability to work under tight deadlines
Ability to work well in a team environment</p>
        </Accordion.Body>
      </Accordion.Item>
      <hr className="Accordionhr"></hr>

      <Accordion.Item eventKey="5">
        <Accordion.Header>Others</Accordion.Header>
        <Accordion.Body>
        <h1 className='Accordionhead'>For More Details Click Below:</h1>
        {/* <div class="wrapper"> */}
        <a  className="formlink" href=" https://forms.gle/W6e3bzkmSg9rdRDx8" target="blank"><span>Click Me!</span></a>
        {/* </div> */}
        </Accordion.Body>
      </Accordion.Item>
      <hr className="Accordionhr"></hr>
        
    </Accordion>
                    </div>
                </div>
            </div>
        </div>
        
        </>
    );
}
export default Work;