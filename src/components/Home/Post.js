import React, { memo, useState } from "react";
import { IoPersonOutline } from "react-icons/io5";
import { IoImageOutline } from "react-icons/io5";
import { RiFileGifLine } from "react-icons/ri";
import { BsFileEarmarkPdf } from "react-icons/bs";
import Button from "Layout/Button";

const Post = ({ pfpHash, username }) => {
  const [SelectFile, setSelectFile] = useState(null);
  const [Fields, setFields] = useState({
    file: "",
    message: "",
  });

  const [isSelected, setIsSelected] = useState(false);

  const InputHandler = (e) => {
    setFields({ ...Fields, [e.target.name]: e.target.value });
  };

  const ImgHandler = async (e) => {
    var file = e.target.files[0];

    if (!file) {
      setSelectFile(null);
      setIsSelected(false);
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setFields({ ...Fields, file: file });
        setSelectFile(reader.result);
        setIsSelected(true);
      }
    };
    reader.readAsDataURL(file);
  };

  const closeFileHandler = () => {
    setSelectFile(null);
    setFields({ ...Fields, file: "" });
    setIsSelected(false);
  };

  return (
    <div className="post_card">
      <div className="row">
        <div className="col-1">
          <div className="profile_img">
            {!username ? (
              <IoPersonOutline className="person" />
            ) : (
              <img src={`https://ipfs.io/ipfs/${pfpHash}`} alt={username} />
            )}
          </div>
        </div>
        <div className="col-11">
          <div className="post_form_section">
            <div className="input_field">
              <textarea
                name="message"
                id="FormPostMessage"
                value={Fields.message}
                onChange={InputHandler}
                placeholder="Stay anonymous, Let the world know?"
                rows="1"
              ></textarea>
            </div>
          </div>

          <div className="row">
            <div className="col-12 py-3">
              <div className="select_img_Section">
                {SelectFile && (
                  <>
                    <i className="zmdi zmdi-close" onClick={closeFileHandler} />
                    <img src={SelectFile} alt="loading..." />
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="images_section">
            <div className="row">
              <div className="col-6 d-flex flex-row align-items-center">
                <label className="upload">
                  <input
                    type="file"
                    name="file"
                    autoComplete="off"
                    id="formBasicMedia"
                    accept="image/png, image/jpg"
                    style={{ display: "none" }}
                    disabled={isSelected}
                    onChange={ImgHandler}
                  />
                  <IoImageOutline
                    className={
                      isSelected ? "upload_icons1 hide" : "upload_icons1"
                    }
                  />
                </label>
                <label className="upload ml-2">
                  <input
                    type="file"
                    name="file"
                    autoComplete="off"
                    id="formBasicMedia"
                    disabled={isSelected}
                    accept="image/png, image/jpg"
                    onChange={ImgHandler}
                    style={{ display: "none" }}
                  />
                  <RiFileGifLine
                    className={
                      isSelected ? "upload_icons2 hide" : "upload_icons2"
                    }
                  />
                </label>
                <label className="upload ml-2">
                  <input
                    type="file"
                    name="file"
                    autoComplete="off"
                    disabled={isSelected}
                    id="formBasicMedia"
                    accept="image/png, image/jpg"
                    onChange={ImgHandler}
                    style={{ display: "none" }}
                  />
                  <BsFileEarmarkPdf
                    className={
                      isSelected ? "upload_icons3 hide" : "upload_icons3"
                    }
                  />
                </label>
              </div>

              <div className="col-6 d-flex justify-content-end align-items-center">
                <div>
                  <Button
                    active={2}
                    br="50px"
                    p="0.2rem 1rem"
                    size="1rem"
                    id="btn"
                    disabled={username ? false : true}
                    className={username ? null : "not-allowed"}
                  >
                    Post
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Post);
