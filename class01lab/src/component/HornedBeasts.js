import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


class HornedBeasts extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            numOfLikes: 0
        }
    }    
    increaseNumOfLikes = () =>{
        this.setState(
            {
                numOfLikes: this.state.numOfLikes + 1
            }
        );
        
    }
    render(){
        return(
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.props.imageUrl} />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                    <p>{this.props.description}</p>
                    <p>❤️ {this.state.numOfLikes}</p>
                    </Card.Text>
                    <Button variant="primary" onClick={this.increaseNumOfLikes}>❤️Like</Button>
                </Card.Body>
            </Card>
            // <section>
            //     <h2>{this.props.title}</h2>
            //     <p>❤️ {this.state.numOfLikes}</p>
            //     <img onClick={this.increaseNumOfLikes} src={this.props.imageUrl} alt={this.props.title} title={this.props.title} width={300} />
            //     <p>{this.props.description}</p>
            // </section>
        );
    }
}

export default HornedBeasts;