import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import './App.css';
import { Recharts, Chartjs } from './views';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="s-app">
            <div className="s-link">
              <Link to="/chartjs" className="s-link__item">
                <div className="s-link__logo">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="192px" height="192px" viewBox="0 0 192 192" enableBackground="new 0 0 192 192" xmlSpace="preserve">
                    <path fill="#36A2EB" d="M161.271,96.556c-22.368,0.439-17.709,14.599-33.473,18.18c-16.014,3.638-18.542-39.111-34.552-39.111  c-16.012,0-19.559,41.526-39.608,70.034l-0.572,0.807l42.985,24.813l65.22-37.651V96.556z"/>
                    <path fill="#FFCE56" d="M161.271,95.267c-7.488-9.61-12.567-20.658-23.494-20.658c-19.337,0-14.249,31.545-35.62,31.545  c-21.373,0-23.62-33.931-47.832-2.035c-7.715,10.163-13.925,21.495-18.803,32.218l60.529,34.943l65.22-37.651V95.267z"/>
                    <path opacity="0.8" fill="#FE6184" d="M30.829,108.334c7.338-20.321,10.505-36.779,24.514-36.779  c21.371,0,26.458,60.039,44.779,53.931c18.318-6.105,16.282-38.669,44.779-38.669c5.424,0,10.962,3.323,16.371,8.698v38.113  l-65.22,37.651l-65.222-37.651V108.334z"/>
                    <path fill="#E7E9ED" d="M96,176l-69.292-39.999V56L96,16l69.292,40v80L96,176z M34.849,131.301L96,166.602l61.151-35.301V60.7  L96,25.399L34.849,60.7V131.301z"/>
                  </svg>
                </div>
                <div className="s-link__text">Chartjs</div>
              </Link>
              <Link to="/recharts" className="s-link__item">
                <div className="s-link__logo">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="192px" height="192px" viewBox="0 0 192 192" enableBackground="new 0 0 192 192" xmlSpace="preserve">
                    <path fill="#36A2EB" d="M161.271,96.556c-22.368,0.439-17.709,14.599-33.473,18.18c-16.014,3.638-18.542-39.111-34.552-39.111  c-16.012,0-19.559,41.526-39.608,70.034l-0.572,0.807l42.985,24.813l65.22-37.651V96.556z"/>
                    <path fill="#FFCE56" d="M161.271,95.267c-7.488-9.61-12.567-20.658-23.494-20.658c-19.337,0-14.249,31.545-35.62,31.545  c-21.373,0-23.62-33.931-47.832-2.035c-7.715,10.163-13.925,21.495-18.803,32.218l60.529,34.943l65.22-37.651V95.267z"/>
                    <path opacity="0.8" fill="#FE6184" d="M30.829,108.334c7.338-20.321,10.505-36.779,24.514-36.779  c21.371,0,26.458,60.039,44.779,53.931c18.318-6.105,16.282-38.669,44.779-38.669c5.424,0,10.962,3.323,16.371,8.698v38.113  l-65.22,37.651l-65.222-37.651V108.334z"/>
                    <path fill="#E7E9ED" d="M96,176l-69.292-39.999V56L96,16l69.292,40v80L96,176z M34.849,131.301L96,166.602l61.151-35.301V60.7  L96,25.399L34.849,60.7V131.301z"/>
                  </svg>
                </div>
                <div className="s-link__text">Recharts</div>
              </Link>
            </div>
          </div> 
        </Route>
        <Route path="/recharts">
          <Recharts />
        </Route>
        <Route path="/chartjs">
          <Chartjs />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
