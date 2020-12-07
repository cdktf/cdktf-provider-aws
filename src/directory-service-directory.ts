// https://www.terraform.io/docs/providers/aws/r/directory_service_directory.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DirectoryServiceDirectoryConfig extends cdktf.TerraformMetaArguments {
  readonly alias?: string;
  readonly description?: string;
  readonly edition?: string;
  readonly enableSso?: boolean;
  readonly name: string;
  readonly password: string;
  readonly shortName?: string;
  readonly size?: string;
  readonly tags?: { [key: string]: string };
  readonly type?: string;
  /** connect_settings block */
  readonly connectSettings?: DirectoryServiceDirectoryConnectSettings[];
  /** vpc_settings block */
  readonly vpcSettings?: DirectoryServiceDirectoryVpcSettings[];
}
export interface DirectoryServiceDirectoryConnectSettings {
  readonly customerDnsIps: string[];
  readonly customerUsername: string;
  readonly subnetIds: string[];
  readonly vpcId: string;
}

function directoryServiceDirectoryConnectSettingsToTerraform(struct?: DirectoryServiceDirectoryConnectSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    customer_dns_ips: cdktf.listMapper(cdktf.stringToTerraform)(struct!.customerDnsIps),
    customer_username: cdktf.stringToTerraform(struct!.customerUsername),
    subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.subnetIds),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
  }
}

export interface DirectoryServiceDirectoryVpcSettings {
  readonly subnetIds: string[];
  readonly vpcId: string;
}

function directoryServiceDirectoryVpcSettingsToTerraform(struct?: DirectoryServiceDirectoryVpcSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.subnetIds),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
  }
}


// Resource

export class DirectoryServiceDirectory extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DirectoryServiceDirectoryConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_directory_service_directory',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._alias = config.alias;
    this._description = config.description;
    this._edition = config.edition;
    this._enableSso = config.enableSso;
    this._name = config.name;
    this._password = config.password;
    this._shortName = config.shortName;
    this._size = config.size;
    this._tags = config.tags;
    this._type = config.type;
    this._connectSettings = config.connectSettings;
    this._vpcSettings = config.vpcSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_url - computed: true, optional: false, required: false
  public get accessUrl() {
    return this.getStringAttribute('access_url');
  }

  // alias - computed: true, optional: true, required: false
  private _alias?: string;
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias
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

  // dns_ip_addresses - computed: true, optional: false, required: false
  public get dnsIpAddresses() {
    return this.getListAttribute('dns_ip_addresses');
  }

  // edition - computed: true, optional: true, required: false
  private _edition?: string;
  public get edition() {
    return this.getStringAttribute('edition');
  }
  public set edition(value: string) {
    this._edition = value;
  }
  public resetEdition() {
    this._edition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get editionInput() {
    return this._edition
  }

  // enable_sso - computed: false, optional: true, required: false
  private _enableSso?: boolean;
  public get enableSso() {
    return this.getBooleanAttribute('enable_sso');
  }
  public set enableSso(value: boolean ) {
    this._enableSso = value;
  }
  public resetEnableSso() {
    this._enableSso = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSsoInput() {
    return this._enableSso
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // password - computed: false, optional: false, required: true
  private _password: string;
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password
  }

  // security_group_id - computed: true, optional: false, required: false
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }

  // short_name - computed: true, optional: true, required: false
  private _shortName?: string;
  public get shortName() {
    return this.getStringAttribute('short_name');
  }
  public set shortName(value: string) {
    this._shortName = value;
  }
  public resetShortName() {
    this._shortName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shortNameInput() {
    return this._shortName
  }

  // size - computed: true, optional: true, required: false
  private _size?: string;
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size
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

  // type - computed: false, optional: true, required: false
  private _type?: string;
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string ) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }

  // connect_settings - computed: false, optional: true, required: false
  private _connectSettings?: DirectoryServiceDirectoryConnectSettings[];
  public get connectSettings() {
    return this.interpolationForAttribute('connect_settings') as any;
  }
  public set connectSettings(value: DirectoryServiceDirectoryConnectSettings[] ) {
    this._connectSettings = value;
  }
  public resetConnectSettings() {
    this._connectSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectSettingsInput() {
    return this._connectSettings
  }

  // vpc_settings - computed: false, optional: true, required: false
  private _vpcSettings?: DirectoryServiceDirectoryVpcSettings[];
  public get vpcSettings() {
    return this.interpolationForAttribute('vpc_settings') as any;
  }
  public set vpcSettings(value: DirectoryServiceDirectoryVpcSettings[] ) {
    this._vpcSettings = value;
  }
  public resetVpcSettings() {
    this._vpcSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcSettingsInput() {
    return this._vpcSettings
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alias: cdktf.stringToTerraform(this._alias),
      description: cdktf.stringToTerraform(this._description),
      edition: cdktf.stringToTerraform(this._edition),
      enable_sso: cdktf.booleanToTerraform(this._enableSso),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      short_name: cdktf.stringToTerraform(this._shortName),
      size: cdktf.stringToTerraform(this._size),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      type: cdktf.stringToTerraform(this._type),
      connect_settings: cdktf.listMapper(directoryServiceDirectoryConnectSettingsToTerraform)(this._connectSettings),
      vpc_settings: cdktf.listMapper(directoryServiceDirectoryVpcSettingsToTerraform)(this._vpcSettings),
    };
  }
}
