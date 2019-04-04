//блок объявления переменных
var btnSearch = document.querySelector(".search-button-call");//присваиваем переменной кнопку открытия/закрытия PopUp
var formSearch = document.querySelector(".search-form");//присваиваем переменной блок формы
var arrival = document.querySelector(".search-date-arrival");//присвоили переменной input даты заезда
var keyEsc = 27;//код кнопки Esc

formSearch.classList.add("js-form-close");//закрываем PopUp при загрузке JS файла


//блок открытия-закрытия формы по кнопке
btnSearch.addEventListener("click", function(evt){
evt.preventDefault();//убираем действие по умолчанию
formSearch.classList.toggle("js-form-show");//чередуем класс открытия формы
formSearch.classList.toggle("js-form-close");//чередуем класс закрытия формы
arrival.focus();//фокусируем на input даты заезда
	});


//блок закрытия формы через Esc
var formSearch = document.querySelector(".search-form");//присваиваем переменной блок формы
var keyEsc = 27;//код кнопки Esc
document.addEventListener("keydown", function (evt) {

if (evt.keyCode == 27){
	evt.preventDefault();//убираем действие по умолчанию
	formSearch.classList.remove("js-form-show");//убираем класс открытия формы
	formSearch.classList.add("js-form-close");//добавляем класс закрытия формы
};
});
