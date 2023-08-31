export function StudentShow(props) {
  console.log(props);
  return (
    <div className="w-screen flex items-center justify-center">
      <div className="card h-1/2 w-1/2 container px-5 py-2">
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
          <span className="font-bold">Photo:</span> {props.student.photo}
        </p>
      </div>
      <form>
        <div>
          First Name: <input defaultValue={props.student.first_name} name="first_name" type="text" />
        </div>
        <div>
          Last Name: <input defaultValue={props.student.last_name} name="last_name" type="text" />
        </div>
        <div>
          Email: <input defaultValue={props.student.email} name="email" type="text" />
        </div>
        <div>
          Phone Number: <input defaultValue={props.student.phone_number} name="phone_number" type="integer" />
        </div>
        <div>
          Short Bio: <input defaultValue={props.student.short_bio} name="short_bio" type="text" />
        </div>
        <div>
          Linkedin: <input defaultValue={props.student.linkedin_url} name="linkedin_url" type="text" />
        </div>
        <div>
          Twitter: <input defaultValue={props.student.twitter_handle} name="twitter_handle" type="text" />
        </div>
        <div>
          Personal Website: <input defaultValue={props.student.personal_url} name="personal_url" type="text" />
        </div>
        <div>
          Github: <input defaultValue={props.student.github_url} name="github_url" type="text" />
        </div>
        <div>
          First Name: <input defaultValue={props.student.photo} name="photo" type="text" />
        </div>
      </form>
    </div>
  );
}
