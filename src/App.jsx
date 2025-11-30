import React from 'react';

import {
  Route, createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider } 
  from 'react-router-dom'

import HomePage from './Pages/HomePage';
import MainLayout from './layouts/MainLayout'
import JobsPage from './Pages/JobsPage';
import NotfoundPage from './Pages/NotfoundPage';
import JobPage, { jobLoader } from './Pages/JobPage';
import AddJobPage from './Pages/AddJobPage'



const App = () => {
  //Add New JOb
  const addJob = async (newJob) => {
  const res = await fetch('/api/jobs', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newJob)
  });
  return;
}
// DELETE JOB

const deleteJob = async(id) =>{
  console.log('delet', id)
}


const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<MainLayout />}>
  <Route index element={<HomePage />} />
  <Route path='/jobs' element={<JobsPage />} />
  <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob}/>} />
  <Route path='/jobs/:id' element={<JobPage deleteJob={ deleteJob } />} loader = {jobLoader} />
  <Route path='*' element={<NotfoundPage />} />


  </Route>
  )
)
  return <RouterProvider  router={router} />
}

export default App;