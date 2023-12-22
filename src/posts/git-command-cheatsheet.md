---
title: Git commands cheat sheet
description: Git commands cheat sheet
date: '2023-12-15'
categories:
  - git 

published: true
---

- [Add origin](#add-origin)
- [Set-url origin](#set-url-origin) (Set the remote address for a repo)
- [Undo git commit](https://www.notion.so/Git-5bf1697d361c44dc92d320d96adba428?pvs=21)
- [Undo/Unstage a commit](https://www.notion.so/Git-5bf1697d361c44dc92d320d96adba428?pvs=21)
- [Delete local branch](https://www.notion.so/Git-5bf1697d361c44dc92d320d96adba428?pvs=21)
- [un-stage commit (is this the way to un-stage just staged changes with no commit?)](https://www.notion.so/Git-5bf1697d361c44dc92d320d96adba428?pvs=21)
- [undo Commit](https://www.notion.so/Git-5bf1697d361c44dc92d320d96adba428?pvs=21)
- [Order branches](https://www.notion.so/Git-5bf1697d361c44dc92d320d96adba428?pvs=21)
- [Checkout remote branch](https://www.notion.so/Git-5bf1697d361c44dc92d320d96adba428?pvs=21)

## Checkout remote branch

[Connect to a remote branch explanation](https://www.educative.io/answers/how-to-checkout-a-remote-branch-in-git?utm_campaign=brand_educative&utm_source=google&utm_medium=ppc&utm_content=performance_max&eid=5082902844932096&utm_term=&utm_campaign=%5BNew%5D+Performance+Max&utm_source=adwords&utm_medium=ppc&hsa_acc=5451446008&hsa_cam=18511913007&hsa_grp=&hsa_ad=&hsa_src=x&hsa_tgt=&hsa_kw=&hsa_mt=&hsa_net=adwords&hsa_ver=3&gclid=CjwKCAjwpuajBhBpEiwA_ZtfhTzWtSd-n6eynF4zyaAKJYBCbGAO4xZedSfmAHpQTFlLK-6GZmnR_BoCOzsQAvD_BwE)

```bash
git checkout -b <name-your-branch> origin/<name-of-remote-branch>
```

### see remote branches

```jsx
git branch -r
```

## Clear Cache

https://devconnected.com/how-to-clear-git-cache/

## Undo commit

https://stackoverflow.com/questions/927358/how-do-i-undo-the-most-recent-local-commits-in-git

move pointer back one commit keep changes from that commit as uncommitted files

```bash
git reset HEAD~1
```

move point back one commit and destory any changes in that commit 

```bash
git reset --hard HEAD~1
```

## Git branch in order

```
git for-each-ref --sort=-committerdate refs/heads/

# Or using git branch (since version 2.7.0)
git branch --sort=-committerdate  # DESC
git branch --sort=committerdate  # ASC
```

## Add origin

This will set the address for the repo to push to

```bash
git remote add origin git@github.com:kittkat-tech/web.git
```

## Set-url origin

This will change the address for the repo to push to

```bash
git remote set-url origin git@github.com:USERNAME/REPOSITORY.git
```

## show remote origin

this will show the remote origin

```bash
git remote -v
```

https://stackoverflow.com/questions/2510276/undoing-git-reset

## [Undo git commit](https://stackoverflow.com/questions/2510276/undoing-git-reset)

```bash
git reset 'HEAD@{1}'
```

# git reflog (this is a super useful command) - shows all the ref HEADs for the branch

```bash
git reflog
```

output e.g. 

```bash
bc82d25 (HEAD -> BES-212-sign-up-pt2, develop) HEAD@{0}: reset: moving to develop
492c400 (origin/BES-212-sign-up-pt2) HEAD@{1}: commit: chore: removed HEAD tag
b49f267 HEAD@{2}: rebase finished: returning to refs/heads/BES-212-sign-up-pt2
b49f267 HEAD@{3}: rebase: feat: added mobile view
ac1354e HEAD@{4}: rebase: feat: translations added
52af460 HEAD@{5}: rebase: fix: css linting
a5946f4 HEAD@{6}: rebase: fix: Linting problems
40579bc HEAD@{7}: rebase: feat: success state added
aff0411 HEAD@{8}: rebase: feat: added error state
4b2aecc HEAD@{9}: rebase: update: changed Loading spinner image
4d74dc4 HEAD@{10}: rebase: feat: added inprogress indicator
95f30ae HEAD@{11}: rebase: summary view styles
d7e0d3d HEAD@{12}: rebase: fixup fonts
cd8bb6d HEAD@{13}: rebase: wip
```

```

## if you have a -unrelated-histories error

What are unrelated histories?

pull origin master --allow-unrelated-histories

## [How do I check out a remote Git branch?](https://stackoverflow.com/questions/1783405/how-do-i-check-out-a-remote-git-branch)

```tsx
git switch -c test origin/test
```

## un-stage commit (is this the way to un-stage just staged changes with no commit?)

https://stackoverflow.com/questions/6682740/how-can-i-unstage-my-files-again-after-making-a-local-commit

```tsx
git reset HEAD^
```

`git reset --soft HEAD~1`

## Multiple ssh keys

https://www.youtube.com/watch?v=N2hMGEeYR7c 

https://linuxize.com/post/using-the-ssh-config-file/

Navigate to the .ssh config file mine is in `~/.ssh` and run: 

```bash
open config
```

To open the config file in a note pad

this config needs to be there

```bash
# example https://gist.github.com/oanhnn/80a89405ab9023894df7

# HashmapInstitute
Host github.com
  hostName github.com
  AddKeysToAgent yes
  IdentitiesOnly yes
  IdentityFile ~/.ssh/id_ed25519

# shawsy171
Host github.com-shawsy171
  hostName github.com
  AddKeysToAgent yes
  IdentitiesOnly yes
  IdentityFile ~/.ssh/shawsy171/id_ed25519
```

IdentitiesOnly is super important, if you don’t have this ssh will try the first one the has a partular fit almost like regex starts with `/^github.com.*$/` 

solution from [`https://www.tutorialworks.com/ssh-fail-too-many-keys/`](https://www.tutorialworks.com/ssh-fail-too-many-keys/)

I think calling `ssh {Host}` sets the key up

e.g.

```bash
ssh github.com-shawsy171
```

e.g.

```bash
git clone git@github.com-shawsy171:shawsy171/flash-notes-server.git
```

Using http instead of ssh allowed me to push to a repo on my shawsy171 github account when [github.com](http://github.com) ssh was picking up Hashmap Institute credentials 

```bash
git remote set-url origin https://github.com/shawsy171/react-cli.git
```

## Check you have an ssh connection to Github

-T opens an interactive session (what is an interactive session).

`ssh -T git@github.com`

`ssh -vT git@github.com` verbose mode for debugging

## git delete local branch

```bash
git branch -D <branch-name>
```