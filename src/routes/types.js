import PropTypes from 'prop-types';
import React from 'react';

const Types = () => {
  return <div></div>;
};

const price = {
  amount: PropTypes.any.isRequired,
  currencyCode: PropTypes.string.isRequired,
};

OfferRow.propTypes = {
  offerItem: PropTypes.shape({
    id: PropTypes.string.isRequired,
    productOrVariationId: PropTypes.string.isRequired,
    channelOffers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        channelId: PropTypes.string.isRequired,
        price: PropTypes.objectOf(PropTypes.shape(price)).isRequired,
        isActive: PropTypes.bool.isRequired,
      }),
    ).isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  paging: PropTypes.arrayOf(
    PropTypes.shape({
      pageIndex: PropTypes.number.isRequired,
      pageSize: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Types;
