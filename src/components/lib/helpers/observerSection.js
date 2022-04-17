export const observerSection = () => {
  const sections = document.querySelectorAll('section[id]')
  const menuSections = Array.from(
    document.querySelectorAll('#menu__nav_wrapper a[href]')
  )

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries)
        if (entry.isIntersecting) {
          menuSections.forEach((menuSection) => {
            menuSection.classList.remove('menu__nav_item_active')
            let menuSectionId = menuSection.getAttribute('href')
            menuSectionId = menuSectionId.slice(1, menuSectionId.length)

            if (menuSectionId === entry.target.id) {
              menuSection.classList.add('menu__nav_item_active')
            }
          })
        }
    },
    {
      rootMargin: '-50% 0px',
    }
  )
  for (let i = 0; i < sections.length; i++) observer.observe(sections[i])
}
