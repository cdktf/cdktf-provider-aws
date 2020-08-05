// https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options_association.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "dhcp_options_id": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "vpc_id": {
        "type": "string",
        "required": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface VpcDhcpOptionsAssociationConfig extends TerraformMetaArguments {
  readonly dhcpOptionsId: string;
  readonly vpcId: string;
}

// Resource

export class VpcDhcpOptionsAssociation extends TerraformResource {

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
    return this._dhcpOptionsId;
  }
  public set dhcpOptionsId(value: string) {
    this._dhcpOptionsId = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId: string;
  public get vpcId() {
    return this._vpcId;
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      dhcp_options_id: this._dhcpOptionsId,
      vpc_id: this._vpcId,
    };
  }
}
