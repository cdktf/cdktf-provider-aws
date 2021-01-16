// https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options_association.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcDhcpOptionsAssociationConfig extends cdktf.TerraformMetaArguments {
  readonly dhcpOptionsId: string;
  readonly vpcId: string;
}

// Resource

export class VpcDhcpOptionsAssociation extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: VpcDhcpOptionsAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_vpc_dhcp_options_association',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._dhcpOptionsId = config.dhcpOptionsId;
    this._vpcId = config.vpcId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dhcp_options_id - computed: false, optional: false, required: true
  private _dhcpOptionsId: string;
  public get dhcpOptionsId() {
    return this.getStringAttribute('dhcp_options_id');
  }
  public set dhcpOptionsId(value: string) {
    this._dhcpOptionsId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpOptionsIdInput() {
    return this._dhcpOptionsId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dhcp_options_id: cdktf.stringToTerraform(this._dhcpOptionsId),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
    };
  }
}
