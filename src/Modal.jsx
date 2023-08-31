export function Modal(props) {
  return (
    <div className="w-screen flex items-center justify-center">
      <section className="edit-container border mt-5 rounded-xl border-black card h-1/2 w-1/2 container px-5 py-2">
        <form>
          <div>
            First Name:{" "}
            <input
              defaultValue={props.student.first_name}
              name="first_name"
              type="text"
              className="rounded border border-black"
            />
          </div>
          <div>
            Last Name:{" "}
            <input
              defaultValue={props.student.last_name}
              name="last_name"
              type="text"
              className="rounded border border-black"
            />
          </div>
          <div>
            Email:{" "}
            <input
              defaultValue={props.student.email}
              name="email"
              type="text"
              className="rounded border border-black"
            />
          </div>
          <div>
            Phone Number:{" "}
            <input
              defaultValue={props.student.phone_number}
              name="phone_number"
              type="integer"
              className="rounded border border-black"
            />
          </div>
          <div>
            Short Bio:{" "}
            <input
              defaultValue={props.student.short_bio}
              name="short_bio"
              type="text"
              className="rounded border border-black"
            />
          </div>
          <div>
            Linkedin:{" "}
            <input
              defaultValue={props.student.linkedin_url}
              name="linkedin_url"
              type="text"
              className="rounded border border-black"
            />
          </div>
          <div>
            Twitter:{" "}
            <input
              defaultValue={props.student.twitter_handle}
              name="twitter_handle"
              type="text"
              className="rounded border border-black"
            />
          </div>
          <div>
            Personal Website:{" "}
            <input
              defaultValue={props.student.personal_url}
              name="personal_url"
              type="text"
              className="rounded border border-black"
            />
          </div>
          <div>
            Github:{" "}
            <input
              defaultValue={props.student.github_url}
              name="github_url"
              type="text"
              className="rounded border border-black"
            />
          </div>
          <div>
            Photo:{" "}
            <input
              defaultValue={props.student.photo}
              name="photo"
              type="text"
              className="rounded border border-black"
            />
          </div>
          <button type="submit" className="btn border mt-2 rounded border border-black px-3 py-px">
            Update
          </button>
        </form>
      </section>
    </div>
  );
}
