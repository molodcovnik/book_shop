import {list} from './fetch';



list.onclick = function(e) {
    const activeCategory = document.querySelector('.active-category');
    let parentActiveCategory = activeCategory.parentElement;
    let notActiveCategory = e.target;
    let parentNotActiveCategory = notActiveCategory.parentElement;
    
    activeCategory.classList.remove('active-category');
    parentActiveCategory.classList.remove('parent-active-category')
    notActiveCategory.classList.add('active-category');
    parentNotActiveCategory.classList.add('parent-active-category')
}