const ariaAnnounce = (message: string): void => {
  const liveRegion: HTMLDivElement = document.createElement('div');

  Object.assign(liveRegion.style, {
    position: 'absolute',
    width: '1px',
    height: '1px',
    marginTop: '-1px',
    clip: 'rect(1px, 1px, 1px, 1px)',
    overflow: 'hidden',
  });

  liveRegion.setAttribute('aria-live', 'assertive');
  liveRegion.setAttribute('aria-atomic', 'true');
  liveRegion.setAttribute('role', 'status');

  document.body.appendChild(liveRegion);

  // Set message with a slight delay to ensure screen readers catch it
  setTimeout(() => {
    liveRegion.innerText = message;
  }, 50);

  // Cleanup after announcement
  setTimeout(() => {
    if (document.body.contains(liveRegion)) {
      document.body.removeChild(liveRegion);
    }
  }, 7000);
};

export default ariaAnnounce;
