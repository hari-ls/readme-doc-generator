// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    const word = license.split(" ").join("%20");
    return `https://img.shields.io/badge/license-${word}-green`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink;
  switch (license) {
    case "GNU AGPLv3":
      licenseLink = `https://choosealicense.com/licenses/agpl-3.0/`;
      break;
    case "GNU GPLv3":
      licenseLink = `https://choosealicense.com/licenses/gpl-3.0/`;
      break;
    case "GNU LGPLv3":
      licenseLink = `https://choosealicense.com/licenses/lgpl-3.0/`;
      break;
    case "Mozilla Public License 2.0":
      licenseLink = `https://choosealicense.com/licenses/mpl-2.0/`;
      break;
    case "Apache License 2.0":
      licenseLink = `https://choosealicense.com/licenses/apache-2.0/`;
      break;
    case "MIT License":
      licenseLink = `https://choosealicense.com/licenses/mit/`;
      break;
    case "Boost Software License 1.0":
      licenseLink = `https://choosealicense.com/licenses/bsl-1.0/`;
      break;
    case "The Unlicense":
      licenseLink = `https://choosealicense.com/licenses/unlicense/`;
      break;
    default:
      licenseLink = "";
  }
  return license ? `For license details: [click here](${licenseLink})` : ``;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseInfo;
  switch (license) {
    case "GNU AGPLv3":
      licenseInfo = `**${license}**\n\nPermissions of this strongest copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. When a modified version is used to provide a service over a network, the complete source code of the modified version must be made available.`;
      break;
    case "GNU GPLv3":
      licenseInfo = `**${license}**\n\nPermissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.`;
      break;
    case "GNU LGPLv3":
      licenseInfo = `**${license}**\n\nPermissions of this copyleft license are conditioned on making available complete source code of licensed works and modifications under the same license or the GNU GPLv3. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work through interfaces provided by the licensed work may be distributed under different terms and without source code for the larger work.`;
      break;
    case "Mozilla Public License 2.0":
      licenseInfo = `**${license}**\n\nPermissions of this weak copyleft license are conditioned on making available source code of licensed files and modifications of those files under the same license (or in certain cases, one of the GNU licenses). Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work may be distributed under different terms and without source code for files added in the larger work.`;
      break;
    case "Apache License 2.0":
      licenseInfo = `**${license}**\n\nA permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`;
      break;
    case "MIT License":
      licenseInfo = `**${license}**\n\nA short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`;
      break;
    case "Boost Software License 1.0":
      licenseInfo = `**${license}**\n\nA simple permissive license only requiring preservation of copyright and license notices for source (and not binary) distribution. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`;
      break;
    case "The Unlicense":
      licenseInfo = `**${license}**\n\nA license with no conditions whatsoever which dedicates works to the public domain. Unlicensed works, modifications, and larger works may be distributed under different terms and without source code.`;
      break;
    default:
      licenseInfo = "";
  }
  return licenseInfo;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${data.description} 

[![${data.license}](${renderLicenseBadge(data.license)})](#license)

## Table of Contents

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

## License

This project is covered under: ${renderLicenseSection(data.license)}

${renderLicenseLink(data.license)}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

- This project is created and maintained by: [${
    data.username
  }](https://github.com/${data.username}) 
- If you have addtional questions about this project, please feel free to reach out at: [${
    data.email
  }](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
