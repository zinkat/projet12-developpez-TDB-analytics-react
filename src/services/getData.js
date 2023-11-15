 //import {getUserDataMain,getUserActivity, getUserAverage,getUserPerformance,} from '../services/dataApi'
 import { useEffect } from 'react';
 import {getUserDataMain} from '../services/dataApi'
 //import {getUserDataMain,getUserActivity,getUserAverage, getUserPerformance} from '../services/dataMocked'
function User(){

 useEffect(() => {
  // declare the data fetching function
  const fetchData = async () => {
    const useData = await getUserDataMain();
    console.log(useData);
  }
   // call the function
   fetchData()
   // make sure to catch any error
   .catch(console.error);
}, [])

}
export default User