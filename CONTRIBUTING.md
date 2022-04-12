# Local setup

Ensure that a compatible version of node is installed (at least 16).

```
# clone this repo down
# install depdendencies
npm install

# run the tests
npm test
```

# Development flow

1. Make your changes
  - Please add tests when possible.
2. Add a changeset that describes them `npx changeset`
  - Follow the prompts to assign impacted packages
  - Add a meaningful description
  - For docs / repo stuff `npx changeset --empty` is fine
3. Open a PR

