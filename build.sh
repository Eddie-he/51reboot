fis3 release -cd ../
cd ../
svn st|awk '{print $2}'|xargs svn add
svn commit -m'bug fix'