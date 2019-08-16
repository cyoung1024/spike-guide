# About my branches

Unless stated otherwise, all code done here is not by me, but by the amazing Loop community. I "specialise" in putting puzzle pieces together, and in mucking around in Terminal because, well, Terminal is fun.

My branches are nothing more than the work of others, combined with the work of others. But in order to test things out before I can put them on GitHub, I unfortunately have to remove Siri capabilities, as I have a free dev account. If you'd like to add Siri back in, visit [this page here](https://loopkit.github.io/loopdocs/build/code_customization/#disable-siri-capabilities) of the LoopDocs and just do the exact opposite of what you see.

### [Spike-master](https://github.com/cyoung1024/loop/tree/spike-master)
Loop master 1.9.6 with Spike client integrated

### [Spike-master-x15](https://github.com/cyoung1024/loop/tree/spike-master-x15)
Loop master 1.9.5 with Spike client integrated and a fix for the Medtronic x15 models where, after a bolus, an erroneous message saying the pump responded unexpectedly and to retry was thrown.

### [Omnipod-spike](https://github.com/cyoung1024/loop/tree/omnipod-spike)
Loop dev 1.10.0 with Spike client integrated

### [Dev-spike](https://github.com/cyoung1024/loop/tree/dev-spike)
Loop dev branch with Spike client integrated. Does not have Medtronic x15 fix and includes Siri capabilities.

### [Jojo-spike](https://github.com/cyoung1024/loop/tree/jojo-spike)
Katie DiSimone's Loop Jojo branch with Spike client integrated, as well as the Medtronic x15 fix. Please read more [about the Jojo branch here](https://github.com/Kdisimone/Loop/wiki?fbclid=IwAR3YXXm635cCFm70PYuP5tbfW24WqUhTuviX3bqxacOS9l4Q6C85PPDQ0pc) before proceeding with this version.

### [Jojo-beeps-spike](https://github.com/cyoung1024/Loop/tree/jojo-beeps-spike)
Katie DiSimone's Loop jojo-beeps branch with Spike client integrated. The jojo-beeps branch combines Katie's Jojo work (which you can [read about here](https://github.com/Kdisimone/Loop/wiki?fbclid=IwAR3YXXm635cCFm70PYuP5tbfW24WqUhTuviX3bqxacOS9l4Q6C85PPDQ0pc)) and a feature which makes a pod beep at the start and end of a bolus. Since this branch is geared towards Omnipod, there is no x15 fix. The beep feature does not pertain to / affect Medtronic pumps. Siri capabilites *have **not** been removed* in this branch, unlike my other branches.

## A Note About Spike
Yes, for the 18 millionth time I am reminding you to ***read the Spike calibration notice before proceeding with any of these downloads***. This document should be reviewed regularly, and religiously. You should be able to cite it in your sleep. Say it with me, folks : level, stable, and in range.

You can find the notice in markdown format [here](https://github.com/cyoung1024/Loop/blob/spike-master/SPIKE_CALIBRATION.md), in Google docs format [here](https://docs.google.com/document/d/1gmAJ4_NRaS6UUDnGDQbKy5klh0KB5SpHwgo6gzWM7ZU/edit?usp=sharing), and on the Calibration tab up above.

## Updating your Build
Please visit [this page of the LoopDocs](https://loopkit.github.io/loopdocs/build/update/updating/) for detailed instructions.
