// https://www.terraform.io/docs/providers/aws/r/directory_service_directory.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DirectoryServiceDirectoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory.html#alias DirectoryServiceDirectory#alias}
  */
  readonly alias?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory.html#description DirectoryServiceDirectory#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory.html#edition DirectoryServiceDirectory#edition}
  */
  readonly edition?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory.html#enable_sso DirectoryServiceDirectory#enable_sso}
  */
  readonly enableSso?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory.html#name DirectoryServiceDirectory#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory.html#password DirectoryServiceDirectory#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory.html#short_name DirectoryServiceDirectory#short_name}
  */
  readonly shortName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory.html#size DirectoryServiceDirectory#size}
  */
  readonly size?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory.html#tags DirectoryServiceDirectory#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory.html#tags_all DirectoryServiceDirectory#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory.html#type DirectoryServiceDirectory#type}
  */
  readonly type?: string;
  /**
  * connect_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory.html#connect_settings DirectoryServiceDirectory#connect_settings}
  */
  readonly connectSettings?: DirectoryServiceDirectoryConnectSettings[];
  /**
  * vpc_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory.html#vpc_settings DirectoryServiceDirectory#vpc_settings}
  */
  readonly vpcSettings?: DirectoryServiceDirectoryVpcSettings[];
}
export interface DirectoryServiceDirectoryConnectSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory.html#customer_dns_ips DirectoryServiceDirectory#customer_dns_ips}
  */
  readonly customerDnsIps: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory.html#customer_username DirectoryServiceDirectory#customer_username}
  */
  readonly customerUsername: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory.html#subnet_ids DirectoryServiceDirectory#subnet_ids}
  */
  readonly subnetIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory.html#vpc_id DirectoryServiceDirectory#vpc_id}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory.html#subnet_ids DirectoryServiceDirectory#subnet_ids}
  */
  readonly subnetIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory.html#vpc_id DirectoryServiceDirectory#vpc_id}
  */
  readonly vpcId: string;
}

function directoryServiceDirectoryVpcSettingsToTerraform(struct?: DirectoryServiceDirectoryVpcSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.subnetIds),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory.html aws_directory_service_directory}
*/
export class DirectoryServiceDirectory extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_directory_service_directory";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory.html aws_directory_service_directory} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DirectoryServiceDirectoryConfig
  */
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
    this._tagsAll = config.tagsAll;
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
  private _enableSso?: boolean | cdktf.IResolvable;
  public get enableSso() {
    return this.getBooleanAttribute('enable_sso');
  }
  public set enableSso(value: boolean | cdktf.IResolvable ) {
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
  private _tags?: { [key: string]: string } | cdktf.IResolvable;
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable
  public get tagsAll(): { [key: string]: string } | cdktf.IResolvable {
    return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll
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
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      type: cdktf.stringToTerraform(this._type),
      connect_settings: cdktf.listMapper(directoryServiceDirectoryConnectSettingsToTerraform)(this._connectSettings),
      vpc_settings: cdktf.listMapper(directoryServiceDirectoryVpcSettingsToTerraform)(this._vpcSettings),
    };
  }
}
