import { Autocomplete, Button, Checkbox, ToggleButton } from "@mui/material";
import { ButtonGroup } from "react-bootstrap";
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import { Route, Link } from 'react-router-dom';
const Section1 = () => {
    return (
        <>
            <section className="Navigation">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <div className="nav-icon">
                                <a href="#xx"><i class="bi bi-twitter"></i> BB'S</a>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="nav-btns">
                                <button className="btn " type="button"><i class="bi bi-twitter"></i>sign in</button>
                                <button className="btn " type="button"><i class="bi bi-twitter"></i>sign out</button>
                            </div>
                        </div>

                    </div>

                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <div className="centeral-icon">
                                <a href=""><i class="bi bi-twitter"></i></a>
                                <h1>Welcome To BB</h1>
                                <h6>AI And Robotic's Technology News</h6>
                                <button className="btn btn-success btn-lg" type=""><a href="#xx">Get Started</a>   </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Section1;

