export const home = () => {
  //Getting elements
  const home_text = document.querySelectorAll('[home-text]');
  const home_logos = document.querySelectorAll('[home-logo]');
  if (!home_text || !home_logos) return;

  //Function to change text in footer
  const footer_text = (hover_attr: string) => {
    const email_el = document
      .querySelector('[data-href="email"]')
      ?.querySelector('a') as HTMLElement;
    const tel_el = document.querySelector('[data-href="tel"]')?.querySelector('a') as HTMLElement;

    switch (hover_attr) {
      case 'klabbet':
        email_el.innerText = 'bud@intebarapost.se';
        tel_el.innerText = '08-505 255 00';
        break;
      case 'bud':
        email_el.innerText = 'bud@intebarapost.se';
        tel_el.innerText = '08-505 255 00';
        break;
      case 'allt':
        email_el.innerText = 'alltiallo@intebarapost.se';
        tel_el.innerText = '08-505 255 40';
        break;
      case 'skafferi':
        email_el.innerText = 'skafferi@intebarapost.se';
        tel_el.innerText = '08-505 255 90';
        break;
      case 'beman':
        email_el.innerText = 'info@rpbemanning.se';
        tel_el.innerText = '08-518 072 00';
        break;
      default:
        break;
    }
  };

  //Get the last hover attribute
  let last_hover = 'klabbet';
  home_text.forEach((text_el) => {
    text_el.addEventListener('mouseover', () => {
      //Set every image opacity 0
      home_logos.forEach((logo_el) => {
        logo_el.setAttribute('style', 'opacity: 0');
      });

      //Get the hover attr to set opacity 1
      const home_text_attr = text_el.getAttribute('home-text');
      const home_logo = document.querySelector(
        '[home-logo="' + home_text_attr + '"]'
      ) as HTMLElement;
      last_hover = home_text_attr as string;

      //Timeout because of animation
      setTimeout(() => {
        home_logo.style.opacity = '1';
        footer_text(home_text_attr as string);
      }, 200);
    });

    text_el.addEventListener('mouseout', () => {
      //Get the new hover and after 25ms if it's hover on another it will change the last hover so it won't continue
      let new_hover = last_hover;
      setTimeout(() => {
        //The same as hover in
        if (new_hover !== last_hover) return;
        home_logos.forEach((logo_el) => {
          logo_el.setAttribute('style', 'opacity: 0');
        });
        setTimeout(() => {
          const default_hover_logo = document.querySelector(
            '[home-logo="' + 'klabbet' + '"]'
          ) as HTMLElement;
          default_hover_logo.setAttribute('style', 'opacity: 1');
          footer_text('klabbet');
        }, 200);
      }, 25);
    });
  });
};
