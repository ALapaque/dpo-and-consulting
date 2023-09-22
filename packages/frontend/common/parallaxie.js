export default function parallaxie(selector, speed = 0.8, startPosition, isMobile = false) {
  let elementBg = document.querySelector(selector);
  let image = elementBg.getAttribute("data-background");
  if (!image) {
    image = window.getComputedStyle(elementBg).backgroundImage;
  }
  let position = elementBg.getBoundingClientRect().top * speed;

  elementBg.style.backgroundImage = `url("${image}")`;
  elementBg.style.backgroundSize = 'cover';
  elementBg.style['-webkit-background-size'] = 'cover';
  elementBg.style['-moz-background-size'] = 'cover';
  elementBg.style.backgroundRepeat = 'no-repeat';
  elementBg.style.backgroundAttachment = isMobile ? 'unset' : 'fixed';
  elementBg.style.backgroundPosition = `center ${startPosition !== undefined ? startPosition : position}px`;

  window.addEventListener('scroll', () => {
    position = elementBg.getBoundingClientRect().top * speed;
    elementBg.style.backgroundPosition = `center ${position}px`;
  });
}
