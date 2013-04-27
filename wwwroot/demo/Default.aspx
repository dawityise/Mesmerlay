<%@ Page Language="C#" AutoEventWireup="true"  CodeFile="Default.aspx.cs" Inherits="downloads_Default" %>
<%@ Register TagPrefix="muc" TagName="SiteNav" Src="~/usercontrol/menunav.ascx" %>
<%@ Register TagPrefix="muc" TagName="SideNav" Src="~/usercontrol/sidenav.ascx" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <title>መስመር ላይ - በተግባር እይ</title>
    <link href="../site.css" rel="stylesheet" type="text/css" />
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
        <div id="yizet">
            <div id="mawcha">
                <muc:SideNav ID="SideNav1" runat="server" />
            </div>
            <div id="wanaYizet">
                <h2 class="arstezena">በተግባር እይ</h2>
                <p><a href="../editor/pages/amharic.aspx" style="font-size:14pt;" title="የአማርኛውን ማርቀቂያ በተግባር እይ">የአማርኛውን ማርቀቂያ በተግባር እይ</a></p>
               
            </div>
            <div id="agrgee">&copy; መስመር ላይ</div>
        </div>
    </div>
    </form>
</body>
</html>
