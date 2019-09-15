# Loop not getting Spike data ? Try some of these fixes.
>
> Note that ***you will not get Spike readings as expected when using a simulator pump*** in Loop. In order for Loop to pull Spike data in the expected manner, a physical pump needs to be paired with the Loop app.
> If you're still waiting for your RileyLink to arrive and have Spike paired with Health at the moment in order to get some data into Loop, remember to ***disable Health capabilities in Spike*** when connecting your pump to Loop for the first time.
>
### Make sure that Spike is active in the background
The app must be open and active in order to get readings, and thus to send them to Loop as well. If you're having connectivity issues *within Spike*, try :

* **Changing the suspension prevention settings of Spike**. In `settings > advanced > user defined`, you'll be able to select your mode. Read the instructions in that panel to determine which setting you should start with, as this changes per CGM.

* **iCloud settings**. When the phone is plugged in, on WiFi, and the screen is off, this is when iCloud backs up your phone. This setting is turned on by default. This will sometimes disrupt Spike getting readings. The solution can either be to not plug your phone in overnight, or to disable this setting by clicking on your account from within the phone's settings, scroll to the bottom to select the phone you're using, and clicking on the iCloud settings.

* **Screen time**. You may have a setting enabled in this menu that is forcing Spike to quit, be it during the night or the day. This menu can be found under "screen time" (I think it's called that, my phone isn't in English, sorry... it's the option underneath "Do not disturb", the purple icon with the hourglass).

* **Background app refresh**. Under `general > background app refresh`, you can make sure that Spike is enabled. Again, this may be labeled differently on a phone in English... It's the 8th option on the screen.

### Spike is updating, but Loop isn't
More often than not, the issue lies in Apple Health. Your settings *must* be :

* Loop : has full monopoly on reading and writing *all data*

* Spike : has *zero* abilities to read or write. You can also fully disable Spike's access to Health by going into its `settings > share`, and disabling Health Kit

See the [LoopDocs section on Health permissions](https://loopkit.github.io/loopdocs/build/health/) for more.

If your Health settings are correct, try :

* Ensure that your **Spike credentials are entered**. Upon setting Spike as your CGM source after tapping `Add CGM` in Loop's settings, you will be prompted for a username and password. These are bogus credentials that can be anything you wish. For example, mine are "username" and "password".

* **Enable the HTTP internal server in Spike**. This can be found in Spike, under  `settings > integration`.

* **Delete Spike as your CGM source in Loop**, then when reselecting Spike, delete the credentials and enter new ones. Changing this up could knock things back into place.

* **A simple restart**. Close both Spike and Loop from the app switcher, turn the phone off and back on again, then reopen Spike and Loop in that order.

### Delayed CGM data, but green loop
Because Spike and Loop's internal clocks aren't perfectly synced, it's not uncommon to get into a spot of looping off of 10 minute old data.

For Libre users, click "on demand" in Spike to get a new reading while Loop is at 3 minutes.

For Dexcom users, this "on demand" option is not available. There is a fix being tested in dev-spike to resolve this. If you're willing to keep up with frequent updates and report bugs when found, you could give dev-spike a try. But be warned that it is not as stable as a production branch.

### Still not working ?
You can try a soft reset of the phone, or even delete Loop completely off of the phone and load it back on if you're in a tight spot and absolutely nothing is working, as a last ditch effort. Before you do that though, double check that your Loop app is displaying the correct version of Loop : it should be the original Loop version name plus `-spike` on the end. With all these new releases coming out, it's not unheard of that people mix up the folders or projects in Xcode and accidentally deploy the wrong version.

Also, if you'd been previously using a different source - such as Dexcom Share - when you load a new version, Loop keeps all your old settings. This includes whichever CGM source you were using. You'll have to delete that CGM source in order to get Spike to show up as a CGM option.

If you're still stuck, remember to [check the LoopDocs](https://loopkit.github.io/loopdocs/troubleshooting/overview/) for any other non-Spike-specific troubleshooting steps as well.
