import Cookies from "js-cookie";
import {
  HvDialog,
  HvDialogTitle,
  HvDialogContent,
  HvDialogActions,
  HvButton,
  HvCheckBox,
  HvTypography,
} from "@hitachivantara/uikit-react-core";

import { useRequestDialog } from "lib/api/requestDialog";
import { formatText } from "lib/utils";
import classes from "./styles";

export const RequestDialog = ({ open, onClose, onRequest, onAlreadyHave }) => {
  const { data: requestDialog } = useRequestDialog();

  if (!requestDialog) return null;

  const { title, content, button_1_label, button_2_label, dont_show } =
    requestDialog.data.attributes;

  const handleClick = () => {
    Cookies.set("requestAccess", "false", { expires: 365 });
  };

  return (
    <HvDialog buttonTitle="Close" maxWidth="sm" open={open} onClose={onClose}>
      <HvDialogTitle variant="info">{title}</HvDialogTitle>
      <HvDialogContent indentContent>
        <HvTypography
          style={{ whiteSpace: "pre-line" }}
        >
          {formatText(content)}
        </HvTypography>
        <HvCheckBox classes={{ root: classes.root }} label={dont_show} onClick={handleClick} />
      </HvDialogContent>
      <HvDialogActions>
        <HvButton onClick={onRequest}>{button_1_label}</HvButton>
        <HvButton autoFocus variant="secondarySubtle" onClick={onAlreadyHave}>
          {button_2_label}
        </HvButton>
      </HvDialogActions>
    </HvDialog>
  );
};
