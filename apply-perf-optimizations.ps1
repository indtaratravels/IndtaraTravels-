# Performance Optimization Script for Indtara Experiences Website
# Applies: preconnect hints, defer attributes, loading="lazy" on images, vietnam.html bug fix

$basePath = "c:\work\CHANDNI MAM WEBSITE"

# ============================================================
# CATEGORY A: Country pages with existing fonts preconnect + stylesheet before fonts + packages.js + bottom scripts (supabase, auth, translations, i18n, script.js)
# india.html, thailand.html, singapore.html, dubai.html, malaysia.html, maldives.html, mauritius.html, vietnam.html, usa.html
# ============================================================

$countryPages = @("india.html", "thailand.html", "singapore.html", "dubai.html", "malaysia.html", "maldives.html", "mauritius.html", "vietnam.html", "usa.html")

foreach ($file in $countryPages) {
    $filePath = Join-Path $basePath $file
    $content = [System.IO.File]::ReadAllText($filePath)
    $original = $content

    # 1. Fix vietnam.html specific bug
    if ($file -eq "vietnam.html") {
        $content = $content.Replace('href="styles.css\?v=1.2"', 'href="styles.css?v=1.2"')
    }

    # 2. Add preconnect hints for cdn.jsdelivr.net and cdnjs.cloudflare.com (fonts ones already exist)
    # Insert after the existing fonts preconnect lines but before dns-prefetch
    if ($content -notmatch 'preconnect.*cdn\.jsdelivr\.net') {
        $content = $content.Replace(
            '<link rel="dns-prefetch" href="https://fonts.googleapis.com">',
            '<link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin>' + "`n" +
            '    <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossorigin>' + "`n" +
            '    <link rel="dns-prefetch" href="https://fonts.googleapis.com">'
        )
    }

    # 3. Add defer to script tags
    # packages.js (in body, not in head)
    $content = $content.Replace('<script src="packages.js"></script>', '<script src="packages.js" defer></script>')
    
    # Bottom scripts - supabase, supabase-config, auth, translations, i18n, script.js
    $content = $content.Replace('<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>', '<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2" defer></script>')
    $content = $content.Replace('<script src="supabase-config.js"></script>', '<script src="supabase-config.js" defer></script>')
    $content = $content.Replace('<script src="auth.js"></script>', '<script src="auth.js" defer></script>')
    $content = $content.Replace('<script src="translations.js"></script>', '<script src="translations.js" defer></script>')
    $content = $content.Replace('<script src="i18n.js"></script>', '<script src="i18n.js" defer></script>')
    $content = $content.Replace('<script src="script.js"></script>', '<script src="script.js" defer></script>')

    # Don't double-add defer
    $content = $content.Replace('defer defer', 'defer')

    if ($content -ne $original) {
        [System.IO.File]::WriteAllText($filePath, $content)
        Write-Host "Updated: $file"
    } else {
        Write-Host "No changes needed: $file"
    }
}

# ============================================================
# CATEGORY B: packages.html - has GSAP scripts, no supabase/auth, has packages.js
# ============================================================
$filePath = Join-Path $basePath "packages.html"
$content = [System.IO.File]::ReadAllText($filePath)
$original = $content

# 1. Add preconnect hints - this page has fonts preconnect but missing cdn ones
# Insert after fonts.gstatic.com preconnect
if ($content -notmatch 'preconnect.*cdn\.jsdelivr\.net') {
    $content = $content.Replace(
        '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>',
        '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>' + "`n" +
        '    <link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin>' + "`n" +
        '    <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossorigin>'
    )
}

# 2. Add defer to GSAP scripts
$content = $content.Replace('<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>', '<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js" defer></script>')
$content = $content.Replace('<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"></script>', '<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js" defer></script>')

# 3. Add defer to packages.js, translations.js, i18n.js
$content = $content.Replace('<script src="packages.js"></script>', '<script src="packages.js" defer></script>')
$content = $content.Replace('<script src="translations.js"></script>', '<script src="translations.js" defer></script>')
$content = $content.Replace('<script src="i18n.js"></script>', '<script src="i18n.js" defer></script>')

$content = $content.Replace('defer defer', 'defer')

if ($content -ne $original) {
    [System.IO.File]::WriteAllText($filePath, $content)
    Write-Host "Updated: packages.html"
} else {
    Write-Host "No changes needed: packages.html"
}

# ============================================================
# CATEGORY C: booking.html - has GSAP, packages.js, no supabase/auth at bottom
# ============================================================
$filePath = Join-Path $basePath "booking.html"
$content = [System.IO.File]::ReadAllText($filePath)
$original = $content

# 1. Add preconnect hints - has fonts preconnect but no cdn ones
if ($content -notmatch 'preconnect.*cdn\.jsdelivr\.net') {
    $content = $content.Replace(
        '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>',
        '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>' + "`n" +
        '    <link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin>' + "`n" +
        '    <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossorigin>'
    )
}

# 2. Add defer to GSAP
$content = $content.Replace('<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>', '<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js" defer></script>')

# 3. Add defer to packages.js
$content = $content.Replace('<script src="packages.js"></script>', '<script src="packages.js" defer></script>')

$content = $content.Replace('defer defer', 'defer')

if ($content -ne $original) {
    [System.IO.File]::WriteAllText($filePath, $content)
    Write-Host "Updated: booking.html"
} else {
    Write-Host "No changes needed: booking.html"
}

# ============================================================
# CATEGORY D: login.html, register.html - have supabase/supabase-config/auth at bottom, no fonts preconnect currently
# These load fonts via link directly (no preconnect)
# ============================================================
$authPages = @("login.html", "register.html")

foreach ($file in $authPages) {
    $filePath = Join-Path $basePath $file
    $content = [System.IO.File]::ReadAllText($filePath)
    $original = $content

    # 1. Add preconnect hints before the Google Fonts link
    # These files have: <link rel="stylesheet" href="styles.css?v=1.2"> then <link href="https://fonts.googleapis.com/...
    if ($content -notmatch 'preconnect.*fonts\.googleapis\.com') {
        $content = $content.Replace(
            '<link rel="stylesheet" href="styles.css?v=1.2">',
            '<link rel="preconnect" href="https://fonts.googleapis.com">' + "`n" +
            '    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>' + "`n" +
            '    <link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin>' + "`n" +
            '    <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossorigin>' + "`n" +
            '    <link rel="stylesheet" href="styles.css?v=1.2">'
        )
    }

    # 2. Add defer to scripts
    $content = $content.Replace('<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>', '<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2" defer></script>')
    $content = $content.Replace('<script src="supabase-config.js"></script>', '<script src="supabase-config.js" defer></script>')
    $content = $content.Replace('<script src="auth.js"></script>', '<script src="auth.js" defer></script>')

    # 3. Add loading="lazy" to img tags (login has a logo img)
    # Login and register have: <img src="assets/indtara logo.png" alt="Indtara Experiences">
    # This is the logo inside the login container - it should be lazy loaded since it's not a preloader logo
    $content = $content.Replace('<img src="assets/indtara logo.png" alt="Indtara Experiences">', '<img loading="lazy" src="assets/indtara logo.png" alt="Indtara Experiences">')

    $content = $content.Replace('defer defer', 'defer')

    if ($content -ne $original) {
        [System.IO.File]::WriteAllText($filePath, $content)
        Write-Host "Updated: $file"
    } else {
        Write-Host "No changes needed: $file"
    }
}

# ============================================================
# CATEGORY E: package-details.html - has GSAP + ScrollTrigger, packages.js, fonts preconnect
# ============================================================
$filePath = Join-Path $basePath "package-details.html"
$content = [System.IO.File]::ReadAllText($filePath)
$original = $content

# 1. Add preconnect for CDN (fonts preconnect already exists)
if ($content -notmatch 'preconnect.*cdn\.jsdelivr\.net') {
    $content = $content.Replace(
        '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>',
        '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>' + "`n" +
        '    <link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin>' + "`n" +
        '    <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossorigin>'
    )
}

# 2. Add defer to GSAP, ScrollTrigger, packages.js
$content = $content.Replace('<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>', '<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js" defer></script>')
$content = $content.Replace('<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"></script>', '<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js" defer></script>')
$content = $content.Replace('<script src="packages.js"></script>', '<script src="packages.js" defer></script>')

$content = $content.Replace('defer defer', 'defer')

if ($content -ne $original) {
    [System.IO.File]::WriteAllText($filePath, $content)
    Write-Host "Updated: package-details.html"
} else {
    Write-Host "No changes needed: package-details.html"
}

# ============================================================
# CATEGORY F: Legal pages - cancellation-policy, cookie-policy, disclaimer, legal-notice, privacy-policy, terms-and-conditions
# These have: supabase + supabase-config + auth at bottom, NO fonts preconnect, fonts loaded via link directly
# ============================================================
$legalPages = @("cancellation-policy.html", "cookie-policy.html", "disclaimer.html", "legal-notice.html", "privacy-policy.html", "terms-and-conditions.html")

foreach ($file in $legalPages) {
    $filePath = Join-Path $basePath $file
    $content = [System.IO.File]::ReadAllText($filePath)
    $original = $content

    # 1. Add preconnect hints before the stylesheet link
    if ($content -notmatch 'preconnect.*fonts\.googleapis\.com') {
        $content = $content.Replace(
            '<link rel="stylesheet" href="styles.css?v=1.2">',
            '<link rel="preconnect" href="https://fonts.googleapis.com">' + "`n" +
            '    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>' + "`n" +
            '    <link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin>' + "`n" +
            '    <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossorigin>' + "`n" +
            '    <link rel="stylesheet" href="styles.css?v=1.2">'
        )
    }

    # 2. Add defer to scripts
    $content = $content.Replace('<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>', '<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2" defer></script>')
    $content = $content.Replace('<script src="supabase-config.js"></script>', '<script src="supabase-config.js" defer></script>')
    $content = $content.Replace('<script src="auth.js"></script>', '<script src="auth.js" defer></script>')

    $content = $content.Replace('defer defer', 'defer')

    if ($content -ne $original) {
        [System.IO.File]::WriteAllText($filePath, $content)
        Write-Host "Updated: $file"
    } else {
        Write-Host "No changes needed: $file"
    }
}

Write-Host "`nAll performance optimizations applied successfully!"
