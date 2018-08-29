import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PageTemplate from './pages/common/PageTemplate/PageTemplate';
import { Main, Courses, Login, Questions, Reviews, Schools, Signup, NotFound } from './pages';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <PageTemplate>
          <Switch>
            <Route exact path='/' component={Main} />
            <Route path="/courses" component={Courses} />
            <Route path="/schools" component={Schools} />
            <Route path="/questions" component={Questions} />
            <Route path="/reviews" component={Reviews} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route component={NotFound} />
          </Switch>
        </PageTemplate>
      </BrowserRouter>
    );
  }
}

export default App;
