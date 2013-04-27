using System;
using System.Data.SqlClient;
using System.Data;
using System.Configuration;
using System.Web.UI.HtmlControls;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Articles_Default : System.Web.UI.Page
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
        sqlCmd = new SqlCommand("mesmerla.article_name_with_key", sqlCn);
        da = new SqlDataAdapter(sqlCmd);
        sqlCn.Open();
        da.Fill(dt);
        sqlCn.Close();

        if (dt != null && dt.Rows.Count > 0)
        {
            Table tbl = new Table();
            TableCell tc;
            TableRow tr;

            foreach (DataRow dr in dt.Rows)
            {
                tr = new TableRow();
                tc = new TableCell();          
                hl = new HyperLink();
                hl.Font.Size = 14;
                hl.NavigateUrl = "~/Articles/article.aspx?id=" + dr["Id"].ToString();
                hl.Text = dr["Title"].ToString();
                tc.Controls.Add(hl);
                tr.Controls.Add(tc);
                tbl.Controls.Add(tr);

            }
            ArticleTitle.Controls.Add(tbl);
        }
    }
}
