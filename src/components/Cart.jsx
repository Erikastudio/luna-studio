export default function Cart({
  openCart,
  setOpenCart,
  cart,
  setCart
}) {
  if (!openCart) return null;

  const total = cart.reduce(
    (sum, item) => sum + item.price * (item.qty || 1),
    0
  );

  const removeItem = (index) => {
    const copy = [...cart];
    copy.splice(index, 1);
    setCart(copy);
  };

  const sendWhatsApp = () => {
    let message = "Hola, quiero comprar:%0A";

    cart.forEach((item) => {
      message += `- ${item.name} x${item.qty || 1} ($${item.price})%0A`;
    });

    message += `%0ATotal: $${total}`;

    window.open(
      `https://wa.me/573000000000?text=${message}`,
      "_blank"
    );
  };

  return (
    <div style={{
      position: "fixed",
      right: 0,
      top: 0,
      width: "320px",
      height: "100%",
      background: "#111",
      borderLeft: "1px solid #333",
      padding: "15px",
      zIndex: 999
    }}>

      <button onClick={() => setOpenCart(false)}>
        ❌ Cerrar
      </button>

      <h2 style={{ color: "#facc15" }}>Carrito</h2>

      {cart.length === 0 && (
        <p style={{ color: "gray" }}>Carrito vacío</p>
      )}

      {cart.map((item, i) => (
        <div key={i} style={{
          background: "#000",
          padding: "8px",
          marginBottom: "8px",
          borderRadius: "8px"
        }}>
          <p style={{ color: "white" }}>
            {item.name} x{item.qty || 1}
          </p>

          <p style={{ color: "#facc15" }}>
            ${item.price * (item.qty || 1)}
          </p>

          <button onClick={() => removeItem(i)}>
            Eliminar
          </button>
        </div>
      ))}

      <h3 style={{ color: "white" }}>
        Total: ${total}
      </h3>

      <button
        onClick={sendWhatsApp}
        style={{
          width: "100%",
          marginTop: "10px",
          padding: "10px",
          background: "#25D366",
          border: "none",
          fontWeight: "bold",
          cursor: "pointer"
        }}
      >
        Enviar pedido a WhatsApp
      </button>
    </div>
  );
}