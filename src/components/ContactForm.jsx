import { useState } from "react";
import emailjs from "@emailjs/browser";
import "../Styles/ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const userID = import.meta.env.VITE_EMAILJS_USER_ID;

    emailjs.send(serviceID, templateID, templateParams, userID).then(
      (response) => {
        console.log("Email enviado com sucesso:", response.status, response.text);
        alert("Formulário enviado com sucesso!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      },
      (error) => {
        console.error("Erro ao enviar o email:", error);
        alert("Ocorreu um erro ao enviar o formulário. Tente novamente mais tarde.");
      }
    );
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", padding: "20px" }}>
      <h2>Entre em contato para mais informações</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="name" style={{ display: "block", marginBottom: "5px" }}>
            Nome:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="input-field"
            style={{
              width: "100%",
              padding: "8px",
              boxSizing: "border-box",
              borderRadius: "15px",
              backgroundColor: "#f5f5f5",
            }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="email" style={{ display: "block", marginBottom: "5px" }}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="input-field"
            style={{
              width: "100%",
              padding: "8px",
              boxSizing: "border-box",
              borderRadius: "15px",
              backgroundColor: "#f5f5f5",
            }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="phone" style={{ display: "block", marginBottom: "5px" }}>
            Telefone:
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="input-field"
            style={{
              width: "100%",
              padding: "8px",
              boxSizing: "border-box",
              borderRadius: "15px",
              backgroundColor: "#f5f5f5",
            }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="message" style={{ display: "block", marginBottom: "5px" }}>
            Mensagem:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="input-field"
            style={{
              width: "100%",
              padding: "8px",
              boxSizing: "border-box",
              borderRadius: "15px",
              backgroundColor: "#f5f5f5",
            }}
          ></textarea>
        </div>

        <button
          type="submit"
          style={{
            backgroundColor: "#022e34",
            color: "#fafafa",
            padding: "10px 15px",
            border: "none",
            borderRadius: "50px",
            cursor: "pointer",
          }}
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
