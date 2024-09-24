import GitHubCalendar from "react-github-calendar";

function Github() {
  return (
    <div>
      <GitHubCalendar
        username="ryanbritodev"
        blockSize={15}
        blockMargin={5}
        color="#E4336C"
        fontSize={10}
      />
    </div>
  );
}

export default Github;
