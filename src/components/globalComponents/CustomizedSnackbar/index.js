import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSnackbar } from "notistack";
import { removeSnackbar } from "Redux/actions/snackbar";
import SnackbarWrapper from "./Snackbar.style";

const CustomizedSnackbar = ({ children }) => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const snackbarOpen = useSelector(
    (state) => state.SnackbarReducer.snackbarOpen
  );
  const snackbarType = useSelector(
    (state) => state.SnackbarReducer.snackbarType
  );
  const snackbarMessage = useSelector(
    (state) => state.SnackbarReducer.snackbarMessage
  );

  const Message = () => {
    return (
      <>
        <SnackbarWrapper>
          <div className="snackbar">
            <p className=" pt-1">{snackbarMessage}</p>
          </div>
        </SnackbarWrapper>
      </>
    );
  };

  useEffect(() => {
    if (snackbarOpen) {
      enqueueSnackbar(<Message />, {
        variant: snackbarType,
        persist: false,
        autoHideDuration: 7000,
        preventDuplicate: false,
      });
    }

    return () => {
      dispatch(removeSnackbar(false, snackbarType, snackbarMessage));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [snackbarOpen]);

  return <>{children}</>;
};

export default CustomizedSnackbar;
