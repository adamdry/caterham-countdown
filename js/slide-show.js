const slideShow = {

    currentSlideIndex: 0,

    init: () => {

        setInterval(() => {

            slideShow.changeSlide()

        }, 3500)

    },

    changeSlide: () => {

        const $caterhamImgContainers = $('.caterham-img-container')
        const $currentSlideContainer = $($caterhamImgContainers[slideShow.currentSlideIndex])

        // hide current slide
        $currentSlideContainer.addClass('hide')

        // increment slide counter - unless we're on the last slide, then go to 0
        if (slideShow.currentSlideIndex === $caterhamImgContainers.length - 1) {
            slideShow.currentSlideIndex = 0;
        } else {
            slideShow.currentSlideIndex++;
        }

        // show new slide
        const $newSlideContainer = $($caterhamImgContainers[slideShow.currentSlideIndex])
        $newSlideContainer.removeClass('hide')

    }

}