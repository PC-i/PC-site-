window.addEventListener( 'load' , async () => {
  let element = document.createElement('footer');
  let content = await fetch(`${document.location.origin}/pci.github.io/assets/footer/footer.html`).then( reponse => reponse.text() );
  element.innerHTML = content;
  document.body.appendChild(element);
});
