# Table of contents
- [Table of contents](#table-of-contents)
- [Prerequisities#](#prerequisities)
- [Essentials#](#essentials)
  - [jQuery function#](#jquery-function)
    - [Get element collection](#get-element-collection)
      - [jQuery- Prerequisities#](#jquery--prerequisities)
      - [Vanilla JS](#vanilla-js)
    - [Get element collection in the specific container](#get-element-collection-in-the-specific-container)
      - [jQuery](#jquery)
      - [Vanilla JS](#vanilla-js-1)
    - [Create a new element](#create-a-new-element)
      - [jQuery](#jquery-1)
      - [Vanilla JS](#vanilla-js-2)
      - [jQuery](#jquery-2)
      - [Vanilla JS](#vanilla-js-3)
    - [Specify a function to execute when the DOM is fully loaded](#specify-a-function-to-execute-when-the-dom-is-fully-loaded)
      - [jQuery](#jquery-3)
      - [Vanilla JS](#vanilla-js-4)
  - [each#](#each)
      - [jQuery](#jquery-4)
      - [Vanilla ES6+](#vanilla-es6)
      - [Vanilla ES5](#vanilla-es5)
      - [Anywhere - large collections](#anywhere---large-collections)
- [General attributes#](#general-attributes)
  - [attr#](#attr)
    - [Set attribute to a single element](#set-attribute-to-a-single-element)
      - [jQuery](#jquery-5)
      - [Vanilla JS](#vanilla-js-5)
    - [Set attribute to the set of elements](#set-attribute-to-the-set-of-elements)
      - [jQuery](#jquery-6)
      - [Vanilla ES6+](#vanilla-es6-1)
      - [Vanilla ES5](#vanilla-es5-1)
    - [Get attribute value](#get-attribute-value)
      - [jQuery](#jquery-7)
      - [Vanilla JS](#vanilla-js-6)
    - [Get plain object containing all element attributes as a `name: value` pairs](#get-plain-object-containing-all-element-attributes-as-a-name-value-pairs)
      - [jQuery](#jquery-8)
      - [Vanilla ES6+](#vanilla-es6-2)
      - [Vanilla ES5](#vanilla-es5-2)
  - [removeAttr#](#removeattr)
    - [Remove attribute from a single element](#remove-attribute-from-a-single-element)
      - [jQuery](#jquery-9)
      - [Vanilla JS](#vanilla-js-7)
    - [Remove attribute from the set of elements](#remove-attribute-from-the-set-of-elements)
      - [jQuery](#jquery-10)
      - [Vanilla ES6+](#vanilla-es6-3)
      - [Vanilla ES5](#vanilla-es5-3)
  - [val#](#val)
    - [Get element value](#get-element-value)
      - [jQuery](#jquery-11)
      - [Vanilla JS](#vanilla-js-8)
    - [Set value to a single element](#set-value-to-a-single-element)
      - [jQuery](#jquery-12)
      - [Vanilla JS](#vanilla-js-9)
    - [Set value to the set of elements](#set-value-to-the-set-of-elements)
      - [jQuery](#jquery-13)
      - [Vanilla ES6+](#vanilla-es6-4)
      - [Vanilla ES5](#vanilla-es5-4)
- [Class attribute#](#class-attribute)
  - [addClass#](#addclass)
    - [Add single class](#add-single-class)
      - [jQuery](#jquery-14)
      - [Vanilla JS](#vanilla-js-10)
    - [Add multiple classes](#add-multiple-classes)
      - [jQuery](#jquery-15)
      - [Vanilla JS](#vanilla-js-11)
    - [Add class to the set of elements](#add-class-to-the-set-of-elements)
      - [jQuery](#jquery-16)
      - [Vanilla ES6+](#vanilla-es6-5)
      - [Vanilla ES5](#vanilla-es5-5)
  - [removeClass#](#removeclass)
    - [Remove single class](#remove-single-class)
      - [jQuery](#jquery-17)
      - [Vanilla JS](#vanilla-js-12)
    - [Remove multiple classes](#remove-multiple-classes)
      - [jQuery](#jquery-18)
      - [Vanilla JS](#vanilla-js-13)
    - [Remove class from the set of elements](#remove-class-from-the-set-of-elements)
      - [jQuery](#jquery-19)
      - [Vanilla ES6+](#vanilla-es6-6)
      - [Vanilla ES5](#vanilla-es5-6)
  - [toggleClass#](#toggleclass)
    - [Toggle class](#toggle-class)
      - [jQuery](#jquery-20)
      - [Vanilla JS](#vanilla-js-14)
    - [Conditionally toggle class](#conditionally-toggle-class)
      - [jQuery](#jquery-21)
      - [Vanilla JS](#vanilla-js-15)
    - [Toggle class on the set of elements](#toggle-class-on-the-set-of-elements)
      - [jQuery](#jquery-22)
      - [Vanilla ES6+](#vanilla-es6-7)
      - [Vanilla ES5](#vanilla-es5-7)
  - [hasClass#](#hasclass)
    - [Check if single element has certain class](#check-if-single-element-has-certain-class)
      - [jQuery](#jquery-23)
      - [Vanilla JS](#vanilla-js-16)
    - [Check if at least one of elements in the set has certain class](#check-if-at-least-one-of-elements-in-the-set-has-certain-class)
      - [jQuery](#jquery-24)
      - [Vanilla ES6+](#vanilla-es6-8)
      - [Vanilla ES5](#vanilla-es5-8)
- [Insertion inside#](#insertion-inside)
  - [append#](#append)
    - [Append element to single target](#append-element-to-single-target)
      - [jQuery](#jquery-25)
      - [Vanilla JS](#vanilla-js-17)
    - [Append element to the set of targets](#append-element-to-the-set-of-targets)
      - [jQuery](#jquery-26)
      - [Vanilla ES6+](#vanilla-es6-9)
      - [Vanilla ES5](#vanilla-es5-9)
  - [appendTo#](#appendto)
    - [Append single element to target](#append-single-element-to-target)
      - [jQuery](#jquery-27)
      - [Vanilla JS](#vanilla-js-18)
    - [Append the set of elements to target](#append-the-set-of-elements-to-target)
      - [jQuery](#jquery-28)
      - [Vanilla ES6+](#vanilla-es6-10)
      - [Vanilla ES5](#vanilla-es5-10)
  - [prepend#](#prepend)
    - [Prepend element to single target](#prepend-element-to-single-target)
      - [jQuery](#jquery-29)
      - [Vanilla JS](#vanilla-js-19)
    - [Prepend element to the set of targets](#prepend-element-to-the-set-of-targets)
      - [jQuery](#jquery-30)
      - [Vanilla ES6+](#vanilla-es6-11)
      - [Vanilla ES5](#vanilla-es5-11)
  - [prependTo#](#prependto)
    - [Prepend single element to target](#prepend-single-element-to-target)
      - [jQuery](#jquery-31)
      - [Vanilla JS](#vanilla-js-20)
    - [Prepend the set of elements to target](#prepend-the-set-of-elements-to-target)
      - [jQuery](#jquery-32)
      - [Vanilla ES6+](#vanilla-es6-12)
      - [Vanilla ES5](#vanilla-es5-12)
  - [html#](#html)
    - [Get element HTML](#get-element-html)
      - [jQuery](#jquery-33)
      - [Vanilla JS](#vanilla-js-21)
    - [Set element HTML](#set-element-html)
      - [jQuery](#jquery-34)
      - [Vanilla JS](#vanilla-js-22)
    - [Set HTML to the set of elements](#set-html-to-the-set-of-elements)
      - [jQuery](#jquery-35)
      - [Vanilla ES6+](#vanilla-es6-13)
      - [Vanilla ES5](#vanilla-es5-13)
  - [text#](#text)
    - [Get element text](#get-element-text)
      - [jQuery](#jquery-36)
      - [Vanilla JS](#vanilla-js-23)
    - [Get text from the set of elements](#get-text-from-the-set-of-elements)
      - [jQuery](#jquery-37)
      - [Vanilla ES6+](#vanilla-es6-14)
      - [Vanilla ES5](#vanilla-es5-14)
    - [Set element text](#set-element-text)
      - [jQuery](#jquery-38)
      - [Vanilla JS](#vanilla-js-24)
    - [Set text to the set of elements](#set-text-to-the-set-of-elements)
      - [jQuery](#jquery-39)
      - [Vanilla ES6+](#vanilla-es6-15)
      - [Vanilla ES5](#vanilla-es5-15)
- [Insertion outside#](#insertion-outside)
  - [before#](#before)
    - [Insert element before single target](#insert-element-before-single-target)
      - [jQuery](#jquery-40)
      - [Vanilla JS](#vanilla-js-25)
    - [Insert element before the set of targets](#insert-element-before-the-set-of-targets)
      - [jQuery](#jquery-41)
      - [Vanilla ES6+](#vanilla-es6-16)
      - [Vanilla ES5](#vanilla-es5-16)
  - [insertBefore#](#insertbefore)
    - [Insert single element before target](#insert-single-element-before-target)
      - [jQuery](#jquery-42)
      - [Vanilla JS](#vanilla-js-26)
    - [Insert the set of elements before target](#insert-the-set-of-elements-before-target)
      - [jQuery](#jquery-43)
      - [Vanilla ES6+](#vanilla-es6-17)
      - [Vanilla ES5](#vanilla-es5-17)
  - [after#](#after)
    - [Insert element after single target](#insert-element-after-single-target)
      - [jQuery](#jquery-44)
      - [Vanilla JS](#vanilla-js-27)
    - [Insert element after the set of targets](#insert-element-after-the-set-of-targets)
      - [jQuery](#jquery-45)
      - [Vanilla ES6+](#vanilla-es6-18)
      - [Vanilla ES5](#vanilla-es5-18)
  - [insertAfter#](#insertafter)
    - [Insert single element after target](#insert-single-element-after-target)
      - [jQuery](#jquery-46)
      - [Vanilla JS](#vanilla-js-28)
    - [Insert the set of elements after the target](#insert-the-set-of-elements-after-the-target)
      - [jQuery](#jquery-47)
      - [Vanilla ES6+](#vanilla-es6-19)
      - [Vanilla ES5](#vanilla-es5-19)
- [Insertion around#](#insertion-around)
  - [wrap#](#wrap)
      - [jQuery](#jquery-48)
      - [Vanilla JS](#vanilla-js-29)
  - [wrapAll#](#wrapall)
      - [jQuery](#jquery-49)
      - [Vanilla ES6+](#vanilla-es6-20)
      - [Vanilla ES5](#vanilla-es5-20)
  - [wrapInner#](#wrapinner)
      - [jQuery](#jquery-50)
      - [Vanilla JS](#vanilla-js-30)
  - [unwrap#](#unwrap)
      - [jQuery](#jquery-51)
      - [Vanilla JS](#vanilla-js-31)
- [Removal#](#removal)
  - [detach#](#detach)
    - [Detach single element](#detach-single-element)
      - [jQuery](#jquery-52)
      - [Vanilla JS](#vanilla-js-32)
    - [Detach the set of elements](#detach-the-set-of-elements)
      - [jQuery](#jquery-53)
      - [Vanilla ES6+](#vanilla-es6-21)
      - [Vanilla ES5](#vanilla-es5-21)
  - [remove#](#remove)
    - [Remove single element](#remove-single-element)
      - [jQuery](#jquery-54)
      - [Vanilla JS](#vanilla-js-33)
    - [Remove the set of elements](#remove-the-set-of-elements)
      - [jQuery](#jquery-55)
      - [Vanilla JS](#vanilla-js-34)
  - [empty#](#empty)
    - [Empty single element](#empty-single-element)
      - [jQuery](#jquery-56)
      - [Vanilla JS](#vanilla-js-35)
    - [Empty the set of elements](#empty-the-set-of-elements)
      - [jQuery](#jquery-57)
      - [Vanilla ES6+](#vanilla-es6-22)
      - [Vanilla ES5](#vanilla-es5-22)
- [Replacement#](#replacement)
  - [replaceWith#](#replacewith)
    - [Replace single element](#replace-single-element)
      - [jQuery](#jquery-58)
      - [Vanilla JS](#vanilla-js-36)
    - [Replace each element in the set](#replace-each-element-in-the-set)
      - [jQuery](#jquery-59)
      - [Vanilla ES6+](#vanilla-es6-23)
      - [Vanilla ES5](#vanilla-es5-23)
  - [replaceAll#](#replaceall)
    - [Replace a single target](#replace-a-single-target)
      - [jQuery](#jquery-60)
      - [Vanilla JS](#vanilla-js-37)
    - [Replace the set of targets](#replace-the-set-of-targets)
      - [jQuery](#jquery-61)
      - [Vanilla ES6+](#vanilla-es6-24)
      - [Vanilla ES5](#vanilla-es5-24)
- [Tree traversal#](#tree-traversal)
  - [children#](#children)
    - [Get single element children](#get-single-element-children)
      - [jQuery](#jquery-62)
      - [Vanilla JS](#vanilla-js-38)
    - [Get single element children filtered by selector](#get-single-element-children-filtered-by-selector)
      - [jQuery](#jquery-63)
      - [Vanilla JS](#vanilla-js-39)
    - [Get children from the set of elements](#get-children-from-the-set-of-elements)
      - [jQuery](#jquery-64)
      - [Vanilla ES6+](#vanilla-es6-25)
      - [Vanilla ES5](#vanilla-es5-25)
    - [Get children filtered by selector from the set of elements](#get-children-filtered-by-selector-from-the-set-of-elements)
      - [jQuery](#jquery-65)
      - [Vanilla ES6+](#vanilla-es6-26)
      - [Vanilla ES5](#vanilla-es5-26)
  - [contents#](#contents)
    - [Get single element contents](#get-single-element-contents)
      - [jQuery](#jquery-66)
      - [Vanilla JS](#vanilla-js-40)
    - [Get multiple element contents](#get-multiple-element-contents)
      - [jQuery](#jquery-67)
      - [Vanilla ES6+](#vanilla-es6-27)
      - [Vanilla ES5](#vanilla-es5-27)
  - [closest#](#closest)
    - [Get closest matching parent for single element](#get-closest-matching-parent-for-single-element)
      - [jQuery](#jquery-68)
      - [Vanilla JS](#vanilla-js-41)
    - [Get closest matching parent for the set of elements](#get-closest-matching-parent-for-the-set-of-elements)
      - [jQuery](#jquery-69)
      - [Vanilla ES6+](#vanilla-es6-28)
      - [Vanilla ES5](#vanilla-es5-28)
  - [find#](#find)
    - [Find descendants in single element](#find-descendants-in-single-element)
      - [jQuery](#jquery-70)
      - [Vanilla JS](#vanilla-js-42)
    - [Find descendants in the the set of elements](#find-descendants-in-the-the-set-of-elements)
      - [jQuery](#jquery-71)
      - [Vanilla ES6+](#vanilla-es6-29)
      - [Vanilla ES5](#vanilla-es5-29)
  - [next#](#next)
    - [Get next sibling for single element](#get-next-sibling-for-single-element)
      - [jQuery](#jquery-72)
      - [Vanilla JS](#vanilla-js-43)
    - [Get next sibling filtered by selector for single element](#get-next-sibling-filtered-by-selector-for-single-element)
      - [jQuery](#jquery-73)
      - [Vanilla JS](#vanilla-js-44)
    - [Get next sibling for each element in the set](#get-next-sibling-for-each-element-in-the-set)
      - [jQuery](#jquery-74)
      - [Vanilla ES6+](#vanilla-es6-30)
      - [Vanilla ES5](#vanilla-es5-30)
    - [Get next sibling filtered by selector for each element in the set](#get-next-sibling-filtered-by-selector-for-each-element-in-the-set)
      - [jQuery](#jquery-75)
      - [Vanilla ES6+](#vanilla-es6-31)
      - [Vanilla ES5](#vanilla-es5-31)
  - [nextAll#](#nextall)
    - [Get all following siblings for single element](#get-all-following-siblings-for-single-element)
      - [jQuery](#jquery-76)
      - [Vanilla JS](#vanilla-js-45)
    - [Get all following siblings filtered by selector for single element](#get-all-following-siblings-filtered-by-selector-for-single-element)
      - [jQuery](#jquery-77)
      - [Vanilla JS](#vanilla-js-46)
    - [Get all following siblings for the set of elements](#get-all-following-siblings-for-the-set-of-elements)
      - [jQuery](#jquery-78)
      - [Vanilla ES6+](#vanilla-es6-32)
      - [Vanilla ES5](#vanilla-es5-32)
    - [Get all following siblings filtered by selector for the set of elements](#get-all-following-siblings-filtered-by-selector-for-the-set-of-elements)
      - [jQuery](#jquery-79)
      - [Vanilla ES6+](#vanilla-es6-33)
      - [Vanilla ES5](#vanilla-es5-33)
  - [nextUntil#](#nextuntil)
    - [Get all following siblings bounded by selector for single element](#get-all-following-siblings-bounded-by-selector-for-single-element)
      - [jQuery](#jquery-80)
      - [Vanilla JS](#vanilla-js-47)
    - [Get all following siblings bounded by selector for the set of elements](#get-all-following-siblings-bounded-by-selector-for-the-set-of-elements)
      - [jQuery](#jquery-81)
      - [Vanilla JS](#vanilla-js-48)
  - [prev#](#prev)
    - [Get previous sibling for single element](#get-previous-sibling-for-single-element)
      - [jQuery](#jquery-82)
      - [Vanilla JS](#vanilla-js-49)
    - [Get previous sibling filtered by selector for single element](#get-previous-sibling-filtered-by-selector-for-single-element)
      - [jQuery](#jquery-83)
      - [Vanilla JS](#vanilla-js-50)
    - [Get previous sibling for each element in the set](#get-previous-sibling-for-each-element-in-the-set)
      - [jQuery](#jquery-84)
      - [Vanilla ES6+](#vanilla-es6-34)
      - [Vanilla ES5](#vanilla-es5-34)
    - [Get previous sibling filtered by selector for each element in the set](#get-previous-sibling-filtered-by-selector-for-each-element-in-the-set)
      - [jQuery](#jquery-85)
      - [Vanilla ES6+](#vanilla-es6-35)
      - [Vanilla ES5](#vanilla-es5-35)
  - [prevAll#](#prevall)
    - [Get all preceding siblings for single element](#get-all-preceding-siblings-for-single-element)
      - [jQuery](#jquery-86)
      - [Vanilla JS](#vanilla-js-51)
    - [Get all preceding siblings filtered by selector for single element](#get-all-preceding-siblings-filtered-by-selector-for-single-element)
      - [jQuery](#jquery-87)
      - [Vanilla JS](#vanilla-js-52)
    - [Get all preceding siblings for the set of elements](#get-all-preceding-siblings-for-the-set-of-elements)
      - [jQuery](#jquery-88)
      - [Vanilla JS](#vanilla-js-53)
    - [Get all preceding siblings filtered by selector for the set of elements](#get-all-preceding-siblings-filtered-by-selector-for-the-set-of-elements)
      - [jQuery](#jquery-89)
      - [Vanilla JS](#vanilla-js-54)
  - [prevUntil#](#prevuntil)
    - [Get all preceding siblings bounded by selector for single element](#get-all-preceding-siblings-bounded-by-selector-for-single-element)
      - [jQuery](#jquery-90)
      - [Vanilla JS](#vanilla-js-55)
    - [Get all preceding siblings bounded by selector for the set of elements](#get-all-preceding-siblings-bounded-by-selector-for-the-set-of-elements)
      - [jQuery](#jquery-91)
      - [Vanilla JS](#vanilla-js-56)
  - [parent#](#parent)
    - [Get single element parent](#get-single-element-parent)
      - [jQuery](#jquery-92)
      - [Vanilla JS](#vanilla-js-57)
    - [Get single element parent filtered by selector](#get-single-element-parent-filtered-by-selector)
      - [jQuery](#jquery-93)
      - [Vanilla JS](#vanilla-js-58)
    - [Get parent for each element in the set](#get-parent-for-each-element-in-the-set)
      - [jQuery](#jquery-94)
      - [Vanilla ES6+](#vanilla-es6-36)
      - [Vanilla ES5](#vanilla-es5-36)
    - [Get parent filtered by selector for each element in the set](#get-parent-filtered-by-selector-for-each-element-in-the-set)
      - [jQuery](#jquery-95)
      - [Vanilla ES6+](#vanilla-es6-37)
      - [Vanilla ES5](#vanilla-es5-37)
  - [parents#](#parents)
    - [Get single element ancestors](#get-single-element-ancestors)
      - [jQuery](#jquery-96)
      - [Vanilla JS](#vanilla-js-59)
    - [Get single element ancestors filtered by selector](#get-single-element-ancestors-filtered-by-selector)
      - [jQuery](#jquery-97)
      - [Vanilla JS](#vanilla-js-60)
    - [Get ancestors for each element in the set](#get-ancestors-for-each-element-in-the-set)
      - [jQuery](#jquery-98)
      - [Vanilla ES6+](#vanilla-es6-38)
      - [Vanilla ES5](#vanilla-es5-38)
    - [Get ancestors filtered by selector for each element in the set](#get-ancestors-filtered-by-selector-for-each-element-in-the-set)
      - [jQuery](#jquery-99)
      - [Vanilla ES6+](#vanilla-es6-39)
      - [Vanilla ES5](#vanilla-es5-39)
  - [parentsUntil#](#parentsuntil)
    - [Get all ancestors bounded by selector for single element](#get-all-ancestors-bounded-by-selector-for-single-element)
      - [jQuery](#jquery-100)
      - [Vanilla JS](#vanilla-js-61)
    - [Get all ancestors bounded by selector for the set of elements](#get-all-ancestors-bounded-by-selector-for-the-set-of-elements)
      - [jQuery](#jquery-101)
      - [Vanilla ES6+](#vanilla-es6-40)
      - [Vanilla ES5](#vanilla-es5-40)
  - [siblings#](#siblings)
    - [Get single element siblings](#get-single-element-siblings)
      - [jQuery](#jquery-102)
      - [Vanilla ES6+](#vanilla-es6-41)
      - [Vanilla ES5](#vanilla-es5-41)
    - [Get single element siblings filtered by selector](#get-single-element-siblings-filtered-by-selector)
      - [jQuery](#jquery-103)
      - [Vanilla ES6+](#vanilla-es6-42)
      - [Vanilla ES5](#vanilla-es5-42)
    - [Get siblings for each element in the set](#get-siblings-for-each-element-in-the-set)
      - [jQuery](#jquery-104)
      - [Vanilla ES6+](#vanilla-es6-43)
      - [Vanilla ES5](#vanilla-es5-43)
    - [Get siblings filtered by selector for each element in the set](#get-siblings-filtered-by-selector-for-each-element-in-the-set)
      - [jQuery](#jquery-105)
      - [Vanilla ES6+](#vanilla-es6-44)
      - [Vanilla ES5](#vanilla-es5-44)
- [Filtering#](#filtering)
  - [eq#](#eq)
      - [jQuery](#jquery-106)
      - [Vanilla JS](#vanilla-js-62)
  - [first#](#first)
      - [jQuery](#jquery-107)
      - [Vanilla JS](#vanilla-js-63)
  - [last#](#last)
      - [jQuery](#jquery-108)
      - [Vanilla JS](#vanilla-js-64)
  - [slice#](#slice)
      - [jQuery](#jquery-109)
      - [Vanilla JS](#vanilla-js-65)
  - [is#](#is)
    - [Check if single element match](#check-if-single-element-match)
      - [jQuery](#jquery-110)
      - [Vanilla JS](#vanilla-js-66)
    - [Check if at least one of elements in the set match](#check-if-at-least-one-of-elements-in-the-set-match)
      - [jQuery](#jquery-111)
      - [Vanilla ES6+](#vanilla-es6-45)
      - [Vanilla ES5](#vanilla-es5-45)
  - [has#](#has)
      - [jQuery](#jquery-112)
      - [Vanilla ES6+](#vanilla-es6-46)
      - [Vanilla ES5](#vanilla-es5-46)
  - [not#](#not)
      - [jQuery](#jquery-113)
      - [Vanilla ES6+](#vanilla-es6-47)
      - [Vanilla ES5](#vanilla-es5-47)
  - [filter#](#filter)
      - [jQuery](#jquery-114)
      - [Vanilla ES6+](#vanilla-es6-48)
      - [Vanilla ES5](#vanilla-es5-48)
  - [map#](#map)
      - [jQuery](#jquery-115)
      - [Vanilla ES6+](#vanilla-es6-49)
      - [Vanilla ES5](#vanilla-es5-49)
- [Style properties#](#style-properties)
  - [css#](#css)
    - [Get CSS property value](#get-css-property-value)
      - [jQuery](#jquery-116)
      - [Vanilla JS](#vanilla-js-67)
    - [Set single element CSS property value](#set-single-element-css-property-value)
      - [jQuery](#jquery-117)
      - [Vanilla JS](#vanilla-js-68)
    - [Set CSS property value for the set of elements](#set-css-property-value-for-the-set-of-elements)
      - [jQuery](#jquery-118)
      - [Vanilla ES6+](#vanilla-es6-50)
      - [Vanilla ES5](#vanilla-es5-50)
  - [width#](#width)
    - [Get element width](#get-element-width)
      - [jQuery](#jquery-119)
      - [Vanilla JS](#vanilla-js-69)
    - [Set element width](#set-element-width)
      - [jQuery](#jquery-120)
      - [Vanilla JS](#vanilla-js-70)
  - [height#](#height)
    - [Get element height](#get-element-height)
      - [jQuery](#jquery-121)
      - [Vanilla JS](#vanilla-js-71)
    - [Set element height](#set-element-height)
      - [jQuery](#jquery-122)
      - [Vanilla JS](#vanilla-js-72)
  - [innerWidth#](#innerwidth)
    - [Get element inner width](#get-element-inner-width)
      - [jQuery](#jquery-123)
      - [Vanilla JS](#vanilla-js-73)
    - [Set element inner width](#set-element-inner-width)
      - [jQuery](#jquery-124)
      - [Vanilla JS](#vanilla-js-74)
  - [innerHeight#](#innerheight)
    - [Get element inner height](#get-element-inner-height)
      - [jQuery](#jquery-125)
      - [Vanilla JS](#vanilla-js-75)
    - [Set element inner height](#set-element-inner-height)
      - [jQuery](#jquery-126)
      - [Vanilla JS](#vanilla-js-76)
  - [outerWidth#](#outerwidth)
    - [Get element outer width](#get-element-outer-width)
      - [jQuery](#jquery-127)
      - [Vanilla JS](#vanilla-js-77)
    - [Set element outer width](#set-element-outer-width)
      - [jQuery](#jquery-128)
      - [Vanilla JS](#vanilla-js-78)
  - [outerHeight#](#outerheight)
    - [Get element outer height](#get-element-outer-height)
      - [jQuery](#jquery-129)
      - [Vanilla JS](#vanilla-js-79)
    - [Set element outer height](#set-element-outer-height)
      - [jQuery](#jquery-130)
      - [Vanilla JS](#vanilla-js-80)
  - [scrollTop#](#scrolltop)
    - [Get element vertical scroll position](#get-element-vertical-scroll-position)
      - [jQuery](#jquery-131)
      - [Vanilla JS](#vanilla-js-81)
    - [Set element vertical scroll position](#set-element-vertical-scroll-position)
      - [jQuery](#jquery-132)
      - [Vanilla JS](#vanilla-js-82)
  - [scrollLeft#](#scrollleft)
    - [Get element horizontal scroll position](#get-element-horizontal-scroll-position)
      - [jQuery](#jquery-133)
      - [Vanilla JS](#vanilla-js-83)
    - [Set element horizontal scroll position](#set-element-horizontal-scroll-position)
      - [jQuery](#jquery-134)
      - [Vanilla JS](#vanilla-js-84)
  - [position#](#position)
      - [jQuery](#jquery-135)
      - [Vanilla JS](#vanilla-js-85)
  - [offset#](#offset)
    - [Get element offset](#get-element-offset)
      - [jQuery](#jquery-136)
      - [Vanilla JS](#vanilla-js-86)
    - [Set element offset](#set-element-offset)
      - [jQuery](#jquery-137)
      - [Vanilla JS - fixed position](#vanilla-js---fixed-position)
      - [Vanilla JS - absolute or relative position](#vanilla-js---absolute-or-relative-position)
- [Events#](#events)
  - [on#](#on)
    - [Attach an event handler](#attach-an-event-handler)
      - [jQuery](#jquery-138)
      - [Vanilla JS](#vanilla-js-87)
    - [Attach single handler to multiple events](#attach-single-handler-to-multiple-events)
      - [jQuery](#jquery-139)
      - [Vanilla JS](#vanilla-js-88)
    - [Delegate event](#delegate-event)
      - [jQuery](#jquery-140)
      - [Vanilla JS](#vanilla-js-89)
  - [off#](#off)
      - [jQuery](#jquery-141)
      - [Vanilla JS](#vanilla-js-90)
  - [one#](#one)
      - [jQuery](#jquery-142)
      - [Vanilla JS](#vanilla-js-91)
  - [trigger#](#trigger)
      - [jQuery](#jquery-143)
      - [Vanilla JS](#vanilla-js-92)


# Prerequisities[#](#prerequisities)

All examples are written with the upcomming DOM4 standard in mind. To make things work, add [this polyfill](https://github.com/WebReflection/dom4#dom4) to the page and you are ready:

```html
<script src="//cdnjs.cloudflare.com/ajax/libs/dom4/1.7.0/dom4.js"></script>

```

Once older browsers vanishes, you can simply drop polyfill while keeping your codes unchanged as they will work natively.
# Essentials[#](#essentials)

## jQuery function[#](#jquery-function)

Return a collection of matched elements either found in the DOM based on passed argument(s) or created by passing an HTML string, or register a callback to call when the DOM is fully loaded.

### Get element collection

#### jQuery- [Prerequisities#](#prerequisities)
```js
var elements = $('div');

```

#### Vanilla JS

```js
var elements = document.querySelectorAll('div');

```

All examples are written assuming that the element collections are true arrays. Note that document.querySelectorAll returns [NodeList](https://developer.mozilla.org/en-US/docs/Web/API/NodeList), which is a fake array. Either use document.querySelectorAll everywhere or convert all NodeLists to arrays(Array.from, \[\].slice.call, ...).

### Get element collection in the specific container

#### jQuery

```js
var container = $('section');
var elements = $('div', container);

```

#### Vanilla JS

```js
var elements = container.querySelectorAll('div');

```

### Create a new element

#### jQuery

```js
var element = $('<div>');

```

#### Vanilla JS

```js
var element = document.createElement('div');

```

#### jQuery

```js
var element = $('<div class="container">hola</div>');

```
#### Vanilla JS

```js
var createElement = htmlString => {
    var element = document.createElement('div');
    element.innerHTML = htmlString;
    return element.firstChild
}
var element = createElement('<div class="container">hola</div>');


```


### Specify a function to execute when the DOM is fully loaded

#### jQuery

```js
$(function() {
    // ..
})
// o
$(document).ready(callback)
// o
$(document).on('ready', callback)

```

#### Vanilla JS

```js
document.addEventListener('DOMContentLoaded', function() {
    // ...
});

```

## each[#](#each)

Iterate over a jQuery object, executing a function for each matched element.

#### jQuery

```js
let elements = $('span');
elements.on('click', console.log);
elements.each(function() {
    this.doSomething();
});

```

#### Vanilla ES6+

```js

let elements = document.querySelectorAll('span');

for (var element of elements)
    element.addEventListener('click', console.log)
    element.doSomething();

```

#### Vanilla ES5

```js
elements.forEach(function(element) {
    element.doSomething();
});

```

#### Anywhere - large collections

```js
for (var id = 0; id < elements.length; id++)
    elements[id].doSomething();

```

Using `each`, `for-of` or `forEach` brings a cleaner code, but at the same time it can have a **big** impact on overall performance. In the case you are manipulating large DOM collections(tens of thousands of elements and over), you should stick with the plain old `for` and `while` loops.

# General attributes[#](#general-attributes)

These methods get and set DOM attributes of elements

## attr[#](#attr)

Get the value of an attribute for the first element in the set of matched elements or set one or more attributes for every matched element.

### Set attribute to a single element

#### jQuery
```js
element.attr('foo');

```

#### Vanilla JS

```js
element.setAttribute('foo', 'bar');

```

### Set attribute to the set of elements

#### jQuery

```js
elements.attr('foo', 'bar');

```

#### Vanilla ES6+

```js
elements.forEach(el => el.setAttribute('foo', 'bar'));

```

#### Vanilla ES5

```js
elements.forEach(function(element) {
    element.setAttribute('foo', 'bar');
});

```

### Get attribute value

#### jQuery

```js
var value = element.attr('foo');

```

#### Vanilla JS

```js
var value = element.getAttribute('foo');

```

### Get plain object containing all element attributes as a `name: value` pairs

#### jQuery

```js
var attributes = element.attr();

```

#### Vanilla ES6+

```js
var attributes = {};
for (var {name, value} of [...element.attributes]) {
    attributes[name]

}

```

#### Vanilla ES5

```js
var attributes = {};
[].forEach.call(element.attributes, function(attr) {
    attributes[attr.name] = attr.value;
});

```

Element attributes is a [NamedNodeMap](http://www.w3schools.com/dom/dom_namednodemap.asp), which is an array-like object, so we can't call array manipulation methods directly.

## removeAttr[#](#removeattr)

Remove an attribute from each element in the set of matched elements.

### Remove attribute from a single element

#### jQuery

```js
element.removeAttr('foo');

```

#### Vanilla JS

```js
element.removeAttribute('foo');

```

### Remove attribute from the set of elements

#### jQuery

```js
elements.removeAttr('foo');

```

#### Vanilla ES6+

```js
elements.forEach(x => x.removeAttribute('foo'));

```

#### Vanilla ES5

```js
elements.forEach(function(element) {
    element.removeAttribute('foo');
});

```

## val[#](#val)

Get the current value of the first element in the set of matched elements or set the value of every matched element.

### Get element value

#### jQuery

```js
var value = element.val();

```

#### Vanilla JS

```js
var value = element.value;

```

### Set value to a single element

#### jQuery

```js
element.val('foo');

```

#### Vanilla JS

```js
element.value = 'foo';

```

### Set value to the set of elements

#### jQuery

```js
elements.val('foo');

```

#### Vanilla ES6+

```js
elements.forEach(x => x.value = 'foo');

```

#### Vanilla ES5

```js
elements.forEach(function(element) {
    element.value = 'foo';
});

```

# Class attribute[#](#class-attribute)

These methods inspect and manipulate the CSS classes assigned to elements.

## addClass[#](#addclass)

Adds the specified class(es) to each element in the set of matched elements.

### Add single class

#### jQuery

```js
element.addClass('foo');

```

#### Vanilla JS

```js
element.classList.add('foo');

```

### Add multiple classes

#### jQuery

```js
element.addClass('a b c');

```

#### Vanilla JS

```js
element.classList.add('a', 'b', 'c');

```

### Add class to the set of elements

#### jQuery

```js
elements.addClass('foo');

```

#### Vanilla ES6+

```js
elements.forEach(x => x.classList.add('foo'));

```

#### Vanilla ES5

```js
elements.forEach(function(element) {
    element.classList.add('foo');
});

```

## removeClass[#](#removeclass)

Remove a single class, multiple classes, or all classes from each element in the set of matched elements.

### Remove single class

#### jQuery

```js
element.removeClass('foo');

```

#### Vanilla JS

```js
element.classList.remove('foo');

```

### Remove multiple classes

#### jQuery

```js
element.removeClass('a b c');

```

#### Vanilla JS

```js
element.classList.remove('a', 'b', 'c');

```

### Remove class from the set of elements

#### jQuery

```js
elements.removeClass('foo');

```

#### Vanilla ES6+

```js
elements.forEach(x => x.classList.remove('foo'));

```

#### Vanilla ES5

```js
elements.forEach(function(element) {
    element.classList.remove('foo');
});

```

## toggleClass[#](#toggleclass)

Add or remove one or more classes from each element in the set of matched elements, depending on either the class’s presence or the value of the state argument.

### Toggle class

#### jQuery

```js
element.toggleClass('foo');

```

#### Vanilla JS

```js
element.classList.toggle('foo');

```

### Conditionally toggle class

#### jQuery

```js
element.toggleClass('foo', true);
element.toggleClass('foo', false);

```

#### Vanilla JS

```js
element.classList.toggle('foo', true);
element.classList.toggle('foo', false);

```

### Toggle class on the set of elements

#### jQuery

```js
elements.toggleClass('foo');

```

#### Vanilla ES6+

```js
elements.forEach(x => x.classList.toggle('foo'));

```

#### Vanilla ES5

```js
elements.forEach(function(element) {
    element.classList.toggle('foo');
});

```

## hasClass[#](#hasclass)

Determine whether any of the matched elements are assigned the given class.

### Check if single element has certain class

#### jQuery

```js
var has = element.hasClass('foo');

```

#### Vanilla JS

```js
var has = element.classList.contains('foo');

```

### Check if at least one of elements in the set has certain class

#### jQuery

```js
var has = elements.hasClass('foo');

```

#### Vanilla ES6+

```js
var has = elements.some(x => x.classList.contains('foo'));

```

#### Vanilla ES5

```js
var has = elements.some(function(element) {
    return element.classList.contains('foo');
});

```
# Insertion inside[#](#insertion-inside)

These methods allow us to insert new content inside an existing element.

## append[#](#append)

Insert content, specified by the parameter, to the end of each element in the set of matched elements.

### Append element to single target

#### jQuery

```js
target.append(element);

```

#### Vanilla JS

```js
target.append(element);

```

### Append element to the set of targets

#### jQuery

```js
targets.append(element);

```

#### Vanilla ES6+

```js
for (var target of targets)
    target.append(element.cloneNode(true));
element.remove();

```

#### Vanilla ES5

```js
targets.forEach(function(target) {
    target.append(element.cloneNode(true));
});
element.remove();

```

Element is removed before insertion. So if we want to emulate jQuery behavior(insert the same element multiple times), we must clone it before every insertion and finally remove the original element.

## appendTo[#](#appendto)

Insert every element in the set of matched elements to the end of the target.

### Append single element to target

#### jQuery

```js
element.appendTo(target);

```

#### Vanilla JS

```js
target.append(element);

```

### Append the set of elements to target

#### jQuery

```js
elements.appendTo(target);

```

#### Vanilla ES6+

```js
elements.forEach(x => target.append(x));

```

#### Vanilla ES5

```js
elements.forEach(function(element) {
    target.append(element);
});

```

## prepend[#](#prepend)

Insert content, specified by the parameter, to the beginning of each element in the set of matched elements.

### Prepend element to single target

#### jQuery

```js
target.prepend(element);

```

#### Vanilla JS

```js
target.prepend(element);

```

### Prepend element to the set of targets

#### jQuery

```js
targets.prepend(element);

```

#### Vanilla ES6+

```js
for (var target of targets)
    target.prepend(element.cloneNode(true));
element.remove();

```

#### Vanilla ES5

```js
targets.forEach(function(target) {
    target.prepend(element.cloneNode(true));
});
element.remove();

```

Element is removed before insertion. So if we want to emulate jQuery behavior(insert the same element multiple times), we must clone it before every insertion and finally remove the original element.

## prependTo[#](#prependto)

Insert every element in the set of matched elements to the beginning of the target.

### Prepend single element to target

#### jQuery

```js
element.prependTo(target);

```

#### Vanilla JS

```js
target.prepend(element);

```

### Prepend the set of elements to target

#### jQuery

```js
elements.prependTo(target);

```

#### Vanilla ES6+

```js
elements.forEach(x => target.prepend(x));

```

#### Vanilla ES5

```js
elements.forEach(function(element) {
    target.prepend(element);
});

```

## html[#](#html)

Get the HTML contents of the first element in the set of matched elements or set the HTML contents of every matched element.

### Get element HTML

#### jQuery

```js
var html = element.html();

```

#### Vanilla JS

```js
var html = element.innerHTML;

```

### Set element HTML

#### jQuery

```js
element.html('<p>foo</p>');

```

#### Vanilla JS

```js
element.innerHTML = '<p>foo</p>';

```

### Set HTML to the set of elements

#### jQuery

```js
elements.html('<p>foo</p>');

```

#### Vanilla ES6+

```js
elements.forEach(x => x.innerHTML = '<p>foo</p>');

```

#### Vanilla ES5

```js
elements.forEach(function(element) {
    element.innerHTML = '<p>foo</p>';
});

```

## text[#](#text)

Get the combined text contents of each element in the set of matched elements, including their descendants, or set the text contents of the matched elements.

### Get element text

#### jQuery

```js
var text = element.text();

```

#### Vanilla JS

```js
var text = element.textContent;

```

### Get text from the set of elements

#### jQuery

```js
var text = elements.text();

```

#### Vanilla ES6+

```js
var text = elements.map(x => x.textContent).join('');

```

#### Vanilla ES5

```js
var text = elements.map(function(element) {
    return element.textContent;
}).join('');

```

### Set element text

#### jQuery

```js
element.text('foo');

```

#### Vanilla JS

```js
element.textContent = 'foo';

```

### Set text to the set of elements

#### jQuery

```js
elements.text('foo');

```

#### Vanilla ES6+

```js
elements.forEach(x => x.textContent = 'foo');

```

#### Vanilla ES5

```js
elements.forEach(function(element) {
    element.textContent = 'foo';
});

```
# Insertion outside[#](#insertion-outside)

These methods allow us to insert new content outside an existing element.

## before[#](#before)

Insert content, specified by the parameter, before each element in the set of matched elements.

### Insert element before single target

#### jQuery

```js
target.before(element);

```

#### Vanilla JS

```js
target.before(element);

```

### Insert element before the set of targets

#### jQuery

```js
targets.before(element);

```

#### Vanilla ES6+

```js
for (var target of targets)
    target.before(element.cloneNode(true));
element.remove();

```

#### Vanilla ES5

```js
targets.forEach(function(target) {
    target.before(element.cloneNode(true));
});
element.remove();

```

Element is removed before insertion. So if we want to emulate jQuery behavior(insert the same element multiple times), we must clone it before every insertion and finally remove the original element.

## insertBefore[#](#insertbefore)

Insert every element in the set of matched elements before the target.

### Insert single element before target

#### jQuery

```js
element.insertBefore(target);

```

#### Vanilla JS

```js
target.before(element);

```

### Insert the set of elements before target

#### jQuery

```js
elements.insertBefore(target);

```

#### Vanilla ES6+

```js
elements.forEach(x => target.before(x));

```

#### Vanilla ES5

```js
elements.forEach(function(element) {
    target.before(element);
});

```

## after[#](#after)

Insert content, specified by the parameter, after each element in the set of matched elements.

### Insert element after single target

#### jQuery

```js
target.after(element);

```

#### Vanilla JS

```js
target.after(element);

```

### Insert element after the set of targets

#### jQuery

```js
targets.after(element);

```

#### Vanilla ES6+

```js
for (var target of targets)
    target.after(element.cloneNode(true));
element.remove();

```

#### Vanilla ES5

```js
targets.forEach(function(target) {
    target.after(element.cloneNode(true));
});
element.remove();

```

Element is removed before insertion. So if we want to emulate jQuery behavior(insert the same element multiple times), we must clone it before every insertion and finally remove the original element.

## insertAfter[#](#insertafter)

Insert every element in the set of matched elements after the target.

### Insert single element after target

#### jQuery

```js
element.insertAfter(target);

```

#### Vanilla JS

```js
target.after(element);

```

### Insert the set of elements after the target

#### jQuery

```js
elements.insertAfter(target);

```

#### Vanilla ES6+

```js
elements.forEach(x => target.after(x));

```

#### Vanilla ES5

```js
elements.forEach(function(element) {
    target.after(element);
});

```
# Insertion around[#](#insertion-around)

These methods allow us to insert new content surrounding existing content.

## wrap[#](#wrap)

Wrap an HTML structure around each element.

#### jQuery

```js
element.wrap('<div>');

```

#### Vanilla JS

Quick & dirty way. Destroys all event hooks, etc. Use with caution:

```js
element.outerHTML = '<div>' + element.outerHTML + '</div>';

```

Safe approach:

```js
var wrapper = document.createElement('div');
element.before(wrapper);
wrapper.append(element);

```

## wrapAll[#](#wrapall)

Wrap an HTML structure around all elements in the set.

#### jQuery

```js
elements.wrapAll('<div>');

```

#### Vanilla ES6+

```js
var wrapper = document.createElement('div');
elements[0].before(wrapper);
elements.forEach(x => wrapper.append(x));

```

#### Vanilla ES5

```js
var wrapper = document.createElement('div');
elements[0].before(wrapper);
elements.forEach(function(element) {
    wrapper.append(element);
});

```

## wrapInner[#](#wrapinner)

Wrap an HTML structure around the content of each element.

#### jQuery

```js
element.wrapInner('<div>');

```

#### Vanilla JS

Quick & dirty way. Destroys all event hooks, etc. Use with caution:

```js
element.innerHTML = '<div>' + element.innerHTML + '</div>';

```

Safe approach:

```js
var wrapper = document.createElement('div');
while (element.firstChild)
    wrapper.append(element.firstChild);
element.append(wrapper);

```

## unwrap[#](#unwrap)

Remove the parents of the set of matched elements from the DOM, leaving the matched elements in their place.

#### jQuery

```js
element.unwrap();

```

#### Vanilla JS

Quick & dirty way. Destroys all event hooks, etc. Use with caution:

```js
element.parentElement.outerHTML = element.parentElement.innerHTML;

```

Safe approach:

```js
var wrapper = element.parentElement;
while (wrapper.firstChild)
    wrapper.before(wrapper.firstChild);
wrapper.remove();

```
# Removal[#](#removal)

These methods allow us to delete elements from the DOM.

## detach[#](#detach)

Detach the set of matched elements from the DOM while preserving all the data and events.

### Detach single element

#### jQuery

```js
element.detach();

```

#### Vanilla JS

```js
element.remove();

```

### Detach the set of elements

#### jQuery

```js
elements.detach();

```

#### Vanilla ES6+

```js
elements.forEach(x => x.remove());

```

#### Vanilla ES5

```js
elements.forEach(function(element) {
    element.remove();
});

```

## remove[#](#remove)

Remove the set of matched elements from the DOM while **not preserving** any associated data or events.

### Remove single element

#### jQuery

```js
element.remove();

```

#### Vanilla JS

```
// No equivalent

```

### Remove the set of elements

#### jQuery

```js
elements.remove();

```

#### Vanilla JS

```
// No equivalent

```

## empty[#](#empty)

Remove all child nodes of the set of matched elements from the DOM.

### Empty single element

#### jQuery

```js
element.empty();

```

#### Vanilla JS

```js
element.innerHTML = '';

```

### Empty the set of elements

#### jQuery

```js
elements.empty();

```

#### Vanilla ES6+

```js
elements.forEach(x => x.innerHTML = '');

```

#### Vanilla ES5

```js
elements.forEach(function(element) {
    element.innerHTML = '';
});

```
# Replacement[#](#replacement)

These methods are used to remove content from the DOM and replace it with new content.

## replaceWith[#](#replacewith)

Replace each element in the set of matched elements with the provided new content and return the set of elements that was removed.

### Replace single element

#### jQuery

```js
target.replaceWith(element);

```

#### Vanilla JS

```js
target.replaceWith(element);

```

### Replace each element in the set

#### jQuery

```js
targets.replaceWith(element);

```

#### Vanilla ES6+

```js
for (var target of targets)
    target.replaceWith(element.cloneNode(true));
element.remove();

```

#### Vanilla ES5

```js
targets.forEach(function(target) {
    target.replaceWith(element.cloneNode(true));
});
element.remove();

```

Element is removed before replacement. So if we want to emulate jQuery behavior(replace with the same element multiple times), we must clone it before every replacement and finally remove the original element.

## replaceAll[#](#replaceall)

Replace each target element with the set of matched elements.

### Replace a single target

#### jQuery

```js
element.replaceAll(target);

```

#### Vanilla JS

```js
target.replaceWith(element);

```

### Replace the set of targets

#### jQuery

```js
element.replaceAll(targets);

```

#### Vanilla ES6+

```js
for (var target of targets)
    target.replaceWith(element.cloneNode(true));
element.remove();

```

#### Vanilla ES5

```js
targets.forEach(function(target) {
    target.replaceWith(element.cloneNode(true));
});
element.remove();

```

Element is removed before replacement. So if we want to emulate jQuery behavior(replace with the same element multiple times), we must clone it before every replacement and finally remove the original element.


# Tree traversal[#](#tree-traversal)

## children[#](#children)

Get the children of each element in the set of matched elements, optionally filtered by a selector.

### Get single element children

#### jQuery

```js
var children = element.children();

```

#### Vanilla JS

```js
var children = element.children;

```

### Get single element children filtered by selector

#### jQuery

```js
var children = element.children('div');

```

#### Vanilla JS

```js
var children = element.querySelectorAll('> div');

```

### Get children from the set of elements

#### jQuery

```js
var children = elements.children();

```

#### Vanilla ES6+

```js
var children = elements.map(x => [...x.children]);
children = [].concat(...children);

```

#### Vanilla ES5

```js
var children = elements.reduce(function(result, element) {
    return result.concat([].slice.call(element.children));
}, []);

```

Element children is a [HTMLCollection](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection), which is an array-like object, so we can't call array manipulation methods directly.

### Get children filtered by selector from the set of elements

#### jQuery

```js
var children = elements.children('div');

```

#### Vanilla ES6+

```js
var children = elements.map(x => x.querySelectorAll('> div'));
children = [].concat(...children);

```

#### Vanilla ES5

```js
var children = elements.reduce(function(result, element) {
    return result.concat(element.querySelectorAll('> div'));
}, []);

```

## contents[#](#contents)

Get the children of each element in the set of matched elements, including text and comment nodes.

### Get single element contents

#### jQuery

```js
var contents = element.contents();

```

#### Vanilla JS

```js
var contents = element.childNodes;

```

### Get multiple element contents

#### jQuery

```js
var contents = elements.contents();

```

#### Vanilla ES6+

```js
var contents = elements.map(x => [...x.childNodes]);
contents = [].concat(...contents);

```

#### Vanilla ES5

```js
var contents = elements.reduce(function(result, element) {
    return result.concat([].slice.call(element.childNodes));
}, []);

```

Element child nodes is a [NodeList](https://developer.mozilla.org/en-US/docs/Web/API/NodeList), which is an array-like object, so we can't call array manipulation methods directly.

## closest[#](#closest)

For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.

### Get closest matching parent for single element

#### jQuery

```js
var closest = element.closest('div');

```

#### Vanilla JS

```js
var closest = element.closest('div');

```

### Get closest matching parent for the set of elements

#### jQuery

```js
var closest = elements.closest('div');

```

#### Vanilla ES6+

```js
var closest = elements.map(x => x.closest('div'));

```

#### Vanilla ES5

```js
var closest = elements.map(function(element) {
    return element.closest('div');
});

```

## find[#](#find)

Get the descendants of each element in the current set of matched elements, filtered by a selector, jQuery object, or element.

### Find descendants in single element

#### jQuery

```js
var found = element.find('div');

```

#### Vanilla JS

```js
var found = element.querySelectorAll('div');

```

### Find descendants in the the set of elements

#### jQuery

```js
var found = elements.find('div');

```

#### Vanilla ES6+

```js
var found = elements.map(x => x.querySelectorAll('div'));
found = [].concat(...found);

```

#### Vanilla ES5

```js
var found = elements.reduce(function(result, element) {
    return result.concat(element.querySelectorAll('div'));
}, []);

```

## next[#](#next)

Get the immediately following sibling of each element in the set of matched elements. If a selector is provided, it retrieves the next sibling only if it matches that selector.

### Get next sibling for single element

#### jQuery

```js
var next = element.next();

```

#### Vanilla JS

```js
var next = element.nextElementSibling;

```

### Get next sibling filtered by selector for single element

#### jQuery

```js
var next = element.next('div');

```

#### Vanilla JS

```js
var next = element.query('+ div');

```

### Get next sibling for each element in the set

#### jQuery

```js
var next = elements.next();

```

#### Vanilla ES6+

```js
var next = elements
    .map(x => x.nextElementSibling)
    .filter(x => x);

```

#### Vanilla ES5

```js
var next = [];
elements.forEach(function(element) {
    if (element.nextElementSibling)
        next.push(element.nextElementSibling);
});

```

### Get next sibling filtered by selector for each element in the set

#### jQuery

```js
var next = elements.next('div');

```

#### Vanilla ES6+

```js
var next = elements
    .map(x => x.query('+ div'))
    .filter(x => x);

```

#### Vanilla ES5

```js
var next = [];
elements.forEach(function(element) {
    if (element.nextElementSibling && element.nextElementSibling.matches('div'))
        next.push(element.nextElementSibling);
});

```

## nextAll[#](#nextall)

Get all following siblings of each element in the set of matched elements, optionally filtered by a selector.

### Get all following siblings for single element

#### jQuery

```js
var next = element.nextAll();

```

#### Vanilla JS

```js
var next = element.querySelectorAll('~ *');

```

### Get all following siblings filtered by selector for single element

#### jQuery

```js
var next = element.nextAll('div');

```

#### Vanilla JS

```js
var next = element.querySelectorAll('~ div');

```

### Get all following siblings for the set of elements

#### jQuery

```js
var next = elements.nextAll();

```

#### Vanilla ES6+

```js
var next = elements.map(x => x.querySelectorAll('~ *'));
next = [].concat(...next);

```

#### Vanilla ES5

```js
var next = elements.map(function(element) {
    return element.querySelectorAll('~ *'));
});
next = [].concat.apply([], next);

```

### Get all following siblings filtered by selector for the set of elements

#### jQuery

```js
var next = elements.nextAll('div');

```

#### Vanilla ES6+

```js
var next = elements.map(x => x.querySelectorAll('~ div'));
next = [].concat(...next);

```

#### Vanilla ES5

```js
var next = elements.map(function(element) {
    return element.querySelectorAll('~ div'));
});
next = [].concat.apply([], next);

```

## nextUntil[#](#nextuntil)

Get all following siblings of each element up to but not including the element matched by the selector, DOM node, or jQuery object passed.

### Get all following siblings bounded by selector for single element

#### jQuery

```js
var next = element.nextUntil('div');

```

#### Vanilla JS

```js
var next = [];
while (element.nextElementSibling && !element.nextElementSibling.matches('div'))
    next.push(element = element.nextElementSibling);

```

### Get all following siblings bounded by selector for the set of elements

#### jQuery

```js
var next = elements.nextUntil('div');

```

#### Vanilla JS

```js
var next = elements.reduce(function(result, element) {
    while (element.nextElementSibling && !element.nextElementSibling.matches('div'))
        result.push(element = element.nextElementSibling);
    return result;
}, []);

```

## prev[#](#prev)

Get the immediately preceding sibling of each element in the set of matched elements, optionally filtered by a selector.

### Get previous sibling for single element

#### jQuery

```js
var prev = element.prev();

```

#### Vanilla JS

```js
var prev = element.previousElementSibling;

```

### Get previous sibling filtered by selector for single element

#### jQuery

```js
var prev = element.prev('div');

```

#### Vanilla JS

```js
var prev = element.previousElementSibling;
prev = prev && prev.matches('div') ? prev : null;

```

### Get previous sibling for each element in the set

#### jQuery

```js
var prev = elements.prev();

```

#### Vanilla ES6+

```js
var prev = elements
    .map(x => x.previousElementSibling)
    .filter(x => x);

```

#### Vanilla ES5

```js
var prev = [];
elements.forEach(function(element) {
    if (element.previousElementSibling)
        prev.push(element.previousElementSibling);
});

```

### Get previous sibling filtered by selector for each element in the set

#### jQuery

```js
var prev = elements.prev('div');

```

#### Vanilla ES6+

```js
var prev = elements
    .map(x => x.previousElementSibling)
    .filter(x => x && x.matches('div'));

```

#### Vanilla ES5

```js
var prev = [];
elements.forEach(function(element) {
    if (element.previousElementSibling && element.previousElementSibling.matches('div'))
        prev.push(sibling);
});

```

## prevAll[#](#prevall)

Get all preceding siblings of each element in the set of matched elements, optionally filtered by a selector.

### Get all preceding siblings for single element

#### jQuery

```js
var prev = element.prevAll();

```

#### Vanilla JS

```js
var prev = [];
while (element.previousElementSibling)
    prev.push(element = element.previousElementSibling);

```

### Get all preceding siblings filtered by selector for single element

#### jQuery

```js
var prev = element.prevAll('div');

```

#### Vanilla JS

```js
var prev = [];
while (element.previousElementSibling && element.previousElementSibling.matches('div'))
    prev.push(element = element.previousElementSibling);

```

### Get all preceding siblings for the set of elements

#### jQuery

```js
var prev = elements.prevAll();

```

#### Vanilla JS

```js
var prev = elements.reduce(function(result, element) {
    while (element.previousElementSibling)
        result.push(element = element.previousElementSibling);
    return result;
}, []);

```

### Get all preceding siblings filtered by selector for the set of elements

#### jQuery

```js
var prev = elements.prevAll('div');

```

#### Vanilla JS

```js
var prev = elements.reduce(function(result, element) {
    while (element.previousElementSibling && element.previousElementSibling.matches('div'))
        result.push(element = element.previousElementSibling);
    return result;
}, []);

```

## prevUntil[#](#prevuntil)

Get all preceding siblings of each element up to but not including the element matched by the selector, DOM node, or jQuery object.

### Get all preceding siblings bounded by selector for single element

#### jQuery

```js
var prev = element.prevUntil('div');

```

#### Vanilla JS

```js
var prev = [];
while (element.previousElementSibling && !element.previousElementSibling.matches('div'))
    prev.push(element = element.previousElementSibling);

```

### Get all preceding siblings bounded by selector for the set of elements

#### jQuery

```js
var prev = elements.prevUntil('div');

```

#### Vanilla JS

```js
var prev = elements.reduce(function(result, element) {
    while (element.previousElementSibling && !element.previousElementSibling.matches('div'))
        result.push(element = element.previousElementSibling);
    return result;
}, []);

```

## parent[#](#parent)

Get the parent of each element in the current set of matched elements, optionally filtered by a selector.

### Get single element parent

#### jQuery

```js
var parent = element.parent();

```

#### Vanilla JS

```js
var parent = element.parentElement;

```

### Get single element parent filtered by selector

#### jQuery

```js
var parent = element.parent('div');

```

#### Vanilla JS

```js
var parent = element.parentElement;
parent = parent.matches('div') ? parent : null;

```

### Get parent for each element in the set

#### jQuery

```js
var parent = elements.parent();

```

#### Vanilla ES6+

```js
var parents = elements.map(x => x.parentElement);
parents = [...new Set(parents)];

```

#### Vanilla ES5

```js
var parents = [];
elements.forEach(function(element) {
    if (parents.indexOf(element.parentElement) == -1)
        parents.push(element.parentElement);
});

```

### Get parent filtered by selector for each element in the set

#### jQuery

```js
var parent = elements.parent('div');

```

#### Vanilla ES6+

```js
var parents = elements
    .map(x => x.parentElement)
    .filter(x => x.matches('div'));
parents = [...new Set(parents)];

```

#### Vanilla ES5

```js
var parents = [];
elements.forEach(function(element) {
    var parent = element.parentElement;
    if (parent.matches('div') && parents.indexOf(parent) == -1)
        parents.push(parent);
});

```

## parents[#](#parents)

Get the ancestors of each element in the current set of matched elements, optionally filtered by a selector.

### Get single element ancestors

#### jQuery

```js
var parents = element.parents();

```

#### Vanilla JS

```js
var parents = [];
while (element.parentElement)
    parents.push(element = element.parentElement);

```

### Get single element ancestors filtered by selector

#### jQuery

```js
var parents = element.parents('div');

```

#### Vanilla JS

```js
var parents = [];
while (element = element.parentElement.closest('div'))
    parents.push(element);

```

### Get ancestors for each element in the set

#### jQuery

```js
var parents = elements.parents();

```

#### Vanilla ES6+

```js
var parents = elements
    .map(x => x.parentElement)
    .filter(x => x);
parents = [...new Set(parents)];

```

#### Vanilla ES5

```js
var parents = [];
elements.forEach(function(element) {
    while (element.parentElement && parents.indexOf(element.parentElement) == -1)
        parents.push(element = element.parentElement);
});

```

### Get ancestors filtered by selector for each element in the set

#### jQuery

```js
var parents = elements.parents('div');

```

#### Vanilla ES6+

```js
var parents = elements
    .filter(x => x.parentElement)
    .map(x => x.parentElement.closest('div'))
    .filter(x => x);
parents = [...new Set(parents)];

```

#### Vanilla ES5

```js
var parents = [];
elements.forEach(function(element) {
    while (element = element.parentElement.closest('div'))
        if (parents.indexOf(element) == -1)
            parents.push(element);
});

```

## parentsUntil[#](#parentsuntil)

Get the ancestors of each element in the current set of matched elements, up to but not including the element matched by the selector, DOM node, or jQuery object.

### Get all ancestors bounded by selector for single element

#### jQuery

```js
var parents = element.parentsUntil('div');

```

#### Vanilla JS

```js
var parents = [];
while (element.parentElement && !element.parentElement.matches('div'))
    parents.push(element = element.parentElement);

```

### Get all ancestors bounded by selector for the set of elements

#### jQuery

```js
var parents = elements.parentsUntil('div');

```

#### Vanilla ES6+

```js
var parents = [];
for (var element of elements)
    while (element.parentElement && !element.parentElement.matches('div') && parents.indexOf(element.parentElement) == -1)
        parents.push(element = element.parentElement);

```

#### Vanilla ES5

```js
var parents = [];
elements.forEach(function(element) {
    while (element.parentElement && !element.parentElement.matches('div') && parents.indexOf(element.parentElement) == -1)
        parents.push(element = element.parentElement);
});

```

## siblings[#](#siblings)

Get the siblings of each element in the set of matched elements, optionally filtered by a selector.

### Get single element siblings

#### jQuery

```js
var siblings = element.siblings();

```

#### Vanilla ES6+

```js
var siblings = Array
    .from(element.parentElement.children)
    .filter(x => x != element);

```

#### Vanilla ES5

```js
var siblings = [].slice.call(element.parentElement.children);
siblings.splice(siblings.indexOf(element), 1);

```

Element children is a [HTMLCollection](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection), which is an array-like object, so we can't call array manipulation methods directly.

### Get single element siblings filtered by selector

#### jQuery

```js
var siblings = element.siblings('div');

```

#### Vanilla ES6+

```js
var siblings = Array
    .from(element.parentElement.children)
    .filter(x => x != element && x.matches('div'));

```

#### Vanilla ES5

```js
var siblings = [].filter.call(element.parentElement.children, function(sibling) {
    return sibling != element && sibling.matches('div');
});

```

### Get siblings for each element in the set

#### jQuery

```js
var siblings = elements.siblings();

```

#### Vanilla ES6+

```js
var siblings = [];
for (var element of elements)
    for (var sibling of element.parentElement.children)
        if (siblings.indexOf(sibling) == -1 && sibling != element)
            siblings.push(sibling);

```

#### Vanilla ES5

```js
var siblings = [];
elements.forEach(function(element) {
    [].forEach.call(element.parentElement.children, function(sibling) {
        if (siblings.indexOf(sibling) == -1 && sibling != element)
            siblings.push(sibling);
    });
});

```

### Get siblings filtered by selector for each element in the set

#### jQuery

```js
var siblings = elements.siblings('div');

```

#### Vanilla ES6+

```js
var siblings = [];
for (var element of elements)
    for (var sibling of element.parentElement.children)
        if (siblings.indexOf(sibling) == -1 && sibling.matches('div') && sibling != element)
            siblings.push(sibling);

```

#### Vanilla ES5

```js
var siblings = [];
elements.forEach(function(element) {
    [].forEach.call(element.parentElement.children, function(sibling) {
        if (siblings.indexOf(sibling) == -1 && sibling.matches('div') && sibling != element)
            siblings.push(sibling);
    });
});

```
# Filtering[#](#filtering)

## eq[#](#eq)

Reduce the set of matched elements to the one at the specified index.

#### jQuery

```js
var element = elements.eq(2);

```

#### Vanilla JS

```js
var element = elements[2];

```

## first[#](#first)

Reduce the set of matched elements to the first in the set.

#### jQuery

```js
var element = elements.first();

```

#### Vanilla JS

```js
var element = elements[0];

```

## last[#](#last)

Reduce the set of matched elements to the final one in the set.

#### jQuery

```js
var element = elements.last();

```

#### Vanilla JS

```js
var element = elements.slice(-1);

```

## slice[#](#slice)

Reduce the set of matched elements to a subset specified by a range of indices.

#### jQuery

```js
var subset = elements.slice(1, 3);

```

#### Vanilla JS

```js
var subset = elements.slice(1, 3);

```

## is[#](#is)

Check the current matched set of elements against a selector, element, or jQuery object and return true if at least one of these elements matches the given arguments.

### Check if single element match

#### jQuery

```js
var is = element.is('div');

```

#### Vanilla JS

```js
var is = element.matches('div');

```

### Check if at least one of elements in the set match

#### jQuery

```js
var is = elements.is('div');

```

#### Vanilla ES6+

```js
var is = elements.some(x => x.matches('div'));

```

#### Vanilla ES5

```js
var is = elements.some(function(element) {
    return element.matches('div');
});

```

## has[#](#has)

Reduce the set of matched elements to those that have a descendant that matches the selector or DOM element.

#### jQuery

```js
var found = elements.has('div');

```

#### Vanilla ES6+

```js
var found = elements.filter(x => x.query('div'));

```

#### Vanilla ES5

```js
var found = elements.filter(function(element) {
    return element.query('div');
});

```

## not[#](#not)

Remove elements from the set of matched elements.

#### jQuery

```js
var found = elements.not('div');

```

#### Vanilla ES6+

```js
var found = elements.filter(x => !x.matches('div'));

```

#### Vanilla ES5

```js
var found = elements.filter(function(element) {
    return !element.matches('div');
});

```

## filter[#](#filter)

Reduce the set of matched elements to those that match the selector or pass the function’s test.

#### jQuery

```js
var found = elements.filter('div');

```

#### Vanilla ES6+

```js
var found = elements.filter(x => x.matches('div'));

```

#### Vanilla ES5

```js
var found = elements.filter(function(element) {
    return element.matches('div');
});

```

## map[#](#map)

Pass each element in the current matched set through a function, producing a new jQuery object containing the return values.

#### jQuery

```js
var result = elements.map(function() {
    return this.id;
});

```

#### Vanilla ES6+

```js
var result = elements.map(x => x.id);

```

#### Vanilla ES5

```js
var result = elements.map(function(element) {
    return element.id;
});

```
# Style properties[#](#style-properties)

These methods get and set CSS-related properties of elements.

## css[#](#css)

Get the value of a computed style property for the first element in the set of matched elements or set one or more CSS properties for every matched element.

### Get CSS property value

#### jQuery

```js
var color = element.css('color');

```

#### Vanilla JS

```js
var color = getComputedStyle(element).color;

```

### Set single element CSS property value

#### jQuery

```js
element.css('color', 'yellow');

```

#### Vanilla JS

```js
element.style.color = 'yellow';

```

### Set CSS property value for the set of elements

#### jQuery

```js
elements.css('color', 'yellow');

```

#### Vanilla ES6+

```js
elements.forEach(x => x.style.color = 'yellow');

```

#### Vanilla ES5

```js
elements.forEach(function(element) {
    element.style.color = 'yellow';
});

```

## width[#](#width)

Get the current computed width for the first element in the set of matched elements or set the width of every matched element.

### Get element width

#### jQuery

```js
var width = element.width();

```

#### Vanilla JS

```js
var width = parseInt(getComputedStyle(element).width);

```

### Set element width

#### jQuery

```js
element.width(500);

```

#### Vanilla JS

```js
element.style.width = '500px';

```

## height[#](#height)

Get the current computed height for the first element in the set of matched elements or set the height of every matched element.

### Get element height

#### jQuery

```js
var height = element.height();

```

#### Vanilla JS

```js
var height = parseInt(getComputedStyle(element).height);

```

### Set element height

#### jQuery

```js
element.height(500);

```

#### Vanilla JS

```js
element.style.height = '500px';

```

## innerWidth[#](#innerwidth)

Get the current computed inner width (including padding but not border) for the first element in the set of matched elements or set the inner width of every matched element.

### Get element inner width

#### jQuery

```js
var width = element.innerWidth();

```

#### Vanilla JS

```js
var width = element.clientWidth;

```

### Set element inner width

#### jQuery

```js
element.innerWidth(500);

```

#### Vanilla JS

```js
var width = parseInt(getComputedStyle(element).width);
var space = element.clientWidth - width;
element.style.width = (500 - space) + 'px';

```

## innerHeight[#](#innerheight)

Get the current computed inner height (including padding but not border) for the first element in the set of matched elements or set the inner height of every matched element.

### Get element inner height

#### jQuery

```js
var height = element.innerHeight();

```

#### Vanilla JS

```js
var height = element.clientHeight;

```

### Set element inner height

#### jQuery

```js
element.innerHeight(500);

```

#### Vanilla JS

```js
var height = parseInt(getComputedStyle(element).height);
var space = element.clientHeight - height;
element.style.height = (500 - space) + 'px';

```

## outerWidth[#](#outerwidth)

Get the current computed width for the first element in the set of matched elements, including padding and border.

### Get element outer width

#### jQuery

```js
var width = element.outerWidth();

```

#### Vanilla JS

```js
var width = element.offsetWidth;

```

### Set element outer width

#### jQuery

```js
element.outerWidth(500);

```

#### Vanilla JS

```js
var width = parseInt(getComputedStyle(element).width);
var space = element.offsetWidth - width;
element.style.width = (500 - space) + 'px';

```

## outerHeight[#](#outerheight)

Get the current computed height for the first element in the set of matched elements, including padding and border.

### Get element outer height

#### jQuery

```js
var height = element.outerHeight();

```

#### Vanilla JS

```js
var height = element.offsetHeight;

```

### Set element outer height

#### jQuery

```js
element.outerHeight(500);

```

#### Vanilla JS

```js
var height = parseInt(getComputedStyle(element).height);
var space = element.offsetHeight - height;
element.style.height = (500 - space) + 'px';

```

## scrollTop[#](#scrolltop)

Get the current vertical position of the scroll bar for the first element in the set of matched elements or set the vertical position of the scroll bar for every matched element.

### Get element vertical scroll position

#### jQuery

```js
var top = element.scrollTop();

```

#### Vanilla JS

```js
var top = element.scrollTop;

```

### Set element vertical scroll position

#### jQuery

```js
element.scrollTop(100);

```

#### Vanilla JS

```js
element.scrollTop = 100;

```

## scrollLeft[#](#scrollleft)

Get the current horizontal position of the scroll bar for the first element in the set of matched elements or set the horizontal position of the scroll bar for every matched element.

### Get element horizontal scroll position

#### jQuery

```js
var left = element.scrollLeft();

```

#### Vanilla JS

```js
var left = element.scrollLeft;

```

### Set element horizontal scroll position

#### jQuery

```js
element.scrollLeft(100);

```

#### Vanilla JS

```js
element.scrollLeft = 100;

```

## position[#](#position)

Get the current coordinates of the first element in the set of matched elements, relative to the offset parent.

#### jQuery

```js
var position = element.position();

```

#### Vanilla JS

```js
var position = {
    top: element.offsetTop,
    left: element.offsetLeft
};

```

## offset[#](#offset)

Get the current coordinates of the first element, or set the coordinates of every element, in the set of matched elements, relative to the document.

### Get element offset

#### jQuery

```js
var offset = element.offset();

```

#### Vanilla JS

```js
var rect = element.getBoundingClientRect();
var offset = {
    top: rect.top + document.body.scrollTop,
    left: rect.left + document.body.scrollLeft
};

```

### Set element offset

#### jQuery

```js
element.offset({
    top: 100,
    left: 100
});

```

#### Vanilla JS - fixed position

```js
element.style.top = '100px';
element.style.left = '100px';

```

#### Vanilla JS - absolute or relative position

```js
var rect = element.parentElement.getBoundingClientRect();
element.style.top = (100 - rect.top - document.body.scrollTop) + 'px';
element.style.left = (100 - rect.left - document.body.scrollLeft) + 'px';

```
# Events[#](#events)

These methods are used to register behaviors to take effect when the user interacts with the browser, and to further manipulate those registered behaviors.

## on[#](#on)

Attach an event handler function for one or more events to the selected elements.

### Attach an event handler

#### jQuery

```js
element.on('click', function() {
    alert('Hello!');
});

```

#### Vanilla JS

```js
element.addEventListener('click', function() {
    alert('Hello!');
});

```

### Attach single handler to multiple events

#### jQuery

```
$(element).on('mousedown mouseup', function(event) {
    console.log(event.type);
});

```

#### Vanilla JS

```
['mousedown', 'mouseup'].forEach(function(type) {
    element.addEventListener(type, function(event) {
        console.log(event.type);
    });
});

```

### Delegate event

Attach a handler to one or more events for all elements that match the selector, now or in the future, based on a specific set of root elements.

#### jQuery

```js
element.on('click', '.hello', function() {
    alert('Hello!');
});

```

#### Vanilla JS

```js
element.addEventListener('click', function(event) {
    if (event.target.matches('.hello')) {
        alert('Hello!');
        event.stopPropagation();
    }
});

```

## off[#](#off)

Remove an event handler.

#### jQuery

```js
element.off('click', handler);

```

#### Vanilla JS

```js
element.removeEventListener('click', handler);

```

## one[#](#one)

Attach a handler to an event for the elements. The handler is executed at most once per element.

#### jQuery

```js
element.one('click', function() {
    alert('Hello!');
});

```

#### Vanilla JS

```js
element.addEventListener('click', function(event) {
    alert('Hello!');
    event.target.removeEventListener(event.type, arguments.callee);
});

```

## trigger[#](#trigger)

Execute all handlers attached to the matched elements for the given event type.

#### jQuery

```js
element.trigger('click');

```

#### Vanilla JS

```js
element.dispatchEvent(new Event('click'));

```
