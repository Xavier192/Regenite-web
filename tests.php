<!DOCTYPE html>
<?php
include('phpTests/cargarTests.php');
?>
<html lang="en">

<head>
    <title>Tests</title>
    <link rel="icon" href="img/shortcut-icon.svg">
    <meta charset="utf-8">
    <meta name="viewport" content="width = device-width, initial-scale=1.0">
    <meta name="description" content="Empresa dedicada a la inovación médica">
    <meta name="keywords" content="genetica, cromosomas, investigacion, ciencia">
    <meta name="author" content="Xavier Lliteras">
    <meta property="og:title" content="Our Tests">
    <meta property="og:description" content="¡Find out how much you know!">
    <meta property="og:image" content="img/carousel_3.jpg">
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="css/tests.css">
    <script src="js/utilities.js" defer></script>
    <script src="js/testsScript.js" defer></script>
</head>

<body>
    <!--**********Navigation bar************-->

    <nav class="nav">
        <div class="container flex">
            <div class="mobile-flex">
                <div class="nav__logo">
                    <a href="index.html"><img src="img/logo.svg" alt="logo-regenite" class="nav__logo-img"></a>
                </div>
                <div class="nav__hamburger">
                    <img src="img/hamburger.svg" alt="display menu icon">
                </div>
            </div>
            <ul class="nav__menu">
                <li class="nav__item">
                    <a href="index.html" class="nav__link">Home</a>
                </li>
                <li class="nav__item">
                    <a href="#" class="nav__link">Contact</a>
                </li>
                <li class="nav__item">
                    <a href="tests.php" class="nav__link">Tests</a>
                </li>
                <li class="nav__item">
                    <a href="#" class="nav__button white">DONATE</a>
                </li>
            </ul>
        </div>
    </nav>

    <!--***********Image welcome************-->

    <section class="welcome-image">
        <img src="img/carousel_3.jpg" alt="microscope-img">

        <div class="welcome-image__text">
            <div class="container">
                <h1 class="title">Our tests - Select One</h1>
            </div>
        </div>
    </section>

    <!--********Breadcrumbs section********-->
    <section class="breadcrumb">
        <div class="container">
            <ul class="breadcrumb__list box-shadow br-12">
                <li class="breadcrumb__item">
                    <a href="index.html" class="breadcrumb__link">Home ></a>
                </li>
                <li class="breadcrumb__item">
                    <a href="tests.html" class="breadcrumb__link bold">Tests</a>
                </li>
            </ul>
        </div>
    </section>

    
    <!--***********Two column section welcome*********-->
    <section class="welcome-section">
        <div class="container">
            <div class="flex box-shadow">
            <div class="flex-item img-cover">
                <img src="img/dna-tests.jpg" alt="dna test">
            </div>
            <div class="flex-item">
                <h1 class="title">Our Tests</h1>
                <img src="img/Title-border.png" alt="border title">
                <p class="text-1">
                We are a nonprofit organization focused
                on investigation. Our mision is to solve
                hereditary and genetic diseases using the
                latest technologies. Feel free to contact
                us if you have any suggestion or idea that
                you think can be interesting, we're also hiring
                so send us your resume and apply if you are
                interesten in working with us.
                </p>
            </div>
            </div>
        </div>
    </section>

    <!--Section title Tests-->
     <section class="title__section">
        <h2 class="title">Tests</h2>
        <hr class="my-4">
    </section>

    <!--*******Search section*********-->
    <section class="search">
        <div class="container">
            <div class="search__box bk-white flex">
                <img src="img/search.svg" alt="search" class="search__icon">
                <input type="text" placeholder="Search test" class="search__input">
            </div>
        </div>
    </section>

    <!--*******Table section***********-->
    <section class="tests">
        <div class="container">
                <table class="tests__table br-12">
                    <thead>
                        <tr>
                            <th>Photo</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Nº questions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php
                        
                        foreach($consulta as $fila){
                            echo "<tr>
                                    <td><img src=\"".$fila['urlImagen']."\"></td>
                                    <td class=\"tests__title\">".$fila['titulo']."</td>
                                    <td>".$fila['descriptcion']."</td>
                                    <td>12</td>
                                  </tr>";
                        }
                        ?>
                    </tbody>
                </table>
        </div>
    </section>

    <!--***********************Footer*******************************-->
    <footer class="footer margin">
        <div class="container grid">
            <div class="grid-item center">
                <img src="img/logo-footer.svg" class="footer__logo" alt="logo">
                <hr class="footer__border">
                <p>875 - 321 - 123</p>
                <p>regenite@gmail.com</p>
                <p>102 Carrer de sa ma, 07100</p>
            </div>
            <div class="grid-item center">
                <hr class="footer__border">
                <h3>Schedule</h3>
                <hr class="footer__border">
                <p>Monday : 8am - 5pm</p>
                <p>Friday : 9am - 6pm</p>
                <p>Sunday : 10am - 05pm</p>
            </div>
            <div class="grid-item center">
                <hr class="footer__border">
                <h3>Contact</h3>
                <hr class="footer__border">
                <p>regenite@gmail.com</p>
                <p>Tlf: 623134212</p>
                <div class="footer__redes">
                    <a href="https://www.instagram.com" target="_blank">
                        <img src="img/logo-instagram.svg" alt="logo-instagram" class="footer__img">
                    </a>
                    <a href="https://www.twitter.com" target="_blank">
                        <img src="img/logo-twitter.svg" alt="logo-twitter" class="footer__img">
                    </a>
                    <a href="https://www.facebook.com" target="_blank">
                        <img src="img/facebook.svg" alt="logo-facebook" class="footer__img">
                    </a>
                </div>
            </div>

        </div>
        <div class="subfooter flex">
            <span>@Copyright 2021 - Xavier Lliteras</span>
        </div>

    </footer>
</body>

</html>