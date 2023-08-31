export function Modal(props) {
  return (
    <div className="modal-background">
      <section className="modal-main">
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
      </section>
    </div>
  );
}
