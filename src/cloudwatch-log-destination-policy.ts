// https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_destination_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudwatchLogDestinationPolicyConfig extends cdktf.TerraformMetaArguments {
  readonly accessPolicy: string;
  readonly destinationName: string;
}

// Resource

export class CloudwatchLogDestinationPolicy extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CloudwatchLogDestinationPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudwatch_log_destination_policy',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accessPolicy = config.accessPolicy;
    this._destinationName = config.destinationName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_policy - computed: false, optional: false, required: true
  private _accessPolicy: string;
  public get accessPolicy() {
    return this.getStringAttribute('access_policy');
  }
  public set accessPolicy(value: string) {
    this._accessPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPolicyInput() {
    return this._accessPolicy
  }

  // destination_name - computed: false, optional: false, required: true
  private _destinationName: string;
  public get destinationName() {
    return this.getStringAttribute('destination_name');
  }
  public set destinationName(value: string) {
    this._destinationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationNameInput() {
    return this._destinationName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_policy: cdktf.stringToTerraform(this._accessPolicy),
      destination_name: cdktf.stringToTerraform(this._destinationName),
    };
  }
}
