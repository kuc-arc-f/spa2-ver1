
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');
import React from 'react';
import { render } from 'react-dom';
import {  BrowserRouter, Router, Link, Route, browserHistory } from 'react-router-dom';
import Example from './components/Example';
import Hello1 from './components/Hello1';
import Hello2 from './components/Hello2';

//
//function HelloA() {
//	return <h1>HelloA</h1>;
//}

function HelloB() {
	return <h1>HelloB-123</h1>;
}

class Hello extends React.Component {
    render() {
      return (
        <BrowserRouter>
          <div>
            <ul>
              <li><Link to="/hello-a">HelloA</Link></li>
              <li><Link to="/hello-b">HelloB</Link></li>
            </ul>
            <Route path="/hello-a" component={Hello1} />
            <Route path="/hello-b" component={Hello2} />
          </div>
        </BrowserRouter>
      );
    }
}

//<Example />,
// <Hello />,
render(
    <Example />,
    document.getElementById('example')
);
