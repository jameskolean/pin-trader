import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Img from 'gatsby-image';
import { Box, Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  card: {
    width: '100%',
    margin: 10,
    padding: 10,
  },
});

const ProductCard = ({ slug, name, sku, imageFixed, description }) => {
  const classes = useStyles();
  return (
    <Paper elevation={3} className={classes.card}>
      <Box display="flex">
        <Box p={1}>
          <Link to={slug}>
            <Img fixed={imageFixed} width="300" />
          </Link>
        </Box>
        <Box p={1} flexGrow={1}>
          <Link to={slug}>
            <Typography variant="h6">{name}</Typography>
            <Typography variant="body2">SKU: {sku}</Typography>
          </Link>
        </Box>
      </Box>
      <Box>
        <Typography variant="body1">{description}</Typography>
      </Box>
    </Paper>
  );
};

ProductCard.propTypes = {
  slug: PropTypes.string,
  name: PropTypes.string,
  sku: PropTypes.string,
  description: PropTypes.string,
  imageFixed: PropTypes.object,
};

export default ProductCard;
