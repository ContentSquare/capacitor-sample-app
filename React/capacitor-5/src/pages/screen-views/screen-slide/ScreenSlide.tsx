import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Swiper as SwiperClass, SwiperSlide } from "swiper/react";

import "./ScreenSlide.css";

// Swiper styles
import "@ionic/react/css/ionic-swiper.css";
import "swiper/swiper.min.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
import sendScreenName from "../../../utils/SendScreename";

const ScreenSlide : React.FC = () => {
  const slidesUrl = [
    "/screen-views/slide/one",
    "/screen-views/slide/two",
    "/screen-views/slide/three",
  ];

  const onSlideChange = (activeIndex: number) => {
    sendScreenName(slidesUrl[activeIndex]);
  };

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
        <SwiperClass
          modules={[Navigation, Pagination]}
          navigation={false}
          pagination={true}
          centeredSlides={true}
          onSlideChange={(s: { activeIndex: number }) =>
            onSlideChange(s.activeIndex)
          } // We detect when the slide changes and send the corresponding screen name
          onInit={() => onSlideChange(0)} // Send the screen name of the first swipe screen
          history={{ replaceState: true }}
        >
          <SwiperSlide>
            This section showcases triggering screen views for each page of a
            slide scroll view. Try scrolling horizontally
          </SwiperSlide>
          <SwiperSlide>This is the Slide 2</SwiperSlide>
          <SwiperSlide>This is the Slide 3</SwiperSlide>
        </SwiperClass>
      </IonContent>
    </IonPage>
  );
};

export default ScreenSlide;
