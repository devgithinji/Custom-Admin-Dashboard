const links = document.querySelectorAll('li.link');

links.forEach(link => {
    link.addEventListener('click', () => {
        let isActive = link.classList.contains('active');

        links.forEach(el => {
            el.classList.remove('active')
        })

        if (isActive) {
            link.classList.remove('active')
        } else {
            link.classList.add('active')
        }
    })
})

const toggleSideBar = document.querySelector('.toggle-btn')
const closeSideBarBtn = document.querySelector('.close-btn')
const toggleSideBarSmallScreen = document.querySelector('.toggle-btn-sm')
const sidebar = document.querySelector(".sidebar")
const body = document.querySelector('body')

toggleSideBar.addEventListener('click', () => {
    sidebar.classList.toggle('toggle')
})

closeSideBarBtn.addEventListener('click', () => {
    sidebar.classList.toggle('toggle')
    body.classList.toggle('no-scroll')
})

toggleSideBarSmallScreen.addEventListener('click', () => {
    sidebar.classList.toggle('toggle')
    body.classList.toggle('no-scroll')
})

