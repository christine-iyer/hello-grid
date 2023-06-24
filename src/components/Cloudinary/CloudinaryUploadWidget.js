import React, { Component } from "react";
import { Cloudinary } from '@cloudinary/url-gen';

class CloudinaryUploadWidget extends Component {
  componentDidMount() {
    const cloudName = "dqjhgnivi"; 
    const uploadPreset = "crystal"; 

    var myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: cloudName,
        uploadPreset: uploadPreset,
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log("Done! Here is the image info: ", result.info);
          document
            .getElementById("uploadedimage")
            .setAttribute("src", result.info.secure_url);
            console.log( result.info? "result.info.secure_url is "+ result.info.secure_url : "")
        }
      }
    );
    document.getElementById("upload_widget").addEventListener(
      "click",
      function () {
        myWidget.open();
      },
      false
    );
  }
  render() {
    return (
      <button id="upload_widget" className="cloudinary-button">
       
      </button>
    );
  }
}

export default CloudinaryUploadWidget;