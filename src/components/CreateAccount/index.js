import React, { useState } from "react";
import AccountWrapper from "./Account.style";
import Button from "Layout/Button";
import { AccountFormFields } from "Layout/FormElement";
import Input from "Layout/Form/Input";

const CreateAccount = () => {
  const [Loading, setLoading] = useState(false);

  const [AccountFields, setAccountFields] = useState({
    nickName: "",
    bio: "",
    website: "",
    image: "",
    hashtag: [],
  });

  console.log(AccountFields);

  const AccountFormData = (e) => {
    setAccountFields({ ...AccountFields, [e.target.name]: e.target.value });
  };

  const SelectFormImg = (e) => {
    setAccountFields({ ...AccountFields, image: e.target.files[0] });
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
                    <Button
                      active={1}
                      br="50px"
                      p="0.8rem 1.8rem"
                      size="1rem"
                      id="btn"
                    >
                      Connect Wallet
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 d-flex justify-content-center">
            <div className="title text-center">
              <h1>Welcome to Libertee Protocol</h1>
              <span>Access Uncensorable Contents on the Internet</span>
            </div>
          </div>
          <div className="col-12 form_section mt-4">
            <div className="form_title text-center">
              <h4>Create Account</h4>
            </div>
            <div className="">
              <div className="row d-flex justify-content-center">
                <div className="col-6">
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
                                required={required}
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
                                  required={required}
                                  style={{ display: "none" }}
                                />
                                {AccountFields.image.name
                                  ? AccountFields.image.name
                                  : " Upload Image"}
                              </label>
                            )}
                          </div>
                        );
                      })}
                      <div className="col-12"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AccountWrapper>
  );
};

export default CreateAccount;
