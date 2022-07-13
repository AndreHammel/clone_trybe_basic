import React from 'react';
import Loading from '../components/Loading';

class Calendar extends React.Component {
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
      <h1>Calendário</h1>
    );
  }
}

export default Calendar;
