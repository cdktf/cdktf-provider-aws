// https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcPeeringConnectionOptionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options.html#vpc_peering_connection_id VpcPeeringConnectionOptions#vpc_peering_connection_id}
  */
  readonly vpcPeeringConnectionId: string;
  /**
  * accepter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options.html#accepter VpcPeeringConnectionOptions#accepter}
  */
  readonly accepter?: VpcPeeringConnectionOptionsAccepter[];
  /**
  * requester block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options.html#requester VpcPeeringConnectionOptions#requester}
  */
  readonly requester?: VpcPeeringConnectionOptionsRequester[];
}
export interface VpcPeeringConnectionOptionsAccepter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options.html#allow_classic_link_to_remote_vpc VpcPeeringConnectionOptions#allow_classic_link_to_remote_vpc}
  */
  readonly allowClassicLinkToRemoteVpc?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options.html#allow_remote_vpc_dns_resolution VpcPeeringConnectionOptions#allow_remote_vpc_dns_resolution}
  */
  readonly allowRemoteVpcDnsResolution?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options.html#allow_vpc_to_remote_classic_link VpcPeeringConnectionOptions#allow_vpc_to_remote_classic_link}
  */
  readonly allowVpcToRemoteClassicLink?: boolean | cdktf.IResolvable;
}

function vpcPeeringConnectionOptionsAccepterToTerraform(struct?: VpcPeeringConnectionOptionsAccepter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allow_classic_link_to_remote_vpc: cdktf.booleanToTerraform(struct!.allowClassicLinkToRemoteVpc),
    allow_remote_vpc_dns_resolution: cdktf.booleanToTerraform(struct!.allowRemoteVpcDnsResolution),
    allow_vpc_to_remote_classic_link: cdktf.booleanToTerraform(struct!.allowVpcToRemoteClassicLink),
  }
}

export interface VpcPeeringConnectionOptionsRequester {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options.html#allow_classic_link_to_remote_vpc VpcPeeringConnectionOptions#allow_classic_link_to_remote_vpc}
  */
  readonly allowClassicLinkToRemoteVpc?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options.html#allow_remote_vpc_dns_resolution VpcPeeringConnectionOptions#allow_remote_vpc_dns_resolution}
  */
  readonly allowRemoteVpcDnsResolution?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options.html#allow_vpc_to_remote_classic_link VpcPeeringConnectionOptions#allow_vpc_to_remote_classic_link}
  */
  readonly allowVpcToRemoteClassicLink?: boolean | cdktf.IResolvable;
}

function vpcPeeringConnectionOptionsRequesterToTerraform(struct?: VpcPeeringConnectionOptionsRequester): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allow_classic_link_to_remote_vpc: cdktf.booleanToTerraform(struct!.allowClassicLinkToRemoteVpc),
    allow_remote_vpc_dns_resolution: cdktf.booleanToTerraform(struct!.allowRemoteVpcDnsResolution),
    allow_vpc_to_remote_classic_link: cdktf.booleanToTerraform(struct!.allowVpcToRemoteClassicLink),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options.html aws_vpc_peering_connection_options}
*/
export class VpcPeeringConnectionOptions extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_vpc_peering_connection_options";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_options.html aws_vpc_peering_connection_options} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcPeeringConnectionOptionsConfig
  */
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
      vpc_peering_connection_id: cdktf.stringToTerraform(this._vpcPeeringConnectionId),
      accepter: cdktf.listMapper(vpcPeeringConnectionOptionsAccepterToTerraform)(this._accepter),
      requester: cdktf.listMapper(vpcPeeringConnectionOptionsRequesterToTerraform)(this._requester),
    };
  }
}
