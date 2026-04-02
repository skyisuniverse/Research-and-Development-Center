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

3. Then, we have to tell GitHub that we don't want to use Jekyll, otherwise, you will get a 404 error:

```
git checkout gh-pages
touch .nojekyll
git add .nojekyll
git commit -m "Add .nojekyll for Log4brains"
git push
```

4. Finally, you can [enable your GitHub page](https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site):

- On GitHub, go to `Settings > GitHub Pages`
- Select the `gh-pages` branch as the "Source"
- Then, select the `/ (root)` folder

You should now be able to see your knowledge base at `https://<username>.github.io/<repository>/log4brains/`.
It will be re-built and published every time you push on `main`.


```
Error: The directory you're trying to deploy named /home/runner/work/Research-and-Development-Center/Research-and-Development-Center/architecture-decision-records/nano-assembly-adr/.log4brains/out doesn't exist. Please double check the path and any prerequisite build scripts and try again.
```

which probably means ADR has to be manually built before deploying?

[github.com/JamesIves/github-pages-deploy-action/blob/3.7.1/action.yml](https://github.com/JamesIves/github-pages-deploy-action/blob/3.7.1/action.yml)

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