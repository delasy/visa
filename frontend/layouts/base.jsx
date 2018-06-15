import React from 'react';

class BaseLayout extends React.Component {
  render() {
    return <div className="container">{this.props.children}</div>;
  }
}

export default BaseLayout;
