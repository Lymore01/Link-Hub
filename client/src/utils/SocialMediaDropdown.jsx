/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import useSocialMediaStore from "../contexts/socialMediaStore";

const SocialMediaDropdown = () => {
  const selectedSocialMedia = useSocialMediaStore(
    (state) => state.selectedSocialMedia
  );

  // const [selectedSocialMedia, setSelectedSocialMedia] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleSocialMedia = (socialMedia) => {
    useSocialMediaStore((state) => state.toggleSocialMedia);
  };

  return (
    <div className="relative w-full">
      <button
        className="flex items-center justify-between w-full bg-white border border-gray-300 rounded-md px-4 py-2 text-gray-600 focus:outline-none focus:border-blue-500"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedSocialMedia.length > 0 ? (
          selectedSocialMedia.map((socialMedia) => (
            <span key={socialMedia} className="mr-[10px]">
              {socialMedia === "Facebook" && <FaFacebookSquare />}
              {socialMedia === "Youtube" && <FaYoutubeSquare />}
              {socialMedia === "Twitter" && <FaTwitterSquare />}
              {socialMedia === "Instagram" && <FaInstagramSquare />}
            </span>
          ))
        ) : (
          <span className="text-[12px]">Select Social Media</span>
        )}
        <svg
          className="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 12a1 1 0 0 1-.707-.293l-4-4a1 1 0 0 1 1.414-1.414L10 9.586l3.293-3.293a1 1 0 0 1 1.414 1.414l-4 4A1 1 0 0 1 10 12z"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute z-10 top-10 bg-white border border-gray-300 rounded-md shadow-md w-full">
          <label className="flex flex-row gap-[5px]">
            <input
              type="checkbox"
              checked={selectedSocialMedia.includes("Facebook")}
              onChange={() => handleToggleSocialMedia("Facebook")}
            />
            <FaFacebookSquare className="mr-2" />
            Facebook
          </label>
          <label className="flex flex-row gap-[5px]">
            <input
              type="checkbox"
              checked={selectedSocialMedia.includes("Twitter")}
              onChange={() => handleToggleSocialMedia("Twitter")}
            />
            <FaTwitterSquare className="mr-2" />
            Twitter
          </label>
          <label className="flex flex-row gap-[5px]">
            <input
              type="checkbox"
              checked={selectedSocialMedia.includes("Instagram")}
              onChange={() => handleToggleSocialMedia("Instagram")}
            />
            <FaInstagramSquare className="mr-2" />
            Instagram
          </label>
          <label className="flex flex-row gap-[5px]">
            <input
              type="checkbox"
              checked={selectedSocialMedia.includes("Youtube")}
              onChange={() => handleToggleSocialMedia("Youtube")}
            />
            <FaYoutubeSquare className="mr-2" />
            Youtube
          </label>
        </div>
      )}
    </div>
  );
};

export default SocialMediaDropdown;
