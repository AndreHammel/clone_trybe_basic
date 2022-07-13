import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const { cardInfo } = this.props;
    const { name, title, imageUrl } = cardInfo;
    return (
      <article>
        <img alt={ name } src={ imageUrl } />
        <h3>{ name }</h3>
        <h2>{ title }</h2>
      </article>
    );
  }
}

Card.propTypes = {
  cardInfo: PropTypes.shape({
    imageUrl: PropTypes.string,
    title: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

export default Card;
