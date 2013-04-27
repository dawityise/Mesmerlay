<%@ Page Language="C#" AutoEventWireup="true"  CodeFile="Contact.aspx.cs" Inherits="_Contact" %>
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
                
                              
                <div class="tila">
                <h2 class="arstezena" style="margin-bottom:0px;">
                            ተጠሪ</h2>
                        <p>
                            አስትያየት ካለዎት ወይንም ደግሞ እርዳታ የሚሹ ከሆነ <a href="mailto:admin@mesmerlay.com"> በእዚህ</a> መልዕክትዎትን ቢጥሉልን ይደርሰናል፡፡ 

                        </p>
                </div>
                <div class="tachmesmer"></div>
                
            </div>
            <div id="agrgee">&copy; መስመር ላይ</div>
        </div>
    </div>
    </form>
</body>
</html>
