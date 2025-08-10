import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { ContactTile } from "./ContactTile";

import "./index.scss";

const ContactMe = ({ data }) => {
  const ContactMeSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Name should be at least 5 characters long!")
      .max(50, "Name should be at most 50 characters long!")
      .required("Required!"),
    email: Yup.string().email("Invalid email!").required("Required!"),
    project: Yup.string()
      .min(2, "Project name or Heading should be at least 5 characters long!")
      .max(50, "Project name or Heading should be at most 50 characters long!")
      .required("Required!"),
    message: Yup.string()
      .min(5, "Message should be at least 5 characters long!")
      .max(250, "Message should be at most 250 characters long!")
      .required("Required!"),
  });

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Let's Work Together</h2>
      <span className="section__subtitle">I'm always interested in new opportunities and exciting projects. Let's discuss how we can bring your ideas to life!</span>

      <div className="contact__container container">
        <div className="pulse-ring decoration-circle__1"></div>
        <div className="pulse-ring decoration-circle__2"></div>
        <div className="contact__content">
          <div className="contact__info">
            <ContactTile data={data} />
          </div>

          <div className="contact__form-wrapper">
            <Formik
              initialValues={{
                name: "",
                _subject: "New submission!",
                email: "",
                project: "",
                message: "",
              }}
              validationSchema={ContactMeSchema}
              onSubmit={async (values, { resetForm, setSubmitting }) => {
                try {
                  await fetch("https://formsubmit.co/494sandeep@gmail.com", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      ...values,
                    }),
                  });
                  resetForm({
                    name: "",
                    _subject: "New submission!",
                    email: "",
                    project: "",
                    message: "",
                  });
                  setSubmitting(false);
                } catch (error) {
                  console.error("Error:", error);
                  resetForm({
                    name: "",
                    _subject: "New submission!",
                    email: "",
                    project: "",
                    message: "",
                  });
                  setSubmitting(false);
                }
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <form className="contact__form" onSubmit={handleSubmit}>
                  <div className="contact__field">
                    <label htmlFor="name" className="contact__label">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="contact__input"
                      placeholder="Your Name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                    />
                    <span className="contact__errorMessage">
                      {errors.name && touched.name && errors.name}
                    </span>
                  </div>

                  <input
                    type="hidden"
                    name="_subject"
                    value="New submission!"
                  />

                  <div className="contact__field">
                    <label htmlFor="email" className="contact__label">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="contact__input"
                      placeholder="your@email.com"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                    <span className="contact__errorMessage">
                      {errors.email && touched.email && errors.email}
                    </span>
                  </div>

                  <div className="contact__field">
                    <label htmlFor="message" className="contact__label">
                      Message
                    </label>
                    <textarea
                      rows={6}
                      name="message"
                      className="contact__input contact__textarea"
                      placeholder="Tell me about your project..."
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.message}
                    />
                    <span className="contact__errorMessage">
                      {errors.message && touched.message && errors.message}
                    </span>
                  </div>

                  <button
                    className="contact__submit-btn"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
