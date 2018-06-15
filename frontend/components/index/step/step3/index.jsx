import React from 'react';
import StepMainTitle from '../mainTitle';

class Step1 extends React.Component {
  render() {
    return <div className="col-md-12">
      <StepMainTitle title="Select what type of visa you are applying"/>
      <div className="indexStep1AfterSelectRow" style={{margin: '0 auto'}}>
        <div className="row">
          <div className="col-md-4"><button className="indexStep3VisaApplyingToBox">Tourist</button></div>
          <div className="col-md-4"><button className="indexStep3VisaApplyingToBox">Business</button></div>
          <div className="col-md-4"><button className="indexStep3VisaApplyingToBox">Private</button></div>
          <div className="col-md-4"><button className="indexStep3VisaApplyingToBox">Work</button></div>
          <div className="col-md-4"><button className="indexStep3VisaApplyingToBox">Humanitarian</button></div>
          <div className="col-md-4"><button className="indexStep3VisaApplyingToBox">Student</button></div>
          <div className="col-md-4"><button className="indexStep3VisaApplyingToBox">Transit</button></div>
        </div>
      </div>
    </div>;
  }
}

export default Step1;
