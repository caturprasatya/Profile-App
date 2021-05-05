import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFab, IonFabButton, IonIcon, IonGrid, IonRow, IonCol, IonImg, IonActionSheet, IonCard, IonCardHeader } from '@ionic/react';
import { camera, trash, close } from 'ionicons/icons';
import { usePhotoGallery, Photo } from '../hooks/usePhotoGallery';
import firebase ,{ storage } from '../configs/fire';
import { useSelector, useDispatch } from 'react-redux';
import { updateData, updateProfile } from '../stores/action'
import './Avatar.css'

const ReactFirebaseFileUpload = () => {
  const [image, setImage] = useState([]);
  const [name, setName] = useState('');
  const [base64, setBase64] = useState('');
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);
  const { deletePhoto, photo, takePhoto } = usePhotoGallery();
  const data = useSelector(state => state)
  const dispatch = useDispatch()

  const handleChange = e => {
    if (e.target.files[0]) {
      setImage(e.target.files);
      setName(e.target.files[0]?.name)
    }
    console.log(image)
  };

  useEffect(() => {
    fetchImage()
    
  }, [photo])

  const fetchImage = () =>{
    if (photo) {
      setBase64(photo[0]?.webviewPath); 
    }
  }

  const uploadImageOnCam = (event) => {
    event.preventDefault()
    console.log(data);
    
    if (base64) {
      dispatch(updateProfile({ data, base64 }))
      setBase64('')
      deletePhoto(photo[0])
    }
  }

  const onTakePhoto = async(event) => {
    event.preventDefault()
    await takePhoto()
  }

  const clearPhoto = (event) => {
    event.preventDefault()
    setUrl('')
  }

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${name}`).put(image[0]);
    uploadTask.on(
      "state_changed",
      snapshot => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      error => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(name)
          .getDownloadURL()
          .then(url => {
            dispatch(updateProfile({data, base64: url}))
            setUrl(url);
            setName('')
            setImage([])
          });
      }
    );
  };

  return (
    <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Photo Gallery</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
    <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">Photo Gallery</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonGrid>

     <IonCard>
          <IonCardHeader>
            <h3>Upload file</h3>
          </IonCardHeader>
          <label htmlFor="custom-file-upload" className="filupp">
            <span className="filupp-file-name js-value">{ name ? name : 'Browse Files' }</span>
            <input type="file" name="attachment-file" onChange={handleChange} id="custom-file-upload"/>
          </label>
            <br/>
            {
              url || base64 ? <>
            <div className="col d-flex justify-content-center mb3">
              <img src={ url || base64 }  alt="firebase-image" width="100" height="100"/>
            </div>
            <div className="d-flex justify-content-center mb3">
              <p>Success Update</p>
            </div>
            </>
            : <></>
            }

            { 
            base64 ? 
            <div className="col d-flex justify-content-center mb-3">
              <button className="myButton" onClick={uploadImageOnCam}>Upload file</button>
            </div>
            : 
            <></>
            }
            {
              image?.length ?
              <>
              <div className="d-flex justify-content-center mb3">
              <progress value={progress} max="100" />
            </div>
              <div className="col d-flex justify-content-center mb-3">
              <br/>
              <span 
                className="myButton"
                onClick={handleUpload}
                >
                Upload File
              </span>
            </div>
            </>
            : <></>
            }
            {
              url ?
              <div className="col d-flex justify-content-center mb-3">
                <button className="myButton" onClick={clearPhoto}><h4>X</h4></button>
              </div>
            : <></>
            }
              <hr/><hr/>
            <div className="col d-flex justify-content-center mb4">
              <span
                className="myButton"
                onClick={() => takePhoto()}
                >
                <IonIcon icon={camera}></IonIcon>
                Take Picture
              </span>
              <br/>
            </div>
          </IonCard>
        <IonCard>
        </IonCard>
      </IonGrid>
    </IonContent>
  </IonPage>
  );
};

export default ReactFirebaseFileUpload
