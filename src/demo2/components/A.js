import React, { Component } from 'react';
import '../index.css';

const A = WrappedComponent => {
  return class extends Component {
    render() {
      return (
        <div className="wraper_A">
          我是A组件，我是公用部分
          <WrappedComponent />
      </div>
      ) 
    }
  }
}

export default A;
