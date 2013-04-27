using System;
using System.Collections.Generic;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;
public partial class Articles_article : System.Web.UI.Page
{
    SqlConnection sqlCn = new SqlConnection(ConfigurationManager.ConnectionStrings["AmharicCn"].ConnectionString);
    int articleId = -1;
    protected void Page_Load(object sender, EventArgs e)
    {
        if (Request.QueryString["id"] != null)
        {
            try
            {
                articleId = Convert.ToInt32(Request.QueryString["id"].ToString());
            }
            catch { return; }
        }

    }
    private void BindArticle()
    {
        SqlCommand sqlCmd;
        DataTable dt = new DataTable();
        SqlDataAdapter da;
        sqlCmd = new SqlCommand("mesmerla.article_released_by_key", sqlCn);
        sqlCmd.CommandType = CommandType.StoredProcedure;
        sqlCmd.Parameters.Add("@id", SqlDbType.Int);
        sqlCmd.Parameters["@id"].Value= articleId;
        sqlCmd.Parameters["@id"].Direction = ParameterDirection.Input;
        da = new SqlDataAdapter(sqlCmd);
        sqlCn.Open();
        da.Fill(dt);
        sqlCn.Close();

        if (dt != null && dt.Rows.Count > 0)
        {
            foreach (DataRow dr in dt.Rows)
            {
                ArticleTitle.Controls.Add(new LiteralControl(dr["Title"].ToString()));
                ArticleContent.Controls.Add(new LiteralControl(dr["ShortContent"].ToString()));
                ArticleContent.Controls.Add(new LiteralControl(dr["Content"].ToString()));
            }
        }
    }
    protected void Page_PreRender(object sender, EventArgs e)
    {
        if (!Page.IsPostBack && articleId > 0)
        {
            try
            { BindArticle(); }
            catch { return; }
        }
    }

}
