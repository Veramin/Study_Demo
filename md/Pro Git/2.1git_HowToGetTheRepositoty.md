# 如何获取Git仓库

+ 现在现有的项目或者目录下导入所有文件到Git中

+ 从一个服务器克隆一个现有的Git仓库

####  在现有目录中初始化仓库
如果你打算对现有的项目使用git来管理，那么你只需要进入该目录下，并且输入如下指令：
    
    git init

> 该命令将创建一个.git的子目录， 这个文件是Git仓库的骨干，`千万不要乱动`这个文件。
此时只是进行了初始化，项目里的文件并没有被追踪


####  克隆现有的仓库
为什么要clone现有的仓库呢？如果你想copy一份已经存在的Git仓库，比如为某一个开源项目贡献自己的一份力，这是就会用到`git clone`的指令。克隆仓库的指令命令格式是`git clone [URL]`,比如克隆Git的可链接仓库[Study_Demo](https://github.com/Veramin/Study_Demo)，可以用下边的指令：
    
    git clone https://github.com/Veramin/Study_Demo/md


如果你想在克隆时为自己的本地仓库取一个名字，可以使用如下指令
    
    git clone https://github.com/Veramin/Study_Demo/md myLocalRepositoryName

