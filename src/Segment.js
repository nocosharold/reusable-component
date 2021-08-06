import React from "react";

const Segment = (props) => {
	return (
		<div className="ui placeholder segment">
			<div className="ui icon header">
				<i className="pdf file outline icon"></i>
				Error: PDF not found.
			</div>
			<div className="ui primary button"> Go back </div>
            <div classname="ui placeholder segment">
                <h4 className="ui header"> Attention ! </h4>
                <p> Lorem Ipsum Dolor Ipset </p>
            </div>
		</div>
	);
};

export default Segment;
