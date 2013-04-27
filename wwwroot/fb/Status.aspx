<%@ Page Language="C#" ValidateRequest="false" AutoEventWireup="true" CodeFile="Status.aspx.cs" Inherits="_Status" %>

<%@ Register Assembly="Facebook.Web" Namespace="Facebook.Web.FbmlControls" TagPrefix="cc1" %>

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
   
    <div>
        <table width="100%" border="0">
            <tr>
                <td>
                    <fb:login-button onlogin="window.location.reload()">
                    </fb:login-button>
                    &nbsp;
                    <cc1:PromptPermission ID="P1" runat="server" Perms="publish_stream">
                        <ContentTemplate> 
                            ሁኔታዎን በፌስቡክ ማስፈር እንድችል፤ ይህን በመጫን ይፍቀዱልኝ፡፡ 

                        </ContentTemplate>
                    </cc1:PromptPermission> 
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
