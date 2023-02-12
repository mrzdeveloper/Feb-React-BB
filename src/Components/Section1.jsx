import { Button } from "@mui/material";
import { ButtonGroup } from "react-bootstrap";

const Section1 = () => {

    return (
        <>
            <section className="Navigation">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <div className="nav-icon">
                                <a href=""><i></i></a>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="nav-btn">
                                <button className="btn" type="">sign in</button>
                                <button className="btn" type="">sign out</button>
                            </div>
                        </div>

                    </div>

                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <div className="centeral-icon">
                                <a href=""><i></i></a>
                            </div>
                        </div>
                    </div>

                </div>
            </section>



        </>
    );
}

export default Section1;

