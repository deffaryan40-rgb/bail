// by deffa
const c = {
  reset:    '\x1b[0m',
  bold:     '\x1b[1m',
  dim:      '\x1b[2m',
  red:      '\x1b[38;5;203m',
  redBg:    '\x1b[48;5;52m',
  yellow:   '\x1b[38;5;220m',
  green:    '\x1b[38;5;120m',
  cyan:     '\x1b[38;5;87m',
  white:    '\x1b[97m',
  gray:     '\x1b[38;5;245m',
};
const paint = (color, str) => `${color}${str}${c.reset}`;

const major = parseInt(process.versions.node.split('.')[0], 10);

if (major < 18) {
  const line  = paint(c.red, '━'.repeat(52));
  const tag   = `${paint(c.redBg + c.bold, ' INCOMPATIBLE NODE.JS ')}`;
  const curr  = paint(c.yellow + c.bold, `v${process.versions.node}`);
  const req   = paint(c.green  + c.bold, 'v18+');
  const arrow = paint(c.cyan,  '➜');
  const cmd   = paint(c.cyan + c.bold, 'nvm install 20 && nvm use 20');

  process.stderr.write([
    '',
    line,
    `  ${tag}`,
    line,
    '',
    `  ${paint(c.white + c.bold, '✖ Node.js versi lu:')}  ${curr}`,
    `  ${paint(c.white + c.bold, '✔ Versi yang dibutuhkan:')} ${req}`,
    '',
    `  ${arrow} Upgrade dulu bro:`,
    `     ${cmd}`,
    '',
    `  ${paint(c.gray, 'atau download di → https://nodejs.org')}`,
    '',
    line,
    '',
  ].join('\n'));

  process.exit(1);
}
