import { Libertee } from "libertee-sdk";
import { setSnackbar } from "Redux/actions/snackbar";

export const createAccountFunction = (AccountFields, signer, setLoading) => {
  return async (dispatch) => {
    try {
      setLoading(true);
      const {
        nickName,
        bio,
        website,
        image,
        hashtags,
        telegram,
        twitter,
        phone,
        email,
      } = AccountFields;

      if (!nickName || !bio || !website || !image || !hashtags) {
        setLoading(false);
        dispatch(setSnackbar(true, "info", "All fields required!"));
        return;
      }

      const libertee = new Libertee(signer);

      const nameExists = await libertee.checkNameExists(nickName);

      if (nameExists) {
        dispatch(setSnackbar(true, "success", "Name already exits!"));
        setLoading(false);
        return;
      }

      const pfpHash = await libertee.uploadPinata(
        "QmccEdPvxSpJ7L4yyNjapHy7idAE7xvuULX2zdprnanpCz",
        image.name,
        "3b710ac5b6fddca7c1b8",
        "226c102e9afe271af2ffa7c7f1fc955b72e116dddbb947db1fca3852fddcfe65"
      );

      const txHash = await libertee.createAccount(
        pfpHash,
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
      console.log(error);
      setLoading(false);
      dispatch(setSnackbar(true, "error", "Something went wrong!"));
    }
  };
};
