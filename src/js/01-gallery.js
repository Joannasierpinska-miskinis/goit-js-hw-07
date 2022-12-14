import { galleryItems, galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");
const galleryItem = galleryItems.map(element => {
    const image = `<div class = "gallery_item">
    <a class= "gallery_link" href = "${element.original}">
    <img 
    class= "gallery_image" 
    src= "${element.preview}"
    data-source= "${element.original} "
    alt="${element.description}"
    />
    </a>
    </div>`;
    return image;
})
    .join(" ");
gallery.insertAdjacentHTML("afterbegin", galleryItem);
gallery.addEventListener("click", (event) => {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") return;


    const dataImg = event.target.getAttribute("data-source");
    const altImg = event.target.getAttribute("alt");
    const instance = basicLightbox.create(`<img src = "${dataImg}" alt = "${altImg}" />`,
        {
            onShow: (instance) => {
                document.addEventListener("keydown", (event) => {
                    if (event.key === "Escape") instance.close();
                })
            }
        
        });
    instance.show();
});

console.log(galleryItems);
