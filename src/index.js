import React from "react";
import ReactDOM from "react-dom";
import Segment from './Segment';

const App = () => {
    return (
        <div className="ui container comments">
            <Segment></Segment>
        </div>
    );
};
ReactDOM.render(<App />, document.querySelector("#root"));
