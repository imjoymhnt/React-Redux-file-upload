import React, {useState} from 'react'
import { Field, reduxForm } from 'redux-form';
import { post } from 'axios';
export const FileUpload = (props) => {
  const [fileName, setFileName] = useState("")
  const onChangeFile = (e) => {
    setFileName(e.target.files[0])
  }
    const { handleSubmit } = props;
    const onFormSubmit = (data) => {
        let formData = new FormData();
        formData.append('firstName', data.firstName)
        formData.append('lastName', data.lastName)
        formData.append('image', fileName)
        // if (typeof data.picture !== 'string' && data.picture !== null) {
        //   data.append('image', data.image);
          
        // }
        console.log(data);
        const config = {
            headers: { 'content-type': 'multipart/form-data' }
        }
        const url = 'http://localhost:3001/api/v1/order';
        post(url, formData, config)
            .then(function(response) {
                console.log(response);
            })
            .catch(function(error) {
                console.log(error);
            });
    }
    return (
          <form onSubmit={handleSubmit(onFormSubmit)} encType='multipart/form-data'>
            <div>
              <label>Name</label>
              <Field name="firstName" component="input" type="text"/>
            </div>
            <div>
              <label>Name</label>
              <Field name="lastName" component="input" type="text"/>
            </div>
            <div>
              <label>Profile Picture</label>
              
              <input fileName='image' name='image' onChange={onChangeFile} type='file' />
            </div>
            <button type="submit">Submit</button>
          </form>
    )
}

export default reduxForm({
    form: 'fileupload'
})(FileUpload)
