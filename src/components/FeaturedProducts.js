import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import ProductCard from './ProductCard';

const FeaturedProducts = ({ products }) => (
  <>
    <Typography variant="h2">Featured Pins</Typography>
    {products.map(product => (
      <ProductCard
        key={product.fields.slug}
        slug={product.fields.slug}
        name={product.frontmatter.label}
        sku={product.frontmatter.sku}
        description={product.frontmatter.description}
        imageFixed={product.frontmatter.image.childImageSharp.fixed}
      />
    ))}
  </>
);

FeaturedProducts.propTypes = {
  products: PropTypes.array,
};

export default FeaturedProducts;
