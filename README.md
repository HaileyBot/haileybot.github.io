![Status][status] ![Uptime][uptime] ![Servers][servers] ![Version][version] ![License][license]

[status]: https://botlist.space/bot/423637161632464906/badge?property=status&style=flat-square&color=brightgreen
[uptime]: https://botlist.space/bot/423637161632464906/badge?property=uptime.2&style=flat-square&color=brightgreen
[servers]: https://botlist.space/bot/423637161632464906/badge?property=servers&style=flat-square&color=informational
[version]: https://img.shields.io/github/manifest-json/v/haileybot/haileybot.github.io?style=flat-square&color=blueviolet
[license]: https://img.shields.io/github/license/haileybot/haileybot.github.io?style=flat-square
# Overview
HaileyBot aims to be an incredibly versatile bot; our goal is to have every feature you could ever think of, as well as some you would never even imagine. Getting to that point takes time, and we're still on our way, but with every new update comes a new feature, bringing us closer to our goal of becoming a bot to replace all bots.
# Features
### Global Chat
The global chat feature of this bot can link a channel from your server to the bot's global chat simply by typing `$-link`. Any messages sent to a connected channel are forwarded through the bot to all the other connected channels. You can also use `$-link private` to connect your own channels and/or servers to each other, using webhooks to make it appear that all users talking are in the same place.
### Advertising
The advertising feature of this bot allows server admins to create an advertisement for their server using `$-register`, and bump it every 2 hours with `$-bump`. Ad bumps are sent to a designated channel on the bot's support server, where they can be seen by over 600 users.
### Moderation
On top of the standard `kick` and `ban` commands that most bots have, this bot has plenty of other less common moderation commands.

With `$-autorole`, you can make the bot automatically grant roles to new members, with the ability to set special roles for users based on your member count (for example, a special `@100th` role that automatically gets added to the 100th member).

Using `$-ban`, you have the ability to ban a user by their ID, even if they aren't in your server. You can also sync your server's bans with HaileyBot's Global Ban List - a list of users who have violated HaileyBot's [Global Ban Policy][gbp].

`$-filter` is good for keeping chat clean - if you don't want people saying certain words, just add those words to the filter and let HaileyBot do the rest of the work.

You can use `$-live` to print a message containing your server's statistics. Whenever something changes, the message gets edited to show the change. Altertatively, you can also use this command to create a category of unjoinable voice channels at the top of your server's channel list. The names of these channels contain your server stats, and they get updated immediately as well.

If you want to see what your server members are doing while you're away, you can use `$-modlog` to set a channel to be used as a server log, logging all activities performed in your server.

You can use `$-prune` to bulk delete messages more easily, rather than needing to do it by hand.

With `$-warn`, you can set a warning channel on your server so you can officially warn users for misbehaving. You can also set this channel to notify you if a new member joining your server is known for violating HaileyBot's [Global Ban Policy][gbp].

Using `$-welcome` and `$-goodbye`, you can set personalized messages that appear when members join or leave your server.

[gbp]: https://docs.haileybot.com/reference/gbp
### Miscellaneous
This bot also has many commands that don't quite fit any of the categories, such as getting detailed information about a user (`$-user`), server (`$-server`), or custom emoji (`$-emote`), searching google from within Discord (`$-google`), recalling an old message from its ID (`$-quote`), or creating a poll for server members to vote on with reactions (`$-poll`).
# Planned
HaileyBot is under constant development, receiving updates and new features nearly every day. Stay tuned for what'll happen next, and join our community to be a part of this ever growing project.
