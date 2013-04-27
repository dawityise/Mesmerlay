<%@ Control Language="C#" AutoEventWireup="true" CodeFile="menunav.ascx.cs" Inherits="usercontrol_menunav" %>
<ul>
                    <li><asp:HyperLink ID="LinkHome" NavigateUrl="~/Default.aspx" runat="server">ጎጆ</asp:HyperLink></li>
                    <li><asp:HyperLink ID="LinkArticles" NavigateUrl="~/articles/default.aspx" runat="server">መጣጥፎች</asp:HyperLink></li>
                    <li><asp:HyperLink ID="LinkDownloads" NavigateUrl="~/downloads/default.aspx" runat="server">አውርድ</asp:HyperLink></li>
                    <li><asp:HyperLink ID="LinkDemo" NavigateUrl="~/demo/default.aspx" runat="server">በተግባር እይ</asp:HyperLink></li>
                    <li><asp:HyperLink ID="LinkContact" NavigateUrl="~/Contact.aspx" runat="server">ተጠሪ</asp:HyperLink></li>
               </ul>
<script type="text/javascript">
var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
</script>
<script type="text/javascript">
try {
var pageTracker = _gat._getTracker("UA-16172225-1");
pageTracker._trackPageview();
} catch(err) {}</script>