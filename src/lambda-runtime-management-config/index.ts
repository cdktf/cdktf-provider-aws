/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/lambda_runtime_management_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LambdaRuntimeManagementConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/lambda_runtime_management_config#function_name LambdaRuntimeManagementConfig#function_name}
  */
  readonly functionName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/lambda_runtime_management_config#qualifier LambdaRuntimeManagementConfig#qualifier}
  */
  readonly qualifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/lambda_runtime_management_config#runtime_version_arn LambdaRuntimeManagementConfig#runtime_version_arn}
  */
  readonly runtimeVersionArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/lambda_runtime_management_config#update_runtime_on LambdaRuntimeManagementConfig#update_runtime_on}
  */
  readonly updateRuntimeOn?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/lambda_runtime_management_config aws_lambda_runtime_management_config}
*/
export class LambdaRuntimeManagementConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_lambda_runtime_management_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LambdaRuntimeManagementConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LambdaRuntimeManagementConfig to import
  * @param importFromId The id of the existing LambdaRuntimeManagementConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/lambda_runtime_management_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LambdaRuntimeManagementConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_lambda_runtime_management_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/lambda_runtime_management_config aws_lambda_runtime_management_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LambdaRuntimeManagementConfigConfig
  */
  public constructor(scope: Construct, id: string, config: LambdaRuntimeManagementConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_lambda_runtime_management_config',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.70.0',
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
    this._functionName = config.functionName;
    this._qualifier = config.qualifier;
    this._runtimeVersionArn = config.runtimeVersionArn;
    this._updateRuntimeOn = config.updateRuntimeOn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // function_arn - computed: true, optional: false, required: false
  public get functionArn() {
    return this.getStringAttribute('function_arn');
  }

  // function_name - computed: false, optional: false, required: true
  private _functionName?: string; 
  public get functionName() {
    return this.getStringAttribute('function_name');
  }
  public set functionName(value: string) {
    this._functionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionNameInput() {
    return this._functionName;
  }

  // qualifier - computed: false, optional: true, required: false
  private _qualifier?: string; 
  public get qualifier() {
    return this.getStringAttribute('qualifier');
  }
  public set qualifier(value: string) {
    this._qualifier = value;
  }
  public resetQualifier() {
    this._qualifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qualifierInput() {
    return this._qualifier;
  }

  // runtime_version_arn - computed: false, optional: true, required: false
  private _runtimeVersionArn?: string; 
  public get runtimeVersionArn() {
    return this.getStringAttribute('runtime_version_arn');
  }
  public set runtimeVersionArn(value: string) {
    this._runtimeVersionArn = value;
  }
  public resetRuntimeVersionArn() {
    this._runtimeVersionArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeVersionArnInput() {
    return this._runtimeVersionArn;
  }

  // update_runtime_on - computed: false, optional: true, required: false
  private _updateRuntimeOn?: string; 
  public get updateRuntimeOn() {
    return this.getStringAttribute('update_runtime_on');
  }
  public set updateRuntimeOn(value: string) {
    this._updateRuntimeOn = value;
  }
  public resetUpdateRuntimeOn() {
    this._updateRuntimeOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateRuntimeOnInput() {
    return this._updateRuntimeOn;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      function_name: cdktf.stringToTerraform(this._functionName),
      qualifier: cdktf.stringToTerraform(this._qualifier),
      runtime_version_arn: cdktf.stringToTerraform(this._runtimeVersionArn),
      update_runtime_on: cdktf.stringToTerraform(this._updateRuntimeOn),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      function_name: {
        value: cdktf.stringToHclTerraform(this._functionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      qualifier: {
        value: cdktf.stringToHclTerraform(this._qualifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      runtime_version_arn: {
        value: cdktf.stringToHclTerraform(this._runtimeVersionArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_runtime_on: {
        value: cdktf.stringToHclTerraform(this._updateRuntimeOn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
