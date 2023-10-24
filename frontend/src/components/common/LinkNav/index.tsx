import { useNavigate, Link } from "react-router-dom";
import {
  HvButton,
  HvTypography,
  HvButtonVariant,
  HvTypographyVariants,
} from "@hitachivantara/uikit-react-core";

interface LinkNavProps {
  label: string;
  target: string;
  isButton?: boolean;
  variant?: HvButtonVariant | HvTypographyVariants;
  className?: string;
}

export const LinkNav = ({
  label,
  target,
  isButton = false,
  variant,
  className,
}: LinkNavProps) => {
  const navigate = useNavigate();
  const isUrl = target?.includes("http");

  if (isButton) {
    return (
      <HvButton
        style={{ marginTop: 20 }}
        variant={variant as HvButtonVariant}
        onClick={() =>
          isUrl
            ? window.open(target, "_blank", "noopener,noreferrer")
            : navigate(target)
        }
        className={className}
      >
        {label}
      </HvButton>
    );
  }

  return isUrl ? (
    <HvTypography
      variant={variant as HvTypographyVariants}
      component="a"
      href={target}
      target="_blank"
      className={className}
    >
      {label}
    </HvTypography>
  ) : (
    <HvTypography
      variant={variant as HvTypographyVariants}
      className={className}
    >
      <Link to={target}>{label}</Link>
    </HvTypography>
  );
};
