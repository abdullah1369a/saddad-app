export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'الطريقة غير مسموحة' });
  }

  const { fromUserId, toUserId, points } = req.body;

  if (!fromUserId || !toUserId || typeof points !== 'number') {
    return res.status(400).json({ error: 'جميع الحقول مطلوبة' });
  }

  // لاحقًا: خصم النقاط من المرسل وإضافتها للمستقبل
  res.status(200).json({ message: `تم تحويل ${points} نقطة من ${fromUserId} إلى ${toUserId}` });
}
