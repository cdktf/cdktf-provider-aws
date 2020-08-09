// https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "arn": {
        "type": "string",
        "computed": true
      },
      "container": {
        "type": "string",
        "required": true
      },
      "description": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "name": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "type": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "video_codec_options": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      }
    },
    "block_types": {
      "audio": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "audio_packing_mode": {
              "type": "string",
              "optional": true
            },
            "bit_rate": {
              "type": "string",
              "optional": true
            },
            "channels": {
              "type": "string",
              "optional": true
            },
            "codec": {
              "type": "string",
              "optional": true
            },
            "sample_rate": {
              "type": "string",
              "optional": true
            }
          }
        },
        "max_items": 1
      },
      "audio_codec_options": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "bit_depth": {
              "type": "string",
              "optional": true
            },
            "bit_order": {
              "type": "string",
              "optional": true
            },
            "profile": {
              "type": "string",
              "optional": true
            },
            "signed": {
              "type": "string",
              "optional": true
            }
          }
        },
        "max_items": 1
      },
      "thumbnails": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "aspect_ratio": {
              "type": "string",
              "optional": true
            },
            "format": {
              "type": "string",
              "optional": true
            },
            "interval": {
              "type": "string",
              "optional": true
            },
            "max_height": {
              "type": "string",
              "optional": true
            },
            "max_width": {
              "type": "string",
              "optional": true
            },
            "padding_policy": {
              "type": "string",
              "optional": true
            },
            "resolution": {
              "type": "string",
              "optional": true
            },
            "sizing_policy": {
              "type": "string",
              "optional": true
            }
          }
        },
        "max_items": 1
      },
      "video": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "aspect_ratio": {
              "type": "string",
              "optional": true
            },
            "bit_rate": {
              "type": "string",
              "optional": true
            },
            "codec": {
              "type": "string",
              "optional": true
            },
            "display_aspect_ratio": {
              "type": "string",
              "optional": true
            },
            "fixed_gop": {
              "type": "string",
              "optional": true
            },
            "frame_rate": {
              "type": "string",
              "optional": true
            },
            "keyframes_max_dist": {
              "type": "string",
              "optional": true
            },
            "max_frame_rate": {
              "type": "string",
              "optional": true
            },
            "max_height": {
              "type": "string",
              "optional": true
            },
            "max_width": {
              "type": "string",
              "optional": true
            },
            "padding_policy": {
              "type": "string",
              "optional": true
            },
            "resolution": {
              "type": "string",
              "optional": true
            },
            "sizing_policy": {
              "type": "string",
              "optional": true
            }
          }
        },
        "max_items": 1
      },
      "video_watermarks": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "horizontal_align": {
              "type": "string",
              "optional": true
            },
            "horizontal_offset": {
              "type": "string",
              "optional": true
            },
            "id": {
              "type": "string",
              "optional": true
            },
            "max_height": {
              "type": "string",
              "optional": true
            },
            "max_width": {
              "type": "string",
              "optional": true
            },
            "opacity": {
              "type": "string",
              "optional": true
            },
            "sizing_policy": {
              "type": "string",
              "optional": true
            },
            "target": {
              "type": "string",
              "optional": true
            },
            "vertical_align": {
              "type": "string",
              "optional": true
            },
            "vertical_offset": {
              "type": "string",
              "optional": true
            }
          }
        }
      }
    }
  }
}
*/
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

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // container - computed: false, optional: false, required: true
  private _container: string;
  public get container() {
    return this._container;
  }
  public set container(value: string) {
    this._container = value;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string;
  public get name() {
    return this._name ?? this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string;
  public get type() {
    return this._type ?? this.getStringAttribute('type');
  }
  public set type(value: string | undefined) {
    this._type = value;
  }

  // video_codec_options - computed: false, optional: true, required: false
  private _videoCodecOptions?: { [key: string]: string };
  public get videoCodecOptions() {
    return this._videoCodecOptions;
  }
  public set videoCodecOptions(value: { [key: string]: string } | undefined) {
    this._videoCodecOptions = value;
  }

  // audio - computed: false, optional: true, required: false
  private _audio?: ElastictranscoderPresetAudio[];
  public get audio() {
    return this._audio;
  }
  public set audio(value: ElastictranscoderPresetAudio[] | undefined) {
    this._audio = value;
  }

  // audio_codec_options - computed: false, optional: true, required: false
  private _audioCodecOptions?: ElastictranscoderPresetAudioCodecOptions[];
  public get audioCodecOptions() {
    return this._audioCodecOptions;
  }
  public set audioCodecOptions(value: ElastictranscoderPresetAudioCodecOptions[] | undefined) {
    this._audioCodecOptions = value;
  }

  // thumbnails - computed: false, optional: true, required: false
  private _thumbnails?: ElastictranscoderPresetThumbnails[];
  public get thumbnails() {
    return this._thumbnails;
  }
  public set thumbnails(value: ElastictranscoderPresetThumbnails[] | undefined) {
    this._thumbnails = value;
  }

  // video - computed: false, optional: true, required: false
  private _video?: ElastictranscoderPresetVideo[];
  public get video() {
    return this._video;
  }
  public set video(value: ElastictranscoderPresetVideo[] | undefined) {
    this._video = value;
  }

  // video_watermarks - computed: false, optional: true, required: false
  private _videoWatermarks?: ElastictranscoderPresetVideoWatermarks[];
  public get videoWatermarks() {
    return this._videoWatermarks;
  }
  public set videoWatermarks(value: ElastictranscoderPresetVideoWatermarks[] | undefined) {
    this._videoWatermarks = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
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
