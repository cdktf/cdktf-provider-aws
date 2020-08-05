// https://www.terraform.io/docs/providers/aws/r/data_aws_s3_bucket_objects.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "bucket": {
        "type": "string",
        "required": true
      },
      "common_prefixes": {
        "type": [
          "list",
          "string"
        ],
        "computed": true
      },
      "delimiter": {
        "type": "string",
        "optional": true
      },
      "encoding_type": {
        "type": "string",
        "optional": true
      },
      "fetch_owner": {
        "type": "bool",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "keys": {
        "type": [
          "list",
          "string"
        ],
        "computed": true
      },
      "max_keys": {
        "type": "number",
        "optional": true
      },
      "owners": {
        "type": [
          "list",
          "string"
        ],
        "computed": true
      },
      "prefix": {
        "type": "string",
        "optional": true
      },
      "start_after": {
        "type": "string",
        "optional": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAwsS3BucketObjectsConfig extends TerraformMetaArguments {
  readonly bucket: string;
  readonly delimiter?: string;
  readonly encodingType?: string;
  readonly fetchOwner?: boolean;
  readonly maxKeys?: number;
  readonly prefix?: string;
  readonly startAfter?: string;
}

// Resource

export class DataAwsS3BucketObjects extends TerraformDataSource {

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
    return this._bucket;
  }
  public set bucket(value: string) {
    this._bucket = value;
  }

  // common_prefixes - computed: true, optional: false, required: true
  public get commonPrefixes() {
    return this.getListAttribute('common_prefixes');
  }

  // delimiter - computed: false, optional: true, required: false
  private _delimiter?: string;
  public get delimiter() {
    return this._delimiter;
  }
  public set delimiter(value: string | undefined) {
    this._delimiter = value;
  }

  // encoding_type - computed: false, optional: true, required: false
  private _encodingType?: string;
  public get encodingType() {
    return this._encodingType;
  }
  public set encodingType(value: string | undefined) {
    this._encodingType = value;
  }

  // fetch_owner - computed: false, optional: true, required: false
  private _fetchOwner?: boolean;
  public get fetchOwner() {
    return this._fetchOwner;
  }
  public set fetchOwner(value: boolean | undefined) {
    this._fetchOwner = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // keys - computed: true, optional: false, required: true
  public get keys() {
    return this.getListAttribute('keys');
  }

  // max_keys - computed: false, optional: true, required: false
  private _maxKeys?: number;
  public get maxKeys() {
    return this._maxKeys;
  }
  public set maxKeys(value: number | undefined) {
    this._maxKeys = value;
  }

  // owners - computed: true, optional: false, required: true
  public get owners() {
    return this.getListAttribute('owners');
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string;
  public get prefix() {
    return this._prefix;
  }
  public set prefix(value: string | undefined) {
    this._prefix = value;
  }

  // start_after - computed: false, optional: true, required: false
  private _startAfter?: string;
  public get startAfter() {
    return this._startAfter;
  }
  public set startAfter(value: string | undefined) {
    this._startAfter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: this._bucket,
      delimiter: this._delimiter,
      encoding_type: this._encodingType,
      fetch_owner: this._fetchOwner,
      max_keys: this._maxKeys,
      prefix: this._prefix,
      start_after: this._startAfter,
    };
  }
}
