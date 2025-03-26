"use cliente";
import { use, useState } from "react";
import React from "react";
import { db } from "../config/config";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const initialState = {
  name: "",
  email: "",
  message: "",
};

export const Contact = () => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setState({ ...initialState });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "contacts"), {
        name,
        email,
        message,
        timestamp: serverTimestamp(),
      });
      alert("Message sent successfully!");
      clearState();
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Failed to send message");
    }
  };

  return (
    <div
      id="contact"
      className="py-12"
      style={{
        background: `linear-gradient(
        140deg,
        rgba(3, 94, 139, 0.93),
        rgba(0, 203, 169, 0.73),
        rgba(0, 225, 80, 0.04)
      ), linear-gradient(72deg, transparent, rgba(0, 225, 117, 0.64))`,
      }}
    >
      <div className="flex   px-20">
        <div className="w-1/2   p-8">
          <div className="text-center mb-6">
            <h2 className=" text-left text-3xl font-bold text-gray-100">
              Get In Touch
            </h2>
            <div
              className="w-16 h-1  my-2"
              style={{
                background: `linear-gradient(
        140deg,
        rgba(3, 94, 139, 0.93),
        rgba(0, 203, 169, 0.73),
        rgba(0, 225, 80, 0.04)
      ), linear-gradient(72deg, transparent, rgba(0, 225, 117, 0.64))`,
              }}
            />
            <p className="text-gray-100 text-left py-2">
              Please fill out the form below to send us an email, and we will
              get back to you as soon as possible.
            </p>
          </div>
          <form
            name="sentMessage"
            validate
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
              <div className="form-group ">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-white px-4 py-2 border-b border-blue-500 "
                  placeholder="Name"
                  required
                  onChange={handleChange}
                  value={name}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white px-4 py-2 border-b border-blue-500 "
                  placeholder="Email"
                  required
                  onChange={handleChange}
                  value={email}
                />
              </div>
            </div>
            <div className="form-group">
              <textarea
                name="message"
                id="message"
                className="w-full bg-white px-4 py-2 border-b border-blue-500"
                rows="4"
                placeholder="Message"
                required
                onChange={handleChange}
                value={message}
              ></textarea>
            </div>
            <button
              type="submit"
              className=" px-6  border-2 border-white  text-white py-3 rounded-full hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
