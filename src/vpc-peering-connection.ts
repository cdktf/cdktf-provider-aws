// https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface VpcPeeringConnectionConfig extends TerraformMetaArguments {
  readonly autoAccept?: boolean;
  readonly peerOwnerId?: string;
  readonly peerRegion?: string;
  readonly peerVpcId: string;
  readonly tags?: { [key: string]: string };
  readonly vpcId: string;
  /** accepter block */
  readonly accepter?: VpcPeeringConnectionAccepter[];
  /** requester block */
  readonly requester?: VpcPeeringConnectionRequester[];
  /** timeouts block */
  readonly timeouts?: VpcPeeringConnectionTimeouts;
}
export interface VpcPeeringConnectionAccepter {
  readonly allowClassicLinkToRemoteVpc?: boolean;
  readonly allowRemoteVpcDnsResolution?: boolean;
  readonly allowVpcToRemoteClassicLink?: boolean;
}
export interface VpcPeeringConnectionRequester {
  readonly allowClassicLinkToRemoteVpc?: boolean;
  readonly allowRemoteVpcDnsResolution?: boolean;
  readonly allowVpcToRemoteClassicLink?: boolean;
}
export interface VpcPeeringConnectionTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class VpcPeeringConnection extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
    this._vpcId = config.vpcId;
    this._accepter = config.accepter;
    this._requester = config.requester;
    this._timeouts = config.timeouts;
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
    return this._peerOwnerId
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
    return this._peerRegion
  }

  // peer_vpc_id - computed: false, optional: false, required: true
  private _peerVpcId: string;
  public get peerVpcId() {
    return this.getStringAttribute('peer_vpc_id');
  }
  public set peerVpcId(value: string) {
    this._peerVpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerVpcIdInput() {
    return this._peerVpcId
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

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId: string;
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId
  }

  // accepter - computed: false, optional: true, required: false
  private _accepter?: VpcPeeringConnectionAccepter[];
  public get accepter() {
    return this.interpolationForAttribute('accepter') as any;
  }
  public set accepter(value: VpcPeeringConnectionAccepter[] ) {
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
  private _requester?: VpcPeeringConnectionRequester[];
  public get requester() {
    return this.interpolationForAttribute('requester') as any;
  }
  public set requester(value: VpcPeeringConnectionRequester[] ) {
    this._requester = value;
  }
  public resetRequester() {
    this._requester = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requesterInput() {
    return this._requester
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: VpcPeeringConnectionTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: VpcPeeringConnectionTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_accept: this._autoAccept,
      peer_owner_id: this._peerOwnerId,
      peer_region: this._peerRegion,
      peer_vpc_id: this._peerVpcId,
      tags: this._tags,
      vpc_id: this._vpcId,
      accepter: this._accepter,
      requester: this._requester,
      timeouts: this._timeouts,
    };
  }
}
