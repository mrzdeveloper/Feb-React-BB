import macbook from "../images/macbook-pro.png"

const Section3 = () => {
    return (<>
        <section id="SERVISES" className="Servises">
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <div className="servises-1">
                            <h1>SERVISES</h1>
                            <div>
                                <span>loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem loremloremloremlorem</span>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-servise-2">
                        <div className="col-12 col-lg-6">
                            <div className="items">
                                <div className="icon">
                                    <a href=""><i className="bi-facebook"></i></a>
                                </div>
                                <div className="info">
                                    <h2>Servises</h2>
                                    <h6>alfasdflkjdfhlaksdjasdflasdjfasldfasjfs</h6>
                                    <h6>alfasdflkjdfhlaksdjasdflasdjfasldfasjfs</h6>
                                </div>
                            </div>
                            <div className="items">
                                <div className="icon">
                                    <a href=""><i className="bi-instagram"></i></a>
                                </div>
                                <div className="info">
                                    <h2>Servises</h2>
                                    <h6>alfasdflkjdfhlaksdjasdflasdjfasldfasjfs</h6>
                                    <h6>alfasdflkjdfhlaksdjasdflasdjfasldfasjfs</h6>
                                </div>
                            </div>
                            <div className="items">
                                <div className="icon">
                                    <a href=""><i className="bi-twitter"></i></a>
                                </div>
                                <div className="info">
                                    <h2>Servises</h2>
                                    <h6>alfasdflkjdfhlaksdjasdflasdjfasldfasjfs</h6>
                                    <h6>alfasdflkjdfhlaksdjasdflasdjfasldfasjfs</h6>
                                </div>
                            </div>

                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="img-servises">
                                <img src={macbook} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </section>


    </>);
}

export default Section3;