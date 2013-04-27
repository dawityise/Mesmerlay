using System;
using System.Data;
using System.Data.SqlClient;
using System.Web;
using System.Web.UI.HtmlControls;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Configuration;
public partial class usercontrol_sidenav : System.Web.UI.UserControl
{
    SqlConnection sqlCn = new SqlConnection(ConfigurationManager.ConnectionStrings["AmharicCn"].ConnectionString);
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!Page.IsPostBack)
        {
            try
            {
                BindArticleTitle();
            }
            catch
            {
                return;
            }
        }
    }
    private void BindArticleTitle()
    {
        SqlCommand sqlCmd;
        DataTable dt = new DataTable();
        SqlDataAdapter da;
        HyperLink hl;
        HtmlGenericControl li;
        sqlCmd = new SqlCommand("mesmerla.article_name_with_key", sqlCn);
        da = new SqlDataAdapter(sqlCmd);
        sqlCn.Open();
        da.Fill(dt);
        sqlCn.Close();

        if (dt != null && dt.Rows.Count > 0)
        {
            foreach (DataRow dr in dt.Rows)
            {
                li = new HtmlGenericControl("li");
                hl = new HyperLink();
                hl.NavigateUrl = "~/Articles/article.aspx?id=" + dr["Id"].ToString();
                hl.Text = dr["Title"].ToString();
                li.Controls.Add(hl);
                ArticleList.Controls.Add(li);

            }
        }
    }
}
