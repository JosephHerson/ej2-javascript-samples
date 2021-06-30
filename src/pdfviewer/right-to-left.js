﻿this.default = function () {
    // Render the PDF viewer control
    var viewer = new ej.pdfviewer.PdfViewer ({
    documentPath: "RTLText.pdf",
    locale: 'ar-AE',
    enableRtl: true,
    serviceUrl: 'https://ej2services.syncfusion.com/production/web-services/api/pdfviewer'
    });
    ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.BookmarkView, ej.pdfviewer.ThumbnailView, ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Print, ej.pdfviewer.Navigation, ej.pdfviewer.LinkAnnotation, ej.pdfviewer.Annotation, ej.pdfviewer.FormFields);
    ej.base.L10n.load({
        'ar-AE': {
            'PdfViewer' : {
                'PdfViewer': 'قوات الدفاع الشعبي المشاهد',
                'Cancel' : 'إلغاء',
                'Download file' : 'تحميل الملف',
                'Download': 'تحميل',
                'Enter Password' : 'هذا المستند محمي بكلمة مرور. يرجى إدخال كلمة مرور.',
                'File Corrupted' : 'ملف تالف',
                'File Corrupted Content' : 'الملف تالف ولا يمكن فتحه.',
                'Fit Page' : 'لائق بدنيا الصفحة',
                'Fit Width' : 'لائق بدنيا عرض',
                'Automatic' : 'تلقائي',
                'Go To First Page' : 'عرض الصفحة الأولى',
                'Invalid Password' : 'كلمة سر خاطئة. حاول مرة اخرى.',
                'Next Page' : 'عرض الصفحة التالية',
                'OK': 'حسنا',
                'Open' : 'فتح الملف',
                'Page Number' : 'رقم الصفحة الحالية',
                'Previous Page' : 'عرض الصفحة السابقة',
                'Go To Last Page' : 'عرض الصفحة الأخيرة',
                'Zoom' : 'تكبير',
                'Zoom In' : 'تكبير في',
                'Zoom Out' : 'تكبير خارج',
                'Page Thumbnails': 'مصغرات الصفحة',
                'Bookmarks': 'المرجعية',
                'Print' : 'اطبع الملف',
                'Password Protected' : 'كلمة المرور مطلوبة',
                'Copy': 'نسخ',
                'Text Selection': 'أداة اختيار النص',
                'Panning': 'وضع عموم',
                'Text Search': 'بحث عن نص',
                'Find in document': 'ابحث في المستند',
                'Match case': 'حالة مباراة',
                'Apply': 'تطبيق',
                'GoToPage': 'انتقل إلى صفحة',
                'No matches': 'انتهى العارض من البحث في المستند. لم يتم العثور على مزيد من التطابقات',
                'No Text Found': 'لم يتم العثور على نص',
                'Undo' : 'فك',
                'Redo' : 'فعل ثانية',
                'Annotation': 'إضافة أو تعديل التعليقات التوضيحية',
                'Highlight': 'تسليط الضوء على النص',
                'Underline': 'تسطير النص',
                'Strikethrough': 'نص يتوسطه خط',
                'Delete': 'حذف التعليق التوضيحي',
                'Opacity': 'غموض',
                'Color edit': 'غير اللون',
                'Opacity edit': 'تغيير التعتيم',
                'highlight': 'تسليط الضوء',
                'underline': 'أكد',
                'strikethrough': 'يتوسطه',
                // tslint:disable-next-line:max-line-length
                'Server error': 'خدمة الانترنت لا يستمع. يعتمد قوات الدفاع الشعبي المشاهد على خدمة الويب لجميع ميزاته. يرجى بدء خدمة الويب للمتابعة.',
                'Open text': 'افتح',
                'First text': 'الصفحة الأولى',
                'Previous text': 'الصفحة السابقة',
                'Next text': 'الصفحة التالية',
                'Last text': 'آخر صفحة',
                'Zoom in text': 'تكبير',
                'Zoom out text': 'تصغير',
                'Selection text': 'اختيار',
                'Pan text': 'مقلاة',
                'Print text': 'طباعة',
                'Seach text': 'بحث',
                'Annotation Edit text': 'تحرير التعليق التوضيحي',
                'Line Thickness': 'سمك الخط',
                'Line Properties': 'خط الخصائص',
                'Start Arrow': 'ابدأ السهم',
                'End Arrow': 'نهاية السهم',
                'Line Style': 'أسلوب الخط',
                'Fill Color': 'ملء اللون',
                'Line Color': ' الخط اللون',
                'None': 'لا شيء',
                'Open Arrow': 'افتح',
                'Closed Arrow': 'مغلق',
                'Round Arrow': 'مستدير',
                'Square Arrow': 'مربع',
                'Diamond Arrow': 'الماس',
                'Cut': 'يقطع',
                'Paste': 'معجون',
                'Delete Context': 'حذف',
                'Properties': 'الخصائص',
                'Add Stamp': 'إضافة الطوابع',
                'Add Shapes': 'أضف الأشكال',
                'Stroke edit': 'تغيير لون السكتة الدماغية',
                'Change thickness': 'تغيير سمك الحدود',
                'Add line': 'إضافة خط',
                'Add arrow': 'سهم إضافة',
                'Add rectangle': 'أضف مستطيل',
                'Add circle': 'إضافة دائرة',
                'Add polygon': 'أضف مضلع',
                'Add Comments': 'أضف تعليقات',
                'Comments': 'تعليقات',
                'No Comments Yet': 'لا توجد تعليقات حتى الآن',
                'Accepted': 'وافقت',
                'Completed': 'منجز',
                'Cancelled': 'ألغيت',
                'Rejected': 'مرفوض',
                'Leader Length': 'زعيم الطول',
                'Scale Ratio': 'نسبة مقياس',
                'Calibrate': 'عاير',
                'Calibrate Distance': 'معايرة المسافة',
                'Calibrate Perimeter': 'معايرة محيط',
                'Calibrate Area': 'عاير منطقة',
                'Calibrate Radius': 'معايرة نصف القطر',
                'Calibrate Volume': 'معايرة الحجم',
                'Depth': 'عمق',
                'Closed': 'مغلق',
                'Round': 'مستدير',
                'Square': 'ميدان',
                'Diamond': 'الماس',
                'Edit': 'تصحيح',
                'Comment': 'تعليقات',
                'Comment Panel': 'لوحة التعليقات',
                'Set Status': 'تعيين الحالة',
                'Post': 'بريد',
                'Page': 'صفحة',
                'Add a comment': 'أضف تعليق',
                'Add a reply': 'أضف رد',
                'Import Annotations': 'استيراد التعليقات التوضيحية',
                'Export Annotations': 'شروح التصدير',
                'Add': 'أضف',
                'Clear': 'واضح',
                'Bold': 'بالخط العريض',
                'Italic': 'مائل',
                'Strikethroughs': 'يتوسطه',
                'Underlines': 'تحت الخط',
                'Superscript': 'حرف فوقي',
                'Subscript': 'الفرعية النصي',
                'Align left': 'محاذاة اليسار',
                'Align right': 'محاذاة اليمين',
                'Center': 'مركز',
                'Justify': 'برر',
                'Font color': 'لون الخط',
                'Text Align': 'محاذاة النص',
                'Text Properties': 'نوع الخط',
                'Draw Signature': 'ارسم التوقيع',
                'Create': 'خلق',
                'Font family': 'خط العائلة',
                'Font size': 'حجم الخط',
                'Free Text': 'نص حر',
                'Import Failed': 'نوع ملف سلمان أو اسم الملف غير صالح ؛ يرجى تحديد ملف سلمانصالح',
                'File not found': 'لم يتم العثور على ملف سلمان المستورد في الموقع المطلوب',
                'Export Failed': 'شل إجراء تصدير التعليقات التوضيحية ؛ يرجى التأكد من إضافة التعليقات التوضيحية بشكل صحيح'
            }
        }
    });  
    viewer.appendTo('#pdfViewer');
};