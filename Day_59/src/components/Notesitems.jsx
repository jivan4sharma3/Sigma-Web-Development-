import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext'


const Notesitems = (props) => {
    const context = useContext(noteContext)
    const { deleteNotes } = context
    const { note, updateNote } = props
    return (
        <div className="w-full md:w-1/4 px-2">
            <div className="my-3 bg-white rounded-lg shadow-md hover:shadow-lg transition">
                <div className="p-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">
                        {note.title}
                    </h4>

                    <p className="text-base text-gray-700 mb-2">
                        {note.description}
                    </p>

                    <p className="text-sm text-gray-500 mb-3">
                        Note Tag : {note.tag}
                    </p>

                    <div className="flex gap-3">
                        <i
                            className="fa-solid fa-trash text-red-500 cursor-pointer hover:text-red-700"
                            onClick={() => {
                                deleteNotes(note._id);
                            }}
                        ></i>

                        <i
                            className="fa-solid fa-pen-to-square text-blue-500 cursor-pointer hover:text-blue-700"
                            onClick={() => {
                                updateNote(note);
                            }}
                        ></i>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Notesitems
