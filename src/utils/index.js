import { Libertee } from "libertee-sdk";
import { setSnackbar } from "Redux/actions/snackbar";
import axios from "axios";

export const getLibertee = (signer) => {
  return new Libertee(signer);
};

export const isUserExits = async (signer, nickName) => {
  try {
    const libertee = new Libertee(signer);
    const nameExists = await libertee.checkNameExists(nickName);
    return nameExists;
  } catch (error) {}
};

export const createAccountFunction = (AccountFields, signer, setLoading) => {
  return async (dispatch) => {
    try {
      setLoading(true);
      const {
        nickName,
        bio,
        website,
        file,
        hashtags,
        telegram,
        twitter,
        phone,
        email,
      } = AccountFields;

      console.log(file);

      if (!nickName || !bio || !website || !file || hashtags.length === 0) {
        setLoading(false);
        dispatch(setSnackbar(true, "info", "All fields required!"));
        return;
      }

      if (
        file.type === "image/jpg" ||
        file.type === "image/png" ||
        file.type === "image/gif"
      ) {
        const libertee = getLibertee(signer);
        const isExits = await isUserExits(signer, nickName);

        if (isExits) {
          dispatch(setSnackbar(true, "info", "Name already exits!"));
          setLoading(false);
          return;
        }

        const formData = new FormData();
        formData.append("file", file);

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

        const ImgHash = `${resFile.data.IpfsHash}`;

        const txHash = await libertee.createAccount(
          ImgHash,
          nickName,
          bio,
          telegram,
          twitter,
          phone,
          email,
          website,
          hashtags
        );

        if (txHash) {
          setLoading(false);
          dispatch(
            setSnackbar(true, "success", "Successfully created account")
          );
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

export const readAccount = async (address, signer) => {
  const libertee = getLibertee(signer);
  const profile = await libertee.getProfileMap(address);
  return profile;
};
