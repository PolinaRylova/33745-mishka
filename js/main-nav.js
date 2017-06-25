/**
 * Created by polin on 09.06.2017.
 */
var header = document.querySelector('.page-header');
var nav = document.querySelector('.main-nav');
var itemToggle = document.querySelector('.main-nav__item--toggle');
var linkToggle = document.querySelector('.main-nav__link--toggle');

//При работающем js
header.classList.remove('page-header--no-js');//убираем высоту для раскрытого выпадающего меню, находящегося в потоке
nav.classList.remove('main-nav--no-js');//убираем меню из потока, делаем его абсолютно спозиционированным
itemToggle.classList.remove('main-nav__item--no-js-toggle');//отображаем иконку переключателя
itemToggle.classList.remove('main-nav__item--toggle-close');//удаляем иконку крестика
itemToggle.classList.add('main-nav__item--toggle-open');//добавляем иконку гамбургера и сворачиваем меню

//Добавляем обработку события клика по кнопке для раскрытия/сокрытия меню
linkToggle.addEventListener('click', function(event) {
  event.preventDefault();
  if (itemToggle.classList.contains('main-nav__item--toggle-open')) {
    itemToggle.classList.remove('main-nav__item--toggle-open');//удаляем гамбургер
    itemToggle.classList.add('main-nav__item--toggle-close');//добавляем крестик и разворачиваем меню
  } else {
    itemToggle.classList.remove('main-nav__item--toggle-close');//убираем крестик
    itemToggle.classList.add('main-nav__item--toggle-open');//добавляем гамбургер и сворачиваем меню
  }
});
