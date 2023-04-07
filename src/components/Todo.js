export default (props) => {
  return (
    <div className='todo'>
      <h2>{props.name}</h2>
      <p>{props.content}</p>
    </div>
  );
};
