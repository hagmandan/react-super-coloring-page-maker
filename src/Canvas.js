import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Canvas.scss';
import Rectangle from './Rectangle';

import getRandomInt from './utils/getRandomInt';

class Canvas extends Component {
  state = {
    allRectangles: this.props.rectangleElements
  }

  shouldComponentUpdate(nextProps, nextState) {
    // console.log('shouldComponentUpdate', nextProps, nextState)
    // console.log(this.props.numRectangles, nextProps.numRectangles);
    return this.props.numRectangles !== nextProps.numRectangles;
  }

  render(){

    for (let i=0; i<this.props.numRectangles; i++) {
      // math
      const rand = {
        w: getRandomInt(88, 888),
        h: getRandomInt(88, 888),
        x: getRandomInt(11, 88),
        y: getRandomInt(11, 88),
      }

      // create
      const rect =
        <Rectangle
          id={i}
          key={i}
          width={rand.w}
          height={rand.h}
          posx={rand.x}
          posy={rand.y} />;

      // set
      if (this.props.rectangleData.length < this.props.numRectangles) {
        this.state.allRectangles.push(rect);
        this.props.setData({ id: `rect_${i}`, ...rand});
      }
    }

    return (
      <div id="canvas" className="canvas">
        {this.state.allRectangles}
      </div>
    )
  }
}
Canvas.propTypes = {
  numRectangles: PropTypes.number
}

export default Canvas;