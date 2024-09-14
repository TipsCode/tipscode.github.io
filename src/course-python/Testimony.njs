import "./testimony.css";


function CardTestimony(props) {
  return (
    <div class="testimony-2 min-w-[400px] max-w-full h-[325px] object-cover p-5 bg-[#212426] text-white">
        <div class="h-full flex flex-col justify-between">
          <blockquote>
            <p class="text-start mb-5">
            <i class="fa-solid fa-quote-left block text-3xl"></i>
              {props.text}
            </p>
          </blockquote>
          <div>
            <figure class="flex items-end gap-2.5">
              <div class="rounded-full w-12 h-12">
                <img class="rounded-full w-12 h-12"
                  src="/sales-page-python-img/lucas.jpg"
                  alt="Lucas Oliveira" />
              </div>
              <cite class="text-[#5FE2FF]">Alisson Suassuna</cite>
            </figure>
          </div>
        </div>
      </div>
  );
}

function CardDots() {
  return ( 
    <span class="testimony-dots block w-4 h-4 rounded-full border-white border border-2 ease duration-300 hover:bg-white"></span>
  )
  
}

async function slideTestimony(){
  setTimeout(() => {

    function initSlider(){
      const cardList = document.querySelector('.slider-wrapper .testimony-grid')
      const slideArrows = document.querySelectorAll('.fa-arrow-left, .fa-arrow-right')
      const maxScrollLeft = cardList.scrollWidth - cardList.clientWidth
      const cardDots = document.querySelectorAll('.testimony-dots')

      slideArrows.forEach((slide) => {
        slide.addEventListener('click', () => {
          const direction = slide.id === "prev-slide" ? -1 : 1;
          const scrollAmount = cardList.scrollLeft + cardList.clientWidth * direction;
          cardList.scroll({left: scrollAmount, behavior: "smooth"})
        });
      });

      function handleSlideButtons() {
        if(cardList.scrollLeft <= 0){
          slideArrows[0].classList.add('hidden')
          slideArrows[0].classList.remove('block')
        } else {
          slideArrows[0].classList.remove('hidden')
          slideArrows[0].classList.add('block')
        }

        if(cardList.scrollLeft >= maxScrollLeft){
          slideArrows[1].classList.add('hidden')
          slideArrows[1].classList.remove('block')
        } else {
          slideArrows[1].classList.remove('hidden')
          slideArrows[1].classList.add('block')
        }
      }

      function handleDots() {
        cardDots.forEach((dot, dotIdx) => {
          dot.addEventListener('click', () => {

            cardDots.forEach((dot) => {
              dot.classList.remove('bg-white');
            });

            dot.classList.add('bg-white')

            const targetSlide = dotIdx * cardList.clientWidth
            let scrollSlide = 0
            
            if(dotIdx === 0){
              scrollSlide = targetSlide + 0
            } else if(dotIdx === cardDots.length -1){
              scrollSlide = targetSlide + 100
            } else {
              scrollSlide = targetSlide + 20
            }

            cardList.scroll({left: scrollSlide, behavior: "smooth"})
          })
        })
      }

      handleDots()

      cardList.addEventListener('scroll', () => {
        handleSlideButtons()

        cardDots.forEach((dot) => {
          dot.classList.remove('bg-white');
        });
      })

      cardList.addEventListener('touchmove', () => {
        cardDots.forEach((dot) => {
          dot.classList.remove('bg-white');
        });
      })
    }

    window.addEventListener('load', initSlider)

    }, 0);  
}
    

export default function Testimony() {

  slideTestimony()

  return (
    <>
      <section class="flex flex-col items-center text-white">
        <h2 class={"testimony-python"}>Depoimentos dos Alunos</h2>
       
       <div class="testimony-container max-w-[900px] w-[95%]">
         <div class="slider-wrapper relative">
            <i id="prev-slide" class="fa-solid max-sm:hidden hidden fa-arrow-left text-4xl absolute z-10 left-[-20px] top-1/2 opacity-40 hover:opacity-80 bg-black rounded-full p-2 translate-y-[-50%]"></i>
           <div class="testimony-grid grid gap-5 overflow-x-auto mb-4">
            <CardTestimony text="slide 1slide 1slide 1slide 1slide 1slide 1slide 1slide 1slide 1slide 1slide 1slide 1slide 1slide 1slide 1slide 1slide 1slide 1slide 1slide 1slide 1slide 1slide 1slide 1slide 1slide 1slide 1slide 1slide 1slide 1slide 1slide 1slide 1slide 1slide 1slide 1slide 1slide 1slide 1slide 1slide 1slide 1slide 1slide 1slide 1slide 1slide 1" />
            <CardTestimony text="slide 2slide 2slide 2slide 2slide 2slide 2slide 2slide 2slide 2slide 2slide 2slide 2slide 2slide 2slide 2slide 2slide 2slide 2slide 2slide 2slide 2slide 2slide 2slide 2slide 2slide 2slide 2slide 2slide 2slide 2slide 2slide 2slide 2slide 2slide 2slide 2slide 2slide 2slide 2slide 2slide 2slide 2slide 2slide 2slide 2slide 2slide 2" />
            <CardTestimony text="slide 3slide 3slide 3slide 3slide 3slide 3slide 3slide 3slide 3slide 3slide 3slide 3slide 3slide 3slide 3slide 3slide 3slide 3slide 3slide 3slide 3slide 3slide 3slide 3slide 3slide 3slide 3slide 3slide 3slide 3slide 3slide 3slide 3slide 3slide 3slide 3slide 3slide 3slide 3slide 3" />
            <CardTestimony text="slide 4slide 4slide 4slide 4slide 4slide 4slide 4slide 4slide 4slide 4slide 4slide 4slide 4slide 4slide 4slide 4slide 4slide 4slide 4slide 4slide 4slide 4slide 4slide 4slide 4slide 4slide 4slide 4slide 4slide 4slide 4slide 4slide 4slide 4slide 4slide 4slide 4" />            
         </div>
          <i id="next-slide" class="fa-solid max-sm:hidden fa-arrow-right text-4xl absolute z-10 right-[-20px] top-1/2 opacity-40 hover:opacity-80 bg-black rounded-full p-2 translate-y-[-50%]"></i>
       </div>
       <div class="flex justify-center gap-4 sm:hidden">
        <CardDots />
        <CardDots />
        <CardDots />
        <CardDots />
       </div>
       </div>
        <div class="flex gap-4 my-5">
        </div>
      </section>
    </>
  );
}
