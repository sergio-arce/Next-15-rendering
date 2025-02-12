'use client'
import { useState } from "react";

export default function DashboardPage() {
  const [name, setName] = useState("");
  
  return (
    <div>
      <h1>Dashboard Page</h1>
      <input onChange={(e) => setName(e.target.value)}/>
      <p>{`Hello ${name}`}</p>
    </div>
  ) 
}
