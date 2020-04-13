// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as fs from 'fs';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "spikeprime" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let NEXT_TERM_ID = 1;
	const terminal = vscode.window.createTerminal('SPIKE PRIME');
	let serial:string = "";

	let disposable = vscode.commands.registerCommand('spikeprime.upload', async () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		const slot = await vscode.window.showInputBox({ prompt: 'Which slot should I upload to? (0-19)' });
		if (serial === "") {
			serial = await vscode.window.showInputBox({ prompt: 'Which port is the hub on? (e.g. COM3, /dev/ttyACM0, /dev/tty.usbserialABC, etc.)'}) as string;
		}
		console.log(serial);

		vscode.window.showInformationMessage('Uploading to hub at '+serial+' on slot '+slot+'.');
		// const terminal = vscode.window.createTerminal(`Ext Terminal #${NEXT_TERM_ID++}`);
		var currentlyOpenTabfilePath = vscode.window.activeTextEditor?.document.uri.fsPath;
		terminal.show();
		terminal.show(true);
		if (fs.existsSync("/bin/sh")) {
			vscode.window.showInformationMessage("UNIX");
			terminal.sendText("python3 ~/spiketools/spikejsonrpc.py -t "+serial+" upload '"+currentlyOpenTabfilePath+"' "+slot);
		} else {
			vscode.window.showInformationMessage("WINDOWS");
			terminal.sendText("python C:\\\spiketools\\\spikejsonrpc.py -t "+serial+" upload \""+currentlyOpenTabfilePath+"\" "+slot);
		}
	});

	let disposable2 = vscode.commands.registerCommand('spikeprime.list', async () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		if (serial === "") {
			serial = await vscode.window.showInputBox({ prompt: 'Which port is the hub on? (e.g. COM3, /dev/ttyACM0, /dev/tty.usbserialABC, etc.)'}) as string;
		}
		console.log(serial);
		// const terminal = vscode.window.createTerminal(`Ext Terminal #${NEXT_TERM_ID++}`);
		vscode.window.showInformationMessage('Working on hub at '+serial+'.');
		var currentlyOpenTabfilePath = vscode.window.activeTextEditor?.document.uri.fsPath;
		terminal.show();
		terminal.show(true);
		if (fs.existsSync("/bin/sh")) {
			vscode.window.showInformationMessage("UNIX");
			terminal.sendText("python3 ~/spiketools/spikejsonrpc.py -t "+serial+" list");
		} else {
			vscode.window.showInformationMessage("WINDOWS");
  			terminal.sendText("python C:\\\spiketools\\\spikejsonrpc.py -t "+serial+" list");
		}
	});

	let disposable3 = vscode.commands.registerCommand('spikeprime.delete', async () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		const slot = await vscode.window.showInputBox({ prompt: 'Which slot should I delete? (0-19)' });
		if (serial === "") {
			serial = await vscode.window.showInputBox({ prompt: 'Which port is the hub on? (e.g. COM3, /dev/ttyACM0, /dev/tty.usbserialABC, etc.)'}) as string;
		}
		console.log(serial);
		// const terminal = vscode.window.createTerminal(`Ext Terminal #${NEXT_TERM_ID++}`);
		var currentlyOpenTabfilePath = vscode.window.activeTextEditor?.document.uri.fsPath;
		vscode.window.showInformationMessage('Deleting program at hub at '+serial+' on slot '+slot+'.');
		terminal.show();
		terminal.show(true);
		if (fs.existsSync("/bin/sh")) {
			vscode.window.showInformationMessage("UNIX");
			terminal.sendText("python3 ~/spiketools/spikejsonrpc.py -t "+serial+" rm "+slot);
		} else {
			vscode.window.showInformationMessage("WINDOWS");
			terminal.sendText("python C:\\\spiketools\\\spikejsonrpc.py -t "+serial+" rm "+slot);
		}
	});

	let disposable4 = vscode.commands.registerCommand('spikeprime.start', async () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		const slot = await vscode.window.showInputBox({ prompt: 'Which program slot should I start? (0-19)' });
		if (serial === "") {
			serial = await vscode.window.showInputBox({ prompt: 'Which port is the hub on? (e.g. COM3, /dev/ttyACM0, /dev/tty.usbserialABC, etc.)'}) as string;
		}
		console.log(serial);
		// const terminal = vscode.window.createTerminal(`Ext Terminal #${NEXT_TERM_ID++}`);
		var currentlyOpenTabfilePath = vscode.window.activeTextEditor?.document.uri.fsPath;
		vscode.window.showInformationMessage('Starting program at hub at '+serial+' on slot '+slot+'.');
		terminal.show();
		terminal.show(true);
		if (fs.existsSync("/bin/sh")) {
			vscode.window.showInformationMessage("UNIX");
			terminal.sendText("python3 ~/spiketools/spikejsonrpc.py -t "+serial+" start "+slot);
		} else {
			vscode.window.showInformationMessage("WINDOWS");
			terminal.sendText("python C:\\\spiketools\\\spikejsonrpc.py -t "+serial+" start "+slot);
		}
	});

	let disposable5 = vscode.commands.registerCommand('spikeprime.stop', async () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		if (serial === "") {
			serial = await vscode.window.showInputBox({ prompt: 'Which port is the hub on? (e.g. COM3, /dev/ttyACM0, /dev/tty.usbserialABC, etc.)'}) as string;
		}
		// const terminal = vscode.window.createTerminal(`Ext Terminal #${NEXT_TERM_ID++}`);
		var currentlyOpenTabfilePath = vscode.window.activeTextEditor?.document.uri.fsPath;
		vscode.window.showInformationMessage('Stopping program at hub at '+serial+'.');
		terminal.show();
		terminal.show(true);
		if (fs.existsSync("/bin/sh")) {
			vscode.window.showInformationMessage("UNIX");
			terminal.sendText("python3 ~/spiketools/spikejsonrpc.py -t "+serial+" stop");
		} else {
			vscode.window.showInformationMessage("WINDOWS");
			terminal.sendText("python C:\\\spiketools\\\spikejsonrpc.py -t "+serial+" stop");
		}
	});

	let disposable6 = vscode.commands.registerCommand('spikeprime.move', async () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		const slot = await vscode.window.showInputBox({ prompt: 'Which program slot should I move? (0-19)' });
		const slot2 = await vscode.window.showInputBox({ prompt: 'Which program slot should I move it to? (0-19)' });
		if (serial === "") {
			serial = await vscode.window.showInputBox({ prompt: 'Which port is the hub on? (e.g. COM3, /dev/ttyACM0, /dev/tty.usbserialABC, etc.)'}) as string;
		}

		// const terminal = vscode.window.createTerminal(`Ext Terminal #${NEXT_TERM_ID++}`);
		var currentlyOpenTabfilePath = vscode.window.activeTextEditor?.document.uri.fsPath;
		terminal.show();
		terminal.show(true);
		vscode.window.showInformationMessage('Moving program at hub at '+serial+' on slot '+slot+' to slot '+slot2+'.');
		if (fs.existsSync("/bin/sh")) {
			vscode.window.showInformationMessage("UNIX");
			terminal.sendText("python3 ~/spiketools/spikejsonrpc.py -t "+serial+" mv "+slot+" "+slot2);
		} else {
			vscode.window.showInformationMessage("WINDOWS");
			terminal.sendText("python C:\\\spiketools\\\spikejsonrpc.py -t "+serial+" mv "+slot+" "+slot2);
		}
	});	

	let disposable7 = vscode.commands.registerCommand('spikeprime.fwinfo', async () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		if (serial === "") {
			serial = await vscode.window.showInputBox({ prompt: 'Which port is the hub on? (e.g. COM3, /dev/ttyACM0, /dev/tty.usbserialABC, etc.)'}) as string;
		}

		// const terminal = vscode.window.createTerminal(`Ext Terminal #${NEXT_TERM_ID++}`);
		var currentlyOpenTabfilePath = vscode.window.activeTextEditor?.document.uri.fsPath;
		vscode.window.showInformationMessage('Working on hub at '+serial+'.');
		terminal.show();
		terminal.show(true);
		if (fs.existsSync("/bin/sh")) {
			vscode.window.showInformationMessage("UNIX");
			terminal.sendText("python3 ~/spiketools/spikejsonrpc.py -t "+serial+" fwinfo");
		} else {
			vscode.window.showInformationMessage("WINDOWS");
			terminal.sendText("python C:\\\spiketools\\\spikejsonrpc.py -t "+serial+" fwinfo");
		}
	});

	let disposable8 = vscode.commands.registerCommand('spikeprime.new', async () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		const name = await vscode.window.showInputBox({ prompt: 'What is the name of the file? (e.g. myprogram.py, etc.)' });
		// const terminal = vscode.window.createTerminal(`Ext Terminal #${NEXT_TERM_ID++}`);
		var folderpath = vscode.window.activeTextEditor?.document.uri.fsPath;
		vscode.window.showInformationMessage('Creating new program '  +name);
		terminal.show();
		terminal.show(true);
		if (fs.existsSync("/bin/sh")) {
			vscode.window.showInformationMessage("UNIX");
			terminal.sendText("cp ~/spiketools/hub/program_template.py '" + name+"'");
		} else {
			vscode.window.showInformationMessage("WINDOWS");
			terminal.sendText("copy C:\\\spiketools\\\hub\\\program_template.py \"" + name+"\"");
		}
	});

	let disposable9 = vscode.commands.registerCommand('spikeprime.getos', async () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		//vscode.
		if (fs.existsSync("/bin/sh")) {
			vscode.window.showInformationMessage("UNIX");
		} else {
			vscode.window.showInformationMessage("WINDOWS");
		}
				
	});

	let disposable10 = vscode.commands.registerCommand('spikeprime.setport', async () => {
		// let serials=await SerialPort.list();
		// let lenserial = serials.length;
		// let i = 0;
		// let items = []
		// while (i < lenserial) {
		// 	items.push(serials[i]['path'] +' - '+ serials[i]['manufacturer'] +' - '+serials[i]['pnpId']);
		// 	i=i+1;
		// }
		// serial = (await vscode.window.showQuickPick(items, {placeHolder: 'Which serial port is the hub on?'}) as string).split("-")[0].split(" ")[0];
		// console.log(serial);
		serial = await vscode.window.showInputBox({ prompt: 'Which port is the hub on? (e.g. COM3, /dev/ttyACM0, /dev/tty.usbserialABC, etc.)'}) as string;
	});

	context.subscriptions.push(disposable);
	context.subscriptions.push(disposable2);
	context.subscriptions.push(disposable3);
	context.subscriptions.push(disposable4);
	context.subscriptions.push(disposable5);
	context.subscriptions.push(disposable6);
	context.subscriptions.push(disposable7);
	context.subscriptions.push(disposable8);
	context.subscriptions.push(disposable9);
	context.subscriptions.push(disposable10);


}

// this method is called when your extension is deactivated
export function deactivate() {}
