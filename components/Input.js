import { FaceSmileIcon, PhotoIcon } from '@heroicons/react/24/solid';
import React, { useRef, useState } from 'react';
import { useSession, signOut } from 'next-auth/react';

export default function Input() {
  const { data: session } = useSession();
  //console.log(session);

  const [input, setInput] = useState('');
  const filePickerRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const sendPost = async () => {
    setLoading(true);
    console.log(loading);
  };

  const addImageToPost = (e) => {
    console.log(e.target.files);
  };

  return (
    <>
      {session && (
        <div className="flex border-b border-gray-200 p-3 space-x-3">
          <img
            onClick={() => signOut()}
            alt="user-img"
            src={session.user.image}
            className="h-10 w-10 rounded-full xl:mr-2 cursor-pointer hover:brightness-95"
          />

          {/*textarea*/}
          <div className="w-full divide-y divide-gray-200">
            <div>
              <textarea
                className="w-full border-none focus:ring-0 text-lg placeholder-gray-700 tracking-wide min-h-[50px] text-gray-700"
                rows="2"
                placeholder="What's happening?"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
            </div>

            {/*Icon button*/}
            <div className="flex items-center justify-between pt-2.5">
              <div className="flex">
                <div onClick={() => filePickerRef.current.click()}>
                  <PhotoIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100" />
                  <input
                    type="file"
                    hidden
                    ref={filePickerRef}
                    onChange={addImageToPost}
                  />
                </div>
                <FaceSmileIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100" />
              </div>

              <button
                onClick={sendPost}
                disabled={!input.trim()}
                className="bg-blue-400 text-white px-4 py-1.5 rounded-full font-bold shadow-md hover:brightness-95 disabled:opacity-50"
              >
                Tweet
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
