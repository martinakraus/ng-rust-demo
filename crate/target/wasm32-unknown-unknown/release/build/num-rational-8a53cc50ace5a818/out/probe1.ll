; ModuleID = 'probe1.b599490e-cgu.0'
source_filename = "probe1.b599490e-cgu.0"
target datalayout = "e-m:e-p:32:32-p10:8:8-p20:8:8-i64:64-n32:64-S128-ni:1:10:20"
target triple = "wasm32-unknown-unknown"

%"core::fmt::Arguments<'_>" = type { { ptr, i32 }, { ptr, i32 }, { ptr, i32 } }
%"alloc::string::String" = type { %"alloc::vec::Vec<u8>" }
%"alloc::vec::Vec<u8>" = type { { i32, ptr }, i32 }
%"core::ptr::metadata::PtrComponents<u8>" = type { ptr, {} }
%"core::ptr::metadata::PtrRepr<u8>" = type { [1 x i32] }
%"core::ptr::metadata::PtrRepr<[u8]>" = type { [2 x i32] }
%"alloc::alloc::Global" = type {}
%"core::option::Option<(core::ptr::non_null::NonNull<u8>, core::alloc::layout::Layout)>" = type { [2 x i32], i32 }

@alloc3 = private unnamed_addr constant <{}> zeroinitializer, align 4
@alloc9 = private unnamed_addr constant <{ [12 x i8] }> <{ [12 x i8] c"invalid args" }>, align 1
@alloc10 = private unnamed_addr constant <{ ptr, [4 x i8] }> <{ ptr @alloc9, [4 x i8] c"\0C\00\00\00" }>, align 4
@alloc52 = private unnamed_addr constant <{ [75 x i8] }> <{ [75 x i8] c"/rustc/fc594f15669680fa70d255faec3ca3fb507c3405/library/core/src/fmt/mod.rs" }>, align 1
@alloc53 = private unnamed_addr constant <{ ptr, [12 x i8] }> <{ ptr @alloc52, [12 x i8] c"K\00\00\00\8C\01\00\00\0D\00\00\00" }>, align 4
@alloc54 = private unnamed_addr constant <{ [80 x i8] }> <{ [80 x i8] c"/rustc/fc594f15669680fa70d255faec3ca3fb507c3405/library/core/src/alloc/layout.rs" }>, align 1
@alloc55 = private unnamed_addr constant <{ ptr, [12 x i8] }> <{ ptr @alloc54, [12 x i8] c"P\00\00\00\C4\01\00\00)\00\00\00" }>, align 4
@str.0 = internal constant [25 x i8] c"attempt to divide by zero"
@alloc4 = private unnamed_addr constant <{ ptr, [4 x i8] }> <{ ptr @alloc3, [4 x i8] zeroinitializer }>, align 4
@alloc6 = private unnamed_addr constant <{ [4 x i8] }> zeroinitializer, align 4

; <core::ptr::non_null::NonNull<T> as core::convert::From<core::ptr::unique::Unique<T>>>::from
; Function Attrs: inlinehint nounwind
define hidden ptr @"_ZN119_$LT$core..ptr..non_null..NonNull$LT$T$GT$$u20$as$u20$core..convert..From$LT$core..ptr..unique..Unique$LT$T$GT$$GT$$GT$4from17he8949423c9f83823E"(ptr %unique) unnamed_addr #0 {
start:
  %0 = alloca ptr, align 4
  store ptr %unique, ptr %0, align 4
  %1 = load ptr, ptr %0, align 4, !nonnull !0, !noundef !0
  ret ptr %1
}

; <alloc::collections::TryReserveError as core::convert::From<alloc::collections::TryReserveErrorKind>>::from
; Function Attrs: inlinehint nounwind
define internal { i32, i32 } @"_ZN122_$LT$alloc..collections..TryReserveError$u20$as$u20$core..convert..From$LT$alloc..collections..TryReserveErrorKind$GT$$GT$4from17h88985e54aa59bfbcE"(i32 %kind.0, i32 %kind.1) unnamed_addr #0 {
start:
  %0 = alloca { i32, i32 }, align 4
  %1 = getelementptr inbounds { i32, i32 }, ptr %0, i32 0, i32 0
  store i32 %kind.0, ptr %1, align 4
  %2 = getelementptr inbounds { i32, i32 }, ptr %0, i32 0, i32 1
  store i32 %kind.1, ptr %2, align 4
  %3 = getelementptr inbounds { i32, i32 }, ptr %0, i32 0, i32 0
  %4 = load i32, ptr %3, align 4
  %5 = getelementptr inbounds { i32, i32 }, ptr %0, i32 0, i32 1
  %6 = load i32, ptr %5, align 4, !range !1, !noundef !0
  %7 = insertvalue { i32, i32 } undef, i32 %4, 0
  %8 = insertvalue { i32, i32 } %7, i32 %6, 1
  ret { i32, i32 } %8
}

; core::fmt::ArgumentV1::new_lower_exp
; Function Attrs: inlinehint nounwind
define hidden { ptr, ptr } @_ZN4core3fmt10ArgumentV113new_lower_exp17h4571bb8e023e0033E(ptr align 4 %x) unnamed_addr #0 {
start:
  %0 = alloca ptr, align 4
  %1 = alloca ptr, align 4
  %2 = alloca { ptr, ptr }, align 4
  store ptr @"_ZN4core3fmt3num3imp55_$LT$impl$u20$core..fmt..LowerExp$u20$for$u20$isize$GT$3fmt17h50587cb98f9ce0a4E", ptr %1, align 4
  %_4 = load ptr, ptr %1, align 4, !nonnull !0, !noundef !0
  store ptr %x, ptr %0, align 4
  %_6 = load ptr, ptr %0, align 4, !nonnull !0, !align !2, !noundef !0
  store ptr %_6, ptr %2, align 4
  %3 = getelementptr inbounds { ptr, ptr }, ptr %2, i32 0, i32 1
  store ptr %_4, ptr %3, align 4
  %4 = getelementptr inbounds { ptr, ptr }, ptr %2, i32 0, i32 0
  %5 = load ptr, ptr %4, align 4, !nonnull !0, !align !2, !noundef !0
  %6 = getelementptr inbounds { ptr, ptr }, ptr %2, i32 0, i32 1
  %7 = load ptr, ptr %6, align 4, !nonnull !0, !noundef !0
  %8 = insertvalue { ptr, ptr } undef, ptr %5, 0
  %9 = insertvalue { ptr, ptr } %8, ptr %7, 1
  ret { ptr, ptr } %9
}

; core::fmt::Arguments::as_str
; Function Attrs: inlinehint nounwind
define internal { ptr, i32 } @_ZN4core3fmt9Arguments6as_str17hacea73255e506649E(ptr align 4 %self) unnamed_addr #0 {
start:
  %_2 = alloca { { ptr, i32 }, { ptr, i32 } }, align 4
  %0 = alloca { ptr, i32 }, align 4
  %1 = getelementptr inbounds %"core::fmt::Arguments<'_>", ptr %self, i32 0, i32 1
  %2 = getelementptr inbounds { ptr, i32 }, ptr %1, i32 0, i32 0
  %_3.0 = load ptr, ptr %2, align 4, !nonnull !0, !align !3, !noundef !0
  %3 = getelementptr inbounds { ptr, i32 }, ptr %1, i32 0, i32 1
  %_3.1 = load i32, ptr %3, align 4
  %4 = getelementptr inbounds %"core::fmt::Arguments<'_>", ptr %self, i32 0, i32 2
  %5 = getelementptr inbounds { ptr, i32 }, ptr %4, i32 0, i32 0
  %_4.0 = load ptr, ptr %5, align 4, !nonnull !0, !align !3, !noundef !0
  %6 = getelementptr inbounds { ptr, i32 }, ptr %4, i32 0, i32 1
  %_4.1 = load i32, ptr %6, align 4
  %7 = getelementptr inbounds { ptr, i32 }, ptr %_2, i32 0, i32 0
  store ptr %_3.0, ptr %7, align 4
  %8 = getelementptr inbounds { ptr, i32 }, ptr %_2, i32 0, i32 1
  store i32 %_3.1, ptr %8, align 4
  %9 = getelementptr inbounds { { ptr, i32 }, { ptr, i32 } }, ptr %_2, i32 0, i32 1
  %10 = getelementptr inbounds { ptr, i32 }, ptr %9, i32 0, i32 0
  store ptr %_4.0, ptr %10, align 4
  %11 = getelementptr inbounds { ptr, i32 }, ptr %9, i32 0, i32 1
  store i32 %_4.1, ptr %11, align 4
  %12 = getelementptr inbounds { ptr, i32 }, ptr %_2, i32 0, i32 0
  %_21.0 = load ptr, ptr %12, align 4, !nonnull !0, !align !3, !noundef !0
  %13 = getelementptr inbounds { ptr, i32 }, ptr %_2, i32 0, i32 1
  %_21.1 = load i32, ptr %13, align 4
  %_16 = icmp eq i32 %_21.1, 0
  br i1 %_16, label %bb1, label %bb3

bb3:                                              ; preds = %start
  %14 = getelementptr inbounds { ptr, i32 }, ptr %_2, i32 0, i32 0
  %_23.0 = load ptr, ptr %14, align 4, !nonnull !0, !align !3, !noundef !0
  %15 = getelementptr inbounds { ptr, i32 }, ptr %_2, i32 0, i32 1
  %_23.1 = load i32, ptr %15, align 4
  %_13 = icmp eq i32 %_23.1, 1
  br i1 %_13, label %bb4, label %bb2

bb1:                                              ; preds = %start
  %16 = getelementptr inbounds { { ptr, i32 }, { ptr, i32 } }, ptr %_2, i32 0, i32 1
  %17 = getelementptr inbounds { ptr, i32 }, ptr %16, i32 0, i32 0
  %_22.0 = load ptr, ptr %17, align 4, !nonnull !0, !align !3, !noundef !0
  %18 = getelementptr inbounds { ptr, i32 }, ptr %16, i32 0, i32 1
  %_22.1 = load i32, ptr %18, align 4
  %_7 = icmp eq i32 %_22.1, 0
  br i1 %_7, label %bb5, label %bb2

bb2:                                              ; preds = %bb4, %bb3, %bb1
  store ptr null, ptr %0, align 4
  br label %bb7

bb5:                                              ; preds = %bb1
  %19 = getelementptr inbounds { ptr, i32 }, ptr %0, i32 0, i32 0
  store ptr @alloc3, ptr %19, align 4
  %20 = getelementptr inbounds { ptr, i32 }, ptr %0, i32 0, i32 1
  store i32 0, ptr %20, align 4
  br label %bb7

bb7:                                              ; preds = %bb2, %bb6, %bb5
  %21 = getelementptr inbounds { ptr, i32 }, ptr %0, i32 0, i32 0
  %22 = load ptr, ptr %21, align 4, !align !2
  %23 = getelementptr inbounds { ptr, i32 }, ptr %0, i32 0, i32 1
  %24 = load i32, ptr %23, align 4
  %25 = insertvalue { ptr, i32 } undef, ptr %22, 0
  %26 = insertvalue { ptr, i32 } %25, i32 %24, 1
  ret { ptr, i32 } %26

bb4:                                              ; preds = %bb3
  %27 = getelementptr inbounds { { ptr, i32 }, { ptr, i32 } }, ptr %_2, i32 0, i32 1
  %28 = getelementptr inbounds { ptr, i32 }, ptr %27, i32 0, i32 0
  %_24.0 = load ptr, ptr %28, align 4, !nonnull !0, !align !3, !noundef !0
  %29 = getelementptr inbounds { ptr, i32 }, ptr %27, i32 0, i32 1
  %_24.1 = load i32, ptr %29, align 4
  %_10 = icmp eq i32 %_24.1, 0
  br i1 %_10, label %bb6, label %bb2

bb6:                                              ; preds = %bb4
  %30 = getelementptr inbounds { ptr, i32 }, ptr %_2, i32 0, i32 0
  %_25.0 = load ptr, ptr %30, align 4, !nonnull !0, !align !3, !noundef !0
  %31 = getelementptr inbounds { ptr, i32 }, ptr %_2, i32 0, i32 1
  %_25.1 = load i32, ptr %31, align 4
  %s = getelementptr inbounds [0 x { ptr, i32 }], ptr %_25.0, i32 0, i32 0
  %32 = getelementptr inbounds { ptr, i32 }, ptr %s, i32 0, i32 0
  %_26.0 = load ptr, ptr %32, align 4, !nonnull !0, !align !2, !noundef !0
  %33 = getelementptr inbounds { ptr, i32 }, ptr %s, i32 0, i32 1
  %_26.1 = load i32, ptr %33, align 4
  %34 = getelementptr inbounds { ptr, i32 }, ptr %0, i32 0, i32 0
  store ptr %_26.0, ptr %34, align 4
  %35 = getelementptr inbounds { ptr, i32 }, ptr %0, i32 0, i32 1
  store i32 %_26.1, ptr %35, align 4
  br label %bb7
}

; core::fmt::Arguments::new_v1
; Function Attrs: inlinehint nounwind
define internal void @_ZN4core3fmt9Arguments6new_v117he4e22cad1dfdfe4cE(ptr sret(%"core::fmt::Arguments<'_>") %0, ptr align 4 %pieces.0, i32 %pieces.1, ptr align 4 %args.0, i32 %args.1) unnamed_addr #0 {
start:
  %_24 = alloca { ptr, i32 }, align 4
  %_16 = alloca %"core::fmt::Arguments<'_>", align 4
  %_3 = alloca i8, align 1
  %_4 = icmp ult i32 %pieces.1, %args.1
  br i1 %_4, label %bb1, label %bb2

bb2:                                              ; preds = %start
  %_12 = add i32 %args.1, 1
  %_9 = icmp ugt i32 %pieces.1, %_12
  %1 = zext i1 %_9 to i8
  store i8 %1, ptr %_3, align 1
  br label %bb3

bb1:                                              ; preds = %start
  store i8 1, ptr %_3, align 1
  br label %bb3

bb3:                                              ; preds = %bb2, %bb1
  %2 = load i8, ptr %_3, align 1, !range !4, !noundef !0
  %3 = trunc i8 %2 to i1
  br i1 %3, label %bb4, label %bb6

bb6:                                              ; preds = %bb3
  store ptr null, ptr %_24, align 4
  %4 = getelementptr inbounds %"core::fmt::Arguments<'_>", ptr %0, i32 0, i32 1
  %5 = getelementptr inbounds { ptr, i32 }, ptr %4, i32 0, i32 0
  store ptr %pieces.0, ptr %5, align 4
  %6 = getelementptr inbounds { ptr, i32 }, ptr %4, i32 0, i32 1
  store i32 %pieces.1, ptr %6, align 4
  %7 = getelementptr inbounds { ptr, i32 }, ptr %_24, i32 0, i32 0
  %8 = load ptr, ptr %7, align 4, !align !3
  %9 = getelementptr inbounds { ptr, i32 }, ptr %_24, i32 0, i32 1
  %10 = load i32, ptr %9, align 4
  %11 = getelementptr inbounds { ptr, i32 }, ptr %0, i32 0, i32 0
  store ptr %8, ptr %11, align 4
  %12 = getelementptr inbounds { ptr, i32 }, ptr %0, i32 0, i32 1
  store i32 %10, ptr %12, align 4
  %13 = getelementptr inbounds %"core::fmt::Arguments<'_>", ptr %0, i32 0, i32 2
  %14 = getelementptr inbounds { ptr, i32 }, ptr %13, i32 0, i32 0
  store ptr %args.0, ptr %14, align 4
  %15 = getelementptr inbounds { ptr, i32 }, ptr %13, i32 0, i32 1
  store i32 %args.1, ptr %15, align 4
  ret void

bb4:                                              ; preds = %bb3
; call core::fmt::Arguments::new_v1
  call void @_ZN4core3fmt9Arguments6new_v117he4e22cad1dfdfe4cE(ptr sret(%"core::fmt::Arguments<'_>") %_16, ptr align 4 @alloc10, i32 1, ptr align 4 @alloc3, i32 0) #12
; call core::panicking::panic_fmt
  call void @_ZN4core9panicking9panic_fmt17h9d972fcdb087ce21E(ptr %_16, ptr align 4 @alloc53) #13
  unreachable
}

; core::ops::function::FnOnce::call_once
; Function Attrs: inlinehint nounwind
define internal void @_ZN4core3ops8function6FnOnce9call_once17h5ce1595ad75f7b4eE(ptr sret(%"alloc::string::String") %0, ptr align 1 %1, i32 %2) unnamed_addr #0 {
start:
  %_2 = alloca { ptr, i32 }, align 4
  %3 = getelementptr inbounds { ptr, i32 }, ptr %_2, i32 0, i32 0
  store ptr %1, ptr %3, align 4
  %4 = getelementptr inbounds { ptr, i32 }, ptr %_2, i32 0, i32 1
  store i32 %2, ptr %4, align 4
  %5 = getelementptr inbounds { ptr, i32 }, ptr %_2, i32 0, i32 0
  %6 = load ptr, ptr %5, align 4, !nonnull !0, !align !2, !noundef !0
  %7 = getelementptr inbounds { ptr, i32 }, ptr %_2, i32 0, i32 1
  %8 = load i32, ptr %7, align 4
; call alloc::str::<impl alloc::borrow::ToOwned for str>::to_owned
  call void @"_ZN5alloc3str56_$LT$impl$u20$alloc..borrow..ToOwned$u20$for$u20$str$GT$8to_owned17hfb547d0281468889E"(ptr sret(%"alloc::string::String") %0, ptr align 1 %6, i32 %8) #12
  ret void
}

; core::ptr::drop_in_place<alloc::string::String>
; Function Attrs: nounwind
define hidden void @"_ZN4core3ptr42drop_in_place$LT$alloc..string..String$GT$17hc98dc5e56657c260E"(ptr %_1) unnamed_addr #1 {
start:
; call core::ptr::drop_in_place<alloc::vec::Vec<u8>>
  call void @"_ZN4core3ptr46drop_in_place$LT$alloc..vec..Vec$LT$u8$GT$$GT$17hee7dde5d5c0a681aE"(ptr %_1) #12
  ret void
}

; core::ptr::drop_in_place<alloc::vec::Vec<u8>>
; Function Attrs: nounwind
define hidden void @"_ZN4core3ptr46drop_in_place$LT$alloc..vec..Vec$LT$u8$GT$$GT$17hee7dde5d5c0a681aE"(ptr %_1) unnamed_addr #1 {
start:
; call <alloc::vec::Vec<T,A> as core::ops::drop::Drop>::drop
  call void @"_ZN70_$LT$alloc..vec..Vec$LT$T$C$A$GT$$u20$as$u20$core..ops..drop..Drop$GT$4drop17h601aa71bbbdb9903E"(ptr align 4 %_1) #12
; call core::ptr::drop_in_place<alloc::raw_vec::RawVec<u8>>
  call void @"_ZN4core3ptr53drop_in_place$LT$alloc..raw_vec..RawVec$LT$u8$GT$$GT$17h615edea332e03514E"(ptr %_1) #12
  ret void
}

; core::ptr::drop_in_place<alloc::raw_vec::RawVec<u8>>
; Function Attrs: nounwind
define hidden void @"_ZN4core3ptr53drop_in_place$LT$alloc..raw_vec..RawVec$LT$u8$GT$$GT$17h615edea332e03514E"(ptr %_1) unnamed_addr #1 {
start:
; call <alloc::raw_vec::RawVec<T,A> as core::ops::drop::Drop>::drop
  call void @"_ZN77_$LT$alloc..raw_vec..RawVec$LT$T$C$A$GT$$u20$as$u20$core..ops..drop..Drop$GT$4drop17h977b6c0573c292fdE"(ptr align 4 %_1) #12
  ret void
}

; core::ptr::mut_ptr::<impl *mut T>::guaranteed_eq
; Function Attrs: inlinehint nounwind
define hidden i8 @"_ZN4core3ptr7mut_ptr31_$LT$impl$u20$$BP$mut$u20$T$GT$13guaranteed_eq17hba3951f96af8913bE"(ptr %self, ptr %other) unnamed_addr #0 {
start:
  %0 = alloca i8, align 1
  %1 = alloca i8, align 1
  %2 = icmp eq ptr %self, %other
  %3 = zext i1 %2 to i8
  store i8 %3, ptr %0, align 1
  %_8 = load i8, ptr %0, align 1
  %4 = icmp eq i8 %_8, 2
  br i1 %4, label %bb3, label %bb2

bb3:                                              ; preds = %start
  store i8 2, ptr %1, align 1
  br label %bb4

bb2:                                              ; preds = %start
  %_14 = icmp eq i8 %_8, 1
  %5 = zext i1 %_14 to i8
  store i8 %5, ptr %1, align 1
  br label %bb4

bb4:                                              ; preds = %bb3, %bb2
  %6 = load i8, ptr %1, align 1, !range !5, !noundef !0
  ret i8 %6
}

; core::ptr::mut_ptr::<impl *mut T>::is_null
; Function Attrs: inlinehint nounwind
define hidden zeroext i1 @"_ZN4core3ptr7mut_ptr31_$LT$impl$u20$$BP$mut$u20$T$GT$7is_null17h61b7e6d57a876f74E"(ptr %self) unnamed_addr #0 {
start:
  %0 = alloca ptr, align 4
  %_13 = alloca %"core::ptr::metadata::PtrComponents<u8>", align 4
  %_12 = alloca %"core::ptr::metadata::PtrRepr<u8>", align 4
  %_2 = alloca i8, align 1
  %1 = alloca i8, align 1
  store i32 0, ptr %0, align 4
  %data_address = load ptr, ptr %0, align 4
  store ptr %data_address, ptr %_13, align 4
  call void @llvm.memcpy.p0.p0.i32(ptr align 4 %_12, ptr align 4 %_13, i32 4, i1 false)
  %_5 = load ptr, ptr %_12, align 4
; call core::ptr::mut_ptr::<impl *mut T>::guaranteed_eq
  %2 = call i8 @"_ZN4core3ptr7mut_ptr31_$LT$impl$u20$$BP$mut$u20$T$GT$13guaranteed_eq17hba3951f96af8913bE"(ptr %self, ptr %_5) #12, !range !5
  store i8 %2, ptr %_2, align 1
  %3 = load i8, ptr %_2, align 1, !range !5, !noundef !0
  %4 = icmp eq i8 %3, 2
  %_6 = select i1 %4, i32 0, i32 1
  %5 = icmp eq i32 %_6, 0
  br i1 %5, label %bb4, label %bb2

bb4:                                              ; preds = %start
  store i8 0, ptr %1, align 1
  br label %bb5

bb2:                                              ; preds = %start
  %6 = load i8, ptr %_2, align 1, !range !4, !noundef !0
  %res = trunc i8 %6 to i1
  %7 = zext i1 %res to i8
  store i8 %7, ptr %1, align 1
  br label %bb5

bb3:                                              ; No predecessors!
  unreachable

bb5:                                              ; preds = %bb4, %bb2
  %8 = load i8, ptr %1, align 1, !range !4, !noundef !0
  %9 = trunc i8 %8 to i1
  ret i1 %9
}

; core::ptr::non_null::NonNull<T>::new
; Function Attrs: inlinehint nounwind
define hidden ptr @"_ZN4core3ptr8non_null16NonNull$LT$T$GT$3new17hecb2776770146631E"(ptr %ptr) unnamed_addr #0 {
start:
  %_5 = alloca ptr, align 4
  %0 = alloca ptr, align 4
; call core::ptr::mut_ptr::<impl *mut T>::is_null
  %_3 = call zeroext i1 @"_ZN4core3ptr7mut_ptr31_$LT$impl$u20$$BP$mut$u20$T$GT$7is_null17h61b7e6d57a876f74E"(ptr %ptr) #12
  %_2 = xor i1 %_3, true
  br i1 %_2, label %bb2, label %bb3

bb3:                                              ; preds = %start
  store ptr null, ptr %0, align 4
  br label %bb4

bb2:                                              ; preds = %start
  store ptr %ptr, ptr %_5, align 4
  %1 = load ptr, ptr %_5, align 4, !nonnull !0, !noundef !0
  store ptr %1, ptr %0, align 4
  br label %bb4

bb4:                                              ; preds = %bb3, %bb2
  %2 = load ptr, ptr %0, align 4
  ret ptr %2
}

; core::hint::unreachable_unchecked
; Function Attrs: inlinehint noreturn nounwind
define internal void @_ZN4core4hint21unreachable_unchecked17hd40b84c39ce3e849E() unnamed_addr #2 {
start:
  unreachable
}

; core::alloc::layout::Layout::array::inner
; Function Attrs: inlinehint nounwind
define internal { i32, i32 } @_ZN4core5alloc6layout6Layout5array5inner17h6502d672d979ab21E(i32 %element_size, i32 %align, i32 %n) unnamed_addr #0 {
start:
  %0 = alloca i32, align 4
  %_28 = alloca i32, align 4
  %_24 = alloca i32, align 4
  %_16 = alloca { i32, i32 }, align 4
  %_4 = alloca i8, align 1
  %1 = alloca { i32, i32 }, align 4
  %2 = icmp eq i32 %element_size, 0
  br i1 %2, label %bb1, label %bb2

bb1:                                              ; preds = %start
  store i8 0, ptr %_4, align 1
  br label %bb3

bb2:                                              ; preds = %start
  store i32 %align, ptr %_24, align 4
  %_25 = load i32, ptr %_24, align 4, !range !6, !noundef !0
  %_26 = icmp uge i32 -2147483648, %_25
  call void @llvm.assume(i1 %_26)
  %_27 = icmp ule i32 1, %_25
  call void @llvm.assume(i1 %_27)
  %_21 = sub i32 %_25, 1
  %_9 = sub i32 2147483647, %_21
  %_12 = icmp eq i32 %element_size, 0
  %3 = call i1 @llvm.expect.i1(i1 %_12, i1 false)
  br i1 %3, label %panic, label %bb4

bb4:                                              ; preds = %bb2
  %_8 = udiv i32 %_9, %element_size
  %_6 = icmp ugt i32 %n, %_8
  %4 = zext i1 %_6 to i8
  store i8 %4, ptr %_4, align 1
  br label %bb3

panic:                                            ; preds = %bb2
; call core::panicking::panic
  call void @_ZN4core9panicking5panic17h364c37174a08a6a4E(ptr align 1 @str.0, i32 25, ptr align 4 @alloc55) #13
  unreachable

bb3:                                              ; preds = %bb1, %bb4
  %5 = load i8, ptr %_4, align 1, !range !4, !noundef !0
  %6 = trunc i8 %5 to i1
  br i1 %6, label %bb5, label %bb6

bb6:                                              ; preds = %bb3
  %array_size = mul i32 %element_size, %n
  store i32 %align, ptr %_28, align 4
  %_29 = load i32, ptr %_28, align 4, !range !6, !noundef !0
  %_30 = icmp uge i32 -2147483648, %_29
  call void @llvm.assume(i1 %_30)
  %_31 = icmp ule i32 1, %_29
  call void @llvm.assume(i1 %_31)
  store i32 %_29, ptr %0, align 4
  %_33 = load i32, ptr %0, align 4, !range !6, !noundef !0
  store i32 %array_size, ptr %_16, align 4
  %7 = getelementptr inbounds { i32, i32 }, ptr %_16, i32 0, i32 1
  store i32 %_33, ptr %7, align 4
  %8 = getelementptr inbounds { i32, i32 }, ptr %_16, i32 0, i32 0
  %9 = load i32, ptr %8, align 4
  %10 = getelementptr inbounds { i32, i32 }, ptr %_16, i32 0, i32 1
  %11 = load i32, ptr %10, align 4, !range !6, !noundef !0
  %12 = getelementptr inbounds { i32, i32 }, ptr %1, i32 0, i32 0
  store i32 %9, ptr %12, align 4
  %13 = getelementptr inbounds { i32, i32 }, ptr %1, i32 0, i32 1
  store i32 %11, ptr %13, align 4
  br label %bb7

bb5:                                              ; preds = %bb3
  %14 = getelementptr inbounds { i32, i32 }, ptr %1, i32 0, i32 1
  store i32 0, ptr %14, align 4
  br label %bb7

bb7:                                              ; preds = %bb6, %bb5
  %15 = getelementptr inbounds { i32, i32 }, ptr %1, i32 0, i32 0
  %16 = load i32, ptr %15, align 4
  %17 = getelementptr inbounds { i32, i32 }, ptr %1, i32 0, i32 1
  %18 = load i32, ptr %17, align 4, !range !1, !noundef !0
  %19 = insertvalue { i32, i32 } undef, i32 %16, 0
  %20 = insertvalue { i32, i32 } %19, i32 %18, 1
  ret { i32, i32 } %20
}

; core::option::Option<T>::map_or_else
; Function Attrs: inlinehint nounwind
define hidden void @"_ZN4core6option15Option$LT$T$GT$11map_or_else17h6d41fbf64c6741f6E"(ptr sret(%"alloc::string::String") %0, ptr align 1 %1, i32 %2, ptr align 4 %default) unnamed_addr #0 {
start:
  %_12 = alloca i8, align 1
  %_11 = alloca i8, align 1
  %_7 = alloca { ptr, i32 }, align 4
  %self = alloca { ptr, i32 }, align 4
  %3 = getelementptr inbounds { ptr, i32 }, ptr %self, i32 0, i32 0
  store ptr %1, ptr %3, align 4
  %4 = getelementptr inbounds { ptr, i32 }, ptr %self, i32 0, i32 1
  store i32 %2, ptr %4, align 4
  store i8 1, ptr %_12, align 1
  store i8 1, ptr %_11, align 1
  %5 = load ptr, ptr %self, align 4
  %6 = ptrtoint ptr %5 to i32
  %7 = icmp eq i32 %6, 0
  %_4 = select i1 %7, i32 0, i32 1
  %8 = icmp eq i32 %_4, 0
  br i1 %8, label %bb1, label %bb3

bb1:                                              ; preds = %start
  store i8 0, ptr %_12, align 1
; call alloc::fmt::format::{{closure}}
  call void @"_ZN5alloc3fmt6format28_$u7b$$u7b$closure$u7d$$u7d$17h63a3a5ddc0d86702E"(ptr sret(%"alloc::string::String") %0, ptr align 4 %default) #12
  br label %bb9

bb3:                                              ; preds = %start
  %9 = getelementptr inbounds { ptr, i32 }, ptr %self, i32 0, i32 0
  %t.0 = load ptr, ptr %9, align 4, !nonnull !0, !align !2, !noundef !0
  %10 = getelementptr inbounds { ptr, i32 }, ptr %self, i32 0, i32 1
  %t.1 = load i32, ptr %10, align 4
  store i8 0, ptr %_11, align 1
  %11 = getelementptr inbounds { ptr, i32 }, ptr %_7, i32 0, i32 0
  store ptr %t.0, ptr %11, align 4
  %12 = getelementptr inbounds { ptr, i32 }, ptr %_7, i32 0, i32 1
  store i32 %t.1, ptr %12, align 4
  %13 = getelementptr inbounds { ptr, i32 }, ptr %_7, i32 0, i32 0
  %14 = load ptr, ptr %13, align 4, !nonnull !0, !align !2, !noundef !0
  %15 = getelementptr inbounds { ptr, i32 }, ptr %_7, i32 0, i32 1
  %16 = load i32, ptr %15, align 4
; call core::ops::function::FnOnce::call_once
  call void @_ZN4core3ops8function6FnOnce9call_once17h5ce1595ad75f7b4eE(ptr sret(%"alloc::string::String") %0, ptr align 1 %14, i32 %16) #12
  br label %bb9

bb2:                                              ; No predecessors!
  unreachable

bb9:                                              ; preds = %bb1, %bb3
  %17 = load i8, ptr %_11, align 1, !range !4, !noundef !0
  %18 = trunc i8 %17 to i1
  br i1 %18, label %bb8, label %bb6

bb6:                                              ; preds = %bb8, %bb9
  %19 = load i8, ptr %_12, align 1, !range !4, !noundef !0
  %20 = trunc i8 %19 to i1
  br i1 %20, label %bb10, label %bb7

bb8:                                              ; preds = %bb9
  br label %bb6

bb7:                                              ; preds = %bb10, %bb6
  ret void

bb10:                                             ; preds = %bb6
  br label %bb7
}

; <T as core::convert::Into<U>>::into
; Function Attrs: nounwind
define hidden ptr @"_ZN50_$LT$T$u20$as$u20$core..convert..Into$LT$U$GT$$GT$4into17h3fc376ef754dd891E"(ptr %self) unnamed_addr #1 {
start:
; call <core::ptr::non_null::NonNull<T> as core::convert::From<core::ptr::unique::Unique<T>>>::from
  %0 = call ptr @"_ZN119_$LT$core..ptr..non_null..NonNull$LT$T$GT$$u20$as$u20$core..convert..From$LT$core..ptr..unique..Unique$LT$T$GT$$GT$$GT$4from17he8949423c9f83823E"(ptr %self) #12
  ret ptr %0
}

; <T as core::convert::Into<U>>::into
; Function Attrs: nounwind
define hidden { i32, i32 } @"_ZN50_$LT$T$u20$as$u20$core..convert..Into$LT$U$GT$$GT$4into17h623c7253a0a32262E"(i32 %self.0, i32 %self.1) unnamed_addr #1 {
start:
; call <alloc::collections::TryReserveError as core::convert::From<alloc::collections::TryReserveErrorKind>>::from
  %0 = call { i32, i32 } @"_ZN122_$LT$alloc..collections..TryReserveError$u20$as$u20$core..convert..From$LT$alloc..collections..TryReserveErrorKind$GT$$GT$4from17h88985e54aa59bfbcE"(i32 %self.0, i32 %self.1) #12
  %1 = extractvalue { i32, i32 } %0, 0
  %2 = extractvalue { i32, i32 } %0, 1
  %3 = insertvalue { i32, i32 } undef, i32 %1, 0
  %4 = insertvalue { i32, i32 } %3, i32 %2, 1
  ret { i32, i32 } %4
}

; <T as alloc::slice::hack::ConvertVec>::to_vec
; Function Attrs: inlinehint nounwind
define hidden void @"_ZN52_$LT$T$u20$as$u20$alloc..slice..hack..ConvertVec$GT$6to_vec17h47f095f75190226fE"(ptr sret(%"alloc::vec::Vec<u8>") %v, ptr align 1 %s.0, i32 %s.1) unnamed_addr #0 {
start:
  %_19 = alloca i8, align 1
  store i8 0, ptr %_19, align 1
  %0 = load i8, ptr %_19, align 1, !range !4, !noundef !0
  %1 = trunc i8 %0 to i1
; call alloc::raw_vec::RawVec<T,A>::allocate_in
  %2 = call { i32, ptr } @"_ZN5alloc7raw_vec19RawVec$LT$T$C$A$GT$11allocate_in17he1cd0a6d79c9cba6E"(i32 %s.1, i1 zeroext %1) #12
  %_15.0 = extractvalue { i32, ptr } %2, 0
  %_15.1 = extractvalue { i32, ptr } %2, 1
  %3 = getelementptr inbounds { i32, ptr }, ptr %v, i32 0, i32 0
  store i32 %_15.0, ptr %3, align 4
  %4 = getelementptr inbounds { i32, ptr }, ptr %v, i32 0, i32 1
  store ptr %_15.1, ptr %4, align 4
  %5 = getelementptr inbounds %"alloc::vec::Vec<u8>", ptr %v, i32 0, i32 1
  store i32 0, ptr %5, align 4
  %6 = getelementptr inbounds { i32, ptr }, ptr %v, i32 0, i32 1
  %self = load ptr, ptr %6, align 4, !nonnull !0, !noundef !0
; call core::ptr::mut_ptr::<impl *mut T>::is_null
  %_24 = call zeroext i1 @"_ZN4core3ptr7mut_ptr31_$LT$impl$u20$$BP$mut$u20$T$GT$7is_null17h61b7e6d57a876f74E"(ptr %self) #12
  %_23 = xor i1 %_24, true
  call void @llvm.assume(i1 %_23)
  %7 = mul i32 %s.1, 1
  call void @llvm.memcpy.p0.p0.i32(ptr align 1 %self, ptr align 1 %s.0, i32 %7, i1 false)
  %8 = getelementptr inbounds %"alloc::vec::Vec<u8>", ptr %v, i32 0, i32 1
  store i32 %s.1, ptr %8, align 4
  ret void
}

; alloc::fmt::format
; Function Attrs: inlinehint nounwind
define internal void @_ZN5alloc3fmt6format17h48e013bbf6a0ec4eE(ptr sret(%"alloc::string::String") %0, ptr %args) unnamed_addr #0 {
start:
  %_4 = alloca ptr, align 4
; call core::fmt::Arguments::as_str
  %1 = call { ptr, i32 } @_ZN4core3fmt9Arguments6as_str17hacea73255e506649E(ptr align 4 %args) #12
  %_2.0 = extractvalue { ptr, i32 } %1, 0
  %_2.1 = extractvalue { ptr, i32 } %1, 1
  store ptr %args, ptr %_4, align 4
  %2 = load ptr, ptr %_4, align 4, !nonnull !0, !align !3, !noundef !0
; call core::option::Option<T>::map_or_else
  call void @"_ZN4core6option15Option$LT$T$GT$11map_or_else17h6d41fbf64c6741f6E"(ptr sret(%"alloc::string::String") %0, ptr align 1 %_2.0, i32 %_2.1, ptr align 4 %2) #12
  ret void
}

; alloc::fmt::format::{{closure}}
; Function Attrs: inlinehint nounwind
define hidden void @"_ZN5alloc3fmt6format28_$u7b$$u7b$closure$u7d$$u7d$17h63a3a5ddc0d86702E"(ptr sret(%"alloc::string::String") %0, ptr align 4 %1) unnamed_addr #0 {
start:
  %_2 = alloca %"core::fmt::Arguments<'_>", align 4
  %_1 = alloca ptr, align 4
  store ptr %1, ptr %_1, align 4
  %_3 = load ptr, ptr %_1, align 4, !nonnull !0, !align !3, !noundef !0
  call void @llvm.memcpy.p0.p0.i32(ptr align 4 %_2, ptr align 4 %_3, i32 24, i1 false)
; call alloc::fmt::format::format_inner
  call void @_ZN5alloc3fmt6format12format_inner17h92d046d33b5f4798E(ptr sret(%"alloc::string::String") %0, ptr %_2) #12
  ret void
}

; alloc::str::<impl alloc::borrow::ToOwned for str>::to_owned
; Function Attrs: inlinehint nounwind
define internal void @"_ZN5alloc3str56_$LT$impl$u20$alloc..borrow..ToOwned$u20$for$u20$str$GT$8to_owned17hfb547d0281468889E"(ptr sret(%"alloc::string::String") %0, ptr align 1 %self.0, i32 %self.1) unnamed_addr #0 {
start:
  %1 = alloca { ptr, i32 }, align 4
  %_7 = alloca %"alloc::vec::Vec<u8>", align 4
  %bytes = alloca %"alloc::vec::Vec<u8>", align 4
  %2 = getelementptr inbounds { ptr, i32 }, ptr %1, i32 0, i32 0
  store ptr %self.0, ptr %2, align 4
  %3 = getelementptr inbounds { ptr, i32 }, ptr %1, i32 0, i32 1
  store i32 %self.1, ptr %3, align 4
  %4 = getelementptr inbounds { ptr, i32 }, ptr %1, i32 0, i32 0
  %_4.0 = load ptr, ptr %4, align 4, !nonnull !0, !align !2, !noundef !0
  %5 = getelementptr inbounds { ptr, i32 }, ptr %1, i32 0, i32 1
  %_4.1 = load i32, ptr %5, align 4
; call alloc::slice::<impl alloc::borrow::ToOwned for [T]>::to_owned
  call void @"_ZN5alloc5slice64_$LT$impl$u20$alloc..borrow..ToOwned$u20$for$u20$$u5b$T$u5d$$GT$8to_owned17h61af7ab430e6af21E"(ptr sret(%"alloc::vec::Vec<u8>") %bytes, ptr align 1 %_4.0, i32 %_4.1) #12
  call void @llvm.memcpy.p0.p0.i32(ptr align 4 %_7, ptr align 4 %bytes, i32 12, i1 false)
  call void @llvm.memcpy.p0.p0.i32(ptr align 4 %0, ptr align 4 %_7, i32 12, i1 false)
  ret void
}

; alloc::alloc::Global::alloc_impl
; Function Attrs: inlinehint nounwind
define internal { ptr, i32 } @_ZN5alloc5alloc6Global10alloc_impl17h522654d2280cbf22E(ptr align 1 %self, i32 %0, i32 %1, i1 zeroext %zeroed) unnamed_addr #0 {
start:
  %2 = alloca ptr, align 4
  %_93 = alloca { ptr, i32 }, align 4
  %_92 = alloca %"core::ptr::metadata::PtrRepr<[u8]>", align 4
  %_72 = alloca i32, align 4
  %_63 = alloca i32, align 4
  %_51 = alloca { ptr, i32 }, align 4
  %_50 = alloca %"core::ptr::metadata::PtrRepr<[u8]>", align 4
  %_31 = alloca i32, align 4
  %_24 = alloca { ptr, i32 }, align 4
  %self4 = alloca ptr, align 4
  %self3 = alloca ptr, align 4
  %_15 = alloca ptr, align 4
  %layout2 = alloca { i32, i32 }, align 4
  %layout1 = alloca { i32, i32 }, align 4
  %raw_ptr = alloca ptr, align 4
  %data = alloca ptr, align 4
  %_6 = alloca { ptr, i32 }, align 4
  %3 = alloca { ptr, i32 }, align 4
  %layout = alloca { i32, i32 }, align 4
  %4 = getelementptr inbounds { i32, i32 }, ptr %layout, i32 0, i32 0
  store i32 %0, ptr %4, align 4
  %5 = getelementptr inbounds { i32, i32 }, ptr %layout, i32 0, i32 1
  store i32 %1, ptr %5, align 4
  %_4 = load i32, ptr %layout, align 4
  %6 = icmp eq i32 %_4, 0
  br i1 %6, label %bb2, label %bb1

bb2:                                              ; preds = %start
  %7 = getelementptr inbounds { i32, i32 }, ptr %layout, i32 0, i32 1
  %self8 = load i32, ptr %7, align 4, !range !6, !noundef !0
  store i32 %self8, ptr %_31, align 4
  %_32 = load i32, ptr %_31, align 4, !range !6, !noundef !0
  %_33 = icmp uge i32 -2147483648, %_32
  call void @llvm.assume(i1 %_33)
  %_34 = icmp ule i32 1, %_32
  call void @llvm.assume(i1 %_34)
  store i32 %_32, ptr %2, align 4
  %ptr = load ptr, ptr %2, align 4
  store ptr %ptr, ptr %data, align 4
  %self9 = load ptr, ptr %data, align 4, !nonnull !0, !noundef !0
  store ptr %self9, ptr %_51, align 4
  %8 = getelementptr inbounds { ptr, i32 }, ptr %_51, i32 0, i32 1
  store i32 0, ptr %8, align 4
  %9 = getelementptr inbounds { ptr, i32 }, ptr %_51, i32 0, i32 0
  %10 = load ptr, ptr %9, align 4
  %11 = getelementptr inbounds { ptr, i32 }, ptr %_51, i32 0, i32 1
  %12 = load i32, ptr %11, align 4
  %13 = getelementptr inbounds { ptr, i32 }, ptr %_50, i32 0, i32 0
  store ptr %10, ptr %13, align 4
  %14 = getelementptr inbounds { ptr, i32 }, ptr %_50, i32 0, i32 1
  store i32 %12, ptr %14, align 4
  %15 = getelementptr inbounds { ptr, i32 }, ptr %_50, i32 0, i32 0
  %ptr.010 = load ptr, ptr %15, align 4
  %16 = getelementptr inbounds { ptr, i32 }, ptr %_50, i32 0, i32 1
  %ptr.111 = load i32, ptr %16, align 4
  %17 = getelementptr inbounds { ptr, i32 }, ptr %_6, i32 0, i32 0
  store ptr %ptr.010, ptr %17, align 4
  %18 = getelementptr inbounds { ptr, i32 }, ptr %_6, i32 0, i32 1
  store i32 %ptr.111, ptr %18, align 4
  %19 = getelementptr inbounds { ptr, i32 }, ptr %_6, i32 0, i32 0
  %20 = load ptr, ptr %19, align 4, !nonnull !0, !noundef !0
  %21 = getelementptr inbounds { ptr, i32 }, ptr %_6, i32 0, i32 1
  %22 = load i32, ptr %21, align 4
  %23 = getelementptr inbounds { ptr, i32 }, ptr %3, i32 0, i32 0
  store ptr %20, ptr %23, align 4
  %24 = getelementptr inbounds { ptr, i32 }, ptr %3, i32 0, i32 1
  store i32 %22, ptr %24, align 4
  br label %bb11

bb1:                                              ; preds = %start
  br i1 %zeroed, label %bb3, label %bb4

bb4:                                              ; preds = %bb1
  %25 = getelementptr inbounds { i32, i32 }, ptr %layout, i32 0, i32 0
  %26 = load i32, ptr %25, align 4
  %27 = getelementptr inbounds { i32, i32 }, ptr %layout, i32 0, i32 1
  %28 = load i32, ptr %27, align 4, !range !6, !noundef !0
  %29 = getelementptr inbounds { i32, i32 }, ptr %layout2, i32 0, i32 0
  store i32 %26, ptr %29, align 4
  %30 = getelementptr inbounds { i32, i32 }, ptr %layout2, i32 0, i32 1
  store i32 %28, ptr %30, align 4
  %_67 = load i32, ptr %layout2, align 4
  %31 = getelementptr inbounds { i32, i32 }, ptr %layout2, i32 0, i32 1
  %self6 = load i32, ptr %31, align 4, !range !6, !noundef !0
  store i32 %self6, ptr %_72, align 4
  %_73 = load i32, ptr %_72, align 4, !range !6, !noundef !0
  %_74 = icmp uge i32 -2147483648, %_73
  call void @llvm.assume(i1 %_74)
  %_75 = icmp ule i32 1, %_73
  call void @llvm.assume(i1 %_75)
  %32 = call ptr @__rust_alloc(i32 %_67, i32 %_73) #12
  store ptr %32, ptr %raw_ptr, align 4
  br label %bb5

bb3:                                              ; preds = %bb1
  %33 = getelementptr inbounds { i32, i32 }, ptr %layout, i32 0, i32 0
  %34 = load i32, ptr %33, align 4
  %35 = getelementptr inbounds { i32, i32 }, ptr %layout, i32 0, i32 1
  %36 = load i32, ptr %35, align 4, !range !6, !noundef !0
  %37 = getelementptr inbounds { i32, i32 }, ptr %layout1, i32 0, i32 0
  store i32 %34, ptr %37, align 4
  %38 = getelementptr inbounds { i32, i32 }, ptr %layout1, i32 0, i32 1
  store i32 %36, ptr %38, align 4
  %_58 = load i32, ptr %layout1, align 4
  %39 = getelementptr inbounds { i32, i32 }, ptr %layout1, i32 0, i32 1
  %self5 = load i32, ptr %39, align 4, !range !6, !noundef !0
  store i32 %self5, ptr %_63, align 4
  %_64 = load i32, ptr %_63, align 4, !range !6, !noundef !0
  %_65 = icmp uge i32 -2147483648, %_64
  call void @llvm.assume(i1 %_65)
  %_66 = icmp ule i32 1, %_64
  call void @llvm.assume(i1 %_66)
  %40 = call ptr @__rust_alloc_zeroed(i32 %_58, i32 %_64) #12
  store ptr %40, ptr %raw_ptr, align 4
  br label %bb5

bb5:                                              ; preds = %bb4, %bb3
  %_18 = load ptr, ptr %raw_ptr, align 4
; call core::ptr::non_null::NonNull<T>::new
  %41 = call ptr @"_ZN4core3ptr8non_null16NonNull$LT$T$GT$3new17hecb2776770146631E"(ptr %_18) #12
  store ptr %41, ptr %self4, align 4
  %42 = load ptr, ptr %self4, align 4
  %43 = ptrtoint ptr %42 to i32
  %44 = icmp eq i32 %43, 0
  %_76 = select i1 %44, i32 0, i32 1
  %45 = icmp eq i32 %_76, 0
  br i1 %45, label %bb16, label %bb18

bb16:                                             ; preds = %bb5
  store ptr null, ptr %self3, align 4
  br label %bb19

bb18:                                             ; preds = %bb5
  %v = load ptr, ptr %self4, align 4, !nonnull !0, !noundef !0
  store ptr %v, ptr %self3, align 4
  br label %bb19

bb17:                                             ; No predecessors!
  unreachable

bb19:                                             ; preds = %bb16, %bb18
  %46 = load ptr, ptr %self3, align 4
  %47 = ptrtoint ptr %46 to i32
  %48 = icmp eq i32 %47, 0
  %_79 = select i1 %48, i32 1, i32 0
  %49 = icmp eq i32 %_79, 0
  br i1 %49, label %bb22, label %bb20

bb22:                                             ; preds = %bb19
  %v7 = load ptr, ptr %self3, align 4, !nonnull !0, !noundef !0
  store ptr %v7, ptr %_15, align 4
  br label %bb7

bb20:                                             ; preds = %bb19
  store ptr null, ptr %_15, align 4
  br label %bb7

bb21:                                             ; No predecessors!
  unreachable

bb7:                                              ; preds = %bb22, %bb20
  %50 = load ptr, ptr %_15, align 4
  %51 = ptrtoint ptr %50 to i32
  %52 = icmp eq i32 %51, 0
  %_20 = select i1 %52, i32 1, i32 0
  %53 = icmp eq i32 %_20, 0
  br i1 %53, label %bb8, label %bb10

bb8:                                              ; preds = %bb7
  %val = load ptr, ptr %_15, align 4, !nonnull !0, !noundef !0
  store ptr %val, ptr %_93, align 4
  %54 = getelementptr inbounds { ptr, i32 }, ptr %_93, i32 0, i32 1
  store i32 %_4, ptr %54, align 4
  %55 = getelementptr inbounds { ptr, i32 }, ptr %_93, i32 0, i32 0
  %56 = load ptr, ptr %55, align 4
  %57 = getelementptr inbounds { ptr, i32 }, ptr %_93, i32 0, i32 1
  %58 = load i32, ptr %57, align 4
  %59 = getelementptr inbounds { ptr, i32 }, ptr %_92, i32 0, i32 0
  store ptr %56, ptr %59, align 4
  %60 = getelementptr inbounds { ptr, i32 }, ptr %_92, i32 0, i32 1
  store i32 %58, ptr %60, align 4
  %61 = getelementptr inbounds { ptr, i32 }, ptr %_92, i32 0, i32 0
  %ptr.0 = load ptr, ptr %61, align 4
  %62 = getelementptr inbounds { ptr, i32 }, ptr %_92, i32 0, i32 1
  %ptr.1 = load i32, ptr %62, align 4
  %63 = getelementptr inbounds { ptr, i32 }, ptr %_24, i32 0, i32 0
  store ptr %ptr.0, ptr %63, align 4
  %64 = getelementptr inbounds { ptr, i32 }, ptr %_24, i32 0, i32 1
  store i32 %ptr.1, ptr %64, align 4
  %65 = getelementptr inbounds { ptr, i32 }, ptr %_24, i32 0, i32 0
  %66 = load ptr, ptr %65, align 4, !nonnull !0, !noundef !0
  %67 = getelementptr inbounds { ptr, i32 }, ptr %_24, i32 0, i32 1
  %68 = load i32, ptr %67, align 4
  %69 = getelementptr inbounds { ptr, i32 }, ptr %3, i32 0, i32 0
  store ptr %66, ptr %69, align 4
  %70 = getelementptr inbounds { ptr, i32 }, ptr %3, i32 0, i32 1
  store i32 %68, ptr %70, align 4
  br label %bb11

bb10:                                             ; preds = %bb7
  store ptr null, ptr %3, align 4
  br label %bb12

bb9:                                              ; No predecessors!
  unreachable

bb12:                                             ; preds = %bb11, %bb10
  %71 = getelementptr inbounds { ptr, i32 }, ptr %3, i32 0, i32 0
  %72 = load ptr, ptr %71, align 4
  %73 = getelementptr inbounds { ptr, i32 }, ptr %3, i32 0, i32 1
  %74 = load i32, ptr %73, align 4
  %75 = insertvalue { ptr, i32 } undef, ptr %72, 0
  %76 = insertvalue { ptr, i32 } %75, i32 %74, 1
  ret { ptr, i32 } %76

bb11:                                             ; preds = %bb2, %bb8
  br label %bb12
}

; alloc::slice::<impl alloc::borrow::ToOwned for [T]>::to_owned
; Function Attrs: nounwind
define hidden void @"_ZN5alloc5slice64_$LT$impl$u20$alloc..borrow..ToOwned$u20$for$u20$$u5b$T$u5d$$GT$8to_owned17h61af7ab430e6af21E"(ptr sret(%"alloc::vec::Vec<u8>") %0, ptr align 1 %self.0, i32 %self.1) unnamed_addr #1 {
start:
; call <T as alloc::slice::hack::ConvertVec>::to_vec
  call void @"_ZN52_$LT$T$u20$as$u20$alloc..slice..hack..ConvertVec$GT$6to_vec17h47f095f75190226fE"(ptr sret(%"alloc::vec::Vec<u8>") %0, ptr align 1 %self.0, i32 %self.1) #12
  ret void
}

; alloc::raw_vec::RawVec<T,A>::allocate_in
; Function Attrs: nounwind
define hidden { i32, ptr } @"_ZN5alloc7raw_vec19RawVec$LT$T$C$A$GT$11allocate_in17he1cd0a6d79c9cba6E"(i32 %capacity, i1 zeroext %0) unnamed_addr #1 {
start:
  %1 = alloca i32, align 4
  %_59 = alloca ptr, align 4
  %_49 = alloca { i32, i32 }, align 4
  %self = alloca ptr, align 4
  %_30 = alloca ptr, align 4
  %result = alloca { ptr, i32 }, align 4
  %_14 = alloca { i32, i32 }, align 4
  %_9 = alloca { i32, i32 }, align 4
  %layout = alloca { i32, i32 }, align 4
  %_4 = alloca i8, align 1
  %2 = alloca { i32, ptr }, align 4
  %alloc = alloca %"alloc::alloc::Global", align 1
  %init = alloca i8, align 1
  %3 = zext i1 %0 to i8
  store i8 %3, ptr %init, align 1
  br i1 false, label %bb1, label %bb2

bb2:                                              ; preds = %start
  %_5 = icmp eq i32 %capacity, 0
  %4 = zext i1 %_5 to i8
  store i8 %4, ptr %_4, align 1
  br label %bb3

bb1:                                              ; preds = %start
  store i8 1, ptr %_4, align 1
  br label %bb3

bb3:                                              ; preds = %bb2, %bb1
  %5 = load i8, ptr %_4, align 1, !range !4, !noundef !0
  %6 = trunc i8 %5 to i1
  br i1 %6, label %bb4, label %bb6

bb6:                                              ; preds = %bb3
  store i32 1, ptr %1, align 4
  %_37 = load i32, ptr %1, align 4, !range !6, !noundef !0
; call core::alloc::layout::Layout::array::inner
  %7 = call { i32, i32 } @_ZN4core5alloc6layout6Layout5array5inner17h6502d672d979ab21E(i32 1, i32 %_37, i32 %capacity) #12
  store { i32, i32 } %7, ptr %_9, align 4
  %8 = getelementptr inbounds { i32, i32 }, ptr %_9, i32 0, i32 1
  %9 = load i32, ptr %8, align 4, !range !1, !noundef !0
  %10 = icmp eq i32 %9, 0
  %_11 = select i1 %10, i32 1, i32 0
  %11 = icmp eq i32 %_11, 0
  br i1 %11, label %bb9, label %bb7

bb4:                                              ; preds = %bb3
; call alloc::raw_vec::RawVec<T,A>::new_in
  %12 = call { i32, ptr } @"_ZN5alloc7raw_vec19RawVec$LT$T$C$A$GT$6new_in17hf9d53abf17222626E"() #12
  store { i32, ptr } %12, ptr %2, align 4
  br label %bb22

bb22:                                             ; preds = %bb21, %bb4
  %13 = getelementptr inbounds { i32, ptr }, ptr %2, i32 0, i32 0
  %14 = load i32, ptr %13, align 4
  %15 = getelementptr inbounds { i32, ptr }, ptr %2, i32 0, i32 1
  %16 = load ptr, ptr %15, align 4, !nonnull !0, !noundef !0
  %17 = insertvalue { i32, ptr } undef, i32 %14, 0
  %18 = insertvalue { i32, ptr } %17, ptr %16, 1
  ret { i32, ptr } %18

bb9:                                              ; preds = %bb6
  %19 = getelementptr inbounds { i32, i32 }, ptr %_9, i32 0, i32 0
  %layout.0 = load i32, ptr %19, align 4
  %20 = getelementptr inbounds { i32, i32 }, ptr %_9, i32 0, i32 1
  %layout.1 = load i32, ptr %20, align 4, !range !6, !noundef !0
  %21 = getelementptr inbounds { i32, i32 }, ptr %layout, i32 0, i32 0
  store i32 %layout.0, ptr %21, align 4
  %22 = getelementptr inbounds { i32, i32 }, ptr %layout, i32 0, i32 1
  store i32 %layout.1, ptr %22, align 4
  %alloc_size = load i32, ptr %layout, align 4
  %_45 = icmp ugt i32 %alloc_size, 2147483647
  br i1 %_45, label %bb25, label %bb27

bb7:                                              ; preds = %bb6
; call alloc::raw_vec::capacity_overflow
  call void @_ZN5alloc7raw_vec17capacity_overflow17h9b8fdd50660a9bc3E() #13
  unreachable

bb8:                                              ; No predecessors!
  unreachable

bb27:                                             ; preds = %bb9
  %23 = getelementptr inbounds { i32, i32 }, ptr %_14, i32 0, i32 1
  store i32 -2147483647, ptr %23, align 4
  br label %bb28

bb25:                                             ; preds = %bb9
  %24 = getelementptr inbounds { i32, i32 }, ptr %_49, i32 0, i32 1
  store i32 0, ptr %24, align 4
  %25 = getelementptr inbounds { i32, i32 }, ptr %_49, i32 0, i32 0
  %26 = load i32, ptr %25, align 4
  %27 = getelementptr inbounds { i32, i32 }, ptr %_49, i32 0, i32 1
  %28 = load i32, ptr %27, align 4, !range !1, !noundef !0
; call <T as core::convert::Into<U>>::into
  %29 = call { i32, i32 } @"_ZN50_$LT$T$u20$as$u20$core..convert..Into$LT$U$GT$$GT$4into17h623c7253a0a32262E"(i32 %26, i32 %28) #12
  %_48.0 = extractvalue { i32, i32 } %29, 0
  %_48.1 = extractvalue { i32, i32 } %29, 1
  %30 = getelementptr inbounds { i32, i32 }, ptr %_14, i32 0, i32 0
  store i32 %_48.0, ptr %30, align 4
  %31 = getelementptr inbounds { i32, i32 }, ptr %_14, i32 0, i32 1
  store i32 %_48.1, ptr %31, align 4
  br label %bb28

bb28:                                             ; preds = %bb27, %bb25
  %32 = getelementptr inbounds { i32, i32 }, ptr %_14, i32 0, i32 1
  %33 = load i32, ptr %32, align 4, !range !7, !noundef !0
  %34 = icmp eq i32 %33, -2147483647
  %_17 = select i1 %34, i32 0, i32 1
  %35 = icmp eq i32 %_17, 0
  br i1 %35, label %bb12, label %bb10

bb12:                                             ; preds = %bb28
  %36 = load i8, ptr %init, align 1, !range !4, !noundef !0
  %37 = trunc i8 %36 to i1
  %_20 = zext i1 %37 to i32
  %38 = icmp eq i32 %_20, 0
  br i1 %38, label %bb15, label %bb13

bb10:                                             ; preds = %bb28
; call alloc::raw_vec::capacity_overflow
  call void @_ZN5alloc7raw_vec17capacity_overflow17h9b8fdd50660a9bc3E() #13
  unreachable

bb11:                                             ; No predecessors!
  unreachable

bb15:                                             ; preds = %bb12
  %39 = getelementptr inbounds { i32, i32 }, ptr %layout, i32 0, i32 0
  %_22.0 = load i32, ptr %39, align 4
  %40 = getelementptr inbounds { i32, i32 }, ptr %layout, i32 0, i32 1
  %_22.1 = load i32, ptr %40, align 4, !range !6, !noundef !0
; call <alloc::alloc::Global as core::alloc::Allocator>::allocate
  %41 = call { ptr, i32 } @"_ZN63_$LT$alloc..alloc..Global$u20$as$u20$core..alloc..Allocator$GT$8allocate17hef9148e1127e4c4aE"(ptr align 1 %alloc, i32 %_22.0, i32 %_22.1) #12
  store { ptr, i32 } %41, ptr %result, align 4
  br label %bb18

bb13:                                             ; preds = %bb12
  %42 = getelementptr inbounds { i32, i32 }, ptr %layout, i32 0, i32 0
  %_24.0 = load i32, ptr %42, align 4
  %43 = getelementptr inbounds { i32, i32 }, ptr %layout, i32 0, i32 1
  %_24.1 = load i32, ptr %43, align 4, !range !6, !noundef !0
; call <alloc::alloc::Global as core::alloc::Allocator>::allocate_zeroed
  %44 = call { ptr, i32 } @"_ZN63_$LT$alloc..alloc..Global$u20$as$u20$core..alloc..Allocator$GT$15allocate_zeroed17h8ae6a886ca978ac6E"(ptr align 1 %alloc, i32 %_24.0, i32 %_24.1) #12
  store { ptr, i32 } %44, ptr %result, align 4
  br label %bb18

bb14:                                             ; No predecessors!
  unreachable

bb18:                                             ; preds = %bb15, %bb13
  %45 = load ptr, ptr %result, align 4
  %46 = ptrtoint ptr %45 to i32
  %47 = icmp eq i32 %46, 0
  %_26 = select i1 %47, i32 1, i32 0
  %48 = icmp eq i32 %_26, 0
  br i1 %48, label %bb21, label %bb19

bb21:                                             ; preds = %bb18
  %49 = getelementptr inbounds { ptr, i32 }, ptr %result, i32 0, i32 0
  %ptr.0 = load ptr, ptr %49, align 4, !nonnull !0, !noundef !0
  %50 = getelementptr inbounds { ptr, i32 }, ptr %result, i32 0, i32 1
  %ptr.1 = load i32, ptr %50, align 4
  store ptr %ptr.0, ptr %self, align 4
  %_58 = load ptr, ptr %self, align 4
  store ptr %_58, ptr %_59, align 4
  %51 = load ptr, ptr %_59, align 4, !nonnull !0, !noundef !0
  store ptr %51, ptr %_30, align 4
  %52 = getelementptr inbounds { i32, ptr }, ptr %2, i32 0, i32 1
  %53 = load ptr, ptr %_30, align 4, !nonnull !0, !noundef !0
  store ptr %53, ptr %52, align 4
  store i32 %capacity, ptr %2, align 4
  br label %bb22

bb19:                                             ; preds = %bb18
  %54 = getelementptr inbounds { i32, i32 }, ptr %layout, i32 0, i32 0
  %_29.0 = load i32, ptr %54, align 4
  %55 = getelementptr inbounds { i32, i32 }, ptr %layout, i32 0, i32 1
  %_29.1 = load i32, ptr %55, align 4, !range !6, !noundef !0
; call alloc::alloc::handle_alloc_error
  call void @_ZN5alloc5alloc18handle_alloc_error17h80087a6d84fb07bdE(i32 %_29.0, i32 %_29.1) #13
  unreachable

bb20:                                             ; No predecessors!
  unreachable
}

; alloc::raw_vec::RawVec<T,A>::current_memory
; Function Attrs: nounwind
define hidden void @"_ZN5alloc7raw_vec19RawVec$LT$T$C$A$GT$14current_memory17hb752968e6e391c7fE"(ptr sret(%"core::option::Option<(core::ptr::non_null::NonNull<u8>, core::alloc::layout::Layout)>") %0, ptr align 4 %self) unnamed_addr #1 {
start:
  %1 = alloca i32, align 4
  %pointer = alloca ptr, align 4
  %_10 = alloca ptr, align 4
  %_8 = alloca { ptr, { i32, i32 } }, align 4
  %self1 = alloca { i32, i32 }, align 4
  %_2 = alloca i8, align 1
  br i1 false, label %bb1, label %bb2

bb2:                                              ; preds = %start
  %_4 = load i32, ptr %self, align 4
  %_3 = icmp eq i32 %_4, 0
  %2 = zext i1 %_3 to i8
  store i8 %2, ptr %_2, align 1
  br label %bb3

bb1:                                              ; preds = %start
  store i8 1, ptr %_2, align 1
  br label %bb3

bb3:                                              ; preds = %bb2, %bb1
  %3 = load i8, ptr %_2, align 1, !range !4, !noundef !0
  %4 = trunc i8 %3 to i1
  br i1 %4, label %bb4, label %bb5

bb5:                                              ; preds = %bb3
  %n = load i32, ptr %self, align 4
  store i32 1, ptr %1, align 4
  %_14 = load i32, ptr %1, align 4, !range !6, !noundef !0
; call core::alloc::layout::Layout::array::inner
  %5 = call { i32, i32 } @_ZN4core5alloc6layout6Layout5array5inner17h6502d672d979ab21E(i32 1, i32 %_14, i32 %n) #12
  store { i32, i32 } %5, ptr %self1, align 4
  %6 = getelementptr inbounds { i32, i32 }, ptr %self1, i32 0, i32 1
  %7 = load i32, ptr %6, align 4, !range !1, !noundef !0
  %8 = icmp eq i32 %7, 0
  %_22 = select i1 %8, i32 1, i32 0
  %9 = icmp eq i32 %_22, 0
  br i1 %9, label %bb12, label %bb10

bb4:                                              ; preds = %bb3
  %10 = getelementptr inbounds %"core::option::Option<(core::ptr::non_null::NonNull<u8>, core::alloc::layout::Layout)>", ptr %0, i32 0, i32 1
  store i32 0, ptr %10, align 4
  br label %bb7

bb7:                                              ; preds = %bb12, %bb4
  ret void

bb12:                                             ; preds = %bb5
  %11 = getelementptr inbounds { i32, i32 }, ptr %self1, i32 0, i32 0
  %t.0 = load i32, ptr %11, align 4
  %12 = getelementptr inbounds { i32, i32 }, ptr %self1, i32 0, i32 1
  %t.1 = load i32, ptr %12, align 4, !range !6, !noundef !0
  %13 = getelementptr inbounds { i32, ptr }, ptr %self, i32 0, i32 1
  %self2 = load ptr, ptr %13, align 4, !nonnull !0, !noundef !0
  store ptr %self2, ptr %pointer, align 4
  %_35 = load ptr, ptr %pointer, align 4, !nonnull !0, !noundef !0
  store ptr %_35, ptr %_10, align 4
  %14 = load ptr, ptr %_10, align 4, !nonnull !0, !noundef !0
; call <T as core::convert::Into<U>>::into
  %_9 = call ptr @"_ZN50_$LT$T$u20$as$u20$core..convert..Into$LT$U$GT$$GT$4into17h3fc376ef754dd891E"(ptr %14) #12
  store ptr %_9, ptr %_8, align 4
  %15 = getelementptr inbounds { ptr, { i32, i32 } }, ptr %_8, i32 0, i32 1
  %16 = getelementptr inbounds { i32, i32 }, ptr %15, i32 0, i32 0
  store i32 %t.0, ptr %16, align 4
  %17 = getelementptr inbounds { i32, i32 }, ptr %15, i32 0, i32 1
  store i32 %t.1, ptr %17, align 4
  call void @llvm.memcpy.p0.p0.i32(ptr align 4 %0, ptr align 4 %_8, i32 12, i1 false)
  br label %bb7

bb10:                                             ; preds = %bb5
; call core::hint::unreachable_unchecked
  call void @_ZN4core4hint21unreachable_unchecked17hd40b84c39ce3e849E() #13
  unreachable

bb11:                                             ; No predecessors!
  unreachable
}

; alloc::raw_vec::RawVec<T,A>::new_in
; Function Attrs: nounwind
define hidden { i32, ptr } @"_ZN5alloc7raw_vec19RawVec$LT$T$C$A$GT$6new_in17hf9d53abf17222626E"() unnamed_addr #1 {
start:
  %0 = alloca ptr, align 4
  %pointer = alloca ptr, align 4
  %_2 = alloca ptr, align 4
  %1 = alloca { i32, ptr }, align 4
  store i32 1, ptr %0, align 4
  %ptr = load ptr, ptr %0, align 4
  store ptr %ptr, ptr %pointer, align 4
  %_13 = load ptr, ptr %pointer, align 4, !nonnull !0, !noundef !0
  store ptr %_13, ptr %_2, align 4
  %2 = getelementptr inbounds { i32, ptr }, ptr %1, i32 0, i32 1
  %3 = load ptr, ptr %_2, align 4, !nonnull !0, !noundef !0
  store ptr %3, ptr %2, align 4
  store i32 0, ptr %1, align 4
  %4 = getelementptr inbounds { i32, ptr }, ptr %1, i32 0, i32 0
  %5 = load i32, ptr %4, align 4
  %6 = getelementptr inbounds { i32, ptr }, ptr %1, i32 0, i32 1
  %7 = load ptr, ptr %6, align 4, !nonnull !0, !noundef !0
  %8 = insertvalue { i32, ptr } undef, i32 %5, 0
  %9 = insertvalue { i32, ptr } %8, ptr %7, 1
  ret { i32, ptr } %9
}

; <alloc::alloc::Global as core::alloc::Allocator>::deallocate
; Function Attrs: inlinehint nounwind
define internal void @"_ZN63_$LT$alloc..alloc..Global$u20$as$u20$core..alloc..Allocator$GT$10deallocate17ha553b1eac1ea497aE"(ptr align 1 %self, ptr %ptr, i32 %0, i32 %1) unnamed_addr #0 {
start:
  %_16 = alloca i32, align 4
  %layout1 = alloca { i32, i32 }, align 4
  %layout = alloca { i32, i32 }, align 4
  %2 = getelementptr inbounds { i32, i32 }, ptr %layout, i32 0, i32 0
  store i32 %0, ptr %2, align 4
  %3 = getelementptr inbounds { i32, i32 }, ptr %layout, i32 0, i32 1
  store i32 %1, ptr %3, align 4
  %_4 = load i32, ptr %layout, align 4
  %4 = icmp eq i32 %_4, 0
  br i1 %4, label %bb2, label %bb1

bb2:                                              ; preds = %start
  br label %bb3

bb1:                                              ; preds = %start
  %5 = getelementptr inbounds { i32, i32 }, ptr %layout, i32 0, i32 0
  %6 = load i32, ptr %5, align 4
  %7 = getelementptr inbounds { i32, i32 }, ptr %layout, i32 0, i32 1
  %8 = load i32, ptr %7, align 4, !range !6, !noundef !0
  %9 = getelementptr inbounds { i32, i32 }, ptr %layout1, i32 0, i32 0
  store i32 %6, ptr %9, align 4
  %10 = getelementptr inbounds { i32, i32 }, ptr %layout1, i32 0, i32 1
  store i32 %8, ptr %10, align 4
  %_11 = load i32, ptr %layout1, align 4
  %11 = getelementptr inbounds { i32, i32 }, ptr %layout1, i32 0, i32 1
  %self2 = load i32, ptr %11, align 4, !range !6, !noundef !0
  store i32 %self2, ptr %_16, align 4
  %_17 = load i32, ptr %_16, align 4, !range !6, !noundef !0
  %_18 = icmp uge i32 -2147483648, %_17
  call void @llvm.assume(i1 %_18)
  %_19 = icmp ule i32 1, %_17
  call void @llvm.assume(i1 %_19)
  call void @__rust_dealloc(ptr %ptr, i32 %_11, i32 %_17) #12
  br label %bb3

bb3:                                              ; preds = %bb2, %bb1
  ret void
}

; <alloc::alloc::Global as core::alloc::Allocator>::allocate_zeroed
; Function Attrs: inlinehint nounwind
define internal { ptr, i32 } @"_ZN63_$LT$alloc..alloc..Global$u20$as$u20$core..alloc..Allocator$GT$15allocate_zeroed17h8ae6a886ca978ac6E"(ptr align 1 %self, i32 %layout.0, i32 %layout.1) unnamed_addr #0 {
start:
; call alloc::alloc::Global::alloc_impl
  %0 = call { ptr, i32 } @_ZN5alloc5alloc6Global10alloc_impl17h522654d2280cbf22E(ptr align 1 %self, i32 %layout.0, i32 %layout.1, i1 zeroext true) #12
  %1 = extractvalue { ptr, i32 } %0, 0
  %2 = extractvalue { ptr, i32 } %0, 1
  %3 = insertvalue { ptr, i32 } undef, ptr %1, 0
  %4 = insertvalue { ptr, i32 } %3, i32 %2, 1
  ret { ptr, i32 } %4
}

; <alloc::alloc::Global as core::alloc::Allocator>::allocate
; Function Attrs: inlinehint nounwind
define internal { ptr, i32 } @"_ZN63_$LT$alloc..alloc..Global$u20$as$u20$core..alloc..Allocator$GT$8allocate17hef9148e1127e4c4aE"(ptr align 1 %self, i32 %layout.0, i32 %layout.1) unnamed_addr #0 {
start:
; call alloc::alloc::Global::alloc_impl
  %0 = call { ptr, i32 } @_ZN5alloc5alloc6Global10alloc_impl17h522654d2280cbf22E(ptr align 1 %self, i32 %layout.0, i32 %layout.1, i1 zeroext false) #12
  %1 = extractvalue { ptr, i32 } %0, 0
  %2 = extractvalue { ptr, i32 } %0, 1
  %3 = insertvalue { ptr, i32 } undef, ptr %1, 0
  %4 = insertvalue { ptr, i32 } %3, i32 %2, 1
  ret { ptr, i32 } %4
}

; <alloc::vec::Vec<T,A> as core::ops::drop::Drop>::drop
; Function Attrs: nounwind
define hidden void @"_ZN70_$LT$alloc..vec..Vec$LT$T$C$A$GT$$u20$as$u20$core..ops..drop..Drop$GT$4drop17h601aa71bbbdb9903E"(ptr align 4 %self) unnamed_addr #1 {
start:
  %_18 = alloca { ptr, i32 }, align 4
  %_17 = alloca %"core::ptr::metadata::PtrRepr<[u8]>", align 4
  %0 = getelementptr inbounds { i32, ptr }, ptr %self, i32 0, i32 1
  %self1 = load ptr, ptr %0, align 4, !nonnull !0, !noundef !0
; call core::ptr::mut_ptr::<impl *mut T>::is_null
  %_8 = call zeroext i1 @"_ZN4core3ptr7mut_ptr31_$LT$impl$u20$$BP$mut$u20$T$GT$7is_null17h61b7e6d57a876f74E"(ptr %self1) #12
  %_7 = xor i1 %_8, true
  call void @llvm.assume(i1 %_7)
  %1 = getelementptr inbounds %"alloc::vec::Vec<u8>", ptr %self, i32 0, i32 1
  %len = load i32, ptr %1, align 4
  store ptr %self1, ptr %_18, align 4
  %2 = getelementptr inbounds { ptr, i32 }, ptr %_18, i32 0, i32 1
  store i32 %len, ptr %2, align 4
  %3 = getelementptr inbounds { ptr, i32 }, ptr %_18, i32 0, i32 0
  %4 = load ptr, ptr %3, align 4
  %5 = getelementptr inbounds { ptr, i32 }, ptr %_18, i32 0, i32 1
  %6 = load i32, ptr %5, align 4
  %7 = getelementptr inbounds { ptr, i32 }, ptr %_17, i32 0, i32 0
  store ptr %4, ptr %7, align 4
  %8 = getelementptr inbounds { ptr, i32 }, ptr %_17, i32 0, i32 1
  store i32 %6, ptr %8, align 4
  %9 = getelementptr inbounds { ptr, i32 }, ptr %_17, i32 0, i32 0
  %_2.0 = load ptr, ptr %9, align 4
  %10 = getelementptr inbounds { ptr, i32 }, ptr %_17, i32 0, i32 1
  %_2.1 = load i32, ptr %10, align 4
  ret void
}

; <alloc::raw_vec::RawVec<T,A> as core::ops::drop::Drop>::drop
; Function Attrs: nounwind
define hidden void @"_ZN77_$LT$alloc..raw_vec..RawVec$LT$T$C$A$GT$$u20$as$u20$core..ops..drop..Drop$GT$4drop17h977b6c0573c292fdE"(ptr align 4 %self) unnamed_addr #1 {
start:
  %_2 = alloca %"core::option::Option<(core::ptr::non_null::NonNull<u8>, core::alloc::layout::Layout)>", align 4
; call alloc::raw_vec::RawVec<T,A>::current_memory
  call void @"_ZN5alloc7raw_vec19RawVec$LT$T$C$A$GT$14current_memory17hb752968e6e391c7fE"(ptr sret(%"core::option::Option<(core::ptr::non_null::NonNull<u8>, core::alloc::layout::Layout)>") %_2, ptr align 4 %self) #12
  %0 = getelementptr inbounds %"core::option::Option<(core::ptr::non_null::NonNull<u8>, core::alloc::layout::Layout)>", ptr %_2, i32 0, i32 1
  %1 = load i32, ptr %0, align 4, !range !1, !noundef !0
  %2 = icmp eq i32 %1, 0
  %_4 = select i1 %2, i32 0, i32 1
  %3 = icmp eq i32 %_4, 1
  br i1 %3, label %bb2, label %bb4

bb2:                                              ; preds = %start
  %ptr = load ptr, ptr %_2, align 4, !nonnull !0, !noundef !0
  %4 = getelementptr inbounds { ptr, { i32, i32 } }, ptr %_2, i32 0, i32 1
  %5 = getelementptr inbounds { i32, i32 }, ptr %4, i32 0, i32 0
  %layout.0 = load i32, ptr %5, align 4
  %6 = getelementptr inbounds { i32, i32 }, ptr %4, i32 0, i32 1
  %layout.1 = load i32, ptr %6, align 4, !range !6, !noundef !0
; call <alloc::alloc::Global as core::alloc::Allocator>::deallocate
  call void @"_ZN63_$LT$alloc..alloc..Global$u20$as$u20$core..alloc..Allocator$GT$10deallocate17ha553b1eac1ea497aE"(ptr align 1 %self, ptr %ptr, i32 %layout.0, i32 %layout.1) #12
  br label %bb4

bb4:                                              ; preds = %bb2, %start
  ret void
}

; probe1::probe
; Function Attrs: nounwind
define hidden void @_ZN6probe15probe17h8a8a1c0f2ead04aaE() unnamed_addr #1 {
start:
  %_10 = alloca [1 x { ptr, ptr }], align 4
  %_3 = alloca %"core::fmt::Arguments<'_>", align 4
  %res = alloca %"alloc::string::String", align 4
  %_1 = alloca %"alloc::string::String", align 4
; call core::fmt::ArgumentV1::new_lower_exp
  %0 = call { ptr, ptr } @_ZN4core3fmt10ArgumentV113new_lower_exp17h4571bb8e023e0033E(ptr align 4 @alloc6) #12
  %_11.0 = extractvalue { ptr, ptr } %0, 0
  %_11.1 = extractvalue { ptr, ptr } %0, 1
  %1 = getelementptr inbounds [1 x { ptr, ptr }], ptr %_10, i32 0, i32 0
  %2 = getelementptr inbounds { ptr, ptr }, ptr %1, i32 0, i32 0
  store ptr %_11.0, ptr %2, align 4
  %3 = getelementptr inbounds { ptr, ptr }, ptr %1, i32 0, i32 1
  store ptr %_11.1, ptr %3, align 4
; call core::fmt::Arguments::new_v1
  call void @_ZN4core3fmt9Arguments6new_v117he4e22cad1dfdfe4cE(ptr sret(%"core::fmt::Arguments<'_>") %_3, ptr align 4 @alloc4, i32 1, ptr align 4 %_10, i32 1) #12
; call alloc::fmt::format
  call void @_ZN5alloc3fmt6format17h48e013bbf6a0ec4eE(ptr sret(%"alloc::string::String") %res, ptr %_3) #12
  call void @llvm.memcpy.p0.p0.i32(ptr align 4 %_1, ptr align 4 %res, i32 12, i1 false)
; call core::ptr::drop_in_place<alloc::string::String>
  call void @"_ZN4core3ptr42drop_in_place$LT$alloc..string..String$GT$17hc98dc5e56657c260E"(ptr %_1) #12
  ret void
}

; core::fmt::num::imp::<impl core::fmt::LowerExp for isize>::fmt
; Function Attrs: nounwind
declare dso_local zeroext i1 @"_ZN4core3fmt3num3imp55_$LT$impl$u20$core..fmt..LowerExp$u20$for$u20$isize$GT$3fmt17h50587cb98f9ce0a4E"(ptr align 4, ptr align 4) unnamed_addr #1

; core::panicking::panic_fmt
; Function Attrs: cold noinline noreturn nounwind
declare dso_local void @_ZN4core9panicking9panic_fmt17h9d972fcdb087ce21E(ptr, ptr align 4) unnamed_addr #3

; Function Attrs: argmemonly nocallback nofree nounwind willreturn
declare void @llvm.memcpy.p0.p0.i32(ptr noalias nocapture writeonly, ptr noalias nocapture readonly, i32, i1 immarg) #4

; Function Attrs: inaccessiblememonly nocallback nofree nosync nounwind willreturn
declare hidden void @llvm.assume(i1 noundef) #5

; Function Attrs: nocallback nofree nosync nounwind readnone willreturn
declare hidden i1 @llvm.expect.i1(i1, i1) #6

; core::panicking::panic
; Function Attrs: cold noinline noreturn nounwind
declare dso_local void @_ZN4core9panicking5panic17h364c37174a08a6a4E(ptr align 1, i32, ptr align 4) unnamed_addr #3

; alloc::fmt::format::format_inner
; Function Attrs: nounwind
declare dso_local void @_ZN5alloc3fmt6format12format_inner17h92d046d33b5f4798E(ptr sret(%"alloc::string::String"), ptr) unnamed_addr #1

; Function Attrs: nounwind allockind("alloc,zeroed,aligned") allocsize(0)
declare dso_local noalias ptr @__rust_alloc_zeroed(i32, i32 allocalign) unnamed_addr #7

; Function Attrs: nounwind allockind("alloc,uninitialized,aligned") allocsize(0)
declare dso_local noalias ptr @__rust_alloc(i32, i32 allocalign) unnamed_addr #8

; alloc::raw_vec::capacity_overflow
; Function Attrs: noreturn nounwind
declare dso_local void @_ZN5alloc7raw_vec17capacity_overflow17h9b8fdd50660a9bc3E() unnamed_addr #9

; alloc::alloc::handle_alloc_error
; Function Attrs: cold noreturn nounwind
declare dso_local void @_ZN5alloc5alloc18handle_alloc_error17h80087a6d84fb07bdE(i32, i32) unnamed_addr #10

; Function Attrs: nounwind allockind("free")
declare dso_local void @__rust_dealloc(ptr allocptr, i32, i32) unnamed_addr #11

attributes #0 = { inlinehint nounwind "target-cpu"="generic" }
attributes #1 = { nounwind "target-cpu"="generic" }
attributes #2 = { inlinehint noreturn nounwind "target-cpu"="generic" }
attributes #3 = { cold noinline noreturn nounwind "target-cpu"="generic" }
attributes #4 = { argmemonly nocallback nofree nounwind willreturn }
attributes #5 = { inaccessiblememonly nocallback nofree nosync nounwind willreturn }
attributes #6 = { nocallback nofree nosync nounwind readnone willreturn }
attributes #7 = { nounwind allockind("alloc,zeroed,aligned") allocsize(0) "alloc-family"="__rust_alloc" "target-cpu"="generic" }
attributes #8 = { nounwind allockind("alloc,uninitialized,aligned") allocsize(0) "alloc-family"="__rust_alloc" "target-cpu"="generic" }
attributes #9 = { noreturn nounwind "target-cpu"="generic" }
attributes #10 = { cold noreturn nounwind "target-cpu"="generic" }
attributes #11 = { nounwind allockind("free") "alloc-family"="__rust_alloc" "target-cpu"="generic" }
attributes #12 = { nounwind }
attributes #13 = { noreturn nounwind }

!0 = !{}
!1 = !{i32 0, i32 -2147483647}
!2 = !{i64 1}
!3 = !{i64 4}
!4 = !{i8 0, i8 2}
!5 = !{i8 0, i8 3}
!6 = !{i32 1, i32 -2147483647}
!7 = !{i32 0, i32 -2147483646}
