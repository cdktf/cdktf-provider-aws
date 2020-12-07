// https://www.terraform.io/docs/providers/aws/r/directory_service_conditional_forwarder.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DirectoryServiceConditionalForwarderConfig extends cdktf.TerraformMetaArguments {
  readonly directoryId: string;
  readonly dnsIps: string[];
  readonly remoteDomainName: string;
}

// Resource

export class DirectoryServiceConditionalForwarder extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DirectoryServiceConditionalForwarderConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_directory_service_conditional_forwarder',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._directoryId = config.directoryId;
    this._dnsIps = config.dnsIps;
    this._remoteDomainName = config.remoteDomainName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // directory_id - computed: false, optional: false, required: true
  private _directoryId: string;
  public get directoryId() {
    return this.getStringAttribute('directory_id');
  }
  public set directoryId(value: string) {
    this._directoryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryIdInput() {
    return this._directoryId
  }

  // dns_ips - computed: false, optional: false, required: true
  private _dnsIps: string[];
  public get dnsIps() {
    return this.getListAttribute('dns_ips');
  }
  public set dnsIps(value: string[]) {
    this._dnsIps = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsIpsInput() {
    return this._dnsIps
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // remote_domain_name - computed: false, optional: false, required: true
  private _remoteDomainName: string;
  public get remoteDomainName() {
    return this.getStringAttribute('remote_domain_name');
  }
  public set remoteDomainName(value: string) {
    this._remoteDomainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteDomainNameInput() {
    return this._remoteDomainName
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      directory_id: cdktf.stringToTerraform(this._directoryId),
      dns_ips: cdktf.listMapper(cdktf.stringToTerraform)(this._dnsIps),
      remote_domain_name: cdktf.stringToTerraform(this._remoteDomainName),
    };
  }
}
