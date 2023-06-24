import CloudinaryUploadWidget from "./CloudinaryUploadWidget";

export default function CloudinaryPage() {
  return (
    <div className="Cloudinary">
      <h3>Cloudinary Upload Widget Example</h3>
      <CloudinaryUploadWidget />

      <img id="uploadedimage" src=""></img>
    </div>
  );
}