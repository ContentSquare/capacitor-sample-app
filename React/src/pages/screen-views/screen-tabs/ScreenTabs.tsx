import ScreenTabsOne from './screen-tabs-one/ScreenTabsOne';
import ScreenTabsThree from './screen-tabs-three/ScreenTabsThree';
import ScreenTabsTwo from './screen-tabs-two/ScreenTabsTwo';
import { IonBackButton, IonButtons, IonHeader, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar } from '@ionic/react';
import { Redirect, Route, RouteComponentProps } from 'react-router';
import { triangle, square } from 'ionicons/icons';

const ScreenTabs: React.FC<RouteComponentProps> = ({ match }) => {
    return (
        <IonTabs>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton text="Showcases" />
                    </IonButtons>
                    <IonTitle>Screen Views</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonRouterOutlet>
                <Route exact path={`${match.url}/one`} >
                    <ScreenTabsOne />
                </Route>
                <Route exact path={`${match.url}/two`} >
                    <ScreenTabsTwo />
                </Route>
                <Route path={`${match.url}/three`} >
                    <ScreenTabsThree />
                </Route>
                <Route exact path={`${match.url}`}>
                    <Redirect to={`${match.url}/one`} />
                </Route>
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
                <IonTabButton tab="tab1" href={`${match.url}/one`}>
                    <IonIcon icon={triangle} />
                    <IonLabel>Tab 1</IonLabel>
                </IonTabButton>
                <IonTabButton tab="tab2" href={`${match.url}/two`}>
                    <IonIcon icon={square} />
                    <IonLabel>Tab 2</IonLabel>
                </IonTabButton>
                <IonTabButton tab="tab3" href={`${match.url}/three`}>
                    <IonIcon icon={square} />
                    <IonLabel>Tab 3</IonLabel>
                </IonTabButton>
            </IonTabBar>
        </IonTabs>
    );
};

export default ScreenTabs;

