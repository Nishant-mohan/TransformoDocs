const uploadPdf = (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded.' });
    }
    if (req.file.mimetype !== 'application/pdf') {
        return res.status(400).json({ message: 'Only PDF files are allowed.' });
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