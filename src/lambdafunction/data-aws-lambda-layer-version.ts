// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Lambda
*/
export interface DataAwsLambdaLayerVersionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_layer_version.html#compatible_architecture DataAwsLambdaLayerVersion#compatible_architecture}
  */
  readonly compatibleArchitecture?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_layer_version.html#compatible_runtime DataAwsLambdaLayerVersion#compatible_runtime}
  */
  readonly compatibleRuntime?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_layer_version.html#layer_name DataAwsLambdaLayerVersion#layer_name}
  */
  readonly layerName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_layer_version.html#version DataAwsLambdaLayerVersion#version}
  */
  readonly version?: number;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/lambda_layer_version.html aws_lambda_layer_version}
*/
export class DataAwsLambdaLayerVersion extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_lambda_layer_version";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/lambda_layer_version.html aws_lambda_layer_version} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsLambdaLayerVersionConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsLambdaLayerVersionConfig) {
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
    this._compatibleArchitecture = config.compatibleArchitecture;
    this._compatibleRuntime = config.compatibleRuntime;
    this._layerName = config.layerName;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // compatible_architecture - computed: false, optional: true, required: false
  private _compatibleArchitecture?: string; 
  public get compatibleArchitecture() {
    return this.getStringAttribute('compatible_architecture');
  }
  public set compatibleArchitecture(value: string) {
    this._compatibleArchitecture = value;
  }
  public resetCompatibleArchitecture() {
    this._compatibleArchitecture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compatibleArchitectureInput() {
    return this._compatibleArchitecture;
  }

  // compatible_architectures - computed: true, optional: false, required: false
  public get compatibleArchitectures() {
    return this.getListAttribute('compatible_architectures');
  }

  // compatible_runtime - computed: false, optional: true, required: false
  private _compatibleRuntime?: string; 
  public get compatibleRuntime() {
    return this.getStringAttribute('compatible_runtime');
  }
  public set compatibleRuntime(value: string) {
    this._compatibleRuntime = value;
  }
  public resetCompatibleRuntime() {
    this._compatibleRuntime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compatibleRuntimeInput() {
    return this._compatibleRuntime;
  }

  // compatible_runtimes - computed: true, optional: false, required: false
  public get compatibleRuntimes() {
    return this.getListAttribute('compatible_runtimes');
  }

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // license_info - computed: true, optional: false, required: false
  public get licenseInfo() {
    return this.getStringAttribute('license_info');
  }

  // signing_job_arn - computed: true, optional: false, required: false
  public get signingJobArn() {
    return this.getStringAttribute('signing_job_arn');
  }

  // signing_profile_version_arn - computed: true, optional: false, required: false
  public get signingProfileVersionArn() {
    return this.getStringAttribute('signing_profile_version_arn');
  }

  // source_code_hash - computed: true, optional: false, required: false
  public get sourceCodeHash() {
    return this.getStringAttribute('source_code_hash');
  }

  // source_code_size - computed: true, optional: false, required: false
  public get sourceCodeSize() {
    return this.getNumberAttribute('source_code_size');
  }

  // version - computed: true, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compatible_architecture: cdktf.stringToTerraform(this._compatibleArchitecture),
      compatible_runtime: cdktf.stringToTerraform(this._compatibleRuntime),
      layer_name: cdktf.stringToTerraform(this._layerName),
      version: cdktf.numberToTerraform(this._version),
    };
  }
}
