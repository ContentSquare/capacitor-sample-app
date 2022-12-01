import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

import './ScreenSlide.css';

// Swiper styles
import '@ionic/react/css/ionic-swiper.css';
import 'swiper/swiper.min.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ScreenSlide = () => {

    const onSlideChange = (s: any) => {}
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton text="Screen Views" />
                    </IonButtons>
                    <IonTitle>Slides</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation={true}
                    pagination={true}
                    centeredSlides={true}
                    onSlideChange={(s) => onSlideChange(s)}
                >
                    <SwiperSlide>This section showcases triggering screen views for each page of a slide scroll view. Try scrolling horizontally</SwiperSlide>
                    <SwiperSlide>This is the Slide 2</SwiperSlide>
                    <SwiperSlide>This is the Slide 3</SwiperSlide>
                </Swiper>
            </IonContent>
        </IonPage >
    );
};

export default ScreenSlide;
