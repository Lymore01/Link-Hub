/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import SideNavBar from "../layout/SideNavBar";
import TopNavBar from "../layout/TopNavBar";
import Profile from "./Profile";
import { socialMedia } from "../../utils/SocialMediaIcons";
import { IoAdd } from "react-icons/io5";
import LinkCard from "../common/LinkCard";
import { links } from "../../utils/links";
import { socialMediaPhone } from "../../utils/SocialMediaIcons";
import LinkCardPhone from "../common/LinkCardPhone";
import { IoMdNotifications } from "react-icons/io";
import { GoShare } from "react-icons/go";
import PhoneMockup from "../common/PhoneMockup";
import { IoArrowBack } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { AnimatePresence, easeOut, motion } from "framer-motion";
import { Link } from "react-router-dom";
import SocialMediaDropdown from "../../utils/SocialMediaDropdown";
import { CiEdit } from "react-icons/ci";
import { MdEditSquare } from "react-icons/md";
import { useDashView } from "../../contexts/DashView";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import Modal from "../../utils/Modal";

const Dashboard = ({ editCardDetail }) => {
  const [preview, setPreview] = useState(false);
  const [clicked, setClicked] = useState("");
  const [editValue, setEditValue] = useState("");
  const [editLink, setEditLink] = useState("");
  const [selectedCard, setSelectedCard] = useState([]);
  const [draggedItem, setDraggedItem] = useState(null);
  const [Items, setItems] = useState(links);
  const [isOpen, setIsOpen] = useState(false);
  const [isAddOpen, setAddIsOpen] = useState(false);
  const [addLink, setAddLink] = useState(false);
  const [profileInfo, setProfileInfo] = useState([]);

  const dashItem = useDashView();
  const dashItemValue = dashItem.dashItem;

  const location = useLocation();

  const handlePreview = (e) => {
    e.preventDefault();
    setPreview(!preview);
  };

  const handleCardClick = (id) => {
    const data = links.filter((link) => link.id === id);
    setIsOpen(!isOpen);
    setSelectedCard(data);
  };

  const handleAddClick = () => {
    setAddIsOpen(!isAddOpen);
  };
  const handleAddLink = () => {
    setAddLink(!addLink);
  };

  useEffect(() => {
    if (selectedCard && selectedCard.length > 0) {
      setEditValue(selectedCard[0].title);
      setEditLink(selectedCard[0].link);
    }
  }, [selectedCard]);

  const handleDragStart = (event, item) => {
    setDraggedItem(item);
  };

  const handleDragOver = (event, item) => {
    const draggedOver = Items.indexOf(item);
    event.preventDefault();
    const draggedIndex = Items.indexOf(draggedItem);
    if (draggedIndex !== draggedOver) {
      const updatedItems = [...Items];
      [updatedItems[draggedIndex], updatedItems[draggedOver]] = [
        updatedItems[draggedOver],
        updatedItems[draggedIndex],
      ];
      setItems(updatedItems);
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setDraggedItem(null);
  };

  const handleDragEnd = () => {
    setDraggedItem(null);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:6600/user/profile/${location.state.id._id}`)
      .then((response) => {
        console.log(response.data)
        setProfileInfo(response.data);
      })
      .catch((err) => console.error(err));
  }, [location]);

  return (
    <>
      <div className="w-full h-screen flex flex-row bg-white text-[#333333] overflow-hidden relative">
        <SideNavBar />
        <div className="flex flex-col w-full h-full">
          <TopNavBar />
          {dashItemValue == "profileComponent" ? (
            <>
              <Profile />
            </>
          ) : (
            <>
              <div className="h-screen w-full flex flex-row p-4 overflow-y-scroll">
                {/* div one */}
                <div className="w-[100%] sm:w-[60%] p-4 sm:p-8 flex flex-col gap-[40px]">
                  <div className="flex flex-col sm:flex-row gap-[20px] sm:gap-[40px]">
                    <div className="flex-row sm:flex-col flex justify-between">
                      <div className="w-[60px] h-[60px] rounded-full">
                        <img
                          className="w-full h-full object-cover rounded-full"
                          src={profileInfo[0].photo}
                        ></img>
                      </div>
                      <div
                        className="h-[30px] flex sm:hidden items-center justify-center"
                        onClick={handlePreview}
                      >
                        <button className="w-[100px] h-[30px] bg-[#3f51b5] text-[whitesmoke] rounded-md font-bold">
                          Preview
                        </button>
                      </div>
                    </div>
                    <div className="justify-center flex flex-col items-start gap-[10px]">
                      <span className="text-[12px] font-bold">Title</span>
                      <div className="border-[2px] border-[#ff6e40] border-t-0 border-l-0 border-r-0 w-full sm:w-[200px] font-semibold justify-between flex">
                        <span className="text-[14px]">
                          {profileInfo[0].username}
                        </span>
                        <span>
                          <MdEditSquare className="cursor-pointer" />
                        </span>
                      </div>
                    </div>

                    <div className="justify-center flex flex-col items-start gap-[10px]">
                      <span className="text-[12px] font-bold">Bio</span>
                      <div className="border-[2px] border-[#ff6e40] border-t-0 border-l-0 border-r-0 w-full sm:w-[200px] font-semibold flex justify-between">
                        <span className="text-[14px]">
                          {profileInfo[0].bio}
                        </span>
                        <span>
                          <MdEditSquare className="cursor-pointer" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="w-[60%] md:w-[30%] h-auto items-center flex justify-start flex-row gap-[15px]">
                      {socialMedia.map((socials) => {
                        return (
                          <>
                            <div
                              className="w-[35px] h-[35px] bg-[#ff6e40] rounded-full items-center justify-center flex cursor-pointer"
                              key={socials.id}
                            >
                              <span>
                                {profileInfo[0].socialMedia == "Whatsapp" &&
                                socials.title == "Whatsapp"
                                  ? socials.icon
                                  : "None"}
                              </span>
                            </div>
                          </>
                        );
                      })}
                      <div className="w-[35px] h-[35px] bg-[#ff6e40] rounded-full items-center justify-center flex cursor-pointer">
                        <span>{profileInfo.socialMedia == "Whatsapp"}</span>
                      </div>
                      <motion.div
                        layoutId="socialMediaAdd"
                        className="w-[35px] h-[35px] bg-[#3f51b5] rounded-full items-center justify-center flex cursor-pointer"
                        onClick={handleAddClick}
                      >
                        <span>
                          <IoAdd className="fill-white" />
                        </span>
                      </motion.div>
                    </div>
                  </div>

                  <div className="w-full h-[450px] sm:h-[350px] overflow-y-scroll p-0 sm:p-4">
                    <motion.div
                      className="w-full p-2 justify-end items-end flex"
                      layoutId="addLink"
                      onClick={handleAddLink}
                    >
                      <span className="text-[12px] font-semibold">
                        <IoAdd className="w-[26px] h-[26px] cursor-pointer fill-black" />
                      </span>
                    </motion.div>
                    {Items.map((link) => {
                      return (
                        <>
                          <LinkCard
                            linkDescription={link.title}
                            link={link.link}
                            layoutId={"linkCard"}
                            onDragOver={(event) => handleDragOver(event, link)}
                            onDrop={handleDrop}
                            onDragStart={(event) =>
                              handleDragStart(event, link)
                            }
                            onDragEnd={handleDragEnd}
                            onClick={() => {
                              handleCardClick(link.id);
                            }}
                          />
                        </>
                      );
                    })}
                  </div>
                  <div className="mt-[-20px] mb-[-20px] flex w-full justify-end">
                    <button className="w-[100px] h-[30px] bg-[#3f51b5] text-[whitesmoke] rounded-md font-bold">
                      Save
                    </button>
                  </div>
                </div>
                {/* Div two */}
                <PhoneMockup
                  visibility={"hidden"}
                  width={"55%"}
                  content={Items}
                />
              </div>
            </>
          )}
        </div>
        {preview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeInOut" }}
            className="absolute sm:hidden w-full h-full mt-0 ml-0 bg-[whitesmoke] flex flex-col p-4"
          >
            <div className="w-full flex">
              <span>
                <IoArrowBack
                  className="w-[25px] h-[25px] cursor-pointer"
                  onClick={() => {
                    setPreview(false);
                  }}
                />
              </span>
            </div>
            <div className="w-full h-full items-center justify-center flex">
              <PhoneMockup visibility={"flex"} width={"100%"} />
            </div>
          </motion.div>
        )}
        <AnimatePresence layoutId="linkCard">
          {isOpen && (
            <div className="w-full h-full absolute mt-0 mb-0 flex backdrop-blur-sm bg-[rgba(0,0,0,0.8)] flex-col gap-[10px] p-4">
              <div className="w-full h-auto flex justify-end">
                <span
                  onClick={() => {
                    setIsOpen(false);
                  }}
                >
                  <IoMdClose className="w-[30px] h-[30px] cursor-pointer fill-white font-bold" />
                </span>
              </div>
              <div className="items-center justify-center flex w-full h-[80%]">
                <div className="items-center justify-center flex w-full sm:w-[500px] h-auto p-4 bg-[white] rounded-lg flex-col gap-[20px] text-[#333333] ">
                  <div className="w-full flex justify-start flex-col gap-[20px]">
                    <label htmlFor="edit" className="font-semibold">
                      Title:
                    </label>
                    <input
                      className="w-full pb-2 h-[30px] outline-none border border-t-0 border-l-0 border-r-0 border-b-[#3f51b5]"
                      type="text"
                      id="edit"
                      placeholder="title"
                      value={editValue}
                      onChange={(e) => {
                        setEditValue(e.target.value);
                      }}
                    ></input>
                  </div>
                  <div className="w-full flex justify-start flex-col gap-[20px]">
                    <label htmlFor="link" className="font-semibold">
                      Link:
                    </label>
                    <input
                      className="w-full pb-2 h-[30px] outline-none border border-t-0 border-l-0 border-r-0 border-b-[#3f51b5]"
                      type="text"
                      id="link"
                      placeholder="link"
                      value={editLink}
                      onChange={(e) => {
                        setEditLink(e.target.value);
                      }}
                    ></input>
                  </div>
                  <div className="flex w-full justify-end">
                    <button className="w-[100px] h-[30px] bg-[#3f51b5] text-[whitesmoke] rounded-md font-bold">
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </AnimatePresence>
        <AnimatePresence layoutId="socialMediaAdd">
          {isAddOpen && (
            <>
              <div className="w-full h-full absolute mt-0 mb-0 flex backdrop-blur-sm bg-[rgba(0,0,0,0.8)] flex-col gap-[10px] p-4">
                <div className="w-full h-auto flex justify-end">
                  <span
                    onClick={() => {
                      setAddIsOpen(false);
                    }}
                  >
                    <IoMdClose className="w-[30px] h-[30px] cursor-pointer fill-white font-bold" />
                  </span>
                </div>
                <div className="items-center justify-center flex w-full h-[80%]">
                  <div className="items-center justify-center flex w-full sm:w-[500px] h-auto p-4 bg-[white] rounded-lg flex-col gap-[20px] text-[#333333] ">
                    <div className="w-full flex justify-start flex-col gap-[20px]">
                      <label htmlFor="edit" className="font-semibold">
                        Social Media
                      </label>
                      <SocialMediaDropdown />
                    </div>
                    <div className="w-full flex justify-start flex-col gap-[20px]">
                      <label htmlFor="link" className="font-semibold">
                        Link:
                      </label>
                      <input
                        className="w-full pb-2 h-[30px] outline-none border border-t-0 border-l-0 border-r-0 border-b-[#3f51b5]"
                        type="text"
                        id="link"
                        placeholder="link"
                        value={editLink}
                        onChange={(e) => {
                          setEditLink(e.target.value);
                        }}
                      ></input>
                    </div>
                    <div className="flex w-full justify-end">
                      <button className="w-[100px] h-[30px] bg-[#3f51b5] text-[whitesmoke] rounded-md font-bold">
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </AnimatePresence>
        <AnimatePresence layoutId="addLink">
          {addLink && (
            <>
              <div className="w-full h-full absolute mt-0 mb-0 flex backdrop-blur-sm bg-[rgba(0,0,0,0.8)] flex-col gap-[10px] p-4">
                <div className="w-full h-auto flex justify-end">
                  <span
                    onClick={() => {
                      setAddLink(false);
                    }}
                  >
                    <IoMdClose className="w-[30px] h-[30px] cursor-pointer fill-white font-bold" />
                  </span>
                </div>
                <div className="items-center justify-center flex w-full h-[80%]">
                  <div className="items-center justify-center flex w-full sm:w-[500px] h-auto p-4 bg-[white] rounded-lg flex-col gap-[20px] text-[#333333] ">
                    <div className="w-full flex justify-start flex-col gap-[20px]">
                      <label htmlFor="edit" className="font-semibold">
                        Title:
                      </label>
                      <input
                        className="w-full pb-2 h-[30px] outline-none border border-t-0 border-l-0 border-r-0 border-b-[#3f51b5]"
                        type="text"
                        id="edit"
                        placeholder="title"
                        value={editValue}
                        onChange={(e) => {
                          setEditValue(e.target.value);
                        }}
                      ></input>
                    </div>
                    <div className="w-full flex justify-start flex-col gap-[20px]">
                      <label htmlFor="link" className="font-semibold">
                        Link:
                      </label>
                      <input
                        className="w-full pb-2 h-[30px] outline-none border border-t-0 border-l-0 border-r-0 border-b-[#3f51b5]"
                        type="text"
                        id="link"
                        placeholder="link"
                        value={editLink}
                        onChange={(e) => {
                          setEditLink(e.target.value);
                        }}
                      ></input>
                    </div>
                    <div className="flex w-full justify-end">
                      <button className="w-[100px] h-[30px] bg-[#3f51b5] text-[whitesmoke] rounded-md font-bold">
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Dashboard;
