type ErrorProps = {
  message: string;
};

export default function ErrorMessage(props: ErrorProps) {
  return (
    <div className="list-group">
      <div className="list-group-item list-group-item-danger">
        {props.message}
      </div>
    </div>
  );
}
