
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
//import Hello1 from './components/Hello1';
//import Hello2 from './components/Hello2';

// <Hello />,
render(
    <Example />,
    document.getElementById('example')
);
