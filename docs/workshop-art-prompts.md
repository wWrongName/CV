# Workshop art — generation record

Generated with the built-in ImageGen tool, using the user's desktop reference
as a style and composition reference. Output WebP files are in `public/workshop/`;
source PNG filenames and image metadata are in `src/lib/workshop/assets.json`.
Source directory: `/Users/wwrongname/.codex/generated_images/01a15b15-7733-70b1-a161-6b6aa17371c2/`.
The mobile reference has not been converted into a desktop crop or final mobile art.

## Background prompt

Production-quality background plate for the WWN interactive engineering workshop.
Wide landscape 3:2; front-facing workshop; hand-drawn anime adventure-game background,
slightly pixelated textured wood, warm amber practical lamps, midnight navy shadows,
teal equipment light, sunset city through the right window, plants and engineering
chalkboard. Long counter with open lower compartments. Blank framed dark sign at
upper left for HTML WWN branding. Empty central seat and clear tabletop landing
areas for separate sprites. Complete uninterrupted backdrop behind absent objects.
Decorative cat at right. No people, laptop, interactive props, labels, buttons,
arrows, overlays or legible text. No photorealistic CGI, neon cyberpunk or flat vector.

## Character prompt

Single isolated upper-body seated engineer and dark laptop, transparent background.
Selected fictional character, **not an identity portrait**. The user chose this style over photo-based avatars. Young adult, tousled dark
brown hair, navy hoodie with small WWN embroidery, calm welcoming expression,
slight three-quarter turn, ceramic coffee mug in one hand, other near laptop.
Warm amber left light, muted blue fill, adult anime adventure-game aesthetic,
textured pixel-ish edges. Full head, arms, mug and laptop; clean bottom edge.
No desk, background, floor, chair extending below, UI or speech bubble.

## Common prop prompt

One isolated production 2D navigation sprite, real transparent background,
reference-matched hand-drawn anime adventure-game art, warm textured wood/brass/paper,
slightly pixelated edges, navy shadows, upper-left amber light, shallow frontal
perspective. Fully visible, tight margins. No environment, table, floor, floating
UI, arrows, photorealistic CGI or vector simplification.

Individual subjects appended to that prompt:

- **Cases:** chunky leather/kraft-paper accordion folder with documents, brass
  corners, manila tab and front clasp; exact front title `CASES`.
- **Services:** compact industrial retro terminal; green CRT with wireframe cube
  and nodes, dark metal body, brass knobs, keys and small status LEDs; no words.
- **Research:** thick open technical book, ivory pages with engineering sketches,
  equations, teal details, worn burgundy cloth, brass page clip; no legible words.
- **About:** brass/dark-wood frame with monochrome WWN engineering insignia and
  attached access badge; no human portrait.
- **Resume:** upright wood clipboard with aged cream paper, brass clip, `CV`
  heading, small engineering insignia and unreadable document lines.
- **Blog:** worn green/russet technical journals stacked horizontally, notebook
  and brass pen on top; exact middle-spine label `BLOG`.
- **Process:** unfolded cream blueprint with brass clips, navy connected technical
  diagrams, small teal annotation and curled lower edge; no legible words.

Only format encoding and proportional resizing were performed after generation,
using Sharp. No raster painting, masking, artificial background removal or
identity matching was performed. Photo-based studies were rejected; the selected character follows the original workshop reference.

## Final extended environment

The final expanded source is `exec-be659fe5-c7f6-45ed-9eae-d171c2c383db.png`.
The prompt requested canvas outpainting on all four sides, preserving the inner
workshop and extending roof beams, cables, upper storage, sunset windows, side
shelves, plants, floorboards and the rug. The entire scene remains front-facing,
with warm amber practical lamps, navy shadows and textured anime background art.
No people, laptop, UI, text, mirroring, blur, stretched borders or dark filler.

The source was enlarged as one complete image to 6144×4096 with the official
[Real-ESRGAN](https://github.com/xinntao/Real-ESRGAN) `realesr-animevideov3` model,
4× scale and a tile size larger than the entire input. No generated composition
changes were introduced during packaging. The lossless master is saved in
`artwork/workshop-master.webp`; Sharp exports exact crops with shared pixel bleed.
The browser loads these independent files according to actual visibility.

The earlier independently generated edge studies were discarded from runtime
because their geometry could not guarantee seamless joins. No tile-specific art
prompt is used in the final build: all nine pieces are technical crops of the
same master. Generation used the built-in ImageGen tool, not the ImageGen CLI/API
fallback. Local super-resolution and deterministic encoding were subsequent
asset preparation steps.


## Layered scene revision

The selected idle pose is `exec-ab301b24-8c23-4c3e-a539-ba85f4dcfec6.png`: cheek resting
on palm, mug low on the counter, laptop on the right. It follows the supplied workshop
reference, without photo identity matching. Its prepared master is
`artwork/character-idle-v2.png`. Object-specific poses are sibling character masters.
The current architectural plate is `exec-6c82ea48-e289-41e1-a7c5-f59be01adf72.png`,
edited from the coherent expanded room to remove movable furniture, plants and lamps.
It retains the same camera and window/floor geometry. Local 4× super-resolution and
lossless exact tiling follow the existing environment preparation pipeline.
Furniture/decor are independently generated at their own native resolutions, encoded
as alpha WebP and assembled in CSS; they are not crops of the enlarged background.
Prompts are saved in `docs/layered-scene-prompts.json` and
`docs/character-reaction-prompts.json`.
