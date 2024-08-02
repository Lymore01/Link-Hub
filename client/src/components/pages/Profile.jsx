/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { profileInfo } from "../../utils/profileInfo";
import SocialMediaDropdown from "../../utils/SocialMediaDropdown";
import SideNavBar from "../layout/SideNavBar";
import TopNavBar from "../layout/TopNavBar";
import axios from "axios";
import { useLocation, useNavigate, Link } from "react-router-dom";
import useSocialMediaStore from "../../contexts/socialMediaStore";

const Profile = () => {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploads, setUploads] = useState("");
  const selectedSocialMedia = useSocialMediaStore(
    (state) => state.selectedSocialMedia
  );

  const location = useLocation();

  // let userId = location.state.id._id;


  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    setUploads(URL.createObjectURL(e.target.files[0]));
  };

  

  const handleProfileSubmit = (e) => {

    e.preventDefault();
    axios
      .post("http://localhost:6600/user/post-profile", {
        fullName: fullName,
        username: username,
        bio: bio,
        // socialMedia: selectedSocialMedia,
        profile: uploads,
        user: sessionStorage.getItem("userSession_Id"),
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(()=>{
    sessionStorage.getItem("userSession_Id");
  },[])

  return (
    <>
      <div className="w-full h-screen flex flex-row bg-white text-[#333333] overflow-hidden relative">
        <SideNavBar />
        <div className="flex flex-col w-full h-full">
          <TopNavBar />
          <div className="w-full h-full  flex p-4">
            <div className="w-full h-full bg-[whitesmoke] rounded-md flex flex-col gap-[10px] p-4">
              <div className="w-full">
                <span className="font-bold">Edit Profile</span>
              </div>
              <div className="w-full h-full bg-white grid grid-rows-4 sm:grid-rows-2 grid-cols-1 sm:grid-cols-2 gap-[10px] pt-8 pb-8 overflow-y-scroll">
                {profileInfo.map((profile) => {
                  return (
                    <>
                      <div className="p-2 h-auto">
                        <label
                          htmlFor="fullname"
                          className="font-semibold text-[12px]"
                        >
                          {profile.label}
                        </label>
                        <div className="w-full h-[40px] border border-slate-300 rounded-md p-2 pl-4 active:border-[#3f51b5]">
                          <input
                            type={profile.type}
                            placeholder={profile.placeholder}
                            className="w-full h-full bg-[transparent] text-[12px] items-center justify-center flex outline-none capitalize"
                            value={
                              profile.value == "fullName"
                                ? fullName
                                : profile.value == "username"
                                ? username
                                : bio
                            }
                            onChange={
                              (e)=>{
                                profile.value == "fullName"
                                ? setFullName(e.target.value)
                                : profile.value == "username"
                                ? setUsername(e.target.value)
                                : setBio(e.target.value)
                              }
                            }
                          ></input>
                        </div>
                      </div>
                    </>
                  );
                })}
                <div className="p-2 h-auto">
                  <label
                    htmlFor="fullname"
                    className="font-semibold text-[12px]"
                  >
                    Social Media
                  </label>
                  <SocialMediaDropdown />
                </div>
                <div className="w-full h-auto p-2 gap-[10px] flex flex-col">
                  <label
                    htmlFor="fullname"
                    className="font-semibold text-[12px]"
                  >
                    Profile Picture
                  </label>
                  <label htmlFor="file" className="mb-4">
                    <input
                      type="file"
                      id="file"
                      name="file"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                    <div className="w-[200px] sm:w-[100%] text-white font-bold py-2 px-4 rounded cursor-pointer border border-slate-300 bg-[#ff6e40] drop-shadow-lg shadow-md">
                      Choose an image
                    </div>
                  </label>
                  <div className="w-[100%]">
                    {!selectedFile && (
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToNWGSpEbNQzHj8t6RF7h50IAs7f4bCPxwfc-ixpU8vw&s"
                        alt="Selected"
                        className="w-[100px] sm:w-[100px] h-[100px] sm:h-[100px] object-cover rounded-full shadow-md"
                      />
                    )}
                    {selectedFile && (
                      <img
                        src={uploads}
                        alt="Selected"
                        className="w-[100px] sm:w-[100px] h-[100px] sm:h-[100px] object-cover rounded-full shadow-md"
                      />
                    )}
                  </div>
                  <div className="w-[100%] flex justify-start ">
                    <div
                      className="w-auto sm:w-[200px] text-white font-bold py-2 px-4 rounded cursor-pointer border border-slate-300 bg-[#3f51b5] drop-shadow-lg shadow-md"
                      onClick={handleProfileSubmit}
                    >
                      Save Info
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
