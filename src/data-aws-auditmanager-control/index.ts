// https://www.terraform.io/docs/providers/aws/d/auditmanager_control
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsAuditmanagerControlConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/auditmanager_control#name DataAwsAuditmanagerControl#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/auditmanager_control#type DataAwsAuditmanagerControl#type}
  */
  readonly type: string;
  /**
  * control_mapping_sources block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/auditmanager_control#control_mapping_sources DataAwsAuditmanagerControl#control_mapping_sources}
  */
  readonly controlMappingSources?: DataAwsAuditmanagerControlControlMappingSources[] | cdktf.IResolvable;
}
export interface DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword {
}

export function dataAwsAuditmanagerControlControlMappingSourcesSourceKeywordToTerraform(struct?: DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // keyword_input_type - computed: true, optional: false, required: false
  public get keywordInputType() {
    return this.getStringAttribute('keyword_input_type');
  }

  // keyword_value - computed: true, optional: false, required: false
  public get keywordValue() {
    return this.getStringAttribute('keyword_value');
  }
}

export class DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList extends cdktf.ComplexList {
  public internalValue? : DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword[] | cdktf.IResolvable

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
  public get(index: number): DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference {
    return new DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsAuditmanagerControlControlMappingSources {
  /**
  * source_keyword block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/auditmanager_control#source_keyword DataAwsAuditmanagerControl#source_keyword}
  */
  readonly sourceKeyword?: DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword[] | cdktf.IResolvable;
}

export function dataAwsAuditmanagerControlControlMappingSourcesToTerraform(struct?: DataAwsAuditmanagerControlControlMappingSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_keyword: cdktf.listMapper(dataAwsAuditmanagerControlControlMappingSourcesSourceKeywordToTerraform, true)(struct!.sourceKeyword),
  }
}

export class DataAwsAuditmanagerControlControlMappingSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsAuditmanagerControlControlMappingSources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceKeyword?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceKeyword = this._sourceKeyword?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsAuditmanagerControlControlMappingSources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sourceKeyword.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sourceKeyword.internalValue = value.sourceKeyword;
    }
  }

  // source_description - computed: true, optional: false, required: false
  public get sourceDescription() {
    return this.getStringAttribute('source_description');
  }

  // source_frequency - computed: true, optional: false, required: false
  public get sourceFrequency() {
    return this.getStringAttribute('source_frequency');
  }

  // source_id - computed: true, optional: false, required: false
  public get sourceId() {
    return this.getStringAttribute('source_id');
  }

  // source_name - computed: true, optional: false, required: false
  public get sourceName() {
    return this.getStringAttribute('source_name');
  }

  // source_set_up_option - computed: true, optional: false, required: false
  public get sourceSetUpOption() {
    return this.getStringAttribute('source_set_up_option');
  }

  // source_type - computed: true, optional: false, required: false
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }

  // troubleshooting_text - computed: true, optional: false, required: false
  public get troubleshootingText() {
    return this.getStringAttribute('troubleshooting_text');
  }

  // source_keyword - computed: false, optional: true, required: false
  private _sourceKeyword = new DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList(this, "source_keyword", false);
  public get sourceKeyword() {
    return this._sourceKeyword;
  }
  public putSourceKeyword(value: DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword[] | cdktf.IResolvable) {
    this._sourceKeyword.internalValue = value;
  }
  public resetSourceKeyword() {
    this._sourceKeyword.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceKeywordInput() {
    return this._sourceKeyword.internalValue;
  }
}

export class DataAwsAuditmanagerControlControlMappingSourcesList extends cdktf.ComplexList {
  public internalValue? : DataAwsAuditmanagerControlControlMappingSources[] | cdktf.IResolvable

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
  public get(index: number): DataAwsAuditmanagerControlControlMappingSourcesOutputReference {
    return new DataAwsAuditmanagerControlControlMappingSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/auditmanager_control aws_auditmanager_control}
*/
export class DataAwsAuditmanagerControl extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_auditmanager_control";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/auditmanager_control aws_auditmanager_control} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsAuditmanagerControlConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsAuditmanagerControlConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_auditmanager_control',
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
    this._name = config.name;
    this._type = config.type;
    this._controlMappingSources.internalValue = config.controlMappingSources;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action_plan_instructions - computed: true, optional: false, required: false
  public get actionPlanInstructions() {
    return this.getStringAttribute('action_plan_instructions');
  }

  // action_plan_title - computed: true, optional: false, required: false
  public get actionPlanTitle() {
    return this.getStringAttribute('action_plan_title');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // testing_information - computed: true, optional: false, required: false
  public get testingInformation() {
    return this.getStringAttribute('testing_information');
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

  // control_mapping_sources - computed: false, optional: true, required: false
  private _controlMappingSources = new DataAwsAuditmanagerControlControlMappingSourcesList(this, "control_mapping_sources", true);
  public get controlMappingSources() {
    return this._controlMappingSources;
  }
  public putControlMappingSources(value: DataAwsAuditmanagerControlControlMappingSources[] | cdktf.IResolvable) {
    this._controlMappingSources.internalValue = value;
  }
  public resetControlMappingSources() {
    this._controlMappingSources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlMappingSourcesInput() {
    return this._controlMappingSources.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      type: cdktf.stringToTerraform(this._type),
      control_mapping_sources: cdktf.listMapper(dataAwsAuditmanagerControlControlMappingSourcesToTerraform, true)(this._controlMappingSources.internalValue),
    };
  }
}
