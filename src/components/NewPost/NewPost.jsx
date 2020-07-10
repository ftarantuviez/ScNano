import React from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export const NewPost = () => {
    
        return(
            <>
                <h4 className="mt-5 ml-4">Create new post</h4>
                <div className="container pt-5">
                    <h6>Which kind of post is it?</h6>
                        <div className="row m-3 mt-5 mb-5">
                            <div className="col">
                                <input type="checkbox" /> Science
                            </div>
                            <div className="col">
                                <input type="checkbox" /> Technology
                            </div>
                            <div className="col">
                                <input type="checkbox" /> Business
                            </div>
    

                        </div>
                    <h6>Write it</h6>
                    <CKEditor
                    editor={ ClassicEditor }
                    data="<p>Hello from CKEditor 5!</p>"
                    onInit={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />
                    
                </div>
                
            </>
        )
    
}

