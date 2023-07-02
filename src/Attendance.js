import React, { useEffect } from 'react'
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import attendanceData from './data'

const Attendance = () => {
  const data = attendanceData.attendance

  return (
    <div className='attendance-container'>
      <div className='attendance-header'>
        <p>attendance office history</p>
      </div>

      <div className='attendance-chart'>
        <ResponsiveContainer width='100%' height='100%'>
          <LineChart
            data={data}
            margin={{ top: 5, right: 40, bottom: 5, left: 0 }}
          >
            <Line
              type='monotone'
              dataKey='present'
              stroke='#cdb4db'
              strokeWidth={4}
              activeDot={{ r: 8 }}
            />
            <Line
              type='monotone'
              dataKey='absent'
              stroke='#2a9d8f'
              strokeWidth={4}
            />
            <Line
              type='monotone'
              dataKey='late'
              stroke='#f28482'
              strokeWidth={4}
            />
            <CartesianGrid stroke='#ccc' strokeDasharray='3 3' />
            <XAxis
              dataKey='name'
              tick={{ fill: 'white' }}
              tickLine={{ stroke: 'white' }}
            />
            <YAxis tick={{ fill: 'white' }} tickLine={{ stroke: 'white' }} />
            <Tooltip />
            <Legend />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default Attendance
