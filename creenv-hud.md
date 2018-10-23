# @creenv/hud

The HUD object can be used to regroup different elements from the **@creenv** Creative Environment. Any element added to the HUD must inherit the [@creenv/hud-element HUDElement class](https://github.com/bcrespy/creenv-hud-element).

  
Right now, @creenv supports officialy those elements:  
\* \[@creenv/gui GUI\]\(https://github.com/bcrespy/creenv-gui\) - a panel used to have a graphical control over parameters used within the algorithms\* \[@creenv/stats Stats\]\(https://github.com/bcrespy/creenv-stats\) - a wrapper of \[mrdoob stat.js\]\(https://github.com/mrdoob/stats.js\), used to display statistics about the render  
\#\# How to use  
\`\`\`jsimport HUD from "@creenv/hud";  
// hud elementsimport Stats from "@creenv/stats";import GUI from "@creenv/gui";  
  
let hud = new HUD\(\);  
let stats = new Stats\(\);hud.add\(stats\);  
let controls = /\* bla bla, see @creenv/gui for more details \*/;let gui = new GUI\(controls\);hud.add\(gui\);\`\`\`  
That is done, stats will be added to the page so will the controls.  
\#\# Full doc  
Following is a full list of \*\*@creenv/hud\*\* available methods.  
\_\_\_  
\#\#\# constructor \(\*\*visible\*\*: \*?boolean\*, \*\*toggleKey\*\*: \*?string\*, \*\*infoMessage\*\*: \*false\|string\*\)  
\| Name \| Type \| Def \| Default \|\| --- \| --- \| --- \| --- \|\| \*\*visible\*\* \| \*boolean\* \| \*\(Optional\)\* Weither the HUD is visible at first or not \| true \|\| \*\*toogleKey\*\* \| \*string\* \| \*\(Optional\)\* The key  
\_\_\_  
\#\#\# \*static\* Vector.fromVector \(\*vector\*: \*\*Vector\*\*\)  
Because we want the vector class to be as fast as possible, its constructor needs to perform as less actions as possible. In order to achieve such an effect, a "copy constructor" cannot be used because it would require some more tests and computations within the constructor. Therefore such a copy is possible through this static method  
\| Name \| Type \| Def \|\|---\|---\|---\|\*vector\* \| \*\*Vector\*\* \| The Vector to copy from \|  
  
\*\*@Return\*\* a new vector, which has the same components as \*vector\*.  
\_\_\_

