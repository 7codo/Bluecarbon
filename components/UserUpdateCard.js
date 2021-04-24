import Image from 'next/image'
import {AiOutlineEye, AiOutlineHeart, AiOutlineComment} from 'react-icons/ai'
function UserUpdateCard({lastPost, picture, fullname, id}) {
    const reactionStyle = "inline-block text-2xl mr-1";
    return (
        <div className={`py-7 px-8 bg-white max-w-xs shadow-lg rounded-sm ${id === 1? '': 'ml-5'}`}>
            <div className="head flex items-center justify-center">
                <Image 
                    className="rounded-full"
                    src={picture}
                    width={100}
                    height={100}
                />
                <div className="title text-center mx-3">
                    <h3 className="font-bold mb-1 capitalize">{fullname}</h3>
                    <button className="primary-btn px-7 rounded-full text-sm">follow</button>
                </div>
            </div>
            <div className="body p-4 border-gray-200 border-2 mt-3 rounded-md ">
                <h4 className="font-bold">{lastPost.title}</h4>
                <p className="my-2 text-sm whitespace-nowrap overflow-hidden overflow-ellipsis">{lastPost.description}</p>
                <p className="text-sm mx-2">Published <span className="font-bold">{lastPost.publish_date}</span></p>
                <div className="reaction  flex justify-between py-3">
                    <span><AiOutlineEye className={`${reactionStyle} `} />{lastPost.reaction.views}</span>
                    <span><AiOutlineHeart className={`${reactionStyle}`} />{lastPost.reaction.likes}</span>
                    <span><AiOutlineComment className={`${reactionStyle}`} />{lastPost.reaction.comments}</span>
                </div>
                <button className="primary-btn  w-full rounded-full mt-2 text-">Like Article</button>
            </div>
        </div>
    )
}

export default UserUpdateCard
