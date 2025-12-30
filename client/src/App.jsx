import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { HomePage, ProfilePage, LoginPage } from './pages'
import assets from './assets/assets'

const App = () => {
  return (
    <div
      className="bg-contain"
      style={{ backgroundImage: `url(${assets.bgImage})` }}
    >
      <Routes>
        <Route path="/" element={<ProfilePage/>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  )
}

export default App