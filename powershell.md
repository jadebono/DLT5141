# `Basic Commands in Microsoft PowerShell`

[Return to main page](README.md)

---

Microsoft's PowerShell is a command shell that allows you to type commands straight into the terminal. It is often quicker and more convenient to use PowerShell to navigate around your files and folders and manipulate especially in the terminal of VS Code. In this document, you will find a list of PowerShell commands and how to use them.

---

## `PowerShell Commands`

- mkdir: the mkdir command creates a few folder:

```powershell
mkdir repos
```

- cd: with cd you can navigate into your chosen folder

```powershell
cd repos
```

to move one folder back use cd ..

```powershell
cd ..
```

- ni: create new files

```powershell
mkdir webpage
cd webpage
ni index.html
```

- ls, dir: both of these print a list of all files in a directory

```powershell
dir
ls
```

- del: deletes files

```powershell
del index.html
```

- rm: deletes folders (also files)

```powershell
mkdir newdir
rm newdir
```

```powershell
ni styles.css
rm styles.css
```

**Note:** You should be able to use these commands in the terminal of vscode. Do note however that these are Microsoft PowerShell commands only. However, there are reasons why some will work on Mac or Linux but those have their own command shells and you should become familiar with their own commands.

---

## `Useful Links`

- [What is PowerShell || Microsoft](https://learn.microsoft.com/en-us/powershell/scripting/overview?view=powershell-7.3)
- [Basic PowerShell Cheatsheet](https://www.comparitech.com/net-admin/powershell-cheat-sheet/)

---
