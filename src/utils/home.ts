export const home = () => {
  const home_text = document.querySelectorAll('[home-text]');
  if (!home_text) return;

  home_text.forEach((text_el) => {
    text_el.addEventListener('mouseover', () => {
      const home_text_attr = text_el.getAttribute('home-text');
      const home_logo = document.querySelector(
        '[home-logo="' + home_text_attr + '"]'
      ) as HTMLElement;
      home_logo.style.opacity = '1';
    });

    text_el.addEventListener('mouseout', () => {
      const home_text_attr = text_el.getAttribute('home-text');
      const home_logo = document.querySelector(
        '[home-logo="' + home_text_attr + '"]'
      ) as HTMLElement;
      home_logo.setAttribute('style', '');
    });
  });
};
