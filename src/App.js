import './App.css'
import Attendance from './Attendance'
import Empolyee from './Empolyee'
import MyMapComponent from './MyMapComponent'

function App() {
  return (
    <div className='app-container'>
      <div className='header'></div>

      <div className='body-container'>
        <div className='map-container'>
          <MyMapComponent />
        </div>

        <div className='side-bar-container'>
          <Attendance />
          <Empolyee />
        </div>
      </div>
    </div>
  )
}

export default App
