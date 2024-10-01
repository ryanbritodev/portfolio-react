import GitHubCalendar from "react-github-calendar";

function Github() {
  const temaFiap = {
    light: ['#151b23', '#EAB2C0', '#E4336C', '#A92A52', '#7E213D'],
    dark: ['#151b23', '#A92A52', '#E4336C', '#EAB2C0', '#F6B2C5'],
  };

  return (
    <div>
      <GitHubCalendar theme={temaFiap} username="ryanbritodev" />
    </div>
  );
}

export default Github;
