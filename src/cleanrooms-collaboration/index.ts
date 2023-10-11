// https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/cleanrooms_collaboration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CleanroomsCollaborationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/cleanrooms_collaboration#creator_display_name CleanroomsCollaboration#creator_display_name}
  */
  readonly creatorDisplayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/cleanrooms_collaboration#creator_member_abilities CleanroomsCollaboration#creator_member_abilities}
  */
  readonly creatorMemberAbilities: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/cleanrooms_collaboration#description CleanroomsCollaboration#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/cleanrooms_collaboration#name CleanroomsCollaboration#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/cleanrooms_collaboration#query_log_status CleanroomsCollaboration#query_log_status}
  */
  readonly queryLogStatus: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/cleanrooms_collaboration#tags CleanroomsCollaboration#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/cleanrooms_collaboration#tags_all CleanroomsCollaboration#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * data_encryption_metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/cleanrooms_collaboration#data_encryption_metadata CleanroomsCollaboration#data_encryption_metadata}
  */
  readonly dataEncryptionMetadata?: CleanroomsCollaborationDataEncryptionMetadata;
  /**
  * member block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/cleanrooms_collaboration#member CleanroomsCollaboration#member}
  */
  readonly member?: CleanroomsCollaborationMember[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/cleanrooms_collaboration#timeouts CleanroomsCollaboration#timeouts}
  */
  readonly timeouts?: CleanroomsCollaborationTimeouts;
}
export interface CleanroomsCollaborationDataEncryptionMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/cleanrooms_collaboration#allow_clear_text CleanroomsCollaboration#allow_clear_text}
  */
  readonly allowClearText: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/cleanrooms_collaboration#allow_duplicates CleanroomsCollaboration#allow_duplicates}
  */
  readonly allowDuplicates: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/cleanrooms_collaboration#allow_joins_on_columns_with_different_names CleanroomsCollaboration#allow_joins_on_columns_with_different_names}
  */
  readonly allowJoinsOnColumnsWithDifferentNames: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/cleanrooms_collaboration#preserve_nulls CleanroomsCollaboration#preserve_nulls}
  */
  readonly preserveNulls: boolean | cdktf.IResolvable;
}

export function cleanroomsCollaborationDataEncryptionMetadataToTerraform(struct?: CleanroomsCollaborationDataEncryptionMetadataOutputReference | CleanroomsCollaborationDataEncryptionMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_clear_text: cdktf.booleanToTerraform(struct!.allowClearText),
    allow_duplicates: cdktf.booleanToTerraform(struct!.allowDuplicates),
    allow_joins_on_columns_with_different_names: cdktf.booleanToTerraform(struct!.allowJoinsOnColumnsWithDifferentNames),
    preserve_nulls: cdktf.booleanToTerraform(struct!.preserveNulls),
  }
}

export class CleanroomsCollaborationDataEncryptionMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CleanroomsCollaborationDataEncryptionMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowClearText !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowClearText = this._allowClearText;
    }
    if (this._allowDuplicates !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowDuplicates = this._allowDuplicates;
    }
    if (this._allowJoinsOnColumnsWithDifferentNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowJoinsOnColumnsWithDifferentNames = this._allowJoinsOnColumnsWithDifferentNames;
    }
    if (this._preserveNulls !== undefined) {
      hasAnyValues = true;
      internalValueResult.preserveNulls = this._preserveNulls;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CleanroomsCollaborationDataEncryptionMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowClearText = undefined;
      this._allowDuplicates = undefined;
      this._allowJoinsOnColumnsWithDifferentNames = undefined;
      this._preserveNulls = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowClearText = value.allowClearText;
      this._allowDuplicates = value.allowDuplicates;
      this._allowJoinsOnColumnsWithDifferentNames = value.allowJoinsOnColumnsWithDifferentNames;
      this._preserveNulls = value.preserveNulls;
    }
  }

  // allow_clear_text - computed: false, optional: false, required: true
  private _allowClearText?: boolean | cdktf.IResolvable; 
  public get allowClearText() {
    return this.getBooleanAttribute('allow_clear_text');
  }
  public set allowClearText(value: boolean | cdktf.IResolvable) {
    this._allowClearText = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowClearTextInput() {
    return this._allowClearText;
  }

  // allow_duplicates - computed: false, optional: false, required: true
  private _allowDuplicates?: boolean | cdktf.IResolvable; 
  public get allowDuplicates() {
    return this.getBooleanAttribute('allow_duplicates');
  }
  public set allowDuplicates(value: boolean | cdktf.IResolvable) {
    this._allowDuplicates = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowDuplicatesInput() {
    return this._allowDuplicates;
  }

  // allow_joins_on_columns_with_different_names - computed: false, optional: false, required: true
  private _allowJoinsOnColumnsWithDifferentNames?: boolean | cdktf.IResolvable; 
  public get allowJoinsOnColumnsWithDifferentNames() {
    return this.getBooleanAttribute('allow_joins_on_columns_with_different_names');
  }
  public set allowJoinsOnColumnsWithDifferentNames(value: boolean | cdktf.IResolvable) {
    this._allowJoinsOnColumnsWithDifferentNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowJoinsOnColumnsWithDifferentNamesInput() {
    return this._allowJoinsOnColumnsWithDifferentNames;
  }

  // preserve_nulls - computed: false, optional: false, required: true
  private _preserveNulls?: boolean | cdktf.IResolvable; 
  public get preserveNulls() {
    return this.getBooleanAttribute('preserve_nulls');
  }
  public set preserveNulls(value: boolean | cdktf.IResolvable) {
    this._preserveNulls = value;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveNullsInput() {
    return this._preserveNulls;
  }
}
export interface CleanroomsCollaborationMember {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/cleanrooms_collaboration#account_id CleanroomsCollaboration#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/cleanrooms_collaboration#display_name CleanroomsCollaboration#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/cleanrooms_collaboration#member_abilities CleanroomsCollaboration#member_abilities}
  */
  readonly memberAbilities: string[];
}

export function cleanroomsCollaborationMemberToTerraform(struct?: CleanroomsCollaborationMember | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.stringToTerraform(struct!.accountId),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    member_abilities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.memberAbilities),
  }
}

export class CleanroomsCollaborationMemberOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CleanroomsCollaborationMember | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._memberAbilities !== undefined) {
      hasAnyValues = true;
      internalValueResult.memberAbilities = this._memberAbilities;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CleanroomsCollaborationMember | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountId = undefined;
      this._displayName = undefined;
      this._memberAbilities = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountId = value.accountId;
      this._displayName = value.displayName;
      this._memberAbilities = value.memberAbilities;
    }
  }

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // member_abilities - computed: false, optional: false, required: true
  private _memberAbilities?: string[]; 
  public get memberAbilities() {
    return this.getListAttribute('member_abilities');
  }
  public set memberAbilities(value: string[]) {
    this._memberAbilities = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memberAbilitiesInput() {
    return this._memberAbilities;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class CleanroomsCollaborationMemberList extends cdktf.ComplexList {
  public internalValue? : CleanroomsCollaborationMember[] | cdktf.IResolvable

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
  public get(index: number): CleanroomsCollaborationMemberOutputReference {
    return new CleanroomsCollaborationMemberOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CleanroomsCollaborationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/cleanrooms_collaboration#create CleanroomsCollaboration#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/cleanrooms_collaboration#delete CleanroomsCollaboration#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/cleanrooms_collaboration#update CleanroomsCollaboration#update}
  */
  readonly update?: string;
}

export function cleanroomsCollaborationTimeoutsToTerraform(struct?: CleanroomsCollaborationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class CleanroomsCollaborationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CleanroomsCollaborationTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CleanroomsCollaborationTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/cleanrooms_collaboration aws_cleanrooms_collaboration}
*/
export class CleanroomsCollaboration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_cleanrooms_collaboration";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/cleanrooms_collaboration aws_cleanrooms_collaboration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CleanroomsCollaborationConfig
  */
  public constructor(scope: Construct, id: string, config: CleanroomsCollaborationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cleanrooms_collaboration',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.20.1',
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
    this._creatorDisplayName = config.creatorDisplayName;
    this._creatorMemberAbilities = config.creatorMemberAbilities;
    this._description = config.description;
    this._name = config.name;
    this._queryLogStatus = config.queryLogStatus;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._dataEncryptionMetadata.internalValue = config.dataEncryptionMetadata;
    this._member.internalValue = config.member;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // creator_display_name - computed: false, optional: false, required: true
  private _creatorDisplayName?: string; 
  public get creatorDisplayName() {
    return this.getStringAttribute('creator_display_name');
  }
  public set creatorDisplayName(value: string) {
    this._creatorDisplayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get creatorDisplayNameInput() {
    return this._creatorDisplayName;
  }

  // creator_member_abilities - computed: false, optional: false, required: true
  private _creatorMemberAbilities?: string[]; 
  public get creatorMemberAbilities() {
    return this.getListAttribute('creator_member_abilities');
  }
  public set creatorMemberAbilities(value: string[]) {
    this._creatorMemberAbilities = value;
  }
  // Temporarily expose input value. Use with caution.
  public get creatorMemberAbilitiesInput() {
    return this._creatorMemberAbilities;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // query_log_status - computed: false, optional: false, required: true
  private _queryLogStatus?: string; 
  public get queryLogStatus() {
    return this.getStringAttribute('query_log_status');
  }
  public set queryLogStatus(value: string) {
    this._queryLogStatus = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryLogStatusInput() {
    return this._queryLogStatus;
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

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // data_encryption_metadata - computed: false, optional: true, required: false
  private _dataEncryptionMetadata = new CleanroomsCollaborationDataEncryptionMetadataOutputReference(this, "data_encryption_metadata");
  public get dataEncryptionMetadata() {
    return this._dataEncryptionMetadata;
  }
  public putDataEncryptionMetadata(value: CleanroomsCollaborationDataEncryptionMetadata) {
    this._dataEncryptionMetadata.internalValue = value;
  }
  public resetDataEncryptionMetadata() {
    this._dataEncryptionMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataEncryptionMetadataInput() {
    return this._dataEncryptionMetadata.internalValue;
  }

  // member - computed: false, optional: true, required: false
  private _member = new CleanroomsCollaborationMemberList(this, "member", true);
  public get member() {
    return this._member;
  }
  public putMember(value: CleanroomsCollaborationMember[] | cdktf.IResolvable) {
    this._member.internalValue = value;
  }
  public resetMember() {
    this._member.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberInput() {
    return this._member.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CleanroomsCollaborationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CleanroomsCollaborationTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      creator_display_name: cdktf.stringToTerraform(this._creatorDisplayName),
      creator_member_abilities: cdktf.listMapper(cdktf.stringToTerraform, false)(this._creatorMemberAbilities),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      query_log_status: cdktf.stringToTerraform(this._queryLogStatus),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      data_encryption_metadata: cleanroomsCollaborationDataEncryptionMetadataToTerraform(this._dataEncryptionMetadata.internalValue),
      member: cdktf.listMapper(cleanroomsCollaborationMemberToTerraform, true)(this._member.internalValue),
      timeouts: cleanroomsCollaborationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
