// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS VPC
*/
export interface VpcEndpointConnectionAccepterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_connection_accepter#vpc_endpoint_id VpcEndpointConnectionAccepter#vpc_endpoint_id}
  */
  readonly vpcEndpointId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_connection_accepter#vpc_endpoint_service_id VpcEndpointConnectionAccepter#vpc_endpoint_service_id}
  */
  readonly vpcEndpointServiceId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_connection_accepter aws_vpc_endpoint_connection_accepter}
*/
export class VpcEndpointConnectionAccepter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_vpc_endpoint_connection_accepter";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_connection_accepter aws_vpc_endpoint_connection_accepter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcEndpointConnectionAccepterConfig
  */
  public constructor(scope: Construct, id: string, config: VpcEndpointConnectionAccepterConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_vpc_endpoint_connection_accepter',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._vpcEndpointId = config.vpcEndpointId;
    this._vpcEndpointServiceId = config.vpcEndpointServiceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // vpc_endpoint_id - computed: false, optional: false, required: true
  private _vpcEndpointId?: string; 
  public get vpcEndpointId() {
    return this.getStringAttribute('vpc_endpoint_id');
  }
  public set vpcEndpointId(value: string) {
    this._vpcEndpointId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcEndpointIdInput() {
    return this._vpcEndpointId;
  }

  // vpc_endpoint_service_id - computed: false, optional: false, required: true
  private _vpcEndpointServiceId?: string; 
  public get vpcEndpointServiceId() {
    return this.getStringAttribute('vpc_endpoint_service_id');
  }
  public set vpcEndpointServiceId(value: string) {
    this._vpcEndpointServiceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcEndpointServiceIdInput() {
    return this._vpcEndpointServiceId;
  }

  // vpc_endpoint_state - computed: true, optional: false, required: false
  public get vpcEndpointState() {
    return this.getStringAttribute('vpc_endpoint_state');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      vpc_endpoint_id: cdktf.stringToTerraform(this._vpcEndpointId),
      vpc_endpoint_service_id: cdktf.stringToTerraform(this._vpcEndpointServiceId),
    };
  }
}
