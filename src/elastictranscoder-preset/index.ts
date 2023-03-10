// https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ElastictranscoderPresetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#container ElastictranscoderPreset#container}
  */
  readonly container: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#description ElastictranscoderPreset#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#id ElastictranscoderPreset#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#name ElastictranscoderPreset#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#type ElastictranscoderPreset#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#video_codec_options ElastictranscoderPreset#video_codec_options}
  */
  readonly videoCodecOptions?: { [key: string]: string };
  /**
  * audio block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#audio ElastictranscoderPreset#audio}
  */
  readonly audio?: ElastictranscoderPresetAudio;
  /**
  * audio_codec_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#audio_codec_options ElastictranscoderPreset#audio_codec_options}
  */
  readonly audioCodecOptions?: ElastictranscoderPresetAudioCodecOptions;
  /**
  * thumbnails block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#thumbnails ElastictranscoderPreset#thumbnails}
  */
  readonly thumbnails?: ElastictranscoderPresetThumbnails;
  /**
  * video block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#video ElastictranscoderPreset#video}
  */
  readonly video?: ElastictranscoderPresetVideo;
  /**
  * video_watermarks block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#video_watermarks ElastictranscoderPreset#video_watermarks}
  */
  readonly videoWatermarks?: ElastictranscoderPresetVideoWatermarks[] | cdktf.IResolvable;
}
export interface ElastictranscoderPresetAudio {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#audio_packing_mode ElastictranscoderPreset#audio_packing_mode}
  */
  readonly audioPackingMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#bit_rate ElastictranscoderPreset#bit_rate}
  */
  readonly bitRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#channels ElastictranscoderPreset#channels}
  */
  readonly channels?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#codec ElastictranscoderPreset#codec}
  */
  readonly codec?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#sample_rate ElastictranscoderPreset#sample_rate}
  */
  readonly sampleRate?: string;
}

export function elastictranscoderPresetAudioToTerraform(struct?: ElastictranscoderPresetAudioOutputReference | ElastictranscoderPresetAudio): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audio_packing_mode: cdktf.stringToTerraform(struct!.audioPackingMode),
    bit_rate: cdktf.stringToTerraform(struct!.bitRate),
    channels: cdktf.stringToTerraform(struct!.channels),
    codec: cdktf.stringToTerraform(struct!.codec),
    sample_rate: cdktf.stringToTerraform(struct!.sampleRate),
  }
}

export class ElastictranscoderPresetAudioOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastictranscoderPresetAudio | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audioPackingMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.audioPackingMode = this._audioPackingMode;
    }
    if (this._bitRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.bitRate = this._bitRate;
    }
    if (this._channels !== undefined) {
      hasAnyValues = true;
      internalValueResult.channels = this._channels;
    }
    if (this._codec !== undefined) {
      hasAnyValues = true;
      internalValueResult.codec = this._codec;
    }
    if (this._sampleRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampleRate = this._sampleRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastictranscoderPresetAudio | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audioPackingMode = undefined;
      this._bitRate = undefined;
      this._channels = undefined;
      this._codec = undefined;
      this._sampleRate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audioPackingMode = value.audioPackingMode;
      this._bitRate = value.bitRate;
      this._channels = value.channels;
      this._codec = value.codec;
      this._sampleRate = value.sampleRate;
    }
  }

  // audio_packing_mode - computed: false, optional: true, required: false
  private _audioPackingMode?: string; 
  public get audioPackingMode() {
    return this.getStringAttribute('audio_packing_mode');
  }
  public set audioPackingMode(value: string) {
    this._audioPackingMode = value;
  }
  public resetAudioPackingMode() {
    this._audioPackingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioPackingModeInput() {
    return this._audioPackingMode;
  }

  // bit_rate - computed: true, optional: true, required: false
  private _bitRate?: string; 
  public get bitRate() {
    return this.getStringAttribute('bit_rate');
  }
  public set bitRate(value: string) {
    this._bitRate = value;
  }
  public resetBitRate() {
    this._bitRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bitRateInput() {
    return this._bitRate;
  }

  // channels - computed: false, optional: true, required: false
  private _channels?: string; 
  public get channels() {
    return this.getStringAttribute('channels');
  }
  public set channels(value: string) {
    this._channels = value;
  }
  public resetChannels() {
    this._channels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelsInput() {
    return this._channels;
  }

  // codec - computed: false, optional: true, required: false
  private _codec?: string; 
  public get codec() {
    return this.getStringAttribute('codec');
  }
  public set codec(value: string) {
    this._codec = value;
  }
  public resetCodec() {
    this._codec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codecInput() {
    return this._codec;
  }

  // sample_rate - computed: false, optional: true, required: false
  private _sampleRate?: string; 
  public get sampleRate() {
    return this.getStringAttribute('sample_rate');
  }
  public set sampleRate(value: string) {
    this._sampleRate = value;
  }
  public resetSampleRate() {
    this._sampleRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleRateInput() {
    return this._sampleRate;
  }
}
export interface ElastictranscoderPresetAudioCodecOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#bit_depth ElastictranscoderPreset#bit_depth}
  */
  readonly bitDepth?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#bit_order ElastictranscoderPreset#bit_order}
  */
  readonly bitOrder?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#profile ElastictranscoderPreset#profile}
  */
  readonly profile?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#signed ElastictranscoderPreset#signed}
  */
  readonly signed?: string;
}

export function elastictranscoderPresetAudioCodecOptionsToTerraform(struct?: ElastictranscoderPresetAudioCodecOptionsOutputReference | ElastictranscoderPresetAudioCodecOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bit_depth: cdktf.stringToTerraform(struct!.bitDepth),
    bit_order: cdktf.stringToTerraform(struct!.bitOrder),
    profile: cdktf.stringToTerraform(struct!.profile),
    signed: cdktf.stringToTerraform(struct!.signed),
  }
}

export class ElastictranscoderPresetAudioCodecOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastictranscoderPresetAudioCodecOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bitDepth !== undefined) {
      hasAnyValues = true;
      internalValueResult.bitDepth = this._bitDepth;
    }
    if (this._bitOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.bitOrder = this._bitOrder;
    }
    if (this._profile !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile;
    }
    if (this._signed !== undefined) {
      hasAnyValues = true;
      internalValueResult.signed = this._signed;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastictranscoderPresetAudioCodecOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bitDepth = undefined;
      this._bitOrder = undefined;
      this._profile = undefined;
      this._signed = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bitDepth = value.bitDepth;
      this._bitOrder = value.bitOrder;
      this._profile = value.profile;
      this._signed = value.signed;
    }
  }

  // bit_depth - computed: true, optional: true, required: false
  private _bitDepth?: string; 
  public get bitDepth() {
    return this.getStringAttribute('bit_depth');
  }
  public set bitDepth(value: string) {
    this._bitDepth = value;
  }
  public resetBitDepth() {
    this._bitDepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bitDepthInput() {
    return this._bitDepth;
  }

  // bit_order - computed: true, optional: true, required: false
  private _bitOrder?: string; 
  public get bitOrder() {
    return this.getStringAttribute('bit_order');
  }
  public set bitOrder(value: string) {
    this._bitOrder = value;
  }
  public resetBitOrder() {
    this._bitOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bitOrderInput() {
    return this._bitOrder;
  }

  // profile - computed: true, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }

  // signed - computed: true, optional: true, required: false
  private _signed?: string; 
  public get signed() {
    return this.getStringAttribute('signed');
  }
  public set signed(value: string) {
    this._signed = value;
  }
  public resetSigned() {
    this._signed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signedInput() {
    return this._signed;
  }
}
export interface ElastictranscoderPresetThumbnails {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#aspect_ratio ElastictranscoderPreset#aspect_ratio}
  */
  readonly aspectRatio?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#format ElastictranscoderPreset#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#interval ElastictranscoderPreset#interval}
  */
  readonly interval?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#max_height ElastictranscoderPreset#max_height}
  */
  readonly maxHeight?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#max_width ElastictranscoderPreset#max_width}
  */
  readonly maxWidth?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#padding_policy ElastictranscoderPreset#padding_policy}
  */
  readonly paddingPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#resolution ElastictranscoderPreset#resolution}
  */
  readonly resolution?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#sizing_policy ElastictranscoderPreset#sizing_policy}
  */
  readonly sizingPolicy?: string;
}

export function elastictranscoderPresetThumbnailsToTerraform(struct?: ElastictranscoderPresetThumbnailsOutputReference | ElastictranscoderPresetThumbnails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aspect_ratio: cdktf.stringToTerraform(struct!.aspectRatio),
    format: cdktf.stringToTerraform(struct!.format),
    interval: cdktf.stringToTerraform(struct!.interval),
    max_height: cdktf.stringToTerraform(struct!.maxHeight),
    max_width: cdktf.stringToTerraform(struct!.maxWidth),
    padding_policy: cdktf.stringToTerraform(struct!.paddingPolicy),
    resolution: cdktf.stringToTerraform(struct!.resolution),
    sizing_policy: cdktf.stringToTerraform(struct!.sizingPolicy),
  }
}

export class ElastictranscoderPresetThumbnailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastictranscoderPresetThumbnails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aspectRatio !== undefined) {
      hasAnyValues = true;
      internalValueResult.aspectRatio = this._aspectRatio;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._maxHeight !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxHeight = this._maxHeight;
    }
    if (this._maxWidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxWidth = this._maxWidth;
    }
    if (this._paddingPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.paddingPolicy = this._paddingPolicy;
    }
    if (this._resolution !== undefined) {
      hasAnyValues = true;
      internalValueResult.resolution = this._resolution;
    }
    if (this._sizingPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizingPolicy = this._sizingPolicy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastictranscoderPresetThumbnails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aspectRatio = undefined;
      this._format = undefined;
      this._interval = undefined;
      this._maxHeight = undefined;
      this._maxWidth = undefined;
      this._paddingPolicy = undefined;
      this._resolution = undefined;
      this._sizingPolicy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aspectRatio = value.aspectRatio;
      this._format = value.format;
      this._interval = value.interval;
      this._maxHeight = value.maxHeight;
      this._maxWidth = value.maxWidth;
      this._paddingPolicy = value.paddingPolicy;
      this._resolution = value.resolution;
      this._sizingPolicy = value.sizingPolicy;
    }
  }

  // aspect_ratio - computed: false, optional: true, required: false
  private _aspectRatio?: string; 
  public get aspectRatio() {
    return this.getStringAttribute('aspect_ratio');
  }
  public set aspectRatio(value: string) {
    this._aspectRatio = value;
  }
  public resetAspectRatio() {
    this._aspectRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aspectRatioInput() {
    return this._aspectRatio;
  }

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // max_height - computed: false, optional: true, required: false
  private _maxHeight?: string; 
  public get maxHeight() {
    return this.getStringAttribute('max_height');
  }
  public set maxHeight(value: string) {
    this._maxHeight = value;
  }
  public resetMaxHeight() {
    this._maxHeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxHeightInput() {
    return this._maxHeight;
  }

  // max_width - computed: false, optional: true, required: false
  private _maxWidth?: string; 
  public get maxWidth() {
    return this.getStringAttribute('max_width');
  }
  public set maxWidth(value: string) {
    this._maxWidth = value;
  }
  public resetMaxWidth() {
    this._maxWidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxWidthInput() {
    return this._maxWidth;
  }

  // padding_policy - computed: false, optional: true, required: false
  private _paddingPolicy?: string; 
  public get paddingPolicy() {
    return this.getStringAttribute('padding_policy');
  }
  public set paddingPolicy(value: string) {
    this._paddingPolicy = value;
  }
  public resetPaddingPolicy() {
    this._paddingPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paddingPolicyInput() {
    return this._paddingPolicy;
  }

  // resolution - computed: false, optional: true, required: false
  private _resolution?: string; 
  public get resolution() {
    return this.getStringAttribute('resolution');
  }
  public set resolution(value: string) {
    this._resolution = value;
  }
  public resetResolution() {
    this._resolution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolutionInput() {
    return this._resolution;
  }

  // sizing_policy - computed: false, optional: true, required: false
  private _sizingPolicy?: string; 
  public get sizingPolicy() {
    return this.getStringAttribute('sizing_policy');
  }
  public set sizingPolicy(value: string) {
    this._sizingPolicy = value;
  }
  public resetSizingPolicy() {
    this._sizingPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizingPolicyInput() {
    return this._sizingPolicy;
  }
}
export interface ElastictranscoderPresetVideo {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#aspect_ratio ElastictranscoderPreset#aspect_ratio}
  */
  readonly aspectRatio?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#bit_rate ElastictranscoderPreset#bit_rate}
  */
  readonly bitRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#codec ElastictranscoderPreset#codec}
  */
  readonly codec?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#display_aspect_ratio ElastictranscoderPreset#display_aspect_ratio}
  */
  readonly displayAspectRatio?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#fixed_gop ElastictranscoderPreset#fixed_gop}
  */
  readonly fixedGop?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#frame_rate ElastictranscoderPreset#frame_rate}
  */
  readonly frameRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#keyframes_max_dist ElastictranscoderPreset#keyframes_max_dist}
  */
  readonly keyframesMaxDist?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#max_frame_rate ElastictranscoderPreset#max_frame_rate}
  */
  readonly maxFrameRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#max_height ElastictranscoderPreset#max_height}
  */
  readonly maxHeight?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#max_width ElastictranscoderPreset#max_width}
  */
  readonly maxWidth?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#padding_policy ElastictranscoderPreset#padding_policy}
  */
  readonly paddingPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#resolution ElastictranscoderPreset#resolution}
  */
  readonly resolution?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#sizing_policy ElastictranscoderPreset#sizing_policy}
  */
  readonly sizingPolicy?: string;
}

export function elastictranscoderPresetVideoToTerraform(struct?: ElastictranscoderPresetVideoOutputReference | ElastictranscoderPresetVideo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aspect_ratio: cdktf.stringToTerraform(struct!.aspectRatio),
    bit_rate: cdktf.stringToTerraform(struct!.bitRate),
    codec: cdktf.stringToTerraform(struct!.codec),
    display_aspect_ratio: cdktf.stringToTerraform(struct!.displayAspectRatio),
    fixed_gop: cdktf.stringToTerraform(struct!.fixedGop),
    frame_rate: cdktf.stringToTerraform(struct!.frameRate),
    keyframes_max_dist: cdktf.stringToTerraform(struct!.keyframesMaxDist),
    max_frame_rate: cdktf.stringToTerraform(struct!.maxFrameRate),
    max_height: cdktf.stringToTerraform(struct!.maxHeight),
    max_width: cdktf.stringToTerraform(struct!.maxWidth),
    padding_policy: cdktf.stringToTerraform(struct!.paddingPolicy),
    resolution: cdktf.stringToTerraform(struct!.resolution),
    sizing_policy: cdktf.stringToTerraform(struct!.sizingPolicy),
  }
}

export class ElastictranscoderPresetVideoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElastictranscoderPresetVideo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aspectRatio !== undefined) {
      hasAnyValues = true;
      internalValueResult.aspectRatio = this._aspectRatio;
    }
    if (this._bitRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.bitRate = this._bitRate;
    }
    if (this._codec !== undefined) {
      hasAnyValues = true;
      internalValueResult.codec = this._codec;
    }
    if (this._displayAspectRatio !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayAspectRatio = this._displayAspectRatio;
    }
    if (this._fixedGop !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedGop = this._fixedGop;
    }
    if (this._frameRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.frameRate = this._frameRate;
    }
    if (this._keyframesMaxDist !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyframesMaxDist = this._keyframesMaxDist;
    }
    if (this._maxFrameRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxFrameRate = this._maxFrameRate;
    }
    if (this._maxHeight !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxHeight = this._maxHeight;
    }
    if (this._maxWidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxWidth = this._maxWidth;
    }
    if (this._paddingPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.paddingPolicy = this._paddingPolicy;
    }
    if (this._resolution !== undefined) {
      hasAnyValues = true;
      internalValueResult.resolution = this._resolution;
    }
    if (this._sizingPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizingPolicy = this._sizingPolicy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastictranscoderPresetVideo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aspectRatio = undefined;
      this._bitRate = undefined;
      this._codec = undefined;
      this._displayAspectRatio = undefined;
      this._fixedGop = undefined;
      this._frameRate = undefined;
      this._keyframesMaxDist = undefined;
      this._maxFrameRate = undefined;
      this._maxHeight = undefined;
      this._maxWidth = undefined;
      this._paddingPolicy = undefined;
      this._resolution = undefined;
      this._sizingPolicy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aspectRatio = value.aspectRatio;
      this._bitRate = value.bitRate;
      this._codec = value.codec;
      this._displayAspectRatio = value.displayAspectRatio;
      this._fixedGop = value.fixedGop;
      this._frameRate = value.frameRate;
      this._keyframesMaxDist = value.keyframesMaxDist;
      this._maxFrameRate = value.maxFrameRate;
      this._maxHeight = value.maxHeight;
      this._maxWidth = value.maxWidth;
      this._paddingPolicy = value.paddingPolicy;
      this._resolution = value.resolution;
      this._sizingPolicy = value.sizingPolicy;
    }
  }

  // aspect_ratio - computed: false, optional: true, required: false
  private _aspectRatio?: string; 
  public get aspectRatio() {
    return this.getStringAttribute('aspect_ratio');
  }
  public set aspectRatio(value: string) {
    this._aspectRatio = value;
  }
  public resetAspectRatio() {
    this._aspectRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aspectRatioInput() {
    return this._aspectRatio;
  }

  // bit_rate - computed: true, optional: true, required: false
  private _bitRate?: string; 
  public get bitRate() {
    return this.getStringAttribute('bit_rate');
  }
  public set bitRate(value: string) {
    this._bitRate = value;
  }
  public resetBitRate() {
    this._bitRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bitRateInput() {
    return this._bitRate;
  }

  // codec - computed: false, optional: true, required: false
  private _codec?: string; 
  public get codec() {
    return this.getStringAttribute('codec');
  }
  public set codec(value: string) {
    this._codec = value;
  }
  public resetCodec() {
    this._codec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codecInput() {
    return this._codec;
  }

  // display_aspect_ratio - computed: false, optional: true, required: false
  private _displayAspectRatio?: string; 
  public get displayAspectRatio() {
    return this.getStringAttribute('display_aspect_ratio');
  }
  public set displayAspectRatio(value: string) {
    this._displayAspectRatio = value;
  }
  public resetDisplayAspectRatio() {
    this._displayAspectRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayAspectRatioInput() {
    return this._displayAspectRatio;
  }

  // fixed_gop - computed: false, optional: true, required: false
  private _fixedGop?: string; 
  public get fixedGop() {
    return this.getStringAttribute('fixed_gop');
  }
  public set fixedGop(value: string) {
    this._fixedGop = value;
  }
  public resetFixedGop() {
    this._fixedGop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedGopInput() {
    return this._fixedGop;
  }

  // frame_rate - computed: false, optional: true, required: false
  private _frameRate?: string; 
  public get frameRate() {
    return this.getStringAttribute('frame_rate');
  }
  public set frameRate(value: string) {
    this._frameRate = value;
  }
  public resetFrameRate() {
    this._frameRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frameRateInput() {
    return this._frameRate;
  }

  // keyframes_max_dist - computed: false, optional: true, required: false
  private _keyframesMaxDist?: string; 
  public get keyframesMaxDist() {
    return this.getStringAttribute('keyframes_max_dist');
  }
  public set keyframesMaxDist(value: string) {
    this._keyframesMaxDist = value;
  }
  public resetKeyframesMaxDist() {
    this._keyframesMaxDist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyframesMaxDistInput() {
    return this._keyframesMaxDist;
  }

  // max_frame_rate - computed: true, optional: true, required: false
  private _maxFrameRate?: string; 
  public get maxFrameRate() {
    return this.getStringAttribute('max_frame_rate');
  }
  public set maxFrameRate(value: string) {
    this._maxFrameRate = value;
  }
  public resetMaxFrameRate() {
    this._maxFrameRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxFrameRateInput() {
    return this._maxFrameRate;
  }

  // max_height - computed: false, optional: true, required: false
  private _maxHeight?: string; 
  public get maxHeight() {
    return this.getStringAttribute('max_height');
  }
  public set maxHeight(value: string) {
    this._maxHeight = value;
  }
  public resetMaxHeight() {
    this._maxHeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxHeightInput() {
    return this._maxHeight;
  }

  // max_width - computed: false, optional: true, required: false
  private _maxWidth?: string; 
  public get maxWidth() {
    return this.getStringAttribute('max_width');
  }
  public set maxWidth(value: string) {
    this._maxWidth = value;
  }
  public resetMaxWidth() {
    this._maxWidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxWidthInput() {
    return this._maxWidth;
  }

  // padding_policy - computed: false, optional: true, required: false
  private _paddingPolicy?: string; 
  public get paddingPolicy() {
    return this.getStringAttribute('padding_policy');
  }
  public set paddingPolicy(value: string) {
    this._paddingPolicy = value;
  }
  public resetPaddingPolicy() {
    this._paddingPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paddingPolicyInput() {
    return this._paddingPolicy;
  }

  // resolution - computed: false, optional: true, required: false
  private _resolution?: string; 
  public get resolution() {
    return this.getStringAttribute('resolution');
  }
  public set resolution(value: string) {
    this._resolution = value;
  }
  public resetResolution() {
    this._resolution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolutionInput() {
    return this._resolution;
  }

  // sizing_policy - computed: false, optional: true, required: false
  private _sizingPolicy?: string; 
  public get sizingPolicy() {
    return this.getStringAttribute('sizing_policy');
  }
  public set sizingPolicy(value: string) {
    this._sizingPolicy = value;
  }
  public resetSizingPolicy() {
    this._sizingPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizingPolicyInput() {
    return this._sizingPolicy;
  }
}
export interface ElastictranscoderPresetVideoWatermarks {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#horizontal_align ElastictranscoderPreset#horizontal_align}
  */
  readonly horizontalAlign?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#horizontal_offset ElastictranscoderPreset#horizontal_offset}
  */
  readonly horizontalOffset?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#id ElastictranscoderPreset#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#max_height ElastictranscoderPreset#max_height}
  */
  readonly maxHeight?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#max_width ElastictranscoderPreset#max_width}
  */
  readonly maxWidth?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#opacity ElastictranscoderPreset#opacity}
  */
  readonly opacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#sizing_policy ElastictranscoderPreset#sizing_policy}
  */
  readonly sizingPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#target ElastictranscoderPreset#target}
  */
  readonly target?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#vertical_align ElastictranscoderPreset#vertical_align}
  */
  readonly verticalAlign?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset#vertical_offset ElastictranscoderPreset#vertical_offset}
  */
  readonly verticalOffset?: string;
}

export function elastictranscoderPresetVideoWatermarksToTerraform(struct?: ElastictranscoderPresetVideoWatermarks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    horizontal_align: cdktf.stringToTerraform(struct!.horizontalAlign),
    horizontal_offset: cdktf.stringToTerraform(struct!.horizontalOffset),
    id: cdktf.stringToTerraform(struct!.id),
    max_height: cdktf.stringToTerraform(struct!.maxHeight),
    max_width: cdktf.stringToTerraform(struct!.maxWidth),
    opacity: cdktf.stringToTerraform(struct!.opacity),
    sizing_policy: cdktf.stringToTerraform(struct!.sizingPolicy),
    target: cdktf.stringToTerraform(struct!.target),
    vertical_align: cdktf.stringToTerraform(struct!.verticalAlign),
    vertical_offset: cdktf.stringToTerraform(struct!.verticalOffset),
  }
}

export class ElastictranscoderPresetVideoWatermarksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ElastictranscoderPresetVideoWatermarks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._horizontalAlign !== undefined) {
      hasAnyValues = true;
      internalValueResult.horizontalAlign = this._horizontalAlign;
    }
    if (this._horizontalOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.horizontalOffset = this._horizontalOffset;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._maxHeight !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxHeight = this._maxHeight;
    }
    if (this._maxWidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxWidth = this._maxWidth;
    }
    if (this._opacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.opacity = this._opacity;
    }
    if (this._sizingPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizingPolicy = this._sizingPolicy;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._verticalAlign !== undefined) {
      hasAnyValues = true;
      internalValueResult.verticalAlign = this._verticalAlign;
    }
    if (this._verticalOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.verticalOffset = this._verticalOffset;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastictranscoderPresetVideoWatermarks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._horizontalAlign = undefined;
      this._horizontalOffset = undefined;
      this._id = undefined;
      this._maxHeight = undefined;
      this._maxWidth = undefined;
      this._opacity = undefined;
      this._sizingPolicy = undefined;
      this._target = undefined;
      this._verticalAlign = undefined;
      this._verticalOffset = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._horizontalAlign = value.horizontalAlign;
      this._horizontalOffset = value.horizontalOffset;
      this._id = value.id;
      this._maxHeight = value.maxHeight;
      this._maxWidth = value.maxWidth;
      this._opacity = value.opacity;
      this._sizingPolicy = value.sizingPolicy;
      this._target = value.target;
      this._verticalAlign = value.verticalAlign;
      this._verticalOffset = value.verticalOffset;
    }
  }

  // horizontal_align - computed: false, optional: true, required: false
  private _horizontalAlign?: string; 
  public get horizontalAlign() {
    return this.getStringAttribute('horizontal_align');
  }
  public set horizontalAlign(value: string) {
    this._horizontalAlign = value;
  }
  public resetHorizontalAlign() {
    this._horizontalAlign = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get horizontalAlignInput() {
    return this._horizontalAlign;
  }

  // horizontal_offset - computed: false, optional: true, required: false
  private _horizontalOffset?: string; 
  public get horizontalOffset() {
    return this.getStringAttribute('horizontal_offset');
  }
  public set horizontalOffset(value: string) {
    this._horizontalOffset = value;
  }
  public resetHorizontalOffset() {
    this._horizontalOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get horizontalOffsetInput() {
    return this._horizontalOffset;
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // max_height - computed: false, optional: true, required: false
  private _maxHeight?: string; 
  public get maxHeight() {
    return this.getStringAttribute('max_height');
  }
  public set maxHeight(value: string) {
    this._maxHeight = value;
  }
  public resetMaxHeight() {
    this._maxHeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxHeightInput() {
    return this._maxHeight;
  }

  // max_width - computed: false, optional: true, required: false
  private _maxWidth?: string; 
  public get maxWidth() {
    return this.getStringAttribute('max_width');
  }
  public set maxWidth(value: string) {
    this._maxWidth = value;
  }
  public resetMaxWidth() {
    this._maxWidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxWidthInput() {
    return this._maxWidth;
  }

  // opacity - computed: false, optional: true, required: false
  private _opacity?: string; 
  public get opacity() {
    return this.getStringAttribute('opacity');
  }
  public set opacity(value: string) {
    this._opacity = value;
  }
  public resetOpacity() {
    this._opacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opacityInput() {
    return this._opacity;
  }

  // sizing_policy - computed: false, optional: true, required: false
  private _sizingPolicy?: string; 
  public get sizingPolicy() {
    return this.getStringAttribute('sizing_policy');
  }
  public set sizingPolicy(value: string) {
    this._sizingPolicy = value;
  }
  public resetSizingPolicy() {
    this._sizingPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizingPolicyInput() {
    return this._sizingPolicy;
  }

  // target - computed: false, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // vertical_align - computed: false, optional: true, required: false
  private _verticalAlign?: string; 
  public get verticalAlign() {
    return this.getStringAttribute('vertical_align');
  }
  public set verticalAlign(value: string) {
    this._verticalAlign = value;
  }
  public resetVerticalAlign() {
    this._verticalAlign = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verticalAlignInput() {
    return this._verticalAlign;
  }

  // vertical_offset - computed: false, optional: true, required: false
  private _verticalOffset?: string; 
  public get verticalOffset() {
    return this.getStringAttribute('vertical_offset');
  }
  public set verticalOffset(value: string) {
    this._verticalOffset = value;
  }
  public resetVerticalOffset() {
    this._verticalOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verticalOffsetInput() {
    return this._verticalOffset;
  }
}

export class ElastictranscoderPresetVideoWatermarksList extends cdktf.ComplexList {
  public internalValue? : ElastictranscoderPresetVideoWatermarks[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ElastictranscoderPresetVideoWatermarksOutputReference {
    return new ElastictranscoderPresetVideoWatermarksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset aws_elastictranscoder_preset}
*/
export class ElastictranscoderPreset extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_elastictranscoder_preset";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset aws_elastictranscoder_preset} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ElastictranscoderPresetConfig
  */
  public constructor(scope: Construct, id: string, config: ElastictranscoderPresetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_elastictranscoder_preset',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.58.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._container = config.container;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._type = config.type;
    this._videoCodecOptions = config.videoCodecOptions;
    this._audio.internalValue = config.audio;
    this._audioCodecOptions.internalValue = config.audioCodecOptions;
    this._thumbnails.internalValue = config.thumbnails;
    this._video.internalValue = config.video;
    this._videoWatermarks.internalValue = config.videoWatermarks;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // container - computed: false, optional: false, required: true
  private _container?: string; 
  public get container() {
    return this.getStringAttribute('container');
  }
  public set container(value: string) {
    this._container = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // video_codec_options - computed: false, optional: true, required: false
  private _videoCodecOptions?: { [key: string]: string }; 
  public get videoCodecOptions() {
    return this.getStringMapAttribute('video_codec_options');
  }
  public set videoCodecOptions(value: { [key: string]: string }) {
    this._videoCodecOptions = value;
  }
  public resetVideoCodecOptions() {
    this._videoCodecOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoCodecOptionsInput() {
    return this._videoCodecOptions;
  }

  // audio - computed: false, optional: true, required: false
  private _audio = new ElastictranscoderPresetAudioOutputReference(this, "audio");
  public get audio() {
    return this._audio;
  }
  public putAudio(value: ElastictranscoderPresetAudio) {
    this._audio.internalValue = value;
  }
  public resetAudio() {
    this._audio.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioInput() {
    return this._audio.internalValue;
  }

  // audio_codec_options - computed: false, optional: true, required: false
  private _audioCodecOptions = new ElastictranscoderPresetAudioCodecOptionsOutputReference(this, "audio_codec_options");
  public get audioCodecOptions() {
    return this._audioCodecOptions;
  }
  public putAudioCodecOptions(value: ElastictranscoderPresetAudioCodecOptions) {
    this._audioCodecOptions.internalValue = value;
  }
  public resetAudioCodecOptions() {
    this._audioCodecOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioCodecOptionsInput() {
    return this._audioCodecOptions.internalValue;
  }

  // thumbnails - computed: false, optional: true, required: false
  private _thumbnails = new ElastictranscoderPresetThumbnailsOutputReference(this, "thumbnails");
  public get thumbnails() {
    return this._thumbnails;
  }
  public putThumbnails(value: ElastictranscoderPresetThumbnails) {
    this._thumbnails.internalValue = value;
  }
  public resetThumbnails() {
    this._thumbnails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thumbnailsInput() {
    return this._thumbnails.internalValue;
  }

  // video - computed: false, optional: true, required: false
  private _video = new ElastictranscoderPresetVideoOutputReference(this, "video");
  public get video() {
    return this._video;
  }
  public putVideo(value: ElastictranscoderPresetVideo) {
    this._video.internalValue = value;
  }
  public resetVideo() {
    this._video.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoInput() {
    return this._video.internalValue;
  }

  // video_watermarks - computed: false, optional: true, required: false
  private _videoWatermarks = new ElastictranscoderPresetVideoWatermarksList(this, "video_watermarks", true);
  public get videoWatermarks() {
    return this._videoWatermarks;
  }
  public putVideoWatermarks(value: ElastictranscoderPresetVideoWatermarks[] | cdktf.IResolvable) {
    this._videoWatermarks.internalValue = value;
  }
  public resetVideoWatermarks() {
    this._videoWatermarks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoWatermarksInput() {
    return this._videoWatermarks.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      container: cdktf.stringToTerraform(this._container),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      type: cdktf.stringToTerraform(this._type),
      video_codec_options: cdktf.hashMapper(cdktf.stringToTerraform)(this._videoCodecOptions),
      audio: elastictranscoderPresetAudioToTerraform(this._audio.internalValue),
      audio_codec_options: elastictranscoderPresetAudioCodecOptionsToTerraform(this._audioCodecOptions.internalValue),
      thumbnails: elastictranscoderPresetThumbnailsToTerraform(this._thumbnails.internalValue),
      video: elastictranscoderPresetVideoToTerraform(this._video.internalValue),
      video_watermarks: cdktf.listMapper(elastictranscoderPresetVideoWatermarksToTerraform, true)(this._videoWatermarks.internalValue),
    };
  }
}
