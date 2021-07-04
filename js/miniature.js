const pictures = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content;
const fragment = document.createDocumentFragment();


const getFragmentItem = ({likes, comments, url}) => {
  const picture = pictureTemplate.cloneNode(true);
  const pictureImg = picture.querySelector('.picture__img');
  const pictureLikes = picture.querySelector('.picture__likes');
  const pictureComments = picture.querySelector('.picture__comments');

  pictureLikes.textContent = likes;
  pictureComments.textContent = comments.length;
  pictureImg.src = url;
  fragment.appendChild(picture);
};


const getMiniatures = (data) => {
  data.forEach((item) => getFragmentItem(item));
  pictures.appendChild(fragment);
};

export {getMiniatures};
