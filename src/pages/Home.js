import React from 'react';
import Card from '../components/Card';
import Loading from '../components/Loading';
import contents from '../data';

class Home extends React.Component {
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
      <div>
        <h1>Conteúdo</h1>
        <h2>
          Acesse a agenda de cada módulo abaixo, ou continue aprendendo
          com nossas aulas ao vivo e trilha de Soft Skills.
        </h2>
        <section>
          {
            contents.map((item) => <Card key={ item.title } cardInfo={ item } />)
          }
        </section>
      </div>
    );
  }
}

export default Home;
