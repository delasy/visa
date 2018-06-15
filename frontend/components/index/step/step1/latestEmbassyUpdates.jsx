import React from 'react';
import LatestEmbassyUpdatesNews from './latestEmbassyUpdatesNews';
import $ from 'jquery';

class LatestEmbassyUpdates extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, isLoaded: false, news: [] };
  }

  async componentDidMount() {
    try {
      this.setState({
        isLoaded: true,
        news: await $.ajax({ url: '/api/news', cache: false, type: 'GET', dataType: 'json' })
      });
    } catch (error) {
      this.setState({ isLoaded: true, error });
    }
  }

  render() {
    const { error, isLoaded, news } = this.state;
    let result;

    if (error) {
      result = <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      result = <div>Loading...</div>;
    } else {
      result = <LatestEmbassyUpdatesNews news={news}/>;
    }

    return <div className="col-md-12">
      <h4 className="indexStep1LatestEmbassyUpdates">Latest Embassy updates</h4>
      {result}
    </div>;
  }
}

export default LatestEmbassyUpdates;
