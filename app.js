const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.type('html').send(html));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));


const html = `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Web Image Scraper lets you scrape Images from any webpage">
    <meta name="author" content="Simiso Mthiyane">
    <title>Web Image Scraper · Scrape images from any webpage</title>

    <!-- <link rel="canonical" href="https://getbootstrap.com/docs/5.0/examples/starter-template/"> -->

    

    <!-- Bootstrap core CSS -->
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

    <!-- Optional theme -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
    <link href="../assets/dist/css/bootstrap.min.css" rel="stylesheet">

    <script src="https://unpkg.com/scrollreveal"></script>
    <script src="js/scrollreveal.min.js"></script>

    <style>
      .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }

      @media (min-width: 360px) {
        .float-end {
          display: none;
        }
      }

      @media (max-width: 500px) {
        .navbar-brand{
          display: none;
        }
      }
      @media (min-width: 500px) {
        #intro-title{
          display: none;
        }
      }
      


      @font-face {
        font-family: "neo-sans";
        src: url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
        font-style: normal;
      }

      /*nav panel*/
      form{
        display: inline-flex;
      }

      form>input[type='url'], form>input[type='url']::placeholder{
        font-style: italic;
      }

      /*text panel panel*/     
        #intro{        
          font-family: neo-sans;
        }

        #bg-light-strong{
          box-shadow: 2px 2px 4px 0px #3e3e3e;
        }

        /*animation*/
        #bg-light-strong:hover{
          box-shadow: 6px 6px 22px 0px #3e3e3e;
        }

        #bg-light-strong{
          transition: box-shadow 1s ease-in-out;      
        }  
    </style>
  
  
  </head>
  <body>
 
<!--===========nav panel============-->

    <nav class="navbar navbar-expand navbar-dark bg-primary fixed-top" aria-label="Second navbar example">
      <div class="container-xl">
        <a class="navbar-brand" href="">Web Image Scraper/</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
            
        <div class="collapse navbar-collapse" id="navbarsExample02">
          <ul class="navbar-nav me-auto">

          </ul>
          <form>
            <input class="form-control mx-2" id="input-text-url" type="url" placeholder="Enter url" aria-label="Search" required="">
            <button class="btn btn-outline-info" type="submit" id="input-btn-scrape" placeholder="Search" aria-label="Search">Scrape</button>
          </form>
        </div>
      </div>
    </nav>

<!--========== text panel===========-->
<main class="container">

  <div class="row py-4 mt-5">
    <section id="intro" class="col-12 text-center">
      <h1 id="intro-title">Web Image Scraper/</h1>
      <h2>Scrape web images with easy.</h2>
    </section>
</div>

</main><!-- /.container -->

<div class="container bg-light" id="bg-light-strong">
  <div>
    <div class="row py-4">
    <div class="p-3 rounded">
      <div class="col-sm-8 col-8 mx-auto"id="how-text">      
        <h4>How</h4>
        <p>
          <ul>
          <li>Copy <abbr title="Unified Resource Locator - The text shown on your web browser's address bar for the opened web resource.">URL</abbr> address of the web page you want to scrape from. Example of a URL <code>https://www.example.com</code></li>
          <li>On the top right of this page, enter the <i>copied URL</i> on the form & click the <strong>Scrape button</strong>.</li>
          </ul>
        <p>After clicking the <strong>Scrape button</strong>, the page will refresh to show the resulting images, if found. Than you can view or download them.<p>
        </p>
      </div>
    </div>
    </div>
  </div>
</div>

<footer class="text-muted py-5">
  <div class="container">
    <p class="float-end mb-1">
      <a href="#">Back to top</a>
    </p>
    <p class="mb-1">Created with love by <a href="https://www.linkedin.com/in/simiso-mthiyane-b83993210">Simiso Mthiyane</a>.</p>
    <p class="mb-0">Check out this other usesful service @ <a href="https://willowy-stroopwafel-d2b737.netlify.app/">Web Dictionary</a></p>
  </div>
</footer>



<!-- Latest compiled and minified JavaScript -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
    <script src="../assets/dist/js/bootstrap.bundle.min.js"></script>
    <script type="text/javascript">
      ScrollReveal({reset:false});
      ScrollReveal().reveal('#intro');
      ScrollReveal().reveal('#bg-light-strong',{delay:550});
      ScrollReveal().reveal('footer',{delay:1000});
    </script>
  </body>
</html>
`
