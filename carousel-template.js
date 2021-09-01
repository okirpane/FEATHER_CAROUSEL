const template = `
<template id="carousel">
<div class="carousel-slide">
  <img src="4.png" id="lastClone" />
  <img src="1.png" id="1" />
  <img src="2.png" id="2" />
  <img src="3.png" id="3" />
  <img src="4.png" id="4" />
  <img src="1.png" id="firstClone" />
</div>
<button id="carousel-prev">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    height="24"
    width="24"
  >
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M14.7071 5.29289C15.0976 5.68342 15.0976 6.31658 14.7071 6.70711L9.41421 12L14.7071 17.2929C15.0976 17.6834 15.0976 18.3166 14.7071 18.7071C14.3166 19.0976 13.6834 19.0976 13.2929 18.7071L7.29289 12.7071C6.90237 12.3166 6.90237 11.6834 7.29289 11.2929L13.2929 5.29289C13.6834 4.90237 14.3166 4.90237 14.7071 5.29289Z"
      fill="#0D0D0D"
    ></path>
  </svg>
</button>
<button id="carousel-next">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    height="24"
    width="24"
  >
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M9.29289 18.7071C8.90237 18.3166 8.90237 17.6834 9.29289 17.2929L14.5858 12L9.29289 6.70711C8.90237 6.31658 8.90237 5.68342 9.29289 5.29289C9.68342 4.90237 10.3166 4.90237 10.7071 5.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L10.7071 18.7071C10.3166 19.0976 9.68342 19.0976 9.29289 18.7071Z"
      fill="#0D0D0D"
    ></path>
  </svg>
</button>
</template>`;

class ImageCarousel extends HTMLElement {
    constructor(){
        super();
    }
    connectedCallback() {
        var parser = new DOMParser();
        var imageCarousel = parser.parseFromString(template, 'text/html');
        var content = imageCarousel.getElementById('carousel').content;
        this.appendChild(content)
    }
}
customElements.define('image-carousel', ImageCarousel);


