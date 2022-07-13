import React from 'react';
import Loading from '../components/Loading';

class TrybeTalks extends React.Component {
  state = {
    isLoading: true,
  };

  componentDidMount() {
    setTimeout(() => this.setState({ isLoading: false }), 1500);
  }

  render() {
    const { isLoading } = this.state;
    if (isLoading) {
      return <Loading />;
    }
    console.log(this.props);
    return (
      <h1>Trybe Talks</h1>
    );
  }
}

export default TrybeTalks;
