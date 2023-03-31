import { Home, Navbar, Statistics, Contract, Billing, Business } from "./components"
import {styles} from './util/style';


const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      
      {/* Navbar */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.container}`}>
            <Navbar/>
        </div>
      </div>

      {/* Header Section */}
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.container}`}>
            <Home/>
        </div>
      </div>

      {/* Statistics */}
      <div className={` bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.container}`}>
            <Statistics/>
            <Contract/>
            <Billing/>
            {/* Bussines */}
            <Business/>
            {/* CTA */}
            {/* Footer */}
        </div>
      </div>


    </div>
  )
}

export default App