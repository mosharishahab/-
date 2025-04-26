import React, { useState } from 'react'
import MagicSunAndCloud from './components/MagicSunAndCloud.jsx'

export default function App() {
  const [step, setStep] = useState(0)

  return (
    <div className="relative min-h-screen bg-gradient-to-tr from-yellow-100 via-pink-100 to-blue-100 overflow-hidden">
      {/* Graphic background */}
      <MagicSunAndCloud />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
        {step === 0 ? (
          <>
            <h1 className="text-4xl font-extrabold text-blue-800 mb-4">
              به قصه‌ساز خوش اومدی!
            </h1>
            <button
              onClick={() => setStep(1)}
              className="bg-pink-500 text-white px-6 py-3 rounded-full text-lg shadow-md hover:bg-pink-600 transition"
            >
              شروع قصه
            </button>
          </>
        ) : (
          <>
            <h2 className="text-2xl mb-2">فرم مرحله بعد اینجاست…</h2>
          </>
        )}
      </div>
    </div>
  )
}
