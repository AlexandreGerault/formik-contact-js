import React from 'react'
import ReactDOM from 'react-dom'
import ContactForm from './ContactForm/ContactForm'
import './tailwind.output.css'

function App() {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
      <ContactForm />
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
