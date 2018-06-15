import React from 'react';
import ReactDOM from 'react-dom';
import BaseLayout from './layouts/base';
import IndexTopTitle from './components/index/topTitle';
import IndexNavigation from './components/index/navigation';
import IndexStep1 from './components/index/step/step1';
import IndexStep2 from './components/index/step/step2';
import IndexStep3 from './components/index/step/step3';
import IndexStepAnnouncements from './components/index/step/indexStepAnnouncements';
import './styles/index.scss';

if (document.getElementById('main')) {
  ReactDOM.render(
    <div>
      <BaseLayout>
        <div className="row">
          <IndexTopTitle/>
          <IndexNavigation/>
          <IndexStep1/>
        </div>
      </BaseLayout>
      <span style={{ height: '1px', background: '#000', width: '100%', display: 'inline-block' }}/>
      <BaseLayout>
        <div className="row">
          <IndexTopTitle/>
          <IndexStepAnnouncements/>
          <IndexNavigation values={['Russia']}/>
          <IndexStep2/>
        </div>
      </BaseLayout>
      <span style={{ height: '1px', background: '#000', width: '100%', display: 'inline-block' }}/>
      <BaseLayout>
        <div className="row">
          <IndexTopTitle/>
          <IndexStepAnnouncements/>
          <IndexNavigation values={['Russia', 'United Kingdom']}/>
          <IndexStep3/>
        </div>
      </BaseLayout>
    </div>,
    document.getElementById('main')
  );
}
