import React from 'react';
const LikeDetail = (props) => {
    return (
        <div>
            {props.children}
            <i className="thumbs up outline icon">253</i>
        </div>
    );
};
export default LikeDetail;