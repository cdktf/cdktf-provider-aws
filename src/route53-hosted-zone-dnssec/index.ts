/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.26.0/docs/resources/route53_hosted_zone_dnssec
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Route53HostedZoneDnssecConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.26.0/docs/resources/route53_hosted_zone_dnssec#hosted_zone_id Route53HostedZoneDnssec#hosted_zone_id}
  */
  readonly hostedZoneId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.26.0/docs/resources/route53_hosted_zone_dnssec#id Route53HostedZoneDnssec#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.26.0/docs/resources/route53_hosted_zone_dnssec#signing_status Route53HostedZoneDnssec#signing_status}
  */
  readonly signingStatus?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.26.0/docs/resources/route53_hosted_zone_dnssec aws_route53_hosted_zone_dnssec}
*/
export class Route53HostedZoneDnssec extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_route53_hosted_zone_dnssec";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Route53HostedZoneDnssec resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Route53HostedZoneDnssec to import
  * @param importFromId The id of the existing Route53HostedZoneDnssec that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.26.0/docs/resources/route53_hosted_zone_dnssec#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Route53HostedZoneDnssec to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_route53_hosted_zone_dnssec", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.26.0/docs/resources/route53_hosted_zone_dnssec aws_route53_hosted_zone_dnssec} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Route53HostedZoneDnssecConfig
  */
  public constructor(scope: Construct, id: string, config: Route53HostedZoneDnssecConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_route53_hosted_zone_dnssec',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.26.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._hostedZoneId = config.hostedZoneId;
    this._id = config.id;
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
      id: cdktf.stringToTerraform(this._id),
      signing_status: cdktf.stringToTerraform(this._signingStatus),
    };
  }
}
