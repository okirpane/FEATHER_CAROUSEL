const template = `
<template id="carousel">
<div class="carousel-slide">
  
</div>
<button class="carousel-prev">
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
<button class="carousel-next">
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

    static get observedAttributes() {
      return ['slideno'];
    }

    get slideno() {
      return this.getAttribute("slideno");
    } 

    set slideno(val) {
      this.setAttribute('slideno', val);
      
    }

    constructor(){
        super();
        this.imagesize = 0;
        this.length = 0;

        this.attachShadow({mode: 'open'});

        var style = document.createElement('style');
        style.textContent = `
          .carousel-slide {
            display: flex;
            width: 100%;
            height: auto;
          }
          .carousel-slide img {
            padding: auto;
            width: 100%;
            height: auto;
          }
          .carousel-prev {
            position: absolute;
            top: 50%;
            z-index: 5;
            left: 5%;
            cursor: pointer;
          }
          .carousel-next {
            position: absolute;
            top: 50%;
            z-index: 5;
            right: 5%;
            cursor: pointer;
          }
          
          button {
            background: none;
            border: none;
          }
        `;

        var parser = new DOMParser();
        var imageCarousel = parser.parseFromString(template, 'text/html');

        var content = imageCarousel.getElementById('carousel').content;

        this.shadowRoot.appendChild(style);
        this.shadowRoot.appendChild(content);

    }

    connectedCallback() {
        var slide = this.shadowRoot.querySelector(".carousel-slide");
        var images = this.getElementsByClassName("slide-image");

        this.imagesize = this.clientWidth;
        this.length = images.length;
        

        while (images.length > 0) {
          images[0].style.display = "block";
          slide.appendChild(images[0]);
        }

        slide.style.transform = `translateX(${-(this.clientWidth) * this.slideno}px)`;
        slide.style.transition = `transform 0.3s ease-in-out`;

        this.shadowRoot.querySelector(".carousel-prev").addEventListener("click" , ()=>{
          if (this.slideno-1 < 0){
            this.slideno = this.length-1;
          } else {
            this.slideno--;
          }
          console.log(length);
          
        });

        this.shadowRoot.querySelector(".carousel-next").addEventListener("click", ()=>{
          
          this.slideno++;
          if (this.slideno >= this.length -1) {
            this.slideno = 0;
          }
        })

    }

    attributeChangedCallback(name, oldValue, newValue){
      var slide = this.shadowRoot.querySelector(".carousel-slide");
      slide.style.transform = `translateX(${-(this.imagesize-10) * this.slideno}px)`;
    }
}
customElements.define('image-carousel', ImageCarousel);


