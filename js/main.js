/*=============== SHOW MENU ===============*/
const menuMenu = document.getElementById("menu-menu"),
  navToggle = document.getElementById("menu-toggle"),
  navClose = document.getElementById("menu-close"),
  navLink = document.querySelectorAll(".header__list li a")

/* Menu show */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    menuMenu.classList.add("show-menu")
    document.body.classList.add("locked")
  })
}

/* Menu hidden */
if (navClose) {
  navClose.addEventListener("click", () => {
    menuMenu.classList.remove("show-menu")
    document.body.classList.remove("locked")
  })

  navLink.forEach((link) => {
    link.addEventListener("click", function () {
      menuMenu.classList.remove("show-menu")
      document.body.classList.remove("locked")
    })
  })
}

/*=============== SCROLL SECTIONS===============*/
function onNavLinkClick(e) {
  const navLink = e.target
  if (navLink.dataset.goto && document.querySelector(navLink.dataset.goto)) {
    const gotoBlock = document.querySelector(navLink.dataset.goto)
    const gotoBlockValue = gotoBlock.getBoundingClientRect().top + window.scrollY - document.querySelector("header").offsetHeight

    window.scrollTo({
      top: gotoBlockValue,
      behavior: "smooth",
    })
    e.preventDefault()
  }
}

const navLinks = document.querySelectorAll(".menu__link[data-goto]")
if (navLinks.length > 0) {
  navLinks.forEach((navLink) => {
    navLink.addEventListener("click", onNavLinkClick)
  })
}

/*=============== Scroll Animation ===============*/
const animItems = document.querySelectorAll("._anim-items")

if (animItems.length > 0) {
  window.addEventListener("scroll", animOnScroll)
  function animOnScroll(params) {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index]
      const animItemHeight = animItem.offsetHeight
      const animItemOffset = offset(animItem).top

      const animStart = 4

      let animItemPoint = window.innerHeight - animItemHeight / animStart
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart
      }

      if (window.scrollY > animItemOffset - animItemPoint && window.scrollY < animItemOffset + animItemHeight) {
        setTimeout(() => {
          animItem.classList.add("_active")
        }, 30)
      } else {
        // _anim-no-hide убирает анимацию появления по кругу c помощью CSS
        if (!animItem.classList.contains("_anim-no-hide")) {
          // Повторяет анимацию по кругу /  если она не нужна, убираем animItem.classList.remove('_active');
          // animItem.classList.remove('_active');
        }
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.scrollX || document.documentElement.scrollLeft,
      scrollTop = window.scrollY || document.documentElement.scrollTop
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }
  animOnScroll()
}
