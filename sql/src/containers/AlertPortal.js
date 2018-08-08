import { Component } from 'react';
import {createPortal}from 'react-dom';
export default class AlertPortal extends Component {
  render() {
    return createPortal(
        this.props.children,
        document.getElementById('alert')
    )
  }
}
