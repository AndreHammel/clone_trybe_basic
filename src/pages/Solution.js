import React from 'react';
import Loading from '../components/Loading';

class Solution extends React.Component {
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
    const { match, history } = this.props;
    const { params } = match;
    const { solutionUrl } = params;

    return (
      <>
        <h1>Gabarito Individual de:</h1>
        <h2>{ solutionUrl }</h2>
        <button onClick={ () => history.push('/solutions') } type="button">
          Vamos Voltar?!
        </button>
      </>
    );
  }
}

export default Solution;
