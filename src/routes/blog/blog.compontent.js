import SEO from '../../components/seo.component';
import Layout from '../../components/layout/layout.component';
import BlogList from '../../sections/blogList/blogList.component';

const Blog = () => {
  return (
    <Layout>
      <SEO title="Blog" />
      <BlogList />
    </Layout>
  );
};

export default Blog;
