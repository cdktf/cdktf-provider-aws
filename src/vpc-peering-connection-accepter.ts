// https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter_a.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcPeeringConnectionAccepterAConfig extends cdktf.TerraformMetaArguments {
  readonly autoAccept?: boolean;
  readonly tags?: { [key: string]: string };
  readonly vpcPeeringConnectionId: string;
  /** accepter block */
  readonly accepter?: VpcPeeringConnectionAccepterAccepter[];
  /** requester block */
  readonly requester?: VpcPeeringConnectionAccepterRequester[];
}
export interface VpcPeeringConnectionAccepterAccepter {
  readonly allowClassicLinkToRemoteVpc?: boolean;
  readonly allowRemoteVpcDnsResolution?: boolean;
  readonly allowVpcToRemoteClassicLink?: boolean;
}

function vpcPeeringConnectionAccepterAccepterToTerraform(struct?: VpcPeeringConnectionAccepterAccepter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allow_classic_link_to_remote_vpc: cdktf.booleanToTerraform(struct!.allowClassicLinkToRemoteVpc),
    allow_remote_vpc_dns_resolution: cdktf.booleanToTerraform(struct!.allowRemoteVpcDnsResolution),
    allow_vpc_to_remote_classic_link: cdktf.booleanToTerraform(struct!.allowVpcToRemoteClassicLink),
  }
}

export interface VpcPeeringConnectionAccepterRequester {
  readonly allowClassicLinkToRemoteVpc?: boolean;
  readonly allowRemoteVpcDnsResolution?: boolean;
  readonly allowVpcToRemoteClassicLink?: boolean;
}

function vpcPeeringConnectionAccepterRequesterToTerraform(struct?: VpcPeeringConnectionAccepterRequester): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allow_classic_link_to_remote_vpc: cdktf.booleanToTerraform(struct!.allowClassicLinkToRemoteVpc),
    allow_remote_vpc_dns_resolution: cdktf.booleanToTerraform(struct!.allowRemoteVpcDnsResolution),
    allow_vpc_to_remote_classic_link: cdktf.booleanToTerraform(struct!.allowVpcToRemoteClassicLink),
  }
}


// Resource

export class VpcPeeringConnectionAccepterA extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: VpcPeeringConnectionAccepterAConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_vpc_peering_connection_accepter',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._autoAccept = config.autoAccept;
    this._tags = config.tags;
    this._vpcPeeringConnectionId = config.vpcPeeringConnectionId;
    this._accepter = config.accepter;
    this._requester = config.requester;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accept_status - computed: true, optional: false, required: false
  public get acceptStatus() {
    return this.getStringAttribute('accept_status');
  }

  // auto_accept - computed: false, optional: true, required: false
  private _autoAccept?: boolean;
  public get autoAccept() {
    return this.getBooleanAttribute('auto_accept');
  }
  public set autoAccept(value: boolean ) {
    this._autoAccept = value;
  }
  public resetAutoAccept() {
    this._autoAccept = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoAcceptInput() {
    return this._autoAccept
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // vpc_peering_connection_id - computed: false, optional: false, required: true
  private _vpcPeeringConnectionId: string;
  public get vpcPeeringConnectionId() {
    return this.getStringAttribute('vpc_peering_connection_id');
  }
  public set vpcPeeringConnectionId(value: string) {
    this._vpcPeeringConnectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcPeeringConnectionIdInput() {
    return this._vpcPeeringConnectionId
  }

  // accepter - computed: false, optional: true, required: false
  private _accepter?: VpcPeeringConnectionAccepterAccepter[];
  public get accepter() {
    return this.interpolationForAttribute('accepter') as any;
  }
  public set accepter(value: VpcPeeringConnectionAccepterAccepter[] ) {
    this._accepter = value;
  }
  public resetAccepter() {
    this._accepter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accepterInput() {
    return this._accepter
  }

  // requester - computed: false, optional: true, required: false
  private _requester?: VpcPeeringConnectionAccepterRequester[];
  public get requester() {
    return this.interpolationForAttribute('requester') as any;
  }
  public set requester(value: VpcPeeringConnectionAccepterRequester[] ) {
    this._requester = value;
  }
  public resetRequester() {
    this._requester = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requesterInput() {
    return this._requester
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_accept: cdktf.booleanToTerraform(this._autoAccept),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      vpc_peering_connection_id: cdktf.stringToTerraform(this._vpcPeeringConnectionId),
      accepter: cdktf.listMapper(vpcPeeringConnectionAccepterAccepterToTerraform)(this._accepter),
      requester: cdktf.listMapper(vpcPeeringConnectionAccepterRequesterToTerraform)(this._requester),
    };
  }
}
