import React from 'react';
import StepMainTitle from '../mainTitle';
import Select from '../../../../utils/select';
import FeaturedNationalities from './featuredNationalities';

class Step1 extends React.Component {
  render() {
    return <div className="col-md-12">
      <StepMainTitle title="Select what passport you apply for a visa with"/>
      <div className="indexStep1SelectRow">
        <Select value="0" afterChange={(value) => alert(`You have selected ${value} option!`)}>
          <option value="0" disabled>Choose nationality</option>
          <option value="1">UK</option>
          <option value="2">Ireland</option>
        </Select>
      </div>
      <div className="indexStep1AfterSelectRow">
        <FeaturedNationalities/>
      </div>
    </div>;
  }
}

export default Step1;
