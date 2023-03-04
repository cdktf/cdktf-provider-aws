// https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_peering
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkmanagerTransitGatewayPeeringConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_peering#core_network_id NetworkmanagerTransitGatewayPeering#core_network_id}
  */
  readonly coreNetworkId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_peering#id NetworkmanagerTransitGatewayPeering#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_peering#tags NetworkmanagerTransitGatewayPeering#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_peering#tags_all NetworkmanagerTransitGatewayPeering#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_peering#transit_gateway_arn NetworkmanagerTransitGatewayPeering#transit_gateway_arn}
  */
  readonly transitGatewayArn: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_peering#timeouts NetworkmanagerTransitGatewayPeering#timeouts}
  */
  readonly timeouts?: NetworkmanagerTransitGatewayPeeringTimeouts;
}
export interface NetworkmanagerTransitGatewayPeeringTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_peering#create NetworkmanagerTransitGatewayPeering#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_peering#delete NetworkmanagerTransitGatewayPeering#delete}
  */
  readonly delete?: string;
}

export function networkmanagerTransitGatewayPeeringTimeoutsToTerraform(struct?: NetworkmanagerTransitGatewayPeeringTimeoutsOutputReference | NetworkmanagerTransitGatewayPeeringTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class NetworkmanagerTransitGatewayPeeringTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkmanagerTransitGatewayPeeringTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NetworkmanagerTransitGatewayPeeringTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_peering aws_networkmanager_transit_gateway_peering}
*/
export class NetworkmanagerTransitGatewayPeering extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_networkmanager_transit_gateway_peering";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_transit_gateway_peering aws_networkmanager_transit_gateway_peering} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkmanagerTransitGatewayPeeringConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkmanagerTransitGatewayPeeringConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_networkmanager_transit_gateway_peering',
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
    this._coreNetworkId = config.coreNetworkId;
    this._id = config.id;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._transitGatewayArn = config.transitGatewayArn;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // core_network_arn - computed: true, optional: false, required: false
  public get coreNetworkArn() {
    return this.getStringAttribute('core_network_arn');
  }

  // core_network_id - computed: false, optional: false, required: true
  private _coreNetworkId?: string; 
  public get coreNetworkId() {
    return this.getStringAttribute('core_network_id');
  }
  public set coreNetworkId(value: string) {
    this._coreNetworkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get coreNetworkIdInput() {
    return this._coreNetworkId;
  }

  // edge_location - computed: true, optional: false, required: false
  public get edgeLocation() {
    return this.getStringAttribute('edge_location');
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

  // owner_account_id - computed: true, optional: false, required: false
  public get ownerAccountId() {
    return this.getStringAttribute('owner_account_id');
  }

  // peering_type - computed: true, optional: false, required: false
  public get peeringType() {
    return this.getStringAttribute('peering_type');
  }

  // resource_arn - computed: true, optional: false, required: false
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
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

  // transit_gateway_arn - computed: false, optional: false, required: true
  private _transitGatewayArn?: string; 
  public get transitGatewayArn() {
    return this.getStringAttribute('transit_gateway_arn');
  }
  public set transitGatewayArn(value: string) {
    this._transitGatewayArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGatewayArnInput() {
    return this._transitGatewayArn;
  }

  // transit_gateway_peering_attachment_id - computed: true, optional: false, required: false
  public get transitGatewayPeeringAttachmentId() {
    return this.getStringAttribute('transit_gateway_peering_attachment_id');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NetworkmanagerTransitGatewayPeeringTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NetworkmanagerTransitGatewayPeeringTimeouts) {
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
      core_network_id: cdktf.stringToTerraform(this._coreNetworkId),
      id: cdktf.stringToTerraform(this._id),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      transit_gateway_arn: cdktf.stringToTerraform(this._transitGatewayArn),
      timeouts: networkmanagerTransitGatewayPeeringTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
