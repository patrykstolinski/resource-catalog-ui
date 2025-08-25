import { useState } from 'react'
import './App.css'
import ResourceCard from "./components/ResourceCard";

function App() {
  const [count, setCount] = useState(0)

    const dummyResource = {
    id: 1,
    title: "React Basics",
    description: "Learn the fundamentals of React, components, and props.",
    topics: ["React", "JavaScript", "Frontend"],
    skills: ["JSX", "Props", "State"]
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans antialiased">      
        <header className="bg-gradient-to-r from-blue-600 to-indigo-700 p-4 shadow-lg">          
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-3xl font-extrabold text-white">
                    Ressourcen-Katalog
                </h1>
                <nav>
                    {/* Hier kommt später das Menu. */}
                </nav>
            </div>
        </header>
        <main className="container mx-auto p-4 mt-4">
            <div className="max-w-md">
            <ResourceCard resource={dummyResource}/>
            </div>
        </main>
    </div>
  )
}

export default App
