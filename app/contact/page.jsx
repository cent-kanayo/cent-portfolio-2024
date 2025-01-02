"use client"
import {FaPhoneAlt, FaEnvelope, FaMapMarkedAlt} from "react-icons/fa"
import {motion} from "framer-motion"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import emailjs from "@emailjs/browser";

const info = [
  {
    icon: <FaPhoneAlt/>,
    title: "Phone",
    description: "(+234) 0906 545 7397"
  },
  {
    icon: <FaEnvelope/>,
    title: "Email",
    description: "centkanayo@gmail.com"
  },
  {
    icon: <FaMapMarkedAlt/>,
    title: "Location",
    description: "Lagos, Nigeria"
  },
]

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });

  const [selectedValue, setSelectedValue] = useState("");

  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleValueChange = (value) => {
    setSelectedValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {...formData, servicename: selectedValue}
    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID, 
        process.env.NEXT_PUBLIC_TEMPLATE_ID, 
        data,
        process.env.NEXT_PUBLIC_API_PUBLIC_KEY
      )
      .then(
        (response) => {
          setIsSent(true);
          setError(false)
          setFormData({ firstname: "", lastname: "", phone: "", email: "", message: "" });
          setSelectedValue("")
        },
        (err) => {
          setError(true);
          console.log(err);
          
        }
      );
  };

  return (
    <motion.section
    initial={{opacity: 0}}
    animate={
      {opacity: 1, transition: {
        delay: 2.4, duration: 0.4, ease: "easeIn"
      }}}
      className="py-6"
    >
      <div className="container mx-auto">
        <article className="flex flex-col xl:flex-row gap-[30px]">
            <div className="xl:w-[54%] order-2 xl:order-none">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                <h3 className="text-4xl text-accent">Let's work together</h3>
                <p className="text-white/60">
                  Would you like us to have a detailed discussion? Send a message and I'll respond to you promptly.
                </p>
                {isSent && <p className="text-accent text-sm">Email sent successfully!</p>}
                {error && <p style={{ color: "red" }}>Failed to send email</p>}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input name="firstname" value={formData.firstname} onChange={handleChange} type="text" placeholder="Firstname" required/>
                  <Input name="lastname" value={formData.lastname} onChange={handleChange}  type="text" placeholder="lastname" required/>
                  <Input name="email" value={formData.email} onChange={handleChange}  type="email" placeholder="Email" required/>
                  <Input name="phone" value={formData.phone} onChange={handleChange}  type="text" placeholder="Phone" required/>
                </div>
                <Select name="servicename" value={selectedValue} onValueChange={handleValueChange}required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a service"/>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a service</SelectLabel>
                      <SelectItem value="web-dev">Web Development</SelectItem>
                      <SelectItem value="wordpress-dev">Wordpress Development</SelectItem>
                      <SelectItem value="e-commerce dev">E-commerce Website</SelectItem>
                      <SelectItem value="theme-dev">Custom Theme Developement</SelectItem>
                      <SelectItem value="plugin-dev">Custom Plugin Development</SelectItem>
                      <SelectItem value="it">IT services</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Textarea name="message" value={formData.message} onChange={handleChange} className="h-[200px]" placeholder="Type your message" required/>
                <Button type="sumbit" className="max-w-40" size="md">Send message</Button>
              </form>
            </div>
            <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
              <ul className="flex flex-col gap-10">
                {info.map((Item, index) => {
                  return <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <span className="text-[28px]">{Item.icon}</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/6o">{Item.title}</p>
                      <h3 className="text-xl">{Item.description}</h3>
                    </div>
                  </li>
                })}
              </ul>
            </div>
        </article>
      </div>
    </motion.section>
  )
}

export default Contact