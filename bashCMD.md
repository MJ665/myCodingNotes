# bash command

To give path of the current directory
```bash
pwd
```

To give path of the current directory
```bash
cd
```


To get list of the current directory & files
```bash
ls
ls newdir
ls -l
ls -l newdir
ls -r newdir
ls -t newdir
ls -lt newdir
ls -la
ls -lR
ls -lr newdir
ls -s newdir
ls -lt automated_dir2
ls -lR | grep .json

```



To make new directory directory
```bash
mkdir
```



To creat new file
```bash
touch
```



To to concanicate content of file 2 into file 1
```bash
cat
cat a.txt
cat > a.txt
cat >> a.txt
```




To open vim in current folder
```bash
vi
```





To move a file
```bash
mv a.txt b.txt  #->rename a file
mv a.txt ./hello_world
```


To change persmissions
```bash
chmod u+x newscript.sh
chmod g+wx newscript.sh
chmod 664 newfile.txt
```







To copy file 2 content into file 1
```bash
cp
```





To give path of the current directory
```bash
nvm
```




To give path of the current directory
```bash
npm
```




To give path of the current directory
```bash
node
```

To write someting in the terminal
```bash
echo
```
To see some particular file content
```bash
head a.txt
tail a.txt
head -20 a.txt
pipe operator |
command 1 | command 2
tail -n +25 newfile.txt | head
wc newfile.txt
```

```bash
grep # occurences of certain word cretain or file in some folder or file
grep "one" newfile.txt
grep "one" newfile.txt | wc
grep "one" newfile.txt | wc -l
grep -c "one" newfile.txt
grep -h "one" newfile.txt
grep -hi "one" newfile.txt
grep -hin "one" newfile.txt
grep -hinw "one" newfile.txt # to look for whole word 
grep -o "one" newfile.txt
grep -w "one" newfile.txt
grep -hir "one" 


```

cat command to view the script
```bash
cat newfile.txt
```



bash script
```bash
# On the first line of our script we must specify which interpreter we would like to use to parse our script. in this scenario it is bash thus we must put the shebang in the first line of our script

#!/bin/bash
echo "Hello World ! from meet jain"
mkdir automated_dir
cd automated_dir && touch newscript_file.txt

# now if we run cat newscript.sh then we can view the content of the file

```



##
```bash


# assumen we have made a log file

# to view content of that log file
cat log.txt


grep "ERROR" log.txt

# now to view all the content apart from info
grep -v "INFO" log.txt

grep -A "ERROR" log.txt # to see the line and also see the after the occurance of the error
grep -B "ERROR" log.txt # to see the line and also see the before the occurance of the error
grep -C "ERROR" log.txt # to see the line and also see the both after & before the occurance of the error




# sed and awk commang in bash

sed [OPTIONS] SCRIPT FILE...
"s/pattern/replacement"
sed "s/ERROR/CRITICAL/" log.txt
sed -ibackup "s/ERROR/CRITICAL" log.txt
sed "3 s/ERROR/CRITICAL" log.txt
sed "3.5 s/ERROR/CRITICAL" log.txt
sed -n "3./ERROR/ p" log.txt


awk
awk [options] script file
hwo pattern are define: (patterns){actions}
awk '/ERROR/{print $0}' log.txt
awk '{gsub{/ERROR/. "CRITICAL"}} {print}' log.txt
awk 'BEGIN {print "LOG SUMMARY\n-----------------"} {print} END {print "------------ \nEND OF LOG SUMMARY"}" log.txt
awk "{print $1, $2}" log.txt
awk -F "," "{print $1, $2}" log.txt
awk "{count[$2]++} END {print count ["ERROR]}" log.txt
awk "{ if {$1 > 15989898} {print $0}}" log.txt



```







Harkirat Git and Github

 -  Highlight: Git and Github Notes
centralized Version Control system:
subversion and team foundation 
distributed version control system git github
     
- Blobs

Blob stands for Binary Large Object. Each version of a file is represented by blob. A blob holds the file data but doesn't contain any metadata about the file. It is a binary file, and in Git database, it is named as SHA1 hash of that file. In Git, files are not addressed by names. Everything is content-addressed.
- Trees

Tree is an object, which represents a directory. It holds blobs as well as other sub-directories. A tree is a binary file that stores references to blobs and trees which are also named as SHA1 hash of the tree object.
    
- Github workflow
write code -> commit -> pull request
- lo8cal git workflow
write code-> stage git add commit -> commit changes ->git commit -> git push -> then create a pr


git branches

masters
develop sub branch 
topic