# SPIKE FAQ

## What’s a Spike branch
A Spike branch is a version of Loop that allows you to use Spike as your CGM source.

## What branch should I use
That’s a very personal decision that only you can make. A Spike branch is the same as its original version, but with the added CGM option. Make your decision as you normally would with the LoopDocs, and come back here to find its Spike equivalent.

## Does the Spike branch have...
Probably. I do my best to update within a few hours of an official Loop update, but sometimes it takes me a full day, maybe a few if there’s merge conflicts or if it's exam season. See below for the corresponding update dates, and remember that you can always check if I’ve merged a specific Loop update by looking at the commit history in my repo.

And ***please, please, please*** be considerate when asking if I’ve done updates. I’m just one, single person working on these branches. I am a student and an intern working a 40 hour week on top of studying. If you feel I’m taking too long to get an update out, I would like you kindly remind you that on the top right corner of your screen is a guide to making your own Spike branch. No one is by any means obligated to use my branches, the resources for making your own Spike version are out there. If I haven’t posted an update please wait at least a couple days after a new release before tagging me in comments, in posts, and sending me Facebook messages and e-mails. I promise it will get done.

<div>
<p> <b> Last master update : </b> <span class="master"> </span> </br>
<b> Last spike-master update : </b> <span class="spike-master"> </span> </br>
<b> Last spike-master-x15 update : </b> <span class="spike-master-x15"> </span>
</p>
<p> <b> Last omnipod-testing update : </b> <span class="omnipod-testing"> </span> </br>
<b> Last omnipod-spike update : </b> <span class="omnipod-spike"> </span>
</p>
<p> <b> Last dev update : </b> <span class="dev"> </span> </br>
<b> Last dev-spike update : </b> <span class="dev-spike"> </span> </br>
<b> Last dev-spike-x15 update : </b> <span class="dev-spike-x15"> </span>
</p>
<p> <b> Last jojo update : </b> <span class="jojo"> </span> </br>
<b> Last jojo-spike update : </b> <span class="jojo-spike"> </span>
</p>
<p> <b> Last jojo-beeps update : </b> <span class="jojo-beeps"> </span> </br>
<b> Last jojo-beeps-spike update : </b> <span class="jojo-beeps-spike"> </span>
</p>
</div>

## Does Spike work offline
Yes.

## There’s a cloud icon though
I know, ignore it. That’s a relic of the Dexcom Share client, which the Spike client is based off of. The URL that the Spike client is pointed to is Spike’s internal HTTP server, so no internet connection is required. This is also why it’s so important that you enable your internal HTTP server in Spike’s settings.

## What’s my username & password
This too is a relic of the Dexcom Share client. You can put in whatever fake username and password you want. It doesn’t have to match anything you’ve set anywhere else.

## What’s x15
Medtronic 15 series pumps throw an erroneous error following blouses that state that the pump responded strangely and to retry your bolus. As I myself am a 715 user I make my own x15 branches. I’ve gone ahead and published them while I’m at it. If you’re an Omnipod user or don’t have a Medtronic x15 pump, you can ignore this branch.

## What do I do if Spike is wrong
Open your loop immediately and close Spike completely. Continue with finger pokes and enter your BGs into Health, ideally every 15 minutes but personally if this happens to me I do it every half hour. Depending on the situation, either delete all calibrations in Spike and start over from zero once you’re in optimal conditions, or wait for optimal conditions to recalibrate. What are optimal conditions ? [Check out the calibration guide](https://cyoung1024.github.io/spike-guide/calibration/). If you have lots of sensor noise, please discontinue the use of your current sensor and start a new one. If you cannot trust your CGM readings, then please do not use Loop, be it Spike or otherwise. Use all tools at your disposition to keep you / your loved one safe. This includes stopping the use of Loop until you can trust your CGM readings again.
