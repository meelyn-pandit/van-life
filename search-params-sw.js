import { BrowserRouter, Routes, Route, Link, useSearchParams } from 'react-router-dom'

const swCharacters = [
  { name: "Luke Skywalker", type: "Jedi" },
  { name: "Darth Vader", type: "Sith" },
  { name: "Emperor Palpatine", type: "Sith" },
  { name: "Yoda", type: "Jedi" }
]

function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const typeFilter = searchParams.get("type")

  const charEls = swCharacters
    .map(char => (
      <div key={char.name}>
        <h3
          style={{ color: char.type.toLocaleLowerCase() === "jedi" ? "blue" : "red"}}>
            Name: {char.name}
            Type: {char.type}

        </h3>
      </div>
    ))
}