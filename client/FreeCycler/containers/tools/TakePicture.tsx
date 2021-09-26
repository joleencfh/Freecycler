import * as ImagePicker from 'expo-image-picker';
import { ImageInfo } from 'expo-image-picker/build/ImagePicker.types'
import { uploadPic } from './CloudinaryPicUpload';

type Cancelled = {
  cancelled: boolean
}
type ImagePickerResult = 
  (ImageInfo & Cancelled) 


export const takePicture = async (setPictureState) => {
  const res: ImagePickerResult | Cancelled   = await ImagePicker.launchCameraAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    base64: true,
    allowsEditing: true,
    quality: 1,
    aspect: [4, 3],
  });
  if ("base64" in res) {
    // console.log('res', res.uri);
    const base64Img = `data:image/jpg;base64,${res.base64}`;
    const picData : any = await uploadPic(base64Img);
    setPictureState(picData.url);
  
    // console.log('this is the pic data', picData);
  }
};
