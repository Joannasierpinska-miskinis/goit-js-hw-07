import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");
const galleryItem = galleryItems.map(element => {
    const image = `<a class = "gallery_item" href = "${element.original}" >
    <img 
    class= "gallery_image"
    src = "${element.preview}"
    alt = "${element.description}"
    title = "${element.description}"
    />
    </a>`;
    return image;
})
    .join(" ");
gallery.insertAdjacentHTLM("afterbegin", galleryItem);

new SimpleLightbox(".gallery a", { captionDelay: 250 });

console.log(galleryItems);
