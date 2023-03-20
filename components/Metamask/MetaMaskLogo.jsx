import React, { Component } from 'react';
import ModelViewer from 'metamask-logo';

class MetamaskLogo extends Component {
  componentDidMount() {
    this.viewer = ModelViewer({
      pxNotRatio: true,
      width: 180,
      height: 180,
      followMouse: true
    });
    this.el.appendChild(this.viewer.container);
    console.log('first')
  }

  componentWillUnmount() {
    this.viewer.stopAnimation();
  }

  render() {
    return (
      <div
        ref={el => (this.el = el)}
      />
    );
  }
}

export default MetamaskLogo;