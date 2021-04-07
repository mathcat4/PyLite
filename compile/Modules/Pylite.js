function _PyliteComp(_argsPy, _linePy) {
	_func = _argsPy[0];

	if (_func == "say") {
		_argsPy.splice(0, 1);
		_ret = ""
		_erout = false;

		_argsPyS = _argsPy.join(" ")

		if (_argsPyS.startsWith('"') && _argsPyS.endsWith('"')) {
			_ret = _argsPyS.slice(1, -1) + "\n"

		} else if (_argsPyS.startsWith('"') && !_argsPyS.endsWith('"')) {
			_ret = _makeError("If you begin with a string, ending it will be good too!", _linePy);
			_erout = true;

		} else if (!_argsPyS.startsWith('"') && _argsPyS.endsWith('"')) {
			_ret = _makeError("If you end with a string, beginning it will be good too!", _linePy);
			_erout = true;

		} else {
			if (!isNaN(_argsPyS)) {
				_ret = _argsPyS + "\n";

			} else {
				if (typeof (_variables[_argsPyS]) === 'undefined') {
					_ret = _makeError(`There is no variable named ${_argsPyS}. If you want a string, use the quotes`, _linePy);
					_erout = true;
				} else {
					_ret = _variables[_argsPyS] + "\n";
				}
			}
		}

		return [_ret, _erout];

	} else if (_func == "on") {
		_argsPy.splice(0, 1);
		_argsPy = _argsPy.join(" ")
		_ret = ""
		_erout = false;

		if (_preModules.includes(_argsPy)) {
			if (!_modules.includes(_argsPy)) {
				_modules.push(_argsPy);
			} else {
				_ret = _makeError(`Bot ${_argsPy} is already on`, _linePy);
				_erout = true;
			}
		} else {
			_ret = _makeError(`Sorry, no Bot is named ${_argsPy}`, _linePy);
			_erout = true;
		}

		return [_ret, _erout];
	}

}