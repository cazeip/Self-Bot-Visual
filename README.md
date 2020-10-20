# Self-Bot-Visual
A Discord Self-Bot that works client sided and doesn't need any installation.

This is a self-bot, which is **SEVERELY** punished by Discord's ToS, I am not responsible for any damage you may have caused with my programm.

![The tool](https://raw.githubusercontent.com/cazeip/Self-Bot-Visual/main/screenshot.png)

Starting everything
===

1. Open the [SelfBotMin.js](https://github.com/cazeip/Self-Bot-Visual/blob/main/selfBotMin.js) and copy the **whole code**.

1. Open discord in chrome and log in:
You can use [this](http://discord.com/app) link which will automatically open it in this browser.

1. Navigate in the channel you want to target.
*This version of the selfbot (v1.1) doesn't support multiple channels. I will be adding this in the future.* 😣

1. Open the developer tools by pressing `F12` on your keyboard.

1. Click on console *on the top of the window that just appeared*.

1. Paste the code you just copied, and pres `ENTER`.
A pop up should appear.
*If it didn't, allow them for discord.com and start back from the beginning.*

1. In the popup window, click on the two blue buttons on the top called "Fill"
This should automatically input your token and your channel IDs.

Send ... every ... seconds
===
This may surely be the easiest feature to use. You simply have to input the message and the amount of delay between two messages. After you are done completing this feature, click on the checkbox on it's left and click on "Update changes".

If ... then ...
===
You can easily complete the sentence with what you want.
- The first selection input allows you to choose between Author ID and message's content.
- The second text input checks if the text inputed is found in the first input *(For example, it can check if the message content contains the word "chess", or if the author ID contains 01234567876543210)*
- The third input allows you to choose for things to do if the condition before was true
    - You can delete the message
    - You can send a specific message
    - You can react with an emoji. (Read our [emojis page](https://github.com/cazeip/Self-Bot-Visual/blob/main/emojis.md) to know how)
- The fourth input text works only if you didn't choose delete at the last input.

After you are done completing this feature, click on the checkbox on it's left and click on "Update changes".

Send the following text
===
This feature allows you to automatically send a text where each line will represent a message. As of v1.1, you cant send messages that contain multiple lines. Empty lines will be skipped.
After you are done completing this feature, click on the checkbox on it's left and click on "Update changes". If a text was already being sent line by line, you will be asked if you want to stop either the old or the new text.

Send message to user with this ID
===
I don't see any use for this feature but I kept it.
