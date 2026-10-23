# WWN — interactive engineering workshop

Branch: `feature/interactive-engineering-workshop`.

## Current result

Static desktop workshop, responsive illustrated environment, independent clickable
props, URL-backed reading panels, Russian/English content and an interaction adapter.
The approved character is the fictional boy from the workshop reference. Photo-based
avatars were rejected. Idle and seven object-specific reaction frames are now separate
transparent sprites; these are instant pose changes, not a timed animation sequence. Mobile now has eight horizontal full-screen scenes, one for each shared destination, with swipe navigation and clickable pagination dots. All eight mobile slides use coherent full-bleed illustrations. Cases and contact follow the exact rightmost phone compositions, while the other slides show distinct workshop areas. The brand and locale controls stay outside the scroll rail. See `docs/mobile-workshop.txt`. The mobile layout is not produced by cropping the desktop.

The original website remains available at `/classic/ru` and `/classic/en`, including
its projects, resume, research, themes and 3D presentation. No version-switch button
has been added. Its own root layout loads the old styles and 3D components. The
admin routes, analytics, PDF URLs and deployment configuration are preserved.

## One set of destinations

`src/lib/workshop/sections.ts` defines IDs, labels and URLs. Desktop composition
lives separately in `src/lib/workshop/scene.ts`; mobile uses the same IDs.

| Section | Russian URL | Desktop object |
| --- | --- | --- |
| About | `/ru/about` | Personal insignia |
| Solutions | `/ru/services` | Green terminal |
| Cases | `/ru/projects` | Archive folder |
| Research | `/ru/research` | Technical book |
| Blog | `/ru/blog` | Journal stack |
| Resume | `/ru/experience` | Clipboard |
| Process | `/ru/process` | Blueprint |
| Contact | `/ru/contact` | Contact cubes |

The English version uses `/en/` with identical section segments. `WorkshopShell`
persists in the locale layout. Each section is a server-rendered page whose
content is presented in a native dialog. Direct entry, refresh and new tabs work.
Closing returns directly to locale home without scrolling, independent of chapter hash history. Escape closes the panel; focus returns to the selected object.
The native dialog traps focus and makes the backdrop inert; document scrolling
is locked while reading. SSR `open` and the normal home link work without JS.

Below 900 CSS px the horizontal mobile workshop exposes the same real URLs.
Desktop pictures choose an empty media source at that width. This prevents
unnecessary desktop-art downloads on phones.

## Adaptive framing

The background coordinate system is based on a 3:2 room. Props and click areas
share the same coordinate plane and preserve proportions. Its centred width is
`clamp(60dvh, 100vw, 150dvh)`. This preserves the sign, character and core objects
on wide and tall desktop windows. Additional roof, floor, walls and city windows
are actual artwork revealed beyond this central area; no blur filter is used.

`environment.json` registers the expanded master to the room coordinate system.
The high-resolution pieces are positioned directly at their final CSS size,
without nested scaling that would rasterize them at an intermediate low resolution.

## One master, exact independent chunks

The final master is `artwork/workshop-master.webp`, a lossless 6144×4096 image.
Its artwork was created with the built-in ImageGen tool and enlarged 4× locally
with the official Real-ESRGAN anime model. It is one coherent image; individual
chunks are never independently generated, repainted or registered to neighbours.

`scripts/prepare-workshop-tiles.cjs` divides the master on integer pixel boundaries:
three columns and three rows. Each crop includes four source pixels of bleed on
available sides, so adjacent crops overlap by eight source pixels. Delivery files
use WebP quality 95 at native resolution. The exporter decodes each file and
requires PSNR of at least 40 dB against its lossless master crop. `environment-tiles.json` records exact bounds.

The complete master is an authoring asset, not a browser request. The browser
requests only the independent `public/workshop/tile-*.webp` files. The central
piece is in SSR HTML with high fetch priority. An IntersectionObserver requests
outer pieces as their actual bounds enter the viewport or its 120px preload
margin. Resizing reveals and requests more pieces. Loaded pieces remain cached.
The nine delivery chunks total 2.73 MB (previously 26.80 MB); the center is
1.12 MB. The lossless authoring master remains local and is not shipped.

A small 384px preview supplies the initial composition while actual chunks load.
There are **no timers, minimum loading durations, random delays, artificial stagger,
reveal animations or opacity gates**. Every piece appears when its real image is
decoded; cached pieces appear immediately. Navigation never waits for image loading.
Object names and the text directory keep destinations usable if artwork fails.

Character sprites use 480/960px WebP variants; props use 256/512px. Their dimensions,
alpha and provenance are in `assets.json`. Regenerate deterministic tiles with:

```sh
node scripts/prepare-workshop-tiles.cjs
```

Sharp is resolved from Next.js's installed dependency tree; no new runtime or
production dependency was added for asset generation.

## Future character reactions

`WorkshopInteractionProvider` emits pointer, focus, activation and route events.
Pointer coordinates are stored in a ref, so future gaze tracking does not rerender
React on every movement. An animation renderer can subscribe to events separately.

Events: `pointer`, `pointer-leave`, `attend` (keyboard/pointer), `leave`, `activate`,
`route-opened`, `route-closed`. Modes: `idle`, `attending`, `opening`, `reading`.
Each object specifies a future `point`, `approach` or `greet` reaction. Opening and
reading take priority over hover. External contact returns to idle. No animation
holds navigation. Reduced-motion preferences disable scene animation/transitions.

## Verification

`make check`: TypeScript, existing project navigation, workshop route identity,
interaction priority, keyboard parity, classic-link isolation and asset integrity.
`make build`: production compile and generated new/classic routes.
The asset exporter checks native crop geometry and decoded quality against the shared master.
Browser QA covers fullscreen fit, wide/tall windows, keyboard/Escape, Back/Forward,
refresh, direct entry, focus restoration, locales, classic navigation and mobile.


## Layered visual scene

The environment master now contains architecture only: walls, windows, ceiling,
floor and rug. Counter, two bookcases, stool, luggage, plants, hanging vines and
three lamps load as separate alpha images from `furniture.json`. Native furniture
masters are saved under `artwork/`; the long counter is over 2000 source pixels wide.
Furniture dimensions preserve source aspect ratios in the common 3:2 stage. Shelf
surfaces and counter contact lines define the positions of navigation props. Static
prop masters have tightly cropped alpha bounds so their bottom edge is their anchor.

`reactions.json` defines per-section pose, position and whether the sprite carries
the object. Hover or keyboard focus requests that pose. The idle hero and any carried
prop disappear only when the requested image has actually decoded. On failure, the
idle scene remains usable. Leaving returns immediately; no delay, glow, fading or
animated transform is used. Reaction artwork has no pointer hit area, so replacing
a visible object cannot break hover or intercept a neighbouring link. Reduced motion
and mobile layouts keep the idle pose.

Poses: cases standing with open folder; CV crouching and reaching; about and blog
standing and reaching for their shelves; process sitting on a stool with blueprint;
research leaning over a separate book with both palms on the counter; solutions
presenting the green engineering models. Laptop/mug remain on the counter when the hero leaves.
A carried folder/map or occupied stool is not duplicated by its static layer.

Generation used built-in ImageGen. `docs/character-reaction-prompts.json` records the
accepted action-pose prompts, and `docs/layered-scene-prompts.json` records furniture,
decor and empty architecture prompts. No personal photos are part of this scene.

Re-encode saved native alpha masters with `node scripts/prepare-workshop-sprites.cjs`.
`WORKSHOP_REPO` and `WORKSHOP_OUTPUT` support a separate preparation destination.
The script preserves placement, aspect ratios and alpha; it performs no raster retouching.


## Reference composition revision

The original 1536 × 1024 illustration is the layout and palette source. The room
now uses 38 separately loaded furniture/decor layers plus seven navigation props
and the idle character. Asymmetric shelves replace the rectangular bookcases.
Added radios, candle lamp, cat, mug, pencils, Newton cradle, glass mountain dome,
receiver, contact cube, pinned maps/photos, upright books, thin notebook stacks,
window foliage and rolled drawings restore the dense room composition. The CV,
closed cases folder and process map lie flat; this intentionally differs from the
standing resume board in the reference, per the user's correction.

Furniture uses native aspect ratios. Shelf strips have explicit support surfaces;
tabletop items share y=615, lower shelf items y≈806. Laptop and mug remaining when
the character leaves have independent bottom anchors, rather than a padded image.
Plaques have separate reference coordinates and move away from the face for the
cases/research/CV interaction frames. There is no hover illumination.

The architecture was cleaned from the original reference, then outpainted around
a padded, locked central rectangle. Feature registration found 154 inliers for the
expanded plate. One 6144 × 4096 lossless master produces nine exact overlapping
crops. Filenames include a content fingerprint so the browser cannot mix tiles
from different master revisions. No loading timers are introduced.

The desktop scene uses overflow:clip to prevent focus from scrolling its offscreen
outpainted bounds. Keyboard tests verified scrollTop remains zero for all poses.
This remains an illustrated reconstruction, not a pixel-identical copy of every
reference object. Original character identity and classic routes are retained.

`docs/reference-composition-prompts.json` records built-in ImageGen prompts.
`docs/reference-scene-inventory.json` records the component rectangles and support
lines. Selected source PNGs are stored under `artwork/reference-*-v3.png`; runtime
WebP variants are under `public/workshop/reference-*-v3-*.webp`.

The priority centre crop contains the original room plus a margin. The remaining
eight border crops start only when actually visible, with zero observer margin.
A regular desktop viewport therefore needs only the centre background file;
wide/tall viewports request the relevant side/ceiling/floor crops.
