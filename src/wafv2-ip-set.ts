// https://www.terraform.io/docs/providers/aws/r/wafv2_ip_set.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Wafv2IpSetConfig extends cdktf.TerraformMetaArguments {
  readonly addresses?: string[];
  readonly description?: string;
  readonly ipAddressVersion: string;
  readonly name: string;
  readonly scope: string;
  readonly tags?: { [key: string]: string };
}

// Resource

export class Wafv2IpSet extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: Wafv2IpSetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_wafv2_ip_set',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._addresses = config.addresses;
    this._description = config.description;
    this._ipAddressVersion = config.ipAddressVersion;
    this._name = config.name;
    this._scope = config.scope;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // addresses - computed: false, optional: true, required: false
  private _addresses?: string[];
  public get addresses() {
    return this.getListAttribute('addresses');
  }
  public set addresses(value: string[] ) {
    this._addresses = value;
  }
  public resetAddresses() {
    this._addresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressesInput() {
    return this._addresses
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_address_version - computed: false, optional: false, required: true
  private _ipAddressVersion: string;
  public get ipAddressVersion() {
    return this.getStringAttribute('ip_address_version');
  }
  public set ipAddressVersion(value: string) {
    this._ipAddressVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressVersionInput() {
    return this._ipAddressVersion
  }

  // lock_token - computed: true, optional: false, required: false
  public get lockToken() {
    return this.getStringAttribute('lock_token');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // scope - computed: false, optional: false, required: true
  private _scope: string;
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      addresses: cdktf.listMapper(cdktf.stringToTerraform)(this._addresses),
      description: cdktf.stringToTerraform(this._description),
      ip_address_version: cdktf.stringToTerraform(this._ipAddressVersion),
      name: cdktf.stringToTerraform(this._name),
      scope: cdktf.stringToTerraform(this._scope),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
    };
  }
}
