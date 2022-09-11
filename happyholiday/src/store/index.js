//1.Сначала создаем стор.

// import {configureStore} from "@reduxjs/toolkit";
//
// export const store = configureStore({
//     //тут в редьюсере и будут данные, мы туда передаем редьюсер, а они уже обращаются к данным
//     reducer: {
//
//     }
// })

//2. Создаем в папке стор файл holidaysSlice.js

import {configureStore} from "@reduxjs/toolkit";
import holidaysReducer from "./holidaysSlice";
//название мы ему дали сами, это холидэйсСлайс
import textReducer from './textSlice';
import imageReducer from './pictureSlice'

export const store = configureStore({

    reducer: {
        //4.сюда вставляем то, что экспортировали в холидайсслайс. до двоеточия имя сами даем. не забываем импортировать его
        holidays: holidaysReducer,
        text: textReducer,
        picture: imageReducer,
    }
});


//5.Теперь нам надо обернуть все приложение в провайдер, чтобы у нас все компоненты знали про редакс и его данные
//Идем в индекс приложения


//6. Теперь чтобы все заработало, мы этот холидай должны получать из стор и выводить там, где мы его используем. Мы его используем в текст контекст.
// в текст контекст и идем
