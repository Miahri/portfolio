import React from 'react';
import block from "../../common/styles/CardBlock.module.css";
import container from "../../common/styles/Container.module.css";
import card from "../../common/styles/Card.module.css"
import styles from "./Contacts.module.css"
import btn from "../../common/styles/Button.module.css";

const Contacts = () => {
    return (
        <div className={`${block.cardBlock} ${styles.contactsBlock}`}>
            <div className={`${container.container} ${styles.container}`}>
                <h2>Контакты</h2>
                <form action="" className={`${card.card} ${styles.contactForm}`}>
                    <input type="text" id="" name="" placeholder=""/>
                    <input type="text" id="" name="" placeholder=""/>
                    <textarea name="" id=""></textarea>

                </form>
                <button className={`${btn.btn} ${styles.sendBtn}`}>Отправить</button>
            </div>
        </div>
    );
};

export default Contacts;


