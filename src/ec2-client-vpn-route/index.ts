// https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_route
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ec2ClientVpnRouteConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_route#client_vpn_endpoint_id Ec2ClientVpnRoute#client_vpn_endpoint_id}
  */
  readonly clientVpnEndpointId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_route#description Ec2ClientVpnRoute#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_route#destination_cidr_block Ec2ClientVpnRoute#destination_cidr_block}
  */
  readonly destinationCidrBlock: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_route#id Ec2ClientVpnRoute#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_route#target_vpc_subnet_id Ec2ClientVpnRoute#target_vpc_subnet_id}
  */
  readonly targetVpcSubnetId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_route#timeouts Ec2ClientVpnRoute#timeouts}
  */
  readonly timeouts?: Ec2ClientVpnRouteTimeouts;
}
export interface Ec2ClientVpnRouteTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_route#create Ec2ClientVpnRoute#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_route#delete Ec2ClientVpnRoute#delete}
  */
  readonly delete?: string;
}

export function ec2ClientVpnRouteTimeoutsToTerraform(struct?: Ec2ClientVpnRouteTimeoutsOutputReference | Ec2ClientVpnRouteTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class Ec2ClientVpnRouteTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Ec2ClientVpnRouteTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2ClientVpnRouteTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_route aws_ec2_client_vpn_route}
*/
export class Ec2ClientVpnRoute extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ec2_client_vpn_route";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_route aws_ec2_client_vpn_route} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ec2ClientVpnRouteConfig
  */
  public constructor(scope: Construct, id: string, config: Ec2ClientVpnRouteConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ec2_client_vpn_route',
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
    this._clientVpnEndpointId = config.clientVpnEndpointId;
    this._description = config.description;
    this._destinationCidrBlock = config.destinationCidrBlock;
    this._id = config.id;
    this._targetVpcSubnetId = config.targetVpcSubnetId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_vpn_endpoint_id - computed: false, optional: false, required: true
  private _clientVpnEndpointId?: string; 
  public get clientVpnEndpointId() {
    return this.getStringAttribute('client_vpn_endpoint_id');
  }
  public set clientVpnEndpointId(value: string) {
    this._clientVpnEndpointId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientVpnEndpointIdInput() {
    return this._clientVpnEndpointId;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // destination_cidr_block - computed: false, optional: false, required: true
  private _destinationCidrBlock?: string; 
  public get destinationCidrBlock() {
    return this.getStringAttribute('destination_cidr_block');
  }
  public set destinationCidrBlock(value: string) {
    this._destinationCidrBlock = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationCidrBlockInput() {
    return this._destinationCidrBlock;
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

  // origin - computed: true, optional: false, required: false
  public get origin() {
    return this.getStringAttribute('origin');
  }

  // target_vpc_subnet_id - computed: false, optional: false, required: true
  private _targetVpcSubnetId?: string; 
  public get targetVpcSubnetId() {
    return this.getStringAttribute('target_vpc_subnet_id');
  }
  public set targetVpcSubnetId(value: string) {
    this._targetVpcSubnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetVpcSubnetIdInput() {
    return this._targetVpcSubnetId;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new Ec2ClientVpnRouteTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: Ec2ClientVpnRouteTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_vpn_endpoint_id: cdktf.stringToTerraform(this._clientVpnEndpointId),
      description: cdktf.stringToTerraform(this._description),
      destination_cidr_block: cdktf.stringToTerraform(this._destinationCidrBlock),
      id: cdktf.stringToTerraform(this._id),
      target_vpc_subnet_id: cdktf.stringToTerraform(this._targetVpcSubnetId),
      timeouts: ec2ClientVpnRouteTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
