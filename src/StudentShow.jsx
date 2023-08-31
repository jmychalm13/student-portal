export function StudentShow(props) {
  console.log(props);
  return (
    <div className="container px-5 py-2">
      <h1 className="text-center font-bold">Student information</h1>
      <p>
        <span className="font-bold">First Name:</span> {props.student.first_name}
      </p>
      <p>
        <span className="font-bold">Last Name:</span> {props.student.last_name}
      </p>
      <p>
        <span className="font-bold">Email:</span> {props.student.email}
      </p>
      <p>
        <span className="font-bold">Phone Number:</span> {props.student.phone_number}
      </p>
      <p>
        <span className="font-bold">Short Bio:</span> {props.student.short_bio}
      </p>
      <p>
        <span className="font-bold">LinkedIn:</span> {props.student.linkedin_url}
      </p>
      <p>
        <span className="font-bold">Twitter:</span> {props.student.twitter_handle}
      </p>
      <p>
        <span className="font-bold">Personal Website:</span> {props.student.personal_url}
      </p>
      <p>
        <span className="font-bold">Resume:</span> {props.student.resume_url}
      </p>
      <p>
        <span className="font-bold">Github:</span> {props.student.github_url}
      </p>
      <p>
        <span className="font-bold">Github:</span> {props.student.photo}
      </p>
    </div>
  );
}
