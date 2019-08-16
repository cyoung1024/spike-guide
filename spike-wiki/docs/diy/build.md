# Build
This client is provided by Bjorn Inge Berg. You can [find his work here](https://github.com/dabear/spike-client-swift), and you can find his [original instructions here](https://github.com/LoopKit/Loop/pull/828). If you plan on integrating the Spike client into the master branch of Loop (*Medtronic support only, no Omnipod support*), then you can follow this guide with either Bjorn's Spike client or my Spike client. The only difference is that my Spike client version comes with the Spike calibration file.

If you plan on integrating the Spike client into a version of Loop that has Omnipod support, then you will need to follow this guide with my Spike client, as changes to the code were made to be compatible with the Omnipod branch.

Here are the steps we're going to take :

1. Fork and clone the Spike client

2. Update Cartfile dependencies

3. Carthage update for Spike client

4. Build the Spike client

5. Push changes to GitHub

6. Download a new copy of Loop

7. Update the Cartfile of Loop

8. Carthage update for Loop

9. Add Spike as a CGM source to Loop in Xcode

10. Add the Spike frameworks

11. Link binaries

12. Edit info.plist

13. Build and launch

## Fork and clone the Spike client
You can find [my version of the Spike client here](https://github.com/cyoung1024/spike-client-swift-195). If you wish to integrate the client into a *Medtronic-only* version of Loop, select the [master branch](https://github.com/cyoung1024/spike-client-swift-195/tree/master). If you wish to integrate the client into a version that also supports Omnnipod, select the [omni branch](https://github.com/cyoung1024/spike-client-swift-195/tree/omni).

>
>You should fork the repository (or "repo") before cloning it, so that you have a clear path of documentation that will always lead you back to the source. This will also help you keep up-to-date with potential upstream changes to the branch.
>

First, fork the Spike client. You'll find the button in the top righthand corner of your screen.

Next, open Terminal. We're going to download the Spike client via Terminal, as it will make things a little easier and neater in the long run. Follow along below depending on if you're integrating into a Medtronic only branch (left column) or an Omnipod branch (right column). Again, Omnipod branches also support Medtronic, but Medtronic branches are just that - Medtronic only.

In Terminal, type :

| Medtronic | Omnipod |
| --- | --- |
| `git clone https://github.com/cyoung1024/spike-client-swift-195 --branch master --single-branch master` | `git clone https://github.com/cyoung1024/spike-client-swift-195 --branch omni --single-branch omni` |

The Spike client folder can be found under Users > "your name". It's easier to put the file here when using Terminal because it reduces the amount of typing needed. Instead of `cd ~/downloads/spike-master`, we can just type `cd ~/spike-master`. If you prefer a different folder location, feel free to change the working directory by typing `cd ~/PATH/TO/FILE` and hitting enter before preforming the `git clone`, so long as iCloud drive won't be uploading its contents anywhere. If you do this, just remember to navigate into that directory when following the next steps.

## Update Cartfile dependencies
Loop and almost all its elements are constituted of many different projects. These projects lay down the proper foundation for Loop to build successfully. For example, the project LoopKit is fundamental in Loop's inner-workings. Elements such as RileyLink, the Dexcom share client, and the Spike client rely upon it, depend upon it, in order to function properly. These dependencies are declared in what's called the Cartfile. Here we tell Carthage, the dependency manager, where to go on GitHub to find these constituting elements of Loop. Carthage then fetches that information from GitHub, clones it onto your computer, and then builds it. The result of this is also logged into the Cartfile.resolved. Those very long numbers you see at the end of each declared dependency are what we call a SHA-1. It's like a fingerprint - each one is unique, and is attributed to the version of the dependency you told Carthage to go get. This can help us make sure that we've gone and gotten the right version when we want to be vigilant, but don't worry about that for now.

Because we want Loop to also depend upon the Spike client, we have to edit the Cartfile and tell Carthage where to go get it so it can import the Spike client. If you open the Spike client's Cartfile, you'll notice it has only one dependency : LoopKit. LoopKit also has its own versions, just like the master branch and the Omnipod branch. We want our Spike client to have the right framework to function properly with the intended version of Loop, so we want to tell the Spike client to use the same version of LoopKit that Loop does. Double check in Loop's Cartfile where Carthage should be fetching LoopKit from. For example, in the Omnipod branch, it should be `github "LoopKit/LoopKit" "omnipod-testing"` (well, at the time of writing this it should be). Copy that into the Spike client's Cartfile, then save and exit. Do the same for the Cartfile.resolved.

>
>Note that you may have to right click on the Cartfile or the Cartfile.resolved in order to open it with TextEdit. TextEdit is usually the default editor for the Cartfile, but often the default editor for the Cartfile.resolved is Xcode. Try and be consistent with the editor you use when appending the Cartfiles.
>

## Carthage update for Spike client
Time to tell Carthage to do its thing. In Terminal, type :

| Medtronic | Omnipod |
| --- | --- |
| `cd spike-master && carthage update` | `cd spike-omni && carthage update` |

If you get any errors, type `rm -rf ~/Library/Caches/org.carthage.CarthageKit` and then `rm -rf ~/Library/Developer/Xcode/DerivedData`. Terminal should not tell you anything after you type these out. If you still get an error, Carthage should tell you what went wrong, but often much too vaguely to do anything about it. At the end of its message, it'll tell you that you can "check the log" at `/var/folders/...`. Highlight this with your curser and copy it with `command+c`, then type `open`, paste the file path with `command+v`, and hit enter. You'll get a detailed log as to what's happening and where to fix it.

## Build the Spike client
Once Carthage finishes its work, go ahead and open up the Spike client's Xcode project - `SpikeClient.xcodeproj`. Build the project by clicking on the play button. You won't need to plug in your phone or assign any targets, the deploy device can be anything from a specific simulator to a generic device. No UI interface will come up, and you should get a message saying the build succeeded.

If the build didn't succeed, check the log to find out what went wrong. You can troubleshoot from there. Some things to try :

* Go back to your Cartfile and make sure that the LoopKit dependency you declared definitely matches the one that your desired version of Loop is using. If it isn't, update it, be sure to save, and run another Carthage update.

* If you're getting messages such as `Type [foo] does not conform to protocol [bar],` or `Use of unresolved identifier`, that's a little more of a pain in the butt. You're unfortunately going to have to open up the Dexcom-share-client-swift of the desired Loop project, and check in there for compatibility.

    * For example, in the picture below you have the Dexcom-share-client-swift's `ShareClient+UI.swift` file on the left at omni, and on the right is the Spike-client-swift's `SpikeClient+UI.swift` at master. When I was converting the Spike client to its Omnipod version, I ran into a myriad of unresolved identifiers and non-conforming types. Because I knew the Spike client is almost identical to the Dexcom share client, I opened the two up side-by-side and compared the files and lines that Xcode gave me errors on. This is just one example of something that needed to be changed.

![Dex-vs-Spike](img/dexvsspike.png "Dex-vs-Spike")

## Push changes to GitHub
This is the fun part. Ready ? In Terminal, type :

| Medtronic | Omnipod |
| --- | --- |
| `cd ~/spike-master` | `cd ~/spike-omni` |
| `git init` | `git init` |
| `git add .` | `git add .` |
| `git commit -m "Update Spike client"` |  `git commit -m "Update Spike client"` |
| `git remote add origin https://github.com/YOUR_USERNAME_HERE/spike-client-swift-195` | `git remote add origin https://github.com/YOUR_USERNAME_HERE/spike-client-swift-195` |
| `git remote -v` (make sure the URLs match) | `git remote -v` (make sure the URLs match) |
| `git push --set-upstream origin master` | `git push --set-upstream origin omni` |

In the last step, `master` or `omni` is the name of your branch. If you wish to name it something else, like for example to have consistency with the specific version of Loop you're integrating into, you can name it something like `dev` or `jojo`.

>
>If Terminal tells you the origin already exists when preforming the step `git remote add origin <url>`, type `git remote rm origin`, then do the step `git remote add origin <url>` again.
>

Congratulations, you just uploaded to GitHub via Terminal ! Pretty cool, right ? As a refresher, we did this because Carthage needs to know where to go to find things. So, when you want to put the Spike client into Loop, you can now put your Spike client's GitHub URL in the Cartfile, and Carthage will go get it and build it into Loop. But first, we need a fresh copy of Loop.

## Download a new copy of Loop
To make sure we're starting out fresh with no issues, grab a new copy of the version of Loop you're going to use. Remember, the LoopKit version of the Loop you want has to be the same as the Spike client we just pushed to GitHub. If they don't match, no worries ! Just change the Spike client's Cartfile to the correct LoopKit version, run another Carthage update, and push your changes to GitHub with the method we just used.

You can either download your new copy of Loop with the ZIP file method, or we can do the same thing we did earlier with the Spike client : fork Loop (if you never had before), open up Temrinal, and git clone it.

To git clone Loop's dev branch, for example, you would type :  `git clone https://github.com/LoopKit/loop --branch dev --single-branch dev`

## Update the Cartfile of Loop
Now we have to tell Carthage where to go to find the Spike client. In the Cartfile of your Loop version, type :

`github "YOUR_USERNAME/spike-client-swift-195" "YOUR_SPIKE_BRANCH'S_NAME"`

For example, mine is `github "cyoung1024/spike-client-swift-195" "master"`

Save, quit, and do the same in the Cartfile.resolved.

## Carthage update for Loop
Now we have to run another Carthage update. Depending on whether you git cloned or downloaded the ZIP file of your Loop version, the Carthage update command will change.

| git cloned | downloaded ZIP |
| --- | --- |
| cd | cd |
| `cd ~/FOLDER_NAME && carthage update` | `cd ~/downloads/FOLDER_NAME && carthage update` |

## Add Spike as a CGM source to Loop in Xcode
Open up your Loop folder and open the Loop project. In the project manager pane on the lefthand side of your screen, navigate into Loop > Managers > CGMManager.swift.

At the top of the file, you'll see a bunch of frameworks being imported via the declaration `import LoopKit`, or `import ShareClient`. We also want to import something : the Spike client. Click at the end of the last framework being imported, hit enter, and type `import SpikeClient`.

A little further down you'll notice the constant `allCGMManagers` being delcared, with the required syntax being `CGMManager.Type`. Add Spike to the list by typing : `SpikeClientManager.self`.

## Add the Spike frameworks
Time to use the Spike frameworks that Carthage went and got for us.

At the top of the project manager pane you'll see "Loop" with the app icon symbol next to it, under TARGETS. Click on that. Along the top of the screen, right under the name of the project, you'll see a range of tabs listed horizontally, such as "General", "Capabilities", "Resource tags"... Find "Build Phases" and click on it. You'll see a list of options appear. Near the bottom you'll see "Copy Frameworks with Carthage". Click on that.

Under "Input Files", you'll see a bunch of things that start with `$SCROOT/Carthage/Build`. All of those files are the frameworks that we asked Carthage to get. We're going to add the Spike client and its UI onto the list, so that Loop can access the files while it's building and running.

Click on the `+` and type :

`$(SRCROOT)/Carthage/Build/iOS/SpikeClient.framework`

`$(SRCROOT)/Carthage/Build/iOS/SpikeClientUI.framework`

## Link binaries
We've added a reference into the CGM manager, added a reference to the frameworks, now all we have left is to link the files themselves into Loop.

Under that same "Build Phases" tab you'll also see "Link Binary With Libraries". Click on that, and scroll down to the `+` button. You'll be asked to select the files. We're looking for that same `SpikeClient.framework` and `SpikeClientUI.framework` we just referenced in the last step.

Click `Add other...` and navigate into your Loop folder. Go into Carthage > Build > iOS and scroll all the way down until you find the `SpikeClient.framework` and the `SpikeClientUI.framework`. Select the `.framework`, not the `.framework.dSYM`. We want the one whose icon kind of looks like a Lego.

## Edit info.plist
Almost done ! We need to edit the version of Loop you're using so that, if you ever need help, you and everyone can be certain of the branch of Loop that's being used. Since you added in the Spike client, we need to denote that.

The easiest way, in my humble opinion, is just going to the targets (i.e. Loop and WatchApp) and editing the version from there. Click on the target, and under General > Identity > Version, and add `-spike`. The info.plist will automatically update to reflect your changes. You can make sure it did by navigating into Loop > info.plist, and WatchApp > info.plist.

>
>Note that in the Omnipod branches, you'll also have to do this for the Learn target. Make sure to check that as well.
>

## Build and launch
Yes, *finally* build and launch ! Assign all your targets, select your phone in the active scheme, make sure your screen is left on, and hit play.

Remember, if you run into any troubles, click on the red errors and scroll all the way down to see what's happening. Just like in Terminal during a carthage update, a log will be printed, so if Xcode isn't detailed enough you can highlight the log's path, open Terminal, type `open`, paste, and enter to find out more.

### Pat yourself on the back !
I hope this guide was clear and that maybe, just maybe, you enjoyed doing this. If you'd like to learn more about Xcode, Swift, Git, and more, check out the Resources tab under this DIY section. Happy looping !

