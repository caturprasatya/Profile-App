import React, { useState } from 'react'
import './datePicker.css'
import { useSelector ,useDispatch } from 'react-redux';
import { updateData, updateProfile } from '../stores/action'

const Birthdate: React.FC = () => {
  const [data, setData] = useState({
    name: '',
    birthdate: ''
  });
  const dispatch = useDispatch()
  const reducer = useSelector(state => state)

  const handleChange = (event) => {
    event.preventDefault()
    const { value, name } = event.target
    setData({...data, [name]: value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(updateData({ name: data.name, birthdate: data.birthdate, data: reducer }))
  }

  return (
    <>
    <section>
      <form>
        <div className="input-container">
          <input id="name" name="name" className="input-name" type="text" pattern=".+" required onChange={handleChange}/>
          <label className="label" htmlFor="name">Fullname</label>
        </div>
        <div className="input-date">
          <br/>
          <p>Birthdate</p>
          <input type="date" name="birthdate" pattern=".+" required onChange={handleChange}/>
        </div>
        <div className="col d-flex justify-content-center mt-5">
          <span 
            className="myButton"
            onClick={handleSubmit}
            >
            Upload File
          </span>
        </div>
      </form>
    </section>
    </>
  );
};

export default Birthdate;
