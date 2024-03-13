import { IonRouterOutlet } from "@ionic/react";
import { Redirect, Route, useLocation } from "react-router-dom";

/* Page components */
import Home from "../../pages/home/Home";
import DynamicVariables from "../../pages/dynamic-variables/DynamicVariables";
import ScreenViews from "../../pages/screen-views/ScreenViews";
import Privacy from "../../pages/privacy/Privacy";
import ScreenDefault from "../../pages/screen-views/screen-default/ScreenDefault";
import ScreenModal from "../../pages/screen-views/screen-modal/ScreenModal";
import ScreenSlide from "../../pages/screen-views/screen-slide/ScreenSlide";
import ScreenTabs from "../../pages/screen-views/screen-tabs/ScreenTabs";
import Transactions from "../../pages/transactions/Transactions";
import { useEffect } from "react";
import sendScreenName from "../../utils/SendScreename";


const MainNavigation: React.FC = () => {
  const location = useLocation();
  useEffect(() => {
    // We subscribe to React router events. When the URL changes, we send the corresponding screen name
    const visitedUrl = location.pathname;
    console.log("useEffect location: ", visitedUrl);
    sendScreenName(visitedUrl);
  }, [location]);
  return (
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
  );
};

export default MainNavigation;
