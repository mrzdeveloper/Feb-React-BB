import Carousel from 'react-bootstrap/Carousel';
import AI1 from "../images/AI1.jpg"
import AI2 from "../images/AI2.jpg"
import AI3 from "../images/AI3.png"
import AI4 from "../images/AI4.jpg"
const Section2 = () => {
    return (<>
        <div className='master-frame'>
            <section className="MenuBar">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="top-menu-1">
                                <div id="xx" className="top-menu-2">
                                    <a href="#HOME">Home</a>
                                    <a href="#SERVISES">SERVISES</a>
                                    <a href="#PORTFOLIO">PORTFOLIO</a>
                                    <a href=""><i>icon0</i></a>
                                    <a href="#CLIENT">CLIENT</a>
                                    <a href="#TEAM">TEAM</a>
                                    <a href="#CONTACT">CONTACT</a>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            <section className="Slider">
                {/* fade */}
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={AI4}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={AI2}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={AI3}

                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={AI1}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </section>
        </div>
    </>
    );
}

export default Section2;