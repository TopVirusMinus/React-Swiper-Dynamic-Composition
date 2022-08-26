import React from 'react'

export default function ShapeOne({item}) {
  return (
    <div>
        <ul>
            <li>{item.name}</li>
            <li>{item.age}</li>
        </ul>
    </div>
  )
}
