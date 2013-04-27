<%@ Page Language="C#" AutoEventWireup="true"  CodeFile="Default.aspx.cs" Inherits="_Default" %>
<%@ Register TagPrefix="muc" TagName="SiteNav" Src="~/usercontrol/menunav.ascx" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>መስመር ላይ - ጎጆ</title>
    <link href="site.css" rel="stylesheet" type="text/css" />
</head>
<body>
    <form id="form1" runat="server">
    <div>
        <div id="rasgee">
            <div id="maareg"><h1>መስመር ላይ</h1></div>
        </div>
        <div id="teguaz">
            <div id="teguazsbsb">
                <muc:SiteNav ID="SiteNavigation" runat="server" />
            </div>
        </div>
        <div id="yizet" style="padding-top:0px;">
            <div id="gojoYizet">
                
                <div class="tila clearborder" style="min-height:60px;">
                    <h1>የመስመር ላይ ፍሬዎች</h1>
                <div id="cse" style="width: 100%;">Loading</div>
                <script src="http://www.google.com/jsapi" type="text/javascript"></script>
                <script type="text/javascript">
                  google.load('search', '1', {language : 'en'});
                  google.setOnLoadCallback(function() {
                    var customSearchControl = new google.search.CustomSearchControl('012847925858021349927:zg8icsxxdew');
                    customSearchControl.setResultSetSize(google.search.Search.FILTERED_CSE_RESULTSET);
                    customSearchControl.draw('cse');
                  }, true);
                </script>
                <link rel="stylesheet" href="http://www.google.com/cse/style/look/default.css" type="text/css" />

      
                </div>
                
                
                <div class="laymesmer"></div>
                <div class="tila">
                    <div class="girasefef">
                        <a href="editor/pages/amharic.aspx">
                        <img src="image/pageItem/editorsmall.png" alt="" /></a>

                    </div>
                    <div class="qegnsefef">
                        <h2 class="arstezena" style="margin-bottom:0px;">
                            የአማርኛ ማርቀቂያ</h2>
                        <p>
                            ይህን የአማርኛ ማርቀቂያ በኢንተርኔት መስመር ላይ ከሆኑ <a href="editor/pages/amharic.aspx">ወደዚህ</a>
                            በመሄድ በነፃ ሊጠቀሙት ይችላሉ፡፡ ከኢንተርኔት አገልግሎት ውጪ በሚሆኑበትም ግዜ <a href="downloads" title="አውርድ">
                                ክዚህ</a> በማውረድ፤ በራስዎ ኮምፒውተር (ማሽን) ላይ እንዲሮጥ በማድረግ ሊጠቀሙት ይችላሉ፡፡
                        </p>
                    </div>
                </div>
                <div class="tachmesmer"></div>
                
            </div>
            <div id="agrgee">&copy; መስመር ላይ</div>
        </div>
    </div>
    </form>
</body>
</html>
