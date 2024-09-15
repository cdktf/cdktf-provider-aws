/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/data-sources/lambda_layer_version
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsLambdaLayerVersionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/data-sources/lambda_layer_version#compatible_architecture DataAwsLambdaLayerVersion#compatible_architecture}
  */
  readonly compatibleArchitecture?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/data-sources/lambda_layer_version#compatible_runtime DataAwsLambdaLayerVersion#compatible_runtime}
  */
  readonly compatibleRuntime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/data-sources/lambda_layer_version#id DataAwsLambdaLayerVersion#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/data-sources/lambda_layer_version#layer_name DataAwsLambdaLayerVersion#layer_name}
  */
  readonly layerName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/data-sources/lambda_layer_version#version DataAwsLambdaLayerVersion#version}
  */
  readonly version?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/data-sources/lambda_layer_version aws_lambda_layer_version}
*/
export class DataAwsLambdaLayerVersion extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_lambda_layer_version";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsLambdaLayerVersion resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsLambdaLayerVersion to import
  * @param importFromId The id of the existing DataAwsLambdaLayerVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/data-sources/lambda_layer_version#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsLambdaLayerVersion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_lambda_layer_version", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/data-sources/lambda_layer_version aws_lambda_layer_version} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsLambdaLayerVersionConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsLambdaLayerVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_lambda_layer_version',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.67.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compatibleArchitecture = config.compatibleArchitecture;
    this._compatibleRuntime = config.compatibleRuntime;
    this._id = config.id;
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

  // code_sha256 - computed: true, optional: false, required: false
  public get codeSha256() {
    return this.getStringAttribute('code_sha256');
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
    return cdktf.Fn.tolist(this.getListAttribute('compatible_architectures'));
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
    return cdktf.Fn.tolist(this.getListAttribute('compatible_runtimes'));
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
      id: cdktf.stringToTerraform(this._id),
      layer_name: cdktf.stringToTerraform(this._layerName),
      version: cdktf.numberToTerraform(this._version),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compatible_architecture: {
        value: cdktf.stringToHclTerraform(this._compatibleArchitecture),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compatible_runtime: {
        value: cdktf.stringToHclTerraform(this._compatibleRuntime),
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
      version: {
        value: cdktf.numberToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
