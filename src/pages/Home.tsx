import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, 
  IonList, IonLabel, IonItem, IonListHeader, IonButton  } from '@ionic/react';
import React, {useState} from 'react';

import { Plugins, CameraResultType } from '@capacitor/core';

const Home: React.FC = () => {
  const { Camera } = Plugins;
  const [photo, setPhoto] = useState();
  const takePhoto = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });
    setPhoto(image.webPath);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Learn Ionic React</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
          <IonListHeader color="dark">
            <IonLabel>Learning Today</IonLabel>
          </IonListHeader>
          <IonItem>
            <IonLabel>Ionic</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>React</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>TypeScript</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Recat Native</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Capacitor</IonLabel>
          </IonItem>
        </IonList>
        <IonButton onClick={takePhoto}>Take Photo</IonButton>
        <img alt='mycliq' src={photo} />
      </IonContent>
    </IonPage>
  );
};

export default Home;
