import { useState } from 'react'
import axios from 'axios'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [success, setSuccess] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await axios.post('http://localhost:8000/api/contact/', form)
      setSuccess(true)
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <section className="max-w-lg mx-auto mt-12">
      <h2 className="text-4xl font-bold mb-6">Contact</h2>
      {success && <p className="text-green-600 mb-4">Message envoyé avec succès !</p>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          className="border p-3 rounded"
          type="text"
          name="name"
          placeholder="Nom"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          className="border p-3 rounded"
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          className="border p-3 rounded"
          type="text"
          name="subject"
          placeholder="Sujet"
          value={form.subject}
          onChange={handleChange}
          required
        />
        <textarea
          className="border p-3 rounded"
          name="message"
          placeholder="Message"
          rows="5"
          value={form.message}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white p-3 rounded hover:bg-indigo-700 transition"
        >
          Envoyer
        </button>
      </form>
    </section>
  )
}

export default Contact
