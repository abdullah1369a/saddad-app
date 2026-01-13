export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'الطريقة غير مسموحة' });
  }

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'البريد وكلمة المرور مطلوبة' });
  }

  // لاحقًا: التحقق من البيانات في قاعدة البيانات
  res.status(200).json({ message: 'تم تسجيل الدخول بنجاح' });
}
