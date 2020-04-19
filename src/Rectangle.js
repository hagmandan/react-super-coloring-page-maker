import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Rectangle.scss';

class Rectangle extends Component {

  render(){
    const styles = {
      width: `${this.props.width}px`,
      height: `${this.props.height}px`,
      transform: `translate(${this.props.posx}%, ${this.props.posy}%)`
    };

    return (
      <span
        id={this.props.id}
        className="rectangle"
        style={styles}>
      </span>
    )
  }
}
Rectangle.propTypes = {
  id: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  posx: PropTypes.number,
  posy: PropTypes.number
}

export default Rectangle;