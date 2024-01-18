import { home } from '$utils/home';
import { navbar } from '$utils/nav';
import { nestedElement } from '$utils/nestElement';
import { swipers } from '$utils/swipers';

import { modal } from './modal/modal';

window.Webflow ||= [];
window.Webflow.push(() => {
  swipers();
  nestedElement();
  modal();
  navbar();
  home();
});
