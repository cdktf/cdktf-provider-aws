// https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface VpcPeeringConnectionOptionsConfig extends TerraformMetaArguments {
  readonly vpcPeeringConnectionId: string;
  /** accepter block */
  readonly accepter?: VpcPeeringConnectionOptionsAccepter[];
  /** requester block */
  readonly requester?: VpcPeeringConnectionOptionsRequester[];
}
export interface VpcPeeringConnectionOptionsAccepter {
  readonly allowClassicLinkToRemoteVpc?: boolean;
  readonly allowRemoteVpcDnsResolution?: boolean;
  readonly allowVpcToRemoteClassicLink?: boolean;
}
export interface VpcPeeringConnectionOptionsRequester {
  readonly allowClassicLinkToRemoteVpc?: boolean;
  readonly allowRemoteVpcDnsResolution?: boolean;
  readonly allowVpcToRemoteClassicLink?: boolean;
}

// Resource

export class VpcPeeringConnectionOptions extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: VpcPeeringConnectionOptionsConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_vpc_peering_connection_options',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._vpcPeeringConnectionId = config.vpcPeeringConnectionId;
    this._accepter = config.accepter;
    this._requester = config.requester;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // vpc_peering_connection_id - computed: false, optional: false, required: true
  private _vpcPeeringConnectionId: string;
  public get vpcPeeringConnectionId() {
    return this._vpcPeeringConnectionId;
  }
  public set vpcPeeringConnectionId(value: string) {
    this._vpcPeeringConnectionId = value;
  }

  // accepter - computed: false, optional: true, required: false
  private _accepter?: VpcPeeringConnectionOptionsAccepter[];
  public get accepter() {
    return this._accepter;
  }
  public set accepter(value: VpcPeeringConnectionOptionsAccepter[] | undefined) {
    this._accepter = value;
  }

  // requester - computed: false, optional: true, required: false
  private _requester?: VpcPeeringConnectionOptionsRequester[];
  public get requester() {
    return this._requester;
  }
  public set requester(value: VpcPeeringConnectionOptionsRequester[] | undefined) {
    this._requester = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      vpc_peering_connection_id: this._vpcPeeringConnectionId,
      accepter: this._accepter,
      requester: this._requester,
    };
  }
}
