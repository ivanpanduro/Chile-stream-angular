public class Opinion
{
    public int Id { get; set; }
    public int IdUsuario { get; set; }
    public int IdPelicula { get; set; }
    public string Comentario { get; set; }= string.Empty;
    public DateTime Fecha { get; set; }
}
