import React, { Component } from 'react';
import Slider from 'react-slick'
import Film from './Film.js';

class FilmList extends Component {
    constructor(props) {
        super (props);
        this.state = {
            activeIndex: 0
        };        
    }    
    render() {
        console.log(this.props.films.length);

        var settings = {
            dots: false,
            arrows: true,
            infinite: true,
            speed: 500,
            slidesToShow: 8,
            slidesToScroll: 1
        };        
        return (  
          <div className="slider">
            <Slider {...settings}>
                {this.props.films.map((film, index) => <Film key={film.id} film={film} />)} 
            </Slider> 
          </div>
        );
      }
}

export default FilmList;