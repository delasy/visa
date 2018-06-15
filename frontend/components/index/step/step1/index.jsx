import React from 'react';
import StepMainTitle from '../mainTitle';
import Select from '../../../../utils/select';
import ApplyFor from './applyFor';
import LatestEmbassyUpdates from './latestEmbassyUpdates';

class Step1 extends React.Component {
  render() {
    return <div className="col-md-12">
      <StepMainTitle title="Select country you are travelling to"/>
      <div className="indexStep1SelectRow">
        <Select value="0" afterChange={(value) => alert(`You have selected ${value} option!`)}>
          <option value="0" disabled>Choose country</option>
          <option value="1">USA</option>
        </Select>
      </div>
      <div className="indexStep1AfterSelectRow">
        <ApplyFor/>
        <div className="indexStep1LatestEmbassyUpdatesWrapper">
          <LatestEmbassyUpdates/>
        </div>
      </div>
    </div>;
  }
}

export default Step1;
