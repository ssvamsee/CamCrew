import { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';
import Form from 'react-bootstrap/Form';

function Forms() {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [subject, setSubject] = useState('');
  const [budget, setBudget] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Convert state values into FormData so Formboost can read them
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('mobile', mobile);
    formData.append('subject', subject);
    formData.append('budget', budget);
    formData.append('message', message);
    formData.append('_replyto', email);

    try {
        const response = await fetch(
            'https://formboost.app/f/9icdylii',
            {
                method: 'POST',
                body: formData,
            }
        );

        if (!response.ok) {
            throw new Error('Failed to submit form');
        }

        setName('');
        setEmail('');
        setMobile('');
        setSubject('');
        setBudget('');
        setMessage('');

        setShow(false);

        alert("Thank you! We'll be in touch.");
    } catch (error) {
        console.error('Form submission failed:', error);
        alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div ref={ref}>
        <div className="formsidebuttoncon">
          <button className="Formsidebutton" onClick={handleClick}>
            <p className="text">MAKE AN ENQUIRY!</p>
          </button>
        </div>
      <Overlay
        show={show}
        target={target}
        placement="left"
        container={ref}
        containerPadding={20}
      >
        <Popover id="popover-contained">
          <Popover.Header as="h3">Let's Talk?</Popover.Header>
          <p className='popoverp'>Let's make something awesome together</p>

            <Popover.Body>
                <Form className='popoverbody' autoComplete='off' onSubmit={handleSubmit}>
                    <Form.Group className="popform" controlId="formBasicText">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" required onChange={(e)=>setName(e.target.value)} value={name}/>
                    </Form.Group>
                    <Form.Group className="popform" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" required onChange={(e)=>setEmail(e.target.value)} value={email}/>
                    </Form.Group>

                    <Form.Group className="popform" controlId="formBasicNumber">
                        <Form.Label>Mobile number</Form.Label>
                        {/* Note: changed type to "text" or "tel" because HTML5 number inputs ignore maxLength */}
                        <Form.Control type="tel" required onChange={(e)=>setMobile(e.target.value)} value={mobile} maxLength="10"/>
                    </Form.Group>

                    <Form.Group className="popform" controlId="formBasicSubject">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control type="text" required onChange={(e)=>setSubject(e.target.value)} value={subject}/>
                    </Form.Group>

                    <Form.Group className="popform" controlId="formBasicBudget">
                        <Form.Label>Budget</Form.Label>
                        <Form.Control type="text" required onChange={(e)=>setBudget(e.target.value)} value={budget}/>
                    </Form.Group>

                    <Form.Group className="popform" controlId="formBasicMessage">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={2} required onChange={(e)=>setMessage(e.target.value)} value={message}/>
                    </Form.Group>             
                    <Button variant="primary" type="submit" className='Formsendbutton'>Send</Button>
                </Form>
          </Popover.Body>
        </Popover>
      </Overlay>
    </div>
  );
}

export default Forms;