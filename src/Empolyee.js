import React from 'react'
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  ResponsiveContainer,
} from 'recharts'
import employeeData from './data'

const Empolyee = () => {
  const data = employeeData.employeeInfo

  return (
    <div className='attendance-container'>
      <div className='attendance-header'>
        <p>attendance office history</p>
      </div>

      <div className='attendance-chart'>
        <ResponsiveContainer width='100%' height='100%'>
          <BarChart
            data={data}
            margin={{
              top: 5,
              right: 40,
              left: 0,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis
              dataKey='name'
              tick={{ fill: 'white' }}
              tickLine={{ stroke: 'white' }}
            />
            <YAxis tick={{ fill: 'white' }} tickLine={{ stroke: 'white' }} />
            <Tooltip />
            <Legend />
            <Bar dataKey='amount' fill='#ffbe0b' />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default Empolyee
