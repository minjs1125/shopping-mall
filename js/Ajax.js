var Ajax = (function(){
	function Ajax(_file) {
		this.file = _file;
		this.data = {};//전달되는 데이타, 현재 아무것도 들어있지 않음
	}
	Ajax.prototype.addData = function(_data) {
		this.data = _data;//main에서 전달한 chk를 받아서 변한 값을 밑에 this.data로 ㅅㅏ용됨
	}
	Ajax.prototype.send = function(_fn) {
		this.fn = _fn;
		$.ajax({
			url: this.file,
			type: "post",
			dataType: "json",
			data: this.data,
			success: this.fn,
			error: function (xhr, status, error) {
				alert("통신이 원할하지 않습니다.\n잠시 후 다시 시도해 주세요.");
				console.log(xhr, status, error);
			}
		});
	}
	return Ajax;
}());