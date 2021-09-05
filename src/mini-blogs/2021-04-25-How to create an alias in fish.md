---
path: /miniblogs/fish-alias
title:  "Aliases, Path variables and environment variables in fish"
date:   2021-04-25 14:43:00 +0100
tags: fish,alias
---

Fish is a shell

```
alias NAME=DEFINITION
alias kubectl_test="kubectl --kubeconfig=/Users/katrin/.kube/config_test"
```
If you want to persist this alias, use the --save flag:

```
alias --save kubectl_test="kubectl --kubeconfig=/Users/katrin/.kube/config_test"
```

This will also save your alias-function in the fish configuration directory in (unless specified differently) `~/.config/fish/functions`

Now you can enjoy your new alias like me: `kubectl_test get namespace`

https://fishshell.com/docs/current/cmds/alias.html#:~:text=fish%20marks%20functions%20that%20have,be%20erased%20using%20functions%20%2De%20.