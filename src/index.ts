import { nestedElement } from '$utils/nestElement';
import { swipers } from '$utils/swipers';

window.Webflow ||= [];
window.Webflow.push(() => {
  swipers();
  nestedElement();
});
