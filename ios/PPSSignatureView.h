#import <UIKit/UIKit.h>
#import <GLKit/GLKit.h>

@class RSSignatureViewManager;

@interface PPSSignatureView : GLKView

@property (assign, nonatomic) UIColor *strokeColor;
@property (assign, nonatomic) NSNumber *minStrokeWidth;
@property (assign, nonatomic) NSNumber *maxStrokeWidth;
@property (assign, nonatomic) BOOL hasSignature;
@property (assign, nonatomic )BOOL disableLongPressErase;
@property (assign, nonatomic) BOOL enableDate;
@property (strong, nonatomic) UIImage *signatureImage;
@property (nonatomic, strong) RSSignatureViewManager *manager;

- (void)erase;

- (UIImage *) signatureImage;
- (UIImage *) signatureImage: (BOOL) rotatedImage;
- (UIImage *) signatureImage: (BOOL) rotatedImage withSquare:(BOOL)square;

@end
