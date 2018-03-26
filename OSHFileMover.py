# Created by Ian Patterson
# Tested on Win10 as of 2018/03/25
# Moves old config and logs files created by OSH to config and logs folders, respectively
import os, shutil, errno

logDest = "logs"
configDest = "configs"
cwd = os.getcwd()
print(cwd)
print(cwd + logDest)
print(cwd + configDest)

try:
    os.makedirs(logDest)
except OSError as e:
    if e.errno != errno.EEXIST:
        raise

try:
    os.makedirs(configDest)
except OSError as e:
    if e.errno != errno.EEXIST:
        raise

for file in os.listdir("."):
    if file.startswith("config.json.bak."):
        print(os.path.join("/", file))
        result = shutil.move(file, cwd + "\\" + configDest + "\\" + file)
        print(result)
    elif file.startswith("log_"):
        print(os.path.join("/", file))
        result = shutil.move(file, cwd + "\\" + logDest + "\\" + file)
        print(result)
