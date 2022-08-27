import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AccountWrapper from "./Account.style";
import Button from "Layout/Button";
import { AccountFormFields } from "Layout/FormElement";
import Input from "Layout/Form/Input";
import { useWallet } from "contexts/WalletContext";
import { useDispatch } from "react-redux";
import { createAccountFunction, isUserExits } from "utils";
import WalletButton from "../globalComponents/WalletButton";

var MAX_WIDTH = 50;
var MAX_HEIGHT = 50;
var MIME_TYPE = "image/png";
var QUALITY = 0.7;

const CreateAccount = () => {
  const navigate = useNavigate();
  const { publickey, signer, readAccount } = useWallet();
  const dispatch = useDispatch();
  // const [select, setSelect] = useState(null);
  const [checkUser, setCheckUser] = useState(null);
  const [Loading, setLoading] = useState(false);
  const [hashtag, setHashtag] = useState("");
  const [AccountFields, setAccountFields] = useState({
    nickName: "",
    bio: "",
    image: "",
    hashtags: [],
  });

  const AccountFormData = async (e) => {
    setAccountFields({ ...AccountFields, [e.target.name]: e.target.value });
    if (e.target.name === "nickName" && signer) {
      if (e.target.value.length !== 0) {
        const check = await isUserExits(signer, e.target.value);
        setCheckUser(check);
      } else {
        setCheckUser(null);
      }
    }
  };

  const SelectFormImg = (e) => {
    setAccountFields({ ...AccountFields, image: e.target.files[0] });
  };

  const HashtagFormData = () => {
    if (hashtag) {
      setAccountFields({
        ...AccountFields,
        hashtags: [...AccountFields.hashtags, hashtag],
      });
      setHashtag("");
    }
  };

  const removeHashtag = (hash) => {
    const newHashtags = AccountFields.hashtags.filter((item) => {
      return item !== hash;
    });

    setAccountFields({ ...AccountFields, hashtags: newHashtags });
  };

  const CreateAccount = async (e) => {
    e.preventDefault();

    const { image } = AccountFields;

    // console.log(image);

    let circleCanvas = document.createElement("canvas");
    let circleCtx = circleCanvas.getContext("2d");

    circleCanvas.width = MAX_WIDTH;
    circleCanvas.height = MAX_HEIGHT;
    const centerX = circleCanvas.width / 2;
    const centerY = circleCanvas.height / 2;
    const radius = 50;

    const img = new Image();
    const blobURL = URL.createObjectURL(image);
    img.src = blobURL;

    img.onerror = function () {
      URL.revokeObjectURL(img.src);
      console.log("Cannot load image");
      return;
    };

    img.onload = function () {
      URL.revokeObjectURL(img.src);

      circleCtx.save();
      circleCtx.beginPath();
      circleCtx.arc(centerX, centerY, radius, 0, Math.PI * 2, false);
      circleCtx.strokeStyle = "#2465D3";
      circleCtx.stroke();
      circleCtx.clip();
      circleCtx.drawImage(img, 0, 0, MAX_WIDTH, MAX_HEIGHT);
      circleCtx.restore();

      circleCanvas.toBlob(
        async (blob) => {
          var file = new File([blob], image.name, {
            type: "image/png",
          });

          // console.log(file);
          // const reader = new FileReader();
          // reader.onload = () => {
          //   if (reader.readyState === 2) {
          //     setSelect(reader.result);
          //   }
          // };
          // reader.readAsDataURL(file);

          var formData = new FormData();
          formData.append("file", file);

          dispatch(
            createAccountFunction(
              AccountFields,
              signer,
              setLoading,
              readAccount,
              publickey,
              navigate,
              formData,
              setAccountFields
            )
          );
        },
        MIME_TYPE,
        QUALITY
      );
    };
  };

  return (
    <AccountWrapper>
      <div className="container CreateAccount">
        <div className="row">
          <div className="col-12">
            <div className="header">
              <div className="row d-flex align-items-center">
                <div className="col-lg-6 col-md-6 col-4">
                  <img
                    src="/images/Logo.png"
                    alt="Logo"
                    loading="lazy"
                    className="logo_img"
                    onClick={() => navigate("/")}
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-8 d-flex justify-content-end">
                  <WalletButton
                    p="0.8rem 1.5rem"
                    size="1rem"
                    radius="50px"
                    ImgHeight="1.8rem"
                    Title="Connect to MetaMask"
                  />
                </div>
              </div>
              {/* <div className="row">
                <div className="col-12">
                  <img src={select} alt="loading..." />
                </div>
              </div> */}
            </div>
          </div>
          <div className="col-12 d-flex justify-content-center mt-3">
            <div className="title text-center">
              <h1>Welcome to Libertee Protocol</h1>
              <span>Access Uncensorable Contents on the Internet</span>
            </div>
          </div>
          <div className="col-12 form_section mt-4">
            <div className="form_title text-center">
              <h4>Create Account</h4>
            </div>
            <form method="post" onSubmit={CreateAccount}>
              <div className="row d-flex justify-content-center">
                <div className="col-lg-6 col-md-8 col-12">
                  <div className="form_fields">
                    <div className="row">
                      {AccountFormFields.map((List, ind) => {
                        const { name, type, controlId, placeholder } = List;
                        return (
                          <div className="col-12 form_field mt-3" key={ind}>
                            {name !== "image" && (
                              <>
                                <Input
                                  type={type}
                                  name={name}
                                  placeholder={placeholder}
                                  autoComplete="off"
                                  id={controlId}
                                  value={AccountFields[name]}
                                  onChange={AccountFormData}
                                />

                                {name === "nickName" && (
                                  <>
                                    {checkUser !== null && (
                                      <span
                                        className={`check_user ${
                                          checkUser ? "exit" : "not_exit"
                                        }`}
                                      >
                                        {checkUser ? (
                                          <>
                                            <p>already exit</p>
                                            <i className="zmdi zmdi-close pl-2" />
                                          </>
                                        ) : (
                                          <>
                                            <p> not exit</p>
                                            <i className="zmdi zmdi-check pl-2" />
                                          </>
                                        )}
                                      </span>
                                    )}
                                  </>
                                )}
                              </>
                            )}

                            {name === "image" && (
                              <label className="upload">
                                <Input
                                  type={type}
                                  name={name}
                                  placeholder={placeholder}
                                  autoComplete="off"
                                  id={controlId}
                                  accept="image/png, image/gif, image/jpg"
                                  required={true}
                                  onChange={SelectFormImg}
                                  style={{ display: "none" }}
                                />
                                {AccountFields?.image?.name
                                  ? AccountFields?.image?.name
                                  : " Upload file ( png, jpg, gif )"}
                              </label>
                            )}
                          </div>
                        );
                      })}
                      <div className="col-12 form_field mt-3">
                        <Input
                          type="text"
                          name="hashtag"
                          placeholder="Enter hashtag"
                          autoComplete="off"
                          id="formBasicHashtag"
                          value={hashtag}
                          onChange={(e) => setHashtag(e.target.value)}
                        />

                        <span
                          className="add_hashtag"
                          onClick={() => HashtagFormData()}
                        >
                          add
                        </span>
                      </div>
                      <div className="col-12 hashtag_section">
                        <div className="row">
                          {AccountFields?.hashtags.length > 0 && (
                            <>
                              {AccountFields?.hashtags?.map((list, ind) => {
                                return (
                                  <div className="name ml-3 mt-3" key={ind}>
                                    <span>
                                      <p> {list}</p>
                                      <i
                                        className="zmdi zmdi-close"
                                        onClick={() => removeHashtag(list)}
                                      />
                                    </span>
                                  </div>
                                );
                              })}
                            </>
                          )}
                        </div>
                      </div>
                      <div className="col-12 submit_form mt-3">
                        <Button
                          type="submit"
                          active={2}
                          br="50px"
                          p="0.8rem 1.8rem"
                          size="1rem"
                          id="btn"
                          disabled={
                            publickey
                              ? checkUser
                                ? true
                                : Loading
                                ? true
                                : false
                              : true
                          }
                          className={
                            publickey
                              ? checkUser
                                ? "not-allowed"
                                : Loading
                                ? "not-allowed"
                                : null
                              : "not-allowed"
                          }
                        >
                          {Loading ? (
                            <p
                              style={{
                                color: "black",
                                fontSize: "1.7rem",
                                display: "flex",
                                justifyContent: "center",
                                alignItem: "center",
                                marginTop: "3px",
                              }}
                            >
                              <i className="zmdi zmdi-rotate-left zmdi-hc-spin-reverse"></i>
                            </p>
                          ) : (
                            "Create Account"
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AccountWrapper>
  );
};

export default CreateAccount;
