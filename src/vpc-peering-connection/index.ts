/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_peering_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcPeeringConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_peering_connection#auto_accept VpcPeeringConnection#auto_accept}
  */
  readonly autoAccept?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_peering_connection#id VpcPeeringConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_peering_connection#peer_owner_id VpcPeeringConnection#peer_owner_id}
  */
  readonly peerOwnerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_peering_connection#peer_region VpcPeeringConnection#peer_region}
  */
  readonly peerRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_peering_connection#peer_vpc_id VpcPeeringConnection#peer_vpc_id}
  */
  readonly peerVpcId: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_peering_connection#region VpcPeeringConnection#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_peering_connection#tags VpcPeeringConnection#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_peering_connection#tags_all VpcPeeringConnection#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_peering_connection#vpc_id VpcPeeringConnection#vpc_id}
  */
  readonly vpcId: string;
  /**
  * accepter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_peering_connection#accepter VpcPeeringConnection#accepter}
  */
  readonly accepter?: VpcPeeringConnectionAccepter;
  /**
  * requester block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_peering_connection#requester VpcPeeringConnection#requester}
  */
  readonly requester?: VpcPeeringConnectionRequester;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_peering_connection#timeouts VpcPeeringConnection#timeouts}
  */
  readonly timeouts?: VpcPeeringConnectionTimeouts;
}
export interface VpcPeeringConnectionAccepter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_peering_connection#allow_remote_vpc_dns_resolution VpcPeeringConnection#allow_remote_vpc_dns_resolution}
  */
  readonly allowRemoteVpcDnsResolution?: boolean | cdktf.IResolvable;
}

export function vpcPeeringConnectionAccepterToTerraform(struct?: VpcPeeringConnectionAccepterOutputReference | VpcPeeringConnectionAccepter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_remote_vpc_dns_resolution: cdktf.booleanToTerraform(struct!.allowRemoteVpcDnsResolution),
  }
}


export function vpcPeeringConnectionAccepterToHclTerraform(struct?: VpcPeeringConnectionAccepterOutputReference | VpcPeeringConnectionAccepter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_remote_vpc_dns_resolution: {
      value: cdktf.booleanToHclTerraform(struct!.allowRemoteVpcDnsResolution),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpcPeeringConnectionAccepterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpcPeeringConnectionAccepter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowRemoteVpcDnsResolution !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowRemoteVpcDnsResolution = this._allowRemoteVpcDnsResolution;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcPeeringConnectionAccepter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowRemoteVpcDnsResolution = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowRemoteVpcDnsResolution = value.allowRemoteVpcDnsResolution;
    }
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
}
export interface VpcPeeringConnectionRequester {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_peering_connection#allow_remote_vpc_dns_resolution VpcPeeringConnection#allow_remote_vpc_dns_resolution}
  */
  readonly allowRemoteVpcDnsResolution?: boolean | cdktf.IResolvable;
}

export function vpcPeeringConnectionRequesterToTerraform(struct?: VpcPeeringConnectionRequesterOutputReference | VpcPeeringConnectionRequester): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_remote_vpc_dns_resolution: cdktf.booleanToTerraform(struct!.allowRemoteVpcDnsResolution),
  }
}


export function vpcPeeringConnectionRequesterToHclTerraform(struct?: VpcPeeringConnectionRequesterOutputReference | VpcPeeringConnectionRequester): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_remote_vpc_dns_resolution: {
      value: cdktf.booleanToHclTerraform(struct!.allowRemoteVpcDnsResolution),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpcPeeringConnectionRequesterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpcPeeringConnectionRequester | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowRemoteVpcDnsResolution !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowRemoteVpcDnsResolution = this._allowRemoteVpcDnsResolution;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcPeeringConnectionRequester | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowRemoteVpcDnsResolution = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowRemoteVpcDnsResolution = value.allowRemoteVpcDnsResolution;
    }
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
}
export interface VpcPeeringConnectionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_peering_connection#create VpcPeeringConnection#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_peering_connection#delete VpcPeeringConnection#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_peering_connection#update VpcPeeringConnection#update}
  */
  readonly update?: string;
}

export function vpcPeeringConnectionTimeoutsToTerraform(struct?: VpcPeeringConnectionTimeouts | cdktf.IResolvable): any {
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


export function vpcPeeringConnectionTimeoutsToHclTerraform(struct?: VpcPeeringConnectionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpcPeeringConnectionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VpcPeeringConnectionTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VpcPeeringConnectionTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_peering_connection aws_vpc_peering_connection}
*/
export class VpcPeeringConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_vpc_peering_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpcPeeringConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpcPeeringConnection to import
  * @param importFromId The id of the existing VpcPeeringConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_peering_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpcPeeringConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_vpc_peering_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/vpc_peering_connection aws_vpc_peering_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcPeeringConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: VpcPeeringConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_vpc_peering_connection',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.4.0',
        providerVersionConstraint: '~> 6.0'
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
    this._peerOwnerId = config.peerOwnerId;
    this._peerRegion = config.peerRegion;
    this._peerVpcId = config.peerVpcId;
    this._region = config.region;
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

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
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
  private _accepter = new VpcPeeringConnectionAccepterOutputReference(this, "accepter");
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
  private _requester = new VpcPeeringConnectionRequesterOutputReference(this, "requester");
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
  private _timeouts = new VpcPeeringConnectionTimeoutsOutputReference(this, "timeouts");
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
      id: cdktf.stringToTerraform(this._id),
      peer_owner_id: cdktf.stringToTerraform(this._peerOwnerId),
      peer_region: cdktf.stringToTerraform(this._peerRegion),
      peer_vpc_id: cdktf.stringToTerraform(this._peerVpcId),
      region: cdktf.stringToTerraform(this._region),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      accepter: vpcPeeringConnectionAccepterToTerraform(this._accepter.internalValue),
      requester: vpcPeeringConnectionRequesterToTerraform(this._requester.internalValue),
      timeouts: vpcPeeringConnectionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_accept: {
        value: cdktf.booleanToHclTerraform(this._autoAccept),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer_owner_id: {
        value: cdktf.stringToHclTerraform(this._peerOwnerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer_region: {
        value: cdktf.stringToHclTerraform(this._peerRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer_vpc_id: {
        value: cdktf.stringToHclTerraform(this._peerVpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tags_all: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tagsAll),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      accepter: {
        value: vpcPeeringConnectionAccepterToHclTerraform(this._accepter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpcPeeringConnectionAccepterList",
      },
      requester: {
        value: vpcPeeringConnectionRequesterToHclTerraform(this._requester.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpcPeeringConnectionRequesterList",
      },
      timeouts: {
        value: vpcPeeringConnectionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VpcPeeringConnectionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
