import React from 'react';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';

class Solutions extends React.Component {
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

    const { arrayOfSolutions } = this.props;

    return (
      <>
        <h1>Gabaritos</h1>
        <hr />
        <ul>
          { arrayOfSolutions.map((solution) => (
            <li key={ solution.url }>
              <Link to={ `/solutions/${solution.url}` }>{ solution.name }</Link>
            </li>
          )) }
        </ul>
      </>
    );
  }
}

export default Solutions;
