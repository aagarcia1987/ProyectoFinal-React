import { useContext, useState } from "react";
import cartContext from "../../context/cartContext";
import "./FormCheckout.css";

export default function FormCheckout({ handleCheckout }) {
  const { cartItems } = useContext(cartContext);
  const [formData, setFormData] = useState({
    username: "",
    phone: "",
    email: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  if (!cartItems || cartItems.length === 0) return null;

  function validate() {
    const newErrors = {};
    if (!formData.username.trim()) newErrors.username = true;
    if (!formData.phone.trim()) newErrors.phone = true;
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = true;
    return newErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    handleCheckout(formData);
    setSubmitted(true);
    setFormData({ username: "", phone: "", email: "" });
    setErrors({});
    setTimeout(() => setSubmitted(false), 3000); // Oculta el mensaje después de 3s
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: false }));
  }

  return (
    <div className="checkout-container">
      <h4 className="checkout-title">Completa tus datos para confirmar la compra</h4>
      <form className="checkout-form" onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            className={`checkout-input ${errors.username ? "input-error" : ""}`}
            name="username"
            type="text"
            placeholder="Nombre"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            className={`checkout-input ${errors.email ? "input-error" : ""}`}
            name="email"
            type="email"
            placeholder="tunombre@xxx.com"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Teléfono:
          <input
            className={`checkout-input ${errors.phone ? "input-error" : ""}`}
            name="phone"
            type="tel"
            placeholder="Teléfono"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </label>
        <div className="checkout-buttons">
          <button className="checkout-btn" type="submit">Enviar</button>
          <button className="checkout-btn secondary" type="button" onClick={() => setFormData({ username: "", phone: "", email: "" })}>Reiniciar</button>
        </div>
        {submitted && <p className="checkout-success">¡Formulario enviado con éxito!</p>}
      </form>
    </div>
  );
}
