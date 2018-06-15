import React from 'react';

class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.value || '' };

    this.handleChange = this.handleChange.bind(this);

    if (
      Object.prototype.hasOwnProperty.call(this.props, 'afterChange') && typeof this.props.afterChange === 'function'
    ) {
      this.afterChange = this.props.afterChange;
    } else {
      this.afterChange = () => undefined;
    }
  }

  handleChange(event) {
    const value = event.target.value;

    this.setState({ value: value });
    this.afterChange(value);
  }

  render() {
    return <select className="appSelect" value={this.state.value} onChange={this.handleChange}>
      {this.props.children}
    </select>;
  }
}

export default Select;
