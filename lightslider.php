<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<?php
	function make_thumb($src, $dest, $desired_width) {
	
	/* read the source image */
	$source_image = imagecreatefromjpeg($src);
	$width = imagesx($source_image);
	$height = imagesy($source_image);
	
	/* find the "desired height" of this thumbnail, relative to the desired width  */
	$desired_height = floor($height * ($desired_width / $width));
	
	/* create a new, "virtual" image */
	$virtual_image = imagecreatetruecolor($desired_width, $desired_height);
	
	/* copy source image at a resized size */
	imagecopyresampled($virtual_image, $source_image, 0, 0, 0, 0, $desired_width, $desired_height, $width, $height);
	
	/* create the physical thumbnail image to its destination */
	imagejpeg($virtual_image, $dest);
	}
  /* taken from: https://github.com/eladkarako/download.eladkarako.com */
  $path = 'ftp://admin:herald@herald.ipdisk.co.kr/HDD2/photo/Best/';
  $thumbpath = 'ftp://admin:herald@herald.ipdisk.co.kr/HDD2/photo/Best/thumb/';
  //$path = 'img';
  //$path = './' . $path . '/';
  $files = array();
  $handle = @opendir($path) or die("Unable to open $path");
  //  $handle = @opendir($path) or die("Unable to open $path");
      while ($file = @readdir($handle)) 
        ("." !== $file && ".." !== $file) && array_push($files, $file);
      @closedir($handle);
      sort($files); //uksort($files, "strnatcasecmp");

      $files = json_encode($files);
	  $path = json_encode($path);
	  unset($handle,$ext,$file);
      //unset($handle,$ext,$file,$path);
?>
<html>
    <head>
        <title>herald.ipdisk.co.kr Light Slider</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link type="text/css" rel="stylesheet" href="css/lightslider.css" />
        <link rel="stylesheet" href="css/lightslider-common.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script> 
        <script src="js/lightslider.js"></script>
        <script src="js/lightslider-common.js"></script>
    </head>
    <body>
       
        <div class="demo">
            <div class="item">            
                <div class="clearfix" style="max-width:474px;">
                    <ul id="image-gallery" class="gallery list-unstyled cS-hidden">
                    </ul>
                </div>
            </div>
        </div>
        <script>

		var files = <?php echo $files; ?>;
		var path = <?php echo $path; ?>;

		files.forEach(function(filename) {
			$('#image-gallery').append('<li data-thumb=' + path + 'thumb/' 
                + filename + '><img src=' + path + filename + ' /></li>');
			console.log(filename);
		});

  </script>

    </body>
</html>
