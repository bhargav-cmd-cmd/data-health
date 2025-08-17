'use client'

import { useState, useEffect } from 'react'
import axios from 'axios'
import Plot from 'react-plotly.js'

export default function Home() {
  const [apiStatus, setApiStatus] = useState<string>('Checking...')
  const [isConnected, setIsConnected] = useState<boolean>(false)

  // Sample data for demonstration
  const sampleData = {
    x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    y: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
    type: 'scatter',
    mode: 'lines+markers',
    marker: { color: '#667eea' },
    name: 'Sample Data'
  }

  const layout = {
    title: 'DataPulse Analytics',
    xaxis: { title: 'Time' },
    yaxis: { title: 'Value' },
    paper_bgcolor: 'rgba(0,0,0,0)',
    plot_bgcolor: 'rgba(0,0,0,0)',
    font: { color: '#333' }
  }

  useEffect(() => {
    // Check backend connection
    const checkApiStatus = async () => {
      try {
        const response = await axios.get('http://localhost:8000/')
        setApiStatus(response.data.message)
        setIsConnected(true)
      } catch (error) {
        setApiStatus('Backend not connected')
        setIsConnected(false)
      }
    }

    checkApiStatus()
    const interval = setInterval(checkApiStatus, 5000) // Check every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="dashboard-container min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold gradient-text mb-4">
            DataPulse
          </h1>
          <p className="text-xl text-white/90 mb-6">
            Real-time Data Analytics Dashboard
          </p>
          <div className={`inline-flex items-center px-4 py-2 rounded-full ${
            isConnected 
              ? 'bg-green-500/20 text-green-300 border border-green-400' 
              : 'bg-red-500/20 text-red-300 border border-red-400'
          }`}>
            <div className={`w-3 h-3 rounded-full mr-2 ${
              isConnected ? 'bg-green-400' : 'bg-red-400'
            }`}></div>
            {apiStatus}
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Chart Card */}
          <div className="card p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Analytics Overview
            </h2>
            <Plot
              data={[sampleData]}
              layout={layout}
              style={{ width: '100%', height: '400px' }}
              config={{ responsive: true }}
            />
          </div>

          {/* Stats Card */}
          <div className="card p-6">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              System Status
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <span className="text-gray-700">Backend API</span>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  isConnected 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {isConnected ? 'Connected' : 'Disconnected'}
                </span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <span className="text-gray-700">Data Processing</span>
                <span className="px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800">
                  Active
                </span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <span className="text-gray-700">Real-time Updates</span>
                <span className="px-3 py-1 rounded-full text-sm bg-green-100 text-green-800">
                  Enabled
                </span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="card p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Quick Actions
            </h2>
            <div className="space-y-3">
              <button className="w-full p-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all">
                Refresh Data
              </button>
              <button className="w-full p-3 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-lg hover:from-green-600 hover:to-teal-700 transition-all">
                Export Report
              </button>
              <button className="w-full p-3 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg hover:from-orange-600 hover:to-red-700 transition-all">
                Generate Insights
              </button>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="card p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Recent Activity
            </h2>
            <div className="space-y-3">
              <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                <span className="text-gray-700">Data processed successfully</span>
                <span className="ml-auto text-sm text-gray-500">2 min ago</span>
              </div>
              <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <span className="text-gray-700">New data source connected</span>
                <span className="ml-auto text-sm text-gray-500">5 min ago</span>
              </div>
              <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                <span className="text-gray-700">Report generated</span>
                <span className="ml-auto text-sm text-gray-500">10 min ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
