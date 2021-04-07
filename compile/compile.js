let _modules = ["Pylite"];
// let _modulesF = {
// 	"Pylite": _PyliteComp,
// }

function _makeError(_errorEr, _lineEr) {
	return `ERROR in ln[${_lineEr}]: ${_errorEr}`
}

function _isModule(_module) {
	_mOutput = "";
	_error = false;
	if (!_modules.includes(_module)) {
		_error = "No, sorry, bot is not on yet"
	}

	return [_mOutput, _error];
}

function _compile(_args, _line) {
	let _erout  = false;
	let _cOutput = "";

	_argsList = _args.split(" ")

	if (!_erout) {
		_module = _argsList[0];

		_ret = _isModule(_module)

		if (_ret[1]) {
			_cOutput = _makeError(`Sorry, the bot "${_module}" is not on or available`, _line) + "\n"
			_erout = true;
		}

		if (!_erout) {
			_funcRest = _argsList;
			_funcRest.splice(0, 1);
			_retList = _PyliteComp(_funcRest, _line);
			_erout = _retList[1];

			_cOutput = _retList[0];
		}


	}

	return [_cOutput, _erout];
}