import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useState } from 'react';
import { Helmet } from 'react-helmet';


function Contact(){
    const[name,setName]=useState('');
  const[email,setEmail]=useState('');
  const[mobile,setMobile]=useState('');
  const[subject,setSubject]=useState('');
  const[budget,setBudget]=useState('');
  const[message,setMessage]=useState('');

  const handleSubmit=(e)=>{
    e.preventDefault();
    // console.log(name,email,mobile,subject,budget,message);
    const data={
      Name:name,
      Email:email,
      MobileNumber:mobile,
      Subject:subject,
      Budget:budget,
      Message:message,
    }
    axios.post('https://sheet.best/api/sheets/c6a1efb8-0fab-400a-b49c-187a50123976',data).then((response)=>{
      console.log(response);
      // To Clear text fields
      setName('');
      setEmail('');
      setMobile('');
      setSubject('');
      setBudget('');
      setMessage('');
    })
  }

    return(
        <>
         <Helmet>
      <title>CamCrew | Contact</title>
      <meta 
      name="description"
      content="Get info on CamCrew Contact page"/>
      </Helmet>
            <div className='contactformcon'>
                <div className='contactformheadcon'>
                <h3 className='contactletstalk'>Let's Talk?</h3>
            <p className='popoverp'>Let's make something awesome together</p></div>
            <Form className='popoverbody' autoComplete='off' onSubmit={handleSubmit}>
                    <Form.Group className="contactform" controlId="formBasicText">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" required  className='contactfortext' onChange={(e)=>setName(e.target.value)} value={name}/>
                    </Form.Group>
                    <Form.Group className="contactform" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" required className='contactfortext' onChange={(e)=>setEmail(e.target.value)} value={email}/>
                            {/* <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text> */}
                    </Form.Group>

                    <Form.Group className="contactform" controlId="formBasicNumber">
                        <Form.Label>Mobile number</Form.Label>
                        <Form.Control type="number" required className='contactfortext' maxLength={10} onChange={(e)=>setMobile(e.target.value)} value={mobile} />
                    </Form.Group>

                    <Form.Group className="contactform" controlId="formBasicText">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control type="text" required className='contactfortext' onChange={(e)=>setSubject(e.target.value)} value={subject}/>
                    </Form.Group>

                    <Form.Group className="contactform" controlId="formBasicText">
                        <Form.Label>Budget</Form.Label>
                        <Form.Control type="text" required className='contactfortext' onChange={(e)=>setBudget(e.target.value)} value={budget}/>
                    </Form.Group>

                    <Form.Group className="contactform" controlId="formBasicText">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={4} required className='contactfortextarea' onChange={(e)=>setMessage(e.target.value)} value={message} />
                    </Form.Group>
                  
                    
                    <Button variant="primary" type="submit" className='contactsendbutton'>Send</Button>
                </Form>
            </div>
        </>
    );
}
export default Contact;