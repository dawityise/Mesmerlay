<%@ Page Language="C#" AutoEventWireup="true" CodeFile="amharic.aspx.cs" Inherits="editor_pages_amharic" %>
<%@ Register TagPrefix="muc" TagName="SiteNav" Src="~/usercontrol/menunav.ascx" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
    <title>የአማርኛ ማርቀቂያ</title>
    <script src="../js/jquery-1.3.2.min.js" type="text/javascript"></script>
    <link href="../style/master.css" rel="stylesheet" type="text/css" />
    <link href="../../site.css" rel="stylesheet" type="text/css" />

</head>
<body>
        <div>
        <div id="rasgee">
            <div id="maareg"><h1>መስመር ላይ</h1></div>
        </div>
        <div id="teguaz">
            <div id="teguazsbsb">
                  <muc:SiteNav ID="SiteNav1" runat="server" />

            </div>
        </div>
        <div id="yizet">
           
            <div id="wanaYizet" style="width:900px;">
                <h2 class="arstezena">የአማርኛ ማርቀቂያ</h2>
                <iframe src="http://www.facebook.com/plugins/like.php?href=http%3A%2F%2Fmesmerlay.com%2Feditor%2Fpages%2Famharic.aspx&amp;layout=standard&amp;show_faces=true&amp;width=450&amp;action=like&amp;font=tahoma&amp;colorscheme=light&amp;height=80" 
        scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:450px; height:80px;" allowTransparency="true"></iframe>
    <div style="width:890px;">
        <div style="width: 770px; height: 400px; float:left;">
            <form method="get" action="">
            <!-- Include the Free Rich Text Editor Runtime -->

            <script src="../js/richtext.js" type="text/javascript" language="javascript"></script>

            <!-- Include the Free Rich Text Editor Variables Page -->

            <script src="../js/config.js" type="text/javascript" language="javascript"></script>

            <!-- Initialise the editor -->

            <script type="text/javascript">
                initRTE('', 'amharic.css');
            </script>

            <script src="../js/unicode.js" type="text/javascript" language="javascript"></script>

            <input type="hidden" id="hdn" value="" />
            
            </form>
        </div>
        <div style="width:110px; float:right; padding:0px;">
            <div class="fidelRas">የሚታተመው ፊደል</div>
            <div id="fidel">
            </div>
            <div class="fidelRas">ትርጏሜ</div>
            <div>
                <table id="tirgum">
                    <tr><th>ጥምረት</th><th>ውጤት</th></tr>
                    <tr><td>be</td><td>በ</td></tr>
                    <tr><td>bu</td><td>ቡ</td></tr>
                    <tr><td>bi</td><td>ቢ</td></tr>
                    <tr><td>ba</td><td>ባ</td></tr>
                    <tr><td>bee</td><td>ቤ</td></tr>
                    <tr><td>b</td><td>ብ</td></tr>
                    <tr><td>bo</td><td>ቦ</td></tr>
                    <tr><td>bua</td><td>ቧ</td></tr>
                </table>
            </div>
            <div class="fidelRas">ልዩ ትርጏሜ</div>
            <div>
                <table id="liyuTirgum">
                    <tr><th>ጥምረት</th><th>ውጤት</th></tr>
                    <tr><td>hue</td><td>ኃ</td></tr>
                    
                </table>
            </div>
        </div>

    </div>
    
    <div style="clear:both;"></div>
    
    
    <div style="width:505px; float:left; height: 250px; background:#f8f8f8; border-style:solid; border-color:#cccccc; border-bottom-width:15px;
         border-top-width:10px; border-left-width:10px; border-right-width:10px; margin-top:20px;">
     <h3>የፊደል ገበታው አጠቃቀም</h3>
     <div class="kbRow">
        <table>
            <tr>
                <td><div class="key"><strong><span>¬</span></strong><br /><strong><span>`</span></strong></div></td>
                <td><div class="key"><strong><span>!</span></strong><br /><strong><span>1</span></strong></div></td>
                <td><div class="key"><strong><span>"</span></strong><br /><strong><span>2</span></strong></div></td>
                <td><div class="key"><strong><span>£</span></strong><br /><strong><span>3</span></strong></div></td>
                <td><div class="key"><strong><span>$</span></strong><br /><strong><span>4</span></strong></div></td>
                <td><div class="key"><strong><span>%</span></strong><br /><strong><span>5</span></strong></div></td>
                <td><div class="key"><strong><span>^</span></strong><br /><strong><span>6</span></strong></div></td>
                <td><div class="key"><strong><span>&</span></strong><br /><strong><span>7</span></strong></div></td>
                <td><div class="key"><strong><span>*</span></strong><br /><strong><span>8</span></strong></div></td>
                <td><div class="key"><strong><span>(</span></strong><br /><strong><span>9</span></strong></div></td>
                <td><div class="key"><strong><span>)</span></strong><br /><strong><span>0</span></strong></div></td>
                <td><div class="key"><strong><span>_</span></strong><br /><strong><span>-</span></strong></div></td>
                <td><div class="key"><strong><span>+</span></strong><br /><strong><span>=</span></strong></div></td>
                <td><div class="backKey"></div></td>
            </tr>
       </table>
     </div>  
     <div class="returnKeyRows"> 
     <div class="returnLeft">
     <div class="returnKeyRow">
        <table>
            <tr>
                <td><div class="tab"></div></td>
                <td><div class="key"><strong>&nbsp;&nbsp;&nbsp;<span>Q</span></strong><br /><strong>ቅ</strong></div></td>
                <td><div class="key"><strong>&nbsp;&nbsp;&nbsp;<span>W</span></strong><br /><strong>ው</strong></div></td>
                <td><div class="key"><strong>&nbsp;&nbsp;&nbsp;<span>E</span></strong></div></td>
                <td><div class="key"><strong>&nbsp;&nbsp;&nbsp;<span>R</span></strong><br /><strong>ር</strong></div></td>
                <td><div class="key"><strong>ጥ&nbsp;&nbsp;<span>T</span></strong><br /><strong>ት</strong></div></td>
                <td><div class="key"><strong>&nbsp;&nbsp;&nbsp;<span>Y</span></strong><br /><strong>ይ</strong></div></td>
                <td><div class="key"><strong>&nbsp;&nbsp;&nbsp;<span>U</span></strong></div></td>
                <td><div class="key"><strong>&nbsp;&nbsp;&nbsp;<span>I</span></strong></div></td>
                <td><div class="key"><strong>&nbsp;&nbsp;&nbsp;<span>O</span></strong></div></td>
                <td><div class="key"><strong>ጵ&nbsp;&nbsp;<span>P</span></strong><br /><strong>ፕ</strong></div></td>
                <td><div class="key"><strong><span>{</span></strong><br /><strong><span>[</span></strong></div></td>
                <td><div class="key"><strong><span>}</span></strong><br /><strong><span>]</span></strong></div></td>
            </tr>
       </table>
     </div> 
     <div class="returnKeyRow">
        <table>
            <tr>
                <td><div class="caps"></div></td>
                <td><div class="key"><strong>ዕ&nbsp;&nbsp;<span>A</span></strong><br /><strong>እ</strong></div></td>
                <td><div class="key"><strong>ሥ&nbsp;&nbsp;<span>S</span></strong><br /><strong>ስ</strong></div></td>
                <td><div class="key"><strong>&nbsp;&nbsp;&nbsp;<span>D</span></strong><br /><strong>ድ</strong></div></td>
                <td><div class="key"><strong>&nbsp;&nbsp;&nbsp;<span>F</span></strong><br /><strong>ፍ</strong></div></td>
                <td><div class="key"><strong>&nbsp;&nbsp;&nbsp;<span>G</span></strong><br /><strong>ግ</strong></div></td>
                <td><div class="key"><strong>ሕ&nbsp;&nbsp;<span>H</span></strong><br /><strong>ህ</strong></div></td>
                <td><div class="key"><strong>&nbsp;&nbsp;&nbsp;<span>J</span></strong><br /><strong>ጅ</strong></div></td>
                <td><div class="key"><strong>ኸ&nbsp;&nbsp;<span>K</span></strong><br /><strong>ክ</strong></div></td>
                <td><div class="key"><strong>&nbsp;&nbsp;&nbsp;<span>L</span></strong><br /><strong>ል</strong></div></td>
                <td><div class="key"><strong>፡&nbsp;&nbsp;<span>:</span></strong><br /><strong>፤&nbsp;&nbsp;<span>;</span></strong></div></td>
                <td><div class="key"><strong><span>@</span></strong><br /><strong><span>,</span></strong></div></td>
                <td><div class="key"><strong>ፅ&nbsp;&nbsp;<span>~</span></strong><br /><strong>ጽ&nbsp;&nbsp;<span>#</span></strong></div></td>
            </tr>
       </table>
     </div> 
     </div>
     <div class="returnRight"></div>
     </div>
     <div class="kbRow">
        <table>
            <tr>
                <td><div class="shift"></div></td>
                <td><div class="key"><strong><span>|</span></strong><br /><strong><span>\</span></strong></div></td>
                <td><div class="key"><strong>ዥ&nbsp;&nbsp;<span>Z</span></strong><br /><strong>ዝ</strong></div></td>
                <td><div class="key"><strong>&nbsp;&nbsp;&nbsp;<span>X</span></strong><br /><strong>ሽ</strong></div></td>
                <td><div class="key"><strong>ጭ&nbsp;&nbsp;<span>C</span></strong><br /><strong>ች</strong></div></td>
                <td><div class="key"><strong>&nbsp;&nbsp;&nbsp;<span>V</span></strong><br /><strong>ቭ</strong></div></td>
                <td><div class="key"><strong>&nbsp;&nbsp;&nbsp;<span>B</span></strong><br /><strong>ብ</strong></div></td>
                <td><div class="key"><strong>ኝ&nbsp;&nbsp;<span>N</span></strong><br /><strong>ን</strong></div></td>
                <td><div class="key"><strong>&nbsp;&nbsp;&nbsp;<span>M</span></strong><br /><strong>ም</strong></div></td>
                <td><div class="key"><strong><span>&lt;</span></strong><br /><strong><span>,</span></strong></div></td>
                <td><div class="key"><strong><span>&gt;</span></strong><br /><strong><span>.</span></strong></div></td>
                <td><div class="key"><strong><span>?</span></strong><br /><strong><span>/</span></strong></div></td>
                <td><div class="shift2"></div></td>
            </tr>
       </table>
     </div> 
     <div class="kbRow">
        <table>
            <tr>
                <td><div class="ctrl"></div></td>
                <td><div class="key"></div></td>
                <td><div class="key"></div></td>
                <td><div class="key"></div></td>
                <td><div class="space"></div></td>
                <td><div class="key"></div></td>
                <td><div class="key"></div></td>
                <td><div class="ctrl"></div></td>
                
            </tr>
       </table>
     </div> 
    </div>
     <div style="float:left; border-top-width:10px; border-right-width:10px; 
         border-style:solid; border-color:#cccccc; margin-top:20px;
         width:230px; height:262px;">
     <h3 style="margin-left:50px">ምሣሌዎች</h3>    
    <table style="margin-left:50px;" cellpadding="4px">
        <tr align="left">
            <td><b>እንግሊዝኛ</b></td><td><b>አማርኛ</b></td>
        </tr>
        <tr>
            <td>Tyt</td><td>ጥይት</td>
        </tr>
        <tr>
            <td>~ehey</td><td>ፀሀይ</td>
        </tr>
        <tr><td>#hfet beet</td><td>ጽህፈት ቤት</td></tr>
        <tr><td>SenTereZ</td><td>ሠንጠረዥ</td></tr>
        <tr><td>Aalem</td><td>ዓለም</td></tr>
        <tr><td>TbebeNa</td><td>ጥበበኛ</td></tr>
        <tr><td>Hywet</td><td>ሕይወት</td></tr>
        <tr><td>aeqTaCa</td><td>አቅጣጫ</td></tr>
    </table>
     </div>           
            </div>
            <div id="agrgee">&copy; መስመር ላይ</div>
        </div>
    </div>


   

</body>
</html>
