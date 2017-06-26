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

Alternatively, give `overflow: hidden` property to the parent element which will establish a new block formatting context inside the children and it will expand to contain its children.

- https://css-tricks.com/all-about-floats/

**Describe `z-index` and how stacking context is formed.**

The `z-index` property in CSS controls the vertical stacking order of elements that overlap. `z-index` only effects elements that have a `position` value which is not `static`.

Without any `z-index` value, elements stack in the order that they appear in the DOM (the lowest one down at the same hierarchy level appears on top). Elements with non-static positioning (and their children) will always appear on top of elements with default static positioning, regardless of HTML hierarchy.

A stacking context is an element that contains a set of layers. Within a local stacking context, the `z-index` values of its children are set relative to that element rather than to the document root. Layers outside of that context — i.e. sibling elements of a local stacking context — can't sit between layers within it. If an element B sits on top of element A, a child element of element A, element C, can never be higher than element B even if element C has a higher `z-index` than element B.

Each stacking context is self-contained - after the element's contents are stacked, the whole element is considered in the stacking order of the parent stacking context. A handful of CSS properties trigger a new stacking context, such as `opacity` less than 1, `filter` that is not `none`, and `transform that is not `none`.

- https://css-tricks.com/almanac/properties/z/z-index/
- https://philipwalton.com/articles/what-no-one-told-you-about-z-index/
- https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context

// TODO: Revisit.

**Describe Block Formatting Context (BFC) and how it works.**

A Block Formatting Context (BFC) is part of the visual CSS rendering of a web page in which block boxes are laid out. Floats, absolutely positioned elements, `inline-blocks`, `table-cells`, `table-caption`s, and elements with `overflow` other than `visible` (except when that value has been propagated to the viewport) establish new block formatting contexts.

A BFC is an HTML box that satisfies at least one of the following conditions:

- The value of `float` is not `none`.
- The value of `position` is neither `static` nor `relative`.
- The value of `display` is `table-cell`, `table-caption`, `inline-block`, `flex`, or `inline-flex`.
- The value of `overflow` is not `visible`.

In a BFC, each box's left outer edge touches the left edge of the containing block (for right-to-left formatting, right edges touch).

Vertical margins between adjacent block-level boxes in a BFC collapse. Read more on [collapsing margins](https://www.sitepoint.com/web-foundations/collapsing-margins/).

// TODO: Revisit.

- https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Block_formatting_context
- https://www.sitepoint.com/understanding-block-formatting-contexts-in-css/

**What are the various clearing techniques and which is appropriate for what context?**

- Empty `div` method - `<div style="clear:both;"></div>`.
- Clearfix method - Refer to the `.clearfix` class above.
- `overflow: hidden` method - Parent will establish a new block formatting context and expand to contains its floated children.

In large projects, I would write a utility `.clearfix` class and use them in places where I need it. `overflow: hidden` might clip children if the children is taller than the parent and is not very ideal.

**Explain CSS sprites, and how you would implement them on a page or site.**

CSS sprites combine multiple images into one single larger image. It is commonly used technique for icons (Gmail uses it). How to implement it:

1. Use a sprite generator that packs multiple images into one and generate the appropriate CSS for it.
1. Each image would have a corresponding CSS class with `background-image`, `background-position` and `background-size` properties defined.
1. To use that image, add the corresponding class to your element.

Advantages:

- Reduce the number of HTTP requests for multiple images (only one single request is required per spritesheet). But with HTTP2, loading multiple images is no longer much of an issue.
- Advance downloading of assets that won't be downloaded until needed, such as `:hover` pseudo-states. Blinking wouldn't be seen.

**What are your favorite image replacement techniques and which do you use when?**

CSS image replacement is a technique of replacing a text element (usually a header tag like an <h1>) with an image (often a logo). It has its origins in the time before web fonts and SVG. For years, web developers battled against browser inconsistencies to craft image replacement techniques that struck the right balance between design and accessibility.

It's not really relevant these days. Check out the link below for all the available techniques.

- https://css-tricks.com/the-image-replacement-museum/

**How would you approach fixing browser-specific styling issues?**

- After identifying the issue and the offending browser, use a separate stylesheet that only loads when that specific browser is being used. This technique requires server side rendering though.
- Use libraries like Bootstrap that already handles these styling issues for you.
- Use `autoprefixer` to automatically add vendor prefixes to your code.
- Use Reset CSS or Normalize.css.

**How do you serve your pages for feature-constrained browsers?**

**What techniques/processes do you use?**

**What are the different ways to visually hide content (and make it available only for screen readers)?**

**Have you ever used a grid system, and if so, what do you prefer?**

**Have you used or implemented media queries or mobile specific layouts/CSS?**

**Are you familiar with styling SVG?**

**How do you optimize your webpages for print?**

**What are some of the "gotchas" for writing efficient CSS?**

Firstly, understand that browsers match selectors from rightmost (key selector) to left. Browsers filter out elements in the DOM according to the key selector, and traverse up its parent elements to determine matches. The shorter the length of the selector chain, the faster the browser can determine if that element matches the selector. Hence avoid key selectors that are tag and universal selectors. They match a large numbers of elements and browsers will have to do more work in determining if the parents do match.

[BEM (Block Element Modifier)](https://bem.info/) methodology recommends that everything has a single class, and, where you need hierarchy, that gets baked into the name of the class as well, this naturally makes the selector efficient and easy to override.

Be aware of which CSS properties trigger reflow, repaint and compositing. Avoid writing styles that change the layout where possible.

https://developers.google.com/web/fundamentals/performance/rendering/

**What are the advantages/disadvantages of using CSS preprocessors?**

Advantages:

- CSS is made more maintainable.
- Easy to write nested selectors.
- Variables for consistent theming. Can share theme files across different projects.
- Mixins to generate repeated CSS.
- Splitting your code into multiple files. CSS files can be split up too but doing so will require a HTTP request to download each CSS file.

Disadvantages:

- Requires tools for preprocessing. Re-compilation time can be slow.

**Describe what you like and dislike about the CSS preprocessors you have used.**

Likes:

- Mostly mentioned above.
- Less is written in JavaScript, which plays well with Node.

Dislikes:

- I use Sass via `node-sass`, which is a binding for LibSass, which is written in C++. Have to frequently recompile it when switching between node versions.
- In Less, variable names are prefixed with `@`, which can be confused with native CSS keywords like `@media`, `@import` and `@font-face` rule.

**How would you implement a web design comp that uses non-standard fonts?**

**Explain how a browser determines what elements match a CSS selector.**

**Describe pseudo-elements and discuss what they are used for.**

**Explain your understanding of the box model and how you would tell the browser in CSS to render your layout in different box models.**

The CSS box model is responsible for calculating:

- How much space a block-level element takes up.
- Whether or not borders and/or margins overlap, or collapse.
- A box’s dimensions.

The box model has the following rules:

- The dimensions of a block element are calculated by `width`, `height`, `padding`, `border`s, and `margin`s.
- If no height is specified, a `block` element will be as high as the content it contains, plus padding (unless there are floats, for which see below).
- If no width is specified, a non-floated `block` element will expand to fit the width of its parent minus padding.
- The `height` of an element is calculated by the content's height.
- The `width` of an element is calculated by the content's width.
- By default, `padding`s and `border`s are not part of the `width` and `height` of an element.

- https://www.smashingmagazine.com/2010/06/the-principles-of-cross-browser-css-coding/#understand-the-css-box-model

**What does `* { box-sizing: border-box; }` do? What are its advantages?**

- By default, elements have `box-sizing: content-box` applied, and only the content size is being accounted for.
- `box-sizing: border-box` changes how the `width` and `height` of elements are being calculated, `border` and `padding` are also being included in the calculation.
- The `height` of an element is now calculated by the content's height + vertical `padding` + vertical `border` width.
- The `width` of an element is now calculated by the content's width + horizontal `padding` + horizontal `border` width.

**List as many values for the `display` property that you can remember.**

- `none`, `block`, `inline`, `inline-block`, `table-cell`.

**What's the difference between `inline` and `inline-block`?**

I shall throw in a comparison with `block` for good measure.

|  |`block`|`inline-block`|`inline`|
|--|--|--|--|
| Size | Fills up the width of its parent container. | Depends on content. | Depends on content. |
| Positioning | Start on a new line and tolerates no HTML elements next to it (except when you add `float) | Flows along with other content and allows other elements beside. | Flows along with other content and allows other elements beside. |
| Can specify `width` and `height` | Yes | Yes | No. Will ignore if being set. |
| Can be aligned with `vertical-align` | No | Yes | Yes |
| Margins and paddings | All sides respected. | All sides respected. | Only horizontal sides respected. Vertical sides, if specified, do not affect layout. Vertical space it takes up depends on `line-height`, even though the `border` and `padding` appear visually around the content. |
| Float | - | - | Becomes like a `block` element where you can set vertical margins and paddings. |

**What's the difference between a `relative`, `fixed`, `absolute` and `static`-ally positioned element?**

**The 'C' in CSS stands for Cascading. How is priority determined in assigning styles (a few examples)? How can you use this system to your advantage?**

**What existing CSS frameworks have you used locally, or in production? How would you change/improve them?**

**Have you played around with the new CSS Flexbox or Grid specs?**

**How is responsive design different from adaptive design?**

**Have you ever worked with retina graphics? If so, when and what techniques did you use?**

**Is there any reason you'd want to use `translate()` instead of `absolute` positioning, or vice-versa? And why?**

`translate()` is a value of CSS `transform`. Changing `transform` or `opacity` does not trigger browser reflow or repaint, only compositions, whereas changing the absolute positioning triggers `reflow`. `transform` causes the browser to create a GPU layer for the element but changing absolute positioning properties uses the CPU. Hence `translate()` is more efficient and will result in shorter paint times for smoother animations.

When using `translate()`, the element still takes up its original space (sort of like `position: relative`), unlike in changing the absolute positioning.

- https://www.paulirish.com/2012/why-moving-elements-with-translate-is-better-than-posabs-topleft/

References:

- https://neal.codes/blog/front-end-interview-css-questions
- http://jgthms.com/css-interview-questions-and-answers.html
- https://quizlet.com/28293152/front-end-interview-questions-css-flash-cards/
