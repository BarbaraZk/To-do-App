import React from 'react';
import "./Task.css";
import { Container,Row,Col,Button,ListGroup, } from 'react-bootstrap';

const Task = (props) => {
    const {id, name, date, priority, active, finishDate} = props.task;
    const style= {
        fontWeight:"bold",
        color:"red",
        fontSize:17,
    }
    if(active)
    {
        return ( <Container className='active'>
            
            <Row className="row-task">
        

                <Col md={4} >
                    <ListGroup>
                        <ListGroup.Item>
                        <div style={priority ? style : null} className="act">{name}</div>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={4} >
                <ListGroup.Item className="date">
                {date} 
                        </ListGroup.Item> 
                </Col>
                <Col md={4} className="btnClass d-flex justify-content-center align-items-center "><Button onClick={()=>props.changeStatus(id)} className="btn-success btnTask d-flex justify-content-center align-items-center" >Complete</Button>
                <Button onClick={()=>props.delete(id)} className="btn-secondary btnTask" >Delete</Button>
                </Col>
         
              
            </Row>
            
            
    </Container> );  
    }
    else {
        const finish = new Date(finishDate).toLocaleString().slice(0,10);
        return(
            <Container className='done'>
                <Row className="row-task">
        

        <Col md={4}>
            <ListGroup>
                <ListGroup.Item>
                <div className="don">{name}</div>
                </ListGroup.Item>
            </ListGroup>
        </Col>
        <Col md={4}>
        <ListGroup.Item className='date'>
        {finish}
                </ListGroup.Item> 
        </Col>
        <Col lg={4} className="btnClass d-flex justify-content-center align-items-center "><Button onClick={()=>props.delete(id)} className="btn-secondar btnTask" >Delete</Button>
        
        </Col>
 
      
    </Row>
           
              
            </Container>
        )
    }
}
 
export default Task;

