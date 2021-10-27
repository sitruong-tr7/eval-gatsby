import * as React from "react";
import Layout from "../components/layout";

import { graphql } from "gatsby";

const BlogPage = ({ data }) => {
  // console.log(data);
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        {data.allFile.nodes.map((node) => (
          <li key={node.name}>{node.name}</li>
        ))}
      </ul>
    </Layout>
  );
};
export const querytr7 = graphql`
  query {
    site {
      siteMetadata {
        title
        siteUrl
        description
      }
    }
    allFile {
      nodes {
        name
      }
    }
  }
`;

export default BlogPage;
