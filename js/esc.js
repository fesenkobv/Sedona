var formSearch = document.querySelector(".search-form");//присваиваем переменной блок формы
var keyEsc = 27;//код кнопки Esc


window.addEventListener("keydown", function (evt) {
			if (evt.keyCode === 27){
        if (formSearch.classList.contains("js-form-show")){
          evt.preventDefault();//убираем действие по умолчанию
          formSearch.classList.remove("js-form-show");//убираем класс открытия формы
  				formSearch.classList.add("js-form-close");//добавляем класс закрытия формы
        };
        };
        });
