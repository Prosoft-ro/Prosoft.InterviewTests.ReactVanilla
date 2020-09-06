using Semver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Prosoft.InterviewTests.ReactVanilla.Server {
    public static class AppVersion {
        public static SemVersion Version { get; } = new SemVersion(1, 0, 0);
    }
}
