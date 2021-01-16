// https://www.terraform.io/docs/providers/aws/r/api_gateway_account.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiGatewayAccountConfig extends cdktf.TerraformMetaArguments {
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

// Resource

export class ApiGatewayAccount extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  public set cloudwatchRoleArn(value: string ) {
    this._cloudwatchRoleArn = value;
  }
  public resetCloudwatchRoleArn() {
    this._cloudwatchRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchRoleArnInput() {
    return this._cloudwatchRoleArn
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // throttle_settings - computed: true, optional: false, required: false
  public throttleSettings(index: string) {
    return new ApiGatewayAccountThrottleSettings(this, 'throttle_settings', index);
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
