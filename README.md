# Ember-purple-form

`ember-purple-form` is an ember-cli addon that provides a series of ember components that implement elements in Heroku's [Purple UI Kit](http://purple.herokuapp.com/).  It is very much a work in progress...

## Dependencies

`ember-purple-form` currently ships packaged with the styles and javascript from Purple, which give consuming applications access to its styles by default.  This could be changed, however.

## Usage

### Disclosed Form

A Disclosed Form houses more complex forms that are hidden behind a triggering element.  Here is an example implementation:

```handlebars
  {{#purple-disclosed
    toggleText="Add SSH Key"  // The text to display on the button that toggles the form to be displayed
    submitText="Save SSH Key" // The text to display on the button that submits the form
    cancelText="Cancel"       // The text to display on the button that cancels form submission
    save="save"}}             // The action on your route/controller to be invoked when the form is submitted

    // your form code that will be displayed when the component is toggled open

  {{/purple-disclosed}}
```

There are some limitations in the current API:
* The layout and style of the buttons is not customizable

### Inline Form

The Inline Form allows a user to edit a value inline, revealing form actions (submit/cancel) when a user clicks into the form element.  Here is an example implementation:

```handlebars
  {{purple-inline
      value=model.name  // The value from your to display in the input
      fieldName="name"  // The property on your model associated with the input
      cancel="cancel" // The action on your route/controller to be invoked when the form is cancelled
      save="save" // The action on your route/controller to be invoked when the form is submitted
      placeholder="Enter your Name" // Placeholder text to display in the input
    }}
```

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
