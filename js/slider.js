// alert('oi')
document.addEventListener('DOMContentLoaded', () => {
    // const slider = document.querySelector('.slider');
  const sliderContainer = document.querySelector('.other-works .container');

  let isDown = false;
  let startX;
  let scrollLeft;

  sliderContainer.addEventListener('mousedown', (e) => {
    isDown = true;
    sliderContainer.classList.add('active');
    startX = e.pageX - sliderContainer.offsetLeft;
    scrollLeft = sliderContainer.scrollLeft;
  });

  sliderContainer.addEventListener('mouseleave', () => {
    isDown = false;
    sliderContainer.classList.remove('active');
  });

  sliderContainer.addEventListener('mouseup', () => {
    isDown = false;
    sliderContainer.classList.remove('active');
  });

  sliderContainer.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - sliderContainer.offsetLeft;
    const walk = (x - startX) * 1; //scroll-fast
    // slider.scrollLeft = scrollLeft - walk;
    sliderContainer.scrollLeft = scrollLeft - walk
    console.log(walk);
  });



  const sliderCards = document.querySelector('.what-we-do .cards-container');

  sliderCards.addEventListener('mousedown', (e) => {
    isDown = true;
    sliderCards.classList.add('active');
    startX = e.pageX - sliderCards.offsetLeft;
    scrollLeft = sliderCards.scrollLeft;
  });

  sliderCards.addEventListener('mouseleave', () => {
    isDown = false;
    sliderCards.classList.remove('active');
  });

  sliderCards.addEventListener('mouseup', () => {
    isDown = false;
    sliderCards.classList.remove('active');
  });

  sliderCards.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - sliderCards.offsetLeft;
    const walk = (x - startX) * 1; //scroll-fast
    // slider.scrollLeft = scrollLeft - walk;
    sliderCards.scrollLeft = scrollLeft - walk
    console.log(walk);
  });

  
  let isMobile = window.orientation > -1;

  if (isMobile) {
    sliderContainer.classList.add('mobile');
    sliderCards.classList.add('mobile');
  } else {
    sliderContainer.classList.remove('mobile');
    sliderCards.classList.remove('mobile');
  }

  // alert(isMobile ? 'Mobile' : 'Not mobile');

    // const sliderContainer = document.querySelector('.other-works .container');
    // const slider = document.querySelector('.other-works .slider');

    // let isDown = false;
    // let startX;
    // let scrollLeft;

    // slider.addEventListener('mousedown', (event) => {
    //     isDown = true;

    //     startX = event.pageX - sliderContainer.offsetLeft; // Onde teve o clique na página
    //     scrollLeft = sliderContainer.offsetLeft; // Inicio do elemento slider
    //     console.log('startX:', startX)
    //     console.log('scrollLeft:', scrollLeft)
    //     // sliderContainer.scrollLeft += 1;
    // });

    // slider.addEventListener('mouseleave', () => {
    //     isDown = false;
    // });

    // slider.addEventListener('mouseup', () => {
    //     isDown = false;
    // });

    // slider.addEventListener('mousemove', (event) => {
    //     if (!isDown) return;

    //     event.preventDefault();

        
    //     // Pegar onde foi clicado e segurado (30)
    //     // Pegar o valor do arraste (pra direita ou esquerda) (31, 32, 33 ...)
    //     // Pegar a diferença entre os dois (1, 2, 3) (-1, -2, -3)
    //     const diferenca = (startX - (event.pageX - scrollLeft));
    //     let valor;
    //     if (diferenca > 0) {
    //         valor = 7
    //     } else {
    //         valor = -7
    //     }
    //    
        
    //     sliderContainer.scrollLeft += valor;
    // });

    // console.log('slider: ', slider);
});