
import Image from "next/image";

export default function Home() {
  console.log("The id is : " , process.env.ID)
  console.log("The id is : " , process.env.ID)
  return (
   <div>
    <h1>This is home page</h1>
    <h2>This database password : {process.env.NEXT_PUBLIC_ID}</h2>
   </div>
  );
}
