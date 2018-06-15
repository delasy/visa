import React from 'react';

class Navigation extends React.Component {
  render() {
    const keys = [{
      id: 1,
      name: 'Country',
      value: null,
      active: false,
      passed: false
    }, {
      id: 2,
      name: 'Nationality',
      value: null,
      active: false,
      passed: false
    }, {
      id: 3,
      name: 'Visa Type',
      value: null,
      active: false,
      passed: false
    }, {
      id: 4,
      name: 'Fees',
      value: null,
      active: false,
      passed: false
    }];
    const values = typeof this.props.values !== 'undefined' ? this.props.values : [];

    values.forEach((value, i) => {
      keys[i].passed = true;
      keys[i].value = value;
    });
    keys[values.length].active = true;

    return (
      <div className="col-md-12 indexNavigationLinksWrapper">
        {
          keys.map((key) => (
            <div className="indexNavigationLink" key={key.id}>
              {
                key.passed
                  ? (
                    <button className="indexNavigationLinkContent passed">
                      <span>{key.name}</span>
                      <p className="indexNavigationLinkContentValue">{key.value}</p>
                    </button>
                  ) : (
                    <button
                      className={'indexNavigationLinkContent' + (key.active ? ' active' : '')}
                    >
                      {key.name}
                    </button>
                  )
              }
            </div>
          ))
        }
      </div>
    );
  }
}

export default Navigation;
