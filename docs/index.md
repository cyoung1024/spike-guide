# Spike + Loop Wiki

This is a step-by-step guide on integrating the Spike client into any branch you're using. By implementing this method you agree to read the file SPIKE_CALIBRATION included in each version of this client (as well as under the Calibration page of this wiki) before proceeding, understand that you are integrating this client at your own risk, and agree not to use this client to make any medical decisions.

## System Requirements
You must have :

* Xcode 10.2 minimum

* iOS 12.2 minimum

* macOS 10.14.3 minimum

* Most recent version of HomeBrew

* Most recent version of Carthage

## Loop Version Requirements
The branch you're using must be compatible with Xcode 10.2. For Loop-master, the required code updates were done early March 2019. Loop-omnipod-testing was released after the 10.2 update, and therefore is compatible. Any Loop version you wish to use **must** be from March 2019 at the latest, or you must do the necessary code edits to make the desired version compatible.

## A Quick Note About Git and GitHub
In order to keep this guide a little cleaner, I'm opting to show you methods that use a fair amount of Terminal. Don't worry, you'll get comfortable with it very quickly. Remember to pay very close attention to where things are marked "YOUR_USERNAME" or "FOLDER_NAME", for example. Be very careful to change them when necessary.

One thing we'll be using frequently is Git. Git is what's called a "version control system" ; it helps you organise, manage, and distribute your projects. When you installed the Xcode command line tools, you also installed Git. But just to make sure it all went well, open up Terminal and type `git --version`. If Git isn't installed, it will prompt you to install it.

Git also helps us connect to GitHub via the Terminal. You'll be able to upload things to GitHub all in one go by using this method, which keeps us from making mistakes when using the desktop uploader in GitHub. In order to do this though, we have to use the command `git config` in Terminal. Here we'll set up the username and e-mail address you wish to associate with your code. This isn't necessarily your GitHub account username or e-mail. You can put your full name, a nickname, or keep your GitHub username if you wish.

To configure Git to use your desired name in *all* git projects, in Terminal type `git config --global user.name "YOUR_USERNAME"`. You can double check that it worked by typing `git config --global user.name`.

To configure Git to your desired e-mail address in *all* git projects, in Terminal type `git config --global user.email "YOUR@EMAIL.COM"`. You can double check that it worked by typing `git config --global user.email`. Note that GitHub can also provide you with a custom, no-reply e-mail address. [Click here](https://help.github.com/en/articles/setting-your-commit-email-address-on-github) to find out more.

Next, we need to tell GitHub that your e-mail that you specified in Terminal is, well, yours. This may already be done if you used the same e-mail in Terminal as the one that is associated with your GitHub, but follow along just to make sure everything is good-to-go.

1. Log into GitHub in your web browser and click on your user icon, found in upper righthand corner of your screen.

2. Click "settings", and in the left sidebar, click "Emails".

3. In your e-mail addresses, click "Add" and type in the e-mail you used in Terminal.

4. Log into your e-mail account to verify your e-mail address with GitHub.

5. In the "Primary email address" list, select the email address you'd like to associate with your web-based Git operations.

6. To keep your email address private when performing web-based Git operations, click "Keep my email address private".


### All set ? Let's get started.
