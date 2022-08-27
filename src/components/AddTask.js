import React from 'react';
// import "./AddTask.css";
import {Container,Row,Col,Button,Form,Image} from "react-bootstrap";
// import img2 from '../images/2.gif';

class AddTask extends React.Component {
    minDate = new Date().toLocaleString().slice(0,10)
    state = { 
        text:"",
        prioritet:false,
        date:this.minDate,
        
    } 
   

    

    handleTask=(e)=>{
        this.setState({
            text: e.target.value
        })
    }

    handlePrioritet=(e)=>{
        this.setState({
            prioritet: !this.state.prioritet
        })
    }

    handleDate=(e)=>{
        this.setState({
            date: e.target.value
        })
    }
    handleClick=()=>{
        const {text,prioritet,date}= this.state;
        if(this.state.text){
        const add =this.props.add(text, prioritet, date)
        if(add){
            this.setState({
                text:"",
                prioritet:false,
                date:this.minDate,
            })

        }}else {
           alert  ("write something")
        }
    }
     
    render() { 
        let maxDate = this.minDate.slice(0,4)*1 +1;
         maxDate = maxDate + "-01-01";

        return (<Container className='AddTask '>
            <Form>

            <Row className="d-flex justify-content-center align-items-center row1 ">
                <Col md={4}> 
                <Form.Control placeholder="Add Task" type="text" value={this.state.text} onChange={this.handleTask} >
                    
                </Form.Control>
                </Col>
                <Col md={2} xs={4}>
                    <Form.Control type="date" value={this.state.date} onChange={this.handleDate} min={this.minDate} max={maxDate}>

                    </Form.Control>
                
                </Col>
                <Col md={3} xs={3}>
                    <Form.Group  id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Priority" checked={this.state.prioritet} onChange={this.handlePrioritet} />    

                    </Form.Group>
               
               
              
         
                </Col>
                
            </Row>
            </Form>
            <Row>
                <Col className="d-flex justify-content-center align-items-center ">
                <Button onClick={this.handleClick} className="btn-danger btn1">Add</Button>
                </Col>
      
            </Row>
            {/* <Row>
            <Image src={img2} >
            </Image> 
           
            </Row> */}
       

        </Container>);
    }
}

 
export default AddTask;
