"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter()
  const [text, setText] = useState("")

  const
  const createTree = () => { 
    
    router.push(`/generate?handle=${text}`)
  }
  return (
    <main>
      <section className="bg-[#254f1a] min-h-[100vh] grid grid-cols-2 pt-15">
    <div className="flex justify-center flex-col ml-[10vw] gap-3">
      <p className="text-yellow-300 font-bold text-5xl">Everything you </p>
      <p className="text-yellow-300 font-bold text-5xl">are. In one,</p>
      <p className="text-yellow-300 font-bold text-5xl">simple link in bio.</p>
      <p className="text-yellow-300 text-xl my-4">Join 50M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
      <div className="input flex gap-2">
        <input value={text} onChange={(e)=> setText(e.target.value)} className="px-2 py-2 focus:outline-green-800 rounded-md border-1 border-white text-white" type="text" placeholder="Enter your Handle" />
        <button onClick={()=> createTree()} className="bg-pink-300 rounded-full px-4 py-4 font-semibold hover:cursor-pointer hover:underline">Claim your Linktree</button>
      </div>
    </div>
    <div className="flex items-center justify-center flex-col mr-[4vw]">
      <img src="/home.png" alt="homepage image" />

    </div>
      </section>
      {/* <section className="bg-red-700 min-h-[100vh]">
 
      </section> */}
    </main>
    
  );
}
