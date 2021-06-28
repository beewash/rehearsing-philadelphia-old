import { Route, Switch, Link } from 'react-router-dom' ;
import logo from './logo.svg';
import styles from './App.module.css';
import NotFound from './NotFound'

function App() {
  return (
    <>
      <header className={styles.header}>
        <Link className={styles.headerLink} to="/">
          Rehearsing Philadelphia
        </Link>
      </header>

      <main className={styles.main}>
        <div className={styles.container}>
          <Switch>
            <Route component={NotFound} />
          </Switch>
        </div>
      </main>
    </>
  );
}

export default App;
