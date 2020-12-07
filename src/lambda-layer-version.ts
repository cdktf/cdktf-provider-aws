// https://www.terraform.io/docs/providers/aws/r/lambda_layer_version.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LambdaLayerVersionConfig extends cdktf.TerraformMetaArguments {
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

export class LambdaLayerVersion extends cdktf.TerraformResource {

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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // compatible_runtimes - computed: false, optional: true, required: false
  private _compatibleRuntimes?: string[];
  public get compatibleRuntimes() {
    return this.getListAttribute('compatible_runtimes');
  }
  public set compatibleRuntimes(value: string[] ) {
    this._compatibleRuntimes = value;
  }
  public resetCompatibleRuntimes() {
    this._compatibleRuntimes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compatibleRuntimesInput() {
    return this._compatibleRuntimes
  }

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getStringAttribute('created_date');
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

  // filename - computed: false, optional: true, required: false
  private _filename?: string;
  public get filename() {
    return this.getStringAttribute('filename');
  }
  public set filename(value: string ) {
    this._filename = value;
  }
  public resetFilename() {
    this._filename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameInput() {
    return this._filename
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // layer_arn - computed: true, optional: false, required: false
  public get layerArn() {
    return this.getStringAttribute('layer_arn');
  }

  // layer_name - computed: false, optional: false, required: true
  private _layerName: string;
  public get layerName() {
    return this.getStringAttribute('layer_name');
  }
  public set layerName(value: string) {
    this._layerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get layerNameInput() {
    return this._layerName
  }

  // license_info - computed: false, optional: true, required: false
  private _licenseInfo?: string;
  public get licenseInfo() {
    return this.getStringAttribute('license_info');
  }
  public set licenseInfo(value: string ) {
    this._licenseInfo = value;
  }
  public resetLicenseInfo() {
    this._licenseInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseInfoInput() {
    return this._licenseInfo
  }

  // s3_bucket - computed: false, optional: true, required: false
  private _s3Bucket?: string;
  public get s3Bucket() {
    return this.getStringAttribute('s3_bucket');
  }
  public set s3Bucket(value: string ) {
    this._s3Bucket = value;
  }
  public resetS3Bucket() {
    this._s3Bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketInput() {
    return this._s3Bucket
  }

  // s3_key - computed: false, optional: true, required: false
  private _s3Key?: string;
  public get s3Key() {
    return this.getStringAttribute('s3_key');
  }
  public set s3Key(value: string ) {
    this._s3Key = value;
  }
  public resetS3Key() {
    this._s3Key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3KeyInput() {
    return this._s3Key
  }

  // s3_object_version - computed: false, optional: true, required: false
  private _s3ObjectVersion?: string;
  public get s3ObjectVersion() {
    return this.getStringAttribute('s3_object_version');
  }
  public set s3ObjectVersion(value: string ) {
    this._s3ObjectVersion = value;
  }
  public resetS3ObjectVersion() {
    this._s3ObjectVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ObjectVersionInput() {
    return this._s3ObjectVersion
  }

  // source_code_hash - computed: true, optional: true, required: false
  private _sourceCodeHash?: string;
  public get sourceCodeHash() {
    return this.getStringAttribute('source_code_hash');
  }
  public set sourceCodeHash(value: string) {
    this._sourceCodeHash = value;
  }
  public resetSourceCodeHash() {
    this._sourceCodeHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceCodeHashInput() {
    return this._sourceCodeHash
  }

  // source_code_size - computed: true, optional: false, required: false
  public get sourceCodeSize() {
    return this.getNumberAttribute('source_code_size');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compatible_runtimes: cdktf.listMapper(cdktf.stringToTerraform)(this._compatibleRuntimes),
      description: cdktf.stringToTerraform(this._description),
      filename: cdktf.stringToTerraform(this._filename),
      layer_name: cdktf.stringToTerraform(this._layerName),
      license_info: cdktf.stringToTerraform(this._licenseInfo),
      s3_bucket: cdktf.stringToTerraform(this._s3Bucket),
      s3_key: cdktf.stringToTerraform(this._s3Key),
      s3_object_version: cdktf.stringToTerraform(this._s3ObjectVersion),
      source_code_hash: cdktf.stringToTerraform(this._sourceCodeHash),
    };
  }
}
