import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SearchArea from './features/search/SearchArea';
import Reps from './features/search/Reps';
import Libs from './features/search/Libs';

class App extends React.Component {
  state = { message: "" }
  callbackFunction = (childData) => {
    this.setState({message: childData})
}

  render() {
    return (
      <Container className="w-100 h-100 p-5">
        <Row>
          <Col>
            <h1>Project Neutral</h1>
            <SearchArea parentCallback={this.callbackFunction} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Libs  query = {this.state.message}/>{' '}
          </Col>
          <Col>Searching for: {this.state.message}</Col>
          <Col>
            <Reps query = {this.state.message} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;