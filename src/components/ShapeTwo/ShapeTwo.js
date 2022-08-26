import React from 'react'

export default function ShapeTwo({item}) {
  return (
    <div style={{backgroundColor: "#333", borderRadius: "15px", padding: "2%", color: "#eee"}}>
        <ul>
            <li>{item.name}</li>
            <li>{item.age}</li>
        </ul>
    </div>
  )
}
