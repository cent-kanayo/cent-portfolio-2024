"use client"
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa"
import { motion } from "framer-motion"
import { useState } from "react"
import emailjs from "@emailjs/browser"

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+234) 0906 545 7397",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "centkanayo@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Location",
    description: "Lagos, Nigeria",
  },
]

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  })

  const [selectedValue, setSelectedValue] = useState("")
  const [isSent, setIsSent] = useState(false)
  const [error, setError] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = { ...formData, servicename: selectedValue }
    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        data,
        process.env.NEXT_PUBLIC_API_PUBLIC_KEY
      )
      .then(
        (response) => {
          setIsSent(true)
          setError(false)
          setFormData({
            firstname: "",
            lastname: "",
            phone: "",
            email: "",
            message: "",
          })
          setSelectedValue("")
        },
        (err) => {
          setError(true)
          console.log(err)
        }
      )
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-8"
    >
      <div className="border border-foreground/30">
        <div className="border-b border-foreground/30 px-4 py-2 text-xs text-foreground/50 flex items-center gap-2">
          <span className="text-foreground">$</span>
          <span>./contact --send-message</span>
          <span className="terminal-cursor" />
        </div>

        <div className="flex flex-col xl:flex-row gap-6 p-4 xl:p-6">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 border border-foreground/20 p-4 xl:p-6"
            >
              <div className="text-xs text-foreground/50 mb-2">
                {">"} Compose message
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-foreground/50 block mb-1">
                    firstname
                  </label>
                  <input
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                    type="text"
                    placeholder="type here..."
                    required
                    className="w-full bg-transparent border border-foreground/30 px-3 py-2 text-sm text-foreground placeholder:text-foreground/20 focus:outline-none focus:border-foreground"
                  />
                </div>
                <div>
                  <label className="text-xs text-foreground/50 block mb-1">
                    lastname
                  </label>
                  <input
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                    type="text"
                    placeholder="type here..."
                    required
                    className="w-full bg-transparent border border-foreground/30 px-3 py-2 text-sm text-foreground placeholder:text-foreground/20 focus:outline-none focus:border-foreground"
                  />
                </div>
                <div>
                  <label className="text-xs text-foreground/50 block mb-1">
                    email
                  </label>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="type here..."
                    required
                    className="w-full bg-transparent border border-foreground/30 px-3 py-2 text-sm text-foreground placeholder:text-foreground/20 focus:outline-none focus:border-foreground"
                  />
                </div>
                <div>
                  <label className="text-xs text-foreground/50 block mb-1">
                    phone
                  </label>
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    type="text"
                    placeholder="type here..."
                    required
                    className="w-full bg-transparent border border-foreground/30 px-3 py-2 text-sm text-foreground placeholder:text-foreground/20 focus:outline-none focus:border-foreground"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-foreground/50 block mb-1">
                  service
                </label>
                <select
                  value={selectedValue}
                  onChange={(e) => setSelectedValue(e.target.value)}
                  required
                  className="w-full bg-transparent border border-foreground/30 px-3 py-2 text-sm text-foreground focus:outline-none focus:border-foreground"
                >
                  <option value="" disabled className="bg-primary">
                    select a service...
                  </option>
                  <option value="web-dev" className="bg-primary">
                    Web Development
                  </option>
                  <option value="wordpress-dev" className="bg-primary">
                    WordPress Development
                  </option>
                  <option value="e-commerce dev" className="bg-primary">
                    E-commerce Website
                  </option>
                  <option value="theme-dev" className="bg-primary">
                    Custom Theme Development
                  </option>
                  <option value="plugin-dev" className="bg-primary">
                    Custom Plugin Development
                  </option>
                  <option value="it" className="bg-primary">
                    IT services
                  </option>
                </select>
              </div>

              <div>
                <label className="text-xs text-foreground/50 block mb-1">
                  message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-foreground/30 px-3 py-2 text-sm text-foreground placeholder:text-foreground/20 focus:outline-none focus:border-foreground h-[120px] resize-none"
                  placeholder="type your message..."
                  required
                />
              </div>

              <button
                type="submit"
                className="border border-foreground px-4 py-2 text-sm text-foreground hover:bg-foreground hover:text-primary transition-colors self-start"
              >
                $ send
              </button>

              {isSent && (
                <p className="text-xs text-foreground">
                  {">"} Message sent successfully.
                </p>
              )}
              {error && (
                <p className="text-xs text-red-500">
                  {">"} Failed to send. Check the console.
                </p>
              )}
            </form>
          </div>

          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-6 xl:mb-0">
            <div className="text-xs text-foreground/50 mb-2">
              {">"} cat ./contact.info
            </div>
            <ul className="flex flex-col gap-6 mt-2">
              {info.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-4 border-l-2 border-foreground/30 pl-4"
                >
                  <span className="text-foreground text-lg">{item.icon}</span>
                  <div>
                    <p className="text-xs text-foreground/50">{item.title}</p>
                    <p className="text-sm text-foreground">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact
