// https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcPeeringConnectionAccepterAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#auto_accept VpcPeeringConnectionAccepterA#auto_accept}
  */
  readonly autoAccept?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#id VpcPeeringConnectionAccepterA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#tags VpcPeeringConnectionAccepterA#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#tags_all VpcPeeringConnectionAccepterA#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#vpc_peering_connection_id VpcPeeringConnectionAccepterA#vpc_peering_connection_id}
  */
  readonly vpcPeeringConnectionId: string;
  /**
  * accepter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#accepter VpcPeeringConnectionAccepterA#accepter}
  */
  readonly accepter?: VpcPeeringConnectionAccepterAccepter;
  /**
  * requester block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#requester VpcPeeringConnectionAccepterA#requester}
  */
  readonly requester?: VpcPeeringConnectionAccepterRequester;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#timeouts VpcPeeringConnectionAccepterA#timeouts}
  */
  readonly timeouts?: VpcPeeringConnectionAccepterTimeouts;
}
export interface VpcPeeringConnectionAccepterAccepter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#allow_classic_link_to_remote_vpc VpcPeeringConnectionAccepterA#allow_classic_link_to_remote_vpc}
  */
  readonly allowClassicLinkToRemoteVpc?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#allow_remote_vpc_dns_resolution VpcPeeringConnectionAccepterA#allow_remote_vpc_dns_resolution}
  */
  readonly allowRemoteVpcDnsResolution?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#allow_vpc_to_remote_classic_link VpcPeeringConnectionAccepterA#allow_vpc_to_remote_classic_link}
  */
  readonly allowVpcToRemoteClassicLink?: boolean | cdktf.IResolvable;
}

export function vpcPeeringConnectionAccepterAccepterToTerraform(struct?: VpcPeeringConnectionAccepterAccepterOutputReference | VpcPeeringConnectionAccepterAccepter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_classic_link_to_remote_vpc: cdktf.booleanToTerraform(struct!.allowClassicLinkToRemoteVpc),
    allow_remote_vpc_dns_resolution: cdktf.booleanToTerraform(struct!.allowRemoteVpcDnsResolution),
    allow_vpc_to_remote_classic_link: cdktf.booleanToTerraform(struct!.allowVpcToRemoteClassicLink),
  }
}

export class VpcPeeringConnectionAccepterAccepterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpcPeeringConnectionAccepterAccepter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowClassicLinkToRemoteVpc !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowClassicLinkToRemoteVpc = this._allowClassicLinkToRemoteVpc;
    }
    if (this._allowRemoteVpcDnsResolution !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowRemoteVpcDnsResolution = this._allowRemoteVpcDnsResolution;
    }
    if (this._allowVpcToRemoteClassicLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowVpcToRemoteClassicLink = this._allowVpcToRemoteClassicLink;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcPeeringConnectionAccepterAccepter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowClassicLinkToRemoteVpc = undefined;
      this._allowRemoteVpcDnsResolution = undefined;
      this._allowVpcToRemoteClassicLink = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowClassicLinkToRemoteVpc = value.allowClassicLinkToRemoteVpc;
      this._allowRemoteVpcDnsResolution = value.allowRemoteVpcDnsResolution;
      this._allowVpcToRemoteClassicLink = value.allowVpcToRemoteClassicLink;
    }
  }

  // allow_classic_link_to_remote_vpc - computed: false, optional: true, required: false
  private _allowClassicLinkToRemoteVpc?: boolean | cdktf.IResolvable; 
  public get allowClassicLinkToRemoteVpc() {
    return this.getBooleanAttribute('allow_classic_link_to_remote_vpc');
  }
  public set allowClassicLinkToRemoteVpc(value: boolean | cdktf.IResolvable) {
    this._allowClassicLinkToRemoteVpc = value;
  }
  public resetAllowClassicLinkToRemoteVpc() {
    this._allowClassicLinkToRemoteVpc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowClassicLinkToRemoteVpcInput() {
    return this._allowClassicLinkToRemoteVpc;
  }

  // allow_remote_vpc_dns_resolution - computed: false, optional: true, required: false
  private _allowRemoteVpcDnsResolution?: boolean | cdktf.IResolvable; 
  public get allowRemoteVpcDnsResolution() {
    return this.getBooleanAttribute('allow_remote_vpc_dns_resolution');
  }
  public set allowRemoteVpcDnsResolution(value: boolean | cdktf.IResolvable) {
    this._allowRemoteVpcDnsResolution = value;
  }
  public resetAllowRemoteVpcDnsResolution() {
    this._allowRemoteVpcDnsResolution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRemoteVpcDnsResolutionInput() {
    return this._allowRemoteVpcDnsResolution;
  }

  // allow_vpc_to_remote_classic_link - computed: false, optional: true, required: false
  private _allowVpcToRemoteClassicLink?: boolean | cdktf.IResolvable; 
  public get allowVpcToRemoteClassicLink() {
    return this.getBooleanAttribute('allow_vpc_to_remote_classic_link');
  }
  public set allowVpcToRemoteClassicLink(value: boolean | cdktf.IResolvable) {
    this._allowVpcToRemoteClassicLink = value;
  }
  public resetAllowVpcToRemoteClassicLink() {
    this._allowVpcToRemoteClassicLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowVpcToRemoteClassicLinkInput() {
    return this._allowVpcToRemoteClassicLink;
  }
}
export interface VpcPeeringConnectionAccepterRequester {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#allow_classic_link_to_remote_vpc VpcPeeringConnectionAccepterA#allow_classic_link_to_remote_vpc}
  */
  readonly allowClassicLinkToRemoteVpc?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#allow_remote_vpc_dns_resolution VpcPeeringConnectionAccepterA#allow_remote_vpc_dns_resolution}
  */
  readonly allowRemoteVpcDnsResolution?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#allow_vpc_to_remote_classic_link VpcPeeringConnectionAccepterA#allow_vpc_to_remote_classic_link}
  */
  readonly allowVpcToRemoteClassicLink?: boolean | cdktf.IResolvable;
}

export function vpcPeeringConnectionAccepterRequesterToTerraform(struct?: VpcPeeringConnectionAccepterRequesterOutputReference | VpcPeeringConnectionAccepterRequester): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_classic_link_to_remote_vpc: cdktf.booleanToTerraform(struct!.allowClassicLinkToRemoteVpc),
    allow_remote_vpc_dns_resolution: cdktf.booleanToTerraform(struct!.allowRemoteVpcDnsResolution),
    allow_vpc_to_remote_classic_link: cdktf.booleanToTerraform(struct!.allowVpcToRemoteClassicLink),
  }
}

export class VpcPeeringConnectionAccepterRequesterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpcPeeringConnectionAccepterRequester | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowClassicLinkToRemoteVpc !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowClassicLinkToRemoteVpc = this._allowClassicLinkToRemoteVpc;
    }
    if (this._allowRemoteVpcDnsResolution !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowRemoteVpcDnsResolution = this._allowRemoteVpcDnsResolution;
    }
    if (this._allowVpcToRemoteClassicLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowVpcToRemoteClassicLink = this._allowVpcToRemoteClassicLink;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcPeeringConnectionAccepterRequester | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowClassicLinkToRemoteVpc = undefined;
      this._allowRemoteVpcDnsResolution = undefined;
      this._allowVpcToRemoteClassicLink = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowClassicLinkToRemoteVpc = value.allowClassicLinkToRemoteVpc;
      this._allowRemoteVpcDnsResolution = value.allowRemoteVpcDnsResolution;
      this._allowVpcToRemoteClassicLink = value.allowVpcToRemoteClassicLink;
    }
  }

  // allow_classic_link_to_remote_vpc - computed: false, optional: true, required: false
  private _allowClassicLinkToRemoteVpc?: boolean | cdktf.IResolvable; 
  public get allowClassicLinkToRemoteVpc() {
    return this.getBooleanAttribute('allow_classic_link_to_remote_vpc');
  }
  public set allowClassicLinkToRemoteVpc(value: boolean | cdktf.IResolvable) {
    this._allowClassicLinkToRemoteVpc = value;
  }
  public resetAllowClassicLinkToRemoteVpc() {
    this._allowClassicLinkToRemoteVpc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowClassicLinkToRemoteVpcInput() {
    return this._allowClassicLinkToRemoteVpc;
  }

  // allow_remote_vpc_dns_resolution - computed: false, optional: true, required: false
  private _allowRemoteVpcDnsResolution?: boolean | cdktf.IResolvable; 
  public get allowRemoteVpcDnsResolution() {
    return this.getBooleanAttribute('allow_remote_vpc_dns_resolution');
  }
  public set allowRemoteVpcDnsResolution(value: boolean | cdktf.IResolvable) {
    this._allowRemoteVpcDnsResolution = value;
  }
  public resetAllowRemoteVpcDnsResolution() {
    this._allowRemoteVpcDnsResolution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRemoteVpcDnsResolutionInput() {
    return this._allowRemoteVpcDnsResolution;
  }

  // allow_vpc_to_remote_classic_link - computed: false, optional: true, required: false
  private _allowVpcToRemoteClassicLink?: boolean | cdktf.IResolvable; 
  public get allowVpcToRemoteClassicLink() {
    return this.getBooleanAttribute('allow_vpc_to_remote_classic_link');
  }
  public set allowVpcToRemoteClassicLink(value: boolean | cdktf.IResolvable) {
    this._allowVpcToRemoteClassicLink = value;
  }
  public resetAllowVpcToRemoteClassicLink() {
    this._allowVpcToRemoteClassicLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowVpcToRemoteClassicLinkInput() {
    return this._allowVpcToRemoteClassicLink;
  }
}
export interface VpcPeeringConnectionAccepterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#create VpcPeeringConnectionAccepterA#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter#update VpcPeeringConnectionAccepterA#update}
  */
  readonly update?: string;
}

export function vpcPeeringConnectionAccepterTimeoutsToTerraform(struct?: VpcPeeringConnectionAccepterTimeoutsOutputReference | VpcPeeringConnectionAccepterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class VpcPeeringConnectionAccepterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpcPeeringConnectionAccepterTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcPeeringConnectionAccepterTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter aws_vpc_peering_connection_accepter}
*/
export class VpcPeeringConnectionAccepterA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_vpc_peering_connection_accepter";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter aws_vpc_peering_connection_accepter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcPeeringConnectionAccepterAConfig
  */
  public constructor(scope: Construct, id: string, config: VpcPeeringConnectionAccepterAConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_vpc_peering_connection_accepter',
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
    this._autoAccept = config.autoAccept;
    this._id = config.id;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._vpcPeeringConnectionId = config.vpcPeeringConnectionId;
    this._accepter.internalValue = config.accepter;
    this._requester.internalValue = config.requester;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accept_status - computed: true, optional: false, required: false
  public get acceptStatus() {
    return this.getStringAttribute('accept_status');
  }

  // auto_accept - computed: false, optional: true, required: false
  private _autoAccept?: boolean | cdktf.IResolvable; 
  public get autoAccept() {
    return this.getBooleanAttribute('auto_accept');
  }
  public set autoAccept(value: boolean | cdktf.IResolvable) {
    this._autoAccept = value;
  }
  public resetAutoAccept() {
    this._autoAccept = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoAcceptInput() {
    return this._autoAccept;
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

  // peer_owner_id - computed: true, optional: false, required: false
  public get peerOwnerId() {
    return this.getStringAttribute('peer_owner_id');
  }

  // peer_region - computed: true, optional: false, required: false
  public get peerRegion() {
    return this.getStringAttribute('peer_region');
  }

  // peer_vpc_id - computed: true, optional: false, required: false
  public get peerVpcId() {
    return this.getStringAttribute('peer_vpc_id');
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

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // vpc_peering_connection_id - computed: false, optional: false, required: true
  private _vpcPeeringConnectionId?: string; 
  public get vpcPeeringConnectionId() {
    return this.getStringAttribute('vpc_peering_connection_id');
  }
  public set vpcPeeringConnectionId(value: string) {
    this._vpcPeeringConnectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcPeeringConnectionIdInput() {
    return this._vpcPeeringConnectionId;
  }

  // accepter - computed: false, optional: true, required: false
  private _accepter = new VpcPeeringConnectionAccepterAccepterOutputReference(this, "accepter");
  public get accepter() {
    return this._accepter;
  }
  public putAccepter(value: VpcPeeringConnectionAccepterAccepter) {
    this._accepter.internalValue = value;
  }
  public resetAccepter() {
    this._accepter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accepterInput() {
    return this._accepter.internalValue;
  }

  // requester - computed: false, optional: true, required: false
  private _requester = new VpcPeeringConnectionAccepterRequesterOutputReference(this, "requester");
  public get requester() {
    return this._requester;
  }
  public putRequester(value: VpcPeeringConnectionAccepterRequester) {
    this._requester.internalValue = value;
  }
  public resetRequester() {
    this._requester.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requesterInput() {
    return this._requester.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VpcPeeringConnectionAccepterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VpcPeeringConnectionAccepterTimeouts) {
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
      auto_accept: cdktf.booleanToTerraform(this._autoAccept),
      id: cdktf.stringToTerraform(this._id),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      vpc_peering_connection_id: cdktf.stringToTerraform(this._vpcPeeringConnectionId),
      accepter: vpcPeeringConnectionAccepterAccepterToTerraform(this._accepter.internalValue),
      requester: vpcPeeringConnectionAccepterRequesterToTerraform(this._requester.internalValue),
      timeouts: vpcPeeringConnectionAccepterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
