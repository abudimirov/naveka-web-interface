import React, { Component } from 'react';
import { MemoryRouter, Switch, Route } from 'react-router-dom';

import Settings from "./Components/Settings";
import Wifi from "./Components/Wifi";
import Home from "./Components/Home";
import Schedule from "./Components/Schedule";



import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ws: null
    };
  }

  // single websocket instance for the own application and constantly trying to reconnect.

  componentDidMount() {
    this.connect();
  }

  timeout = 250; // Initial timeout duration as a class variable

  /**
   * @function connect
   * This function establishes the connect with the websocket and also ensures constant reconnection if connection closes
   */
  connect = () => {
    var ws = new WebSocket("ws://192.168.1.4:81/",['arduino']);
    let that = this; // cache the this
    var connectInterval;

    // websocket onopen event listener
    ws.onopen = () => {
      console.log("connected websocket main component");

      this.setState({ ws: ws });

      that.timeout = 250; // reset timer to 250 on open of websocket connection
      clearTimeout(connectInterval); // clear Interval on on open of websocket connection
    };

    // websocket onclose event listener
    ws.onclose = e => {
      console.log(
          `Socket is closed. Reconnect will be attempted in ${Math.min(
              10000 / 1000,
              (that.timeout + that.timeout) / 1000
          )} second.`,
          e.reason
      );

      that.timeout = that.timeout + that.timeout; //increment retry interval
      connectInterval = setTimeout(this.check, Math.min(10000, that.timeout)); //call check function after timeout
    };

    // websocket onerror event listener
    ws.onerror = err => {
      console.error(
          "Socket encountered error: ",
          err.message,
          "Closing socket"
      );

      ws.close();
    };
  };

  /**
   * utilited by the @function connect to check if the connection is close, if so attempts to reconnect
   */
  check = () => {
    const { ws } = this.state;
    if (!ws || ws.readyState == WebSocket.CLOSED) this.connect(); //check if websocket instance is closed, if so call `connect` function.
  };

  render() {
    return (
        <MemoryRouter>
          <Container className="p-3">
            <Navbar bg="light" expand="lg">
              <LinkContainer to="/">
                <Navbar.Brand>Naveka</Navbar.Brand>
              </LinkContainer>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <LinkContainer to="/">
                  <Nav.Link>Главная</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/schedule">
                  <Nav.Link>Расписание</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/wifi">
                  <Nav.Link>Подключение к Wi-Fi</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/settings">
                  <Nav.Link>Настройки</Nav.Link>
                </LinkContainer>
              </Navbar.Collapse>
            </Navbar>

            <div>{' '}
              <Switch>
                <Route path="/settings">
                  <Settings />
                </Route>
                <Route path="/wifi">
                  <Wifi />
                </Route>
                <Route path="/schedule">
                  <Schedule />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </div>

          </Container>
        </MemoryRouter>
    )
  }
}


export default App;
