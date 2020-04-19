import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Controls.scss';

class Controls extends Component {
  onSubmitHandler = (e) => {
    e.preventDefault();

    const num = e.target.querySelector('#userNum').value;
    this.props.setNum(num);
    this.props.setGenerated(true);
  }

  onResetHandler = (e) => {
    const canvas = document.querySelector('#canvas');
    canvas.innerHTML = '';
    this.props.clearData();
    this.props.setGenerated(false);
    this.props.setNum(0);
  }

  onSaveHandler = (e) => {
    console.log('save!', e);
    this.props.saveData();
  }

  render(){
    return (
      <form className="controls" onSubmit={this.onSubmitHandler} onReset={this.onResetHandler}>
        <div className="form-control">
          <label htmlFor="userNum">How many shapes?</label>
          <input type="number" name="num" id="userNum"/>
        </div>
        <div className="form-actions">
          <button type="submit">Create!</button>
          <button type="reset">Clear</button>
          <button type="button">Save</button>
        </div>
      </form>
    )
  }
}
Controls.propTypes = {
  setNum: PropTypes.func
}

export default Controls;