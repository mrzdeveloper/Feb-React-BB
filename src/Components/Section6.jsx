import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';
import { AiFillAlert } from "react-icons/bs";
const Section6 = () => {
    return (<>
        <section className="contactus">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <div>
                            <h1></h1>
                            <span></span>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicname">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="email" placeholder="Enter Your Name" />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Example textarea</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group> */}
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>

        </section>


    </>);
}

export default Section6;