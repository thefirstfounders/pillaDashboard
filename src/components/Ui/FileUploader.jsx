import  {useCallback, useState} from 'react'
import { Form, Spinner } from 'react-bootstrap'
import {useDropzone} from 'react-dropzone'

export const FileUploaderComp =({bodyText,LabelText,labelClassName,onChange,errors,required,labelColor})=> {
  const [loading,setLoading] =useState();  
  const onDrop = useCallback(acceptedFiles => {
      
      // console.log(acceptedFiles)
    //   HandlePicture(acceptedFiles[0])
        // Do something with the files
      }, [])
      const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

      const HandlePicture =async (e) => {
        const fileUploaded=e;
      // setPicture(fileUploaded)
      // setGetPicture(fileUploaded)
      //   setShowPic(URL.createObjectURL(fileUploaded));
        // const reader = new FileReader();
        // // setShowPic(fileUploaded);
        // reader?.readAsDataURL(fileUploaded);
        // reader.onload = function () {
        //   setPicture(reader?.result);
        //   // console.log(reader?.result)
        // };
        try {
       
          const formData = new FormData();
          
          formData.append("file", fileUploaded);
          formData.append("upload_preset", "svmprhvf");
      
          setLoading(true);
          await fetch("https://api.cloudinary.com/v1_1/afrilocales/upload", {
            method: "POST",
            body: formData,
          })
            .then((response) => {
              return response.text();
            })
            .then((data) => {
             
              setLoading(false);
              return onChange(JSON.parse(data).secure_url)
              // setLoadingImage(false);
             
              //  setPicture(JSON.parse(data).url);
            
            });
          // .catch((error) => {
          //   // console.log(error);
          // });
         
        
          // setHandleGetImage([...propertyDocument, ...picurl]);
         
      }  catch (error) {}
      setLoading(false)
      }

      const Loader = () => {
      return  <Spinner size="sm" animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      }

  return (
    <div>
     {LabelText && (
        <label
          className={`${labelClassName || ' h6t mb-2'} font-2 `}
          style={{ color: labelColor?labelColor:" #333333", fontWeight: "500" }}
        >
          {LabelText} {required && <span className="text-danger">*</span>}
        </label>
      )}
          <div {...getRootProps()}>
      <input {...getInputProps()} />
      {
          <div className='d-inline rounded border-2 pointer'>
       { isDragActive &&
        <div className=''>
          
            {bodyText}
        </div>
          }
           <div className='d-flex justify-content-start align-items-center'>
          
            {bodyText}{loading&& <Loader/>}
        </div>
          </div>
      }
    </div>
    {errors?.map((error, i) => (
        <small className="text-danger mt-2" key={i}>
          {error}
        </small>
      ))}
    </div>
  )
}
