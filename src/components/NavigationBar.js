import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { Nav, Badge } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Dropdown from "react-bootstrap/Dropdown";

function OffcanvasExample() {
  const image1 = require("../assets/profile-pic-01.jpg");
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand}  expand={expand} className="mb-3 navigation__bar">
          <Container fluid>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header className="offcanvas__header" closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  A C M E
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="offcanvas__bg">
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link className="list__hover p-3" href="#action1">
                    <i class="bi bi-house"></i>&nbsp;&nbsp;&nbsp; Home
                  </Nav.Link>
                  <Nav.Link className="list__hover active p-3" href="#action2">
                    <i class="bi bi-file-bar-graph"></i>&nbsp;&nbsp;&nbsp;
                    Dashboard
                  </Nav.Link>
                  <Nav.Link
                    className="list__hover p-3 d-flex justify-content-between"
                    href="#action2"
                  >
                    <div>
                      <i class="bi bi-chevron-down"></i> &nbsp;&nbsp;&nbsp;Inbox
                    </div>
                    <div>
                      <Badge pill className="sidebar__badge bg-danger">
                        New
                      </Badge>
                    </div>
                  </Nav.Link>

                  <Nav.Link className="list__hover p-3" href="#action2">
                    <i class="bi bi-list"></i>&nbsp;&nbsp;&nbsp; Products
                  </Nav.Link>
                  <Nav.Link className="list__hover p-3" href="#action2">
                    <i class="bi bi-gear"></i>&nbsp;&nbsp;&nbsp; Admin
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <div className="topbar__search">
              <Form className="ms-3 d-flex ">
                <i class="bi bi-search me-2 search__icon"></i>
                <input
                  type="search"
                  placeholder="Search transaction,invoices or help"
                  className="search__bar"
                  aria-label="Search"
                />
              </Form>
            </div>
            <Navbar.Brand className="d-flex ms-auto" href="#">
              <p class=" position-relative">
                <i class="bi bi-bell bell_icon"></i>
                <span class="position-absolute top-0 start-100 translate-middle p-1 bg-success border border-light rounded-circle">
                  <span class="visually-hidden">New alerts</span>
                </span>
              </p>

              <Dropdown className="main__dropdown">
                <Dropdown.Toggle id="dropdown-basic">
                  <span className="ms-2">John Doe</span>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item
                    className="px-3 py-2 dropdown_item"
                    href="#/action-1"
                  >
                    {" "}
                    <i class="bi bi-person icons"></i> &nbsp;&nbsp;
                    <span>My Profile</span>
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="px-3 py-2 dropdown_item"
                    href="#/action-2"
                  >
                    {" "}
                    <i class="bi bi-receipt icons"></i>&nbsp;&nbsp;
                    <span> Billing </span>
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="px-3 py-2 dropdown_item"
                    href="#/action-3"
                  >
                    {" "}
                    <i class="bi bi-box-arrow-right icons"></i>&nbsp;&nbsp;
                    <span> Logout </span>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown className="image__dropdown">
                <Dropdown.Toggle id="dropdown-basic">
                  <img
                    src={image1}
                    className="topbar__profile"
                    alt="profile_image"
                  />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item
                    className="px-3 py-2 dropdown_item"
                    href="#/action-1"
                  >
                    {" "}
                    <i class="bi bi-person icons"></i> &nbsp;&nbsp;
                    <span>My Profile</span>
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="px-3 py-2 dropdown_item"
                    href="#/action-2"
                  >
                    {" "}
                    <i class="bi bi-receipt icons"></i>&nbsp;&nbsp;
                    <span> Billing </span>
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="px-3 py-2 dropdown_item"
                    href="#/action-3"
                  >
                    {" "}
                    <i class="bi bi-box-arrow-right icons"></i>&nbsp;&nbsp;
                    <span> Logout </span>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <img
                src={image1}
                className="topbar__profile profile"
                alt="profile_image"
              />
            </Navbar.Brand>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;
