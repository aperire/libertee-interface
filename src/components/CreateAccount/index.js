import React, { useState } from "react";
import AccountWrapper from "./Account.style";
import Button from "Layout/Button";
import { AccountFormFields } from "Layout/FormElement";
import Input from "Layout/Form/Input";
import { useWallet } from "contexts/WalletContext";

const CreateAccount = () => {
  const {
    connectWalletHandler,
    provider,
    errorMessage,
    account,
    balance,
    isConnected,
    disconnectWalletHandler,
  } = useWallet();

  console.log(provider, errorMessage, account, balance, isConnected);

  const [AccountFields, setAccountFields] = useState({
    nickName: "",
    bio: "",
    website: "",
    image: "",
    hashtag: [],
  });

  const AccountFormData = (e) => {
    setAccountFields({ ...AccountFields, [e.target.name]: e.target.value });
  };

  const SelectFormImg = (e) => {
    setAccountFields({ ...AccountFields, image: e.target.files[0] });
  };

  const CreateAccount = async (e) => {
    e.preventDefault();
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
                    {account === null ? (
                      <Button
                        active={1}
                        br="50px"
                        p="0.8rem 1.8rem"
                        size="1rem"
                        id="btn"
                        onClick={() => connectWalletHandler()}
                      >
                        Connect to MetaMask
                      </Button>
                    ) : (
                      <Button
                        active={1}
                        br="50px"
                        p="0.8rem 1.8rem"
                        size="1rem"
                        id="btn"
                        onClick={() => disconnectWalletHandler()}
                      >
                        Disconnect
                      </Button>
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
                        const { name, type, controlId, required, placeholder } =
                          List;
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
                      <div className="col-12 submit_form mt-5">
                        <Button
                          type="submit"
                          active={2}
                          br="50px"
                          p="0.8rem 1.8rem"
                          size="1rem"
                          id="btn"
                          disabled={true}
                          className="not-allowed"
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
