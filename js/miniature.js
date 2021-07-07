const pictures = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content;

const removePictures = () => {
  const miniatures = pictures.querySelectorAll('.picture');

  miniatures.forEach((element) => pictures.removeChild(element));
};


const renderPicture = ({id, likes, comments, url}) => {
  const picture = pictureTemplate.cloneNode(true);
  const pictureLink = picture.querySelector('.picture');
  const pictureImg = picture.querySelector('.picture__img');
  const pictureLikes = picture.querySelector('.picture__likes');
  const pictureComments = picture.querySelector('.picture__comments');

  pictureLink.setAttribute('data-id', id);
  pictureImg.src = url;
  pictureImg.alt = 111;
  pictureLikes.textContent = likes;
  pictureComments.textContent = comments.length;
  return picture;
};


const createMiniatures = (data) => {
  const fragment = document.createDocumentFragment();

  data.forEach((item) => fragment.appendChild(renderPicture(item)));
  removePictures();
  pictures.appendChild(fragment);
};

export {createMiniatures, pictures};
