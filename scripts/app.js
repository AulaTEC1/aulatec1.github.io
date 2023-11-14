// Back to top button.

const btnScrollTop = document.querySelector(".btnScrollTop")

btnScrollTop.addEventListener('click', () => window.scrollTo(0, 0))

window.addEventListener('scroll', () => {
    if (window.scrollY < 300) 
    {
        btnScrollTop.classList.remove("btnScrollTopOn")
        return;
    }
    btnScrollTop.classList.add("btnScrollTopOn")
})

// Mobile navbar.

const checkBox = document.querySelector('.check')
const navItems = document.querySelector('.navItems')

let navItemsWidth;

checkBox.addEventListener('click', () => {
    if (!checkBox.checked)
    {
        navItemsWidth = navItems.offsetWidth
        navItems.style.right = `${-navItemsWidth}px`

        checkBox.nextElementSibling.classList.remove('fa-close')
        checkBox.nextElementSibling.classList.add('fa-bars')
        return;
    }
    
    navItems.style.right = "0";

    checkBox.nextElementSibling.classList.remove('fa-bars')
    checkBox.nextElementSibling.classList.add('fa-close')
})

// Onscroll animations.

const presentationObserver = new IntersectionObserver (entries => {
    entries.forEach(entry => {
        const cardArray = entry.target.querySelectorAll('.cardPresentation')
        cardArray.forEach(card => {
            if (entry.isIntersecting) 
            {
                card.style.scale = '1 1';
                card.style.rotate = '0deg';
                card.style.opacity = '1';

                return;
            }
            
            card.style.scale = '.5 0';
            card.style.rotate = '-180deg';
            card.style.opacity = '0';
        })
    })
})

const cardsContainer = document.querySelector('.cardsPresentation')
presentationObserver.observe(cardsContainer)

const workObserver = new IntersectionObserver (entries => {
    entries.forEach(entry => {
        const articleArray = entry.target.querySelectorAll('.work')
        const inf = entry.target.querySelector('.infContainer')

        if (entry.isIntersecting) 
        {
            
            articleArray[0].style.transform = 'rotateY(0)';
            articleArray[1].style.transform = 'rotateX(0)';

            inf.style.opacity = '1';
            inf.style.scale = '1 1';

            return;
        }

        articleArray[0].style.transform = 'rotateY(180deg)';
        articleArray[1].style.transform = 'rotateX(-180deg)';

        inf.style.opacity = '0';
        inf.style.scale = '0 1';
    })
})

const articlesContainer = document.querySelector('.works')
workObserver.observe(articlesContainer)
