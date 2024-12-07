import React from "react";
import GoodsCard from "./GoodsCard";

const Gallery = () => {
    const goods = [
        {
            id: 1,
            image: "https://content2.rozetka.com.ua/goods/images/big_tile/491435741.jpg",
            name: "Ноутбук ASUS TUF",
            price: 44999,
        },
        {
            id: 2,
            image: "https://content1.rozetka.com.ua/goods/images/big_tile/484774588.jpg",
            name: "Ноутбук Apple MacBook",
            price: 55499,
        },
        {
            id: 3,
            image: "https://content1.rozetka.com.ua/goods/images/big_tile/372796280.png",
            name: "Ноутбук Acer Aspire 7",
            price: 26999,
        },
        {
            id: 4,
            image: "https://content2.rozetka.com.ua/goods/images/big_tile/472002264.jpg",
            name: "Ноутбук Lenovo IdeaPad",
            price: 17999,
        },
        {
            id: 5,
            image: "https://content1.rozetka.com.ua/goods/images/big_tile/490084909.jpg",
            name: "Ноутбук ASUS VivoBook 16",
            price: 24999,
        },
        {
            id: 6,
            image: "https://content2.rozetka.com.ua/goods/images/big_tile/423900740.jpg",
            name: "Ноутбук Acer Aspire 3",
            price: 22999,
        },
    ];

    return (
        <div style={styles.gallery}>
            {goods.map((item) => (
                <GoodsCard
                    key={item.id}
                    image={item.image}
                    name={item.name}
                    price={item.price}
                />
            ))}
        </div>
    );
};

const styles = {
    gallery: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
    },
};

export default Gallery;
