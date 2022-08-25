import React, { useState } from "react";
import AccountWrapper from "./Account.style";
import Button from "Layout/Button";
import { AccountFormFields } from "Layout/FormElement";
import Input from "Layout/Form/Input";
import { useWallet } from "contexts/WalletContext";
import { useDispatch } from "react-redux";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import { createAccountFunction } from "utils";

const CreateAccount = () => {
  const dispatch = useDispatch();
  const { connectWallet, disconnectWallet, publickey, signer } = useWallet();
  const [hashtag, setHashtag] = useState("");
  const [AccountFields, setAccountFields] = useState({
    nickName: "",
    bio: "",
    website: "",
    image: "",
    hashtags: [],
    telegram: "",
    twitter: "",
    phone: "",
    email: "",
  });

  const AccountFormData = (e) => {
    setAccountFields({ ...AccountFields, [e.target.name]: e.target.value });
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
    await createAccountFunction(AccountFields, publickey, signer);
  };

  return (
    <AccountWrapper>
      <div className="container CreateAccount">
        <div className="row">
          <div className="col-12">
            <div className="header">
              <div className="row d-flex align-items-center">
                <div className="col-lg-6 col-md-6 col-4">
                  <img src="/images/Logo.png" alt="Logo" loading="lazy" />
                </div>
                <div className="col-lg-6 col-md-6 col-8 d-flex justify-content-end">
                  <div className="wallet">
                    {!publickey ? (
                      <Button
                        active={1}
                        br="0.4rem"
                        p="0.8rem 1.2rem"
                        size="1rem"
                        id="btn"
                        onClick={() => dispatch(connectWallet())}
                        className="d-flex align-items-center"
                      >
                        <img
                          src="/images/Metamask.png"
                          alt="Metamask"
                          loading="lazy"
                          className="pr-2"
                        />
                        Connect to MetaMask
                      </Button>
                    ) : (
                      <div className="btn-group">
                        <button
                          type="button"
                          className="dropdown_btn"
                          data-toggle="dropdown"
                          data-display="static"
                          aria-expanded="false"
                        >
                          <div className="dropdown_btn_left align-items-center">
                            <span>
                              {" "}
                              {`${publickey.slice(0, 4)}...${publickey.slice(
                                publickey.length - 4,
                                publickey.length
                              )}`}
                            </span>
                          </div>
                          <div className="dropdown_btn_right justify-content-end align-items-center">
                            <MdKeyboardArrowDown className="bottom_icon ml-1" />
                          </div>
                        </button>
                        <div className="dropdown-menu dropdown-menu-right">
                          <button
                            className="dropdown-item d-flex align-items-center"
                            type="button"
                            onClick={() => dispatch(disconnectWallet())}
                          >
                            <div>
                              <IoMdLogOut className="logout_icon" />
                            </div>
                            <div className="token_name ml-1">
                              <span>Disconnect</span>
                            </div>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
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
                            {type !== "file" ? (
                              <Input
                                type={type}
                                name={name}
                                placeholder={placeholder}
                                autoComplete="off"
                                id={controlId}
                                value={AccountFields[name]}
                                onChange={AccountFormData}
                              />
                            ) : (
                              <label className="upload">
                                <Input
                                  type={type}
                                  name={name}
                                  placeholder={placeholder}
                                  autoComplete="off"
                                  id={controlId}
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

                        <Button
                          active={2}
                          br="0.4rem"
                          p="0.3rem 0.3rem"
                          size="0.8rem"
                          id="btn"
                          className="add_hashtag"
                          onClick={() => HashtagFormData()}
                        >
                          add
                        </Button>
                      </div>
                      <div className="col-12 hashtag_section">
                        <div className="row">
                          {AccountFields?.hashtags.length > 0 && (
                            <>
                              {AccountFields?.hashtags?.map((list) => {
                                return (
                                  <div className="name ml-3 mt-3">
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
                          disabled={!publickey ? true : false}
                          className={!publickey ? "not-allowed" : null}
                        >
                          Create Account
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
