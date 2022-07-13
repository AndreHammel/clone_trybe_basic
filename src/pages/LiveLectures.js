import React from 'react';
import Loading from '../components/Loading';

class LiveLectures extends React.Component {
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
    return (
      <h1>Aulas ao Vivo</h1>
    );
  }
}

export default LiveLectures;
