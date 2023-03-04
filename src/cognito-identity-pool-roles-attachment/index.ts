// https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_roles_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CognitoIdentityPoolRolesAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_roles_attachment#id CognitoIdentityPoolRolesAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_roles_attachment#identity_pool_id CognitoIdentityPoolRolesAttachment#identity_pool_id}
  */
  readonly identityPoolId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_roles_attachment#roles CognitoIdentityPoolRolesAttachment#roles}
  */
  readonly roles: { [key: string]: string };
  /**
  * role_mapping block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_roles_attachment#role_mapping CognitoIdentityPoolRolesAttachment#role_mapping}
  */
  readonly roleMapping?: CognitoIdentityPoolRolesAttachmentRoleMapping[] | cdktf.IResolvable;
}
export interface CognitoIdentityPoolRolesAttachmentRoleMappingMappingRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_roles_attachment#claim CognitoIdentityPoolRolesAttachment#claim}
  */
  readonly claim: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_roles_attachment#match_type CognitoIdentityPoolRolesAttachment#match_type}
  */
  readonly matchType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_roles_attachment#role_arn CognitoIdentityPoolRolesAttachment#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_roles_attachment#value CognitoIdentityPoolRolesAttachment#value}
  */
  readonly value: string;
}

export function cognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleToTerraform(struct?: CognitoIdentityPoolRolesAttachmentRoleMappingMappingRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claim: cdktf.stringToTerraform(struct!.claim),
    match_type: cdktf.stringToTerraform(struct!.matchType),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CognitoIdentityPoolRolesAttachmentRoleMappingMappingRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claim !== undefined) {
      hasAnyValues = true;
      internalValueResult.claim = this._claim;
    }
    if (this._matchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType = this._matchType;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CognitoIdentityPoolRolesAttachmentRoleMappingMappingRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claim = undefined;
      this._matchType = undefined;
      this._roleArn = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._claim = value.claim;
      this._matchType = value.matchType;
      this._roleArn = value.roleArn;
      this._value = value.value;
    }
  }

  // claim - computed: false, optional: false, required: true
  private _claim?: string; 
  public get claim() {
    return this.getStringAttribute('claim');
  }
  public set claim(value: string) {
    this._claim = value;
  }
  // Temporarily expose input value. Use with caution.
  public get claimInput() {
    return this._claim;
  }

  // match_type - computed: false, optional: false, required: true
  private _matchType?: string; 
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
  public set matchType(value: string) {
    this._matchType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleList extends cdktf.ComplexList {
  public internalValue? : CognitoIdentityPoolRolesAttachmentRoleMappingMappingRule[] | cdktf.IResolvable

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
  public get(index: number): CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleOutputReference {
    return new CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CognitoIdentityPoolRolesAttachmentRoleMapping {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_roles_attachment#ambiguous_role_resolution CognitoIdentityPoolRolesAttachment#ambiguous_role_resolution}
  */
  readonly ambiguousRoleResolution?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_roles_attachment#identity_provider CognitoIdentityPoolRolesAttachment#identity_provider}
  */
  readonly identityProvider: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_roles_attachment#type CognitoIdentityPoolRolesAttachment#type}
  */
  readonly type: string;
  /**
  * mapping_rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_roles_attachment#mapping_rule CognitoIdentityPoolRolesAttachment#mapping_rule}
  */
  readonly mappingRule?: CognitoIdentityPoolRolesAttachmentRoleMappingMappingRule[] | cdktf.IResolvable;
}

export function cognitoIdentityPoolRolesAttachmentRoleMappingToTerraform(struct?: CognitoIdentityPoolRolesAttachmentRoleMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ambiguous_role_resolution: cdktf.stringToTerraform(struct!.ambiguousRoleResolution),
    identity_provider: cdktf.stringToTerraform(struct!.identityProvider),
    type: cdktf.stringToTerraform(struct!.type),
    mapping_rule: cdktf.listMapper(cognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleToTerraform, true)(struct!.mappingRule),
  }
}

export class CognitoIdentityPoolRolesAttachmentRoleMappingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CognitoIdentityPoolRolesAttachmentRoleMapping | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ambiguousRoleResolution !== undefined) {
      hasAnyValues = true;
      internalValueResult.ambiguousRoleResolution = this._ambiguousRoleResolution;
    }
    if (this._identityProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityProvider = this._identityProvider;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._mappingRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mappingRule = this._mappingRule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CognitoIdentityPoolRolesAttachmentRoleMapping | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ambiguousRoleResolution = undefined;
      this._identityProvider = undefined;
      this._type = undefined;
      this._mappingRule.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ambiguousRoleResolution = value.ambiguousRoleResolution;
      this._identityProvider = value.identityProvider;
      this._type = value.type;
      this._mappingRule.internalValue = value.mappingRule;
    }
  }

  // ambiguous_role_resolution - computed: false, optional: true, required: false
  private _ambiguousRoleResolution?: string; 
  public get ambiguousRoleResolution() {
    return this.getStringAttribute('ambiguous_role_resolution');
  }
  public set ambiguousRoleResolution(value: string) {
    this._ambiguousRoleResolution = value;
  }
  public resetAmbiguousRoleResolution() {
    this._ambiguousRoleResolution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ambiguousRoleResolutionInput() {
    return this._ambiguousRoleResolution;
  }

  // identity_provider - computed: false, optional: false, required: true
  private _identityProvider?: string; 
  public get identityProvider() {
    return this.getStringAttribute('identity_provider');
  }
  public set identityProvider(value: string) {
    this._identityProvider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderInput() {
    return this._identityProvider;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // mapping_rule - computed: false, optional: true, required: false
  private _mappingRule = new CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleList(this, "mapping_rule", false);
  public get mappingRule() {
    return this._mappingRule;
  }
  public putMappingRule(value: CognitoIdentityPoolRolesAttachmentRoleMappingMappingRule[] | cdktf.IResolvable) {
    this._mappingRule.internalValue = value;
  }
  public resetMappingRule() {
    this._mappingRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingRuleInput() {
    return this._mappingRule.internalValue;
  }
}

export class CognitoIdentityPoolRolesAttachmentRoleMappingList extends cdktf.ComplexList {
  public internalValue? : CognitoIdentityPoolRolesAttachmentRoleMapping[] | cdktf.IResolvable

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
  public get(index: number): CognitoIdentityPoolRolesAttachmentRoleMappingOutputReference {
    return new CognitoIdentityPoolRolesAttachmentRoleMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_roles_attachment aws_cognito_identity_pool_roles_attachment}
*/
export class CognitoIdentityPoolRolesAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_cognito_identity_pool_roles_attachment";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_roles_attachment aws_cognito_identity_pool_roles_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CognitoIdentityPoolRolesAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: CognitoIdentityPoolRolesAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cognito_identity_pool_roles_attachment',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.57.0',
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
    this._id = config.id;
    this._identityPoolId = config.identityPoolId;
    this._roles = config.roles;
    this._roleMapping.internalValue = config.roleMapping;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // identity_pool_id - computed: false, optional: false, required: true
  private _identityPoolId?: string; 
  public get identityPoolId() {
    return this.getStringAttribute('identity_pool_id');
  }
  public set identityPoolId(value: string) {
    this._identityPoolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityPoolIdInput() {
    return this._identityPoolId;
  }

  // roles - computed: false, optional: false, required: true
  private _roles?: { [key: string]: string }; 
  public get roles() {
    return this.getStringMapAttribute('roles');
  }
  public set roles(value: { [key: string]: string }) {
    this._roles = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles;
  }

  // role_mapping - computed: false, optional: true, required: false
  private _roleMapping = new CognitoIdentityPoolRolesAttachmentRoleMappingList(this, "role_mapping", true);
  public get roleMapping() {
    return this._roleMapping;
  }
  public putRoleMapping(value: CognitoIdentityPoolRolesAttachmentRoleMapping[] | cdktf.IResolvable) {
    this._roleMapping.internalValue = value;
  }
  public resetRoleMapping() {
    this._roleMapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleMappingInput() {
    return this._roleMapping.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      identity_pool_id: cdktf.stringToTerraform(this._identityPoolId),
      roles: cdktf.hashMapper(cdktf.stringToTerraform)(this._roles),
      role_mapping: cdktf.listMapper(cognitoIdentityPoolRolesAttachmentRoleMappingToTerraform, true)(this._roleMapping.internalValue),
    };
  }
}
