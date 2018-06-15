import React from 'react';

class LatestEmbassyUpdatesNews extends React.Component {
  render() {
    return this.props.news.map(
      /**
       * @param {{title: String, createdAt: String, shortBody: String, body: String}} newItem
       * @param {Number} i
       * @returns {*}
       */
      (newItem, i) => <div className="indexStep1LatestEmbassyUpdatesNew" key={i}>
        <h3 className="indexStep1LatestEmbassyUpdatesNewTitle">{newItem.title}</h3>
        <h5 className="indexStep1LatestEmbassyUpdatesNewDate">{newItem.createdAt}</h5>
        <p className="indexStep1LatestEmbassyUpdatesNewBody">{newItem.shortBody}</p>
      </div>
    );
  }
}

export default LatestEmbassyUpdatesNews;
