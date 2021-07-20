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
} from "reactstrap";
export default class User extends Component {
    constructor(props){
        super(props)
        this.state={
          userName:'',
          password:'',
          details:[]
        }
    }

    onLogin=(data)=>{
        // const history = this.props
        const name= this.state.userName
        const password= this.state.password
        localStorage.setItem('userName', JSON.stringify(name));
        localStorage.setItem('password', JSON.stringify(password));
        this.props.history.push('/login',{data})
    }


    handleChange = (x) => {
      const name = x.target.name;
      const value = x.target.value;
      this.setState({ [name]: value }, () => {

      });
      }

    Validate = () => {
      const newemail = this.state.emailId;
  
      if (this.state.userName.length == 0) {
        alert("Please enter User Name");
      } else if (this.state.password == "") {
        alert("Please enter the password");
       }else{
          const data = this.state.details
          data.push({"userName":this.state.userName,"password":this.state.password})
          console.log("Details array",data)
          this.setState({details:data})
          this.props.activateLink()
         this.onLogin(data);

       }
    };

  render() {
    return (
      <React.Fragment>
        <Container fluid>
          <Row>
            <Col></Col>
            <Col sm={8} lg={6}>
              <Card style={{padding:'20px'}}>
                <FormGroup row style={{margin:'20px'}}>
                  <Label for="userName">
                    User Name
                  </Label>
                  <Col sm={10}>
                    <Input
                      type="text"
                      name="userName"
                      id="userName"
                      placeholder="Please enter User Name "
                      onChange={this.handleChange}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row style={{margin:'20px'}}>
                  <Label for="examplePassword">
                    Password
                  </Label>
                  <Col sm={10}>
                    <Input
                      type="password"
                      name="password"
                      id="examplePassword"
                      placeholder="Please enter password"
                      onChange={this.handleChange}
                    />
                  </Col>
                </FormGroup>
                <CardFooter>
                <Button  onClick={()=>this.Validate()} style={{marginLeft:'40%',width:'100px'}} color="success">Login</Button>
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
