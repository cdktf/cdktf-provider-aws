/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lambda_layer_version
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LambdaLayerVersionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lambda_layer_version#compatible_architectures LambdaLayerVersion#compatible_architectures}
  */
  readonly compatibleArchitectures?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lambda_layer_version#compatible_runtimes LambdaLayerVersion#compatible_runtimes}
  */
  readonly compatibleRuntimes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lambda_layer_version#description LambdaLayerVersion#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lambda_layer_version#filename LambdaLayerVersion#filename}
  */
  readonly filename?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lambda_layer_version#id LambdaLayerVersion#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lambda_layer_version#layer_name LambdaLayerVersion#layer_name}
  */
  readonly layerName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lambda_layer_version#license_info LambdaLayerVersion#license_info}
  */
  readonly licenseInfo?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lambda_layer_version#region LambdaLayerVersion#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lambda_layer_version#s3_bucket LambdaLayerVersion#s3_bucket}
  */
  readonly s3Bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lambda_layer_version#s3_key LambdaLayerVersion#s3_key}
  */
  readonly s3Key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lambda_layer_version#s3_object_version LambdaLayerVersion#s3_object_version}
  */
  readonly s3ObjectVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lambda_layer_version#skip_destroy LambdaLayerVersion#skip_destroy}
  */
  readonly skipDestroy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lambda_layer_version#source_code_hash LambdaLayerVersion#source_code_hash}
  */
  readonly sourceCodeHash?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lambda_layer_version aws_lambda_layer_version}
*/
export class LambdaLayerVersion extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_lambda_layer_version";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LambdaLayerVersion resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LambdaLayerVersion to import
  * @param importFromId The id of the existing LambdaLayerVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lambda_layer_version#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LambdaLayerVersion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_lambda_layer_version", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lambda_layer_version aws_lambda_layer_version} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LambdaLayerVersionConfig
  */
  public constructor(scope: Construct, id: string, config: LambdaLayerVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_lambda_layer_version',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.4.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compatibleArchitectures = config.compatibleArchitectures;
    this._compatibleRuntimes = config.compatibleRuntimes;
    this._description = config.description;
    this._filename = config.filename;
    this._id = config.id;
    this._layerName = config.layerName;
    this._licenseInfo = config.licenseInfo;
    this._region = config.region;
    this._s3Bucket = config.s3Bucket;
    this._s3Key = config.s3Key;
    this._s3ObjectVersion = config.s3ObjectVersion;
    this._skipDestroy = config.skipDestroy;
    this._sourceCodeHash = config.sourceCodeHash;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // code_sha256 - computed: true, optional: false, required: false
  public get codeSha256() {
    return this.getStringAttribute('code_sha256');
  }

  // compatible_architectures - computed: false, optional: true, required: false
  private _compatibleArchitectures?: string[]; 
  public get compatibleArchitectures() {
    return cdktf.Fn.tolist(this.getListAttribute('compatible_architectures'));
  }
  public set compatibleArchitectures(value: string[]) {
    this._compatibleArchitectures = value;
  }
  public resetCompatibleArchitectures() {
    this._compatibleArchitectures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compatibleArchitecturesInput() {
    return this._compatibleArchitectures;
  }

  // compatible_runtimes - computed: false, optional: true, required: false
  private _compatibleRuntimes?: string[]; 
  public get compatibleRuntimes() {
    return cdktf.Fn.tolist(this.getListAttribute('compatible_runtimes'));
  }
  public set compatibleRuntimes(value: string[]) {
    this._compatibleRuntimes = value;
  }
  public resetCompatibleRuntimes() {
    this._compatibleRuntimes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compatibleRuntimesInput() {
    return this._compatibleRuntimes;
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

  // filename - computed: false, optional: true, required: false
  private _filename?: string; 
  public get filename() {
    return this.getStringAttribute('filename');
  }
  public set filename(value: string) {
    this._filename = value;
  }
  public resetFilename() {
    this._filename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameInput() {
    return this._filename;
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

  // layer_arn - computed: true, optional: false, required: false
  public get layerArn() {
    return this.getStringAttribute('layer_arn');
  }

  // layer_name - computed: false, optional: false, required: true
  private _layerName?: string; 
  public get layerName() {
    return this.getStringAttribute('layer_name');
  }
  public set layerName(value: string) {
    this._layerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get layerNameInput() {
    return this._layerName;
  }

  // license_info - computed: false, optional: true, required: false
  private _licenseInfo?: string; 
  public get licenseInfo() {
    return this.getStringAttribute('license_info');
  }
  public set licenseInfo(value: string) {
    this._licenseInfo = value;
  }
  public resetLicenseInfo() {
    this._licenseInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseInfoInput() {
    return this._licenseInfo;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // s3_bucket - computed: false, optional: true, required: false
  private _s3Bucket?: string; 
  public get s3Bucket() {
    return this.getStringAttribute('s3_bucket');
  }
  public set s3Bucket(value: string) {
    this._s3Bucket = value;
  }
  public resetS3Bucket() {
    this._s3Bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketInput() {
    return this._s3Bucket;
  }

  // s3_key - computed: false, optional: true, required: false
  private _s3Key?: string; 
  public get s3Key() {
    return this.getStringAttribute('s3_key');
  }
  public set s3Key(value: string) {
    this._s3Key = value;
  }
  public resetS3Key() {
    this._s3Key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3KeyInput() {
    return this._s3Key;
  }

  // s3_object_version - computed: false, optional: true, required: false
  private _s3ObjectVersion?: string; 
  public get s3ObjectVersion() {
    return this.getStringAttribute('s3_object_version');
  }
  public set s3ObjectVersion(value: string) {
    this._s3ObjectVersion = value;
  }
  public resetS3ObjectVersion() {
    this._s3ObjectVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ObjectVersionInput() {
    return this._s3ObjectVersion;
  }

  // signing_job_arn - computed: true, optional: false, required: false
  public get signingJobArn() {
    return this.getStringAttribute('signing_job_arn');
  }

  // signing_profile_version_arn - computed: true, optional: false, required: false
  public get signingProfileVersionArn() {
    return this.getStringAttribute('signing_profile_version_arn');
  }

  // skip_destroy - computed: false, optional: true, required: false
  private _skipDestroy?: boolean | cdktf.IResolvable; 
  public get skipDestroy() {
    return this.getBooleanAttribute('skip_destroy');
  }
  public set skipDestroy(value: boolean | cdktf.IResolvable) {
    this._skipDestroy = value;
  }
  public resetSkipDestroy() {
    this._skipDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipDestroyInput() {
    return this._skipDestroy;
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
    return this._sourceCodeHash;
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
      compatible_architectures: cdktf.listMapper(cdktf.stringToTerraform, false)(this._compatibleArchitectures),
      compatible_runtimes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._compatibleRuntimes),
      description: cdktf.stringToTerraform(this._description),
      filename: cdktf.stringToTerraform(this._filename),
      id: cdktf.stringToTerraform(this._id),
      layer_name: cdktf.stringToTerraform(this._layerName),
      license_info: cdktf.stringToTerraform(this._licenseInfo),
      region: cdktf.stringToTerraform(this._region),
      s3_bucket: cdktf.stringToTerraform(this._s3Bucket),
      s3_key: cdktf.stringToTerraform(this._s3Key),
      s3_object_version: cdktf.stringToTerraform(this._s3ObjectVersion),
      skip_destroy: cdktf.booleanToTerraform(this._skipDestroy),
      source_code_hash: cdktf.stringToTerraform(this._sourceCodeHash),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compatible_architectures: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._compatibleArchitectures),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      compatible_runtimes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._compatibleRuntimes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filename: {
        value: cdktf.stringToHclTerraform(this._filename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      layer_name: {
        value: cdktf.stringToHclTerraform(this._layerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      license_info: {
        value: cdktf.stringToHclTerraform(this._licenseInfo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      s3_bucket: {
        value: cdktf.stringToHclTerraform(this._s3Bucket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      s3_key: {
        value: cdktf.stringToHclTerraform(this._s3Key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      s3_object_version: {
        value: cdktf.stringToHclTerraform(this._s3ObjectVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_destroy: {
        value: cdktf.booleanToHclTerraform(this._skipDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      source_code_hash: {
        value: cdktf.stringToHclTerraform(this._sourceCodeHash),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
