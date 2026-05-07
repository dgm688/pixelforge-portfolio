function AddProjectForm() {
  return (
    <div>
      <h2>Add Project</h2>

      <form>
        <div>
          <label>Title</label>
          <br />
          <input type="text" placeholder="Project title" />
        </div>

        <br />

        <div>
          <label>Description</label>
          <br />
          <textarea placeholder="Project description"></textarea>
        </div>

        <br />

        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddProjectForm;