---
layout: post
title:  "Using the Terraform Console"
date:   2023-08-31 00:39:19 -0500
categories: terraform console
---
# What is the Terraform Console?
The Terraform Console provides a local environment to interrogate state and prove out methods to interact with that state during the plan and apply phases.

## Why is it useful? What problems does it solve?
There are three phases to writing Terraform: development, plan, apply.
The plan and apply phase are Terraform interacting with the state file, whether in a speculative or performative manner.
The development phase, however, is entirely under our (developers) control.
One of the frustrating issues with moving from the development to the plan phase is correcting errors with our own code or adjusting the interactions  between previously declared cloud resources.
The Terraform Console can help alleviate these issues!

Let's check it out!

## How to get started with the Terraform Console
> **_NOTE_**
> 
> Use the examples from [here](https://github.com/matthewaerose/terraform-examples) to get started fast!

### The *most* basic way
In an empty directory (or a directory with no Terraform files), run the command
```
terraform console
```
That is it! You should see the console prompt show up after you type the previous command. The whole thing looks like
```
kephalos@dev:~/an-empty-directory$ terraform console
>
```

where `>` is the console prompt.


### Terraform Console in Real life
In real life, you'll already have Terraform files where you want to use the console. Your Terraform should be **well-formed**. The console performs some validation before starting. Some errors will still allow the console to start but others will require you to correct them before proceeding

Once you have well-formed files, you need to `init` the providers. This downloads any providers defined so that you can start using them.
```
terraform init
```

Once that has finished, you can run
```
terraform console
```

Here is a video of how it should look. This example uses the code found in my [example repo](https://github.com/matthewaerose/terraform-examples).

<script async id="asciicast-605819" src="https://asciinema.org/a/605819.js"></script>

Now we can start using the console!

## Using the Terraform Console to interrogate the locals
Like a beat cop on patrol, the console can interrogate the locals. The `locals{}` block, that is! 😅

Anyways, if you want to follow along, fork my [example repo](https://github.com/matthewaerose/terraform-examples)
> **_NOTE_**
>
> You can use the `gh` cli to do this easily!
> ```
> gh repo fork matthewaerose/terraform-examples
> ```
> &nbsp;

### Talking to the locals
Let's change directory into the basic example and start our console. Once started, let's see what the `locals` block has to offer.

Given a file that has the following content
```terraform
# locals.tf
locals {
    this-is-a-object = {
        foo = "bar"
        a-num = 78.9
        a-bool = true
        the-list = [1,2,3]
        the-map = {
            foo = "bar"
            baz = "bat"
        }
    }

    this-is-a-num = 123.987
    this-is-a-string = "hello, world!"
    this-is-interpolated = "${local.this-is-a-string} The number is ${local.this-is-a-num}"
}
```

we can ask the console for any of that content.

```bash
kephalos@dev:~/git/terraform-examples/0-basic-framework$ terraform console
> local.this-is-a-num
123.987
> local.this-is-a-string
"hello, world!"
> local.this-is-interpolated
"hello, world! The number is 123.987"
> local.this-is-a-object.foo
"bar"
> local.this-is-a-object["foo"]
"bar"
> exit
```

Notice how objects can use the dot operator or by index for keys
```bash
> local.this-is-a-object.foo
"bar"
> local.this-is-a-object["foo"]
"bar"
```

Here is a video of what that looks like. 
<script async id="asciicast-605826" src="https://asciinema.org/a/605826.js"></script>

## What else can I do with the Terraform Console?
Besides asking the locals who they are, you can do the following:
- look at static or previously retrieved data blocks or outputs
  - "previously retrieved" means having gone through the plan/apply process
- use any of the built-in language functions
  - like `merge`, `concat`, or any function found [here](https://developer.hashicorp.com/terraform/language/functions)
- create and iterate over lists, maps, and objects

**Stay tuned for the next post on outputs and data blocks!**