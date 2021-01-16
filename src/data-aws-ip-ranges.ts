// https://www.terraform.io/docs/providers/aws/r/data_aws_ip_ranges.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsIpRangesConfig extends cdktf.TerraformMetaArguments {
  readonly regions?: string[];
  readonly services: string[];
  readonly url?: string;
}

// Resource

export class DataAwsIpRanges extends cdktf.TerraformDataSource {

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

  // cidr_blocks - computed: true, optional: false, required: false
  public get cidrBlocks() {
    return this.getListAttribute('cidr_blocks');
  }

  // create_date - computed: true, optional: false, required: false
  public get createDate() {
    return this.getStringAttribute('create_date');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ipv6_cidr_blocks - computed: true, optional: false, required: false
  public get ipv6CidrBlocks() {
    return this.getListAttribute('ipv6_cidr_blocks');
  }

  // regions - computed: false, optional: true, required: false
  private _regions?: string[];
  public get regions() {
    return this.getListAttribute('regions');
  }
  public set regions(value: string[] ) {
    this._regions = value;
  }
  public resetRegions() {
    this._regions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions
  }

  // services - computed: false, optional: false, required: true
  private _services: string[];
  public get services() {
    return this.getListAttribute('services');
  }
  public set services(value: string[]) {
    this._services = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services
  }

  // sync_token - computed: true, optional: false, required: false
  public get syncToken() {
    return this.getNumberAttribute('sync_token');
  }

  // url - computed: false, optional: true, required: false
  private _url?: string;
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string ) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      regions: cdktf.listMapper(cdktf.stringToTerraform)(this._regions),
      services: cdktf.listMapper(cdktf.stringToTerraform)(this._services),
      url: cdktf.stringToTerraform(this._url),
    };
  }
}
