import React from 'react'

const ListComponent = ({data}) => {

    return (
        <div className = 'listContainer'>
            {data.map(datum=>(
                <div key={datum._id} className='listComponent'>
                    <p>Name: {datum.productName}</p>
                    <p>Brand: {datum.brand}</p>
                    <p>Category: {datum.category}</p>
                    <p>Parent Category: {datum.parentCategory}</p>
                    <p>Specification: {datum.specification}</p>
                </div>
            ))}
        </div>
    )
}

export default ListComponent