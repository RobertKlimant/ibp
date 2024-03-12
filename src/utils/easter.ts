export const easter = () => {
  const url = window.location.pathname;
  const path = '/skafferi';

  if (url === path) {
    const el = document.querySelector('[global-modal-active]') as HTMLElement;
    setTimeout(() => {
      el.setAttribute('global-modal-active', '10');
    }, 1000);
  } else {
    return;
  }
};
