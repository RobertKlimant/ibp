import { home } from '$utils/home';
import { navbar } from '$utils/nav';
import { sverige } from '$utils/sverige';
import { nestedElement } from '$utils/nestElement';
import { swipers } from '$utils/swipers';

import { modal } from './modal/modal';

import { easter } from '$utils/easter';

window.Webflow ||= [];
window.Webflow.push(() => {
  swipers();
  nestedElement();
  modal();
  navbar();
  home();
  sverige();
  easter();
});
