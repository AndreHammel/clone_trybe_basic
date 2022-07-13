import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Calendar from '../pages/Calendar';
import Home from '../pages/Home';
import LiveLectures from '../pages/LiveLectures';
import NotFound from '../pages/NotFound';
import Solutions from '../pages/Solutions';
import TrybeTalks from '../pages/TrybeTalks';
import frontendSolutions from '../assets/frontendSolutions';
import Solution from '../pages/Solution';

class Content extends React.Component {
  render() {
    return (
      <main className="Content">
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/calendar" component={ Calendar } />
          <Route path="/live-lectures" component={ LiveLectures } />
          <Route path="/trybe-talks" component={ TrybeTalks } />
          {/* <Route path="/solutions" component={ Solutions } /> */}

          <Route
            exact
            path="/solutions"
            render={ (routerProps) => (
              <Solutions
                { ...routerProps }
                arrayOfSolutions={ frontendSolutions }
              />
            ) }
          />

          <Route path="/solutions/:solutionUrl" component={ Solution } />

          <Route path="*" component={ NotFound } />
        </Switch>
      </main>
    );
  }
}

export default Content;
