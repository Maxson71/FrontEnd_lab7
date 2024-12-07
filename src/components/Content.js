import React, { Component } from 'react';

// Функціональний компонент Image
function ImageCom(props) {
    return (
        <div>
            <a href="https://city-adm.lviv.ua/">
                <img
                    id="lviv-image"
                    height={props.height}
                    src="https://34travel.me/media/posts/61f41220957b1-1500-ua.jpg"
                    alt="Фото Львову"
                />
            </a>
        </div>
    );
}

// Класовий компонент Content
class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: 350,
        };
    }

    increaseSize = () => {
        this.setState({ height: this.state.height + 30 });
    };

    decreaseSize = () => {
        this.setState({ height: Math.max(this.state.height - 30, 30) });
    };

    render() {
        return (
            <main>
                <h4>Хобі</h4>
                <ul>
                    <li>Програмування</li>
                    <li>Криптовалюта</li>
                    <li>Настільні ігри</li>
                </ul>
                <h4>Улюблені фільми</h4>
                <ol>
                    <li>Інтерстеллар</li>
                    <li>Людина-павук: Додому шляху нема</li>
                    <li>Бійцівський клуб</li>
                </ol>
                <p>
                    <b>Львів</b> — одне з найкрасивіших і найстаріших міст України, яке
                    приваблює своєю унікальною атмосферою та архітектурою.
                </p>
                <ImageCom height={this.state.height} />
                <div>
                    <button onClick={this.increaseSize}>Збільшити зображення</button>
                    <button onClick={this.decreaseSize}>Зменшити зображення</button>
                </div>
            </main>
        );
    }
}

export default Content;
