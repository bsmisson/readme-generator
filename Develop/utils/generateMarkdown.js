// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }

  const licenseUrl = `https://img.shields.io/badge/license-${license}-brightgreen`;

  return `![${license} License](${licenseUrl})`;
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }

  const licenseUrl = `https://choosealicense.com/licenses/${license.toLowerCase().replace(/ /g, '-')}/`;

  return `[${license} License](${licenseUrl})`;
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }

  const licenseBadge = renderLicenseBadge(license);
  const licenseLink = renderLicenseLink(license);

  return `
## License

This project is licensed under the ${licenseBadge} ${licenseLink} license.
  `;
}


// TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }
function generateMarkdown(data) {
  return `
# ${data.title}

## Description
${data.description}

## Table of Contents
${data.tableOfContents}

## Installation
${data.installation}

## Usage
${data.usage}

## License
${renderLicenseBadge(data.license)}
${renderLicenseLink(data.license)}
${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions about this project, please contact ${data.author} at ${data.email}.
`;
}


module.exports = generateMarkdown;
