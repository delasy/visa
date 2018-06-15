import React from 'react';

class ApplyFor extends React.Component {
  render() {
    return <div className="col-md-12">
      <h3 className="indexStep1ApplyForTitle">Featured nationalities</h3>

      <button className="indexStep1ApplyForButton left">
        <p className="indexStep1ApplyForButtonTitle">UK</p>
        <div className="indexStep1ApplyForButtonImageWrapper">
          <img src="/static/images/flags/gb.png" className="indexStep1ApplyForButtonImage"/>
        </div>
      </button>

      <button className="indexStep1ApplyForButton">
        <p className="indexStep1ApplyForButtonTitle">Ireland</p>
        <div className="indexStep1ApplyForButtonImageWrapper">
          <img src="/static/images/flags/ie.png" className="indexStep1ApplyForButtonImage"/>
        </div>
      </button>

      <button className="indexStep1ApplyForButton">
        <p className="indexStep1ApplyForButtonTitle">France</p>
        <div className="indexStep1ApplyForButtonImageWrapper">
          <img src="/static/images/flags/fr.png" className="indexStep1ApplyForButtonImage"/>
        </div>
      </button>

      <button className="indexStep1ApplyForButton">
        <p className="indexStep1ApplyForButtonTitle">Germany</p>
        <div className="indexStep1ApplyForButtonImageWrapper">
          <img src="/static/images/flags/de.png" className="indexStep1ApplyForButtonImage"/>
        </div>
      </button>
    </div>;
  }
}

export default ApplyFor;
