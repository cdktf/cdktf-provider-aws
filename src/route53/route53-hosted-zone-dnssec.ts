// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Route 53
*/
export interface Route53HostedZoneDnssecConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_hosted_zone_dnssec#hosted_zone_id Route53HostedZoneDnssec#hosted_zone_id}
  */
  readonly hostedZoneId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_hosted_zone_dnssec#signing_status Route53HostedZoneDnssec#signing_status}
  */
  readonly signingStatus?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_hosted_zone_dnssec aws_route53_hosted_zone_dnssec}
*/
export class Route53HostedZoneDnssec extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_route53_hosted_zone_dnssec";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53_hosted_zone_dnssec aws_route53_hosted_zone_dnssec} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Route53HostedZoneDnssecConfig
  */
  public constructor(scope: Construct, id: string, config: Route53HostedZoneDnssecConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_route53_hosted_zone_dnssec',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._hostedZoneId = config.hostedZoneId;
    this._signingStatus = config.signingStatus;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // hosted_zone_id - computed: false, optional: false, required: true
  private _hostedZoneId?: string; 
  public get hostedZoneId() {
    return this.getStringAttribute('hosted_zone_id');
  }
  public set hostedZoneId(value: string) {
    this._hostedZoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostedZoneIdInput() {
    return this._hostedZoneId;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // signing_status - computed: false, optional: true, required: false
  private _signingStatus?: string; 
  public get signingStatus() {
    return this.getStringAttribute('signing_status');
  }
  public set signingStatus(value: string) {
    this._signingStatus = value;
  }
  public resetSigningStatus() {
    this._signingStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signingStatusInput() {
    return this._signingStatus;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      hosted_zone_id: cdktf.stringToTerraform(this._hostedZoneId),
      signing_status: cdktf.stringToTerraform(this._signingStatus),
    };
  }
}
