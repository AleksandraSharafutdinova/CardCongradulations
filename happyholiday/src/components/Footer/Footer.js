import React, {useContext} from "react";
import Container from "../Container/Container";
import style from './Footer.module.css';
import {ReactComponent as VKIcon} from '../../img/vk.svg';
import {ReactComponent as TGIcon} from '../../img/tg.svg';
import {ReactComponent as PNTIcon} from '../../img/pinterest.svg';
import {ReactComponent as SMTIcon} from '../../img/stumbleupon.svg';
import {testingContext} from "../../context/testingContext";


const Footer = () => {

    const {designer, setDesigner} = useContext(testingContext);
    const onClick = () => {
        setDesigner(prompt('Напиши сюда имя какое-нибудь:', ''))
    }

  return (
      <footer className={style.footer}>
          <Container>
              <div className={style.wrapper}>
                  <div className={style.contacts}>
                      <p>Design: <a href='https://t.me/Mrshamalloww'>{designer}</a></p>
                      <p>Coder: <a href='https://t.me/@Sandra_Shrftdnv'>Aleksandra Sharafutdinova</a></p>
                      <p onClick={onClick}>© HBCard, 2022</p>
                  </div>
                  <ul className={style.social}>
                      <li className={style.item}>
                          <a href='https://vk.com/methed' className={style.link}>
                              <VKIcon />
                          </a>
                      </li>
                      <li className={style.item}>
                          <a href='https://t.me/methed_chat_frontend' className={style.link}>
                              <TGIcon />
                          </a>
                      </li>
                      <li className={style.item}>
                          <a href='https://pinterest.com' className={style.link}>
                              <PNTIcon />
                          </a>
                      </li>
                      <li className={style.item}>
                          <a href='https://stumbleupon.com' className={style.link}>
                              <SMTIcon/>
                          </a>
                      </li>
                  </ul>
              </div>
          </Container>
      </footer>
  )
};

export default Footer;