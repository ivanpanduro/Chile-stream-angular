using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ChileStream.API.Models;

namespace ChileStream.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UsuariosController : ControllerBase
{
    private readonly ChileStreamDbContext _context;

    public UsuariosController(ChileStreamDbContext context)
    {
        _context = context;
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] Usuario user)
    {
        var usuario = await _context.Usuario
            .FirstOrDefaultAsync(u => u.Correo == user.Correo && u.Contrasena == user.Contrasena);
        
        if (usuario == null)
            return Unauthorized();

        return Ok(usuario);
    }
}
