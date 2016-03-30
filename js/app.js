var app = angular.module('insydoApp', ['cfp.loadingBar']);

// Popup Template
function popup(attrs) {
	$( "#myModal" ).remove();
	if(attrs.ngApp == 'insydoApp') {
		$popup = $('<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-body">'+attrs.popup+'</div><div class="modal-footer"> <button type="button" class="btn btn-default" data-dismiss="modal">Close</button></div></div></div></div>');
	} else {
		$popup = $('<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><h4 class="modal-title" id="myModalLabel">'+attrs.popup+'</h4></div><div class="modal-body">'+attrs.popupBody+'</div><div class="modal-footer"> <button type="button" class="btn btn-default" data-dismiss="modal">Close</button></div></div></div></div>');
	}
	$popup.appendTo('body');
	$('#myModal').modal('show');
	sessionStorage.setItem('welcome', 'done');
}