import React from "react";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
import { Toaster, toast } from "sonner";
import Footer from "./Footer";
import { motion } from "framer-motion";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d4e7d7f1-edd1-4ae6-9046-0272e084e1cf");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      toast.success(data.message);
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult(data.message);
    }
  };

  return (
    <section id="contact">
      <Toaster position="top-right" theme="system" richColors={true} />
      <BackgroundBeamsWithCollision>
        <div className="flex flex-col items-center  py-10 md:py-20 w-full">
          <motion.h2
            className="text-2xl md:text-3xl text-black dark:text-white"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, type: "tween" }}
          >
            Contact
          </motion.h2>
          <form
            action="#"
            onSubmit={onSubmit}
            method="POST"
            className="w-full mx-auto mt-16 max-w-xl sm:mt-20 px-10"
          >
            <motion.div
              className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, type: "tween" }}
            >
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-semibold leading-6 text-black dark:text-white"
                >
                  First Name
                </label>
                <div className="mt-2.5">
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 bg-white dark:bg-black text-black dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black dark:placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-semibold leading-6 text-black dark:text-white"
                >
                  Last Name
                </label>
                <div className="mt-2.5">
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 bg-white dark:bg-black text-black dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black dark:placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </motion.div>
            <motion.div
              className="sm:col-span-2"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, type: "tween" }}
            >
              <label
                htmlFor="subject"
                className="block mt-3 text-sm font-semibold leading-6 text-black dark:text-white"
              >
                Subject
              </label>
              <div className="mt-2.5">
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  autoComplete="subject"
                  className="block w-full rounded-md border-0 px-3.5 py-2 bg-white dark:bg-black text-black dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black dark:placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </motion.div>
            <motion.div
              className="sm:col-span-2"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, type: "tween" }}
            >
              <label
                htmlFor="email"
                className="block mt-3 text-sm font-semibold leading-6 text-black dark:text-white"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md border-0 px-3.5 py-2 bg-white dark:bg-black text-black dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black dark:placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </motion.div>
            <motion.div
              className="sm:col-span-2"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, type: "tween" }}
            >
              <label
                htmlFor="message"
                className="block mt-3 text-sm font-semibold leading-6 text-black dark:text-white"
              >
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 bg-white dark:bg-black text-black dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black dark:placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>
            </motion.div>
            <motion.div
              className="mt-10"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, type: "tween" }}
            >
              <button
                type="submit"
                className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Send Message
              </button>
            </motion.div>
          </form>
          <Footer />
        </div>
      </BackgroundBeamsWithCollision>
    </section>
  );
};

export default Contact;
