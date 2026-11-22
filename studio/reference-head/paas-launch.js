const deploymentArt = `
   +------------+                               .
   | >_         |                          .    :    .
   +------------+                       .       +       .
        :                                   .       .
        +................+                  .:+x+:.           .
                         :             .:+xX#%@@@%#Xx+:.
                         +------> .:+xX#%@@@@@@@@@@@@@%#Xx+:.
                                 +xX#%@@@@@@@#@@@@@@@%#Xx+:
                                 |'+xX#%@@@@@@@@@@@%#Xx+:'|
                                 |   ':+xX#%@@@%#Xx+:'   :|
                                 |       ':+xxx+:'    .:+x|
                                 +.         :      .:+xX#x+
                                   '+:.     :   .:+xX#Xx+'
                                      '+:.  :.:+xX#Xx+'
                                         '+.+X#Xx+'
                                            '+.'
                                      .             .
`.trimEnd().slice(1);

const steps = ['Репозиторий', 'Сборка', 'Запуск'];
const logs = [
  ['00:01', 'Репозиторий получен'],
  ['00:02', 'Зависимости установлены'],
  ['00:03', 'Приложение запущено'],
];

export function paasLaunchMarkup(live = false) {
  return `<figure class="paas-launch" data-paas-launch data-launch-variant="${live ? 'live' : 'still'}" data-launch-state="ready">
    <figcaption class="paas-launch__caption">
      <span>Демо запуска</span>
      ${live ? '<button class="paas-launch__replay" type="button">Повторить запуск</button>' : ''}
    </figcaption>
    <div class="paas-launch__graphic">
      <pre class="paas-launch__art" aria-hidden="true">${deploymentArt.replaceAll('>', '&gt;')}</pre>
      ${live ? '<canvas class="paas-launch__canvas" aria-hidden="true" hidden></canvas>' : ''}
      <ol class="paas-launch__route">
        ${steps.map(step => `<li data-launch-step-state="done">${step}</li>`).join('')}
      </ol>
    </div>
    <div class="paas-launch__output">
      <div class="paas-launch__url">
        <span class="paas-launch__label">URL</span>
        <code>https://app.wwn.example</code>
      </div>
      <div class="paas-launch__logs">
        <span class="paas-launch__label">Логи</span>
        <ul>
          ${logs.map(([time, message]) => `<li data-launch-log-state="shown"><code><span aria-hidden="true">${time}</span> ${message}</code></li>`).join('')}
        </ul>
      </div>
    </div>
  </figure>`;
}

export function playPaasLaunch(scene, reducedMotion) {
  if (!scene || reducedMotion) return;

  const route = scene.querySelectorAll('[data-launch-step-state]');
  const logLines = scene.querySelectorAll('[data-launch-log-state]');
  const stageDuration = scene.dataset.launchVariant === 'live' ? 600 : 380;
  let timer;

  function showStage(stage) {
    if (!scene.isConnected || scene.closest('[hidden]')) return;

    scene.dataset.launchState = stage === route.length ? 'ready' : 'running';
    route.forEach((step, index) => {
      step.dataset.launchStepState = index < stage ? 'done' : index === stage ? 'active' : 'queued';
    });
    logLines.forEach((line, index) => {
      line.dataset.launchLogState = index < stage ? 'shown' : 'pending';
    });

    if (stage < route.length) timer = setTimeout(() => showStage(stage + 1), stageDuration);
  }

  showStage(0);
  return () => clearTimeout(timer);
}
