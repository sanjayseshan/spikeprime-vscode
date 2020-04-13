# LEGO SPIKE PRIME Extension for VS Code (v0.0.2)

This extension for VS Code will allow you to easily program the SPIKE PRIME in a micropython environment. Credit to @nutki for the prior work on actually transferring files to the hub.

## Features

The avaliable commands are: "Upload to SPIKE PRIME", "List SPIKE PRIME files", "Delete SPIKE PRIME file", "Start SPIKE PRIME program", "Stop SPIKE PRIME program", "Move SPIKE PRIME program", "SPIKE PRIME Firmware Info", and "Create new SPIKE PRIME micropython program" (from template). The end result is that you can run micropython programs on your hub just like a standard scratch program

# Windows

## Installation
1) Download the latest VS Code (currently 1.44.0) from https://code.visualstudio.com/ and install it. The default options will work.
2) Go to Control Panel and uninstall all exising versions of Python if needed
3) Install the latest version of Python 3 from https://python.org/. Enable the "Add Python to PATH" option at the bottom of the install window and chose "Install Now" <img src="https://docs.python.org/3/_images/win_installer.png">
4) Download https://github.com/sanjayseshan/spikeprime-tools/archive/v0.0.3.zip and unzip it. Run the file (double-click) install.windows.bat to install to your hard drive on C:\. If the installer fails, try running as Administrator. Windows Defender might flag it as an unrecognized installer. Just allow it to run. If it continues to fail, it is probably because you forgot to add Python to your path or you installed Python 2.
5) Download https://github.com/sanjayseshan/spikeprime-vscode/releases/download/v0.0.2/spikeprime-0.0.2.vsix
6) Open VS Code and press Ctrl-Shift-P. Type in "Install from VSIX" and then select the spikeprime-0.0.2.vsix file you downloaded.
<img src="https://github.com/sanjayseshan/spikeprime-vscode/blob/master/pictures/installvsix.JPG?raw=true">
7) Restart your PC

## Actually programming
1) Somewhere on your computer, make a folder for your programs.
2) Open Visual Studio (VS) Code and do File --> "Open Folder" and select your new folder.
3) Press Ctrl-Shift-P and type "spike". You will see all the SPIKE PRIME commands. Select "Create new...program" and enter the name you want. Remember to end the file with the .py extension. You are ready to program, starting with the template:
<img src="https://github.com/sanjayseshan/spikeprime-vscode/blob/master/pictures/image.png?raw=true">

## Downloading to the hub
1) Plug in the SPIKE PRIME using USB (BT is not tested and probably will not work with this method)
2) Locate the serial port through Device Manager (you can find this in the Start Menu). Under ports, look for something named USB Serial Port or USB Serial Device. If there are many, try disconnecting the hub and reconnecting it to see which one disappears. Note down the id, which will be COMX (e.g. COM3, COM25, etc.).
<img src="https://github.com/sanjayseshan/spikeprime-vscode/blob/master/pictures/devicemanager.JPG?raw=true">
3) Press Ctrl-Shift-P and type "spike". Chose to "Upload to SPIKE PRIME". Enter in the program slot id you want to upload to (similar to the SPIKE PRIME software - between 1 and 19 inclusive) and the serial port as determined in step 2. The process will be shown in the terminal below.
<img src="https://github.com/sanjayseshan/spikeprime-vscode/blob/master/pictures/upload.JPG?raw=true">
If it takes longer than ~30 seconds, try cancelling the command using Ctrl-C a couple times in the terminal window below and try again. If it continues to not work or give an error, you might have the wrong serial port, your firmware is outdated, or you have a SPIKE PRIME software window open.

You can try the other commands in the list as needed.


# Debian Linux
Derivatives such as Ubuntu will work also with these instructions.

## Installation
1) Download the latest VS Code (currently 1.44.0) from https://code.visualstudio.com/ and install it (e.g. sudo dpkg -i code_1.44.0-XXX_amd64.deb or open with Software Installer)
2) Download https://github.com/sanjayseshan/spikeprime-tools/releases/download/v0.0.3/spikeprime-tools.tgz and extract it. Run the file install.debian.sh in the directory to install to your home directory. Depending on your setup, you might be able to simply double-click the install.debian.sh file to run setup (use the Run in Terminal option). Otherwise, use terminal and run "bash install.debian.sh" in that directory. It will automatically install python3 and needed dependencies from apt. You will be asked for your [root] password as necessary.
<img width="40%" src="https://github.com/sanjayseshan/spikeprime-vscode/blob/master/pictures/open-terminal.png?raw=true">
<img width="40%" src="https://github.com/sanjayseshan/spikeprime-vscode/blob/master/pictures/terminal-linux.png?raw=true">
3) Download https://github.com/sanjayseshan/spikeprime-vscode/releases/download/v0.0.2/spikeprime-0.0.2.vsix
4) Open VS Code and press Ctrl-Shift-P. Type in "Install from VSIX" and then select the spikeprime-0.0.2.vsix file you downloaded.
<img src="https://github.com/sanjayseshan/spikeprime-vscode/blob/master/pictures/linux-vscode1.png?raw=true">

## Actually programming
1) Somewhere on your computer, make a folder for your programs.
2) Open Visual Studio (VS) Code and do File --> "Open Folder" and select your new folder.
3) Press Ctrl-Shift-P and type "spike". You will see all the SPIKE PRIME commands. Select "Create new...program" and enter the name you want. Remember to end the file with the .py extension. You are ready to program, starting with the template:
<img src="https://github.com/sanjayseshan/spikeprime-vscode/blob/master/pictures/linux-vscode2.png?raw=true">

## Downloading to the hub
1) Plug in the SPIKE PRIME using USB (BT is not tested and probably will not work with this method)
2) Locate the serial port using "sudo dmesg" in terminal. Look towards the end of the id of a USB ACM device and its id (e.g. ttyACM0). In the example below, the serial id would be /dev/ttyACM0 *do not forget the /dev part*
<img src="https://github.com/sanjayseshan/spikeprime-vscode/blob/master/pictures/dmesg.png?raw=true">
3) Press Ctrl-Shift-P and type "spike". Chose to "Upload to SPIKE PRIME". Enter in the program slot id you want to upload to (similar to the SPIKE PRIME software - between 1 and 19 inclusive) and the serial port as determined in step 2. The process will be shown in the terminal below.
<img src="https://github.com/sanjayseshan/spikeprime-vscode/blob/master/pictures/upload.JPG?raw=true">
If it takes longer than ~30 seconds, try cancelling the command using Ctrl-C a couple times in the terminal window below and try again. If it continues to not work or give an error, you might have the wrong serial port, your firmware is outdated, or you have the serial port open elsewhere (e.g. screen or a modem software).

You can try the other commands in the list as needed.

# Mac OS X

## Installation
1) Download the latest VS Code (currently 1.44.0) from https://code.visualstudio.com/ and install it. The default options will work.
2) Install the latest version of Python 3 from https://python.org/. <img src="https://cdn.osxdaily.com/wp-content/uploads/2018/06/install-python3-on-mac.jpg">
4) Download https://github.com/sanjayseshan/spikeprime-tools/releases/download/v0.0.3/spikeprime-tools.tgz and extract it. Run the file (double-click) install.macos.command to install to your home folder. 
5) Download https://github.com/sanjayseshan/spikeprime-vscode/releases/download/v0.0.2/spikeprime-0.0.2.vsix
6) Open VS Code and press Command-Shift-P. Type in "Install from VSIX" and then select the spikeprime-0.0.2.vsix file you downloaded.
<img src="https://github.com/sanjayseshan/spikeprime-vscode/blob/master/pictures/osx-vscode-vsix.JPG?raw=true">

## Actually programming
1) Somewhere on your computer, make a folder for your programs.
2) Open Visual Studio (VS) Code and do File --> Open and select your new folder.
3) Press Command-Shift-P and type "spike". You will see all the SPIKE PRIME commands. Select "Create new...program" and enter the name you want. Remember to end the file with the .py extension. You are ready to program, starting with the template:
<img src="https://github.com/sanjayseshan/spikeprime-vscode/blob/master/pictures/linux-vscode2.png?raw=true">

## Downloading to the hub
1) Open terminal from Applications -> Utilities -> Terminal
2) Run the following command: "ls /dev/tty.usb*"
<img src="https://github.com/sanjayseshan/spikeprime-vscode/blob/master/pictures/osx-term-usb.png?raw=true">
3) Plug in the SPIKE PRIME using USB
4) Run the following command: "ls /dev/tty.usb*" again and see what was added to the list. That is your serial port id. For example if it were to list "tty.usbserial-A700dYoR", your serial port is "/dev/tty.usbserial-A700dYoR", which is what you will use in the future.
3) Press Command-Shift-P and type "spike". Chose to "Upload to SPIKE PRIME". Enter in the program slot id you want to upload to (similar to the SPIKE PRIME software - between 1 and 19 inclusive) and the serial port as determined in step 2. The process will be shown in the terminal below.
<img src="https://github.com/sanjayseshan/spikeprime-vscode/blob/master/pictures/upload.JPG?raw=true">
If it takes longer than ~30 seconds, try cancelling the command using Ctrl-C a couple times in the terminal window below and try again. If it continues to not work or give an error, you might have the wrong serial port, your firmware is outdated, or you have a SPIKE PRIME software window open.

You can try the other commands in the list as needed.

