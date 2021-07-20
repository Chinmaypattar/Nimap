import React, { Component } from "react";
import {
  Card,
  Button,
  CardFooter,
  Col,
  Container,
  FormGroup,
  Input,
  Label,
  Row,
  Table,
} from "reactstrap";

export default class Tasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskList: [],
      taskId: "",
      title: "",
      status: "true",
      userId: "",
      isOk: false,
    };
  }
  componentDidMount = () => {
    this.props.activateLink();
    // this.checkStatus();
     
      fetch("http://jsonplaceholder.typicode.com/todos")
        .then((res) => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              taskList: result,
            });
            console.log("Fetched State", result.completed);
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error,
            });
          }
        );
  };


  onDelete = (id) => {

    const updatedTasks = this.state.taskList.filter((items) => {
      return items.id !== id;
    });
 
    this.setState({ taskList: updatedTasks });
  };
  onAdd = () => {
    const { taskList, taskId, status, title, userId } = this.state;
    const tasks = this.state.taskList;

    tasks.push({"userId":userId,"id":taskId,"title":title})
  
     this.setState({taskList:tasks,isOk:false})
  };
  taskAdd=()=>{
    this.setState({ isOk: true }, () => {
    });
  }

  handleChange = (x) => {
    const name = x.target.name;
    const value = x.target.value;
    this.setState({ [name]: value }, () => {
    });
    }
  render() {
    return (
      <React.Fragment>
        {/* Testing */}
        {this.state.isOk ? (
        <div>
          <Container fluid>
            <Row>
              <Col></Col>
              <Col sm={8} lg={6}>
                <Card style={{ padding: "20px" }}>
                  <FormGroup row style={{ margin: "20px" }}>
                    <Label for="userId">User Id</Label>
                    <Col sm={10}>
                      <Input
                        type="text"
                        name="userId"
                        id="userId"
                        placeholder="Please enter User Id "
                        onChange={this.handleChange}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row style={{ margin: "20px" }}>
                    <Label for="taskId">Task Id</Label>
                    <Col sm={10}>
                      <Input
                        type="text"
                        name="taskId"
                        id="taskId"
                        placeholder="Please enter Task Id "
                        onChange={this.handleChange}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row style={{ margin: "20px" }}>
                    <Label for="title">Task title</Label>
                    <Col sm={10}>
                      <Input
                        type="text"
                        name="title"
                        id="title"
                        placeholder="Please enter User Title "
                        onChange={this.handleChange}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row style={{ margin: "20px" }}>
                    <Label for="status">Completed</Label>
                    <Col sm={10}>
                      <Input
                        type="text"
                        name="status"
                        id="status"
                        placeholder="Please enter Status of the task"
                        onChange={this.handleChange}
                      />
                    </Col>
                  </FormGroup>
                  <CardFooter>
                    <Button
                      onClick={() => this.onAdd()}
                      style={{ marginLeft: "40%", width: "100px" }}
                      color="success"
                    >
                      Add Task
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col></Col>
            </Row>
          </Container>
        </div>
        ):(
          null
        )}

        {/* end */}
        <Button
          style={{ margin: "20px" }}
          color="primary"
          onClick={() => this.taskAdd()}
        >
          {" "}
          Add Task
        </Button>
        {this.state.taskList.map((task) => {
          const a = task.completed;
          return (
            <React.Fragment>
              <Table style={{ width: "90%", marginLeft: "10%" }}>
                <tbody>
                  <tr>
                    <td style={{ width: "10%" }}>{task.id}</td>
                    <td style={{ width: "70%", textAlign: "center" }}>
                      {task.title}
                    </td>
                    <td>{task.completed}</td>
                    <td>
                      <Button
                        color="danger"
                        onClick={() => this.onDelete(task.id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </React.Fragment>
          );
        })}
      </React.Fragment>
    );
  }
}
