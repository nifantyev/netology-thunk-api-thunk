type SpinnerProps = {
  small?: boolean;
};

export default function Spinner(props: SpinnerProps) {
  return (
    <div className="text-center">
      <div
        className={`spinner-border${props.small ? ' spinner-border-sm' : ''}`}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
