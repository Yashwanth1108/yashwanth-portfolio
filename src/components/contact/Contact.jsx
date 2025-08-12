import "./contact.css";

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get in Touch</h2>
      <span className="section__subtitle">Contact Me</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>
        </div>

        <div className="contact__info">
          <div className="contact__card">
            <i className="bx bxl-messenger contact__card-icon"></i>
            <h3 className="contact__card-title">Telegram</h3>
            <span className="contact__card-data">yashreddy11</span>
            <a href="https://t.me/yashreddy11" className="contact__button">
              Write me{" "}
              <i className="bx bx-right-arrow-alt contact__button-icon"></i>
            </a>
          </div>

          <div className="contact__card">
            <i className="bx bxl-whatsapp contact__card-icon"></i>
            <h3 className="contact__card-title">WhatsApp</h3>
            <span className="contact__card-data">+91 6363025261</span>
            <a
              href="https://api.whatsapp.com/send?phone=6363025261&text=Hello, more information!"
              className="contact__button"
            >
              Write me{" "}
              <i className="bx bx-right-arrow-alt contact__button-icon"></i>
            </a>
          </div>

          <div className="contact__card">
            <i className="bx bx-mail-send contact__card-icon"></i>
            <h3 className="contact__card-title">Email</h3>
            <span className="contact__card-data">yashwanthx2000@gmail.com</span>
            <a
              href="mailto:yashwanthx2000@gmail.com.com"
              className="contact__button"
            >
              Write me
              <i className="bx bx-right-arrow-alt contact__button-icon"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
