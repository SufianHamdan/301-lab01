import React from 'react';

class HornedBeasts extends React.Component{
    render(){
        return(
            <section>
                <h2>{this.props.title}</h2>
                <img src={this.props.imageUrl} alt={this.props.title} title={this.props.title} />
                <p>{this.props.description}</p>
            </section>
        );
    }
}

export default HornedBeasts;