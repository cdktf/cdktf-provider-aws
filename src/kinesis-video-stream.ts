// https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KinesisVideoStreamConfig extends cdktf.TerraformMetaArguments {
  readonly dataRetentionInHours?: number;
  readonly deviceName?: string;
  readonly kmsKeyId?: string;
  readonly mediaType?: string;
  readonly name: string;
  readonly tags?: { [key: string]: string };
  /** timeouts block */
  readonly timeouts?: KinesisVideoStreamTimeouts;
}
export interface KinesisVideoStreamTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function kinesisVideoStreamTimeoutsToTerraform(struct?: KinesisVideoStreamTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class KinesisVideoStream extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: KinesisVideoStreamConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_kinesis_video_stream',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._dataRetentionInHours = config.dataRetentionInHours;
    this._deviceName = config.deviceName;
    this._kmsKeyId = config.kmsKeyId;
    this._mediaType = config.mediaType;
    this._name = config.name;
    this._tags = config.tags;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // data_retention_in_hours - computed: false, optional: true, required: false
  private _dataRetentionInHours?: number;
  public get dataRetentionInHours() {
    return this.getNumberAttribute('data_retention_in_hours');
  }
  public set dataRetentionInHours(value: number ) {
    this._dataRetentionInHours = value;
  }
  public resetDataRetentionInHours() {
    this._dataRetentionInHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataRetentionInHoursInput() {
    return this._dataRetentionInHours
  }

  // device_name - computed: false, optional: true, required: false
  private _deviceName?: string;
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string ) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kms_key_id - computed: true, optional: true, required: false
  private _kmsKeyId?: string;
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId
  }

  // media_type - computed: false, optional: true, required: false
  private _mediaType?: string;
  public get mediaType() {
    return this.getStringAttribute('media_type');
  }
  public set mediaType(value: string ) {
    this._mediaType = value;
  }
  public resetMediaType() {
    this._mediaType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaTypeInput() {
    return this._mediaType
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: KinesisVideoStreamTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: KinesisVideoStreamTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data_retention_in_hours: cdktf.numberToTerraform(this._dataRetentionInHours),
      device_name: cdktf.stringToTerraform(this._deviceName),
      kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
      media_type: cdktf.stringToTerraform(this._mediaType),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      timeouts: kinesisVideoStreamTimeoutsToTerraform(this._timeouts),
    };
  }
}
