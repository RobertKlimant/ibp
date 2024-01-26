export const sverige = () => {
  const url = window.location;
  if (!url.pathname.includes('sverige-globalt')) return;

  const button = document.querySelector('[data-service]')?.querySelector('a') as HTMLElement;
  button.setAttribute('href', 'https://' + url.host + '/bud/spara');
  button.innerText = 'Spåra Paket';
  button.setAttribute('target', '_self');

  console.log(url.host);
};
