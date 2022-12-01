import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';

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
import { useState } from 'react';

setupIonicReact();

const App: React.FC = () => {

  const [isOpen, setIsOpen] = useState(localStorage.getItem('userConsent') == null);

  return (
    <IonApp>
      <GdprModal isOpen={isOpen} onDismissModale={() => setIsOpen(false)} />
      <IonReactRouter>
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
      </IonReactRouter>
    </IonApp>
  )
};

export default App;
