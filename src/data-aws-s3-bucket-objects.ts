// https://www.terraform.io/docs/providers/aws/r/data_aws_s3_bucket_objects.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsS3BucketObjectsConfig extends cdktf.TerraformMetaArguments {
  readonly bucket: string;
  readonly delimiter?: string;
  readonly encodingType?: string;
  readonly fetchOwner?: boolean;
  readonly maxKeys?: number;
  readonly prefix?: string;
  readonly startAfter?: string;
}

// Resource

export class DataAwsS3BucketObjects extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsS3BucketObjectsConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_s3_bucket_objects',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._bucket = config.bucket;
    this._delimiter = config.delimiter;
    this._encodingType = config.encodingType;
    this._fetchOwner = config.fetchOwner;
    this._maxKeys = config.maxKeys;
    this._prefix = config.prefix;
    this._startAfter = config.startAfter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket - computed: false, optional: false, required: true
  private _bucket: string;
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket
  }

  // common_prefixes - computed: true, optional: false, required: false
  public get commonPrefixes() {
    return this.getListAttribute('common_prefixes');
  }

  // delimiter - computed: false, optional: true, required: false
  private _delimiter?: string;
  public get delimiter() {
    return this.getStringAttribute('delimiter');
  }
  public set delimiter(value: string ) {
    this._delimiter = value;
  }
  public resetDelimiter() {
    this._delimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delimiterInput() {
    return this._delimiter
  }

  // encoding_type - computed: false, optional: true, required: false
  private _encodingType?: string;
  public get encodingType() {
    return this.getStringAttribute('encoding_type');
  }
  public set encodingType(value: string ) {
    this._encodingType = value;
  }
  public resetEncodingType() {
    this._encodingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodingTypeInput() {
    return this._encodingType
  }

  // fetch_owner - computed: false, optional: true, required: false
  private _fetchOwner?: boolean;
  public get fetchOwner() {
    return this.getBooleanAttribute('fetch_owner');
  }
  public set fetchOwner(value: boolean ) {
    this._fetchOwner = value;
  }
  public resetFetchOwner() {
    this._fetchOwner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchOwnerInput() {
    return this._fetchOwner
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // keys - computed: true, optional: false, required: false
  public get keys() {
    return this.getListAttribute('keys');
  }

  // max_keys - computed: false, optional: true, required: false
  private _maxKeys?: number;
  public get maxKeys() {
    return this.getNumberAttribute('max_keys');
  }
  public set maxKeys(value: number ) {
    this._maxKeys = value;
  }
  public resetMaxKeys() {
    this._maxKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxKeysInput() {
    return this._maxKeys
  }

  // owners - computed: true, optional: false, required: false
  public get owners() {
    return this.getListAttribute('owners');
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string;
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string ) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix
  }

  // start_after - computed: false, optional: true, required: false
  private _startAfter?: string;
  public get startAfter() {
    return this.getStringAttribute('start_after');
  }
  public set startAfter(value: string ) {
    this._startAfter = value;
  }
  public resetStartAfter() {
    this._startAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startAfterInput() {
    return this._startAfter
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: cdktf.stringToTerraform(this._bucket),
      delimiter: cdktf.stringToTerraform(this._delimiter),
      encoding_type: cdktf.stringToTerraform(this._encodingType),
      fetch_owner: cdktf.booleanToTerraform(this._fetchOwner),
      max_keys: cdktf.numberToTerraform(this._maxKeys),
      prefix: cdktf.stringToTerraform(this._prefix),
      start_after: cdktf.stringToTerraform(this._startAfter),
    };
  }
}
