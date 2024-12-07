import React from "react";

const GoodsCard = ({ image, name, price }) => {
    return (
        <div style={styles.card}>
            <img src={image} alt={name} style={styles.image} />
            <h3 style={styles.name}>{name}</h3>
            <p style={styles.price}>Ціна: {price} грн</p>
        </div>
    );
};

const styles = {
    card: {
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "10px",
        textAlign: "center",
        width: "200px",
        margin: "10px",
    },
    image: {
        width: "100%",
        height: "150px",
        objectFit: "cover",
        borderRadius: "5px",
    },
    name: {
        fontSize: "16px",
        fontWeight: "bold",
        margin: "10px 0",
    },
    price: {
        fontSize: "14px",
        color: "#555",
    },
};

export default GoodsCard;