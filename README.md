# Zuriportfolio - Frontend

This is a `Html, Css and Javascript` project.

## Getting Started

#### First clone the repo

```bash
git clone origin https://github.com/300DevDays-group3/task1-kidclubzone.git
```

#### Switch to dev branch

```bash
git checkout dev
```

# Commit Standards

## Branches

- **dev** -> pr this branch for everything `frontend` related
- **main** -> **dont touch** this branch, this is what is running in production.

## Contributions

task1-kidclubzones is open to contributions, but I recommend creating an issue or replying in a comment to let us know what you are working on first that way we don't overwrite each other.

## Contribution Guidelines

1. Clone the repo `git clone origin https://github.com/300DevDays-group3/task1-kidclubzone.git`.
2. Open your terminal & set the origin branch: `git remote add origin origin https://github.com/300DevDays-group3/task1-kidclubzone.git.web.git`
3. Pull origin `git pull origin dev`
4. Create a new branch for the task you were assigned to, eg `TicketNumber/(Feat/Bug/Fix/Chore)/Ticket-title` : `git checkout -b ZA-001/Feat/Sign-Up-from`
5. After making changes, do `git add .`
6. Commit your changes with a descriptive commit message : `git commit -m "your commit message"`.
7. To make sure there are no conflicts, run `git pull origin dev`.
8. Push changes to your new branch, run `git push -u origin ZA-001/Feat/Sign-Up-from`.
9. Create a pull request to the `dev` branch not `main`.
10. Ensure to describe your pull request.
11. Add screenshots in your pull request.

# Merging

Under any circumstances should you merge a pull requests on a specific branch to the `dev` or `main` branch
**Dont merge your pull request yourself, reach out to either Newbie or Oluwafemi to review before merging**

### _Commit CheatSheet_

| Type     |                          | Description                                                                                                 |
| -------- | ------------------------ | ----------------------------------------------------------------------------------------------------------- |
| feat     | Features                 | A new feature                                                                                               |
| fix      | Bug Fixes                | A bug fix                                                                                                   |
| docs     | Documentation            | Documentation only changes                                                                                  |
| style    | Styles                   | Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)      |
| refactor | Code Refactoring         | A code change that neither fixes a bug nor adds a feature                                                   |
| perf     | Performance Improvements | A code change that improves performance                                                                     |
| test     | Tests                    | Adding missing tests or correcting existing tests                                                           |
| build    | Builds                   | Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)         |
| ci       | Continuous Integrations  | Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs) |
| chore    | Chores                   | Other changes that don't modify , frontend or test files                                                    |
| revert   | Reverts                  | Reverts a previous commit                                                                                   |

> _Sample Commit Messages_

- `chore: Updated README file` := `chore` is used because the commit didn't make any changes to the , frontend or test folders in any way.
- `feat: Added plugin info endpoints` := `feat` is used here because the feature was non-existent before the commit.

## Folder Structure

zuriportfolio-frontend/
│
├── assets/
│ ├── svgs/
│ │ └── [SVG files]
│ └── images/
│ └── [Image files]
│
├── index.html
├── resets.css
├── style.css
├── app.js
│

## Code style

Your section must have a beginning and ending comments
Examples

```html
<!-- NAVBAR BEGINNING -->
<!-- NAVBAR BEGINNING -->
```

```css
/* NAVBAR */
/* NAVBAR END */
```

## PULL BEFORE YOU PUSH

## Dont merge your pull request yourself, reach out to either Newbie or Oluwafemi to review before merging
