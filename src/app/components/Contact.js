// import { useState } from "react";
// import React from "react";
// import { db } from "../config/config";
// import { addDoc, collection, serverTimestamp } from "firebase/firestore";

// const initialState = {
//   name: "",
//   email: "",
//   message: "",
// };

// export const Contact = () => {
//   const [{ name, email, message }, setState] = useState(initialState);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setState((prevState) => ({ ...prevState, [name]: value }));
//   };

//   const clearState = () => setState({ ...initialState });

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await addDoc(collection(db, "contacts"), {
//         name,
//         email,
//         message,
//         timestamp: serverTimestamp(),
//       });
//       alert("Message sent successfully!");
//       clearState();
//     } catch (error) {
//       console.error("Error adding document: ", error);
//       alert("Failed to send message");
//     }
//   };

//   return (
//     <div id="contact" className="py-12 bg-gray-100">
//       <div className="container mx-auto px-4">
//         <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
//           <div className="text-center mb-6">
//             <h2 className="text-3xl font-bold text-gray-800">Get In Touch</h2>
//             <p className="text-gray-600">
//               Please fill out the form below to send us an email, and we will
//               get back to you as soon as possible.
//             </p>
//           </div>
//           <form
//             name="sentMessage"
//             validate
//             onSubmit={handleSubmit}
//             className="space-y-4"
//           >
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div className="form-group">
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
//                   placeholder="Name"
//                   required
//                   onChange={handleChange}
//                   value={name}
//                 />
//               </div>
//               <div className="form-group">
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
//                   placeholder="Email"
//                   required
//                   onChange={handleChange}
//                   value={email}
//                 />
//               </div>
//             </div>
//             <div className="form-group">
//               <textarea
//                 name="message"
//                 id="message"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
//                 rows="4"
//                 placeholder="Message"
//                 required
//                 onChange={handleChange}
//                 value={message}
//               ></textarea>
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };
