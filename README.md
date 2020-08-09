# ffclock
A simple clock to put somewhere in the ff toolbar. Meant to be used css like this:
```
/* Clock extension */
#clean_simple_clock-browser-action {
  height: 18px !important;
  margin: 0 !important;
}

#clean_simple_clock-browser-action  .toolbarbutton-badge-stack {
  display: none !important;
}

#clean_simple_clock-browser-action > .toolbarbutton-text {
  all: unset !important;
  display: -moz-box !important;
  padding: 0 2px !important;
  font-family: Monospace !important;
  font-size: 16px !important;
  pointer-events: none !important;
}
```
