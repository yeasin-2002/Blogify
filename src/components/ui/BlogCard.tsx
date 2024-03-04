import React from 'react';
interface Props extends React.ComponentProps<'div'> {
  showActionModal?: boolean;
}

// assets and Icons
import thumbnail from '@/assets/blogs/React-Roadmap.jpg';
import threeDots from '@/assets/icons/3dots.svg';
import deleteIcon from '@/assets/icons/delete.svg';
import editIcon from '@/assets/icons/edit.svg';

export const BlogCard = ({ showActionModal = false, ...rest }: Props) => {
  return (
    <div className="blog-card" {...rest}>
      <img className="blog-thumb" src={thumbnail} alt="" />
      <div className="relative mt-2">
        <a href="./single-blog.html">
          <h3 className="text-xl text-slate-300 lg:text-2xl">
            <p>React Roadmap in 2024</p>
          </h3>
        </a>
        <p className="mb-6 mt-1 text-base text-slate-500">
          Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor
          pretium donec dictum. Vici consequat justo enim. Venenatis eget
          adipiscing luctus lorem.
        </p>

        {/* Meta Informations */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 capitalize">
            <div className="avater-img bg-indigo-600 text-white">
              <span className="">S</span>
            </div>

            <div>
              <h5 className="text-sm text-slate-500">
                <a href="./profile.html">Saad Hasan</a>
              </h5>
              <div className="flex items-center text-xs text-slate-700">
                <span>June 28, 2018</span>
              </div>
            </div>
          </div>

          <div className="px-2 py-1 text-sm text-slate-700">
            <span>100 Likes</span>
          </div>
        </div>

        {showActionModal && (
          <div className="absolute right-0 top-0">
            <button>
              <img src={threeDots} alt="3dots of Action" />
            </button>

            {/* Action Menus Popup */}
            <div className="action-modal-container">
              <button className="action-menu-item hover:text-lwsGreen">
                <img src={editIcon} alt="Edit" />
                Edit
              </button>
              <button className="action-menu-item hover:text-red-500">
                <img src={deleteIcon} alt="Delete" />
                Delete
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
