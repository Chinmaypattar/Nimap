import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import DropdownComponent from "../Components/DropdownComponent";
import { data } from "../Utils/Commondata";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: data[0].description,
      title: data[0].name,
    };
  }
  componentDidMount(){
    this.props.activateLink()
  }

  onChange = (data) => {
    this.setState({ description: data.description, title: data.name });
  };
  render() {
    const { description, title } = this.state;
    return (
      <React.Fragment>
        <div style={{ margin: "30px" }}>
          <UncontrolledDropdown size="lg">
            <DropdownToggle caret>Technologies</DropdownToggle>
            <DropdownMenu>
              {data.map((item) => {
                return (
                  <React.Fragment>
                    <div onClick={() => this.onChange(item)}>
                      <DropdownItem>{item.name}</DropdownItem>
                      <DropdownItem divider />
                    </div>
                  </React.Fragment>
                );
              })}
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>

        <Container>
          <Row>
            <Col>
              <h1 style={{ textAlign: "center" }}> {title}</h1>
              <p>{description}</p>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
