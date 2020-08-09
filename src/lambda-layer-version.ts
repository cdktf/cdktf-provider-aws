// https://www.terraform.io/docs/providers/aws/r/lambda_layer_version.html
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
      "compatible_runtimes": {
        "type": [
          "set",
          "string"
        ],
        "optional": true
      },
      "created_date": {
        "type": "string",
        "computed": true
      },
      "description": {
        "type": "string",
        "optional": true
      },
      "filename": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "layer_arn": {
        "type": "string",
        "computed": true
      },
      "layer_name": {
        "type": "string",
        "required": true
      },
      "license_info": {
        "type": "string",
        "optional": true
      },
      "s3_bucket": {
        "type": "string",
        "optional": true
      },
      "s3_key": {
        "type": "string",
        "optional": true
      },
      "s3_object_version": {
        "type": "string",
        "optional": true
      },
      "source_code_hash": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "source_code_size": {
        "type": "number",
        "computed": true
      },
      "version": {
        "type": "string",
        "computed": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface LambdaLayerVersionConfig extends TerraformMetaArguments {
  readonly compatibleRuntimes?: string[];
  readonly description?: string;
  readonly filename?: string;
  readonly layerName: string;
  readonly licenseInfo?: string;
  readonly s3Bucket?: string;
  readonly s3Key?: string;
  readonly s3ObjectVersion?: string;
  readonly sourceCodeHash?: string;
}

// Resource

export class LambdaLayerVersion extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: LambdaLayerVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_lambda_layer_version',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compatibleRuntimes = config.compatibleRuntimes;
    this._description = config.description;
    this._filename = config.filename;
    this._layerName = config.layerName;
    this._licenseInfo = config.licenseInfo;
    this._s3Bucket = config.s3Bucket;
    this._s3Key = config.s3Key;
    this._s3ObjectVersion = config.s3ObjectVersion;
    this._sourceCodeHash = config.sourceCodeHash;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // compatible_runtimes - computed: false, optional: true, required: false
  private _compatibleRuntimes?: string[];
  public get compatibleRuntimes() {
    return this._compatibleRuntimes;
  }
  public set compatibleRuntimes(value: string[] | undefined) {
    this._compatibleRuntimes = value;
  }

  // created_date - computed: true, optional: false, required: true
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // filename - computed: false, optional: true, required: false
  private _filename?: string;
  public get filename() {
    return this._filename;
  }
  public set filename(value: string | undefined) {
    this._filename = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // layer_arn - computed: true, optional: false, required: true
  public get layerArn() {
    return this.getStringAttribute('layer_arn');
  }

  // layer_name - computed: false, optional: false, required: true
  private _layerName: string;
  public get layerName() {
    return this._layerName;
  }
  public set layerName(value: string) {
    this._layerName = value;
  }

  // license_info - computed: false, optional: true, required: false
  private _licenseInfo?: string;
  public get licenseInfo() {
    return this._licenseInfo;
  }
  public set licenseInfo(value: string | undefined) {
    this._licenseInfo = value;
  }

  // s3_bucket - computed: false, optional: true, required: false
  private _s3Bucket?: string;
  public get s3Bucket() {
    return this._s3Bucket;
  }
  public set s3Bucket(value: string | undefined) {
    this._s3Bucket = value;
  }

  // s3_key - computed: false, optional: true, required: false
  private _s3Key?: string;
  public get s3Key() {
    return this._s3Key;
  }
  public set s3Key(value: string | undefined) {
    this._s3Key = value;
  }

  // s3_object_version - computed: false, optional: true, required: false
  private _s3ObjectVersion?: string;
  public get s3ObjectVersion() {
    return this._s3ObjectVersion;
  }
  public set s3ObjectVersion(value: string | undefined) {
    this._s3ObjectVersion = value;
  }

  // source_code_hash - computed: true, optional: true, required: false
  private _sourceCodeHash?: string;
  public get sourceCodeHash() {
    return this._sourceCodeHash ?? this.getStringAttribute('source_code_hash');
  }
  public set sourceCodeHash(value: string | undefined) {
    this._sourceCodeHash = value;
  }

  // source_code_size - computed: true, optional: false, required: true
  public get sourceCodeSize() {
    return this.getNumberAttribute('source_code_size');
  }

  // version - computed: true, optional: false, required: true
  public get version() {
    return this.getStringAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compatible_runtimes: this._compatibleRuntimes,
      description: this._description,
      filename: this._filename,
      layer_name: this._layerName,
      license_info: this._licenseInfo,
      s3_bucket: this._s3Bucket,
      s3_key: this._s3Key,
      s3_object_version: this._s3ObjectVersion,
      source_code_hash: this._sourceCodeHash,
    };
  }
}
