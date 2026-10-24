# Deprecated desktop workshop

Versioned archive of the superseded full-room desktop scene, its eight poses,
registered animation masks, furniture/environment layers, old preparation scripts,
and intermediate studio-room / generic presentation illustrations.

The original directory structure is retained under `src/`, `public/` and `scripts/`.
`archive-manifest.json` lists every archived public asset with its SHA-256 digest.
Files are outside the active `src/` and `public/` trees; TypeScript excludes
`deprecated`, and Docker excludes the entire `deprecated/` build context.
The production packaging check verifies that no archived public asset is shipped.

Shared current UI, mobile illustrations and the generic mesh renderer remain active.
The complete previous `workshop.css` and old checks are retained as snapshots.
Archived scripts are historical; their original paths resolve only when restored
to the project root. Do not import or copy this archive back into the active site
without an explicit migration.
