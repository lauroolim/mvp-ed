'use client'
import { Inbox } from 'lucide-react'
import React from 'react'
import { useDropzone } from 'react-dropzone'

export const PdfUpload = () => {

    const { acceptedFiles, getRootProps, getInputProps } = useDropzone()
    return (
        <div className='w-1/2 p-2 bg-white rounded-xl'>

            <div {...getRootProps({
                className: 'border-dashed border-2 rounded-xl cursor-pointer bg-gray-50 py-8 flex justify-center items-center flex-col p-8',
            })}>
                <input {...getRootProps()} />
                <>
                    <Inbox className='w-10 h-10  text-gray-400' />
                    <p className=' mt-2 text-sm text-gray-400'>Drag and drop your PDF file here</p>
                </>
            </div>
        </div>
    )
}