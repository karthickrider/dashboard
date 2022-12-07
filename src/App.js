import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/NavigationBar";
import { Container, Row, Col } from "react-bootstrap";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";

function App() {
  const image2 = require("./assets/profile-pic-01.jpg");
  const image3 = require("./assets/profile-pic-03.jpg");
  const image4 = require("./assets/profile-pic-02.jpg");
  const image5 = require("./assets/profile-pic-04.jpg");

  return (
    <>
      <div className="body">
        <NavigationBar />

        {/* start of overview session */}

        <Container fluid className="d-flex justify-content-between">
          <h4>Overview</h4>
          <button className="overview__button py-1 px-2">
            Add Funds &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <i class="bi bi-plus-circle-fill"></i>
          </button>
        </Container>
        {/* end of overview session */}

        {/* mobile view align */}

        <Col xxl={4} xl={4} lg={4} md={6} sm={12} xs={12} >
        <div className="mt-5 content__background p-4 mobile__view__align">
                <div className="user__details p-3">
                  <img src={image2} alt="user_image" />
                  <h6 className="mt-3">Nick Herasimenka</h6>
                  <small>United States</small>
                  <div className="icon__content">
                    <i class="bi bi-twitter profile__icons"></i>
                    <i class="bi bi-facebook profile__icons"></i>
                    <i class="bi bi-linkedin profile__icons"></i>
                    <i class="bi bi-whatsapp profile__icons"></i>
                  </div>
                  <hr />
                </div>
                <div className="mb-4 other__users d-flex justify-content-between">
                  <h6>Our Users</h6>
                  <i class="bi bi-three-dots-vertical three__dots"></i>
                </div>
                <div className="mb-4 sub__users d-flex justify-content-between">
                  <div className="sub__users__left d-flex">
                    <img className="me-4" src={image3} alt="user_image" />
                    <div>
                      <h6>Drew James</h6>
                      <span>United States</span>
                    </div>
                  </div>
                  <span className="mt-4">Mobile :8715674877</span>
                </div>

                <div className="mb-4 sub__users d-flex justify-content-between">
                  <div className="sub__users__left d-flex">
                    <img className="me-4" src={image4} alt="user_image" />
                    <div>
                      <h6>Bavid Kames</h6>
                      <span>United States</span>
                    </div>
                  </div>
                  <span className="mt-4">Mobile :8715674877</span>
                </div>

                <div className="sub__users d-flex justify-content-between">
                  <div className="sub__users__left d-flex">
                    <img className="me-4" src={image5} alt="user_image" />
                    <div>
                      <h6>Lavid Emes</h6>
                      <span>United States</span>
                    </div>
                  </div>
                  <span className="mt-4">Mobile :8715674877</span>
                </div>
              </div>
        </Col>

        {/* end of mobile view align */}

        {/* start of chart session */}

        <Container fluid>
          <Row className="mt-4">
            <Col xxl={8} xl={8} lg={8} md={6} sm={12} xs={12}>
              <Row>
                <Col
                  xxl={6}
                  xl={6}
                  lg={6}
                  md={12}
                  sm={12}
                  xs={12}
                  className="mb-4 p-4 content__background"
                >
                  <div className="d-flex justify-content-between">
                    <span className="statistics__content">Statistics</span>
                    <select
                      className="line_select"
                      name="dates"
                      id="dates"
                      form="dateform"
                    >
                      <option value="volvo">Last 6 months</option>
                      <option value="saab">Saab</option>
                      <option value="opel">Opel</option>
                      <option value="audi">Audi</option>
                    </select>
                  </div>
                  <PieChart />
                </Col>
                <Col
                  xxl={6}
                  xl={6}
                  lg={6}
                  md={12}
                  sm={12}
                  xs={12}
                  className="mb-4 p-4 content__background"
                >
                  <div>
                    <span className="sales__content">Sales Distribution</span>
                  </div>
                  <LineChart />
                </Col>
                <Row>
                  <Col
                    xxl={12}
                    xl={12}
                    lg={12}
                    md={12}
                    sm={12}
                    xs={12}
                    className="mt-1 p-5 content__background"
                  >
                    <p>Referrer</p>

                    <div className="table-responsive">
                      <table className="table table-hover content__table ">
                        <thead>
                          <tr>
                            <th>Location</th>
                            <th>Views</th>
                            <th>Sales</th>
                            <th>Conversion</th>
                            <th>Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>google.com</td>
                            <td>3746</td>
                            <td>752</td>
                            <td>43%</td>
                            <td>$19,291</td>
                          </tr>
                          <tr>
                            <td>facebook.com</td>
                            <td>8126</td>
                            <td>728</td>
                            <td>32%</td>
                            <td>$17,638</td>
                          </tr>
                          <tr>
                            <td>twitter.com</td>
                            <td>8836</td>
                            <td>694</td>
                            <td>28%</td>
                            <td>$16,218</td>
                          </tr>
                          <tr>
                            <td>Direct,email,IM</td>
                            <td>1173</td>
                            <td>645</td>
                            <td>24%</td>
                            <td>$14,421</td>
                          </tr>
                          <tr>
                            <td>Linkedin.com</td>
                            <td>2739</td>
                            <td>539</td>
                            <td>20%</td>
                            <td>$12,370</td>
                          </tr>
                          <tr>
                            <td>instagram.com</td>
                            <td>2739</td>
                            <td>539</td>
                            <td>20%</td>
                            <td>$12,370</td>
                          </tr>
                        </tbody>
                      </table>
                      <span className="show__more">Show More</span>
                    </div>
                  </Col>
                </Row>
              </Row>
            </Col>
            <Col className="" xxl={4} xl={4} lg={4} md={6} sm={12} xs={12}>
              <div className="content__background p-4 system__view__align">
                <div className="user__details p-3">
                  <img src={image2} alt="user_image" />
                  <h6 className="mt-3">Nick Herasimenka</h6>
                  <small>United States</small>
                  <div className="icon__content">
                    <i class="bi bi-twitter profile__icons"></i>
                    <i class="bi bi-facebook profile__icons"></i>
                    <i class="bi bi-linkedin profile__icons"></i>
                    <i class="bi bi-whatsapp profile__icons"></i>
                  </div>
                  <hr />
                </div>
                <div className="mb-4 other__users d-flex justify-content-between">
                  <h6>Our Users</h6>
                  <i class="bi bi-three-dots-vertical three__dots"></i>
                </div>
                <div className="mb-4 sub__users d-flex justify-content-between">
                  <div className="sub__users__left d-flex">
                    <img className="me-4" src={image3} alt="user_image" />
                    <div>
                      <h6>Drew James</h6>
                      <span>United States</span>
                    </div>
                  </div>
                  <span className="mt-4">Mobile :8715674877</span>
                </div>

                <div className="mb-4 sub__users d-flex justify-content-between">
                  <div className="sub__users__left d-flex">
                    <img className="me-4" src={image4} alt="user_image" />
                    <div>
                      <h6>Bavid Kames</h6>
                      <span>United States</span>
                    </div>
                  </div>
                  <span className="mt-4">Mobile :8715674877</span>
                </div>

                <div className="sub__users d-flex justify-content-between">
                  <div className="sub__users__left d-flex">
                    <img className="me-4" src={image5} alt="user_image" />
                    <div>
                      <h6>Lavid Emes</h6>
                      <span>United States</span>
                    </div>
                  </div>
                  <span className="mt-4">Mobile :8715674877</span>
                </div>
              </div>

              <Row>
                <Col
                  className="mt-3 p-4 content__background"
                  xxl={12}
                  xl={12}
                  lg={12}
                  md={12}
                  sm={12}
                  xs={12}
                >
                  <div className="product__video d-flex justify-content-between">
                    <h6>Product Video</h6>
                    <i class="bi bi-three-dots-vertical"></i>
                  </div>
                  <Container fluid>
                    <iframe className="mt-3"
                      width="100%"
                      height="205px"
                      src="https://www.youtube.com/embed/Oy6hk6Y7VHQ"
                      title="Empower your workforce with Hexnode MDM"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </Container>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        {/* end of chart session */}
      </div>
    </>
  );
}

export default App;
