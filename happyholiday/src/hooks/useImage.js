import {useEffect, useState} from "react";
import {URI_API} from "../components/const/const";
import Logo from '../img/card-bg.jpg'

export const useImage = (holiday) => {
    const [img, setImg] = useState(Logo);

    useEffect(() => {
        if(!holiday) return;

        fetch(`${URI_API}image/${holiday}`)
            .then(response => {
                if (response.status !== 200) {
                    throw new Error(response.status)
                }
                return response.json();
            })
            .then(data => {
                if (data.urlImg) {
                    setImg(data.urlImg);
                }
            })
            .catch(err => console.error(err));
    }, [holiday]);

    return [img];
}