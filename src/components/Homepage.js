import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class homepage extends Component {
    render() {
        return (
            <div className="homepage">
                <div className="row">
                    <div className="col s12">
                        <h3>Student App</h3>
                    </div>
                    <div className="col s12">
                        <Link to="/leaderboard" className="waves-effect waves-light btn-large">Leaderboard</Link>
                    </div>
                    <div className="col s12">
                        <Link to="/marks" className="waves-effect waves-light btn-large">Enter Marks</Link>
                    </div>
                </div>
            </div>
        )
    }
}