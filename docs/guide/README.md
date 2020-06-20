# Git介绍

## 特点

> Git是目前世界上最先进的分布式版本控制系统。

- 版本控制系统

  主要是针对文本文件的版本控制，记录、回退到任意版本。

- 分布式

  区别于集中式版本控制系统（如SVN），Git可以不需要中央服务器，每个主机都可以保存完整的提交记录。

## 工作原理

`.git`的目录结构：

```sh
│   COMMIT_EDITMSG
│   config
│   description
│   FETCH_HEAD
│   HEAD
│   index
│   ORIG_HEAD
├───hooks
├───info
├───logs
│   └───refs
│       ├───heads
│       └───remotes
│           └───origin
├───objects
│   ├───02
│   ...... 
│   ├───info
│   └───pack
└───refs
    ├───heads
    ├───remotes
    │   └───origin
    └───tags
```

### objects

objects中有blob，tree，commit等不同类型（tag）

- blob存储文件内容（不含文件名等信息），`git add`后生成。

- tree存储目录结构（关联到几个blog），算作一次项目的快照。

- commit存储一个提交的快照和信息

  - 关联tree
  - 提交的日期、信息、作者等

  - 关联上次提交的commit（父节点，合并出来的分支还会有多个父节点）

::: tip Hash值

Git大量使用Hash值作为唯一标识，通过记录object对应Hash值即可关联。

:::

### refs

**指针**：指向一个commit（Hash值）。

工作的HEAD、分支、普通tag都可以简单理解成一个指针，版本回退很多时候就是移动下指针。

::: tip

或者说他们都持有一个指针。

:::

### 三分区

- 工作目录 （ Working Directory ）：你所看到的文件就是工作目录，编辑工作在这里。

- 暂存区/索引（ Index or Staging Area ）：暂存区的代码提交到Git仓库。

  **索引**类似一个**tree**，指向blob，`git add`后更新索引，指向新的blob。

- Git仓库（ Repository ）：`.git`文件夹下内容。

### 一次提交
**那我们看看在`master`分支创建一个`commit`的都做了什么：**

1. 修改`README.md`

   工作目录改变，其他没有变动。

2. `git add README.md`

   1. Git创建一个`blob`
   2. 索引原来`README.md`的`blob`更新为刚刚新建的`blob`

3. `git commit -m "message"`

   1. 根据索引创建一个`tree`
   2. 根据提交的信息创建一个`commit`
   3. 将master分支的指针移动到新的`commit`节点