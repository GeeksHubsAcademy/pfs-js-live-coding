# Js DOM Cheatsheet

#### Accessing Dom Elements

```javascript
// Returns a reference to the element by its ID.
document.getElementById('someid'); // $('#someId')

// Returns an array-like object of all child elements which have all of the given class names.
document.getElementsByClassName('someclass'); // $('.someId')

// Returns an HTMLCollection of elements with the given tag name.
document.getElementsByTagName('LI'); // $('LI')

// Returns the first element within the document that matches the specified group of selectors.
document.querySelector('.someclass'); // $('.someclass')

// Returns a list of the elements within the document (using depth-first pre-order traversal of the document's nodes)
// that match the specified group of selectors.
document.querySelectorAll('div.note, div.alert');
```
#### Grab Children/Parent Node(s)

```javascript
// Get child nodes
var stored = document.getElementById('someid');
var children = stored.childNodes;

// Get parent node
var parental = children.parentNode;
```
#### Create New DOM Elements

```javascript
// create new elments
var newHeading = document.createElement('h1');
var newParagraph = document.createElement('p');

// create text nodes for new elements
var h1Text= document.createTextNode('This is a nice header text!');
var pText= document.createTextNode('This is a nice paragraph text!');

// attach new text nodes to new elements
newHeading.appendChild(h1Text);
newParagraph.appendChild(pText);

// elements are now created and ready to be added to the DOM.
```
#### Add Elements to the DOM

```javascript
// grab element on page you want to add stuff to
var firstHeading = document.getElementById('firstHeading');

// add both new elements to the page as children to the element we stored in firstHeading.
firstHeading.appendChild(newHeading);
firstHeading.appendChild(newParagraph);

// can also insert before like so

// get parent node of firstHeading
var parent = firstHeading.parentNode;

// insert newHeading before FirstHeading
parent.insertBefore(newHeading, firstHeading);
```
#### Add Elements to the DOM cont.

Suppose you have the following HTML:
```html
<div id='box1'>
  <p>Some example text</p>
</div>
<div id='box2'>
  <p>Some example text</p>
</div>
```

You can insert another snippet of HTML between #box1 and #box2:

```javascript
var box2 = document.getElementById('box2');
box2.insertAdjacentHTML('beforebegin', '<div><p>This gets inserted.</p></div>');

// beforebegin - The HTML would be placed immediately before the element, as a sibling.
// afterbegin - The HTML would be placed inside the element, before its first child.
// beforeend - The HTML would be placed inside the element, after its last child.
// afterend - The HTML would be placed immediately after the element, as a sibling.
```
#### Add/Remove/Toggle/Check Classes

```javascript
// grab element on page you want to use
var firstHeading = document.getElementById('firstHeading');

// will remove foo if it is a class of firstHeading
firstHeading.classList.remove('foo');

// will add the class 'anotherClass' if one does not already exist
firstHeading.classList.add('anotherclass');

// add or remove multiple classes
firstHeading.classList.add('foo', 'bar');
firstHeading.classList.remove('foo', 'bar');

// if visible class is set remove it, otherwise add it
firstHeading.classList.toggle('visible');

// will return true if it has class of 'foo' or false if it does not
firstHeading.classList.contains('foo');
```
#### Events ([MDN Event reference](https://developer.mozilla.org/en-US/docs/Web/Events))

```javascript
var newElement = document.getElementsByTagName('h1');

newElement.onclick = function() {
  console.log('clicked');
};

var logEventType = function(e) {
    console.log('event type:', e.type);
};

newElement.addEventListener('focus', logEventType, false);
newElement.removeEventListener('focus', logEventType, false);

window.onload = function() {
  console.log('DOM loaded');
};
```
#### Timers

```javascript
function simpleMessage() {
  alert('This is just a simple alert');
}

// set time out
window.setTimeout(simpleMessage, 5000);

// if you wanted to clear the timer.
var timer = window.setTimeout(simpleMessage, 5000);
window.clearTimeout(timer);

// set interval. will repeat every  5000ms
window.setInterval(simpleMessage, 5000);

// if you wanted to clear the intervals.

var intervalHandler = window.setInterval(simpleMessage, 5000);
window.clearInterval(intervalHandle);
```

#### Throttle or Debounce Functions Calls

```javascript
var helpers = {
  /**
   * debouncing, executes the function if there was no new event in $wait milliseconds
   * @param func
   * @param wait
   * @param scope
   * @returns {Function}
   */
  debounce: function(func, wait, scope) {
    var timeout;
    return function() {
      var context = scope || this, args = arguments;
      var later = function() {
        timeout = null;
        func.apply(context, args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },

  /**
   * In case of a "storm of events", this executes once every $threshold
   * @param fn
   * @param threshold
   * @param scope
   * @returns {Function}
   */
  throttle: function(fn, threshold, scope) {
    threshold || (threshold = 250);
    var last, deferTimer;

    return function() {
      var context = scope || this;
      var now = +new Date, args = arguments;

      if (last && now < last + threshold) {
        // Hold on to it
        clearTimeout(deferTimer);
        deferTimer = setTimeout(function() {
          last = now;
          fn.apply(context, args);
        }, threshold);
      } else {
        last = now;
        fn.apply(context, args);
      }
    };
  }
};

var resizeHandler = function(){
  console.log('do stuff');
};

// Debounce by waiting 0.25s (250ms) with "this" context
window.addEventListener('resize', helpers.debounce(resizeHandler, 250, this));
```