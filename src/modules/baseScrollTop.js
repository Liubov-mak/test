const baseScrollTop  = () => {
	
    const btnTop = document.querySelector('.up');
    // Reveal the button
    const btnReveal = function () { 
        if (window.scrollY >= 400) {
        btnTop.classList.add('is-visible');
        } else {
        btnTop.classList.remove('is-visible');
        }    
    };  
    // Smooth scroll top
    const TopscrollTo = function () {
        if(window.scrollY !== 0) {
        setTimeout(function() {
            window.scrollTo(0,window.scrollY-30);
            TopscrollTo();
        }, 5);
        }
    };
    // Listeners
    window.addEventListener('scroll', btnReveal);
    btnTop.addEventListener('click', TopscrollTo);  
};

export default baseScrollTop;
