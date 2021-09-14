import SEO from '../../components/seo.component';
import Layout from '../../components/layout/layout.component';

const Post = ({ content: { title } }) => {
  return (
    <Layout>
      <SEO title="Blog Post" />
      <h1>{title}</h1>
    </Layout>
  );
};

export default Post;
