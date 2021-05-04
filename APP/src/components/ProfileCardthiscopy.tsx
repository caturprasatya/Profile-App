import React from 'react';
import { IonList, IonAvatar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import './ProfileCard.css'
import Wave from 'react-wavify'

// interface ContainerProps {
//   name: string;
// }

const ProfileCard: React.FC = () => {
  return (
    <>
    <IonCard className="coworker-card">
      <img src="https://images.unsplash.com/photo-1487088678257-3a541e6e3922?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80" className="header-img"/>
      <div className="card-detail">
        <IonAvatar slot="start" className="ava">
          <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"/>
        </IonAvatar>
        <ul>
          <li><p>John Parks</p></li>
        </ul>
      </div>
      <IonCard>
        <IonList>
        <IonItem>
            <IonIcon name="call" slot="start"></IonIcon>
            <IonLabel>
              <h2>(555) 418-5602</h2>
              <p>Mobile phone</p>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonIcon name="mail" slot="start"></IonIcon>
            <IonLabel>
              <h2>jparks@workmail.com</h2>
              <p>Work email</p>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonIcon name="mail" slot="start"></IonIcon>
            <IonLabel>
              <h2>john.parks92@email.com</h2>
              <p>Personal email</p>
            </IonLabel>
          </IonItem>
        </IonList>
      </IonCard>
      </IonCard>
      
      </>
  );
};

export default ProfileCard;
