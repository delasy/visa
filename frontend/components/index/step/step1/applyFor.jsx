import React from 'react';

class ApplyFor extends React.Component {
  render() {
    return <div className="col-md-12">
      <h3 className="indexStep1ApplyForTitle">Apply for a visa to</h3>

      <button className="indexStep1ApplyForButton left">
        <p className="indexStep1ApplyForButtonTitle">Russia</p>
        <div className="indexStep1ApplyForButtonImageWrapper">
          <img src="/static/images/flags/ru.png" className="indexStep1ApplyForButtonImage"/>
        </div>
      </button>

      <button className="indexStep1ApplyForButton">
        <p className="indexStep1ApplyForButtonTitle">China</p>
        <div className="indexStep1ApplyForButtonImageWrapper">
          <img src="/static/images/flags/cn.png" className="indexStep1ApplyForButtonImage"/>
        </div>
      </button>

      <button className="indexStep1ApplyForButton">
        <p className="indexStep1ApplyForButtonTitle">France</p>
        <div className="indexStep1ApplyForButtonImageWrapper">
          <img src="/static/images/flags/fr.png" className="indexStep1ApplyForButtonImage"/>
        </div>
      </button>
    </div>;
  }
}

export default ApplyFor;
