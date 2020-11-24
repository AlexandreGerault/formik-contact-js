import React from 'react'

const SubmitButton = ({text, children}) => {
  return (
    <button
      type="submit"
      className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
    >
      {text || children || 'Submit'}
    </button>
  )
}

export default SubmitButton
