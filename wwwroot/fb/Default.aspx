<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" %>

<%@ Register Assembly="System.Web.Extensions, Version=3.5.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35"
    Namespace="System.Web.UI" TagPrefix="asp" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>

    <script src="http://static.ak.connect.facebook.com/js/api_lib/v0.4/FeatureLoader.js.php"
        type="text/javascript"></script>

</head>
<body>
    <form id="form1" runat="server">
    <asp:ScriptManager ID="ScriptManager1" runat="server">
    </asp:ScriptManager>
    <div>
        <iframe src="http://www.facebook.com/plugins/like.php?href=http%3A%2F%2Fmesmerlay.com%2Feditor%2Fpages%2Famharic.aspx&amp;layout=standard&amp;show_faces=true&amp;width=450&amp;action=like&amp;font=tahoma&amp;colorscheme=light&amp;height=80" 
        scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:450px; height:80px;" allowTransparency="true"></iframe>
        <table width="100%" border="0">
            <tr>
                <td>
                    <fb:login-button onlogin="window.location.reload()">
        </fb:login-button>
                    &nbsp;
                    <fb:prompt-permission perms="email"> Grant application users to mail me </fb:prompt-permission>
                </td>
            </tr>
            <tr>
                <td align="left" valign="top">
                    Your Facebook Name:<asp:Label ID="lblName" runat="server" Text="Not authenticated."></asp:Label>
                </td>
            </tr>
            <tr>
                <td align="left" valign="top">
                    <b>My Friends:</b>
                </td>
            </tr>
            <tr>
                <td align="center" valign="top">
                    <table width="100%" cellspacing="5">
                        <tr>
                            <td align="left" valign="top" style="width: 60%;">
                                <asp:UpdatePanel ID="UpdatePanel1" runat="server" UpdateMode="Conditional">
                                    <ContentTemplate>
                                        <asp:GridView ID="grvMyFriends" runat="server" AutoGenerateColumns="false" CellPadding="0"
                                            CellSpacing="0" GridLines="None" OnPageIndexChanging="grvMyFriends_PageIndexChanging"
                                            PageSize="100" AllowPaging="true" Width="100%">
                                            <HeaderStyle Font-Bold="true" HorizontalAlign="Left" BackColor="#9F9D81" />
                                            <RowStyle HorizontalAlign="Left" BackColor="#DFDED1" />
                                            <AlternatingRowStyle HorizontalAlign="Left" BackColor="#BFBEB3" />
                                            <Columns>
                                                <asp:TemplateField>
                                                    <ItemTemplate>
                                                        <img src='<%# Eval("pic_square") %>' alt="" />
                                                    </ItemTemplate>
                                                </asp:TemplateField>
                                                <asp:TemplateField HeaderText="Name">
                                                    <ItemTemplate>
                                                        <%# Eval("name") %>
                                                    </ItemTemplate>
                                                </asp:TemplateField>
                                                <asp:TemplateField HeaderText="Sex">
                                                    <ItemTemplate>
                                                        <%# Eval("sex") %>
                                                    </ItemTemplate>
                                                </asp:TemplateField>
                                                <asp:TemplateField HeaderText="Birth Date">
                                                    <ItemTemplate>
                                                        <%# Eval("birthday") %>
                                                    </ItemTemplate>
                                                </asp:TemplateField>
                                                <asp:TemplateField>
                                                    <ItemTemplate>
                                                        <asp:LinkButton ID="lnbSend" runat="server" CommandArgument='<%# Eval("uid") %>'
                                                            OnCommand="lnbSend_Command">Send Message</asp:LinkButton>
                                                    </ItemTemplate>
                                                </asp:TemplateField>
                                            </Columns>
                                            <PagerSettings FirstPageText="First" NextPageText="Next" LastPageText="Last" PreviousPageText="Previous"
                                                Mode="NumericFirstLast" Position="Bottom" />
                                        </asp:GridView>
                                    </ContentTemplate>
                                </asp:UpdatePanel>
                            </td>
                            <td align="left" valign="top" style="width: 40%;">
                                <asp:GridView ID="grvFriends" runat="server">
                                </asp:GridView>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </div>
    </form>

    <script type="text/javascript">
        FB.init("c74c13276171f99e6ac8e9441cd1a240", "xd_receiver.htm");
    </script>

</body>
</html>
