import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom' ;
import { sanity } from './sanity';
import styles from './styles/App.module.css';
import NotFound from './components/NotFound';
import PageTemplate from './templates/page';

function App() {
  const [routeData, setRoute] = useState(null);

  useEffect(() => {
      sanity.fetch(`
      *[_type == "page"]{
        _id,
        slug{
          current
        }
      }
      `)
      .then((data) => setRoute(data))
      .catch(console.error);
  }, []);

  return (
    <>
      <main id="app-main" className={styles.main}>
      {routeData && routeData.map((route, index) => (
        <div id="app-div" className={styles.container}>
            <Switch>
              <Route component={PageTemplate} key={route._id} path={"/" + route.slug.current} />
              <Route component={NotFound} />
            </Switch>
        </div>
      ))}
      </main>
    </>
  );
}

export default App;
