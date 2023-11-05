'use client'
// import { getServerSession } from "next-auth/next";//via server
// import { authOptions } from "./api/auth/[...nextauth]/route";//via server
import { useSession } from "next-auth/react"//via client

export default function Home() {
  //const data = await getServerSession(authOptions);//via server
  // console.log("🚀 ~ file: page.tsx:7 ~ Home ~ data:", data);
  const data=useSession();//vai client
  return (
    <main>
      <h1 className="text-center text-red-500">the Home page</h1>
      <div>{JSON.stringify(data)}</div>   {/*via the client this part is the same  */}
      {/* <div>{JSON.stringify(data)}</div>  //via server*/} 
    </main>
  );
}
