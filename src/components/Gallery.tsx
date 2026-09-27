import { useEffect, useRef, useState } from 'react';

type GalleryProps = {
  project: string;
  images: readonly string[];
  initialIndex?: number;
  onClose: () => void;
  returnFocusTo?: HTMLElement | null;
};

const Gallery = ({ project, images, initialIndex = 0, onClose, returnFocusTo }: GalleryProps) => {
  const [index, setIndex] = useState(initialIndex);
  const galleryRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const previous = () => setIndex((value) => (value - 1 + images.length) % images.length);
  const next = () => setIndex((value) => (value + 1) % images.length);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const gallery = galleryRef.current;
    const siblings = gallery?.parentElement
      ? Array.from(gallery.parentElement.children).filter((element) => element !== gallery) as HTMLElement[]
      : [];
    const siblingState = siblings.map((element) => ({
      element,
      hadInert: element.hasAttribute('inert'),
      ariaHidden: element.getAttribute('aria-hidden'),
    }));
    siblings.forEach((element) => {
      element.setAttribute('inert', '');
      element.setAttribute('aria-hidden', 'true');
    });
    closeRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft') setIndex((value) => (value - 1 + images.length) % images.length);
      if (event.key === 'ArrowRight') setIndex((value) => (value + 1) % images.length);
      if (event.key === 'Tab' && gallery) {
        const focusable = Array.from(gallery.querySelectorAll<HTMLElement>('button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'));
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (!first || !last) return;
        if (event.shiftKey && (document.activeElement === first || !gallery.contains(document.activeElement))) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
      siblingState.forEach(({ element, hadInert, ariaHidden }) => {
        if (!hadInert) element.removeAttribute('inert');
        if (ariaHidden === null) element.removeAttribute('aria-hidden');
        else element.setAttribute('aria-hidden', ariaHidden);
      });
      returnFocusTo?.focus();
    };
  }, [onClose, images.length, returnFocusTo]);

  return (
    <div ref={galleryRef} className="gallery" role="dialog" aria-modal="true" aria-labelledby="gallery-title" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <div className="gallery__panel">
        <header className="gallery__header">
          <div>
            <h2 className="gallery__title" id="gallery-title">{project}</h2>
            <p className="gallery__counter">{index + 1} / {images.length}</p>
          </div>
          <button ref={closeRef} type="button" className="gallery__icon-btn" onClick={onClose} aria-label="Close screenshots">×</button>
        </header>
        <div className="gallery__stage">
          {images.length > 1 && <button type="button" className="gallery__nav gallery__nav--prev" onClick={previous} aria-label="Previous screenshot">‹</button>}
          <img className="gallery__image" src={images[index]} alt={`${project} screenshot ${index + 1} of ${images.length}`} />
          {images.length > 1 && <button type="button" className="gallery__nav gallery__nav--next" onClick={next} aria-label="Next screenshot">›</button>}
        </div>
        <div className="gallery__thumbs" aria-label={`${project} screenshots`}>
          {images.map((image, imageIndex) => (
            <button key={image} type="button" className={`gallery__thumb ${imageIndex === index ? 'is-active' : ''}`} onClick={() => setIndex(imageIndex)} aria-label={`Show screenshot ${imageIndex + 1}`} aria-current={imageIndex === index ? 'true' : undefined}>
              <img src={image} alt="" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
