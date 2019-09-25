import CMS from 'netlify-cms-app';
import uploadcare from 'netlify-cms-media-library-uploadcare';
import cloudinary from 'netlify-cms-media-library-cloudinary';
import FileSystemBackend from 'netlify-cms-backend-fs';

import AboutPagePreview from './preview-templates/AboutPagePreview';
import BlogPostPreview from './preview-templates/BlogPostPreview';
import ProductPagePreview from './preview-templates/ProductPagePreview';
import IndexPagePreview from './preview-templates/IndexPagePreview';

// If running in development
if (process.env.NODE_ENV === 'development') {
  //   window.CMS_ENV = 'development_overrides'; // Set the CMS_ENV to the development_ overrides.
  //   console.log(
  //     '============================================================================',
  //   );
  //   console.log(FileSystemBackend);
  //   CMS.registerBackend('file-system', FileSystemBackend); // Register the FileSystemBackend.
}
CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('index', IndexPagePreview);
CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('products', ProductPagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);
CMS.init();
