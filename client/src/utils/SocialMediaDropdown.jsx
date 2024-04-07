import { useState } from "react";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";

const SocialMediaDropdown = () => {
  const [selectedSocialMedia, setSelectedSocialMedia] = useState(null);
  const [isOpen, setIsOpen ] = useState(false)

  const handleSelectSocialMedia = (socialMedia) => {
    setSelectedSocialMedia(socialMedia);
    setIsOpen(false)
  };

  return (
    <div className="relative w-full">
      <button className="flex items-center justify-between w-full bg-white border border-gray-300 rounded-md px-4 py-2 text-gray-600 focus:outline-none focus:border-blue-500">
        {selectedSocialMedia ? (
          <>
            {selectedSocialMedia === "Facebook" && (
              <FaFacebookSquare className="mr-2" />
            )}
            {selectedSocialMedia === "Youtube" && (
              <FaYoutubeSquare className="mr-2" />
            )}
            {selectedSocialMedia === "Twitter" && (
              <FaTwitterSquare className="mr-2" />
            )}
            {selectedSocialMedia === "Instagram" && (
              <FaInstagramSquare className="mr-2" />
            )}
            {selectedSocialMedia}
          </>
        ) : (
          <span>Select Social Media</span>
        )}
        <svg
          className="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <path
            fillRule="evenodd"
            d="M10 12a1 1 0 0 1-.707-.293l-4-4a1 1 0 0 1 1.414-1.414L10 9.586l3.293-3.293a1 1 0 0 1 1.414 1.414l-4 4A1 1 0 0 1 10 12z"
          />
        </svg>
      </button>
      {isOpen && (
        <>
          <div className="absolute z-10 top-10 bg-white border border-gray-300 rounded-md shadow-md w-full">
            <button
              className="flex items-center w-full px-4 py-2 text-gray-600 hover:bg-gray-100 focus:outline-none"
              onClick={() => handleSelectSocialMedia("Facebook")}
            >
              <FaFacebookSquare className="mr-2" />
              Facebook
            </button>
            <button
              className="flex items-center w-full px-4 py-2 text-gray-600 hover:bg-gray-100 focus:outline-none"
              onClick={() => handleSelectSocialMedia("Twitter")}
            >
              <FaTwitterSquare className="mr-2" />
              Twitter
            </button>
            <button
              className="flex items-center w-full px-4 py-2 text-gray-600 hover:bg-gray-100 focus:outline-none"
              onClick={() => handleSelectSocialMedia("Instagram")}
            >
              <FaInstagramSquare className="mr-2" />
              Instagram
            </button>
            <button
              className="flex items-center w-full px-4 py-2 text-gray-600 hover:bg-gray-100 focus:outline-none"
              onClick={() => handleSelectSocialMedia("Youtube")}
            >
              <FaYoutubeSquare className="mr-2" />
              Youtube
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default SocialMediaDropdown;
