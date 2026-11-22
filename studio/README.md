# WWN Studio

The Russian landing page serves the studio at `/ru`. English, the previous workshop
(`/ru?view=workshop`), canonical section pages and admin routes remain available.

Rebuild the checked-in browser bundle from the repository root with Bun and the
repository's installed dependencies:

```sh
bun build studio/reference-head/studio-source.js --minify --target browser | sed 's/[[:blank:]]*$//' > public/studio/studio.js
```

The static stylesheet, markup and runtime model live under `public/studio/`.
Model notices are next to the mesh. The publication badges use the publisher
records for journal coverage and the publisher or eLIBRARY records for links.
