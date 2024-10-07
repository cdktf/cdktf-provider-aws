/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/data-sources/lambda_invocation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsLambdaInvocationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/data-sources/lambda_invocation#function_name DataAwsLambdaInvocation#function_name}
  */
  readonly functionName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/data-sources/lambda_invocation#id DataAwsLambdaInvocation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/data-sources/lambda_invocation#input DataAwsLambdaInvocation#input}
  */
  readonly input: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/data-sources/lambda_invocation#qualifier DataAwsLambdaInvocation#qualifier}
  */
  readonly qualifier?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/data-sources/lambda_invocation aws_lambda_invocation}
*/
export class DataAwsLambdaInvocation extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_lambda_invocation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsLambdaInvocation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsLambdaInvocation to import
  * @param importFromId The id of the existing DataAwsLambdaInvocation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/data-sources/lambda_invocation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsLambdaInvocation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_lambda_invocation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/data-sources/lambda_invocation aws_lambda_invocation} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsLambdaInvocationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsLambdaInvocationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_lambda_invocation',
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
    this._id = config.id;
    this._input = config.input;
    this._qualifier = config.qualifier;
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

  // input - computed: false, optional: false, required: true
  private _input?: string; 
  public get input() {
    return this.getStringAttribute('input');
  }
  public set input(value: string) {
    this._input = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input;
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

  // result - computed: true, optional: false, required: false
  public get result() {
    return this.getStringAttribute('result');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      function_name: cdktf.stringToTerraform(this._functionName),
      id: cdktf.stringToTerraform(this._id),
      input: cdktf.stringToTerraform(this._input),
      qualifier: cdktf.stringToTerraform(this._qualifier),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      input: {
        value: cdktf.stringToHclTerraform(this._input),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
