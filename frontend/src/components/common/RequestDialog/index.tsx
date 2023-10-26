import Cookies from "js-cookie";
import {
  HvDialog,
  HvDialogTitle,
  HvDialogContent,
  HvDialogActions,
  HvButton,
  HvCheckBox,
} from "@hitachivantara/uikit-react-core";

export const RequestDialog = ({ open, onClose, onRequest, onAlreadyHave }) => {
  const handleClick = () => {
    Cookies.set("requestAccess", "false", { expires: 365 });
  };

  return (
    <HvDialog buttonTitle="Close" maxWidth="sm" open={open} onClose={onClose}>
      <HvDialogTitle variant="info">
        Do you need to request access?
      </HvDialogTitle>
      <HvDialogContent indentContent>
        We'd like to ensure you have the necessary access to the repositories.
        If you don't have access yet, please click the button below to request
        access.
        <br />
        <br />
        Additionally, if you have already requested access and would prefer not
        to receive this message in the future, you can select the checkbox
        below.
        <br />
        <br />
        <HvCheckBox label="Don’t show this again." onClick={handleClick} />
      </HvDialogContent>
      <HvDialogActions>
        <HvButton onClick={onRequest}>Request Access</HvButton>
        <HvButton autoFocus variant="secondarySubtle" onClick={onAlreadyHave}>
          I already have access
        </HvButton>
      </HvDialogActions>
    </HvDialog>
  );
};
