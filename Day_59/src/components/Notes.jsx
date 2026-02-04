import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from '../context/notes/noteContext'
import Notesitems from './Notesitems'
import AddNotes from './AddNotes'
import { useNavigate } from 'react-router-dom'

const Notes = (props) => {
    const context = useContext(noteContext)
    let navigate = useNavigate();
    const { notes, getallNotes, editNotes } = context;
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login");
        } else {
            getallNotes();
        }
        // eslint-disable-next-line
    }, []);
    const ref = useRef(null)
    const refClose = useRef(null)
    const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "" });


    const updateNote = (currentNote) => {
        ref.current.click()
        setNote({
            id: currentNote._id,
            etitle: currentNote.title,
            edescription: currentNote.description,
            etag: currentNote.tag
        });
    }

    const handleClick = (e) => {
        editNotes(note.id, note.etitle, note.edescription, note.etag)
        refClose.current.click()
    }
    const handleONchange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    return (
        <>
            <AddNotes />

            <button
                type="button"
                ref={ref}
                className="hidden px-4 py-2 text-white bg-blue-600 rounded-md"
            >
                Launch demo modal
            </button>

            <div
                className="fixed inset-0 z-50 hidden overflow-y-auto bg-black/50"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="flex min-h-screen items-center justify-center p-4">
                    <div className="bg-white rounded-lg shadow-lg w-full max-w-md">

                        {/* Header */}
                        <div className="flex items-center justify-between px-4 py-3 border-b">
                            <h1
                                className="text-lg font-semibold text-gray-800"
                                id="exampleModalLabel"
                            >
                                Edit a Note
                            </h1>
                            <button
                                type="button"
                                className="text-gray-500 hover:text-gray-700"
                                aria-label="Close"
                            >
                                ✕
                            </button>
                        </div>

                        {/* Body */}
                        <div className="px-4 py-4">
                            <form className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Title
                                    </label>
                                    <input
                                        value={note.etitle}
                                        type="text"
                                        id="etitle"
                                        name="etitle"
                                        onChange={handleONchange}
                                        minLength={5}
                                        required
                                        className="w-full px-3 py-2 border rounded-md
                                       focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Description
                                    </label>
                                    <input
                                        value={note.edescription}
                                        type="text"
                                        id="edescription"
                                        name="edescription"
                                        onChange={handleONchange}
                                        minLength={5}
                                        required
                                        className="w-full px-3 py-2 border rounded-md
                                       focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Note Tag
                                    </label>
                                    <input
                                        value={note.etag}
                                        type="text"
                                        id="etag"
                                        name="etag"
                                        onChange={handleONchange}
                                        className="w-full px-3 py-2 border rounded-md
                                       focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </form>
                        </div>

                        {/* Footer */}
                        <div className="flex justify-end gap-3 px-4 py-3 border-t">
                            <button
                                type="button"
                                ref={refClose}
                                className="px-4 py-2 rounded-md bg-gray-300 hover:bg-gray-400"
                            >
                                Close
                            </button>

                            <button
                                disabled={
                                    note.etitle.length < 5 ||
                                    note.edescription.length < 5
                                }
                                type="button"
                                onClick={handleClick}
                                className="px-4 py-2 rounded-md text-white bg-blue-600
                               hover:bg-blue-700 disabled:bg-blue-300
                               disabled:cursor-not-allowed"
                            >
                                Update a Note
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="my-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                    Your Notes
                </h2>

                <div className="my-3 mx-2 text-gray-500">
                    {notes.length === 0 && "No notes to display"}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {notes.map((note) => (
                        <Notesitems
                            key={note._id}
                            updateNote={updateNote}
                            showAlert={props.showAlert}
                            note={note}
                        />
                    ))}
                </div>
            </div>

        </>
    )
}

export default Notes
