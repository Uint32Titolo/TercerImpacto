[1mdiff --git a/package-lock.json b/package-lock.json[m
[1mindex f06412e..5a560fb 100644[m
[1m--- a/package-lock.json[m
[1m+++ b/package-lock.json[m
[36m@@ -3804,14 +3804,6 @@[m
         "utila": "~0.4"[m
       }[m
     },[m
[31m-    "dom-helpers": {[m
[31m-      "version": "3.4.0",[m
[31m-      "resolved": "https://registry.npmjs.org/dom-helpers/-/dom-helpers-3.4.0.tgz",[m
[31m-      "integrity": "sha512-LnuPJ+dwqKDIyotW1VzmOZ5TONUN7CwkCR5hrgawTUbkBGYdeoNLZo6nNfGkCrjtE1nXXaj7iMMpDa8/d9WoIA==",[m
[31m-      "requires": {[m
[31m-        "@babel/runtime": "^7.1.2"[m
[31m-      }[m
[31m-    },[m
     "dom-serializer": {[m
       "version": "0.2.1",[m
       "resolved": "https://registry.npmjs.org/dom-serializer/-/dom-serializer-0.2.1.tgz",[m
[36m@@ -5072,8 +5064,7 @@[m
         },[m
         "ansi-regex": {[m
           "version": "2.1.1",[m
[31m-          "bundled": true,[m
[31m-          "optional": true[m
[32m+[m[32m          "bundled": true[m
         },[m
         "aproba": {[m
           "version": "1.2.0",[m
[36m@@ -5091,13 +5082,11 @@[m
         },[m
         "balanced-match": {[m
           "version": "1.0.0",[m
[31m-          "bundled": true,[m
[31m-          "optional": true[m
[32m+[m[32m          "bundled": true[m
         },[m
         "brace-expansion": {[m
           "version": "1.1.11",[m
           "bundled": true,[m
[31m-          "optional": true,[m
           "requires": {[m
             "balanced-match": "^1.0.0",[m
             "concat-map": "0.0.1"[m
[36m@@ -5110,18 +5099,15 @@[m
         },[m
         "code-point-at": {[m
           "version": "1.1.0",[m
[31m-          "bundled": true,[m
[31m-          "optional": true[m
[32m+[m[32m          "bundled": true[m
         },[m
         "concat-map": {[m
           "version": "0.0.1",[m
[31m-          "bundled": true,[m
[31m-          "optional": true[m
[32m+[m[32m          "bundled": true[m
         },[m
         "console-control-strings": {[m
           "version": "1.1.0",[m
[31m-          "bundled": true,[m
[31m-          "optional": true[m
[32m+[m[32m          "bundled": true[m
         },[m
         "core-util-is": {[m
           "version": "1.0.2",[m
[36m@@ -5224,8 +5210,7 @@[m
         },[m
         "inherits": {[m
           "version": "2.0.3",[m
[31m-          "bundled": true,[m
[31m-          "optional": true[m
[32m+[m[32m          "bundled": true[m
         },[m
         "ini": {[m
           "version": "1.3.5",[m
[36m@@ -5235,7 +5220,6 @@[m
         "is-fullwidth-code-point": {[m
           "version": "1.0.0",[m
           "bundled": true,[m
[31m-          "optional": true,[m
           "requires": {[m
             "number-is-nan": "^1.0.0"[m
           }[m
[36m@@ -5248,20 +5232,17 @@[m
         "minimatch": {[m
           "version": "3.0.4",[m
           "bundled": true,[m
[31m-          "optional": true,[m
           "requires": {[m
             "brace-expansion": "^1.1.7"[m
           }[m
         },[m
         "minimist": {[m
           "version": "0.0.8",[m
[31m-          "bundled": true,[m
[31m-          "optional": true[m
[32m+[m[32m          "bundled": true[m
         },[m
         "minipass": {[m
           "version": "2.3.5",[m
           "bundled": true,[m
[31m-          "optional": true,[m
           "requires": {[m
             "safe-buffer": "^5.1.2",[m
             "yallist": "^3.0.0"[m
[36m@@ -5278,7 +5259,6 @@[m
         "mkdirp": {[m
           "version": "0.5.1",[m
           "bundled": true,[m
[31m-          "optional": true,[m
           "requires": {[m
             "minimist": "0.0.8"[m
           }[m
[36m@@ -5351,8 +5331,7 @@[m
         },[m
         "number-is-nan": {[m
           "version": "1.0.1",[m
[31m-          "bundled": true,[m
[31m-          "optional": true[m
[32m+[m[32m          "bundled": true[m
         },[m
         "object-assign": {[m
           "version": "4.1.1",[m
[36m@@ -5362,7 +5341,6 @@[m
         "once": {[m
           "version": "1.4.0",[m
           "bundled": true,[m
[31m-          "optional": true,[m
           "requires": {[m
             "wrappy": "1"[m
           }[m
[36m@@ -5438,8 +5416,7 @@[m
         },[m
         "safe-buffer": {[m
           "version": "5.1.2",[m
[31m-          "bundled": true,[m
[31m-          "optional": true[m
[32m+[m[32m          "bundled": true[m
         },[m
         "safer-buffer": {[m
           "version": "2.1.2",[m
[36m@@ -5469,7 +5446,6 @@[m
         "string-width": {[m
           "version": "1.0.2",[m
           "bundled": true,[m
[31m-          "optional": true,[m
           "requires": {[m
             "code-point-at": "^1.0.0",[m
             "is-fullwidth-code-point": "^1.0.0",[m
[36m@@ -5487,7 +5463,6 @@[m
         "strip-ansi": {[m
           "version": "3.0.1",[m
           "bundled": true,[m
[31m-          "optional": true,[m
           "requires": {[m
             "ansi-regex": "^2.0.0"[m
           }[m
[36m@@ -5526,13 +5501,11 @@[m
         },[m
         "wrappy": {[m
           "version": "1.0.2",[m
[31m-          "bundled": true,[m
[31m-          "optional": true[m
[32m+[m[32m          "bundled": true[m
         },[m
         "yallist": {[m
           "version": "3.0.3",[m
[31m-          "bundled": true,[m
[31m-          "optional": true[m
[32m+[m[32m          "bundled": true[m
         }[m
       }[m
     },[m
[36m@@ -7388,16 +7361,6 @@[m
       "resolved": "https://registry.npmjs.org/lodash._reinterpolate/-/lodash._reinterpolate-3.0.0.tgz",[m
       "integrity": "sha1-DM8tiRZq8Ds2Y8eWU4t1rG4RTZ0="[m
     },[m
[31m-    "lodash.isfunction": {[m
[31m-      "version": "3.0.9",[m
[31m-      "resolved": "https://registry.npmjs.org/lodash.isfunction/-/lodash.isfunction-3.0.9.tgz",[m
[31m-      "integrity": "sha512-AirXNj15uRIMMPihnkInB4i3NHeb4iBtNg9WRWuK2o31S+ePwwNmDPaTL3o7dTJ+VXNZim7rFs4rxN4YU1oUJw=="[m
[31m-    },[m
[31m-    "lodash.isobject": {[m
[31m-      "version": "3.0.2",[m
[31m-      "resolved": "https://registry.npmjs.org/lodash.isobject/-/lodash.isobject-3.0.2.tgz",[m
[31m-      "integrity": "sha1-PI+41bW/S/kK4G4U8qUwpO2TXh0="[m
[31m-    },[m
     "lodash.memoize": {[m
       "version": "4.1.2",[m
       "resolved": "https://registry.npmjs.org/lodash.memoize/-/lodash.memoize-4.1.2.tgz",[m
[36m@@ -7425,11 +7388,6 @@[m
         "lodash._reinterpolate": "^3.0.0"[m
       }[m
     },[m
[31m-    "lodash.tonumber": {[m
[31m-      "version": "4.0.3",[m
[31m-      "resolved": "https://registry.npmjs.org/lodash.tonumber/-/lodash.tonumber-4.0.3.tgz",[m
[31m-      "integrity": "sha1-C5azGzVnJ5Prf1pj7nkfG56QJdk="[m
[31m-    },[m
     "lodash.unescape": {[m
       "version": "4.0.1",[m
       "resolved": "https://registry.npmjs.org/lodash.unescape/-/lodash.unescape-4.0.1.tgz",[m
[36m@@ -9784,11 +9742,6 @@[m
       "resolved": "https://registry.npmjs.org/react-is/-/react-is-16.9.0.tgz",[m
       "integrity": "sha512-tJBzzzIgnnRfEm046qRcURvwQnZVXmuCbscxUO5RWrGTXpon2d4c8mI0D8WE6ydVIm29JiLB6+RslkIvym9Rjw=="[m
     },[m
[31m-    "react-lifecycles-compat": {[m
[31m-      "version": "3.0.4",[m
[31m-      "resolved": "https://registry.npmjs.org/react-lifecycles-compat/-/react-lifecycles-compat-3.0.4.tgz",[m
[31m-      "integrity": "sha512-fBASbA6LnOU9dOU2eW7aQ8xmYBSXUIWr+UmF9b1efZBazGNO+rcXT/icdKnYm2pTwcRylVUYwW7H1PHfLekVzA=="[m
[31m-    },[m
     "react-popper": {[m
       "version": "1.3.4",[m
       "resolved": "https://registry.npmjs.org/react-popper/-/react-popper-1.3.4.tgz",[m
[36m@@ -9922,33 +9875,6 @@[m
         }[m
       }[m
     },[m
[31m-    "react-transition-group": {[m
[31m-      "version": "2.9.0",[m
[31m-      "resolved": "https://registry.npmjs.org/react-transition-group/-/react-transition-group-2.9.0.tgz",[m
[31m-      "integrity": "sha512-+HzNTCHpeQyl4MJ/bdE0u6XRMe9+XG/+aL4mCxVN4DnPBQ0/5bfHWPDuOZUzYdMj94daZaZdCCc1Dzt9R/xSSg==",[m
[31m-      "requires": {[m
[31m-        "dom-helpers": "^3.4.0",[m
[31m-        "loose-envify": "^1.4.0",[m
[31m-        "prop-types": "^15.6.2",[m
[31m-        "react-lifecycles-compat": "^3.0.4"[m
[31m-      }[m
[31m-    },[m
[31m-    "reactstrap": {[m
[31m-      "version": "8.0.1",[m
[31m-      "resolved": "https://registry.npmjs.org/reactstrap/-/reactstrap-8.0.1.tgz",[m
[31m-      "integrity": "sha512-GvUWEL+a2+3npK1OxTXcNBMHXX4x6uc1KQRzK7yAOl+8sAHTRWqjunvMUfny3oDh8yKVzgqpqQlWWvs1B2HR9A==",[m
[31m-      "requires": {[m
[31m-        "@babel/runtime": "^7.2.0",[m
[31m-        "classnames": "^2.2.3",[m
[31m-        "lodash.isfunction": "^3.0.9",[m
[31m-        "lodash.isobject": "^3.0.2",[m
[31m-        "lodash.tonumber": "^4.0.3",[m
[31m-        "prop-types": "^15.5.8",[m
[31m-        "react-lifecycles-compat": "^3.0.4",[m
[31m-        "react-popper": "^1.3.3",[m
[31m-        "react-transition-group": "^2.3.1"[m
[31m-      }[m
[31m-    },[m
     "read-pkg": {[m
       "version": "2.0.0",[m
       "resolved": "https://registry.npmjs.org/read-pkg/-/read-pkg-2.0.0.tgz",[m
[1mdiff --git a/package.json b/package.json[m
[1mindex 03aa8bf..7376579 100644[m
[1m--- a/package.json[m
[1m+++ b/package.json[m
[36m@@ -11,7 +11,6 @@[m
     "react-dom": "^16.9.0",[m
     "react-router-dom": "^5.1.2",[m
     "react-scripts": "3.1.1",[m
[31m-    "reactstrap": "^8.0.1",[m
     "semantic-ui-css": "^2.4.1",[m
     "semantic-ui-react": "^0.88.0",[m
     "typescript": "3.6.2"[m
[1mdiff --git a/src/App.css b/src/App.css[m
[1mindex a59e8af..ea48b6f 100644[m
[1m--- a/src/App.css[m
[1m+++ b/src/App.css[m
[36m@@ -1,14 +1,3 @@[m
 .Suculentas {[m
   text-align: justify;[m
[31m-}[m
[31m-.footer{  background-color: rgb(23, 24, 31);[m
[31m-          margin-top:0px;[m
[31m-          width:100%;[m
[31m-          height:200px;[m
[31m-  [m
[31m-}[m
[31m-.Fondo{[m
[31m-  background-image: url(Imagenes\Wallpaper3.jpg);[m
[31m-  [m
[31m-  background-size: 100% 100%[m
 }[m
\ No newline at end of file[m
[1mdiff --git a/src/App.tsx b/src/App.tsx[m
[1mindex 1b70d04..44aa784 100644[m
[1m--- a/src/App.tsx[m
[1m+++ b/src/App.tsx[m
[36m@@ -9,9 +9,6 @@[m [mconst App: React.FC = () => {[m
     <div>[m
       <Menu/>[m
     </div>[m
[31m-    [m
[31m-[m
[31m-    [m
   );[m
 }[m
 [m
[1mdiff --git a/src/Componentes/Footer.js b/src/Componentes/Footer.js[m
[1mdeleted file mode 100644[m
[1mindex e71a4c6..0000000[m
[1m--- a/src/Componentes/Footer.js[m
[1m+++ /dev/null[m
[36m@@ -1,54 +0,0 @@[m
[31m-import React from 'react'[m
[31m-import '../App.css'[m
[31m-import {  Button,Grid,Segment, Header, Container,  Divider, Image,} from 'semantic-ui-react';[m
[31m-import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"[m
[31m-[m
[31m-[m
[31m-function  Footer(props){[m
[31m-        return([m
[31m-            <div className="footer">[m
[31m-                <Grid centered columns={1} padded > [m
[31m-                    [m
[31m-                    <Grid columns={3} spacing={4} verticalAlign='text-left'>[m
[31m-                      <Grid.Column textAlign="left"  >[m
[31m-                        <Header as="h1" textAlign="left"  style={{ fontSize: '1.5em' }} inverted >[m
[31m-                            WIKI NATURE[m
[31m-                        </Header>[m
[31m-                            <Grid.Row>[m
[31m-                                <Link to="/suculentas" >Suculentas</Link> [m
[31m-                            </Grid.Row>[m
[31m-                            <Grid.Row>[m
[31m-                                <Link to="/cactuss">Cactus</Link> [m
[31m-                            </Grid.Row>[m
[31m-                            <Grid.Row>[m
[31m-                                <Link to="/suculentas">Galeria</Link> [m
[31m-                            </Grid.Row>[m
[31m-                            <Grid.Row>[m
[31m-                                <Link to="/plantas">Plantas</Link> [m
[31m-                            </Grid.Row>[m
[31m-                      </Grid.Column>[m
[31m-[m
[31m-                      <Grid.Column textAlign="left"  >[m
[31m-                        <Header as="h1" textAlign="left"  style={{ fontSize: '1.5em' }} inverted >[m
[31m-                            SOBRE NOSOTROS[m
[31m-                        </Header>[m
[31m-                       [m
[31m-[m
[31m-                      </Grid.Column>[m
[31m-[m
[31m-                      <Grid.Column textAlign="left" >[m
[31m-                        <Header as="h1" textAlign="left"  style={{ fontSize: '1.5em' }} inverted >[m
[31m-                            REDES SOCIALES[m
[31m-                        </Header>[m
[31m-[m
[31m-[m
[31m-                      </Grid.Column>[m
[31m-                    </Grid>[m
[31m-                </Grid>[m
[31m-            </div>[m
[31m-[m
[31m-[m
[31m-[m
[31m-        );[m
[31m-}[m
[31m-export default Footer[m
\ No newline at end of file[m
[1mdiff --git a/src/Componentes/Inicio.js b/src/Componentes/Inicio.js[m
[1mdeleted file mode 100644[m
[1mindex b85c179..0000000[m
[1m--- a/src/Componentes/Inicio.js[m
[1m+++ /dev/null[m
[36m@@ -1,79 +0,0 @@[m
[31m-import React, { Component } from 'react'[m
[31m-import {  Button,List, Form,Grid,Header, Message,Segment,  Container,  Divider,  Image,} from 'semantic-ui-react';[m
[31m-import Suculentas from '../Imagenes/Suculentas.jpeg'[m
[31m-import Cactuss from '../Imagenes/cactuss.jpg'[m
[31m-import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"[m
[31m-import '../App.css'[m
[31m-import Foteer from '../Componentes/Footer'[m
[31m-//document.body.style = 'background: #212121;';[m
[31m-[m
[31m-const HomePag=() => ([m
[31m-      [m
[31m-      <Grid centered columns={1} padded >[m
[31m-        <div class="Fondo">[m
[31m-        [m
[31m-        <Grid.Column>[m
[31m-[m
[31m-          <Header as="h1" textAlign="center"style={{backgroundColor:"#41bedd"}} color='orange' style={{ fontSize: '3.5em',  paddingTop: '0.5em' }} >[m
[31m-            Wiki Nature[m
[31m-          </Header>[m
[31m-        [m
[31m-          <Grid columns={3} spacing={4} verticalAlign='text-top' >[m
[31m-              [m
[31m-              <Grid.Column as="h1" textAlign="center" style={{ paddingBottom: '1em', paddingTop: '1.3em' }}  >[m
[31m-                  Suculentas[m
[31m-                  <Segment as="h3" color='#212121' inverted >[m
[31m-                    <img src={Suculentas} width="100%;"  vspace="10" /> [m
[31m-                    <p style={{fontSize: '0.9em', paddingBottom: '1em'}}>[m
[31m-                      Las plantas suculentas son aquellas en las que algún órgano o parte se ha modificado en una nueva especialización que permite el almacenamiento de agua en cantidades mucho mayores que en el resto de las plantas.[m
[31m-                    </p>[m
[31m-                    <Link to="/suculentas"> [m
[31m-                      <Button color="orange" fluid size="small" circular >[m
[31m-                        Conocer Más[m
[31m-                      </Button>[m
[31m-                    </Link>[m
[31m-                  </Segment>[m
[31m-              </Grid.Column>[m
[31m-[m
[31m-              <Grid.Column as="h1" textAlign="center">[m
[31m-                Cactus[m
[31m-                <Segment as="h3" color='#212121' inverted >[m
[31m-                  <img src={Cactuss} width="100%; " vspace="10"/>[m
[31m-                  <p style={{fontSize: '0.9em', paddingBottom: '1em'}}>[m
[31m-                   Los cactus  conforman la familia de plantas suculentas denominada Cactaceae. Estas especies, como buenas crasas que son, se caracterizan por acumular agua y nutrientes en sus tejidos, así, pueden adaptarse sin problema al hábitat en el que se encuentren.[m
[31m-                  </p>[m
[31m-                  <Link to="/suculentas">[m
[31m-                    <Button color="orange" fluid size="small" circular >[m
[31m-                        Conocer Más[m
[31m-                    </Button>[m
[31m-                  </Link>[m
[31m-                </Segment>[m
[31m-              </Grid.Column>[m
[31m-[m
[31m-              <Grid.Column as="h1" textAlign="center">[m
[31m-                Galeria[m
[31m-                <Segment as="h3" color='#212121' inverted >[m
[31m-                  <img src={Suculentas} width="100%; " vspace="10"/>[m
[31m-                  <p style={{fontSize: '0.9em', paddingBottom: '1em'}}>[m
[31m-                   La Galeria está llena de fotos sobre la naturaleza en especial nuestras queridas suculentas[m
[31m-                  </p>[m
[31m-                  <Link to="/suculentas">[m
[31m-                    <Button color="orange" fluid size="small" circular >[m
[31m-                      Conocer Más[m
[31m-                    </Button>[m
[31m-                  </Link>[m
[31m-                </Segment>[m
[31m-              </Grid.Column>[m
[31m-[m
[31m-          </Grid>[m
[31m-         [m
[31m-        </Grid.Column>[m
[31m-        </div>[m
[31m-        <Foteer/>[m
[31m-      </Grid>[m
[31m-       [m
[31m-    )[m
[31m-    export default HomePag[m
[31m-[m
[31m-[m
[31m-[m
[1mdiff --git a/src/Componentes/Menu.js b/src/Componentes/Menu.js[m
[1mindex 2056927..c72a873 100644[m
[1m--- a/src/Componentes/Menu.js[m
[1m+++ b/src/Componentes/Menu.js[m
[36m@@ -4,7 +4,6 @@[m [mimport { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"[m
 import Formulario from './Formulario'[m
 import Suculentas from './Suculentas'[m
 import Animales from './Animales'[m
[31m-import Inicio from './Inicio'[m
 import { Container, Grid } from 'semantic-ui-react'[m
 [m
 [m
[36m@@ -18,10 +17,10 @@[m [mexport default class MenuPointing extends Component {[m
 [m
     return ([m
       <Router>[m
[31m-        <Menu pointing secondary size='large' attached='top'style={{backgroundColor:"#01003B"}} inverted >[m
[32m+[m[32m        <Menu pointing secondary size='large'>[m
         <Link to="/">[m
           <Menu.Item[m
[31m-            name='Inicio'[m
[32m+[m[32m            name='principal'[m
             active={activeItem === 'principal'}[m
             onClick={this.handleItemClick}[m
           />[m
[36m@@ -40,7 +39,6 @@[m [mexport default class MenuPointing extends Component {[m
             onClick={this.handleItemClick}[m
           />[m
         </Link>[m
[31m-[m
         <Link to="/cactus">[m
           <Menu.Item[m
             name='cactus'[m
[36m@@ -48,13 +46,10 @@[m [mexport default class MenuPointing extends Component {[m
             onClick={this.handleItemClick}[m
           />[m
         </Link>[m
[31m-[m
[31m-[m
[31m-[m
         </Menu>[m
 [m
         <Switch>[m
[31m-            <Route path="/" exact component={Inicio}/>[m
[32m+[m[32m            <Route path="/" exact component={Animales}/>[m
         </Switch>[m
 [m
         <Switch>[m
[36m@@ -73,11 +68,10 @@[m [mexport default class MenuPointing extends Component {[m
 [m
         <Switch>[m
             <Route path="/cactus">[m
[31m-              <Inicio/>[m
[32m+[m[32m              <Animales/>[m
             </Route>[m
         </Switch>[m
 [m
[31m-[m
       </Router>[m
     )[m
   }[m
[1mdiff --git a/src/Imagenes/Suculentas.jpeg b/src/Imagenes/Suculentas.jpeg[m
[1mdeleted file mode 100644[m
[1mindex 8900b8e..0000000[m
Binary files a/src/Imagenes/Suculentas.jpeg and /dev/null differ
[1mdiff --git a/src/Imagenes/Wallpaper3.jpg b/src/Imagenes/Wallpaper3.jpg[m
[1mdeleted file mode 100644[m
[1mindex 90614e9..0000000[m
Binary files a/src/Imagenes/Wallpaper3.jpg and /dev/null differ
[1mdiff --git a/src/Imagenes/cactuss.jpg b/src/Imagenes/cactuss.jpg[m
[1mdeleted file mode 100644[m
[1mindex 15fa363..0000000[m
Binary files a/src/Imagenes/cactuss.jpg and /dev/null differ
[1mdiff --git a/src/index.css b/src/index.css[m
[1mindex ad5c070..ec2585e 100644[m
[1m--- a/src/index.css[m
[1m+++ b/src/index.css[m
[36m@@ -11,4 +11,3 @@[m [mcode {[m
   font-family: source-cod