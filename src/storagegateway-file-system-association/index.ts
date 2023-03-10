// https://www.terraform.io/docs/providers/aws/r/storagegateway_file_system_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StoragegatewayFileSystemAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_file_system_association#audit_destination_arn StoragegatewayFileSystemAssociation#audit_destination_arn}
  */
  readonly auditDestinationArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_file_system_association#gateway_arn StoragegatewayFileSystemAssociation#gateway_arn}
  */
  readonly gatewayArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_file_system_association#id StoragegatewayFileSystemAssociation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_file_system_association#location_arn StoragegatewayFileSystemAssociation#location_arn}
  */
  readonly locationArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_file_system_association#password StoragegatewayFileSystemAssociation#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_file_system_association#tags StoragegatewayFileSystemAssociation#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_file_system_association#tags_all StoragegatewayFileSystemAssociation#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_file_system_association#username StoragegatewayFileSystemAssociation#username}
  */
  readonly username: string;
  /**
  * cache_attributes block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_file_system_association#cache_attributes StoragegatewayFileSystemAssociation#cache_attributes}
  */
  readonly cacheAttributes?: StoragegatewayFileSystemAssociationCacheAttributes;
}
export interface StoragegatewayFileSystemAssociationCacheAttributes {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_file_system_association#cache_stale_timeout_in_seconds StoragegatewayFileSystemAssociation#cache_stale_timeout_in_seconds}
  */
  readonly cacheStaleTimeoutInSeconds?: number;
}

export function storagegatewayFileSystemAssociationCacheAttributesToTerraform(struct?: StoragegatewayFileSystemAssociationCacheAttributesOutputReference | StoragegatewayFileSystemAssociationCacheAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_stale_timeout_in_seconds: cdktf.numberToTerraform(struct!.cacheStaleTimeoutInSeconds),
  }
}

export class StoragegatewayFileSystemAssociationCacheAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StoragegatewayFileSystemAssociationCacheAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheStaleTimeoutInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheStaleTimeoutInSeconds = this._cacheStaleTimeoutInSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StoragegatewayFileSystemAssociationCacheAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cacheStaleTimeoutInSeconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cacheStaleTimeoutInSeconds = value.cacheStaleTimeoutInSeconds;
    }
  }

  // cache_stale_timeout_in_seconds - computed: false, optional: true, required: false
  private _cacheStaleTimeoutInSeconds?: number; 
  public get cacheStaleTimeoutInSeconds() {
    return this.getNumberAttribute('cache_stale_timeout_in_seconds');
  }
  public set cacheStaleTimeoutInSeconds(value: number) {
    this._cacheStaleTimeoutInSeconds = value;
  }
  public resetCacheStaleTimeoutInSeconds() {
    this._cacheStaleTimeoutInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheStaleTimeoutInSecondsInput() {
    return this._cacheStaleTimeoutInSeconds;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_file_system_association aws_storagegateway_file_system_association}
*/
export class StoragegatewayFileSystemAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_storagegateway_file_system_association";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_file_system_association aws_storagegateway_file_system_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StoragegatewayFileSystemAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: StoragegatewayFileSystemAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_storagegateway_file_system_association',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.58.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._auditDestinationArn = config.auditDestinationArn;
    this._gatewayArn = config.gatewayArn;
    this._id = config.id;
    this._locationArn = config.locationArn;
    this._password = config.password;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._username = config.username;
    this._cacheAttributes.internalValue = config.cacheAttributes;
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
  public set auditDestinationArn(value: string) {
    this._auditDestinationArn = value;
  }
  public resetAuditDestinationArn() {
    this._auditDestinationArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditDestinationArnInput() {
    return this._auditDestinationArn;
  }

  // gateway_arn - computed: false, optional: false, required: true
  private _gatewayArn?: string; 
  public get gatewayArn() {
    return this.getStringAttribute('gateway_arn');
  }
  public set gatewayArn(value: string) {
    this._gatewayArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayArnInput() {
    return this._gatewayArn;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // location_arn - computed: false, optional: false, required: true
  private _locationArn?: string; 
  public get locationArn() {
    return this.getStringAttribute('location_arn');
  }
  public set locationArn(value: string) {
    this._locationArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationArnInput() {
    return this._locationArn;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // cache_attributes - computed: false, optional: true, required: false
  private _cacheAttributes = new StoragegatewayFileSystemAssociationCacheAttributesOutputReference(this, "cache_attributes");
  public get cacheAttributes() {
    return this._cacheAttributes;
  }
  public putCacheAttributes(value: StoragegatewayFileSystemAssociationCacheAttributes) {
    this._cacheAttributes.internalValue = value;
  }
  public resetCacheAttributes() {
    this._cacheAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheAttributesInput() {
    return this._cacheAttributes.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      audit_destination_arn: cdktf.stringToTerraform(this._auditDestinationArn),
      gateway_arn: cdktf.stringToTerraform(this._gatewayArn),
      id: cdktf.stringToTerraform(this._id),
      location_arn: cdktf.stringToTerraform(this._locationArn),
      password: cdktf.stringToTerraform(this._password),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      username: cdktf.stringToTerraform(this._username),
      cache_attributes: storagegatewayFileSystemAssociationCacheAttributesToTerraform(this._cacheAttributes.internalValue),
    };
  }
}
