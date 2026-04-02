# log4brains readme

## ADRs file structure

ADRs are located in the root of the project in:

- `architecture-decision-records/***-1-adr`

- `architecture-decision-records/***-2-adr`

- etc.

Building an ADR with `log4brains build` (e.g. from `architecture-decision-records/***-1-adr`) will output the built dist to:

- `architecture-decision-records/***-1-adr/.log4brains/out`

## log4brains commands

To initialize a project:

```shell
log4brains init
```

To build a project:

```shell
log4brains build
```

## log4brains deployment

1. add `github-publish-action.yml` to `.github/workflows` for each ADR as described in [log4brains CI/CD configuration examples](https://github.com/thomvaill/log4brains?tab=readme-ov-file#-cicd-configuration-examples)

    - specify the `--basePath` for each ADR `log4brains build --basePath /${GITHUB_REPOSITORY#*/}/log4brains` with `architecture-decision-records/***-1-adr` pattern
        - e.g. `--basePath --basePath /${GITHUB_REPOSITORY#*/}/architecture-decision-records/nano-assembly-adr`
        - e.g. `--basePath --basePath /${GITHUB_REPOSITORY#*/}/architecture-decision-records/instantly-reusable-launchpad-adr`
        - etc.

2. After the first run, this workflow should create a gh-pages branch in the repository containing the generated static files to serve in `architecture-decision-records/nano-assembly-adr/.log4brains/out`

```
Error: The directory you're trying to deploy named /home/runner/work/Research-and-Development-Center/Research-and-Development-Center/architecture-decision-records/nano-assembly-adr/.log4brains/out doesn't exist. Please double check the path and any prerequisite build scripts and try again.
```

which probably means ADR has to be manually built before deploying?

<!-- - build from src `***-adr` folders to -->

<!-- - deploy each adr to github-pages environment to a subfolder in a domain `url/***-adr`, e.g.:

    - `url/***-1-adr`
    - `url/***-2-adr`
    - `url/***-3-adr`
    - etc. -->

## MADRs

To create a new ADR from your template:

```shell
log4brains adr new
```