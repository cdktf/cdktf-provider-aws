// https://www.terraform.io/docs/providers/aws/r/data_aws_ip_ranges.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "cidr_blocks": {
        "type": [
          "list",
          "string"
        ],
        "computed": true
      },
      "create_date": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "ipv6_cidr_blocks": {
        "type": [
          "list",
          "string"
        ],
        "computed": true
      },
      "regions": {
        "type": [
          "set",
          "string"
        ],
        "optional": true
      },
      "services": {
        "type": [
          "set",
          "string"
        ],
        "required": true
      },
      "sync_token": {
        "type": "number",
        "computed": true
      },
      "url": {
        "type": "string",
        "optional": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAwsIpRangesConfig extends TerraformMetaArguments {
  readonly regions?: string[];
  readonly services: string[];
  readonly url?: string;
}

// Resource

export class DataAwsIpRanges extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsIpRangesConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ip_ranges',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._regions = config.regions;
    this._services = config.services;
    this._url = config.url;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cidr_blocks - computed: true, optional: false, required: true
  public get cidrBlocks() {
    return this.getListAttribute('cidr_blocks');
  }

  // create_date - computed: true, optional: false, required: true
  public get createDate() {
    return this.getStringAttribute('create_date');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // ipv6_cidr_blocks - computed: true, optional: false, required: true
  public get ipv6CidrBlocks() {
    return this.getListAttribute('ipv6_cidr_blocks');
  }

  // regions - computed: false, optional: true, required: false
  private _regions?: string[];
  public get regions() {
    return this._regions;
  }
  public set regions(value: string[] | undefined) {
    this._regions = value;
  }

  // services - computed: false, optional: false, required: true
  private _services: string[];
  public get services() {
    return this._services;
  }
  public set services(value: string[]) {
    this._services = value;
  }

  // sync_token - computed: true, optional: false, required: true
  public get syncToken() {
    return this.getNumberAttribute('sync_token');
  }

  // url - computed: false, optional: true, required: false
  private _url?: string;
  public get url() {
    return this._url;
  }
  public set url(value: string | undefined) {
    this._url = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      regions: this._regions,
      services: this._services,
      url: this._url,
    };
  }
}
