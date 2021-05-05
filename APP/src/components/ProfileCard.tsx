import React,{ useEffect } from 'react';
import { IonRow, IonAvatar, IonCard, IonCardHeader, IonFab, IonFabButton, IonFabList, IonContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import './ProfileCard.css'
import { useSelector, useDispatch } from 'react-redux';
import { mail,calendarNumberOutline, share, logoFacebook, logoInstagram, logoVimeo, logoTwitter, create } from 'ionicons/icons';
import { getDataUser } from '../stores/action'
interface ContainerProps {
  name: string;
}

const ProfileCard: React.FC = () => {
  const data = useSelector(state => state)
  // const counter = useSelector(state:any => state.counter);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getDataUser(data))
  }, [dispatch])

  return (
    <>
      <IonContent className="speaker-detail">
      <div className="speaker-background">
        {/* <img src={ data?.avatar ||'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y' } /> */}
      <img src={'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y' } />

        <h2>Name</h2>
      </div>
      <IonCard className="card">
        <h4 className="title">My Data</h4>
        <IonCard className="card-item">
          <IonRow>
            <IonIcon icon={ mail } className="icon"/>
            <IonLabel className="ion-padding speaker-detail">
              {/* <p>{ data?.email }</p> */}
              <hr />
            </IonLabel>
          </IonRow>
        </IonCard>
        <IonCard className="card-item">
          <IonRow>
            <IonIcon icon={ calendarNumberOutline } className="icon"/>
            <IonLabel className="ion-padding speaker-detail">
              {/* <p>{{ data?.birthdate }}</p> */}
              <hr />
            </IonLabel>
          </IonRow>
        </IonCard>
      </IonCard>
      <IonFab vertical="bottom" horizontal="start" slot="fixed">
          <IonFabButton>
            <IonIcon icon={create} />
          </IonFabButton>
          <IonFabList side="top">
            <IonFabButton><IonIcon icon={logoVimeo} /></IonFabButton>
          
            <IonFabButton><IonIcon icon={logoFacebook} /></IonFabButton>
          
            <IonFabButton><IonIcon icon={logoInstagram} /></IonFabButton>
          
            <IonFabButton><IonIcon icon={logoTwitter} /></IonFabButton>
          </IonFabList>
        </IonFab>
      </IonContent>
      </>
  );
};

export default ProfileCard;
