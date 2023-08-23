// export const storeCart = document.querySelector('.cart');


// export const btnBuyBook = document.querySelector('.book');


// export function writtenOnLocalStorage() {
//     // localStorage.setItem('test', 1);
//     // console.log(localStorage.getItem('test'));
//     // console.log(`Длина ${localStorage.length}`)
    
//     // localStorage.clear();
    
const buyIcon = `<div class="active-cart"><p class="buy-counter">1</p></div>`;

let indexBuy = [];
const btnBuyBook = document.querySelector('.books-list');

export function listenCart(){     
btnBuyBook.addEventListener('click', function(event) {
    let bookId = event.target.getAttribute('data-id');
    let bookName = event.target.getAttribute('data-name');
    let bookPrice = event.target.getAttribute('data-price');
    const data = {
        id: bookId,
        name: bookName,
        price: bookPrice
    }
    // localStorage.setItem('id', bookId);
    // localStorage.setItem('name', bookName);
    // localStorage.setItem('price', bookPrice);
    indexBuy.push(data);
    localStorage.setItem("indexbuy", JSON.stringify(indexBuy));
    document.querySelector('.icons').insertAdjacentHTML("afterend" ,buyIcon)
    // console.log(localStorage.length);
})
}

