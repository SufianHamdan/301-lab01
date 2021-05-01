import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



class HornedBeasts extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            numOfLikes: 0,
            show: false,
        }
    }    
    increaseNumOfLikes = () =>{
        this.setState(
            {
                numOfLikes: this.state.numOfLikes + 1
            }
        );
        
    }

    displayBeast = (e) => {
        this.props.popUpSelectedImg(this.props);
    }

    render(){
        return(
            <>
            <Card>
                <Card.Img variant="top" onClick={this.displayBeast}
                src={this.props.imageUrl} 
                title = {this.props.title}
                />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                    <p>{this.props.description}</p>
                    <p>❤️ {this.state.numOfLikes}</p>
                    </Card.Text>
                    <Button variant="primary" onClick={this.increaseNumOfLikes}>❤️Like</Button>
                </Card.Body>
            </Card>
            </>
        );
    }
}

export default HornedBeasts;