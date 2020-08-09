// https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service_allowed_principal.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "principal_arn": {
        "type": "string",
        "required": true
      },
      "vpc_endpoint_service_id": {
        "type": "string",
        "required": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface VpcEndpointServiceAllowedPrincipalConfig extends TerraformMetaArguments {
  readonly principalArn: string;
  readonly vpcEndpointServiceId: string;
}

// Resource

export class VpcEndpointServiceAllowedPrincipal extends TerraformResource {

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
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // principal_arn - computed: false, optional: false, required: true
  private _principalArn: string;
  public get principalArn() {
    return this._principalArn;
  }
  public set principalArn(value: string) {
    this._principalArn = value;
  }

  // vpc_endpoint_service_id - computed: false, optional: false, required: true
  private _vpcEndpointServiceId: string;
  public get vpcEndpointServiceId() {
    return this._vpcEndpointServiceId;
  }
  public set vpcEndpointServiceId(value: string) {
    this._vpcEndpointServiceId = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      principal_arn: this._principalArn,
      vpc_endpoint_service_id: this._vpcEndpointServiceId,
    };
  }
}
