// https://www.terraform.io/docs/providers/aws/r/storagegateway_file_system_association.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StoragegatewayFileSystemAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_file_system_association.html#audit_destination_arn StoragegatewayFileSystemAssociation#audit_destination_arn}
  */
  readonly auditDestinationArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_file_system_association.html#gateway_arn StoragegatewayFileSystemAssociation#gateway_arn}
  */
  readonly gatewayArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_file_system_association.html#location_arn StoragegatewayFileSystemAssociation#location_arn}
  */
  readonly locationArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_file_system_association.html#password StoragegatewayFileSystemAssociation#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_file_system_association.html#tags StoragegatewayFileSystemAssociation#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_file_system_association.html#tags_all StoragegatewayFileSystemAssociation#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_file_system_association.html#username StoragegatewayFileSystemAssociation#username}
  */
  readonly username: string;
  /**
  * cache_attributes block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_file_system_association.html#cache_attributes StoragegatewayFileSystemAssociation#cache_attributes}
  */
  readonly cacheAttributes?: StoragegatewayFileSystemAssociationCacheAttributes[];
}
export interface StoragegatewayFileSystemAssociationCacheAttributes {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_file_system_association.html#cache_stale_timeout_in_seconds StoragegatewayFileSystemAssociation#cache_stale_timeout_in_seconds}
  */
  readonly cacheStaleTimeoutInSeconds?: number;
}

function storagegatewayFileSystemAssociationCacheAttributesToTerraform(struct?: StoragegatewayFileSystemAssociationCacheAttributes): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cache_stale_timeout_in_seconds: cdktf.numberToTerraform(struct!.cacheStaleTimeoutInSeconds),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_file_system_association.html aws_storagegateway_file_system_association}
*/
export class StoragegatewayFileSystemAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_storagegateway_file_system_association";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_file_system_association.html aws_storagegateway_file_system_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StoragegatewayFileSystemAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: StoragegatewayFileSystemAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_storagegateway_file_system_association',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._auditDestinationArn = config.auditDestinationArn;
    this._gatewayArn = config.gatewayArn;
    this._locationArn = config.locationArn;
    this._password = config.password;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._username = config.username;
    this._cacheAttributes = config.cacheAttributes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // audit_destination_arn - computed: false, optional: true, required: false
  private _auditDestinationArn?: string;
  public get auditDestinationArn() {
    return this.getStringAttribute('audit_destination_arn');
  }
  public set auditDestinationArn(value: string ) {
    this._auditDestinationArn = value;
  }
  public resetAuditDestinationArn() {
    this._auditDestinationArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditDestinationArnInput() {
    return this._auditDestinationArn
  }

  // gateway_arn - computed: false, optional: false, required: true
  private _gatewayArn: string;
  public get gatewayArn() {
    return this.getStringAttribute('gateway_arn');
  }
  public set gatewayArn(value: string) {
    this._gatewayArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayArnInput() {
    return this._gatewayArn
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location_arn - computed: false, optional: false, required: true
  private _locationArn: string;
  public get locationArn() {
    return this.getStringAttribute('location_arn');
  }
  public set locationArn(value: string) {
    this._locationArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationArnInput() {
    return this._locationArn
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

  // username - computed: false, optional: false, required: true
  private _username: string;
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username
  }

  // cache_attributes - computed: false, optional: true, required: false
  private _cacheAttributes?: StoragegatewayFileSystemAssociationCacheAttributes[];
  public get cacheAttributes() {
    return this.interpolationForAttribute('cache_attributes') as any;
  }
  public set cacheAttributes(value: StoragegatewayFileSystemAssociationCacheAttributes[] ) {
    this._cacheAttributes = value;
  }
  public resetCacheAttributes() {
    this._cacheAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheAttributesInput() {
    return this._cacheAttributes
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      audit_destination_arn: cdktf.stringToTerraform(this._auditDestinationArn),
      gateway_arn: cdktf.stringToTerraform(this._gatewayArn),
      location_arn: cdktf.stringToTerraform(this._locationArn),
      password: cdktf.stringToTerraform(this._password),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      username: cdktf.stringToTerraform(this._username),
      cache_attributes: cdktf.listMapper(storagegatewayFileSystemAssociationCacheAttributesToTerraform)(this._cacheAttributes),
    };
  }
}
