import React from 'react';
import PropTypes from 'prop-types';
// import { ProductPageTemplate } from '../../templates/product-page';

const ProductPagePreview = ({ entry, getAsset }) => {
  console.log('--------------------------------------------------');
  console.log('--------------------------------------------------');
  console.log('--------------------------------------------------');
  var image = entry.getIn(['data', 'image']);
  var bg = getAsset(image);
  console.log('image');

  console.log(image);

  console.log('bg');
  console.log(bg);
  return (
    <h1>hello</h1>
    // <ProductPageTemplate
    //   name={entry.getIn(['data', 'name'])}
    //   description={entry.getIn(['data', 'description'])}
    // />
  );
};

ProductPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default ProductPagePreview;
