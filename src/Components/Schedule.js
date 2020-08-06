import React, { Component } from 'react';
import Jumbotron from "react-bootstrap/Jumbotron";


class Schedule extends Component {
    render() {
        return (
            <div>
                <h1 className="mt-3 mb-3">Расписание</h1>
                <Jumbotron>
                    <h2>Тут будет расписание</h2>
                </Jumbotron>
            </div>
        );
    }
}

export default Schedule;