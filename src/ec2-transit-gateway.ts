// https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "amazon_side_asn": {
        "type": "number",
        "optional": true
      },
      "arn": {
        "type": "string",
        "computed": true
      },
      "association_default_route_table_id": {
        "type": "string",
        "computed": true
      },
      "auto_accept_shared_attachments": {
        "type": "string",
        "optional": true
      },
      "default_route_table_association": {
        "type": "string",
        "optional": true
      },
      "default_route_table_propagation": {
        "type": "string",
        "optional": true
      },
      "description": {
        "type": "string",
        "optional": true
      },
      "dns_support": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "owner_id": {
        "type": "string",
        "computed": true
      },
      "propagation_default_route_table_id": {
        "type": "string",
        "computed": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "vpn_ecmp_support": {
        "type": "string",
        "optional": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface Ec2TransitGatewayConfig extends TerraformMetaArguments {
  readonly amazonSideAsn?: number;
  readonly autoAcceptSharedAttachments?: string;
  readonly defaultRouteTableAssociation?: string;
  readonly defaultRouteTablePropagation?: string;
  readonly description?: string;
  readonly dnsSupport?: string;
  readonly tags?: { [key: string]: string };
  readonly vpnEcmpSupport?: string;
}

// Resource

export class Ec2TransitGateway extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: Ec2TransitGatewayConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_ec2_transit_gateway',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._amazonSideAsn = config.amazonSideAsn;
    this._autoAcceptSharedAttachments = config.autoAcceptSharedAttachments;
    this._defaultRouteTableAssociation = config.defaultRouteTableAssociation;
    this._defaultRouteTablePropagation = config.defaultRouteTablePropagation;
    this._description = config.description;
    this._dnsSupport = config.dnsSupport;
    this._tags = config.tags;
    this._vpnEcmpSupport = config.vpnEcmpSupport;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // amazon_side_asn - computed: false, optional: true, required: false
  private _amazonSideAsn?: number;
  public get amazonSideAsn() {
    return this._amazonSideAsn;
  }
  public set amazonSideAsn(value: number | undefined) {
    this._amazonSideAsn = value;
  }

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // association_default_route_table_id - computed: true, optional: false, required: true
  public get associationDefaultRouteTableId() {
    return this.getStringAttribute('association_default_route_table_id');
  }

  // auto_accept_shared_attachments - computed: false, optional: true, required: false
  private _autoAcceptSharedAttachments?: string;
  public get autoAcceptSharedAttachments() {
    return this._autoAcceptSharedAttachments;
  }
  public set autoAcceptSharedAttachments(value: string | undefined) {
    this._autoAcceptSharedAttachments = value;
  }

  // default_route_table_association - computed: false, optional: true, required: false
  private _defaultRouteTableAssociation?: string;
  public get defaultRouteTableAssociation() {
    return this._defaultRouteTableAssociation;
  }
  public set defaultRouteTableAssociation(value: string | undefined) {
    this._defaultRouteTableAssociation = value;
  }

  // default_route_table_propagation - computed: false, optional: true, required: false
  private _defaultRouteTablePropagation?: string;
  public get defaultRouteTablePropagation() {
    return this._defaultRouteTablePropagation;
  }
  public set defaultRouteTablePropagation(value: string | undefined) {
    this._defaultRouteTablePropagation = value;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // dns_support - computed: false, optional: true, required: false
  private _dnsSupport?: string;
  public get dnsSupport() {
    return this._dnsSupport;
  }
  public set dnsSupport(value: string | undefined) {
    this._dnsSupport = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // owner_id - computed: true, optional: false, required: true
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // propagation_default_route_table_id - computed: true, optional: false, required: true
  public get propagationDefaultRouteTableId() {
    return this.getStringAttribute('propagation_default_route_table_id');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // vpn_ecmp_support - computed: false, optional: true, required: false
  private _vpnEcmpSupport?: string;
  public get vpnEcmpSupport() {
    return this._vpnEcmpSupport;
  }
  public set vpnEcmpSupport(value: string | undefined) {
    this._vpnEcmpSupport = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      amazon_side_asn: this._amazonSideAsn,
      auto_accept_shared_attachments: this._autoAcceptSharedAttachments,
      default_route_table_association: this._defaultRouteTableAssociation,
      default_route_table_propagation: this._defaultRouteTablePropagation,
      description: this._description,
      dns_support: this._dnsSupport,
      tags: this._tags,
      vpn_ecmp_support: this._vpnEcmpSupport,
    };
  }
}
