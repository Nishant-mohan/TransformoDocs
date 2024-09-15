const uploadPdf = (req, res) => {
    if (!req.file) {
        return res.status(400).send('No PDF file uploaded.');
    }
    const pdfBuffer = req.file.buffer;

    // Process PDF file
    
    res.set({
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="response.pdf"',
    });
    res.send(pdfBuffer);
};

module.exports = {
    uploadPdf,
};