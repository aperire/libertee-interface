import React, { memo, useEffect, useState } from "react";
import { IoPersonOutline } from "react-icons/io5";
import { IoImageOutline } from "react-icons/io5";
import { RiFileGifLine } from "react-icons/ri";
import { BsFileEarmarkPdf } from "react-icons/bs";
import Button from "Layout/Button";
import { useDispatch } from "react-redux";
import { createPostFunction } from "utils";

const Post = ({ pfpHash, username, signer }) => {
  const [Loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [SelectFile, setSelectFile] = useState(null);
  const [hashtag, setHashtag] = useState("");
  const [isSelected, setIsSelected] = useState(false);
  const [Fields, setFields] = useState({
    file: "",
    message: "",
    hashtags: [],
  });

  const InputHandler = (e) => {
    setFields({ ...Fields, [e.target.name]: e.target.value });
  };

  const HashtagFormData = () => {
    if (hashtag) {
      setFields({
        ...Fields,
        hashtags: [...Fields.hashtags, hashtag],
      });
      setHashtag("");
    }
  };

  const removeHashtag = (hash) => {
    const newHashtags = Fields.hashtags.filter((item) => {
      return item !== hash;
    });

    setFields({ ...Fields, hashtags: newHashtags });
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

  useEffect(() => {
    function OnInput() {
      this.style.height = "auto";
      this.style.height = this.scrollHeight + "px";
    }

    const tx = document.getElementsByTagName("textarea");
    for (let i = 0; i < tx.length; i++) {
      tx[i].setAttribute(
        "style",
        "height:" + tx[i].scrollHeight + "px;overflow-y:hidden;"
      );
      tx[i].addEventListener("input", OnInput, false);
    }
  }, [Fields.message]);

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
                className={Loading ? "not-allowed" : null}
                disabled={Loading ? true : false}
                placeholder="Stay anonymous, Let the world know?"
                rows="1"
              ></textarea>
            </div>
            <div className="input_field">
              <input
                type="text"
                name="hashtag"
                placeholder="Enter hashtag"
                autoComplete="off"
                id="formBasicHashtag"
                value={hashtag}
                className={Loading ? "not-allowed" : null}
                disabled={Loading ? true : false}
                onChange={(e) => setHashtag(e.target.value)}
              />
              <Button
                onClick={() => HashtagFormData()}
                className={Loading ? "not-allowed" : null}
                disabled={Loading ? true : false}
              >
                <i className="zmdi zmdi-plus add_hashtag" />
              </Button>
            </div>
            <div className="col-12 hashtag_section">
              <div className="row">
                {Fields?.hashtags.length > 0 && (
                  <>
                    {Fields?.hashtags?.map((list, ind) => {
                      return (
                        <div className="name ml-3 mt-3" key={ind}>
                          <span>
                            <p> {list}</p>
                            <Button
                              disabled={Loading ? true : false}
                              className={Loading ? "not-allowed" : null}
                              onClick={() => removeHashtag(list)}
                            >
                              <i className="zmdi zmdi-close" />
                            </Button>
                          </span>
                        </div>
                      );
                    })}
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 pt-2">
              <div className="select_img_Section">
                {SelectFile && (
                  <>
                    <Button
                      onClick={closeFileHandler}
                      className={Loading ? "not-allowed mt-2" : "mt-2"}
                      disabled={Loading ? true : false}
                    >
                      <i className="zmdi zmdi-close" />
                    </Button>
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
                    disabled={username ? (Loading ? true : false) : true}
                    className={
                      username
                        ? Loading
                          ? "not-allowed"
                          : null
                        : "not-allowed"
                    }
                    onClick={() =>
                      dispatch(
                        createPostFunction(
                          Fields,
                          setLoading,
                          signer,
                          setFields,
                          setIsSelected,
                          setSelectFile
                        )
                      )
                    }
                  >
                    {Loading ? (
                      <p
                        style={{
                          color: "black",
                          fontSize: "1.5rem",
                          display: "flex",
                          justifyContent: "center",
                          alignItem: "center",
                          marginTop: "3px",
                        }}
                      >
                        <i className="zmdi zmdi-rotate-left zmdi-hc-spin-reverse"></i>
                      </p>
                    ) : (
                      "Post"
                    )}
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
