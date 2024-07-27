
// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (!license || license === 'None') return '';
  const badges = {
    'MIT': '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)',
    'Apache 2.0': '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)',
    'GPL 3.0': '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)',
    'BSD 3-Clause': '![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)'
  };
  return badges[license];
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license || license === 'None') return '';
  const links = {
    'MIT': 'https://opensource.org/licenses/MIT',
    'Apache 2.0': 'https://opensource.org/licenses/Apache-2.0',
    'GPL 3.0': 'https://www.gnu.org/licenses/gpl-3.0',
    'BSD 3-Clause': 'https://opensource.org/licenses/BSD-3-Clause'
  };
  return links[license];
}

// Function that returns the license section of README
function renderLicenseSection(license) {
  if (!license || license === 'None') return '';
  return `## License

This project is licensed under the ${license} license. For more information, please visit [this link](${renderLicenseLink(license)}).
`;
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

If you have any questions, please feel free to reach out via [GitHub](https://github.com/${data.github}) or email me at ${data.email}.
`;
}

module.exports = generateMarkdown;
