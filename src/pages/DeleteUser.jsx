import React, { useState } from 'react';
import createAxiosInstance from '../api/AxiosInstance';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const DeleteModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [cookies,removeCookie] = useCookies();
  const navigate=useNavigate()

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  const handleDelete = async (e) => {
    e.preventDefault();
  
    try {
      const instance = createAxiosInstance(cookies);
      const response = await instance.delete("/delete-user");
      console.log(response);
      if(response.data){
        removeCookie('userToken')
          navigate('/login')

      }
      setShowModal(false);

    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="flex justify-center m-5">
        <button
          onClick={handleToggleModal}
          className="block text-white bg-slate-800 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          type="button"
        >
          Delete User
        </button>
      </div>
      {showModal && (
        <div
          id="deleteModal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed inset-0 z-50 overflow-y-auto bg-slate-600/75"
        >
          <div className="flex justify-center items-center min-h-screen p-4">
            <div className="relative bg-white rounded-lg shadow-lg max-w-md">
              <div className="absolute top-0 right-0 p-2">
                <button
                  onClick={handleToggleModal}
                  type="button"
                  className="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg p-1.5"
                  aria-label="Close modal"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="p-4">
                <svg
                  className="text-gray-400 w-11 h-11 mb-3.5 mx-auto"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <p className="mb-4 text-gray-500">
                  Are you sure you want to delete this item?
                </p>
                <div className="flex justify-center space-x-4">
                  <button
                    onClick={handleToggleModal}
                    type="button"
                    className="py-2 px-3 text-sm font-medium text-gray-500 border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10"
                  >
                    No, cancel
                  </button>
                  <button
                    onClick={handleDelete}
                    type="button"
                    className="py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300"
                  >
                    Yes, I'm sure
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteModal;
