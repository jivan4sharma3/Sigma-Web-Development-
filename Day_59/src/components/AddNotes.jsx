import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/noteContext'


const AddNotes = () => {
    const context = useContext(noteContext)
    const { addNotes } = context
    const [note, setNote] = useState({ title: "", description: "", tag: "" });

    const handleClick = (e) => {
        e.preventDefault()
        addNotes(note.title, note.description, note.tag)
        setNote({ title: "", description: "", tag: "" })
    }

    const handleONchange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    return (
        <div className="max-w-xl mx-auto my-8 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                Add Your Notes
            </h2>

            <form className="space-y-5">
                {/* Title */}
                <div>
                    <label
                        htmlFor="title"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={note.title}
                        onChange={handleONchange}
                        minLength={5}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md
                           focus:outline-none focus:ring-2 focus:ring-blue-500
                           focus:border-blue-500"
                    />
                </div>

                {/* Description */}
                <div>
                    <label
                        htmlFor="description"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Description
                    </label>
                    <input
                        type="text"
                        id="description"
                        name="description"
                        value={note.description}
                        onChange={handleONchange}
                        minLength={5}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md
                           focus:outline-none focus:ring-2 focus:ring-blue-500
                           focus:border-blue-500"
                    />
                </div>

                {/* Tag */}
                <div>
                    <label
                        htmlFor="tag"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Note Tag
                    </label>
                    <input
                        type="text"
                        id="tag"
                        name="tag"
                        value={note.tag}
                        onChange={handleONchange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md
                           focus:outline-none focus:ring-2 focus:ring-blue-500
                           focus:border-blue-500"
                    />
                </div>

                {/* Button */}
                <button
                    type="submit"
                    onClick={handleClick}
                    disabled={note.title.length < 5 || note.description.length < 5}
                    className="w-full py-2 px-4 rounded-md font-medium text-white
                       bg-blue-600 hover:bg-blue-700
                       disabled:bg-blue-300 disabled:cursor-not-allowed
                       transition duration-200"
                >
                    Add a Note
                </button>
            </form>
        </div>

    )
}

export default AddNotes
