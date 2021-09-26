
export default uploadPic = (img) => {
  const picData = new FormData();
  picData.append('file', img);
  picData.append('upload_preset', 'su92rvke');
  picData.append('cloud_name', 'dfc03vohq');
  // console.log(img);
  fetch('https://api.cloudinary.com/v1_1/dfc03vohq/image/upload', {
    method: 'POST',
    body: picData,
  }).then((res) => res.json());
  // .then((pic) => {
  //   setUploadedImage(pic.url);
  //   console.log('this is the pic data', pic);
  // });
};

