"use client";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import ContactCode from "../components/ContactCode";
import styles from "../styles/ContactPage.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactPage = () => {
  const form = useRef();
  const submitForm = async (e) => {
    e.preventDefault();
    console.log(
      process.env.NEXT_PUBLIC_SERVICE_ID,
      process.env.NEXT_PUBLIC_TEMPLATE_ID,
      process.env.NEXT_PUBLIC_EMAIL_KEY
    );
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAIL_KEY
      )
      .then(
        (result) => {
          console.log(result.text + "Sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    toast("Sent successfully!!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <div className={styles.container}>
      <div>
        <h3 className={styles.heading}>Find Me On</h3>
        <ContactCode />
      </div>
      <div>
        <h3 className={styles.heading}>Or Fill Out This Form</h3>
        <form ref={form} className={styles.form} onSubmit={submitForm}>
          <div className={styles.flex}>
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" required />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" required />
            </div>
          </div>
          <div>
            <label htmlFor="name">Subject</label>
            <input type="text" name="subject" id="subject" required />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="5" required></textarea>
          </div>
          <button type="submit">Submit</button>
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </form>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "Contact" },
  };
}

export default ContactPage;
