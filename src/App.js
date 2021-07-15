import { BrowserRouter, Route, Switch } from 'react-router-dom' ;
// import logo from './logo.svg';
import styles from './styles/App.module.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import NotFound from './components/NotFound';
import schedule from './components/Schedule';

function App() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.container}>
          <BrowserRouter>
          <NavBar />
            <Switch>
              <Route component={Home} path="/" exact />
              <Route component={schedule} path="/schedule" />
              <Route component={NotFound} />
            </Switch>
          </BrowserRouter>
        </div>
      </main>
    </>
  );
}

export default App;
