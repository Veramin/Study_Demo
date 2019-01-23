# 初次运行的配置

####  用户信息配置

安装完git首先应该配置`用户名称`和`邮件地址`，因为每一个git的提交都会使用这些信息，并且它会写入到你的每一次提交中，不可更改

    git config --global user.name "Vera"
    git config --global user.email vera_min@163.com

> 注意：--global是-g的全称，如果使用了--global该选项，那么命令只需输入一次，因为无论在后在系统上做任何事情，git都会使用第一次配置好的那些信息。如果想针对特定的项目使用不同的名称和邮箱地址时，可以在没有运行-g选项的目录下来配置


####   检查配置信息
如果想要检查配置信息，可以使用`git config --list`命令来列出所有的Git配置信息

    git config --list
    user.name "Vera"
    user.email vera_min@163.com

如果想检查特定的某一项，可以使用`git config <key>`的命令来检查指定的某一项配置

    git config user.name
    Vera