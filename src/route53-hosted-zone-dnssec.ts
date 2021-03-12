// https://www.terraform.io/docs/providers/aws/r/route53_hosted_zone_dnssec.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Route53HostedZoneDnssecConfig extends cdktf.TerraformMetaArguments {
  readonly hostedZoneId: string;
  readonly signingStatus?: string;
}

// Resource

export class Route53HostedZoneDnssec extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _hostedZoneId: string;
  public get hostedZoneId() {
    return this.getStringAttribute('hosted_zone_id');
  }
  public set hostedZoneId(value: string) {
    this._hostedZoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostedZoneIdInput() {
    return this._hostedZoneId
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
  public set signingStatus(value: string ) {
    this._signingStatus = value;
  }
  public resetSigningStatus() {
    this._signingStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signingStatusInput() {
    return this._signingStatus
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
