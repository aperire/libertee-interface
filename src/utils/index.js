import { Libertee } from "libertee-sdk";
import { setSnackbar } from "Redux/actions/snackbar";
import axios from "axios";

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

      // if (!nickName || !bio || !website || !file || !hashtags) {
      //   setLoading(false);
      //   dispatch(setSnackbar(true, "info", "All fields required!"));
      //   return;
      // }

      const libertee = new Libertee(signer);

      // const nameExists = await libertee.checkNameExists(nickName);

      // if (nameExists) {
      //   dispatch(setSnackbar(true, "info", "Name already exits!"));
      //   setLoading(false);
      //   return;
      // }

      const formData = new FormData();
      formData.append("file", file);

      const resFile = await axios({
        method: "post",
        url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
        data: formData,
        headers: {
          pinata_api_key: `${process.env.REACT_APP_PINATA_API_KEY}`,
          pinata_secret_api_key: `${process.env.REACT_APP_PINATA_API_SECRET}`,
          "Content-Type": "multipart/form-data",
        },
      });

      const ImgHash = `${resFile.data.IpfsHash}`;
      console.log(ImgHash);

      // const pfpHash = await libertee.uploadPinata(
      //   ImgHash,
      //   file.name,
      //   process.env.REACT_APP_PINATA_API_KEY,
      //   process.env.REACT_APP_PINATA_API_SECRET
      // );

      // console.log(pfpHash);

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
        dispatch(setSnackbar(true, "success", "Successfully created account"));
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      dispatch(setSnackbar(true, "error", error.message));
      // dispatch(setSnackbar(true, "error", "Something went wrong"));
    }
  };
};
