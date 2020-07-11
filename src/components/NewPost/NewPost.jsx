import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export const NewPost = ({handleChangeCheckbox, handleChangeEditor, handleSubmit}) => {
    
    

    return(
        <>
            <h4 className="mt-5 ml-4">Create new post</h4>
            <div className="container pt-5">
                <h6>Which kind of post is it?</h6>
                    <div className="row m-3 mt-5 mb-5">
                        <div className="col">
                            <input onChange={handleChangeCheckbox} name="science" type="checkbox" /> Science
                        </div>
                        <div className="col">
                            <input onChange={handleChangeCheckbox} name="technology" type="checkbox" /> Technology
                        </div>
                        <div className="col">
                            <input onChange={handleChangeCheckbox} name="business" type="checkbox" /> Business
                        </div>


                    </div>
                <h6 className="mb-5">Write it</h6>
                <CKEditor
                    editor={ ClassicEditor }
                    onChange={handleChangeEditor}
                    />
                
                
                <Link onClick={handleSubmit} to="/new-post/prueba" className="btn btn-primary">
                    Sumbit
                </Link>
            
            </div>
            
        </>
    )

}

