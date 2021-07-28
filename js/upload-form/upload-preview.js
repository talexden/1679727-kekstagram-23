import {uploadInput, imageUploadPreview, FILE_TYPES} from '../constants.js';


uploadInput.addEventListener('change', () => {
  const file = uploadInput.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      imageUploadPreview.src = reader.result;
    });

    reader.readAsDataURL(file);
  }
});
