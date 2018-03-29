import React, { Component } from 'react';

class Post extends Component {

    constructor(props) {
        super (props)
    }

    render() {  
        return(
            <div className="film-container">
                <img className="film-image" src={this.props.film.images.image[0].src}/>
                <div className="overlay">
                    <h4>{this.props.film.title}</h4>
                    <p className="film-length">Duration: <span className="hours">{this.props.film.durationMinutes} hour</span> <span className="minutes">{this.props.film.durationMinutes} minutes</span></p>
                    <p></p>
                </div>
            </div>
        );        
    }
}

export default Post;