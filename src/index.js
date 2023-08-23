import "@babel/polyfill";
import "./index.html";
import "./index.scss";
import { mult, sum } from "./modules/calc";
import {sliderFunction, nextClickFunction} from './modules/slider';
import {onCategoryClick, api, btnLoadMore} from './modules/fetch';
import {activeCategory} from './modules/category';
import {listenCart} from './modules/cart'
import {list} from './modules/fetch';



// sliderFunc();
// nextClick();
sliderFunction();
nextClickFunction();
mainPage();

listenCart();



function mainPage() {
    const data = 'Architecture';
    let startIndex = 50;
    
    const step = 6;
    fetchLoad(data, startIndex);
    btnLoadMore.onclick = function() {
        console.log('main page');
        startIndex += step;
        fetchLoad(data, startIndex);
        
        
        
    }
    
    }


export function fetchLoad(data, startIndex) {
    let url = `https://www.googleapis.com/books/v1/volumes?q="subject:${data}"&key=${api}&printType=books&startIndex=${startIndex}&maxResults=6&langRestrict=en`
    fetch(url)
            .then(response => {
                return response.json()
            })
            .then(data => {
                // const obj = data.items[5];
                // console.log(obj.volumeInfo.description);
                const objects = data.items;
                console.log(objects);
                objects.forEach(element => {
                    const id = element.id;
                    console.log(id);
                    const title = element.volumeInfo.title;
                    const avgRating = element.volumeInfo.averageRating ? element.volumeInfo.averageRating : '';
                    const ratingCount = +element.volumeInfo.ratingsCount >= 1 ? element.volumeInfo.ratingsCount + ' review' : '';
                    const description = element.volumeInfo.description ? element.volumeInfo.description : '';
                    const authors = element.volumeInfo.authors ? element.volumeInfo.authors : '';
                    const price = element.saleInfo.retailPrice ? element.saleInfo.retailPrice.amount : '';
                    const currencyCode = element.saleInfo.retailPrice ? element.saleInfo.retailPrice.currencyCode : '';
                    const stars = '★'.repeat(avgRating);
                    // for (let i in authors) {
                    //     console.log(authors[i]);
                    // }
                    
                    let images = element.volumeInfo.imageLinks.thumbnail ? element.volumeInfo.imageLinks.thumbnail : 'https://shop.kp.ru/catalog/media/kpshop/e/9/61ade51605ae9.jpg';
                    
          
                    const bookDiv = `<div class="book"><div class="book-image"><img src="${images}" alt="book"></div><div class="book-main-info"><div class="book-autors"><p>${authors}</p></div><div class="book-title"><p>${title}</p></div><div class="ratings"><p>${stars}</p><p>${ratingCount}</p></div><div class="book-description"><p>${description}</p></div><div class="book-price"><span>${currencyCode}</span><span> ${price}</span></div><button class="btn buy-book" data-id="${id}" data-name="${title}" data-price="${price}">BUY NOW</button></div></div></div>`;
                    
                    

                    // document.querySelector('.books-list').insertAdjacentHTML("afterbegin", bookDiv);
                    
                    
                    const elem = document.querySelector('.books-list');
                    elem.innerHTML += bookDiv;
                
            
                });
                
            })
            .catch(error => {
                console.log('error', error);
            });
}

// let indexBuy = [];
// const btnBuyBook = document.querySelector('.books-list');

// function listenCart(){     
//     btnBuyBook.addEventListener('click', function(event) {
//         let bookId = event.target.getAttribute('data-id');
//         let bookName = event.target.getAttribute('data-name');
//         let bookPrice = event.target.getAttribute('data-price');
//         const data = {
//             id: bookId,
//             name: bookName,
//             price: bookPrice
//         }
//         // localStorage.setItem('id', bookId);
//         // localStorage.setItem('name', bookName);
//         // localStorage.setItem('price', bookPrice);
//         indexBuy.push(data);
//         localStorage.setItem("indexbuy", JSON.stringify(indexBuy));
//     // console.log(localStorage.length);
// })
// }
