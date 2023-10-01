import React from 'react'

export default function CursorBlock() {
  return (
    <div className="App">
    <header className="App-header p-10">
      <h1 className="text-4xl" data-cursor-hover>
        Welcome to the Custom Cursor App
      </h1>
      <p className="mt-4" data-cursor-hover-alternative>
        Hover over this text to see the cursor increase in size.
      </p>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        data-cursor-hover
      >
        Hover me
      </button>


    </header>
  </div>  )
}
