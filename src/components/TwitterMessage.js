import React from "react";
import PropTypes from "prop-types";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      tweet: ""
    };
  }

  handleChange = event => {
    this.setState({
      tweet: event.target.value
    });
  }

  render() {
    return (
      <div>
        <strong>Your message: </strong>
        <input type="text" value={this.state.tweet} onChange={this.handleChange} />
        <br/>
        <small>Characters Remaining: {this.props.maxChars - this.state.tweet.length}</small>
      </div>
    );
  }
}

TwitterMessage.propTypes = {
  maxChars: PropTypes.number
}

TwitterMessage.defaultProps = {
  maxChars: 140
}

export default TwitterMessage;
