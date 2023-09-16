---
layout: post-comments
title:  "Supercharge your Command Line"
date:   2023-09-10 00:39:19 -0500
tags: [cli, computing, expert]
comments: true
---
# Supercharge your command line with these 10 tools and tips
I was screen sharing with a colleague the other day and realized how far _I've_ come with my CLI usage.
I'd like to share with ya'll the tips and tricks shared with me that helped me get to where I am now, plus some new ones I've picked up along the way 😉

These tools and techniques will reduce context switching and help you achieve your goal faster.

> Note: These tools and tips will be Linux-y. For Windows, use WSL.

### TL;DR
Context switching is bad. Stay on the CLI and get more work done.

# 0. tip> Don't use the default CLI!
Obviously, for ephemeral environments, you get what you get and it is _often_ not worth it to configure.

But for your personal or work laptop?
Definitely explore the non-default options

Here are my favorites for the big three Operating Systems.

## Mac
`terminal` is fine for a quick and dirty job. But you should make time to explore [`iTerm2`](https://iterm2.com/).

Highly configurable, pretty, and full featured.

## Windows
Ye olde windows has come a __long__ way since the days of CMD prompt.

The new [Windows terminal](https://apps.microsoft.com/store/detail/windows-terminal/9N0DX20HK701) is a full featured terminal with some eye popping features out of the box. It has tabs! It features Azure Cloud shell! Powershell! All the Shells!

And then when you add Windows Subsystem for Linux (WSL)? 😍

You __must__ try this terminal!

## Linux
Mac and Windows have been my jam for sometime now. But last I checked, [konsole](https://konsole.kde.org/) was still the 'terminal du jour'.

Lots of features and fun to use.

# 1. tool> `asdf`
[LINK](https://asdf-vm.com/)
> Manage all your runtime versions with one tool!

Yes, we have `apt` for debian or `yum` for centos/RHEL, or `brew` for MacOS.
These are _fine_ for long lived CLI applications. But what about languages and tools?
Have you ever been in a situation where you had multiple versions of `go` that you needed to switch between?
Fine, use `gvm`. But then you have another project you need to switch between multiple versions of `node`. 
And then add `ruby`, then `rust`, then `ad nauseam`...

`asdf` is _the_ tool and language version manager to use.

Check out the full list of plugins [here](https://github.com/asdf-vm/asdf-plugins#plugin-list)

# 2. tool> `fzf`
[LINK](https://github.com/junegunn/fzf)
> It's an interactive Unix filter for command-line that can be used with any list; files, command history, processes, hostnames, bookmarks, git commits, etc.

This is a blazing fast filter. So what, right? WRONG! 

When you have a lot of things to search through, like files, command history, commits, processes, etc, you don't want to get kicked out of the zone by a slow tool.

This will help you stay _in it_ and get your work done faster.

> PRO TIP: Use fzf with back search (ctrl + r) for an unbeatable back search experience!

# 3. tip> Don't be afraid to try out different shells!
There are so many shells out there to try out. Just because your OS came with `sh`, doesn't mean you have to stick with it!

Here are a handful, in no particular order

## zsh and the oh-my-zsh framework
[LINK](https://ohmyz.sh/)

Not a shell! Sorry!
But `oh-my-zsh` takes the Z shell to the next level.

If you are on a Mac, you gotta try this out. (zsh is the default shell for mac)
And if you aren't on a mac, take zsh (and oh-my-zsh) out for a spin.

## fish
[LINK](https://github.com/fish-shell/fish-shell)

The friendly interactive shell!

## nushell
[LINK](https://github.com/nushell/nushell?ref=itsfoss.com)
> A new type of shell

# 4. tool> ripgrep
[LINK](https://github.com/BurntSushi/ripgrep)

Like `grep` but faster.

ripgrep is written in Rust and is amazing at recursive search.

Checkout some of the tool comparisons [here](https://github.com/BurntSushi/ripgrep#quick-examples-comparing-tools) and see the speed difference.

# 5. tools> jq and yq
[jq LINK]()

[yq LINK]()

JSON and YAML have become popular formats for storing, sending, and communicating large amounts of information. Most CLI tools output in JSON or YAML, or have options to do so. Both AWS and Azure CLI tools (`aws` and `az`) output to JSON by default and both support YAML.

`jq` and `yq` allow you to slice and dice that output, making it easy to get at the parts that are important to you.

`jq` has this to say about itself:
>jq is like sed for JSON data - you can use it to slice and filter and map and transform structured data with the same ease that sed, awk, grep and friends let you play with text.

# 6. tool> gh

[LINK](https://cli.github.com/)

Keeping with the theme of "staying in it", `gh` is github on the CLI.

Don't switch between browser and CLI to create a PR. Create one directly from the CLI!

Review PRs from your CLI!

Check for issues!

Clone repos!

Make a fork!

Whatever you do, don't waste time by opening your a web browser and going 'clicky clicky' with your mouse.

# 7. tool> broot

[LINK](https://github.com/Canop/broot)

like `tree` but waaaay better

This is for visually representing directory structures in the CLI.

No more are the days of `ls ... cd ... ls ... cd ... ls ... etc etc etc` !

Simply run `br` and see a beautiful, _compact_, structure that is easy to navigate and use.

# 8. tip> the pipe is your friend!

[ARTICLE](https://www.redhat.com/sysadmin/pipes-command-line-linux)

You hear about the mythical "one-liner". A command that can perform a complex task in a single line. This would be _impossible_ without the pipe!

Introducing... `|`

If you are wondering where that is on your keyboard, on a standard QWERTY keyboard, it is above the `return` key and shares the key with `\`. Created by holding down `shift`.

`shift + \` == `|`

## What does it do?!?!
It chains commands together.

Let's take `jq` as an example

This command will output a file with `cat` and "pipe" it to `jq`
```bash
$ cat some-file.json | jq '.'
{
    "hello":"world"
}
```

the _output_ of `cat` is fed as the _input_ to `jq`

You can continue chaining in this fashion until you've achieved the desired result.
example,

```bash
$ cat some-file.json | jq '.' | grep -n hello
2: "hello": "world"
```

and speaking of `cat`, ditch it for...

# 9. tool> bat

[LINK](https://github.com/sharkdp/bat)

>a cat clone with wings

`bat` is similar to `cat` in that it will show you the content of the file you ask it to. But unlike `cat`, it provides the following
* syntax highlighting
* git integration
* visible whitespace

Plus, it has [integrations](https://github.com/sharkdp/bat#integration-with-other-tools) with some of the tools we listed here!

# 10. tool> fd

[LINK](https://github.com/sharkdp/fd)

> an alternative to `find`

While `find` is, and will probably remain, the most powerful CLI search tool, it can't hurt to have something that is a little more intuitive and user friendly. Check it out at the link above!

# Conclusion
I hope you learned something cool from this post!

Go out there, try something new, and start learning how to take full advantage of the most powerful tool on your computer... the Command Line Interface!
