import React from "react";

const Contact = () => {
  return (
    <section className="bg-[#0e162e] text-white font-ubuntu px-6 md:px-16 py-12">
      <div className="max-w-3xl mx-auto text-center">
        {/* Button Label */}
        <button className="bg-[#1A365D] text-white px-4 py-1 rounded mb-4 text-sm font-semibold">
          Contact Me
        </button>

        {/* Heading */}
        <h1 className="text-4xl font-bold mb-4 leading-tight">
          Get in Touch with <span className="text-blue-400">Sahdev Mer</span>
        </h1>

        {/* form  */}

        <form className="max-w-md mx-auto  rounded-lg shadow-md p-6 space-y-6">
          {/* Name Field */}
          <div className="relative">
            <input
              type="text"
              id="floating-name"
              className="block py-2.5 ps-6 pe-0 w-full text-white text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating-name"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 left-0 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-600"
            >
              Name
            </label>
          </div>

          {/* Email Field */}
          <div className="relative">
            <input
              type="email"
              id="floating-email"
              className="block py-2.5 ps-6 pe-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating-email"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 left-0 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-600"
            >
              Email
            </label>
          </div>

          {/* Message Field */}
          <div className="relative">
            <textarea
              id="floating-message"
              rows="4"
              className="block py-2.5 ps-6 pe-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 resize-none appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            ></textarea>
            <label
              htmlFor="floating-message"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 left-0 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-600"
            >
              Message
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#1A365D] text-white px-4 py-2 rounded hover:bg-[#163154] transition duration-300"
          >
            Submit
          </button>
        </form>

        {/* Contact Label */}
        <p className="text-lg font-semibold mb-3 pt-10 text-blue-300">
          You can contact me via :
        </p>

        {/* Contact Links */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-white text-sm">
          <a
            href="mailto:sahdev@example.com"
            className="hover:underline hover:text-blue-400 transition"
          >
            📧 contact@sahdevMer.dev
          </a>

          <a
            href="tel:+919876543210"
            className="hover:underline hover:text-blue-400 transition"
          >
            📞 +91 90XXX XXX06
          </a>

          <a
            href="https://in.linkedin.com/in/sahdev-mer-26736b321"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-blue-400 transition"
          >
            🔗 LinkedIn Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
