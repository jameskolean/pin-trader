import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

export const SellerPageTemplate = ({ name, rating }) => (
  <div className="content">
    <div className="full-width-image-container margin-top-0">
      <h2
        className="has-text-weight-bold is-size-1"
        style={{
          boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
          backgroundColor: 'white',
          color: 'green',
          padding: '1rem',
        }}
      >
        {name}
      </h2>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-7 is-offset-1">
              <p>{rating}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

SellerPageTemplate.propTypes = {
  name: PropTypes.string,
  rating: PropTypes.number,
};

const SellerPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <SellerPageTemplate
        name={frontmatter.name}
        description={frontmatter.rating}
      />
    </Layout>
  );
};

SellerPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default SellerPage;

export const sellerPageQuery = graphql`
  query SellerPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        name
        rating
      }
    }
  }
`;
