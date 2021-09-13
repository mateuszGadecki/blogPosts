import { Switch, Route } from 'react-router-dom';
import HomePage from './routes/home/home.component';
import ContactPage from './routes/contact/contact.component';
import BlogPage from './routes/blog/blog.compontent';

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/contact" exact>
        <ContactPage />
      </Route>
      <Route path="/blog" exact>
        <BlogPage />
      </Route>
    </Switch>
  );
}

export default App;
