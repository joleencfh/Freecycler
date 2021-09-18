import * as ImagePicker from 'expo-image-picker';
import uploadPic from '../../tools/CloudinaryPicUpload';


export default takePicture = async (setPictureState) => {
  const res = await ImagePicker.launchCameraAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    base64: true,
    allowsEditing: true,
    quality: 1,
    aspect: [4, 3],
  });
  if (!res.cancelled) {
    // console.log('res', res.uri);
    const base64Img = `data:image/jpg;base64,${res.base64}`;
    const picData = await uploadPic(base64Img);
    setPictureState(picData.url);
    // console.log('this is the pic data', picData);
  }
};
