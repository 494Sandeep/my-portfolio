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
      <h2 className="section__title">Contact Me</h2>
      <span className="section__subtitle">Get in touch</span>

      <div className="contact__container container grid">
        <div>
          <ContactTile data={data} />
        </div>
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
              const response = await fetch(
                "https://formsubmit.co/494sandeep@gmail.com",
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    ...values,
                  }),
                }
              );
              const result = await response.json();
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
            <form className="contact__form grid" onSubmit={handleSubmit}>
              <div className="contact__inputs grid">
                <div className="contact__content">
                  <label htmlFor="name" className="contact__label">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="contact__input"
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
                ></input>

                <div className="contact__content">
                  <label htmlFor="email" className="contact__label">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="contact__input"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  <span className="contact__errorMessage">
                    {errors.email && touched.email && errors.email}
                  </span>
                </div>
              </div>
              <div className="contact__content">
                <label htmlFor="project" className="contact__label">
                  Project / Heading
                </label>
                <input
                  type="text"
                  name="project"
                  className="contact__input"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.project}
                />
                <span className="contact__errorMessage">
                  {errors.project && touched.project && errors.project}
                </span>
              </div>

              <div className="contact__content">
                <label htmlFor="message" className="contact__label">
                  Message
                </label>
                <textarea
                  cols={0}
                  rows={7}
                  name="message"
                  className="contact__input"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.message}
                />
                <span className="contact__errorMessage">
                  {errors.message && touched.message && errors.message}
                </span>
              </div>

              <div>
                <button
                  className="button button--flex"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Send Message
                  {isSubmitting ? (
                    <i className="uil uil-spinner-alt button__icon spin"></i>
                  ) : (
                    <i className="uil uil-message  button__icon"></i>
                  )}
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default ContactMe;
