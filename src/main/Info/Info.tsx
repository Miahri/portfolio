import React from 'react';
import styles from './Info.module.css'

const Info = () => {
    return (
        <div className={styles.infoBlock}>
            <div className={styles.container}>
                <div className={styles.intro}>
                    <p>ПРИВЕТ, Я</p>
                    <h1>Мяхри Хоммадова</h1>
                    <p>ФРОНТЕНД РАЗРАБОТЧИК</p>
                </div>
                <div className={styles.photo}>
                    <img src="https://i.pinimg.com/750x/b8/ec/f3/b8ecf32014f1cf21dea0d3294eb24b34.jpg" alt="ava"/>
                </div>
            </div>
        </div>
    );
};

export default Info;