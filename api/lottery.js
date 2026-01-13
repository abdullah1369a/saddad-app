export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'الطريقة غير مسموحة' });
  }

  const { participants } = req.body;

  if (!Array.isArray(participants) || participants.length === 0) {
    return res.status(400).json({ error: 'قائمة المشاركين مطلوبة' });
  }

  const winner = participants[Math.floor(Math.random() * participants.length)];

  // لاحقًا: تسجيل الفائز في قاعدة البيانات
  res.status(200).json({ message: `الفائز هو ${winner}` });
}
