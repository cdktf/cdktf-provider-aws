// https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ec2TransitGatewayConnectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect#id Ec2TransitGatewayConnect#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect#protocol Ec2TransitGatewayConnect#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect#tags Ec2TransitGatewayConnect#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect#tags_all Ec2TransitGatewayConnect#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect#transit_gateway_default_route_table_association Ec2TransitGatewayConnect#transit_gateway_default_route_table_association}
  */
  readonly transitGatewayDefaultRouteTableAssociation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect#transit_gateway_default_route_table_propagation Ec2TransitGatewayConnect#transit_gateway_default_route_table_propagation}
  */
  readonly transitGatewayDefaultRouteTablePropagation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect#transit_gateway_id Ec2TransitGatewayConnect#transit_gateway_id}
  */
  readonly transitGatewayId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect#transport_attachment_id Ec2TransitGatewayConnect#transport_attachment_id}
  */
  readonly transportAttachmentId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect#timeouts Ec2TransitGatewayConnect#timeouts}
  */
  readonly timeouts?: Ec2TransitGatewayConnectTimeouts;
}
export interface Ec2TransitGatewayConnectTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect#create Ec2TransitGatewayConnect#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect#delete Ec2TransitGatewayConnect#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect#update Ec2TransitGatewayConnect#update}
  */
  readonly update?: string;
}

export function ec2TransitGatewayConnectTimeoutsToTerraform(struct?: Ec2TransitGatewayConnectTimeoutsOutputReference | Ec2TransitGatewayConnectTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class Ec2TransitGatewayConnectTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Ec2TransitGatewayConnectTimeouts | cdktf.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2TransitGatewayConnectTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
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
      this._update = value.update;
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

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect aws_ec2_transit_gateway_connect}
*/
export class Ec2TransitGatewayConnect extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ec2_transit_gateway_connect";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_connect aws_ec2_transit_gateway_connect} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ec2TransitGatewayConnectConfig
  */
  public constructor(scope: Construct, id: string, config: Ec2TransitGatewayConnectConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ec2_transit_gateway_connect',
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
    this._protocol = config.protocol;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._transitGatewayDefaultRouteTableAssociation = config.transitGatewayDefaultRouteTableAssociation;
    this._transitGatewayDefaultRouteTablePropagation = config.transitGatewayDefaultRouteTablePropagation;
    this._transitGatewayId = config.transitGatewayId;
    this._transportAttachmentId = config.transportAttachmentId;
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

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // transit_gateway_default_route_table_association - computed: false, optional: true, required: false
  private _transitGatewayDefaultRouteTableAssociation?: boolean | cdktf.IResolvable; 
  public get transitGatewayDefaultRouteTableAssociation() {
    return this.getBooleanAttribute('transit_gateway_default_route_table_association');
  }
  public set transitGatewayDefaultRouteTableAssociation(value: boolean | cdktf.IResolvable) {
    this._transitGatewayDefaultRouteTableAssociation = value;
  }
  public resetTransitGatewayDefaultRouteTableAssociation() {
    this._transitGatewayDefaultRouteTableAssociation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGatewayDefaultRouteTableAssociationInput() {
    return this._transitGatewayDefaultRouteTableAssociation;
  }

  // transit_gateway_default_route_table_propagation - computed: false, optional: true, required: false
  private _transitGatewayDefaultRouteTablePropagation?: boolean | cdktf.IResolvable; 
  public get transitGatewayDefaultRouteTablePropagation() {
    return this.getBooleanAttribute('transit_gateway_default_route_table_propagation');
  }
  public set transitGatewayDefaultRouteTablePropagation(value: boolean | cdktf.IResolvable) {
    this._transitGatewayDefaultRouteTablePropagation = value;
  }
  public resetTransitGatewayDefaultRouteTablePropagation() {
    this._transitGatewayDefaultRouteTablePropagation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGatewayDefaultRouteTablePropagationInput() {
    return this._transitGatewayDefaultRouteTablePropagation;
  }

  // transit_gateway_id - computed: false, optional: false, required: true
  private _transitGatewayId?: string; 
  public get transitGatewayId() {
    return this.getStringAttribute('transit_gateway_id');
  }
  public set transitGatewayId(value: string) {
    this._transitGatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGatewayIdInput() {
    return this._transitGatewayId;
  }

  // transport_attachment_id - computed: false, optional: false, required: true
  private _transportAttachmentId?: string; 
  public get transportAttachmentId() {
    return this.getStringAttribute('transport_attachment_id');
  }
  public set transportAttachmentId(value: string) {
    this._transportAttachmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transportAttachmentIdInput() {
    return this._transportAttachmentId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new Ec2TransitGatewayConnectTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: Ec2TransitGatewayConnectTimeouts) {
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
      protocol: cdktf.stringToTerraform(this._protocol),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      transit_gateway_default_route_table_association: cdktf.booleanToTerraform(this._transitGatewayDefaultRouteTableAssociation),
      transit_gateway_default_route_table_propagation: cdktf.booleanToTerraform(this._transitGatewayDefaultRouteTablePropagation),
      transit_gateway_id: cdktf.stringToTerraform(this._transitGatewayId),
      transport_attachment_id: cdktf.stringToTerraform(this._transportAttachmentId),
      timeouts: ec2TransitGatewayConnectTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
