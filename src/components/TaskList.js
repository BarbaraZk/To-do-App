
import React from 'react';
import "./TaskList.css";
import Task from "./Task";
import {Container, ListGroup,Row,Col,Image} from "react-bootstrap";
import img2 from '../images/2.gif';


const TaskList = (props) => {
    const active = props.tasks.filter(task=>task.active===true);
    const done = props.tasks.filter(task=>task.active===false);
      if(done.length>1){
    done.sort((a,b)=>{
    
        if(a.finishDate < b.finishDate){
            return 1
        }
        if(a.finishDate > b.finishDate){
            return -1
        }
        return 0
    })
}
// if(active.length>2){
//     console.log(active)
//     active.sort((a,b)=>{
//         a = a.name.toLowerCase();
//         b = b.name.toLowerCase();

//         if(a < b){
//             return -1
//         }
//         if(a>b){
//             return 1
//         }
//         return 0
// })
// }
    const activeTasks = active.map(task=><Task id={task.id} key={task.id} task={task} delete={props.delete} changeStatus={props.changeStatus}/>);
    const doneTasks = done.map(task=><Task id={task.id} key={task.id} task={task} delete={props.delete} changeStatus={props.changeStatus}/>)
    return ( <Container >
        <Row>
            <Col md={6}>
                
                <ListGroup variant="flush"
                className="TaskListToDo">To do ({active.length})
            <ListGroup.Item className="ToDo">
            {active.length >=1 ? activeTasks : ""}
            </ListGroup.Item>  
        </ListGroup>

                
                
                <ListGroup variant="flush" className="TaskListDone">Done ({done.length})
            <ListGroup.Item className="Done">
            {done.length >=1 ? doneTasks : ""}
            </ListGroup.Item>  
        </ListGroup>
               
          
        
            </Col>
            <Col md={6}>
            <Image src={img2} className="w-100" >
            </Image>
            </Col>
       
        </Row>
       

    </Container> );
}
 
export default TaskList;


