import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ActivityItem from './ActivityItem';

export class Activities extends Component {
    render() {
        return this.props.activities.map((activity) => (
            <ActivityItem key={activity.id} activity={activity} 
            delActivity={this.props.delActivity} toggleCountdown={this.props.toggleCountdown} />
        ));
            
    }
}

Activities.propTypes = {
    activities: PropTypes.array.isRequired,
    delActivity: PropTypes.func.isRequired,
    toggleCountdown: PropTypes.func.isRequired
}


export default Activities
