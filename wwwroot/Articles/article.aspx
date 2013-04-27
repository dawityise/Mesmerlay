<%@ Page Language="C#" AutoEventWireup="true" CodeFile="article.aspx.cs" Inherits="Articles_article" %>
<%@ Register TagPrefix="muc" TagName="SiteNav" Src="~/usercontrol/menunav.ascx" %>
<%@ Register TagPrefix="muc" TagName="SideNav" Src="~/usercontrol/sidenav.ascx" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <title>መስመር ላይ - መጣጥፎች</title>
    <link href="../site.css" rel="stylesheet" type="text/css" />
    <link href="style/main.css" rel="stylesheet" type="text/css" />
</head>
<body>
    <form id="form1" runat="server">
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
            <div id="mawcha">
                <muc:SideNav ID="SideNav1" runat="server" />
            </div>
            <div id="wanaYizet">
                <h2 id="ArticleTitle" class="arstezena" runat="server">
                </h2>
                <div id="ArticleContent" runat="server">
                </div>
                
            </div>
            <div id="agrgee">&copy; መስመር ላይ</div>
        </div>
    </div>
    </form>
</body>
</html>
