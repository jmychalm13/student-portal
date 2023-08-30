export function StudentShow(props) {
  console.log(props);
  return (
    <div>
      <h1>Photo information</h1>
      <p>Name: {props.student.first_name}</p>
    </div>
  );
}
