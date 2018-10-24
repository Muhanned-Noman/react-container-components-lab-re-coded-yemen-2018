// Code MovieReviews Here

import React from 'react';

const Review = ({
  headline,
  byline,
  link,
  summary_short
}) => {
  return (

    <div key={headline} className="review">
        <a className="review-link" href={link.url}>
          {this.headline}
        </a>
        <span className="author">{this.byline}</span>
      <p>{summary_short}</p>
    </div>
  );
};

const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(Review)}</div>;

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;