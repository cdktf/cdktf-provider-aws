/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/connect_lambda_function_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConnectLambdaFunctionAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/connect_lambda_function_association#function_arn ConnectLambdaFunctionAssociation#function_arn}
  */
  readonly functionArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/connect_lambda_function_association#id ConnectLambdaFunctionAssociation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/connect_lambda_function_association#instance_id ConnectLambdaFunctionAssociation#instance_id}
  */
  readonly instanceId: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/connect_lambda_function_association#region ConnectLambdaFunctionAssociation#region}
  */
  readonly region?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/connect_lambda_function_association aws_connect_lambda_function_association}
*/
export class ConnectLambdaFunctionAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_connect_lambda_function_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConnectLambdaFunctionAssociation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConnectLambdaFunctionAssociation to import
  * @param importFromId The id of the existing ConnectLambdaFunctionAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/connect_lambda_function_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConnectLambdaFunctionAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_connect_lambda_function_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/connect_lambda_function_association aws_connect_lambda_function_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConnectLambdaFunctionAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: ConnectLambdaFunctionAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_connect_lambda_function_association',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.0.0',
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
    this._functionArn = config.functionArn;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // function_arn - computed: false, optional: false, required: true
  private _functionArn?: string; 
  public get functionArn() {
    return this.getStringAttribute('function_arn');
  }
  public set functionArn(value: string) {
    this._functionArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionArnInput() {
    return this._functionArn;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      function_arn: cdktf.stringToTerraform(this._functionArn),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      region: cdktf.stringToTerraform(this._region),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      function_arn: {
        value: cdktf.stringToHclTerraform(this._functionArn),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
