const RestCard = (props) => {
  // check how your props object looks like
  console.log(props);

  // use props as below
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.restName}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">
          {props.restPhoneNo}
        </h6>
        <p className="card-text">{props.restAddress}</p>
      </div>
    </div>
  );
};

export default RestCard;
