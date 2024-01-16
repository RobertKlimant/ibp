import { cloneNode } from '@finsweet/ts-utils';

import { nestedElement } from '$utils/nestElement';
import { swipers } from '$utils/swipers';

import { modal } from './modal/modal';

window.Webflow ||= [];
window.Webflow.push(() => {
  swipers();
  nestedElement();
  modal();

  const huvudmeny = document.querySelector('[menu-desktop="huvudmeny"]') as HTMLElement;
  const huvudmenyButtons = huvudmeny.querySelectorAll('.button-primary') as NodeListOf<Element>;
  const mobileHuvudEl = document.querySelector('[menu-mobile="huvudmeny"]') as HTMLElement;
  huvudmenyButtons.forEach((button) => {
    mobileHuvudEl.append(cloneNode(button));
  });

  const services = document.querySelector('[menu-desktop="tjanster"]') as HTMLElement;
  const servicesButtons = services.querySelectorAll('.button-primary') as NodeListOf<Element>;
  const mobileServiceEl = document.querySelector('[menu-mobile="tjanster"]') as HTMLElement;

  servicesButtons.forEach((button) => {
    mobileServiceEl.append(cloneNode(button));
  });
});
