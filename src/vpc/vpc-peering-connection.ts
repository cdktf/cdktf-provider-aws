// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS VPC
*/
export interface VpcPeeringConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection.html#auto_accept VpcPeeringConnection#auto_accept}
  */
  readonly autoAccept?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection.html#peer_owner_id VpcPeeringConnection#peer_owner_id}
  */
  readonly peerOwnerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection.html#peer_region VpcPeeringConnection#peer_region}
  */
  readonly peerRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection.html#peer_vpc_id VpcPeeringConnection#peer_vpc_id}
  */
  readonly peerVpcId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection.html#tags VpcPeeringConnection#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection.html#tags_all VpcPeeringConnection#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection.html#vpc_id VpcPeeringConnection#vpc_id}
  */
  readonly vpcId: string;
  /**
  * accepter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection.html#accepter VpcPeeringConnection#accepter}
  */
  readonly accepter?: VpcPeeringConnectionAccepter;
  /**
  * requester block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection.html#requester VpcPeeringConnection#requester}
  */
  readonly requester?: VpcPeeringConnectionRequester;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection.html#timeouts VpcPeeringConnection#timeouts}
  */
  readonly timeouts?: VpcPeeringConnectionTimeouts;
}
export interface VpcPeeringConnectionAccepter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection.html#allow_classic_link_to_remote_vpc VpcPeeringConnection#allow_classic_link_to_remote_vpc}
  */
  readonly allowClassicLinkToRemoteVpc?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection.html#allow_remote_vpc_dns_resolution VpcPeeringConnection#allow_remote_vpc_dns_resolution}
  */
  readonly allowRemoteVpcDnsResolution?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection.html#allow_vpc_to_remote_classic_link VpcPeeringConnection#allow_vpc_to_remote_classic_link}
  */
  readonly allowVpcToRemoteClassicLink?: boolean | cdktf.IResolvable;
}

export function vpcPeeringConnectionAccepterToTerraform(struct?: VpcPeeringConnectionAccepterOutputReference | VpcPeeringConnectionAccepter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_classic_link_to_remote_vpc: cdktf.booleanToTerraform(struct!.allowClassicLinkToRemoteVpc),
    allow_remote_vpc_dns_resolution: cdktf.booleanToTerraform(struct!.allowRemoteVpcDnsResolution),
    allow_vpc_to_remote_classic_link: cdktf.booleanToTerraform(struct!.allowVpcToRemoteClassicLink),
  }
}

export class VpcPeeringConnectionAccepterOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): VpcPeeringConnectionAccepter | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._allowClassicLinkToRemoteVpc) {
      hasAnyValues = true;
      internalValueResult.allowClassicLinkToRemoteVpc = this._allowClassicLinkToRemoteVpc;
    }
    if (this._allowRemoteVpcDnsResolution) {
      hasAnyValues = true;
      internalValueResult.allowRemoteVpcDnsResolution = this._allowRemoteVpcDnsResolution;
    }
    if (this._allowVpcToRemoteClassicLink) {
      hasAnyValues = true;
      internalValueResult.allowVpcToRemoteClassicLink = this._allowVpcToRemoteClassicLink;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcPeeringConnectionAccepter | undefined) {
    if (value === undefined) {
      this._allowClassicLinkToRemoteVpc = undefined;
      this._allowRemoteVpcDnsResolution = undefined;
      this._allowVpcToRemoteClassicLink = undefined;
    }
    else {
      this._allowClassicLinkToRemoteVpc = value.allowClassicLinkToRemoteVpc;
      this._allowRemoteVpcDnsResolution = value.allowRemoteVpcDnsResolution;
      this._allowVpcToRemoteClassicLink = value.allowVpcToRemoteClassicLink;
    }
  }

  // allow_classic_link_to_remote_vpc - computed: false, optional: true, required: false
  private _allowClassicLinkToRemoteVpc?: boolean | cdktf.IResolvable; 
  public get allowClassicLinkToRemoteVpc() {
    return this.getBooleanAttribute('allow_classic_link_to_remote_vpc') as any;
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
    return this.getBooleanAttribute('allow_remote_vpc_dns_resolution') as any;
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
    return this.getBooleanAttribute('allow_vpc_to_remote_classic_link') as any;
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
export interface VpcPeeringConnectionRequester {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection.html#allow_classic_link_to_remote_vpc VpcPeeringConnection#allow_classic_link_to_remote_vpc}
  */
  readonly allowClassicLinkToRemoteVpc?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection.html#allow_remote_vpc_dns_resolution VpcPeeringConnection#allow_remote_vpc_dns_resolution}
  */
  readonly allowRemoteVpcDnsResolution?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection.html#allow_vpc_to_remote_classic_link VpcPeeringConnection#allow_vpc_to_remote_classic_link}
  */
  readonly allowVpcToRemoteClassicLink?: boolean | cdktf.IResolvable;
}

export function vpcPeeringConnectionRequesterToTerraform(struct?: VpcPeeringConnectionRequesterOutputReference | VpcPeeringConnectionRequester): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_classic_link_to_remote_vpc: cdktf.booleanToTerraform(struct!.allowClassicLinkToRemoteVpc),
    allow_remote_vpc_dns_resolution: cdktf.booleanToTerraform(struct!.allowRemoteVpcDnsResolution),
    allow_vpc_to_remote_classic_link: cdktf.booleanToTerraform(struct!.allowVpcToRemoteClassicLink),
  }
}

export class VpcPeeringConnectionRequesterOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): VpcPeeringConnectionRequester | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._allowClassicLinkToRemoteVpc) {
      hasAnyValues = true;
      internalValueResult.allowClassicLinkToRemoteVpc = this._allowClassicLinkToRemoteVpc;
    }
    if (this._allowRemoteVpcDnsResolution) {
      hasAnyValues = true;
      internalValueResult.allowRemoteVpcDnsResolution = this._allowRemoteVpcDnsResolution;
    }
    if (this._allowVpcToRemoteClassicLink) {
      hasAnyValues = true;
      internalValueResult.allowVpcToRemoteClassicLink = this._allowVpcToRemoteClassicLink;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcPeeringConnectionRequester | undefined) {
    if (value === undefined) {
      this._allowClassicLinkToRemoteVpc = undefined;
      this._allowRemoteVpcDnsResolution = undefined;
      this._allowVpcToRemoteClassicLink = undefined;
    }
    else {
      this._allowClassicLinkToRemoteVpc = value.allowClassicLinkToRemoteVpc;
      this._allowRemoteVpcDnsResolution = value.allowRemoteVpcDnsResolution;
      this._allowVpcToRemoteClassicLink = value.allowVpcToRemoteClassicLink;
    }
  }

  // allow_classic_link_to_remote_vpc - computed: false, optional: true, required: false
  private _allowClassicLinkToRemoteVpc?: boolean | cdktf.IResolvable; 
  public get allowClassicLinkToRemoteVpc() {
    return this.getBooleanAttribute('allow_classic_link_to_remote_vpc') as any;
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
    return this.getBooleanAttribute('allow_remote_vpc_dns_resolution') as any;
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
    return this.getBooleanAttribute('allow_vpc_to_remote_classic_link') as any;
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
export interface VpcPeeringConnectionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection.html#create VpcPeeringConnection#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection.html#delete VpcPeeringConnection#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection.html#update VpcPeeringConnection#update}
  */
  readonly update?: string;
}

export function vpcPeeringConnectionTimeoutsToTerraform(struct?: VpcPeeringConnectionTimeoutsOutputReference | VpcPeeringConnectionTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class VpcPeeringConnectionTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): VpcPeeringConnectionTimeouts | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._create) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcPeeringConnectionTimeouts | undefined) {
    if (value === undefined) {
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else {
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection.html aws_vpc_peering_connection}
*/
export class VpcPeeringConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_vpc_peering_connection";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection.html aws_vpc_peering_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcPeeringConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: VpcPeeringConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_vpc_peering_connection',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._autoAccept = config.autoAccept;
    this._peerOwnerId = config.peerOwnerId;
    this._peerRegion = config.peerRegion;
    this._peerVpcId = config.peerVpcId;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._vpcId = config.vpcId;
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
    return this.getBooleanAttribute('auto_accept') as any;
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
  public get id() {
    return this.getStringAttribute('id');
  }

  // peer_owner_id - computed: true, optional: true, required: false
  private _peerOwnerId?: string; 
  public get peerOwnerId() {
    return this.getStringAttribute('peer_owner_id');
  }
  public set peerOwnerId(value: string) {
    this._peerOwnerId = value;
  }
  public resetPeerOwnerId() {
    this._peerOwnerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerOwnerIdInput() {
    return this._peerOwnerId;
  }

  // peer_region - computed: true, optional: true, required: false
  private _peerRegion?: string; 
  public get peerRegion() {
    return this.getStringAttribute('peer_region');
  }
  public set peerRegion(value: string) {
    this._peerRegion = value;
  }
  public resetPeerRegion() {
    this._peerRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerRegionInput() {
    return this._peerRegion;
  }

  // peer_vpc_id - computed: false, optional: false, required: true
  private _peerVpcId?: string; 
  public get peerVpcId() {
    return this.getStringAttribute('peer_vpc_id');
  }
  public set peerVpcId(value: string) {
    this._peerVpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerVpcIdInput() {
    return this._peerVpcId;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
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
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable; 
  public get tagsAll() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags_all') as any;
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // accepter - computed: false, optional: true, required: false
  private _accepter = new VpcPeeringConnectionAccepterOutputReference(this as any, "accepter", true);
  public get accepter() {
    return this._accepter;
  }
  public putAccepter(value: VpcPeeringConnectionAccepter) {
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
  private _requester = new VpcPeeringConnectionRequesterOutputReference(this as any, "requester", true);
  public get requester() {
    return this._requester;
  }
  public putRequester(value: VpcPeeringConnectionRequester) {
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
  private _timeouts = new VpcPeeringConnectionTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VpcPeeringConnectionTimeouts) {
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
      peer_owner_id: cdktf.stringToTerraform(this._peerOwnerId),
      peer_region: cdktf.stringToTerraform(this._peerRegion),
      peer_vpc_id: cdktf.stringToTerraform(this._peerVpcId),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      accepter: vpcPeeringConnectionAccepterToTerraform(this._accepter.internalValue),
      requester: vpcPeeringConnectionRequesterToTerraform(this._requester.internalValue),
      timeouts: vpcPeeringConnectionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
