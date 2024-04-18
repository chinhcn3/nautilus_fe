import {LightboxContext} from '@/containers/topic-content/Content/LightboxContext';
import YetAnotherLightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

export function Lightbox() {
  const open = LightboxContext.useSelector((state) => state.isOpen);
  const onClose = LightboxContext.useSelector((state) => state.onLightboxClose);
  const slide = LightboxContext.useSelector((state) => state.slide);
  const sources = LightboxContext.useSelector((state) => state.sources);

  return (
    <YetAnotherLightbox
      open={open}
      slides={sources.map((source) => ({
        src: source,
        type: 'image'
      }))}
      index={slide}
      close={onClose}
      controller={{
        closeOnBackdropClick: true
      }}
    />
  );
}
