import React from 'react';

import HornedBeasts from './HornedBeasts';
import CardColumns from 'react-bootstrap/CardColumns';
// import data from './data';

class Main extends React.Component{
    render(){
        return(
            <>
            <CardColumns>
                {this.props.Data.map((data) => {
                return (
                        <HornedBeasts 
                        imageUrl = {data.image_url}
                        title = {data.title}
                        description = {data.description}
                        popUpSelectedImg = {this.props.popUpSelectedImg}
                        
                        />
                    );
                })}
            </CardColumns>
            </>
        );
    }
}

export default Main;