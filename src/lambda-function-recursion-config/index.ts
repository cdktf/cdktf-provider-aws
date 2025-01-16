/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/lambda_function_recursion_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LambdaFunctionRecursionConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/lambda_function_recursion_config#function_name LambdaFunctionRecursionConfig#function_name}
  */
  readonly functionName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/lambda_function_recursion_config#recursive_loop LambdaFunctionRecursionConfig#recursive_loop}
  */
  readonly recursiveLoop: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/lambda_function_recursion_config aws_lambda_function_recursion_config}
*/
export class LambdaFunctionRecursionConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_lambda_function_recursion_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LambdaFunctionRecursionConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LambdaFunctionRecursionConfig to import
  * @param importFromId The id of the existing LambdaFunctionRecursionConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/lambda_function_recursion_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LambdaFunctionRecursionConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_lambda_function_recursion_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/lambda_function_recursion_config aws_lambda_function_recursion_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LambdaFunctionRecursionConfigConfig
  */
  public constructor(scope: Construct, id: string, config: LambdaFunctionRecursionConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_lambda_function_recursion_config',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.83.1',
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
    this._recursiveLoop = config.recursiveLoop;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // recursive_loop - computed: false, optional: false, required: true
  private _recursiveLoop?: string; 
  public get recursiveLoop() {
    return this.getStringAttribute('recursive_loop');
  }
  public set recursiveLoop(value: string) {
    this._recursiveLoop = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recursiveLoopInput() {
    return this._recursiveLoop;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      function_name: cdktf.stringToTerraform(this._functionName),
      recursive_loop: cdktf.stringToTerraform(this._recursiveLoop),
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
      recursive_loop: {
        value: cdktf.stringToHclTerraform(this._recursiveLoop),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
