import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Input from  '../components/UploadDatabase'

import './Form.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Input />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
