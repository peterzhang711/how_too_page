import React, { useReducer, useEffect } from "react";

import "./assets/sass/app.scss";
import { rootReducer, initialState } from "./store/reducer";
import Sidebar from "./components/Sidebar";
import Accordion from "./components/Accordion";
import Hamburger from "./components/BurgerMenu";

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { Container, Row, Col, Button } from "react-bootstrap";
import axios from "axios";


function App() {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  useEffect(() => {
    axios
      .get("./content.json")
      .then((res) => {
        dispatch({ type: "GET_ACCORDION_INFOS_SUCCESS", load: res.data });
      })
      .catch((err) => {
        dispatch({ type: "GET_ACCORDION_INFOS_FAILED", err });
      });
  }, []);


  return (
    <div className="App">
      <Container fluid>
        <Row>
          <ContentContext.Provider value={{ state, dispatch }}>
            <Col lg={4} md={12}>
              <Sidebar />
            </Col>
            <Col lg={8} md={12}>
              <Hamburger />
              <Accordion />
              <Row className="buttons">
                <Button>
                  <MdKeyboardArrowLeft className="icon" />
                  Back
                </Button>
                <Button>
                  <MdKeyboardArrowRight className="icon" />
                  Next
                </Button>
              </Row>
            </Col>
          </ContentContext.Provider>
        </Row>
      </Container>
    </div>
  );
}

export const ContentContext = React.createContext();
export default App;
