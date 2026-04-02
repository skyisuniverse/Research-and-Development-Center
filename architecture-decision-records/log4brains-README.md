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

- build from src `***-adr` folders to

- deploy each adr to github-pages environment to a subfolder in a domain `url/***-adr`, e.g.:

    - `url/***-1-adr`
    - `url/***-2-adr`
    - `url/***-3-adr`
    - etc.

## MADRs

To create a new ADR from your template:

```shell
log4brains adr new
```