# Design System Specification: The Digital Atelier

## 1. Overview & Creative North Star
**Creative North Star: "The Architectural Editorial"**

This design system rejects the "boxed-in" nature of traditional e-commerce. Instead of a rigid grid of outlines, we treat the interface as a high-end digital lookbook. The goal is to move beyond "trustworthy blue boxes" and into a space of **Architectural Editorial**—where trust is built through precision, expansive white space, and a sophisticated layering of tonal surfaces. 

We achieve a custom, premium feel by breaking the "template" look through:
*   **Intentional Asymmetry:** Overlapping product imagery with typography to create depth.
*   **Tonal Authority:** Replacing harsh lines with subtle shifts in surface luminosity.
*   **High-Contrast Scale:** Pairing massive, low-tracking display type with hyper-legible utility text.

---

## 2. Colors & Surface Philosophy
The palette is rooted in deep, authoritative charcoals and muted slates, punctuated by a "liquid" black (`primary: #000000`) and a high-energy emerald (`on_tertiary_container: #009668`) for critical moments of conversion.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders for sectioning content. To separate a hero section from a product grid, use a background shift from `surface` (#f7f9fb) to `surface_container_low` (#f2f4f6). Boundaries must be felt, not seen.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. Use the `surface-container` tiers to define "importance" through depth:
*   **Base:** `surface` (#f7f9fb) for the main canvas.
*   **Elevated Sections:** `surface_container_low` (#f2f4f6) for secondary content blocks.
*   **Interactive Cards:** `surface_container_lowest` (#ffffff) to make product cards "pop" against the grey base.
*   **Overlays:** `surface_container_highest` (#e0e3e5) for side-drawers and modals.

### The Glass & Gradient Rule
To prevent the UI from feeling "flat," use **Glassmorphism** for floating headers and navigation bars. Apply a `surface_container_lowest` color at 80% opacity with a `20px` backdrop-blur. 
*   **Signature Polish:** For primary CTAs, apply a subtle linear gradient from `primary` (#000000) to `primary_container` (#131b2e) at a 135-degree angle. This adds a "weighted" feel that a flat hex code cannot replicate.

---

## 3. Typography: The Editorial Voice
We utilize two distinct typefaces to balance character with utility. **Manrope** provides a geometric, modern authority for headings, while **Inter** handles the heavy lifting of e-commerce data.

*   **Display (Manrope):** Use `display-lg` (3.5rem) with `-0.04em` letter spacing for hero headlines. This creates a "tight," premium editorial feel.
*   **Headlines (Manrope):** `headline-lg` (2rem) should be used for section titles, always set in `on_surface` (#191c1e).
*   **Body (Inter):** All product descriptions use `body-lg` (1rem). Ensure a line height of `1.6` to maintain a "fast" and airy reading experience.
*   **Labels (Inter):** `label-md` (0.75rem) in `on_surface_variant` (#45464d) is reserved for metadata like "SKU" or "In Stock," set in All Caps with `0.05em` letter spacing for a technical, precise look.

---

## 4. Elevation & Depth
In this system, "Elevation" is a state of light, not a drop shadow.

*   **The Layering Principle:** Place a `surface_container_lowest` card on a `surface_container_low` section. This creates a soft, natural lift (0.5rem corner radius `lg`) without traditional shadows.
*   **Ambient Shadows:** For floating elements (Modals/Dropdowns), use "Ambient Light" shadows: `box-shadow: 0 20px 40px rgba(25, 28, 30, 0.06)`. Note the low opacity; it should be felt as a soft glow, not a dark smudge.
*   **The "Ghost Border" Fallback:** If accessibility requires a container boundary, use the `outline_variant` (#c6c6cd) at **15% opacity**. Anything higher is too aggressive for this aesthetic.
*   **Depth via Blur:** Use backdrop-blur on `surface_bright` containers to allow product colors to bleed through subtly, grounding the interface in the photography.

---

## 5. Components & Interaction

### Buttons
*   **Primary:** Solid `primary` (#000000) with `on_primary` (#ffffff) text. Use `full` (9999px) roundedness for a modern, "friendly yet fast" feel.
*   **Secondary:** `surface_container_highest` (#e0e3e5) background. No border.
*   **Tertiary:** Text only using `primary` color, with a `2px` underline that appears only on hover.

### Product Cards
*   **Layout:** Forbid the use of divider lines. Separate the product image from the text using `1.5` (0.375rem) of vertical spacing.
*   **Imagery:** Use a `0.75rem` (xl) corner radius. Backgrounds of product shots should be neutral to blend into the `surface_container_lowest` card.

### Input Fields
*   **Style:** Minimalist. Use `surface_container_low` as the fill. 
*   **Focus State:** Instead of a thick border, animate a `2px` underline using the `tertiary_fixed` (#6ffbbe) color.
*   **Error State:** Use `error` (#ba1a1a) for text and `error_container` (#ffdad6) for a subtle background tint of the entire input field.

### Editorial Spacing
Utilize "Negative Space as a Feature." Use `16` (4rem) or `20` (5rem) spacing between major sections to allow the user's eyes to rest, conveying a sense of luxury and lack of clutter.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** overlap a product image slightly over a `display-md` headline to create "Editorial Layers."
*   **Do** use `tertiary` emerald tones (#009668) sparingly—only for "Success" states or "Buy Now" triggers to maintain their impact.
*   **Do** use the `spacing scale` 8 (2rem) for internal padding of all containers to ensure "breathability."

### Don’t:
*   **Don't** use 100% black text on 100% white backgrounds. Use `on_surface` (#191c1e) on `surface` (#f7f9fb) to reduce eye strain.
*   **Don't** use standard "Drop Shadows" on buttons. If a button needs to stand out, use a color shift or a subtle gradient.
*   **Don't** use icons with varying stroke weights. Use a consistent 1.5pt stroke weight to match the Inter typography.
*   **Don't** use dividers to separate list items. Use a `0.5rem` vertical gap and a background hover state of `surface_container_high`.