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
  public get id() {
    return this.getStringAttribute('id');
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
  private _accepter?: VpcPeeringConnectionOptionsAccepter[];
  public get accepter() {
    return this.interpolationForAttribute('accepter') as any;
  }
  public set accepter(value: VpcPeeringConnectionOptionsAccepter[] ) {
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
  private _requester?: VpcPeeringConnectionOptionsRequester[];
  public get requester() {
    return this.interpolationForAttribute('requester') as any;
  }
  public set requester(value: VpcPeeringConnectionOptionsRequester[] ) {
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
      vpc_peering_connection_id: this._vpcPeeringConnectionId,
      accepter: this._accepter,
      requester: this._requester,
    };
  }
}
