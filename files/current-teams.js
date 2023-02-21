(function () {
  function TeamComponent({ id, name, owners }) {
    const el = document.createElement('li');
    el.classList.add('team');
    el.id = id;
    el.innerHTML = `<div class="team-name">${name}</div>
            <div class="team-owners" data-owners="${
              owners.length
            }">${owners.join(', ')}</div>`;
    return el;
  }

  function sortTeams(a, b) {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  }

  function TeamsComponent(teams) {
    const el = document.createElement('div');
    el.id = 'current-teams';
    el.innerHTML = `<h2>Current Developer Teams</h2>
            <p>There are currently ${teams.length} team${
      teams.length !== 1 ? 's' : ''
    } configured in the API Directory:</p>
            <ul class="teams-list">
            </ul>`;
    const teamsList = el.querySelector('.teams-list');
    teams.forEach((team) => teamsList.appendChild(TeamComponent(team)));
    return el;
  }

  function getTeams() {
    url = 'https://gw.api.it.umich.edu/teams/v1/teams?pageSize=500';
    fetch(url)
      .then((r) => r.json())
      .then((data) => {
        const teams = data.documents
          .map((item) => {
            const owners = item.fields.team_owners.arrayValue.values ?? [];
            return {
              id: item.fields.team_id.stringValue,
              name: item.fields.team_name.stringValue,
              owners: owners.map((x) => x.stringValue.split('@')[0]),
            };
          })
          .sort(sortTeams);
        const component = TeamsComponent(teams);
        document
          .querySelector('article .field .field-item')
          .insertAdjacentHTML('beforeend', component.innerHTML);
      });
  }

  function addCSS(css) {
    document.head.appendChild(document.createElement('style')).innerHTML = css;
  }

  const teamsCss = `
      .teams-list {
          list-style: none;
          margin: 0
          padding: 0;
          padding-inline: 0;
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
          font-size: .9rem;
          line-height: 1.2;
          padding: 1rem;
          margin-top: 1rem;
          border-top: 1px solid #ccc;
      }
      .teams-list .team {
          margin: 0;
      }
      .teams-list .team-name {
          font-weight: 600;
          margin-bottom: 0.125em;
      }
      .teams-list .team-owners {
          font-size: .9em;
          color: #666;
      }
      .teams-list .team-owners::before {
          content: "Owners: ";
      }
      .teams-list .team-owners[data-owners="1"]::before {
          content: "Owner: ";
      }
      @media (min-width: 576px) {
        .teams-list {
          grid-template-columns: repeat(2, 1fr);
        }
      }
      @media (min-width: 992px) {
        .teams-list {
          grid-template-columns: repeat(3, 1fr);
        }
      }
    `;

  addCSS(teamsCss);
  getTeams();
})();
