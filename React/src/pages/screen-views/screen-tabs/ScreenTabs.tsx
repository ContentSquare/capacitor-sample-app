import ScreenTabsOne from './screen-tabs-one/ScreenTabsOne';
import ScreenTabsThree from './screen-tabs-three/ScreenTabsThree';
import ScreenTabsTwo from './screen-tabs-two/ScreenTabsTwo';
import { IonContent, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { Redirect, Route, RouteComponentProps } from 'react-router';
import { triangle, images, square } from 'ionicons/icons';

const ScreenTabs: React.FC<RouteComponentProps> = ({ match }) => {
    return (
        <IonContent>
            <IonTabs>
                <IonRouterOutlet>
                    <Route path={`${match.url}/one`} component={ScreenTabsOne} />
                    <Route path={`${match.url}/two`} component={ScreenTabsTwo} />
                    <Route path={`${match.url}/three`} component={ScreenTabsThree} />
                    <Redirect exact from={match.url} to={`${match.url}/one`} />
                </IonRouterOutlet>
                <IonTabBar slot="bottom">
                    <IonTabButton tab="one" href="/screen-views/tabs/one">
                        <IonIcon icon={triangle} />
                        <IonLabel>Tab One</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="two" href="/screen-views/tabs/two">
                        <IonIcon icon={images} />
                        <IonLabel>Tab two</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="three" href="/screen-views/tabs/three">
                        <IonIcon icon={square} />
                        <IonLabel>Tab Three</IonLabel>
                    </IonTabButton>
                </IonTabBar>
            </IonTabs>
        </IonContent>

    );
};

export default ScreenTabs;

