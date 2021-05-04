import React from 'react';
import { IonList, IonAvatar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import './ProfileCard.css'

// interface ContainerProps {
//   name: string;
// }

const ProfileCard: React.FC = () => {
  return (
    <>
      <IonContent className="speaker-detail">
      <div className="speaker-background">
        <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
        <h2>Name</h2>
      </div>
        <div className="ion-padding speaker-detail">
          <p> Say hello on social media!</p>
          <hr />
        </div>
      </IonContent>
      </>
  );
};

export default ProfileCard;
