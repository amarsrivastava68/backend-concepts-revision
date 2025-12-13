import cloudinary from "../config/CloudinaryConfig";

export const uploadImage = async (filepath) => {
  try {
    const result = await cloudinary.uploader.upload(filepath)
  }
  catch(err){
      console.log("Error in uploading image",err);
  }
}

