using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UAR_WITH_REACT.Models;

namespace UAR_WITH_REACT.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VMAuditKpiByUserController : ControllerBase
    {
        private readonly UARAuditAppDbContext _context;

        public VMAuditKpiByUserController(UARAuditAppDbContext context)
        {
            _context = context;
        }

        // GET: api/VpApprovals
        [HttpGet]
        public async Task<ActionResult<IEnumerable<VwAuditKpiByUser>>> GetTblVpApprovals()
        {
            return await _context.VwAuditKpiByUsers.ToListAsync();
        }
    }
}
