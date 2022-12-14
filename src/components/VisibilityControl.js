function VisibilityControl({ setShowCompleted, cleanTask, isCheked }) {
  const handleDelete = () => {
    if (window.confirm("Are ypu sure you want to delete it?")) {
      cleanTask();
    }
  };

  return (
    <div className="d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary">
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          checked={isCheked}
          onChange={(e) => setShowCompleted(e.target.checked)}
        />{" "}
        <label>Show task Done</label>
      </div>
      <button onClick={handleDelete} className="btn btn-danger btn-sm">
        Clear
      </button>
    </div>
  );
}

export default VisibilityControl;
