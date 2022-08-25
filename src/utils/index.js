import { Libertee } from "libertee-sdk";
import { ethers } from "ethers";
import { Readable } from "stream";

function base64ToBufferAsync(base64) {
  fetch(base64)
    .then((res) => res.arrayBuffer())
    .then((buffer) => {
      var myBuffer = new Uint8Array(buffer);
      var stream = new Readable();
      stream.push(myBuffer);
      stream.push(null);
      console.log(stream);
    })
    .catch((err) => {
      console.log(err);
    });
}

export const createAccountFunction = async (
  AccountFields,
  publickey,
  signer
) => {
  try {
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

    // let fileInfo;
    let baseURL = "";

    let reader = new FileReader();
    reader.readAsDataURL(image);

    reader.onload = () => {
      baseURL = reader.result;
      base64ToBufferAsync(baseURL, reader);
    };

    // const stream = fs.createReadStream(base64);
    // console.log(stream);

    // const libertee = new Libertee(signer);

    // const nameExists = await libertee.checkNameExists(nickName);

    // if (nameExists) {
    //   console.log("Name already exits!");
    //   return false;
    // }

    // upload to IPFS
    // const pfpHash = await libertee.uploadPinata(
    //   image,
    //   image.name,
    //   "3b710ac5b6fddca7c1b8",
    //   "226c102e9afe271af2ffa7c7f1fc955b72e116dddbb947db1fca3852fddcfe65"
    // );

    // console.log(pfpHash);

    // const txHash = await libertee.createAccount(
    //   pfpHash,
    //   nickName,
    //   bio,
    //   telegram,
    //   twitter,
    //   phone,
    //   email,
    //   website,
    //   hashtags
    // );
    // console.log(txHash);

    // return txHash;
  } catch (error) {
    console.log(error);
  }
};
