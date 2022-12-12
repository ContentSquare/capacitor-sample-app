import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { Redirect, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

/* Contentsquare plugin */
import { ContentsquarePlugin } from '@contentsquare/capacitor-plugin';

/* Page components */
import DynamicVariables from './pages/dynamic-variables/DynamicVariables';
import Home from './pages/home/Home';
import Privacy from './pages/privacy/Privacy';
import ScreenDefault from './pages/screen-views/screen-default/ScreenDefault';
import ScreenModal from './pages/screen-views/screen-modal/ScreenModal';
import ScreenSlide from './pages/screen-views/screen-slide/ScreenSlide';
import ScreenTabs from './pages/screen-views/screen-tabs/ScreenTabs';
import ScreenViews from './pages/screen-views/ScreenViews';
import Transactions from './pages/transactions/Transactions';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/display.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';

/* Theme variables */
import './theme/variables.css';
import GdprModal from './components/gdpr-modal/GdprModal';
import { useEffect, useState } from 'react';

setupIonicReact();

// We map the url of the screen with the screen name
const mapScreenURL: Record<string, string> = {
  "/home": "Menu",
  "/privacy": "Privacy",
  "/screen-views": "Screen Views Menu",
  "/transactions": "Transactions",
  "/dynamic-variables": "Dynamic Vars",
  "/screen-views/default": "Screen Default",
  "/screen-views/modal": "Screen Modal",
  "/screen-views/modal/my-modal": "My Modal Screen",
  "/screen-views/slide/one": "Screen Slide 1",
  "/screen-views/slide/two": "Screen Slide 2",
  "/screen-views/slide/three": "Screen Slide 3",
  "/screen-views/tabs/one": "Tab 1",
  "/screen-views/tabs/two": "Tab 2",
  "/screen-views/tabs/three": "Tab 3",
};

// Some URLs could be excluded. For example, "/screen-views/slide" and "/screen-views/tabs" are only containers. 
// We only need to send the name of the slide screens or tabs
const excludedURL = [
  "/screen-views/slide",
  "/screen-views/tabs"
]

/**
 * Send the screen name to the SDK 
 * @param visitedUrl url visited
 */
export const sendScreenName = (visitedUrl : string) => {
  if (visitedUrl !== '/' && excludedURL.filter(url => visitedUrl === url).length === 0) {
    ContentsquarePlugin.sendScreenName(mapScreenURL[visitedUrl])
      .then(_ => console.log('Screen name ' + mapScreenURL[visitedUrl] + ' sent'))
      .catch(e => console.log(e));
  }
}

const App: React.FC = () => {

  const [isOpen, setIsOpen] = useState(localStorage.getItem('userConsent') == null);
  const location = useLocation();

  useEffect(() => {
    // We subscribe to React router events. When the URL changes, we send the corresponding screen name
    const visitedUrl = location.pathname;
    sendScreenName(visitedUrl);
  }, [location]);

  return (
    <IonApp>
      <GdprModal isOpen={isOpen} onDismissModal={() => setIsOpen(false)} />
      <IonRouterOutlet>
        <Route exact path="/home" component={Home} />
        <Route exact path="/dynamic-variables" component={DynamicVariables} />
        <Route exact path="/privacy" component={Privacy} />
        <Route exact path="/screen-views" component={ScreenViews} />
        <Route exact path="/screen-views/default" component={ScreenDefault} />
        <Route exact path="/screen-views/modal" component={ScreenModal} />
        <Route exact path="/screen-views/slide" component={ScreenSlide} />
        <Route path="/screen-views/tabs" component={ScreenTabs} />
        <Route exact path="/transactions" component={Transactions} />
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </IonRouterOutlet>
    </IonApp >
  )
};

export default App;


