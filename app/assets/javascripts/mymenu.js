var freshpage = function() {
	if ($('input:file').val()){
			$('.update_img').click();
		};
	};

$(document).ready(function(){
	
	$('.user_avatar .profile-picture').on('click', function(){
		$('.file_upload_btn').click();

	});
	setInterval(freshpage, 5000);
});