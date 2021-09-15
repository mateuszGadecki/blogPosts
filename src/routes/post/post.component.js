import SEO from '../../components/seo.component';
import Layout from '../../components/layout/layout.component';
import PostDetails from '../../sections/postDetails/postDetails.component';

const Post = ({ content }) => {
  return (
    <Layout>
      <SEO title="Blog Post" />
      <PostDetails content={content} />
    </Layout>
  );
};

export default Post;
