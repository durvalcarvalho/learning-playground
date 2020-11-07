using OReilly.Models;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace OReilly.Controllers
{
    public class ProcessesController : ApiController
    {
        public ProcessCollectionsState Get(string name)
        {
            if(string.IsNullOrEmpty(name))
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }

            return new ProcessCollectionsState {
                Processes = Process.GetProcessesByName(name)
                    .Select(p => new ProcessState(p))
            };

        }
    }
}
