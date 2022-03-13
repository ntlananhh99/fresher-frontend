import React from 'react'
import { deleteUser } from '../utils/Api';

const DeletePopup = ({dataTarget, id}) => {
    console.log(dataTarget);
  const onHandDel = async (id) => {
    deleteUser(id);
  };
    return(
        <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id={dataTarget} tabIndex={-1} aria-labelledby="exampleModalCenterTitle" aria-modal="true" role="dialog">
        <div className="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
          <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <h5 className="text-xl font-medium leading-normal text-gray-800" id="exampleModalScrollableLabel">
                DELETE
              </h5>
              <button type="button" className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body relative p-4">
              <p>Are you sure you want to delete this item ?</p>
            </div>
            <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
              <button type="button" className="inline-block px-6 py-2 border-2 border-neutral-800 text-neutral-800 font-medium text-xs 
  leading-tight uppercase rounded hover:bg-neutral-800 hover:text-white focus:outline-none focus:ring-0 transition 
  duration-150 ease-in-out mr-4" data-bs-dismiss="modal">
                Cancel
              </button>
              <button type="button" className="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs 
  leading-tight uppercase rounded hover:bg-red-700 hover:text-white focus:outline-none focus:ring-0 transition 
  duration-150 ease-in-out" data-bs-dismiss="modal" onClick={() => onHandDel(id)}>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    )
}
export default DeletePopup;
