import React from "react";
import contact from "../../assets/contact.png";
import { motion } from "framer-motion";
import { MdMail } from "react-icons/md";
const Contact = () => {
  return (
    <section>
      <div
        className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0"
        id="contact"
      >
        {/* Banner Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex flex-col justify-center"
        >
          {/* Contact Form */}
          <div className="text-center md:text-left space-y-4 lg:max-w-[450px]">
            <section className="bg-white dark:bg-gray-900">
              <div className="py-8 px-3 mx-auto max-w-screen-md">
                <form action="#" className="space-y-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Student Name
                    </label>
                    <input
                      type="text"
                      id="text"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      placeholder="Prabir sahoo"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="number"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Phone Number
                    </label>
                    <input
                      type="text"
                      id="number"
                      className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      placeholder="7735765827"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subjects"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Select an option
                    </label>
                    <div className="relative">
                      <select
                        id="subjects"
                        className="appearance-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 pr-8 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        <option value="" selected>
                          Choose a subject
                        </option>
                        <option value="Physics">Physics</option>
                        <option value="Mathematics">Mathematics</option>
                        <option value="Chemistry">Chemistry</option>
                        <option value="All">All Subjects</option>
                      </select>
                      <span className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                        ▼
                      </span>
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                    >
                      Your message
                    </label>
                    <textarea
                      id="message"
                      rows="3"
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Write Your Message..."
                    ></textarea>
                  </div>
                  <button type="submit" className="primary-btn flex gap-2 items-center">
                    Send message
                    <MdMail className="group-hover:animate-bounce group-hover:text-lg duration-200" />
                  </button>
                </form>
              </div>
            </section>
          </div>
        </motion.div>
        {/* Banner Image */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            src={contact}
            alt=""
            className="w-[350px] md:max-w-[450px] object-cover drop-shadow"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
