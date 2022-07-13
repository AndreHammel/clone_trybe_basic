import React from 'react';
import notFoundImage from '../assets/notfound.png';

class NotFound extends React.Component {
  render() {
    return (
      <>
        <h1>Ops, nada encontrado aqui... (404)</h1>
        <hr />
        <img width="800" src={ notFoundImage } alt="" />
      </>
    );
  }
}

export default NotFound;
