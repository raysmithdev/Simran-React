import React from 'react'

const Intro = ({ name, age, changeName }) => (
  <div>
    <form onSubmit={(event) => {
      event.preventDefault()

      let input = event.target.userInput.value

      changeName(input)

      event.target.userInput.value = ''
    }}>
      <input type="text" name="userInput" />
      <button>Say Hello</button>
    </form>
  </div>
)

export default Intro
