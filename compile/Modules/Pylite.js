function _PyliteComp(_argsPy, _linePy) {
	_func = _argsPy[0];

	if (_func == "say") {
		_argsPy.splice(0, 1);
		_ret = ""
		_erout = false;
		_retStart = false;
		_retEnd = false;

		for (let _argPy of _argsPy) {
			if (_argPy.startsWith('"') && _argPy.endsWith('"') && _retStart == false && _retEnd == false) {
				_ret += _argPy.slice(1).slice(0, -1) + " ";
				_retStart = true;
				_retEnd = true;
			} else if (_argPy.startsWith('"') && _retStart == false && _retEnd == false) {
				_ret += _argPy.slice(1) + " ";
				_retStart = true;
			} else if (_argPy.endsWith('"') && _retStart == true && _retEnd == false) {
				_ret += _argPy.slice(0, -1);
				_retEnd = true;
			} else if (_retStart == true && _retEnd == false) {
				_ret += _argPy + " ";
			}
		}


		if (!_retEnd) {
			_ret = _makeError(`If you begin/end with a string, ending/beginning it will be good to!`, _linePy);
			_erout = true;
		}

		return [_ret, _erout];
	}

}