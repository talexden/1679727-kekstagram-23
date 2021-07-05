const pictures = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content;


const removePictures = () => {
  while (pictures.querySelector('.picture')) {
    pictures.removeChild(pictures.querySelector('.picture'));
  }
};


const renderPhoto = ({likes, comments, url}) => {
  const picture = pictureTemplate.cloneNode(true);
  const pictureImg = picture.querySelector('.picture__img');
  const pictureLikes = picture.querySelector('.picture__likes');
  const pictureComments = picture.querySelector('.picture__comments');

  pictureLikes.textContent = likes;
  pictureComments.textContent = comments.length;
  pictureImg.src = url;
  return picture;
};


const getMiniatures = (data) => {
  const fragment = document.createDocumentFragment();
  data.forEach((item) => fragment.appendChild(renderPhoto(item)));
  removePictures();
  pictures.appendChild(fragment);
};

export {getMiniatures};
