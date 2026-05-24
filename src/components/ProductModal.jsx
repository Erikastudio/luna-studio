import { useState, useEffect } from "react";

export default function ProductModal({ product, onClose, addToCart }) {
  const [img, setImg] = useState("");

  useEffect(() => {
    if (product) setImg(product.images[0]);
  }, [product]);

  if (!product) return null;

  return (
    <div style={{
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.8)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 999
    }}>

      <div style={{
        background: "#111",
        padding: 20,
        borderRadius: 12,
        width: "90%",
        maxWidth: 800,
        display: "flex",
        gap: 20
      }}>

        {/* IMAGEN */}
        <div style={{ flex: 1 }}>
          <img
            src={img}
            style={{
              width: "100%",
              height: 300,
              objectFit: "cover",
              borderRadius: 10
            }}
          />

          <div style={{ display: "flex", gap: 10, marginTop: 10 }}>
            {product.images.map((i, index) => (
              <img
                key={index}
                src={i}
                onClick={() => setImg(i)}
                style={{
                  width: 60,
                  height: 60,
                  objectFit: "cover",
                  borderRadius: 6,
                  cursor: "pointer",
                  border: img === i ? "2px solid yellow" : "none"
                }}
              />
            ))}
          </div>
        </div>

        {/* INFO */}
        <div style={{ flex: 1 }}>
          <h2>{product.name}</h2>

          <p style={{ color: "#facc15", fontSize: 20 }}>
            ${product.price}
          </p>

          <p style={{ color: "#aaa" }}>
            {product.description}
          </p>

          <button
            onClick={() => addToCart(product)}
            style={{
              background: "#22c55e",
              padding: 10,
              width: "100%",
              borderRadius: 8,
              marginTop: 20,
              fontWeight: "bold"
            }}
          >
            Agregar al carrito
          </button>

          <button
            onClick={onClose}
            style={{
              marginTop: 10,
              width: "100%",
              padding: 10,
              background: "#333",
              borderRadius: 8
            }}
          >
            Cerrar
          </button>
        </div>

      </div>
    </div>
  );
}