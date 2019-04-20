import React, { Component } from 'react';

export default class Example extends Component {
    render() {
        return (
            <div className="container">
                <a href="#" className="btn btn-primary">AAAA</a>
                <h1>Example.js</h1>
                <p>welcome, example.js </p>
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <div className="panel panel-default">
                            <div className="panel-heading">Example Component</div>

                            <div className="panel-body">
                                I am an example component!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}