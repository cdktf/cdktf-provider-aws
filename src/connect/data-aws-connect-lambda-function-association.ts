// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Connect
*/
export interface DataAwsConnectLambdaFunctionAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_lambda_function_association#function_arn DataAwsConnectLambdaFunctionAssociation#function_arn}
  */
  readonly functionArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_lambda_function_association#instance_id DataAwsConnectLambdaFunctionAssociation#instance_id}
  */
  readonly instanceId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/connect_lambda_function_association aws_connect_lambda_function_association}
*/
export class DataAwsConnectLambdaFunctionAssociation extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_connect_lambda_function_association";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/connect_lambda_function_association aws_connect_lambda_function_association} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsConnectLambdaFunctionAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsConnectLambdaFunctionAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_connect_lambda_function_association',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._functionArn = config.functionArn;
    this._instanceId = config.instanceId;
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
  public get id() {
    return this.getStringAttribute('id');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      function_arn: cdktf.stringToTerraform(this._functionArn),
      instance_id: cdktf.stringToTerraform(this._instanceId),
    };
  }
}
