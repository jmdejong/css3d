# css3d

A webpage that uses css 3d transformations to render itself in 3d.

Css 3d transformations are not correctly supported in all browsers.  
At the time of writing, [Opera](http://www.opera.com/) has the best support for me.

Try it here: [tilde.town/~troido/css3d/](https://tilde.town/~troido/css3d/)

## Controls

WSQE for moving around, AD for turning left and right and RF for looking up and down.
Mouse dragging support will probably be added later.

## Loading other maps

other maps than the default can be loaded by adding a query parameter for map.
It will look in this map in the directory tilde.town/~troido/css3d/maps/ (locally: /home/troido/public_html/css3d/maps)

for example: [tilde.town/~troido/css3d/?map=othermap.js](https://tilde.town/~troido/css3d/?map=othermap.js) will load [tilde.town/~troido/css3d/maps/othermap.js](https://tilde.town/~troido/css3d/maps/othermap.js)

The directory /home/troido/public_html/css3d/maps has public write permissions, so other tilde users can create their own maps and make them loadable by copying them to this directory, or by making a symbolinc link.

## css3d model format

css3d loadable maps should be javascript files.

An example of a map is [tilde.town/~troido/css3d/maps/othermap.js](https://tilde.town/~troido/css3d/maps/othermap.js)

These javascript files should create an object called Map.
Map should have the property "models", which is a dictionary (just a js object) of models, and "root", which is the name of the model that should be used as main scene.

The "models" dictionary has as keys the name of a model, and as values the declaration.

This is an example of the tree model:  
    {
        "t": "compound", 
        "parts":[
            {
                "t": "wall",
                "x": -100,
                "z": -100,
                "x2": 100,
                "z2": 100,
                "top": -600,
                "bottom": 0,
                "ht": "img",
                "src": "resources/tree.png"
            },
            {
                "t": "wall",
                "x": -100,
                "z": 100,
                "x2": 100,
                "z2": -100,
                "top": -600,
                "bottom": 0,
                "ht": "img",
                "src": "resources/tree.png"
            }
        ]
    }

The program will turn that eventually into this html:  
    <div class="c3d" style="transform: translate3d(987px, 0px, 898px);">
        <img class="c3d" src="resources/tree.png" style="transform: translate3d(-100px, -600px, -100px) rotateY(-0.785398rad); width: 282px; height: 600px;">
        <img class="c3d" src="resources/tree.png" style="transform: translate3d(-100px, -600px, 100px) rotateY(0.785398rad); width: 282px; height: 600px;">
    </div>

The 't' property gives the type of the model.
Built in types are "base", "wall", "flat" and "compound".
However, any declared model can be used as a type.
The declared model is actually an extension of its type model.
Circular types will make the program crash (eg if model A is of type B and model B is of type A)

All built in types extend from "base".
This allows them the following properties:  
 - ht: html type. The type of html element this model will become
 - attr: html attributes. Set the attributes of this html node directly
 - style: object style. Set the style of this object directly. Though this could be implemented using attr, this way merging styles is possible
 - classes: classlist for node. Again, could be implemented with attr, but this allows merging.
 - html: the inner html for this node.
 - src: the src attribute. May be deprecated soon, set attr.src instead.
 All other built-ins have these properties
 
"wall" objects have these properties:  
 - x or x1: x position of the left side of the element.
 - z or z1: z position of the left side of the element.
 - x2: x position of the right side of the element. Defaults to x.
 - z2: z position of the right side of the element. Defaults to z.
 - top: y position of the top of the element. This is the vertical axis. NOTE: negative y position means higher.
 - bottom: y position of the bottom of the element. Must be larger (lower) than the top value. Defaults to 0.

"floor" objects have these properties:  
 - x or x1: x position of the left side of the element.
 - z or z1: z position of the top side of the element.
 - x2: x position of the right side of the element. Must be larger than x.
 - z2: z position of the bottom side of the element. Must be larger than z.
 - y: vertical positon of this plane. Defaults to 0.

"compound objects have these properties:  
 - x: x position. Defaults to 0.
 - z : z position. Defaults to 0.
 - y: y position. Defaults to 0.
 - parts: The parts that this model is made of. All parts will have a position relative to this element. Circular part references will make the program crash (eg if model A has a part of type B and model B has a part of type A)
