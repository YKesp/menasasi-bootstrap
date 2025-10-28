<!-- Bootstrap CSS -->
<link rel="icon" type="image/png" sizes="32x32" href="images/favicon.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Sora:wght@100..800&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css">
<?php if($basename=='index.php'){ ?>
<link rel="stylesheet" href="css/home.css">
<?php } else {?>
<link rel="stylesheet" href="css/all.css">
<?php }?>
</head>

<body>
    <div id="wrapper">
        <header id="header" class="header sticky-top">
            <div class="upper-header">
                <div class="container d-flex gap-2 flex-sm-row justify-content-center justify-content-md-between align-items-center p-xl-0">
                    <a href="mailto:info@menasasi.org" class="d-flex gap-2 align-items-center email-link">
                        <i class="fas fa-envelope"></i><span class="d-none d-md-inline-block">info@menasasi.org</span></a>
                    <div class="d-flex align-items-center gap-2 gap-md-3">
                        <form action="#" role="search" method="get" class="search-form">
                            <a href="#" class="search-link"><i class="fas fa-search"></i></a>
                            <div class="search-input-wrapper">
                                <div class="field"><input type="text" class="search-input" placeholder="Search..." value="" name="s"></div>
                                <button type="submit" class="search-button search-link2 search-submit"><i class="fas fa-search"></i></button>
                            </div>
                        </form>
                        <a href="#" class="login-link"><i class="far fa-user"></i></a>
                        <ul class="social-media d-flex list-unstyled m-0">
                            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                            <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <nav class="navbar navbar-expand-lg p-xl-0 bg-primary">
                <div class="container d-flex justify-content-between align-items-center p-xl-0">
                    <a class="navbar-brand" href="index.php">
                        <img src="images/logo.png" alt="menasasi.org">
                    </a>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul class="navbar-nav m-0 justify-content-end" id="nav">
                            <li class="nav-item d-block d-md-none">
                                <a class="nav-link" href="index.php">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="about.php">about</a>
                                <ul class="sub-menu">
                                    <li><a href="why-oakland.php">why oakland pallet</a></li>
                                    <li><a href="the-urban-sawmill.php">The Urban Sawmill</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="pallets.php">news</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="contact.php">seminars</a>
                            </li>
                            <li class="nav-item d-block">
                                <a class="nav-link" href="#">library</a>
                            </li>
                            <li class="nav-item d-block">
                                <a class="nav-link" href="#">forum</a>
                            </li>
                            <li class="nav-item d-block">
                                <a class="nav-link" href="#">events</a>
                            </li>
                            <li class="nav-item d-block">
                                <a class="nav-link" href="#">Membership</a>
                            </li>
                        </ul>
                    </div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span>&#9776;</span> <!-- This will be hidden by CSS -->
                    </button>
                </div>
            </nav>
        </header>