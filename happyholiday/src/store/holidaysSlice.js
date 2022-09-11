//2.1Тут мы создаем функцию слайсов с помощью createSlice, ее также нужно импортиорваь из редакс тулкит.
//3.Задаем редьюсрам какое-то начальное имя в name, это имя будет префиксом в экшенах
//3.1 Далее мы задаем initialState для наших holidays, которые приходят с сервера (holidays: {})
//и здесь же будет храниться празник текущий, который мы выбрали (holiday: '')
//тут же пишем свойство reducer: {setHoliday}. Редьюсер это объект с методом, имя ему можно задать самому, но все методы в
// редьюсере могут менять свойства инишиал состояния.
// этот метод, у нас он setHoliday, принимает два параметра state, action

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {URI_API} from "../components/const/const";
//10. Добавляем функцию, обычно для нее отдельный файл, но тут ок, называем мы ее как хотим (ее объяснение ниже)
export const fetchHolidays = createAsyncThunk(
    'holidays/fetchHolidays',
    async () => {
        const res = await fetch(URI_API);
        const data = await res.json();
        return data
    }
)

const holidaysSlice = createSlice({
    name: 'holidays',
    initialState: {
        holidays: {},
        loading: '',
    },
    // reducers: {
    //     setHolidayx(state, action) {
    //         //стейт холидай (это мы меняем стейт у holiday: '',) мы будем записывать то, что вернулось из экшена, а в экшене есть свйоство пэйлоад и там хранится наш ответ.
    //         state.holiday = action.payload;
    //     }
    // },
    reducers: {},
    extraReducers: {
        [fetchHolidays.pending]: (state) => {
            state.loading = 'loading';
        },
        [fetchHolidays.fulfilled]: (state, action) => {
            state.loading = 'success';
            state.holidays = action.payload;
        },
        [fetchHolidays.rejected]: (state) => {
            state.loading = 'failed';
            state.holidays = {};
        },
    }

})


//4. Далее нам надо из holiday.Slice экспортировать экшены и редьюсеры, которые мы запишем в редьюсеры в сторе.
// эспортируем деструктуризацией, чтобы удобнее было доставать
//export const {setHolidayx} = holidaysSlice.actions;

export default holidaysSlice.reducer;
//переходим в папку стор и в файл стор


//объяснение функции createAsyncThunk
//  const fetchHolidays = createAsyncThunk(
//первый параметр имя экшена: оно формируется через слеш из имени(name: holidays) и имени самой функции(fetchHolidays). Это имя формируется само
//  'holidays/fetchHolidays',
//далее просто асинхронная функция
//  async () => {.......}
//  )


//11. Написали функцию и теперь надо взять редьюсеры, имена, которых делаются автоматически. Нам надо их достать. Для этого мы используем
//экстраредьюсеры в функции holidaySlice выше. После редьюсера пишем экстрареюсерс и херачим такие редьюсеры:
// extraReducers: {
//     [fetchHolidays.pending]: () => {},
//         [fetchHolidays.fulfilled]: () => {},
//         [fetchHolidays.rejected]: () => {},
//
// }
// везде эти функции редьюсеры получают state, action

//12. теперь эту функцию надо вызвать. Переходим в choises и вызываем in useEffect