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

export default class ChangePassword extends Component {
  constructor(props){
    super(props)
    // const data =this.props.location.state.data
    this.state={
        // details:this.props.location.state.data,
        userName:"",
        password:""
    }
    console.log("Password cHaneg",this.state.details)
  }

  componentDidMount(){
    console.log("Login props",this.props)
    this.getData()
  }
  getData= async()=>{
    const data = await  localStorage.getItem('userName');
    // const data1 = await  localStorage.getItem('password');
    console.log("Local Data", data);
    this.setState({userName:data},()=>{
      console.log("LOCAL datra",this.state.userName)
    })
  }
  onLogout=()=>{
    this.props.history.push("/")
  }
  onSavePassword=()=>{
    const password = this.state.password
    localStorage.setItem('password', JSON.stringify(password));
      this.props.history.push('/login',)
  }
  handlePassword=(x)=>{
    console.log("HAndle password",x);
    const name = x.target.name;
    const value = x.target.value;
    this.setState({ [name]: value }, () => {
      console.log("37", this.state);
    });

  }
  render() {
    return (
      <React.Fragment>
        <Container fluid>
          <Row>
            <Col></Col>
            <Col sm={8} lg={6}>
              <Card style={{padding:'20px'}}>
              <CardHeader>
                  <p>Change Your Password</p>
              </CardHeader>
                <FormGroup row style={{margin:'20px'}}>
                  <Label for="userName" >
                    User Name
                  </Label>
                  <Col sm={10}>
                    <Input
                      id="exampleEmail"
                      value={this.state.userName}
                      contentEditable={false}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row style={{margin:'20px'}}>
                  <Label for="Password" >
                    Password
                  </Label>
                  <Col sm={10}>
                    <Input
                      type="text"
                      name="password"
                      id="Password"
                      placeholder="Enter New Password"
                      onChange={this.handlePassword}
                    />
                  </Col>
                </FormGroup>
                <CardFooter>
                <Button onClick={()=>this.onSavePassword()}  color="info">Save Password</Button>
                <Button onClick={()=>this.onLogout()} style={{marginLeft:'10%',width:'100px'}} color="danger">Logout</Button>
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
