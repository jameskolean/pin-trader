import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import FeaturedProducts from '../components/FeaturedProducts';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
});

export const IndexPageTemplate = ({ featuredproducts }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <FeaturedProducts products={featuredproducts.nodes} />
    </div>
  );
};

IndexPageTemplate.propTypes = {
  featuredproducts: PropTypes.object,
};

const IndexPage = ({ data }) => {
  //  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate featuredproducts={data.allMarkdownRemark} />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
    allMarkdownRemark: PropTypes.object,
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
    allMarkdownRemark(
      filter: {
        fields: {}
        headings: {}
        frontmatter: { featuredproduct: { eq: true } }
      }
      limit: 4
    ) {
      nodes {
        fields {
          slug
        }
        id
        frontmatter {
          label
          buyNowPrice
          endTime
          description
          startTime
          sku
          templateKey
          image {
            id
            childImageSharp {
              fixed(height: 100) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
        internal {
          content
          description
          ignoreType
          mediaType
        }
      }
    }
  }
`;
