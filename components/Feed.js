import { SparklesIcon } from '@heroicons/react/24/solid';
import React from 'react';
import Input from './Input';
import Post from './Post';

export default function Feed() {
  const posts = [
    {
      id: 1,
      name: 'parich suriya',
      username: 'parichle',
      userImg:
        'https://arit.rmu.ac.th/images/img_personnel_new/%E0%B8%99%E0%B8%B2%E0%B8%A2%E0%B8%9B%E0%B8%A3%E0%B8%B4%E0%B8%8A%E0%B8%93%E0%B9%8C%20%E0%B8%AA%E0%B8%B8%E0%B8%A3%E0%B8%B4%E0%B8%A2%E0%B8%B0.png',
      img: 'https://images.unsplash.com/photo-1665243066869-1f27e948de5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60',
      text: 'nice view',
      timestamp: '2 hours age',
    },
    {
      id: 2,
      name: 'suriya',
      username: 'parichle',
      userImg:
        'https://arit.rmu.ac.th/images/img_personnel_new/%E0%B8%99%E0%B8%B2%E0%B8%A2%E0%B8%9B%E0%B8%A3%E0%B8%B4%E0%B8%8A%E0%B8%93%E0%B9%8C%20%E0%B8%AA%E0%B8%B8%E0%B8%A3%E0%B8%B4%E0%B8%A2%E0%B8%B0.png',
      img: 'https://images.unsplash.com/photo-1664575601711-67110e027b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60',
      text: 'nice view',
      timestamp: '2 hours age',
    },
  ];

  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-200  xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
      {/*header*/}
      <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
        <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
        <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
          <SparklesIcon className="h-5" />
        </div>
      </div>

      {/*Input*/}
      <Input />

      {/*Posts*/}

      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
