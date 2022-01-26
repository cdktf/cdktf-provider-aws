// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* API Gateway
*/
export interface ApiGatewayAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_account#cloudwatch_role_arn ApiGatewayAccount#cloudwatch_role_arn}
  */
  readonly cloudwatchRoleArn?: string;
}
export class ApiGatewayAccountThrottleSettings extends cdktf.ComplexComputedList {

  // burst_limit - computed: true, optional: false, required: false
  public get burstLimit() {
    return this.getNumberAttribute('burst_limit');
  }

  // rate_limit - computed: true, optional: false, required: false
  public get rateLimit() {
    return this.getNumberAttribute('rate_limit');
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_account aws_api_gateway_account}
*/
export class ApiGatewayAccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_api_gateway_account";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_account aws_api_gateway_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiGatewayAccountConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ApiGatewayAccountConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_api_gateway_account',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._cloudwatchRoleArn = config.cloudwatchRoleArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloudwatch_role_arn - computed: false, optional: true, required: false
  private _cloudwatchRoleArn?: string; 
  public get cloudwatchRoleArn() {
    return this.getStringAttribute('cloudwatch_role_arn');
  }
  public set cloudwatchRoleArn(value: string) {
    this._cloudwatchRoleArn = value;
  }
  public resetCloudwatchRoleArn() {
    this._cloudwatchRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchRoleArnInput() {
    return this._cloudwatchRoleArn;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // throttle_settings - computed: true, optional: false, required: false
  public throttleSettings(index: string) {
    return new ApiGatewayAccountThrottleSettings(this, 'throttle_settings', index, false);
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloudwatch_role_arn: cdktf.stringToTerraform(this._cloudwatchRoleArn),
    };
  }
}
