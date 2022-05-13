import React from 'react'

function AddData() {
  return (
    <div>
        <h1 className='text-center display-3 mt-4'>add user data</h1>
        <form>
    <div className="form-group">
        <label>Enter Name:</label>
        <input type="text" className="form-control" />
    </div>
    <div className="form-group">
        <label>Enter Email:</label>
        <input type="email" className="form-control" />
    </div>
    <div className="form-group">
        <label>Enter Salary:</label>
        <input type="text" className="form-control" />
    </div>
    <div className="form-group">
        <button className="btn btn-primary">Enter Data </button>
    </div>
</form>
    </div>
  )
}

export default AddData