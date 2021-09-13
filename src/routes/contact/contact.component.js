import SEO from '../../components/seo.component';
import Layout from '../../components/layout/layout.component';
import ContactBox from '../../sections/contactBox/contactBox.component';

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <ContactBox />
    </Layout>
  );
};

export default Contact;
