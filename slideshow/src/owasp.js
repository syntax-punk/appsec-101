import './style.css'

const sectionPage = `h-fit min-h-screen w-full flex flex-col items-center justify-center py-6`;
const slideFrame = `bg-zinc-100 rounded-2xl w-full h-fit py-8`;
const hoverEffect = `transform hover:scale-102 transition-transform duration-800 ease-in-out`;
const codeSnippet = `language-python`;
const titleBadge = `bg-gradient-to-r from-slate-950 to-indigo-950 text-white w-18 h-18 rounded-full flex items-center justify-center text-3xl font-bold mr-6 shadow-lg`;

document.querySelector('#solid').innerHTML = `
  <main class="h-full w-full bg-black/5">
        <div class="max-w-6xl mx-auto p-5">
          <!-- Title Slide -->
            <section class="section-page ${sectionPage}">
                <div class="${slideFrame} shadow-2xl mb-8 p-12 text-center ${hoverEffect}">
                    <h1 class="text-5xl md:text-6xl font-bold text-slate-800 mb-6">OWASP Top 10</h1>
                    <p class="text-xl md:text-2xl text-slate-600 mb-4">The Open Worldwide Application Security Project</p>
                    <p class="text-lg text-slate-500">a nonprofit foundation that works to improve the security of software</p>
                </div>
            </section>

            <!-- Introduction 1 -->
            <section class="section-page ${sectionPage}">
                <div class="${slideFrame} shadow-xl mb-8 p-8 ${hoverEffect}">
                    <h2 class="text-3xl font-bold text-blue-800 mb-6 border-b-4 border-blue-800 pb-3">Top 10</h2>
                    <p class="text-lg text-gray-700 leading-relaxed mb-4">The OWASP Top 10 is a standard awareness document for developers and web application security. It represents a broad consensus about the most critical security risks to web applications.</p>
                    
                    <div class="bg-gradient-to-r from-sky-900 to-indigo-800 text-white p-8 rounded-xl">
                        <ul class="space-y-3">
                            <li class="flex items-center">
                                <span class="text-green-300 font-bold text-xl mr-3">A01</span>
                                <span>Broken Access Control</span>
                            </li>
                            <li class="flex items-center">
                                <span class="text-green-300 font-bold text-xl mr-3">A02</span>
                                <span>Cryptographic Failures</span>
                            </li>
                            <li class="flex items-center">
                                <span class="text-green-300 font-bold text-xl mr-3">A03</span>
                                <span>Injection</span>
                            </li>
                            <li class="flex items-center">
                                <span class="text-green-300 font-bold text-xl mr-3">A04</span>
                                <span>Insecure Design</span>
                            </li>
                            <li class="flex items-center">
                                <span class="text-green-300 font-bold text-xl mr-3">A05</span>
                                <span>Security Misconfiguration</span>
                            </li>
                            <li class="flex items-center">
                                <span class="text-green-300 font-bold text-xl mr-3">A06</span>
                                <span>Vulnerable and Outdated Components</span>
                            </li>
                            <li class="flex items-center">
                                <span class="text-green-300 font-bold text-xl mr-3">A07</span>
                                <span>Identification and Authentication Failures</span>
                            </li>
                            <li class="flex items-center">
                                <span class="text-green-300 font-bold text-xl mr-3">A08</span>
                                <span>Software and Data Integrity Failures</span>
                            </li>
                            <li class="flex items-center">
                                <span class="text-green-300 font-bold text-xl mr-3">A09</span>
                                <span>Security Logging and Monitoring Failures</span>
                            </li>
                            <li class="flex items-center">
                                <span class="text-green-300 font-bold text-xl mr-3">A10</span>
                                <span>Server-Side Request Forgery (SSRF)</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <!-- A01 -->
            <section class="section-page ${sectionPage}">
                <div class="${slideFrame} shadow-xl mb-8 p-8 ${hoverEffect}">
                    <div class="flex items-center mb-8">
                        <div class="${titleBadge}">A01</div>
                        <div>
                            <h2 class="text-3xl font-bold text-blue-800">Broken Access Control</h2>
                        </div>
                    </div>
                    <article class="text-lg text-gray-700 leading-relaxed mb-6 bg-red-50 border-l-4 border-red-500 p-6 mb-6 rounded-lg">
                        <h2 class="text-bold font-semibold text-red-950 mb-4">Violations (some of them):</h2>
                        <ul class="list-disc list-inside space-y-2 px-4">
                            <li>Violation of the principle of least privilege or deny by default</li>
                            <li>Bypassing access control checks</li>
                            <li>Accessing API with missing access controls for POST, PUT and DELETE</li>
                            <li>CORS misconfiguration allows API access from unauthorized/untrusted origins</li>
                        </ul>
                    </article>

                    <pre class="${codeSnippet}">
                    <code>
    URL: https://example.com/user/profile?userId=12345
    # attacker modifies the URL to access another user's data
    URL: https://example.com/user/profile?userId=12346
                    </code>
                    </pre>
                </div>
            </section>

            <!-- A02 -->
            <section class="section-page ${sectionPage}">
                <div class="${slideFrame} shadow-xl mb-8 p-8 ${hoverEffect}">
                    <div class="flex items-center mb-8">
                        <div class="${titleBadge}">A02</div>
                        <div>
                            <h2 class="text-3xl font-bold text-blue-800">Cryptographic Failures</h2>
                        </div>
                    </div>
                    <article class="text-lg text-gray-700 leading-relaxed mb-6 bg-red-50 border-l-4 border-red-500 p-6 mb-6 rounded-lg">
                        <h2 class="text-bold font-semibold text-red-950 mb-4">Violations:</h2>
                        <ul class="list-disc list-inside space-y-2 px-4">
                            <li>Sensitive data transmitted in clear text (this concerns protocols such as HTTP, SMTP, FTP)</li>
                            <li>Weak crypto keys generated or re-used</li>
                            <li>Missing proper key management or rotation</li>
                            <li>Crypto keys checked into source code repositories</li>
                            <li>Passwords are not properly hashed and salted</li>
                        </ul>
                    </article>
                </div>
            </section>

            <!-- A03 -->
            <section class="section-page ${sectionPage}">
                <div class="${slideFrame} shadow-xl mb-8 p-8 ${hoverEffect}">
                    <div class="flex items-center mb-8">
                        <div class="${titleBadge}">A03</div>
                        <div>
                            <h2 class="text-3xl font-bold text-blue-800">Injection</h2>
                        </div>
                    </div>
                    <article class="text-lg text-gray-700 leading-relaxed mb-6 bg-red-50 border-l-4 border-red-500 p-6 mb-6 rounded-lg">
                        <h2 class="text-bold font-semibold text-red-950 mb-4">Violations:</h2>
                        <ul class="list-disc list-inside space-y-2 px-4">
                            <li>User-supplied data is not validated, filtered, or sanitized by the application</li>
                            <li>Dynamic queries or non-parameterized calls without context-aware escaping are used directly in the interpreter</li>
                            <li>Malicious data is sent to an interpreter as part of a command or query</li>
                        </ul>
                    </article>

                    <pre class="${codeSnippet}">
                    <code>
    # user enters their username
    username = input()  # User types: admin' OR '1'='1

    # query built by directly inserting user input
    query = "SELECT * FROM users WHERE username = '" + username + "'"

    # result: SELECT * FROM users WHERE username = 'admin' OR '1'='1'
    # this returns ALL users because '1'='1' is always true!
                    </code>
                    </pre>
                </div>
            </section>

            <!-- A04 -->
            <section class="section-page ${sectionPage}">
                <div class="${slideFrame} shadow-xl mb-8 p-8 ${hoverEffect}">
                    <div class="flex items-center mb-8">
                        <div class="${titleBadge}">A04</div>
                        <div>
                            <h2 class="text-3xl font-bold text-blue-800">Insecure Design</h2>
                        </div>
                    </div>
                    <article class="text-lg text-gray-700 leading-relaxed mb-6 bg-red-50 border-l-4 border-red-500 p-6 mb-6 rounded-lg">
                        <h2 class="text-bold font-semibold text-red-950 mb-4">Violations:</h2>
                        <ul class="list-disc list-inside space-y-2 px-4">
                            <li>Lack of secure design principles and threat modeling</li>
                            <li>No rate limiting or throttling mechanisms</li>
                            <li>Missing business logic validation</li>
                            <li>No queueing or retry logic for critical operations</li>
                        </ul>
                    </article>

                    <pre class="${codeSnippet}">
                    <code>
    # example 1: Password reset with unlimited requests
    # example 2: API with no request limits → data scraping bots drain your entire database
    # example 3: E-commerce cart allows negative quantities → user gets refunded for "buying" -5 items
                    </code>
                    </pre>
                </div>
            </section>

            <!-- A05 -->
            <section class="section-page ${sectionPage}">
                <div class="${slideFrame} shadow-xl mb-8 p-8 ${hoverEffect}">
                    <div class="flex items-center mb-8">
                        <div class="${titleBadge}">A05</div>
                        <div>
                            <h2 class="text-3xl font-bold text-blue-800">Security Misconfiguration</h2>
                        </div>
                    </div>
                    <article class="text-lg text-gray-700 leading-relaxed mb-6 bg-red-50 border-l-4 border-red-500 p-6 mb-6 rounded-lg">
                        <h2 class="text-bold font-semibold text-red-950 mb-4">Violations:</h2>
                        <ul class="list-disc list-inside space-y-2 px-4">
                            <li>Unnecessary features enabled or installed (ports, services, privileges)</li>
                            <li>Overly verbose error messages and stack traces</li>
                            <li>Default accounts and their passwords are still enabled and unchanged</li>
                        </ul>
                    </article>

                    <pre class="${codeSnippet}">
                    <code>
    # example 1: Admin account still uses admin/admin or admin/password123
    # example 2: Database errors revealing schema: Column 'credit_card_number' doesn't exist in table 'users'
    # example 3: Version information in errors: Apache/2.4.1 PHP/7.2.3 MySQL/5.7
                    </code>
                    </pre>
                </div>
            </section>

            <!-- A06 -->
            <section class="section-page ${sectionPage}">
                <div class="${slideFrame} shadow-xl mb-8 p-8 ${hoverEffect}">
                    <div class="flex items-center mb-8">
                        <div class="${titleBadge}">A06</div>
                        <div>
                            <h2 class="text-3xl font-bold text-blue-800">Vulnerable and Outdated Components</h2>
                        </div>
                    </div>
                    <article class="text-lg text-gray-700 leading-relaxed mb-6 bg-red-50 border-l-4 border-red-500 p-6 mb-6 rounded-lg">
                        <h2 class="text-bold font-semibold text-red-950 mb-4">Violations:</h2>
                        <ul class="list-disc list-inside space-y-2 px-4">
                            <li>Using libraries with known critical vulnerabilities</li>
                            <li>Using unsupported or end-of-life (EOL) software</li>
                            <li>No compatibility testing of updated, upgraded, or patched components</li>
                        </ul>
                    </article>

                    <pre class="${codeSnippet}">
                    <code>
    # example 1: Log4Shell (Log4j vulnerability CVE-2021-44228) - allowed remote code execution, affected millions
    # example 2: Windows XP, Windows Server 2003 (no patches since 2014/2015)
                    </code>
                    </pre>
                </div>
            </section>

            <!-- A07 -->
            <section class="section-page ${sectionPage}">
                <div class="${slideFrame} shadow-xl mb-8 p-8 ${hoverEffect}">
                    <div class="flex items-center mb-8">
                        <div class="${titleBadge}">A07</div>
                        <div>
                            <h2 class="text-3xl font-bold text-blue-800">Identification and Authentication Failures</h2>
                        </div>
                    </div>
                    <article class="text-lg text-gray-700 leading-relaxed mb-6 bg-red-50 border-l-4 border-red-500 p-6 mb-6 rounded-lg">
                        <h2 class="text-bold font-semibold text-red-950 mb-4">Violations:</h2>
                        <ul class="list-disc list-inside space-y-2 px-4">
                            <li>Weak or inadequate password policies</li>
                            <li>Session management failures</li>
                            <li>Missing or broken MFA</li>
                            <li>Exposing session IDs in URLs</li>
                        </ul>
                    </article>

                    <pre class="${codeSnippet}">
                    <code>
    # example 1: Unlimited login attempts → brute-force attacks
    # example 2: Sessions never expire (logged in forever)
    # example 3: No session invalidation on logout
                    </code>
                    </pre>
                </div>
            </section>

            <!-- A08 -->
            <section class="section-page ${sectionPage}">
                <div class="${slideFrame} shadow-xl mb-8 p-8 ${hoverEffect}">
                    <div class="flex items-center mb-8">
                        <div class="${titleBadge}">A08</div>
                        <div>
                            <h2 class="text-3xl font-bold text-blue-800">Software and Data Integrity Failures</h2>
                        </div>
                    </div>
                    <article class="text-lg text-gray-700 leading-relaxed mb-6 bg-red-50 border-l-4 border-red-500 p-6 mb-6 rounded-lg">
                        <h2 class="text-bold font-semibold text-red-950 mb-4">Violations:</h2>
                        <ul class="list-disc list-inside space-y-2 px-4">
                            <li>Using untrusted or unsigned software components</li>
                            <li>Insecure CI/CD pipeline</li>
                            <li>No integrity checks on critical data</li>
                            <li>Trusting data from untrusted sources</li>
                        </ul>
                    </article>

                    <pre class="${codeSnippet}">
                    <code>
    # example 1: Codecov breach (2021) - Modified bash uploader script, stole credentials from CI environments
    # example 2: GitHub Actions with secrets accessible to forks/pull requests
                    </code>
                    </pre>
                </div>
            </section>

            <!-- A09 -->
            <section class="section-page ${sectionPage}">
                <div class="${slideFrame} shadow-xl mb-8 p-8 ${hoverEffect}">
                    <div class="flex items-center mb-8">
                        <div class="${titleBadge}">A09</div>
                        <div>
                            <h2 class="text-3xl font-bold text-blue-800">Security Logging and Monitoring Failures</h2>
                        </div>
                    </div>
                    <article class="text-lg text-gray-700 leading-relaxed mb-6 bg-red-50 border-l-4 border-red-500 p-6 mb-6 rounded-lg">
                        <h2 class="text-bold font-semibold text-red-950 mb-4">Violations:</h2>
                        <ul class="list-disc list-inside space-y-2 px-4">
                            <li>Auditable events, such as logins, failed logins, and high-value transactions, are not logged</li>
                            <li>Warnings and errors generate no, inadequate, or unclear log messages</li>
                            <li>Logs of applications and APIs are not monitored for suspicious activity</li>
                            <li>Trusting data from untrusted sources</li>
                        </ul>
                    </article>
                </div>
            </section>

            <!-- A10 -->
            <section class="section-page ${sectionPage}">
                <div class="${slideFrame} shadow-xl mb-8 p-8 ${hoverEffect}">
                    <div class="flex items-center mb-8">
                        <div class="${titleBadge}">A10</div>
                        <div>
                            <h2 class="text-3xl font-bold text-blue-800">Server-Side Request Forgery (SSRF)</h2>
                        </div>
                    </div>
                    <article class="text-lg text-gray-700 leading-relaxed mb-6 bg-red-50 border-l-4 border-red-500 p-6 mb-6 rounded-lg">
                        <h2 class="text-bold font-semibold text-red-950 mb-4">Violations:</h2>
                        <ul class="list-disc list-inside space-y-2 px-4">
                            <li>Web application is fetching a remote resource without validating the user-supplied URL</li>
                            <li>Access to internal network resources</li>
                        </ul>
                    </article>
                </div>
            </section>
      </div>
  </main>
`
