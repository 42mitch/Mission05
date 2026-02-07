body {
    font-family: Arial, sans-serif;
}

.site-header {
    padding: 16px 0;
    border-bottom: 1px solid #ddd;
    margin-bottom: 20px;
}

.site-title {
    margin: 0;
    font-size: 24px;
}

.site-nav a {
    text-decoration: none;
    margin-right: 8px;
}

.nav-sep {
    margin-right: 8px;
    color: #666;
}

.main-content {
    padding-bottom: 30px;
}

.site-footer {
    border-top: 1px solid #ddd;
    padding: 12px 0;
    margin-top: 30px;
    color: #555;
}

.content-card {
    border: 1px solid #e3e3e3;
    padding: 16px;
    border-radius: 6px;
}

.image-row {
    display: flex;
    gap: 12px;
    margin: 16px 0;
    flex-wrap: wrap;
}

.image-row img {
    width: 100%;
    max-width: 420px;
    border-radius: 6px;
    border: 1px solid #ddd;
}

.form-grid {
    display: grid;
    grid-template-columns: 160px 1fr;
    gap: 10px;
    max-width: 520px;
    margin-top: 12px;
}

.form-grid button {
    grid-column: 2 / 3;
    width: fit-content;
    padding: 6px 12px;
}

.error-msg {
    grid-column: 1 / 3;
    color: #b00020;
    margin: 0;
}

.note {
    margin-top: 14px;
}
