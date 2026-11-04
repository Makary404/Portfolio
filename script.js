// ----- Data: edit these lists to change the page. No need to touch the HTML. -----
const skills = ['HTML', 'CSS', 'JavaScript', 'Responsive design', 'Git', 'GitHub', 'Linear', 'draw.io'];

const projects = [
  {
    name: 'Video Feed UI',
    text: 'A TikTok-style feed screen. Next and previous by buttons, keys, wheel or swipe, with a like button.',
    stack: 'HTML, CSS, JavaScript',
    link: 'https://github.com/Makary404/video-feed-ui'
  },
  {
    name: 'Task Manager',
    text: 'A to-do app with add, complete, delete and filters. Tasks are saved in the browser.',
    stack: 'HTML, CSS, JavaScript',
    link: 'https://github.com/Makary404/task-manager'
  },
  {
    name: 'TikTok Feed: Specification and Architecture',
    text: 'A university design project: requirements, architecture diagrams and test plan for a video feed. Design only, no code.',
    stack: 'Linear, draw.io',
    link: ''   // no public link; the card shows no button
  }
];

// ----- Build the skills list -----
const skillsList = document.getElementById('skills-list');
skills.forEach(function (s) {
  const li = document.createElement('li');
  li.textContent = s;
  skillsList.appendChild(li);
});

// ----- Build the project cards -----
const projectsList = document.getElementById('projects-list');
projects.forEach(function (p) {
  const card = document.createElement('article');
  card.className = 'card';

  const title = document.createElement('h4');
  title.textContent = p.name;
  const text = document.createElement('p');
  text.textContent = p.text;
  const stack = document.createElement('p');
  stack.className = 'stack';
  stack.textContent = p.stack;
  card.append(title, text, stack);

  if (p.link) {
    const a = document.createElement('a');
    a.href = p.link;
    a.target = '_blank';
    a.rel = 'noopener';
    a.textContent = 'View on GitHub →';
    card.appendChild(a);
  }
  projectsList.appendChild(card);
});

// ----- Dark / light theme (remembered in the browser) -----
const toggle = document.getElementById('theme-toggle');

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  toggle.textContent = theme === 'dark' ? '☀️' : '🌙';
}

let saved = 'light';
try { saved = localStorage.getItem('theme') || 'light'; } catch (e) {}
applyTheme(saved);

toggle.addEventListener('click', function () {
  const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  try { localStorage.setItem('theme', next); } catch (e) {}
});

// ----- Footer year -----
document.getElementById('year').textContent = new Date().getFullYear();
