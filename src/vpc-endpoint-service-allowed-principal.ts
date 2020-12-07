// https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service_allowed_principal.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcEndpointServiceAllowedPrincipalConfig extends cdktf.TerraformMetaArguments {
  readonly principalArn: string;
  readonly vpcEndpointServiceId: string;
}

// Resource

export class VpcEndpointServiceAllowedPrincipal extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: VpcEndpointServiceAllowedPrincipalConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_vpc_endpoint_service_allowed_principal',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._principalArn = config.principalArn;
    this._vpcEndpointServiceId = config.vpcEndpointServiceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // principal_arn - computed: false, optional: false, required: true
  private _principalArn: string;
  public get principalArn() {
    return this.getStringAttribute('principal_arn');
  }
  public set principalArn(value: string) {
    this._principalArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get principalArnInput() {
    return this._principalArn
  }

  // vpc_endpoint_service_id - computed: false, optional: false, required: true
  private _vpcEndpointServiceId: string;
  public get vpcEndpointServiceId() {
    return this.getStringAttribute('vpc_endpoint_service_id');
  }
  public set vpcEndpointServiceId(value: string) {
    this._vpcEndpointServiceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcEndpointServiceIdInput() {
    return this._vpcEndpointServiceId
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      principal_arn: cdktf.stringToTerraform(this._principalArn),
      vpc_endpoint_service_id: cdktf.stringToTerraform(this._vpcEndpointServiceId),
    };
  }
}
