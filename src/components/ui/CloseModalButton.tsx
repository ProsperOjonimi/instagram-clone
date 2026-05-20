function CloseModalButton({ handleClose }: { handleClose: () => void }) {
  return (
    <button className="absolute top-5 right-10" onClick={() => handleClose()}>
      <svg
        aria-label="Close"
        fill="currentColor"
        height="18"
        role="img"
        viewBox="0 0 24 24"
        width="18"
      >
        <title>Close</title>
        <polyline
          fill="none"
          points="20.643 3.357 12 12 3.353 20.647"
          stroke="#FFFFFF"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="3"
        ></polyline>
        <line
          fill="none"
          stroke="#FFFFFF"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="3"
          x1="20.649"
          x2="3.354"
          y1="20.649"
          y2="3.354"
        ></line>
      </svg>
    </button>
  );
}

export default CloseModalButton;
