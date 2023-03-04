// https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service_allowed_principal
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcEndpointServiceAllowedPrincipalConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service_allowed_principal#id VpcEndpointServiceAllowedPrincipal#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service_allowed_principal#principal_arn VpcEndpointServiceAllowedPrincipal#principal_arn}
  */
  readonly principalArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service_allowed_principal#vpc_endpoint_service_id VpcEndpointServiceAllowedPrincipal#vpc_endpoint_service_id}
  */
  readonly vpcEndpointServiceId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service_allowed_principal aws_vpc_endpoint_service_allowed_principal}
*/
export class VpcEndpointServiceAllowedPrincipal extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_vpc_endpoint_service_allowed_principal";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service_allowed_principal aws_vpc_endpoint_service_allowed_principal} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcEndpointServiceAllowedPrincipalConfig
  */
  public constructor(scope: Construct, id: string, config: VpcEndpointServiceAllowedPrincipalConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_vpc_endpoint_service_allowed_principal',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.57.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._principalArn = config.principalArn;
    this._vpcEndpointServiceId = config.vpcEndpointServiceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // principal_arn - computed: false, optional: false, required: true
  private _principalArn?: string; 
  public get principalArn() {
    return this.getStringAttribute('principal_arn');
  }
  public set principalArn(value: string) {
    this._principalArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get principalArnInput() {
    return this._principalArn;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      principal_arn: cdktf.stringToTerraform(this._principalArn),
      vpc_endpoint_service_id: cdktf.stringToTerraform(this._vpcEndpointServiceId),
    };
  }
}
