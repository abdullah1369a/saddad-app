export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'الطريقة غير مسموحة' });
  }

  const { userId, points } = req.body;

  if (!userId || typeof points !== 'number') {
    return res.status(400).json({ error: 'معرّف المستخدم والنقاط مطلوبة' });
  }

  // لاحقًا: تحديث رصيد المستخدم في قاعدة البيانات
  res.status(200).json({ message: `تمت إضافة ${points} نقطة للمستخدم ${userId}` });
}
