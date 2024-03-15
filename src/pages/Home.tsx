import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Geolocation } from '@capacitor/geolocation';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { useEffect } from 'react';

let didInit = false;

const Home: React.FC = () => {
  const getCurrentPosition = async () => {
    try {
      const coordinates = await Geolocation.getCurrentPosition();
      console.log(coordinates.coords);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (!didInit) {
      didInit = true;
      getCurrentPosition();
    }
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
