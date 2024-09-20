import GitHubCalendar from "react-github-calendar";

function Github() {
  return (
    <div className="flex flex-col items-center text-white justify-center py-10">
      <h1 className="project-heading font-krona text-white text-3xl mb-6">
        Minhas <strong className="text-fiap">CONTRIBUIÇÕES</strong>
      </h1>
      <GitHubCalendar
        username="ryanbritodev"
        blockSize={15}
        blockMargin={5}
        color="#E4336C"
        fontSize={16}
      />
    </div>
  );
}

export default Github;
