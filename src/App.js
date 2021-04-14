import { Route, Switch, useLocation } from 'react-router-dom';
import Home from './components/Home'
import Project from './components/Project'
import './App.css';
import { AnimatePresence } from 'framer-motion';
import PageNotFound from './components/404';

function App() {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact component={Home} />
        <Route path="/project/:slug" exact component={Project} />
        <Route render={() => <PageNotFound location={location.pathname} />} />
      </Switch>
    </AnimatePresence>
  );
}

export default App;