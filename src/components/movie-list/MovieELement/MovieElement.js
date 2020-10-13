import React, { Component } from 'react';
import Style from './MovieElement.module.scss'

export default class MovieElement extends Component {
    mouseEnter = () => {
        this.props.updateSelectedMovie(this.props.movies.title);
    }

    render() {
        return ( 
            <div onMouseEnter={this.mouseEnter} className={ " d-flex flex-row bg-light " + Style.container }>
                <img width="150" height="200" src={this.props.movies.img} alt="Film"/>
                <div className="flex-fill d-flex flex-column p-3">
                    <h5>
                        {this.props.movies.title}
                    </h5>
                    <hr className="w-100"/>
                    <p>
                        {this.props.movies.detail}
                    </p>
                </div>
            </div>
        );
    }
} 