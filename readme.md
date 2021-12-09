# Survivalman

## Background

 Survivalman starts the player off in the wilderness with only a campfire and a spear. They need food, shelter, and water to keep themselves alive. Dehydration hits first, closely followed by hypothermia or heat exposure. Food is the most difficult thing to find, but you live longer without it than the other necessities. There will be nothing but your sense of direction to get you back to the warmth of your fire. There is no map, you can only see what is on the screen; when you wander in search of food and water, you have to remember how to get back.

The player needs food, water, and fire to survive.

The food, water, and fire meters tick down 
as the game goes on.

When one of these meters runs out, or if temp gets
to high, the game is over.

The player moves with mouse clicks.

Players can pick up food and a rock or spear
to use to hunt boars.

If the player is holding food, they can press
the "E" key to eat it and it adds a certain
amount of calories depending on what type it is.

If the player kills a boar they can cook the meat
on the fire by holding it and clicking on the fire.
When they click on the fire it starts cooking and
after a few seconds changes color to indicate 
that it is cooked.

If the player is standing close enough to water,
they automatically rehydrate and the hydration
meter goes up.

Throw spear/rock is available when holding that
item by pressing the "R" key and 

If the rock or spear hits a wild boar sprite,
the boar dissapears and boar meat is dropped.

The player sprite has a run animation when
it is moving.

The run animation stops when the player stops
moving.

The run animation changes from left to right
depending on the x value of their movement
vector.

The spear or rock goes through the air when
the player throws it pressing the "R" key
and clicking with the mouse.

The boar meat changes color/appearance when
you click on the fire while holding it and
leave it there for a few seconds.

## Functionality & MVPs

In Survivalman, users will perpetually be in search of water, shelter, and food.

## Water: 
 The hydration meter will go down the fastest, but water will be much easier to find than food. Water will be randomly distributed in ponds and streams/rivers.

## Shelter: 
 The campfire replenishes the hypothermia meter and cooks food. You will be unable get nutrition from meat without putting it on the fire. During the day, you have a meter indicating how close you are to a heat stroke. At night time, it’s the same but “hypothermia”.  If you just move by the campfire for a couple of seconds it will go back up, during the day you will cool off quickly if you stand near a tree.

## Food: 
 You have a certain amount of calories at any given time, which slowly tick away.  They go away faster if you move around, slower if you just stand there. You can use the spear to take down a wild boar, but they are rare so remembering where certain plants are will be just as important as trying to hunt.

## In addition, this project will include:
 A readme and a brief explanation of the rules with some advice on strategy.


## Wireframes:

* On the left will be navigation links to controls/how to play
* Counters displayed in text of calories, hydration and temperature.
* On the right a timer to show how long you have survived this game
* Top middle title

## Technologies, Libraries, APIs:

## This project will implement:
 The canvas API for drawing the world and moving the player around. If I am unable to implement the gameplay I want with Canvas, I will supplement it with something like Matter.js or a similar approved API.

## Implementation Timeline:

## Friday:

 Get project setup and work with Canvas to get a realistic view of what I will be able to accomplish with it in one week. By the end I should have the libraries in my project and have started to learn how they work.

## Weekend:
 Get the player moving, along with timers for hydration, calories, and hypothermia.  Once I have one working, the others should be the same with shorter or longer timers.

## Monday:
 When the player clicks on a food item, water source, or stands next to a fire and it properly change the corresponding meters.

## Tuesday:
 Figure out how long the game should last. Should a record score be one minute, or 10 minutes? What would be more fun. Mess around with how fast the player moves, and how fast npc animals move and how often they appear.
## Wednesday:
 Make sure the basics are all working, have a base game that I am happy with before the end of the day. Then experiment with different ideas and improvements.
## Thursday:
 Check if everything is working as expected and put it on GitHub.

## Bonus Features:

The world could extend beyond the visible screen, 
and when the player gets a certain distance from
the edge of the canvas element, the world adjusts
and you can keep exploring the area without
changing the size of the window/canvas.

There could be a day/night cycle where in the day,
the player needs shade so that they dont overheat
and get a game over.  At nigth the player would
need to periodically be near a fire to warm up
or the hypothermia meter would cause a game over.

At night visiblilty could be limited with a fading
to black effect to make navigation harder.

If the game usually lasted more than a minute or
two, the season could change each minute and bring
new challenges to survival.

There could be a car somewhere on the level that
the player was trying to find to win.

 Multiplayer where the goal would be to outlast an opponent would be a ton of fun. If it was vs mode it would be like a big game of hide and seek. Without a map, you wont know where you are in relation to each other.

