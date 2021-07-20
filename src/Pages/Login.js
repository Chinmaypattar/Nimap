import React, { Component } from "react";
import {
  Card,
  Button,
  CardFooter,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Container,
  Row,
  CardHeader,
} from "reactstrap";

export default class Login extends Component {
  constructor(props) {
    super(props);
    // const details = this.props.location.state.data || "";
    this.state = {
      userName: "",
      password: "",
    };
    
  }

  componentDidMount() {
    
    this.getData()
    this.props.activateLink()
    alert("Successfully Logged In");
  }

  getData= async()=>{
    const data = await  localStorage.getItem('userName');
    const data1 = await  localStorage.getItem('password');
    this.setState({userName:data,password:data1},()=>{
    })
  }
  onLogout = () => {
    this.props.disableLink()
    this.props.history.push("/");
  };
  onChangePassword = () => {
    const data = this.state.profile
    this.props.history.push("/changePassword",);
  };
  render() {
    return (
      <React.Fragment>
        <Container fluid>
          <Row>
            <Col></Col>
            <Col sm={8} lg={6}>
              <Card style={{ padding: "20px" }}>
                <CardHeader>
                  <p
                    style={{
                      textAlign: "center",
                      color: "green",
                      fontSize:"20px"
                    }}
                  >
                    Welcome {this.state.userName}
                  </p>
                </CardHeader>

                <div style={{fontSize:'25px',marginLeft:"20px"}}>
                  <p>
                    User Name : {this.state.userName}
                  </p>
                  <p>
                    Password : {this.state.password}
                  </p>
                </div>

                <CardFooter>
                  <Button onClick={() => this.onChangePassword()} color="info">
                    Change Password
                  </Button>
                  <Button
                    onClick={() => this.onLogout()}
                    style={{ marginLeft: "10%", width: "100px" }}
                    color="danger"
                  >
                    Logout
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
