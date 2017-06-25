CSS
==

## Glossary

- **Box Model** -
- **Specificity** -

## Specificity

## Box Model

## Positioning

## Floats

## Questions

**What is the difference between classes and IDs in CSS?**

- **IDs** - Meant to be unique within the document. Can be used to identify an element when linking using a fragment identifier. Elements can only have one `id` attribute.
- **Classes** - Can be reused on multiple elements within the document. Mainly for styling and targeting elements.

**What's the difference between "resetting" and "normalizing" CSS? Which would you choose, and why?**

- **Resetting** - Resetting is meant to strip all default browser styling on elements. For e.g. `margin`s, `padding`s, `font-size`s of all elements are reset to be the same. You will have to redeclare styling for common typographic elements.
- **Normalizing** - Normalizing preserves useful default styles rather than "unstyling" everything. It also corrects bugs for common browser dependencies.

I would choose resetting when I have very a customized or unconventional site design such that I need to do a lot of my own styling do not need any default styling to be preserved.

- https://stackoverflow.com/questions/6887336/what-is-the-difference-between-normalize-css-and-reset-css

**Describe `float`s and how they work.**

Float is a CSS positioning property. Floated elements remain a part of the flow of the page, and will affect the positioning of other elements (e.g. text will flow around floated elements), unlike `position: absolute` elements, which are removed from the flow of the page.

The CSS `clear` property can be used to be positioned below `left`/`right`/`both` floated elements.

If a parent element contains nothing but floated elements, its height will be collapsed to nothing. It can be fixed by clearing the float after the floated elements in the container but before the close of the container.

The `.clearfix` hack uses a clever CSS pseudo selector (:after) to clear floats. Rather than setting the overflow on the parent, you apply an additional class like `clearfix` to it. Then apply this CSS:

```css
.clearfix:after {
  content: '.';
  visibility: hidden;
  display: block;
  height: 0;
  clear: both;
}
```

- https://css-tricks.com/all-about-floats/

**Describe `z-index` and how stacking context is formed.**

The `z-index` property in CSS controls the vertical stacking order of elements that overlap. `z-index` only effects elements that have a `position` value which is not `static`.

Without any `z-index` value, elements stack in the order that they appear in the DOM (the lowest one down at the same hierarchy level appears on top). Elements with non-static positioning (and their children) will always appear on top of elements with default static positioning, regardless of HTML hierarchy.

A stacking context is an element that contains a set of layers. Within a local stacking context, the `z-index` values of its children are set relative to that element rather than to the document root. Layers outside of that context — i.e. sibling elements of a local stacking context — can't sit between layers within it. If an element B sits on top of element A, a child element of element A, element C, can never be higher than element B even if element C has a higher `z-index` than element B.

Each stacking context is self-contained - after the element's contents are stacked, the whole element is considered in the stacking order of the parent stacking context. A handful of CSS properties trigger a new stacking context, such as `opacity` less than 1, `filter` that is not `none`, and `transform that is not `none`.

- https://css-tricks.com/almanac/properties/z/z-index/
- https://philipwalton.com/articles/what-no-one-told-you-about-z-index/
- https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context

**Describe BFC (Block Formatting Context) and how it works.**
**What are the various clearing techniques and which is appropriate for what context?**
**Explain CSS sprites, and how you would implement them on a page or site.**
**What are your favorite image replacement techniques and which do you use when?**
**How would you approach fixing browser-specific styling issues?**
**How do you serve your pages for feature-constrained browsers?**
**What techniques/processes do you use?**
**What are the different ways to visually hide content (and make it available only for screen readers)?**
**Have you ever used a grid system, and if so, what do you prefer?**
**Have you used or implemented media queries or mobile specific layouts/CSS?**
**Are you familiar with styling SVG?**
**How do you optimize your webpages for print?**
**What are some of the "gotchas" for writing efficient CSS?**
**What are the advantages/disadvantages of using CSS preprocessors?**
**Describe what you like and dislike about the CSS preprocessors you have used.**
**How would you implement a web design comp that uses non-standard fonts?**
**Explain how a browser determines what elements match a CSS selector.**
**Describe pseudo-elements and discuss what they are used for.**
**Explain your understanding of the box model and how you would tell the browser in CSS to render your layout in different box models.**
**What does * { box-sizing: border-box; } do? What are its advantages?**
**List as many values for the display property that you can remember.**
**What's the difference between inline and inline-block?**
**What's the difference between a relative, fixed, absolute and statically positioned element?**
**The 'C' in CSS stands for Cascading. How is priority determined in assigning styles (a few examples)? How can you use this system to your advantage?**
**What existing CSS frameworks have you used locally, or in production? How would you change/improve them?**
**Have you played around with the new CSS Flexbox or Grid specs?**
**How is responsive design different from adaptive design?**
**Have you ever worked with retina graphics? If so, when and what techniques did you use?**
**Is there any reason you'd want to use translate() instead of absolute positioning, or vice-versa? And why?**
