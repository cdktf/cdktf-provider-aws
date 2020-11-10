// https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ElastictranscoderPresetConfig extends TerraformMetaArguments {
  readonly container: string;
  readonly description?: string;
  readonly name?: string;
  readonly type?: string;
  readonly videoCodecOptions?: { [key: string]: string };
  /** audio block */
  readonly audio?: ElastictranscoderPresetAudio[];
  /** audio_codec_options block */
  readonly audioCodecOptions?: ElastictranscoderPresetAudioCodecOptions[];
  /** thumbnails block */
  readonly thumbnails?: ElastictranscoderPresetThumbnails[];
  /** video block */
  readonly video?: ElastictranscoderPresetVideo[];
  /** video_watermarks block */
  readonly videoWatermarks?: ElastictranscoderPresetVideoWatermarks[];
}
export interface ElastictranscoderPresetAudio {
  readonly audioPackingMode?: string;
  readonly bitRate?: string;
  readonly channels?: string;
  readonly codec?: string;
  readonly sampleRate?: string;
}
export interface ElastictranscoderPresetAudioCodecOptions {
  readonly bitDepth?: string;
  readonly bitOrder?: string;
  readonly profile?: string;
  readonly signed?: string;
}
export interface ElastictranscoderPresetThumbnails {
  readonly aspectRatio?: string;
  readonly format?: string;
  readonly interval?: string;
  readonly maxHeight?: string;
  readonly maxWidth?: string;
  readonly paddingPolicy?: string;
  readonly resolution?: string;
  readonly sizingPolicy?: string;
}
export interface ElastictranscoderPresetVideo {
  readonly aspectRatio?: string;
  readonly bitRate?: string;
  readonly codec?: string;
  readonly displayAspectRatio?: string;
  readonly fixedGop?: string;
  readonly frameRate?: string;
  readonly keyframesMaxDist?: string;
  readonly maxFrameRate?: string;
  readonly maxHeight?: string;
  readonly maxWidth?: string;
  readonly paddingPolicy?: string;
  readonly resolution?: string;
  readonly sizingPolicy?: string;
}
export interface ElastictranscoderPresetVideoWatermarks {
  readonly horizontalAlign?: string;
  readonly horizontalOffset?: string;
  readonly id?: string;
  readonly maxHeight?: string;
  readonly maxWidth?: string;
  readonly opacity?: string;
  readonly sizingPolicy?: string;
  readonly target?: string;
  readonly verticalAlign?: string;
  readonly verticalOffset?: string;
}

// Resource

export class ElastictranscoderPreset extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _videoCodecOptions?: { [key: string]: string };
  public get videoCodecOptions() {
    return this.interpolationForAttribute('video_codec_options') as any;
  }
  public set videoCodecOptions(value: { [key: string]: string } ) {
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
      container: this._container,
      description: this._description,
      name: this._name,
      type: this._type,
      video_codec_options: this._videoCodecOptions,
      audio: this._audio,
      audio_codec_options: this._audioCodecOptions,
      thumbnails: this._thumbnails,
      video: this._video,
      video_watermarks: this._videoWatermarks,
    };
  }
}
