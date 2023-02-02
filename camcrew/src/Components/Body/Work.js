import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';


function Work(){
      return(
       
        <>
        <div className="Work">
            <div className="Worktextcon">
                <h1 className="Worktext1">WANT TO WORK WITH US <span className="Workspan">?</span></h1>
            </div>
            <div className="formcon">
                <div className='workformcon'>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" required  className="formcontrol"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicNumber">
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control type="number" required className="formcontrol" />
                    </Form.Group> 
                    <div className='forminline'>
                    <Form.Group className="mb-3">
                    <Form.Label>Applying For</Form.Label>
                    <Form.Select aria-label="Default select example" required className='workoptionlist'>
                        <option>Video Editor</option>
                        <option value="1">Photoshop Designer/Lightroom Specialist</option>
                        <option value="2">Wedding Photographer</option>
                        <option value="3">Cameraman</option>
                        <option value="4">Graphic Designer</option>
                        <option value="5">Others</option>
                    </Form.Select> 
                    </Form.Group>
                    <Form.Group controlId="formFile" className="mb-3">
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

      <Accordion.Item eventKey="2">
        <Accordion.Header>Wedding Photographer</Accordion.Header>
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

      <Accordion.Item eventKey="3">
        <Accordion.Header>Cameraman</Accordion.Header>
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

    </Accordion>
                    </div>
                </div>
            </div>
        </div>
        
        </>
    );
}
export default Work;