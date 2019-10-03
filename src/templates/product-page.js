/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import {
  Box,
  Container,
  Paper,
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableRow,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Layout from '../components/Layout';
import { formatUSD } from '../components/Currency';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
}));
export const ProductPageTemplate = ({ data }) => {
  const classes = useStyles();
  const { html, frontmatter } = data;
  console.log(html);
  console.log(frontmatter);
  return (
    <Container>
      <Box display="flex">
        <Box
          p={1}
          style={{
            width: '240px',
          }}
        >
          <Img fluid={frontmatter.image.childImageSharp.fluid} />
        </Box>
        <Box p={1} flexGrow={1}>
          <Typography variant="h3">{frontmatter.label}</Typography>
          <Typography variant="h6">{frontmatter.description}</Typography>
        </Box>
      </Box>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="left">Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                SKU
              </TableCell>
              <TableCell align="left">{frontmatter.sku}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Minimun Bid
              </TableCell>
              <TableCell align="left">
                {formatUSD(frontmatter.minimumBid)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Buy Now Price
              </TableCell>
              <TableCell align="left">
                {formatUSD(frontmatter.buyNowPrice)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Auction Close
              </TableCell>
              <TableCell align="left">{frontmatter.endTime}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Seller
              </TableCell>
              <TableCell align="left">{frontmatter.seller}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
};

ProductPageTemplate.propTypes = {
  data: PropTypes.shape({
    frontmatter: PropTypes.object,
    html: PropTypes.string,
  }),
};

const ProductPage = ({ data }) => (
  <Layout>
    <ProductPageTemplate data={data.markdownRemark} />
  </Layout>
);

ProductPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.object,
      frontmatter: PropTypes.object,
    }),
  }),
};

export default ProductPage;

export const productPageQuery = graphql`
  query ProductPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        buyNowPrice
        minimumBid
        description
        endTime(formatString: "MMM DD,YYYY HH:mm:ss")
        label
        rating
        seller
        sku
        startTime(formatString: "MMM DD,YYYY HH:mm:ss")
        title
        tags
        image {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
