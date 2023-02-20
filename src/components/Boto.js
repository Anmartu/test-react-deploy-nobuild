import React from 'react';
import '../stylesheets/Boto.css';

class Boto extends React.Component {
  render() {
    return (
      <button
        className={this.props.esBotoClic ? 'boto-clic' : 'boto-reiniciar' }
        onClick={this.props.manejarClic}>
        {this.props.text}
      </button>
    )
  }
  }

export default Boto;