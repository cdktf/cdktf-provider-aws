// https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/s3control_access_grant
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface S3ControlAccessGrantConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/s3control_access_grant#access_grants_location_id S3ControlAccessGrant#access_grants_location_id}
  */
  readonly accessGrantsLocationId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/s3control_access_grant#account_id S3ControlAccessGrant#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/s3control_access_grant#permission S3ControlAccessGrant#permission}
  */
  readonly permission: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/s3control_access_grant#s3_prefix_type S3ControlAccessGrant#s3_prefix_type}
  */
  readonly s3PrefixType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/s3control_access_grant#tags S3ControlAccessGrant#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * access_grants_location_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/s3control_access_grant#access_grants_location_configuration S3ControlAccessGrant#access_grants_location_configuration}
  */
  readonly accessGrantsLocationConfiguration?: S3ControlAccessGrantAccessGrantsLocationConfiguration[] | cdktf.IResolvable;
  /**
  * grantee block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/s3control_access_grant#grantee S3ControlAccessGrant#grantee}
  */
  readonly grantee?: S3ControlAccessGrantGrantee[] | cdktf.IResolvable;
}
export interface S3ControlAccessGrantAccessGrantsLocationConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/s3control_access_grant#s3_sub_prefix S3ControlAccessGrant#s3_sub_prefix}
  */
  readonly s3SubPrefix?: string;
}

export function s3ControlAccessGrantAccessGrantsLocationConfigurationToTerraform(struct?: S3ControlAccessGrantAccessGrantsLocationConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    s3_sub_prefix: cdktf.stringToTerraform(struct!.s3SubPrefix),
  }
}


export function s3ControlAccessGrantAccessGrantsLocationConfigurationToHclTerraform(struct?: S3ControlAccessGrantAccessGrantsLocationConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    s3_sub_prefix: {
      value: cdktf.stringToHclTerraform(struct!.s3SubPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): S3ControlAccessGrantAccessGrantsLocationConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3SubPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3SubPrefix = this._s3SubPrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3ControlAccessGrantAccessGrantsLocationConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3SubPrefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3SubPrefix = value.s3SubPrefix;
    }
  }

  // s3_sub_prefix - computed: false, optional: true, required: false
  private _s3SubPrefix?: string; 
  public get s3SubPrefix() {
    return this.getStringAttribute('s3_sub_prefix');
  }
  public set s3SubPrefix(value: string) {
    this._s3SubPrefix = value;
  }
  public resetS3SubPrefix() {
    this._s3SubPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3SubPrefixInput() {
    return this._s3SubPrefix;
  }
}

export class S3ControlAccessGrantAccessGrantsLocationConfigurationList extends cdktf.ComplexList {
  public internalValue? : S3ControlAccessGrantAccessGrantsLocationConfiguration[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference {
    return new S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3ControlAccessGrantGrantee {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/s3control_access_grant#grantee_identifier S3ControlAccessGrant#grantee_identifier}
  */
  readonly granteeIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/s3control_access_grant#grantee_type S3ControlAccessGrant#grantee_type}
  */
  readonly granteeType: string;
}

export function s3ControlAccessGrantGranteeToTerraform(struct?: S3ControlAccessGrantGrantee | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    grantee_identifier: cdktf.stringToTerraform(struct!.granteeIdentifier),
    grantee_type: cdktf.stringToTerraform(struct!.granteeType),
  }
}


export function s3ControlAccessGrantGranteeToHclTerraform(struct?: S3ControlAccessGrantGrantee | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    grantee_identifier: {
      value: cdktf.stringToHclTerraform(struct!.granteeIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grantee_type: {
      value: cdktf.stringToHclTerraform(struct!.granteeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3ControlAccessGrantGranteeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): S3ControlAccessGrantGrantee | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._granteeIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.granteeIdentifier = this._granteeIdentifier;
    }
    if (this._granteeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.granteeType = this._granteeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3ControlAccessGrantGrantee | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._granteeIdentifier = undefined;
      this._granteeType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._granteeIdentifier = value.granteeIdentifier;
      this._granteeType = value.granteeType;
    }
  }

  // grantee_identifier - computed: false, optional: false, required: true
  private _granteeIdentifier?: string; 
  public get granteeIdentifier() {
    return this.getStringAttribute('grantee_identifier');
  }
  public set granteeIdentifier(value: string) {
    this._granteeIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get granteeIdentifierInput() {
    return this._granteeIdentifier;
  }

  // grantee_type - computed: false, optional: false, required: true
  private _granteeType?: string; 
  public get granteeType() {
    return this.getStringAttribute('grantee_type');
  }
  public set granteeType(value: string) {
    this._granteeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get granteeTypeInput() {
    return this._granteeType;
  }
}

export class S3ControlAccessGrantGranteeList extends cdktf.ComplexList {
  public internalValue? : S3ControlAccessGrantGrantee[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): S3ControlAccessGrantGranteeOutputReference {
    return new S3ControlAccessGrantGranteeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/s3control_access_grant aws_s3control_access_grant}
*/
export class S3ControlAccessGrant extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_s3control_access_grant";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a S3ControlAccessGrant resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the S3ControlAccessGrant to import
  * @param importFromId The id of the existing S3ControlAccessGrant that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/s3control_access_grant#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the S3ControlAccessGrant to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_s3control_access_grant", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/s3control_access_grant aws_s3control_access_grant} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options S3ControlAccessGrantConfig
  */
  public constructor(scope: Construct, id: string, config: S3ControlAccessGrantConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_s3control_access_grant',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.71.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessGrantsLocationId = config.accessGrantsLocationId;
    this._accountId = config.accountId;
    this._permission = config.permission;
    this._s3PrefixType = config.s3PrefixType;
    this._tags = config.tags;
    this._accessGrantsLocationConfiguration.internalValue = config.accessGrantsLocationConfiguration;
    this._grantee.internalValue = config.grantee;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_grant_arn - computed: true, optional: false, required: false
  public get accessGrantArn() {
    return this.getStringAttribute('access_grant_arn');
  }

  // access_grant_id - computed: true, optional: false, required: false
  public get accessGrantId() {
    return this.getStringAttribute('access_grant_id');
  }

  // access_grants_location_id - computed: false, optional: false, required: true
  private _accessGrantsLocationId?: string; 
  public get accessGrantsLocationId() {
    return this.getStringAttribute('access_grants_location_id');
  }
  public set accessGrantsLocationId(value: string) {
    this._accessGrantsLocationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessGrantsLocationIdInput() {
    return this._accessGrantsLocationId;
  }

  // account_id - computed: true, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // grant_scope - computed: true, optional: false, required: false
  public get grantScope() {
    return this.getStringAttribute('grant_scope');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // permission - computed: false, optional: false, required: true
  private _permission?: string; 
  public get permission() {
    return this.getStringAttribute('permission');
  }
  public set permission(value: string) {
    this._permission = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission;
  }

  // s3_prefix_type - computed: false, optional: true, required: false
  private _s3PrefixType?: string; 
  public get s3PrefixType() {
    return this.getStringAttribute('s3_prefix_type');
  }
  public set s3PrefixType(value: string) {
    this._s3PrefixType = value;
  }
  public resetS3PrefixType() {
    this._s3PrefixType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3PrefixTypeInput() {
    return this._s3PrefixType;
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

  // tags_all - computed: true, optional: false, required: false
  private _tagsAll = new cdktf.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
  }

  // access_grants_location_configuration - computed: false, optional: true, required: false
  private _accessGrantsLocationConfiguration = new S3ControlAccessGrantAccessGrantsLocationConfigurationList(this, "access_grants_location_configuration", false);
  public get accessGrantsLocationConfiguration() {
    return this._accessGrantsLocationConfiguration;
  }
  public putAccessGrantsLocationConfiguration(value: S3ControlAccessGrantAccessGrantsLocationConfiguration[] | cdktf.IResolvable) {
    this._accessGrantsLocationConfiguration.internalValue = value;
  }
  public resetAccessGrantsLocationConfiguration() {
    this._accessGrantsLocationConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessGrantsLocationConfigurationInput() {
    return this._accessGrantsLocationConfiguration.internalValue;
  }

  // grantee - computed: false, optional: true, required: false
  private _grantee = new S3ControlAccessGrantGranteeList(this, "grantee", false);
  public get grantee() {
    return this._grantee;
  }
  public putGrantee(value: S3ControlAccessGrantGrantee[] | cdktf.IResolvable) {
    this._grantee.internalValue = value;
  }
  public resetGrantee() {
    this._grantee.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get granteeInput() {
    return this._grantee.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_grants_location_id: cdktf.stringToTerraform(this._accessGrantsLocationId),
      account_id: cdktf.stringToTerraform(this._accountId),
      permission: cdktf.stringToTerraform(this._permission),
      s3_prefix_type: cdktf.stringToTerraform(this._s3PrefixType),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      access_grants_location_configuration: cdktf.listMapper(s3ControlAccessGrantAccessGrantsLocationConfigurationToTerraform, true)(this._accessGrantsLocationConfiguration.internalValue),
      grantee: cdktf.listMapper(s3ControlAccessGrantGranteeToTerraform, true)(this._grantee.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_grants_location_id: {
        value: cdktf.stringToHclTerraform(this._accessGrantsLocationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      permission: {
        value: cdktf.stringToHclTerraform(this._permission),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      s3_prefix_type: {
        value: cdktf.stringToHclTerraform(this._s3PrefixType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      access_grants_location_configuration: {
        value: cdktf.listMapperHcl(s3ControlAccessGrantAccessGrantsLocationConfigurationToHclTerraform, true)(this._accessGrantsLocationConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "S3ControlAccessGrantAccessGrantsLocationConfigurationList",
      },
      grantee: {
        value: cdktf.listMapperHcl(s3ControlAccessGrantGranteeToHclTerraform, true)(this._grantee.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "S3ControlAccessGrantGranteeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
