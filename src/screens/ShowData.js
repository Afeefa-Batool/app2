import React from 'react'

function ShowData(props) {
  return (
    <div>
        <h1 className="text-center display-3 mt-4">List of All Users</h1>
<table className="table table-bordered">
    <tr>
         <th>ID</th>
         <th>Name</th>
         <th>Email</th>
         <th>Salary</th>
    </tr>
    {
        props.allusers.map((pny) => (
            <tr>
                <td>{pny.id}</td>
                <td>{pny.name}</td>
                <td>{pny.email}</td>

                <td>{pny.salary}</td>

            </tr>
        ))
    }
</table>
    </div>
  )
}

export default ShowData