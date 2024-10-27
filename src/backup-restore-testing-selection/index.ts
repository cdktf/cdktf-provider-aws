// https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/backup_restore_testing_selection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BackupRestoreTestingSelectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/backup_restore_testing_selection#iam_role_arn BackupRestoreTestingSelection#iam_role_arn}
  */
  readonly iamRoleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/backup_restore_testing_selection#name BackupRestoreTestingSelection#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/backup_restore_testing_selection#protected_resource_arns BackupRestoreTestingSelection#protected_resource_arns}
  */
  readonly protectedResourceArns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/backup_restore_testing_selection#protected_resource_type BackupRestoreTestingSelection#protected_resource_type}
  */
  readonly protectedResourceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/backup_restore_testing_selection#restore_metadata_overrides BackupRestoreTestingSelection#restore_metadata_overrides}
  */
  readonly restoreMetadataOverrides?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/backup_restore_testing_selection#restore_testing_plan_name BackupRestoreTestingSelection#restore_testing_plan_name}
  */
  readonly restoreTestingPlanName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/backup_restore_testing_selection#validation_window_hours BackupRestoreTestingSelection#validation_window_hours}
  */
  readonly validationWindowHours?: number;
  /**
  * protected_resource_conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/backup_restore_testing_selection#protected_resource_conditions BackupRestoreTestingSelection#protected_resource_conditions}
  */
  readonly protectedResourceConditions?: BackupRestoreTestingSelectionProtectedResourceConditions[] | cdktf.IResolvable;
}
export interface BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/backup_restore_testing_selection#key BackupRestoreTestingSelection#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/backup_restore_testing_selection#value BackupRestoreTestingSelection#value}
  */
  readonly value: string;
}

export function backupRestoreTestingSelectionProtectedResourceConditionsStringEqualsToTerraform(struct?: BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function backupRestoreTestingSelectionProtectedResourceConditionsStringEqualsToHclTerraform(struct?: BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

export class BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList extends cdktf.ComplexList {
  public internalValue? : BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals[] | cdktf.IResolvable

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
  public get(index: number): BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference {
    return new BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/backup_restore_testing_selection#key BackupRestoreTestingSelection#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/backup_restore_testing_selection#value BackupRestoreTestingSelection#value}
  */
  readonly value: string;
}

export function backupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsToTerraform(struct?: BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function backupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsToHclTerraform(struct?: BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

export class BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList extends cdktf.ComplexList {
  public internalValue? : BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals[] | cdktf.IResolvable

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
  public get(index: number): BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference {
    return new BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BackupRestoreTestingSelectionProtectedResourceConditions {
  /**
  * string_equals block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/backup_restore_testing_selection#string_equals BackupRestoreTestingSelection#string_equals}
  */
  readonly stringEquals?: BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals[] | cdktf.IResolvable;
  /**
  * string_not_equals block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/backup_restore_testing_selection#string_not_equals BackupRestoreTestingSelection#string_not_equals}
  */
  readonly stringNotEquals?: BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals[] | cdktf.IResolvable;
}

export function backupRestoreTestingSelectionProtectedResourceConditionsToTerraform(struct?: BackupRestoreTestingSelectionProtectedResourceConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    string_equals: cdktf.listMapper(backupRestoreTestingSelectionProtectedResourceConditionsStringEqualsToTerraform, true)(struct!.stringEquals),
    string_not_equals: cdktf.listMapper(backupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsToTerraform, true)(struct!.stringNotEquals),
  }
}


export function backupRestoreTestingSelectionProtectedResourceConditionsToHclTerraform(struct?: BackupRestoreTestingSelectionProtectedResourceConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    string_equals: {
      value: cdktf.listMapperHcl(backupRestoreTestingSelectionProtectedResourceConditionsStringEqualsToHclTerraform, true)(struct!.stringEquals),
      isBlock: true,
      type: "list",
      storageClassType: "BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList",
    },
    string_not_equals: {
      value: cdktf.listMapperHcl(backupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsToHclTerraform, true)(struct!.stringNotEquals),
      isBlock: true,
      type: "list",
      storageClassType: "BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BackupRestoreTestingSelectionProtectedResourceConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stringEquals?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringEquals = this._stringEquals?.internalValue;
    }
    if (this._stringNotEquals?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringNotEquals = this._stringNotEquals?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupRestoreTestingSelectionProtectedResourceConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._stringEquals.internalValue = undefined;
      this._stringNotEquals.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._stringEquals.internalValue = value.stringEquals;
      this._stringNotEquals.internalValue = value.stringNotEquals;
    }
  }

  // string_equals - computed: false, optional: true, required: false
  private _stringEquals = new BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList(this, "string_equals", false);
  public get stringEquals() {
    return this._stringEquals;
  }
  public putStringEquals(value: BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals[] | cdktf.IResolvable) {
    this._stringEquals.internalValue = value;
  }
  public resetStringEquals() {
    this._stringEquals.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringEqualsInput() {
    return this._stringEquals.internalValue;
  }

  // string_not_equals - computed: false, optional: true, required: false
  private _stringNotEquals = new BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList(this, "string_not_equals", false);
  public get stringNotEquals() {
    return this._stringNotEquals;
  }
  public putStringNotEquals(value: BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals[] | cdktf.IResolvable) {
    this._stringNotEquals.internalValue = value;
  }
  public resetStringNotEquals() {
    this._stringNotEquals.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringNotEqualsInput() {
    return this._stringNotEquals.internalValue;
  }
}

export class BackupRestoreTestingSelectionProtectedResourceConditionsList extends cdktf.ComplexList {
  public internalValue? : BackupRestoreTestingSelectionProtectedResourceConditions[] | cdktf.IResolvable

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
  public get(index: number): BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference {
    return new BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/backup_restore_testing_selection aws_backup_restore_testing_selection}
*/
export class BackupRestoreTestingSelection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_backup_restore_testing_selection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BackupRestoreTestingSelection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BackupRestoreTestingSelection to import
  * @param importFromId The id of the existing BackupRestoreTestingSelection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/backup_restore_testing_selection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BackupRestoreTestingSelection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_backup_restore_testing_selection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/backup_restore_testing_selection aws_backup_restore_testing_selection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BackupRestoreTestingSelectionConfig
  */
  public constructor(scope: Construct, id: string, config: BackupRestoreTestingSelectionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_backup_restore_testing_selection',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.73.0',
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
    this._iamRoleArn = config.iamRoleArn;
    this._name = config.name;
    this._protectedResourceArns = config.protectedResourceArns;
    this._protectedResourceType = config.protectedResourceType;
    this._restoreMetadataOverrides = config.restoreMetadataOverrides;
    this._restoreTestingPlanName = config.restoreTestingPlanName;
    this._validationWindowHours = config.validationWindowHours;
    this._protectedResourceConditions.internalValue = config.protectedResourceConditions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // iam_role_arn - computed: false, optional: false, required: true
  private _iamRoleArn?: string; 
  public get iamRoleArn() {
    return this.getStringAttribute('iam_role_arn');
  }
  public set iamRoleArn(value: string) {
    this._iamRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iamRoleArnInput() {
    return this._iamRoleArn;
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

  // protected_resource_arns - computed: true, optional: true, required: false
  private _protectedResourceArns?: string[]; 
  public get protectedResourceArns() {
    return cdktf.Fn.tolist(this.getListAttribute('protected_resource_arns'));
  }
  public set protectedResourceArns(value: string[]) {
    this._protectedResourceArns = value;
  }
  public resetProtectedResourceArns() {
    this._protectedResourceArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectedResourceArnsInput() {
    return this._protectedResourceArns;
  }

  // protected_resource_type - computed: false, optional: false, required: true
  private _protectedResourceType?: string; 
  public get protectedResourceType() {
    return this.getStringAttribute('protected_resource_type');
  }
  public set protectedResourceType(value: string) {
    this._protectedResourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protectedResourceTypeInput() {
    return this._protectedResourceType;
  }

  // restore_metadata_overrides - computed: true, optional: true, required: false
  private _restoreMetadataOverrides?: { [key: string]: string }; 
  public get restoreMetadataOverrides() {
    return this.getStringMapAttribute('restore_metadata_overrides');
  }
  public set restoreMetadataOverrides(value: { [key: string]: string }) {
    this._restoreMetadataOverrides = value;
  }
  public resetRestoreMetadataOverrides() {
    this._restoreMetadataOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreMetadataOverridesInput() {
    return this._restoreMetadataOverrides;
  }

  // restore_testing_plan_name - computed: false, optional: false, required: true
  private _restoreTestingPlanName?: string; 
  public get restoreTestingPlanName() {
    return this.getStringAttribute('restore_testing_plan_name');
  }
  public set restoreTestingPlanName(value: string) {
    this._restoreTestingPlanName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreTestingPlanNameInput() {
    return this._restoreTestingPlanName;
  }

  // validation_window_hours - computed: true, optional: true, required: false
  private _validationWindowHours?: number; 
  public get validationWindowHours() {
    return this.getNumberAttribute('validation_window_hours');
  }
  public set validationWindowHours(value: number) {
    this._validationWindowHours = value;
  }
  public resetValidationWindowHours() {
    this._validationWindowHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationWindowHoursInput() {
    return this._validationWindowHours;
  }

  // protected_resource_conditions - computed: false, optional: true, required: false
  private _protectedResourceConditions = new BackupRestoreTestingSelectionProtectedResourceConditionsList(this, "protected_resource_conditions", false);
  public get protectedResourceConditions() {
    return this._protectedResourceConditions;
  }
  public putProtectedResourceConditions(value: BackupRestoreTestingSelectionProtectedResourceConditions[] | cdktf.IResolvable) {
    this._protectedResourceConditions.internalValue = value;
  }
  public resetProtectedResourceConditions() {
    this._protectedResourceConditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectedResourceConditionsInput() {
    return this._protectedResourceConditions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      iam_role_arn: cdktf.stringToTerraform(this._iamRoleArn),
      name: cdktf.stringToTerraform(this._name),
      protected_resource_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._protectedResourceArns),
      protected_resource_type: cdktf.stringToTerraform(this._protectedResourceType),
      restore_metadata_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(this._restoreMetadataOverrides),
      restore_testing_plan_name: cdktf.stringToTerraform(this._restoreTestingPlanName),
      validation_window_hours: cdktf.numberToTerraform(this._validationWindowHours),
      protected_resource_conditions: cdktf.listMapper(backupRestoreTestingSelectionProtectedResourceConditionsToTerraform, true)(this._protectedResourceConditions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      iam_role_arn: {
        value: cdktf.stringToHclTerraform(this._iamRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protected_resource_arns: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._protectedResourceArns),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      protected_resource_type: {
        value: cdktf.stringToHclTerraform(this._protectedResourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      restore_metadata_overrides: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._restoreMetadataOverrides),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      restore_testing_plan_name: {
        value: cdktf.stringToHclTerraform(this._restoreTestingPlanName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      validation_window_hours: {
        value: cdktf.numberToHclTerraform(this._validationWindowHours),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      protected_resource_conditions: {
        value: cdktf.listMapperHcl(backupRestoreTestingSelectionProtectedResourceConditionsToHclTerraform, true)(this._protectedResourceConditions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BackupRestoreTestingSelectionProtectedResourceConditionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
