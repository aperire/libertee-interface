import { Hooke } from "hooke-sdk";
import { setSnackbar } from "Redux/actions/snackbar";
import axios from "axios";

export const getImgHash = async (formData) => {
  const resFile = await axios({
    method: "post",
    url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
    data: formData,
    headers: {
      pinata_api_key: "3b710ac5b6fddca7c1b8",
      pinata_secret_api_key:
        "226c102e9afe271af2ffa7c7f1fc955b72e116dddbb947db1fca3852fddcfe65",
      "Content-Type": "multipart/form-data",
    },
  });

  return resFile.data.IpfsHash;
};

export const getHooke = (signer) => {
  return new Hooke(signer);
};

export const isUserExits = async (signer, nickName) => {
  try {
    const hooke = new Hooke(signer);
    const nameExists = await hooke.checkNameExists(nickName);
    return nameExists;
  } catch (error) {}
};

export const createAccountFunction = (
  AccountFields,
  signer,
  setLoading,
  readAccount,
  publickey,
  navigate,
  formData,
  setAccountFields
) => {
  return async (dispatch) => {
    try {
      setLoading(true);
      const { nickName, bio, image, hashtags } = AccountFields;

      if (!nickName || !bio || !image || hashtags.length === 0) {
        setLoading(false);
        dispatch(setSnackbar(true, "info", "All fields required!"));
        return;
      }

      if (
        image.type === "image/jpg" ||
        image.type === "image/png" ||
        image.type === "image/gif"
      ) {
        const hooke = getHooke(signer);
        const isExits = await isUserExits(signer, nickName);

        if (isExits) {
          dispatch(setSnackbar(true, "info", "Name already exits!"));
          setLoading(false);
          return;
        }

        const IpfsHash = await getImgHash(formData);

        const txHash = await hooke.createAccount(
          IpfsHash,
          nickName,
          bio,
          hashtags
        );

        if (txHash) {
          setAccountFields({
            nickName: "",
            bio: "",
            image: "",
            hashtags: [],
          });
          setLoading(false);
          dispatch(
            setSnackbar(true, "success", "Successfully created account")
          );
          navigate("/");
          await readAccount(publickey, signer);
        }
      } else {
        setLoading(false);
        dispatch(
          setSnackbar(true, "info", "Only png, jpg and gif files are allowed!")
        );
      }
    } catch (error) {
      setLoading(false);
      dispatch(setSnackbar(true, "error", error.code));
    }
  };
};

export const createPostFunction = (
  Fields,
  setLoading,
  signer,
  setFields,
  setIsSelected,
  setSelectFile,
  formData,
  readFeedPosts
) => {
  return async (dispatch) => {
    try {
      setLoading(true);

      const { image, message, hashtags } = Fields;

      if (!message || !image || hashtags.length === 0) {
        setLoading(false);
        dispatch(setSnackbar(true, "info", "All fields required!"));
        return;
      }

      const hooke = getHooke(signer);

      const IpfsHash = await getImgHash(formData);

      const txHash = await hooke.postMedia(IpfsHash, message, hashtags);

      if (txHash) {
        setLoading(false);
        dispatch(setSnackbar(true, "success", "Successfully posted"));
        setIsSelected(false);
        setSelectFile(null);
        setFields({
          file: "",
          message: "",
          hashtags: [],
        });
        await readFeedPosts(0, 4, signer);
      }
    } catch (error) {
      setLoading(false);
      dispatch(setSnackbar(true, "error", error.code));
    }
  };
};

export const getAccount = async (value, signer, type) => {
  var profile;
  const hooke = getHooke(signer);
  if (type === "address") {
    profile = await hooke.getProfileMap(value);
  } else if (type === "username") {
    const address = await hooke.getProfileNameMap(value).owner;
    profile = await hooke.getProfileMap(address);
  }
  return profile;
};
