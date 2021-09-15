// https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ElastictranscoderPresetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#container ElastictranscoderPreset#container}
  */
  readonly container: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#description ElastictranscoderPreset#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#name ElastictranscoderPreset#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#type ElastictranscoderPreset#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#video_codec_options ElastictranscoderPreset#video_codec_options}
  */
  readonly videoCodecOptions?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * audio block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#audio ElastictranscoderPreset#audio}
  */
  readonly audio?: ElastictranscoderPresetAudio[];
  /**
  * audio_codec_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#audio_codec_options ElastictranscoderPreset#audio_codec_options}
  */
  readonly audioCodecOptions?: ElastictranscoderPresetAudioCodecOptions[];
  /**
  * thumbnails block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#thumbnails ElastictranscoderPreset#thumbnails}
  */
  readonly thumbnails?: ElastictranscoderPresetThumbnails[];
  /**
  * video block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#video ElastictranscoderPreset#video}
  */
  readonly video?: ElastictranscoderPresetVideo[];
  /**
  * video_watermarks block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#video_watermarks ElastictranscoderPreset#video_watermarks}
  */
  readonly videoWatermarks?: ElastictranscoderPresetVideoWatermarks[];
}
export interface ElastictranscoderPresetAudio {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#audio_packing_mode ElastictranscoderPreset#audio_packing_mode}
  */
  readonly audioPackingMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#bit_rate ElastictranscoderPreset#bit_rate}
  */
  readonly bitRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#channels ElastictranscoderPreset#channels}
  */
  readonly channels?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#codec ElastictranscoderPreset#codec}
  */
  readonly codec?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#sample_rate ElastictranscoderPreset#sample_rate}
  */
  readonly sampleRate?: string;
}

function elastictranscoderPresetAudioToTerraform(struct?: ElastictranscoderPresetAudio): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    audio_packing_mode: cdktf.stringToTerraform(struct!.audioPackingMode),
    bit_rate: cdktf.stringToTerraform(struct!.bitRate),
    channels: cdktf.stringToTerraform(struct!.channels),
    codec: cdktf.stringToTerraform(struct!.codec),
    sample_rate: cdktf.stringToTerraform(struct!.sampleRate),
  }
}

export interface ElastictranscoderPresetAudioCodecOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#bit_depth ElastictranscoderPreset#bit_depth}
  */
  readonly bitDepth?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#bit_order ElastictranscoderPreset#bit_order}
  */
  readonly bitOrder?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#profile ElastictranscoderPreset#profile}
  */
  readonly profile?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#signed ElastictranscoderPreset#signed}
  */
  readonly signed?: string;
}

function elastictranscoderPresetAudioCodecOptionsToTerraform(struct?: ElastictranscoderPresetAudioCodecOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bit_depth: cdktf.stringToTerraform(struct!.bitDepth),
    bit_order: cdktf.stringToTerraform(struct!.bitOrder),
    profile: cdktf.stringToTerraform(struct!.profile),
    signed: cdktf.stringToTerraform(struct!.signed),
  }
}

export interface ElastictranscoderPresetThumbnails {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#aspect_ratio ElastictranscoderPreset#aspect_ratio}
  */
  readonly aspectRatio?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#format ElastictranscoderPreset#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#interval ElastictranscoderPreset#interval}
  */
  readonly interval?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#max_height ElastictranscoderPreset#max_height}
  */
  readonly maxHeight?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#max_width ElastictranscoderPreset#max_width}
  */
  readonly maxWidth?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#padding_policy ElastictranscoderPreset#padding_policy}
  */
  readonly paddingPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#resolution ElastictranscoderPreset#resolution}
  */
  readonly resolution?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#sizing_policy ElastictranscoderPreset#sizing_policy}
  */
  readonly sizingPolicy?: string;
}

function elastictranscoderPresetThumbnailsToTerraform(struct?: ElastictranscoderPresetThumbnails): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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

export interface ElastictranscoderPresetVideo {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#aspect_ratio ElastictranscoderPreset#aspect_ratio}
  */
  readonly aspectRatio?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#bit_rate ElastictranscoderPreset#bit_rate}
  */
  readonly bitRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#codec ElastictranscoderPreset#codec}
  */
  readonly codec?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#display_aspect_ratio ElastictranscoderPreset#display_aspect_ratio}
  */
  readonly displayAspectRatio?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#fixed_gop ElastictranscoderPreset#fixed_gop}
  */
  readonly fixedGop?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#frame_rate ElastictranscoderPreset#frame_rate}
  */
  readonly frameRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#keyframes_max_dist ElastictranscoderPreset#keyframes_max_dist}
  */
  readonly keyframesMaxDist?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#max_frame_rate ElastictranscoderPreset#max_frame_rate}
  */
  readonly maxFrameRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#max_height ElastictranscoderPreset#max_height}
  */
  readonly maxHeight?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#max_width ElastictranscoderPreset#max_width}
  */
  readonly maxWidth?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#padding_policy ElastictranscoderPreset#padding_policy}
  */
  readonly paddingPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#resolution ElastictranscoderPreset#resolution}
  */
  readonly resolution?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#sizing_policy ElastictranscoderPreset#sizing_policy}
  */
  readonly sizingPolicy?: string;
}

function elastictranscoderPresetVideoToTerraform(struct?: ElastictranscoderPresetVideo): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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

export interface ElastictranscoderPresetVideoWatermarks {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#horizontal_align ElastictranscoderPreset#horizontal_align}
  */
  readonly horizontalAlign?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#horizontal_offset ElastictranscoderPreset#horizontal_offset}
  */
  readonly horizontalOffset?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#id ElastictranscoderPreset#id}
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#max_height ElastictranscoderPreset#max_height}
  */
  readonly maxHeight?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#max_width ElastictranscoderPreset#max_width}
  */
  readonly maxWidth?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#opacity ElastictranscoderPreset#opacity}
  */
  readonly opacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#sizing_policy ElastictranscoderPreset#sizing_policy}
  */
  readonly sizingPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#target ElastictranscoderPreset#target}
  */
  readonly target?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#vertical_align ElastictranscoderPreset#vertical_align}
  */
  readonly verticalAlign?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#vertical_offset ElastictranscoderPreset#vertical_offset}
  */
  readonly verticalOffset?: string;
}

function elastictranscoderPresetVideoWatermarksToTerraform(struct?: ElastictranscoderPresetVideoWatermarks): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html aws_elastictranscoder_preset}
*/
export class ElastictranscoderPreset extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_elastictranscoder_preset";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html aws_elastictranscoder_preset} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ElastictranscoderPresetConfig
  */
  public constructor(scope: Construct, id: string, config: ElastictranscoderPresetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_elastictranscoder_preset',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._container = config.container;
    this._description = config.description;
    this._name = config.name;
    this._type = config.type;
    this._videoCodecOptions = config.videoCodecOptions;
    this._audio = config.audio;
    this._audioCodecOptions = config.audioCodecOptions;
    this._thumbnails = config.thumbnails;
    this._video = config.video;
    this._videoWatermarks = config.videoWatermarks;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // container - computed: false, optional: false, required: true
  private _container: string;
  public get container() {
    return this.getStringAttribute('container');
  }
  public set container(value: string) {
    this._container = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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
    return this._name
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
    return this._type
  }

  // video_codec_options - computed: false, optional: true, required: false
  private _videoCodecOptions?: { [key: string]: string } | cdktf.IResolvable;
  public get videoCodecOptions() {
    return this.interpolationForAttribute('video_codec_options') as any;
  }
  public set videoCodecOptions(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._videoCodecOptions = value;
  }
  public resetVideoCodecOptions() {
    this._videoCodecOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoCodecOptionsInput() {
    return this._videoCodecOptions
  }

  // audio - computed: false, optional: true, required: false
  private _audio?: ElastictranscoderPresetAudio[];
  public get audio() {
    return this.interpolationForAttribute('audio') as any;
  }
  public set audio(value: ElastictranscoderPresetAudio[] ) {
    this._audio = value;
  }
  public resetAudio() {
    this._audio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioInput() {
    return this._audio
  }

  // audio_codec_options - computed: false, optional: true, required: false
  private _audioCodecOptions?: ElastictranscoderPresetAudioCodecOptions[];
  public get audioCodecOptions() {
    return this.interpolationForAttribute('audio_codec_options') as any;
  }
  public set audioCodecOptions(value: ElastictranscoderPresetAudioCodecOptions[] ) {
    this._audioCodecOptions = value;
  }
  public resetAudioCodecOptions() {
    this._audioCodecOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioCodecOptionsInput() {
    return this._audioCodecOptions
  }

  // thumbnails - computed: false, optional: true, required: false
  private _thumbnails?: ElastictranscoderPresetThumbnails[];
  public get thumbnails() {
    return this.interpolationForAttribute('thumbnails') as any;
  }
  public set thumbnails(value: ElastictranscoderPresetThumbnails[] ) {
    this._thumbnails = value;
  }
  public resetThumbnails() {
    this._thumbnails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thumbnailsInput() {
    return this._thumbnails
  }

  // video - computed: false, optional: true, required: false
  private _video?: ElastictranscoderPresetVideo[];
  public get video() {
    return this.interpolationForAttribute('video') as any;
  }
  public set video(value: ElastictranscoderPresetVideo[] ) {
    this._video = value;
  }
  public resetVideo() {
    this._video = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoInput() {
    return this._video
  }

  // video_watermarks - computed: false, optional: true, required: false
  private _videoWatermarks?: ElastictranscoderPresetVideoWatermarks[];
  public get videoWatermarks() {
    return this.interpolationForAttribute('video_watermarks') as any;
  }
  public set videoWatermarks(value: ElastictranscoderPresetVideoWatermarks[] ) {
    this._videoWatermarks = value;
  }
  public resetVideoWatermarks() {
    this._videoWatermarks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoWatermarksInput() {
    return this._videoWatermarks
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      container: cdktf.stringToTerraform(this._container),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      type: cdktf.stringToTerraform(this._type),
      video_codec_options: cdktf.hashMapper(cdktf.anyToTerraform)(this._videoCodecOptions),
      audio: cdktf.listMapper(elastictranscoderPresetAudioToTerraform)(this._audio),
      audio_codec_options: cdktf.listMapper(elastictranscoderPresetAudioCodecOptionsToTerraform)(this._audioCodecOptions),
      thumbnails: cdktf.listMapper(elastictranscoderPresetThumbnailsToTerraform)(this._thumbnails),
      video: cdktf.listMapper(elastictranscoderPresetVideoToTerraform)(this._video),
      video_watermarks: cdktf.listMapper(elastictranscoderPresetVideoWatermarksToTerraform)(this._videoWatermarks),
    };
  }
}
