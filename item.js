export function grawGalleryItem(item) {
    const itemEl = document.createElement('div')
    itemEl.classList = 'galery-item'

    const imgEl = document.createElement('img')
    imgEl.classList = 'gallery-item-img'
    imgEl.setAttribute('src', item.resourse)

    const titleEl = document.createElement('span')
    titleEl.classList = 'gallery-item-title'
    titleEl.textContent = item.title

    itemEl.appendChild(imgEl)
    itemEl.appendChild(titleEl)

    return itemEl
}