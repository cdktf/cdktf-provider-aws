// https://registry.terraform.io/providers/hashicorp/aws/5.72.1/docs/resources/appsync_source_api_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppsyncSourceApiAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.1/docs/resources/appsync_source_api_association#description AppsyncSourceApiAssociation#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.1/docs/resources/appsync_source_api_association#merged_api_arn AppsyncSourceApiAssociation#merged_api_arn}
  */
  readonly mergedApiArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.1/docs/resources/appsync_source_api_association#merged_api_id AppsyncSourceApiAssociation#merged_api_id}
  */
  readonly mergedApiId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.1/docs/resources/appsync_source_api_association#source_api_arn AppsyncSourceApiAssociation#source_api_arn}
  */
  readonly sourceApiArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.1/docs/resources/appsync_source_api_association#source_api_association_config AppsyncSourceApiAssociation#source_api_association_config}
  */
  readonly sourceApiAssociationConfig?: AppsyncSourceApiAssociationSourceApiAssociationConfig[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.1/docs/resources/appsync_source_api_association#source_api_id AppsyncSourceApiAssociation#source_api_id}
  */
  readonly sourceApiId?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.1/docs/resources/appsync_source_api_association#timeouts AppsyncSourceApiAssociation#timeouts}
  */
  readonly timeouts?: AppsyncSourceApiAssociationTimeouts;
}
export interface AppsyncSourceApiAssociationSourceApiAssociationConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.1/docs/resources/appsync_source_api_association#merge_type AppsyncSourceApiAssociation#merge_type}
  */
  readonly mergeType?: string;
}

export function appsyncSourceApiAssociationSourceApiAssociationConfigToTerraform(struct?: AppsyncSourceApiAssociationSourceApiAssociationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    merge_type: cdktf.stringToTerraform(struct!.mergeType),
  }
}


export function appsyncSourceApiAssociationSourceApiAssociationConfigToHclTerraform(struct?: AppsyncSourceApiAssociationSourceApiAssociationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    merge_type: {
      value: cdktf.stringToHclTerraform(struct!.mergeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppsyncSourceApiAssociationSourceApiAssociationConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mergeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.mergeType = this._mergeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsyncSourceApiAssociationSourceApiAssociationConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mergeType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mergeType = value.mergeType;
    }
  }

  // merge_type - computed: true, optional: true, required: false
  private _mergeType?: string; 
  public get mergeType() {
    return this.getStringAttribute('merge_type');
  }
  public set mergeType(value: string) {
    this._mergeType = value;
  }
  public resetMergeType() {
    this._mergeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mergeTypeInput() {
    return this._mergeType;
  }
}

export class AppsyncSourceApiAssociationSourceApiAssociationConfigList extends cdktf.ComplexList {
  public internalValue? : AppsyncSourceApiAssociationSourceApiAssociationConfig[] | cdktf.IResolvable

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
  public get(index: number): AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference {
    return new AppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppsyncSourceApiAssociationTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.1/docs/resources/appsync_source_api_association#create AppsyncSourceApiAssociation#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.1/docs/resources/appsync_source_api_association#delete AppsyncSourceApiAssociation#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.1/docs/resources/appsync_source_api_association#update AppsyncSourceApiAssociation#update}
  */
  readonly update?: string;
}

export function appsyncSourceApiAssociationTimeoutsToTerraform(struct?: AppsyncSourceApiAssociationTimeouts | cdktf.IResolvable): any {
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


export function appsyncSourceApiAssociationTimeoutsToHclTerraform(struct?: AppsyncSourceApiAssociationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsyncSourceApiAssociationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsyncSourceApiAssociationTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AppsyncSourceApiAssociationTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.1/docs/resources/appsync_source_api_association aws_appsync_source_api_association}
*/
export class AppsyncSourceApiAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_appsync_source_api_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppsyncSourceApiAssociation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppsyncSourceApiAssociation to import
  * @param importFromId The id of the existing AppsyncSourceApiAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.1/docs/resources/appsync_source_api_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppsyncSourceApiAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_appsync_source_api_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.1/docs/resources/appsync_source_api_association aws_appsync_source_api_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppsyncSourceApiAssociationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AppsyncSourceApiAssociationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_appsync_source_api_association',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.72.1',
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
    this._description = config.description;
    this._mergedApiArn = config.mergedApiArn;
    this._mergedApiId = config.mergedApiId;
    this._sourceApiArn = config.sourceApiArn;
    this._sourceApiAssociationConfig.internalValue = config.sourceApiAssociationConfig;
    this._sourceApiId = config.sourceApiId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // association_id - computed: true, optional: false, required: false
  public get associationId() {
    return this.getStringAttribute('association_id');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // merged_api_arn - computed: true, optional: true, required: false
  private _mergedApiArn?: string; 
  public get mergedApiArn() {
    return this.getStringAttribute('merged_api_arn');
  }
  public set mergedApiArn(value: string) {
    this._mergedApiArn = value;
  }
  public resetMergedApiArn() {
    this._mergedApiArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mergedApiArnInput() {
    return this._mergedApiArn;
  }

  // merged_api_id - computed: true, optional: true, required: false
  private _mergedApiId?: string; 
  public get mergedApiId() {
    return this.getStringAttribute('merged_api_id');
  }
  public set mergedApiId(value: string) {
    this._mergedApiId = value;
  }
  public resetMergedApiId() {
    this._mergedApiId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mergedApiIdInput() {
    return this._mergedApiId;
  }

  // source_api_arn - computed: true, optional: true, required: false
  private _sourceApiArn?: string; 
  public get sourceApiArn() {
    return this.getStringAttribute('source_api_arn');
  }
  public set sourceApiArn(value: string) {
    this._sourceApiArn = value;
  }
  public resetSourceApiArn() {
    this._sourceApiArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceApiArnInput() {
    return this._sourceApiArn;
  }

  // source_api_association_config - computed: true, optional: true, required: false
  private _sourceApiAssociationConfig = new AppsyncSourceApiAssociationSourceApiAssociationConfigList(this, "source_api_association_config", false);
  public get sourceApiAssociationConfig() {
    return this._sourceApiAssociationConfig;
  }
  public putSourceApiAssociationConfig(value: AppsyncSourceApiAssociationSourceApiAssociationConfig[] | cdktf.IResolvable) {
    this._sourceApiAssociationConfig.internalValue = value;
  }
  public resetSourceApiAssociationConfig() {
    this._sourceApiAssociationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceApiAssociationConfigInput() {
    return this._sourceApiAssociationConfig.internalValue;
  }

  // source_api_id - computed: true, optional: true, required: false
  private _sourceApiId?: string; 
  public get sourceApiId() {
    return this.getStringAttribute('source_api_id');
  }
  public set sourceApiId(value: string) {
    this._sourceApiId = value;
  }
  public resetSourceApiId() {
    this._sourceApiId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceApiIdInput() {
    return this._sourceApiId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AppsyncSourceApiAssociationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AppsyncSourceApiAssociationTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      merged_api_arn: cdktf.stringToTerraform(this._mergedApiArn),
      merged_api_id: cdktf.stringToTerraform(this._mergedApiId),
      source_api_arn: cdktf.stringToTerraform(this._sourceApiArn),
      source_api_association_config: cdktf.listMapper(appsyncSourceApiAssociationSourceApiAssociationConfigToTerraform, false)(this._sourceApiAssociationConfig.internalValue),
      source_api_id: cdktf.stringToTerraform(this._sourceApiId),
      timeouts: appsyncSourceApiAssociationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      merged_api_arn: {
        value: cdktf.stringToHclTerraform(this._mergedApiArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      merged_api_id: {
        value: cdktf.stringToHclTerraform(this._mergedApiId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_api_arn: {
        value: cdktf.stringToHclTerraform(this._sourceApiArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_api_association_config: {
        value: cdktf.listMapperHcl(appsyncSourceApiAssociationSourceApiAssociationConfigToHclTerraform, false)(this._sourceApiAssociationConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppsyncSourceApiAssociationSourceApiAssociationConfigList",
      },
      source_api_id: {
        value: cdktf.stringToHclTerraform(this._sourceApiId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: appsyncSourceApiAssociationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AppsyncSourceApiAssociationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
