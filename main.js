let _input;
let _output;
let _code;
let _runButton;

let _stillDown = false;

function setup() {
	_input = select("#input");

	_codeLength = select("#length")

	_code = select("#code");
	_code.input(changeCodeLength);

	_output = select("#output");
	_runButton = select("#run-button");
	_runButton.mousePressed(_runEvent);
}

function changeCodeLength() {
	_codeLength.html(_code.value().length);
}

function _runEvent() {
	_output.value("");
	_outputList = []
	_isError = false;
	_error = "";

	_codeInp = _code.value();
	_codeInpArr = _codeInp.split("\n")

	_lineNum = 1;

	for (let _codeLine of _codeInpArr) {
		if (!_isError) {
			_compiled = _compile(_codeLine, _lineNum);

			if (_compiled[1]) {
				_isError = true;
				_error = _compiled[0];
			} else {
				_outputList.push(_compiled[0]);
				_lineNum++;
			}

		}

	}

	if (_isError) {
		_output.value(_error)
	} else {
		_output.value(_outputList.join("\n"));
	}
}

function draw() {
	if (keyIsDown(ENTER) && keyIsDown(CONTROL)) {
		_stillDown = true;
	} else {
		if (_stillDown) {
			_stillDown = false;
			_runEvent();
		}
	}
}