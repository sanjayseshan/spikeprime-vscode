"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
const fs = require("fs");
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "spikeprime" is now active!');
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // The commandId parameter must match the command field in package.json
    let NEXT_TERM_ID = 1;
    const terminal = vscode.window.createTerminal('SPIKE PRIME');
    let serial = "";
    let disposable = vscode.commands.registerCommand('spikeprime.upload', () => __awaiter(this, void 0, void 0, function* () {
        // The code you place here will be executed every time your command is executed
        var _a;
        // Display a message box to the user
        const slot = yield vscode.window.showInputBox({ prompt: 'Which slot should I upload to? (0-19)' });
        if (serial === "") {
            serial = (yield vscode.window.showInputBox({ prompt: 'Which port is the hub on? (e.g. COM3, /dev/ttyACM0, /dev/tty.usbserialABC, etc.)' }));
        }
        console.log(serial);
        vscode.window.showInformationMessage('Uploading to hub at ' + serial + ' on slot ' + slot + '.');
        // const terminal = vscode.window.createTerminal(`Ext Terminal #${NEXT_TERM_ID++}`);
        var currentlyOpenTabfilePath = (_a = vscode.window.activeTextEditor) === null || _a === void 0 ? void 0 : _a.document.uri.fsPath;
        terminal.show();
        terminal.show(true);
        if (fs.existsSync("/bin/sh")) {
            vscode.window.showInformationMessage("UNIX");
            terminal.sendText("python3 ~/spiketools/spikejsonrpc.py -t " + serial + " upload '" + currentlyOpenTabfilePath + "' " + slot);
        }
        else {
            vscode.window.showInformationMessage("WINDOWS");
            terminal.sendText("python C:\\\spiketools\\\spikejsonrpc.py -t " + serial + " upload \"" + currentlyOpenTabfilePath + "\" " + slot);
        }
    }));
    let disposable2 = vscode.commands.registerCommand('spikeprime.list', () => __awaiter(this, void 0, void 0, function* () {
        // The code you place here will be executed every time your command is executed
        var _b;
        // Display a message box to the user
        if (serial === "") {
            serial = (yield vscode.window.showInputBox({ prompt: 'Which port is the hub on? (e.g. COM3, /dev/ttyACM0, /dev/tty.usbserialABC, etc.)' }));
        }
        console.log(serial);
        // const terminal = vscode.window.createTerminal(`Ext Terminal #${NEXT_TERM_ID++}`);
        vscode.window.showInformationMessage('Working on hub at ' + serial + '.');
        var currentlyOpenTabfilePath = (_b = vscode.window.activeTextEditor) === null || _b === void 0 ? void 0 : _b.document.uri.fsPath;
        terminal.show();
        terminal.show(true);
        if (fs.existsSync("/bin/sh")) {
            vscode.window.showInformationMessage("UNIX");
            terminal.sendText("python3 ~/spiketools/spikejsonrpc.py -t " + serial + " list");
        }
        else {
            vscode.window.showInformationMessage("WINDOWS");
            terminal.sendText("python C:\\\spiketools\\\spikejsonrpc.py -t " + serial + " list");
        }
    }));
    let disposable3 = vscode.commands.registerCommand('spikeprime.delete', () => __awaiter(this, void 0, void 0, function* () {
        // The code you place here will be executed every time your command is executed
        var _c;
        // Display a message box to the user
        const slot = yield vscode.window.showInputBox({ prompt: 'Which slot should I delete? (0-19)' });
        if (serial === "") {
            serial = (yield vscode.window.showInputBox({ prompt: 'Which port is the hub on? (e.g. COM3, /dev/ttyACM0, /dev/tty.usbserialABC, etc.)' }));
        }
        console.log(serial);
        // const terminal = vscode.window.createTerminal(`Ext Terminal #${NEXT_TERM_ID++}`);
        var currentlyOpenTabfilePath = (_c = vscode.window.activeTextEditor) === null || _c === void 0 ? void 0 : _c.document.uri.fsPath;
        vscode.window.showInformationMessage('Deleting program at hub at ' + serial + ' on slot ' + slot + '.');
        terminal.show();
        terminal.show(true);
        if (fs.existsSync("/bin/sh")) {
            vscode.window.showInformationMessage("UNIX");
            terminal.sendText("python3 ~/spiketools/spikejsonrpc.py -t " + serial + " rm " + slot);
        }
        else {
            vscode.window.showInformationMessage("WINDOWS");
            terminal.sendText("python C:\\\spiketools\\\spikejsonrpc.py -t " + serial + " rm " + slot);
        }
    }));
    let disposable4 = vscode.commands.registerCommand('spikeprime.start', () => __awaiter(this, void 0, void 0, function* () {
        // The code you place here will be executed every time your command is executed
        var _d;
        // Display a message box to the user
        const slot = yield vscode.window.showInputBox({ prompt: 'Which program slot should I start? (0-19)' });
        if (serial === "") {
            serial = (yield vscode.window.showInputBox({ prompt: 'Which port is the hub on? (e.g. COM3, /dev/ttyACM0, /dev/tty.usbserialABC, etc.)' }));
        }
        console.log(serial);
        // const terminal = vscode.window.createTerminal(`Ext Terminal #${NEXT_TERM_ID++}`);
        var currentlyOpenTabfilePath = (_d = vscode.window.activeTextEditor) === null || _d === void 0 ? void 0 : _d.document.uri.fsPath;
        vscode.window.showInformationMessage('Starting program at hub at ' + serial + ' on slot ' + slot + '.');
        terminal.show();
        terminal.show(true);
        if (fs.existsSync("/bin/sh")) {
            vscode.window.showInformationMessage("UNIX");
            terminal.sendText("python3 ~/spiketools/spikejsonrpc.py -t " + serial + " start " + slot + "; python3 ~/spiketools/readserial.py");
        }
        else {
            vscode.window.showInformationMessage("WINDOWS");
            terminal.sendText("python C:\\\spiketools\\\spikejsonrpc.py -t " + serial + " start " + slot + "; python C:\\\spiketools\\\readserial.py " + serial);
        }
    }));
    let disposable5 = vscode.commands.registerCommand('spikeprime.stop', () => __awaiter(this, void 0, void 0, function* () {
        // The code you place here will be executed every time your command is executed
        var _e;
        // Display a message box to the user
        if (serial === "") {
            serial = (yield vscode.window.showInputBox({ prompt: 'Which port is the hub on? (e.g. COM3, /dev/ttyACM0, /dev/tty.usbserialABC, etc.)' }));
        }
        // const terminal = vscode.window.createTerminal(`Ext Terminal #${NEXT_TERM_ID++}`);
        var currentlyOpenTabfilePath = (_e = vscode.window.activeTextEditor) === null || _e === void 0 ? void 0 : _e.document.uri.fsPath;
        vscode.window.showInformationMessage('Stopping program at hub at ' + serial + '.');
        terminal.show();
        terminal.show(true);
        if (fs.existsSync("/bin/sh")) {
            vscode.window.showInformationMessage("UNIX");
            terminal.sendText("python3 ~/spiketools/spikejsonrpc.py -t " + serial + " stop");
        }
        else {
            vscode.window.showInformationMessage("WINDOWS");
            terminal.sendText("python C:\\\spiketools\\\spikejsonrpc.py -t " + serial + " stop");
        }
    }));
    let disposable6 = vscode.commands.registerCommand('spikeprime.move', () => __awaiter(this, void 0, void 0, function* () {
        // The code you place here will be executed every time your command is executed
        var _f;
        // Display a message box to the user
        const slot = yield vscode.window.showInputBox({ prompt: 'Which program slot should I move? (0-19)' });
        const slot2 = yield vscode.window.showInputBox({ prompt: 'Which program slot should I move it to? (0-19)' });
        if (serial === "") {
            serial = (yield vscode.window.showInputBox({ prompt: 'Which port is the hub on? (e.g. COM3, /dev/ttyACM0, /dev/tty.usbserialABC, etc.)' }));
        }
        // const terminal = vscode.window.createTerminal(`Ext Terminal #${NEXT_TERM_ID++}`);
        var currentlyOpenTabfilePath = (_f = vscode.window.activeTextEditor) === null || _f === void 0 ? void 0 : _f.document.uri.fsPath;
        terminal.show();
        terminal.show(true);
        vscode.window.showInformationMessage('Moving program at hub at ' + serial + ' on slot ' + slot + ' to slot ' + slot2 + '.');
        if (fs.existsSync("/bin/sh")) {
            vscode.window.showInformationMessage("UNIX");
            terminal.sendText("python3 ~/spiketools/spikejsonrpc.py -t " + serial + " mv " + slot + " " + slot2);
        }
        else {
            vscode.window.showInformationMessage("WINDOWS");
            terminal.sendText("python C:\\\spiketools\\\spikejsonrpc.py -t " + serial + " mv " + slot + " " + slot2);
        }
    }));
    let disposable7 = vscode.commands.registerCommand('spikeprime.fwinfo', () => __awaiter(this, void 0, void 0, function* () {
        // The code you place here will be executed every time your command is executed
        var _g;
        // Display a message box to the user
        if (serial === "") {
            serial = (yield vscode.window.showInputBox({ prompt: 'Which port is the hub on? (e.g. COM3, /dev/ttyACM0, /dev/tty.usbserialABC, etc.)' }));
        }
        // const terminal = vscode.window.createTerminal(`Ext Terminal #${NEXT_TERM_ID++}`);
        var currentlyOpenTabfilePath = (_g = vscode.window.activeTextEditor) === null || _g === void 0 ? void 0 : _g.document.uri.fsPath;
        vscode.window.showInformationMessage('Working on hub at ' + serial + '.');
        terminal.show();
        terminal.show(true);
        if (fs.existsSync("/bin/sh")) {
            vscode.window.showInformationMessage("UNIX");
            terminal.sendText("python3 ~/spiketools/spikejsonrpc.py -t " + serial + " fwinfo");
        }
        else {
            vscode.window.showInformationMessage("WINDOWS");
            terminal.sendText("python C:\\\spiketools\\\spikejsonrpc.py -t " + serial + " fwinfo");
        }
    }));
    let disposable8 = vscode.commands.registerCommand('spikeprime.new', () => __awaiter(this, void 0, void 0, function* () {
        // The code you place here will be executed every time your command is executed
        var _h;
        // Display a message box to the user
        const name = yield vscode.window.showInputBox({ prompt: 'What is the name of the file? (e.g. myprogram.py, etc.)' });
        // const terminal = vscode.window.createTerminal(`Ext Terminal #${NEXT_TERM_ID++}`);
        var folderpath = (_h = vscode.window.activeTextEditor) === null || _h === void 0 ? void 0 : _h.document.uri.fsPath;
        vscode.window.showInformationMessage('Creating new program ' + name);
        terminal.show();
        terminal.show(true);
        if (fs.existsSync("/bin/sh")) {
            vscode.window.showInformationMessage("UNIX");
            terminal.sendText("cp ~/spiketools/hub/program_template.py '" + name + "'");
        }
        else {
            vscode.window.showInformationMessage("WINDOWS");
            terminal.sendText("copy C:\\\spiketools\\\hub\\\program_template.py \"" + name + "\"");
        }
    }));
    let disposable9 = vscode.commands.registerCommand('spikeprime.getos', () => __awaiter(this, void 0, void 0, function* () {
        // The code you place here will be executed every time your command is executed
        // Display a message box to the user
        //vscode.
        if (fs.existsSync("/bin/sh")) {
            vscode.window.showInformationMessage("UNIX");
        }
        else {
            vscode.window.showInformationMessage("WINDOWS");
        }
    }));
    let disposable10 = vscode.commands.registerCommand('spikeprime.setport', () => __awaiter(this, void 0, void 0, function* () {
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
        serial = (yield vscode.window.showInputBox({ prompt: 'Which port is the hub on? (e.g. COM3, /dev/ttyACM0, /dev/tty.usbserialABC, etc.)' }));
    }));
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
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map