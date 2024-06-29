import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter , Routes,Route, createBrowserRouter, RouterProvider, createRoutesFromElements} from 'react-router-dom';
import { Loginscreen } from './screens/LoginScreen';
import Homescreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailsScreen';



// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Loginscreen />}>
//       <Route path="homescreen" element={<Homescreen />} />
//     </Route>
//   )
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
 <Routes>
 <Route path='/' element={<Loginscreen />}/>
 <Route path='/homescreen' element={<Homescreen />}/>
 <Route path='/detailscreen' element={<DetailScreen />}/>
 </Routes>
</BrowserRouter>
{/* <RouterProvider router={router} /> */}
  </React.StrictMode>
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
