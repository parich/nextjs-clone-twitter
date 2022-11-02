import { useRecoilState } from 'recoil';
import { modalState, postIdState } from '../atom/modalAtom';
import Modal from 'react-modal';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';
import { db } from '../firebase';
import { doc, onSnapshot } from 'firebase/firestore';
import Moment from 'react-moment';
import { userState } from '../atom/userAtom';

export default function CommentModal() {
  const [open, setOpen] = useRecoilState(modalState);
  const [postId] = useRecoilState(postIdState);
  const [post, setPost] = useState({});
  const [currentUser] = useRecoilState(userState);

  useEffect(() => {
    onSnapshot(doc(db, 'posts', postId), (snapshot) => {
      setPost(snapshot);
    });
  }, [postId, db]);

  return (
    <div>
      {open && (
        <Modal
          isOpen={open}
          onRequestClose={() => setOpen(false)}
          className="max-w-xl w-[90%] h-[300px] absolute top-24 left-[50%] translate-x-[-50%] bg-white border-1 border-gray-600 rounded-lg shadow-md"
        >
          <div className="p-1">
            <div className="border-b border-gray-200 py-2 px-1.5">
              <div
                onClick={() => setOpen(false)}
                className="hoverEffect w-9 h-9 flex items-center justify-center"
              >
                <XMarkIcon className="h-[20px] text-gray-600"></XMarkIcon>
              </div>
            </div>

            <div className="p-2 flex items-center space-x-1 relative">
              <span className="w-0.5 h-full z-[-1] absolute left-8 top-11 bg-gray-300" />
              <img
                className="h-11 w-11 rounded-full mr-4"
                src={post?.data()?.userImg}
                alt="user-img"
              />
              <h4 className="font-bold text-[15px] sm:text-[16px] hover:underline">
                {post?.data()?.name}
              </h4>
              <span className="text-sm sm:text-[15px]">
                @{post?.data()?.username} -{' '}
              </span>
              <span className="text-sm sm:text-[15px] hover:underline">
                <Moment fromNow>{post?.data()?.timestamp?.toDate()}</Moment>
              </span>
            </div>
            <p className="text-gray-500 text-[15px] sm:text-[16px] ml-16 mb-2">
              {post?.data()?.text}
            </p>

            <div className="flex  p-3 space-x-3">
              <img
                src={currentUser?.userImg}
                alt="user-img"
                className="h-11 w-11 rounded-full cursor-pointer hover:brightness-95"
              />
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
