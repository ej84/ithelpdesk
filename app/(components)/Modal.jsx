"use client";
import * as React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { styled, Box } from "@mui/system";
import { Modal as BaseModal } from "@mui/base/Modal";
import TicketForm from "./TicketForm";

export default function ModalUI() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // eslint-disable-next-line react/display-name
  const Backdrop = React.forwardRef((props, ref) => {
    const { open, className, ...other } = props;
    return (
      <div
        className={clsx({ "MuiBackdrop-open": open }, className)}
        ref={ref}
        {...other}
      />
    );
  });

  Backdrop.propTypes = {
    className: PropTypes.string.isRequired,
    open: PropTypes.bool,
  };

  const blue = {
    200: "#99CCFF",
    300: "#66B2FF",
    400: "#3399FF",
    500: "#007FFF",
    600: "#0072E5",
    700: "#0066CC",
  };

  const grey = {
    50: "#F3F6F9",
    100: "#E5EAF2",
    200: "#DAE2ED",
    300: "#C7D0DD",
    400: "#B0B8C4",
    500: "#9DA8B7",
    600: "#6B7A90",
    700: "#434D5B",
    800: "#303740",
    900: "#1C2025",
  };

  const Modal = styled(BaseModal)`
    position: fixed;
    z-index: 1300;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const StyledBackdrop = styled(Backdrop)`
    z-index: -1;
    position: fixed;
    inset: 0;
    background-color: rgb(0 0 0 / 0.5);
    -webkit-tap-highlight-color: transparent;
  `;

  const style = {
    width: 800,
    height: 850,
  };

  const ModalContent = styled(Box)(
    ({ theme }) => `
    display: flex;
    flex-direction: column;
    gap: 8px;
    overflow: hidden;
    background-color: rgb(43 52 65 / 1);
    border-radius: 8px;
    border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    box-shadow: 0px 4px 12px rgba(0,0,0, 0.20);
    padding: 1rem;
    color: #FFF;
    font-family: IBM Plex Sans, sans-serif;
    font-weight: 500;
    text-align: start;
    position: relative;
  
  
    & .modal-title {
      margin: 0;
      line-height: 1.5rem;
      margin-right: 0.5rem;
    }
  
    & .modal-description {
      margin: 0;
      line-height: 1.5rem;
      font-weight: 400;
      color: ${theme.palette.mode === "dark" ? grey[400] : grey[800]};
    }
    `
  );

  const TriggerButton = styled("button")(
    ({ theme }) => `
    font-family: IBM Plex Sans, sans-serif;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.5;
    padding: 8px 16px;
    border-radius: 8px;
    color: #FFF;
    transition: all 150ms ease;
    cursor: pointer;
    border: 1px solid #FFF;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    &:hover {
      background: #FFF;
      color: rgb(24 34 47 / 1);
    }
  
    &:active {
      background: ${theme.palette.mode === "dark" ? grey[700] : grey[100]};
    }
  
    &:focus-visible {
      box-shadow: 0 0 0 4px ${
        theme.palette.mode === "dark" ? blue[300] : blue[200]
      };
      outline: none;
    }
  `
  );

  return (
    <div className="flex justify-center">
      <TriggerButton type="button" onClick={handleOpen}>
        Create New Ticket
      </TriggerButton>
      <Modal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
        slots={{ backdrop: StyledBackdrop }}
      >
        <ModalContent sx={style}>
          <TicketForm ticket="new" />

          {/*<p id="unstyled-modal-description" className="modal-description">
            Aliquid amet deserunt earum!
            </p>*/}
        </ModalContent>
      </Modal>
    </div>
  );
}
