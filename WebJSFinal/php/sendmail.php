<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>The Latin American Farm Game</title>
    <meta name="description" content="Farm Simulator">
    <meta name="keywords" content="Farm, Simulator, Education">
    <meta name="author" content="Trevor Hein">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/grid.css">
    <link rel="stylesheet" href="css/nav.css">
    <link rel="stylesheet" href="css/master.css">
  </head>
  <body>
  <!--
    <header>
      <h1>Home</h1>
    </header>
  -->

    <!-- Navbar -->
    <div class="nav" id="Topnav">
      <a href="#" class="active">Home</a>
      <a href="game/index.html">Game</a>
      <a href="glossary/index.html">Glossary</a>
      <a href="history/altindex.html">History</a>
      <a href="examples/index.html">Examples</a>
      <a href="education/index.html">Education</a>
      <a href="javascrip:void(0);" style="font-size:1.25em;" class="icon" onclick="navMenu()">&#9776;</a>
    </div>
    <!-- Main tags remove the margin on top of main because the nav is z-indexed on top so it stays fixed there on scroll -->
    <main class="margin-buffer" id="Topmain">
      <div class="full-container">
        <img src="https://img.huffingtonpost.com/asset/58d2c4e31d0000cf3b7cfdd5.jpeg?cache=stvgtvkegk&ops=1910_1000" alt="" class="responsive" id="top-img">
      </div>
      <div class="container">
        <div class="row">
          <div class="col- col-6">
            <div class="box">
              <div class="container">
                <div class="row">
                  <h2>History</h2>
                </div>
                <div class="row">
                  <p>Words and stuff about the history page.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col- col-6">
            <div class="box">
              <div class="container">
                <div class="row">
                  <h2>Examples</h2>
                </div>
                <div class="row">
                  <p>Real-world examples of how socio-economic conditions have affected </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col- col-6">
            <div class="box">
              <div class="container">
                <div class="row">
                  <h2>Glossary</h2>
                </div>
                <div class="row">
                  <p>Terms used in the game</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col- col-6">
            <div class="box">
              <div class="container">
                <div class="row">
                  <h2>Education</h2>
                </div>
                <div class="row">
                  <p>How this game can be used for educational purposes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
      <header id="subheader">
        <h3>Contact Us</h3>
      </header>
      <fieldset>
          	<legend>Contact Information</legend>
      		<label for="first_name">First Name:</label>
  			<input type="text" name="first_name" id="first_name" value="<?php echo $_REQUEST['first_name'] ?>" disabled><br>
  			<label for="last_name">Last Name:</label>
  			<input type="text" name="last_name" id="last_name" value="<?php echo $_REQUEST['last_name'] ?>" disabled><br>
          	<label for="email">Email Address:</label>
          	<input type="email" name="email" id="email" value="<?php echo $_REQUEST['email'] ?>" disabled><br>
          	<label for="verify">Verify Email:</label>
          	<input type="email" name="verify" id="verify" value="<?php echo $_REQUEST['email'] ?>" disabled><br>
  			<label for="phone">Phone Number:</label>
  			<input type="tel" name="phone" id="phone" value="<?php echo $_REQUEST['phone'] ?>" disabled><br>
  		</fieldset>
  		<fieldset>
      		<legend>Message Information</legend>
  			<label for="today_date">Today's  Date:</label>
  			<input type="date" name="today_date" id="today_date" value="<?php echo $_REQUEST['today_date'] ?>" disabled><br>
  			<label for="subject">Subject:</label>
  			<input type="text" name="subject" id="subject" value="<?php echo $_REQUEST['subject'] ?>" disabled><br>
  			<label for="Message">Message:</label>
  			<textarea id="message" name="message" rows="4" disabled><?php echo $_REQUEST['message'] ?></textarea>
  		</fieldset>
  <!-- This entire script, including the opening and closing ?php tags, can be nested inside of any other tag, such as div or p, to control positioning and formatting of confirmation message spit out by the email script -->
  <h2>
  <?php
    if (isset($_REQUEST['email'])) { //if "email" variable is filled out, send email

    //Set admin email for email to be sent to (use you own MATC email address)
      $admin_email = "garzaa@matc.edu";

    //Set PHP variable equal to information completed on the HTML form
      $email = $_REQUEST['email']; //Request email that user typed on HTML form
      $phone = $_REQUEST['phone']; //Request phone that user typed on HTML form
      $subject = $_REQUEST['subject']; //Request subject that user typed on HTML form
      $message = $_REQUEST['message']; //Request message that user typed on HTML form
    //Combine first name and last name, adding a space in between
      $name = $_REQUEST['first_name'] . " " .  $_REQUEST['last_name'];

    //Start building the email body combining multiple values from HTML form
      $body  = "From: " . $name . "\n";
      $body .= "Email: " . $email . "\n"; //Continue the email body
      $body .= "Phone: " . $phone . "\n"; //Continue the email body
      $body .= "Message: " . $message; //Continue the email body

    //Create the email headers for the from and CC fields of the email
      $headers = "From: " . $name . " <" . $email . "> \r\n"; //Create email "from"
      $headers .= "CC: " . $name . " <" . $email . ">"; //Send CC to visitor

    //Actually send the email from the web server using the PHP mail function
    mail($admin_email, $subject, $body, $headers);

    //Display email confirmation response on the screen
    echo "Thank you for contacting us!";
    }

    //if "email" variable is not filled out, display an error
    else  {
       echo "There has been an error!";
          }
  ?>

  </h2>
      </div>
    </main>

    <script src="js/nav.js" charset="utf-8"></script>
  </body>
</html>
