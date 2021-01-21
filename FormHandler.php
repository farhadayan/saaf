<?php
if(isset($_POST['send'])){
	  
$to = 'info@saaf.dk';
$subject = $_POST['Name'];
$fromEmail=$_POST['Email'];
$message = $_POST['Message'];
$message .='<<< -messages came from- >>> ';
$message .=$fromEmail;

// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers .= 'From: <no-reply@saaf.dk>' . "\r\n";


mail($to,$subject,$message,$headers);
}
?>
<script>
	function showAlert(){
		alert("Submitted the form successfully! We will get back to you soon.");
	}
</script> 

<form  method="post" action="<?=$_SERVER['PHP_SELF'];?>">
	  <label for="name"  style="display:block !important;">Your Name:</label>
	  <input id="name" type="text" name="Name" required maxlength="50">
	  <label for="email"  style="display:block !important;">Your Email Address:</label>
	  <input id="email" type="email" name="Email" required maxlength="50">
	  <!--<input id="email" style="width:99% !important;" type="email" name="Email" required maxlength="50">-->
	  
	  <label for="message"  style="display:block !important;">Message:</label>
	  <textarea id="message" name="Message" rows="10" maxlength="6000" required></textarea>
	  <button class="button-primary" type="submit" name='send' onclick="showAlert()" style="margin-left:89%; font-size:15px; width:10%;outline:double;color:#16161a !important;">Submit</button>
</form>
