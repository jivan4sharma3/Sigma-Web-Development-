import React, { useRef, useEffect, useState } from 'react'
import axios from 'axios'


const Manager = () => {

    const [alldata, setAllData] = useState([])
    const [id, setID] = useState()


    // Setting a state which set the data is add or edit 
    const [checkEA, setCheckEA] = useState(true)

    // create a state which save the value of input fileds
    const [web, setWeb] = useState()
    const [user, setUser] = useState()
    const [pass, setPass] = useState()

    useEffect(() => {
        axios.get('http://localhost:3000/password-manager').then((res) => {
            setAllData(res.data)
            // console.log(res.data);
        })
    }, [])


    const getData = () => {
        axios.get('http://localhost:3000/password-manager').then((res) => {
            setAllData(res.data)
            // console.log(res.data);

        }).catch((err) => {
            console.log('Error fetching data', err)
        })
    }

    const web_ref = useRef()
    const user_ref = useRef()
    const pass_ref = useRef()


    const handleAddPassword = () => {
        if(web_ref.current.value == '' || user_ref.current.value == '' || pass_ref.current.value == ''){
            console.log("data is not entry");
            alert("Enter all input fields")            
        }
        else{
            axios.post('http://localhost:3000/password-manager', {
                website: web_ref.current.value,
                username: user_ref.current.value,
                password: pass_ref.current.value
            }).then((res) => {
                alert('Password saved successfully')
                getData()
            }).catch((err) => {
                alert('Error saving password')
            })
            web_ref.current.value = ""
            user_ref.current.value = ""
            pass_ref.current.value = ""
            
        }
    }

    const startEdit = (item) => {

        setCheckEA(false)
        web_ref.current.value = item.website
        user_ref.current.value = item.username
        pass_ref.current.value = item.password
        setID(item._id)
    }

    const handleEditPassword = async () => {
        console.log(web_ref.current.value)
        console.log(id)
        await axios.put(`http://localhost:3000/password-manager`, {
            _id: id,
            website: web_ref.current.value,
            username: user_ref.current.value,
            password: pass_ref.current.value
        }).then(() => {
            getData()
            setCheckEA(true)
        })
    }


    const handleDelete = (id) => {
        axios.post("http://localhost:3000/pass-delete", { _id: id }).then((res) => {
            getData()
        })
    }

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
                        ref={web_ref}
                        type="text"
                        placeholder="Enter website URL"
                        className=" w-full rounded-xl border border-slate-600/60 bg-slate-800 px-4 py-3 text-slate-100 placeholder-slate-400 shadow-sm transition  focus:border-indigo-500 focus:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/50  "
                    />


                    <div className="flex gap-4">
                        <input
                            ref={user_ref}
                            type="text"
                            placeholder="website username"
                            className="w-full rounded-lg border border-slate-600/60 bg-slate-800 px-4 py-2 text-slate-100 placeholder-slate-400 shadow-sm transition  focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                        />
                        <div className="relative w-1/3 ">
                            <input
                                ref={pass_ref}
                                type="text"
                                placeholder="website password"
                                className="w-full rounded-lg border border-slate-600/60 bg-slate-800 px-4 py-2 text-slate-100 placeholder-slate-400 shadow-sm transition  focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                            />
                            <span className='absolute right-1 top-1 cursor-pointer  '>
                                <lord-icon
                                    className="text-red-400"
                                    src="https://cdn.lordicon.com/dicvhxpz.json"
                                    trigger="hover" >

                                </lord-icon></span>
                        </div>

                    </div>
                    {
                        checkEA ? (

                            <button onClick={handleAddPassword} className="w-1/4 mx-auto border border-indigo-500 bg-indigo-600 flex items-center justify-center gap-4 hover:bg-indigo-700 text-white px-5 py-2 rounded-full transition">
                                <lord-icon
                                    src="https://cdn.lordicon.com/gzqofmcx.json"
                                    trigger="hover">
                                </lord-icon>
                                Add Password
                            </button>
                        ) : (
                            <button onClick={handleEditPassword} className="w-1/4 mx-auto border border-indigo-500 bg-indigo-600 flex items-center justify-center gap-4 hover:bg-indigo-700 text-white px-5 py-2 rounded-full transition">
                                <lord-icon
                                    src="https://cdn.lordicon.com/gzqofmcx.json"
                                    trigger="hover">
                                </lord-icon>
                                Update
                            </button>
                        )
                    }
                </div>
            </div>

            <div className="container max-w-4xl mx-auto rounded-xl shadow-lg">
                <div className='p-2'>
                    <h1 className="text-2xl font-bold text-white">Your Passwords</h1>
                </div>



                <div className="max-h-[30vh] overflow-y-auto rounded-md shadow-md border">
                    <table className="table-auto w-full">
                        <thead className="bg-slate-800 text-white sticky top-0">
                            <tr>
                                <th className="py-2">SN.no</th>
                                <th className="py-2">Site Name</th>
                                <th className="py-2">Username</th>
                                <th className="py-2">Password</th>
                                <th className="py-2"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {alldata.map((item, index) => (
                                <tr key={index}>
                                    <td className="py-2 text-center w-32">{index + 1}</td>
                                    <td className="py-2 text-center w-32">{item.website}</td>
                                    <td className="py-2 text-center w-32">{item.username}</td>
                                    <td className="py-2 text-center w-32">{item.password}</td>
                                    <td className="py-2 text-center w-32 z-10">
                                        <lord-icon
                                            className="mx-3 cursor-pointer"
                                            src="https://cdn.lordicon.com/exymduqj.json"
                                            trigger="hover"
                                            onClick={() => { startEdit(item) }}
                                        />
                                        <lord-icon
                                            className="mx-3 cursor-pointer"
                                            src="https://cdn.lordicon.com/jzinekkv.json"
                                            trigger="hover"
                                            onClick={() => { handleDelete(item._id) }}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div >

        </>
    )
}

export default Manager
