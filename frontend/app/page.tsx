
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-24">
      <h1 className="text-6xl font-bold mb-4">Epstein Research Hub <span className="text-blue-500">Enterprise</span></h1>
      <p className="text-xl text-gray-400">System Status: <span className="text-green-500">Active</span></p>
      <div className="mt-8 p-6 border border-gray-800 rounded-xl bg-gray-900">
        <h2 className="text-2xl font-bold mb-2">Microservices Architecture</h2>
        <ul className="list-disc list-inside text-gray-300">
            <li>Frontend: Next.js 15 (Netlify)</li>
            <li>API Layer: Serverless Functions</li>
            <li>Database: Neon PostgreSQL (Vector Ready)</li>
            <li>AI Engine: Python Worker (Dockerized)</li>
        </ul>
      </div>
    </main>
  )
}