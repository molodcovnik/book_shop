import {fetchLoad} from '../index.js'


export const api = 'AIzaSyBeuGOqmtViVCG1M-EI25RWlK9lK4ViMy0';

export const list = document.querySelector('.category-list');

const activeCategory = document.querySelector('.active-category');
export const btnLoadMore = document.querySelector('.load-more');

list.addEventListener('click', onCategoryClick);

function onCategoryClick(e) {
    const data = e.target.getAttribute('data-category');
    console.log(data);
    // let notActiveCategory = e.target;
    // activeCategory.classList.remove('active-category');
    // notActiveCategory.classList.add('active-category');
    const step = 6;
    let startIndex = 0;
    const booksList = document.querySelector('.books-list');
    booksList.remove();
    let newBookList = `<div class="books-list"></div>`;
    document.querySelector('.books-wrapper').insertAdjacentHTML("afterbegin", newBookList);
    let url = `https://www.googleapis.com/books/v1/volumes?q="subject:${data}"&key=${api}&printType=books&startIndex=${startIndex}&maxResults=6&langRestrict=en`
    fetchLoad(data, startIndex);
    
    console.log(url);
    btnLoadMore.onclick = function() {
        
        console.log('click');
        startIndex += step;
        let url = `https://www.googleapis.com/books/v1/volumes?q="subject:${data}"&key=${api}&printType=books&startIndex=${startIndex}&maxResults=6&langRestrict=en`
        console.log(startIndex);
        // console.log(url)
        
        fetchLoad(data, startIndex);

    }
    }
