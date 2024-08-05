import NotFoundImage from '../assets/imageNotFound.png';

export const handleImageError = (
  event: React.SyntheticEvent<HTMLImageElement, Event>
) => {
  event.currentTarget.src = NotFoundImage;
};
