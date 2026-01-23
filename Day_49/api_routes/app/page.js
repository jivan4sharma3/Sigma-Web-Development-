"use client"
import Image from "next/image";

export default function Home() {

  const handleClick = async () => {
    const response = await fetch("/api/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const res = await response.json();
    console.log(res)
  }

  return (
    <div>
      <h1>API in next js</h1>
      <button onClick={handleClick}>Click Me!</button>
    </div>
  );
}
