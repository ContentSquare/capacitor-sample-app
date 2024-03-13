import { IonApp, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

/* Page components */
import GdprModal from "./components/gdpr-modal/GdprModal";

/* React hooks */
import { useState } from "react";
import MainNavigation from "./components/main-navigation/MainNavigation";

setupIonicReact();

const App: React.FC = () => {
  // console.log("useEffect location: ");
  const [isOpen, setIsOpen] = useState(
    localStorage.getItem("userConsent") == null
  );

  return (
    <IonApp>
      <IonReactRouter>
        <GdprModal isOpen={isOpen} onDismissModal={() => setIsOpen(false)} />
        <MainNavigation />
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
