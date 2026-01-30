import React from 'react'

const Manager = () => {
    return (
        <>

            <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
            <div className="container max-w-4xl mx-auto my-10  rounded-xl shadow-lg">
                <div className='p-10'>
                    <h1 className="text-2xl font-bold text-white">Your Own Password Manager</h1>
                    <p className="text-slate-300">Manage all your passwords in one secure place</p>
                </div>
                <div className="flex flex-col gap-4 p-6  ">
                    <input
                        type="text"
                        placeholder="Full width input"
                        className=" w-full rounded-xl border border-slate-600/60 bg-slate-800 px-4 py-3 text-slate-100 placeholder-slate-400 shadow-sm transition  focus:border-indigo-500 focus:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/50  "
                    />


                    <div className="flex gap-4">
                        <input
                            type="text"
                            placeholder="First"
                            className="w-full rounded-lg border border-slate-600/60 bg-slate-800 px-4 py-2 text-slate-100 placeholder-slate-400 shadow-sm transition  focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                        />
                        <input
                            type="text"
                            placeholder="Second"
                            className="w-1/3 rounded-lg border border-slate-600/60 bg-slate-800 px-4 py-2 text-slate-100 placeholder-slate-400 shadow-sm transition  focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                        />

                    </div>
                    <button className="bg-indigo-600 flex items-center justify-center gap-2 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition">
                        <lord-icon
                            src="https://cdn.lordicon.com/gzqofmcx.json"
                            trigger="hover">
                        </lord-icon>
                        Add Password
                    </button>
                </div>
            </div>

        </>
    )
}

export default Manager
