import React, { Component } from 'react';
import classnames from 'classnames';
import './index.scss';

class Accordion extends Component {
  state = {
    visible: false,
    transitionEnd: false,
  }

  transitionEnd = () => {
    this.setState({
      transitionEnd: false
    })
  }

  onClick = () => {
    this.state.visible && this.accordion.addEventListener('transitionend', this.transitionEnd);
    !this.state.visible && this.accordion.removeEventListener('transitionend', this.transitionEnd);
    this.setState({
      visible: !this.state.visible,
      rows: Math.ceil(this.props.children.length / 15),
      transitionEnd: true
    })
  }

  render() {
    const { visible, rows, transitionEnd } = this.state;
    return (
      <div
        onClick={this.onClick}
        ref={(ref) => { this.accordion = ref }}
        className={
          classnames({
            box: true,
            boxShow: transitionEnd,
            [`box-${rows}`]: visible
          })
        }
      >
        { this.props.children }
      </div>
    );
  }
}

export default Accordion;
