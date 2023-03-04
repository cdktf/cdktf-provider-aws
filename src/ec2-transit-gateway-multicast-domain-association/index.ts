// https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_multicast_domain_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ec2TransitGatewayMulticastDomainAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_multicast_domain_association#id Ec2TransitGatewayMulticastDomainAssociation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_multicast_domain_association#subnet_id Ec2TransitGatewayMulticastDomainAssociation#subnet_id}
  */
  readonly subnetId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_multicast_domain_association#transit_gateway_attachment_id Ec2TransitGatewayMulticastDomainAssociation#transit_gateway_attachment_id}
  */
  readonly transitGatewayAttachmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_multicast_domain_association#transit_gateway_multicast_domain_id Ec2TransitGatewayMulticastDomainAssociation#transit_gateway_multicast_domain_id}
  */
  readonly transitGatewayMulticastDomainId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_multicast_domain_association#timeouts Ec2TransitGatewayMulticastDomainAssociation#timeouts}
  */
  readonly timeouts?: Ec2TransitGatewayMulticastDomainAssociationTimeouts;
}
export interface Ec2TransitGatewayMulticastDomainAssociationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_multicast_domain_association#create Ec2TransitGatewayMulticastDomainAssociation#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_multicast_domain_association#delete Ec2TransitGatewayMulticastDomainAssociation#delete}
  */
  readonly delete?: string;
}

export function ec2TransitGatewayMulticastDomainAssociationTimeoutsToTerraform(struct?: Ec2TransitGatewayMulticastDomainAssociationTimeoutsOutputReference | Ec2TransitGatewayMulticastDomainAssociationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class Ec2TransitGatewayMulticastDomainAssociationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Ec2TransitGatewayMulticastDomainAssociationTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Ec2TransitGatewayMulticastDomainAssociationTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_multicast_domain_association aws_ec2_transit_gateway_multicast_domain_association}
*/
export class Ec2TransitGatewayMulticastDomainAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ec2_transit_gateway_multicast_domain_association";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_multicast_domain_association aws_ec2_transit_gateway_multicast_domain_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ec2TransitGatewayMulticastDomainAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: Ec2TransitGatewayMulticastDomainAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ec2_transit_gateway_multicast_domain_association',
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
    this._subnetId = config.subnetId;
    this._transitGatewayAttachmentId = config.transitGatewayAttachmentId;
    this._transitGatewayMulticastDomainId = config.transitGatewayMulticastDomainId;
    this._timeouts.internalValue = config.timeouts;
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

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // transit_gateway_attachment_id - computed: false, optional: false, required: true
  private _transitGatewayAttachmentId?: string; 
  public get transitGatewayAttachmentId() {
    return this.getStringAttribute('transit_gateway_attachment_id');
  }
  public set transitGatewayAttachmentId(value: string) {
    this._transitGatewayAttachmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGatewayAttachmentIdInput() {
    return this._transitGatewayAttachmentId;
  }

  // transit_gateway_multicast_domain_id - computed: false, optional: false, required: true
  private _transitGatewayMulticastDomainId?: string; 
  public get transitGatewayMulticastDomainId() {
    return this.getStringAttribute('transit_gateway_multicast_domain_id');
  }
  public set transitGatewayMulticastDomainId(value: string) {
    this._transitGatewayMulticastDomainId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGatewayMulticastDomainIdInput() {
    return this._transitGatewayMulticastDomainId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new Ec2TransitGatewayMulticastDomainAssociationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: Ec2TransitGatewayMulticastDomainAssociationTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      transit_gateway_attachment_id: cdktf.stringToTerraform(this._transitGatewayAttachmentId),
      transit_gateway_multicast_domain_id: cdktf.stringToTerraform(this._transitGatewayMulticastDomainId),
      timeouts: ec2TransitGatewayMulticastDomainAssociationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
