/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/auditmanager_control
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuditmanagerControlConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/auditmanager_control#action_plan_instructions AuditmanagerControl#action_plan_instructions}
  */
  readonly actionPlanInstructions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/auditmanager_control#action_plan_title AuditmanagerControl#action_plan_title}
  */
  readonly actionPlanTitle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/auditmanager_control#description AuditmanagerControl#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/auditmanager_control#name AuditmanagerControl#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/auditmanager_control#region AuditmanagerControl#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/auditmanager_control#tags AuditmanagerControl#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/auditmanager_control#testing_information AuditmanagerControl#testing_information}
  */
  readonly testingInformation?: string;
  /**
  * control_mapping_sources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/auditmanager_control#control_mapping_sources AuditmanagerControl#control_mapping_sources}
  */
  readonly controlMappingSources?: AuditmanagerControlControlMappingSources[] | cdktf.IResolvable;
}
export interface AuditmanagerControlControlMappingSourcesSourceKeyword {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/auditmanager_control#keyword_input_type AuditmanagerControl#keyword_input_type}
  */
  readonly keywordInputType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/auditmanager_control#keyword_value AuditmanagerControl#keyword_value}
  */
  readonly keywordValue?: string;
}

export function auditmanagerControlControlMappingSourcesSourceKeywordToTerraform(struct?: AuditmanagerControlControlMappingSourcesSourceKeyword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keyword_input_type: cdktf.stringToTerraform(struct!.keywordInputType),
    keyword_value: cdktf.stringToTerraform(struct!.keywordValue),
  }
}


export function auditmanagerControlControlMappingSourcesSourceKeywordToHclTerraform(struct?: AuditmanagerControlControlMappingSourcesSourceKeyword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    keyword_input_type: {
      value: cdktf.stringToHclTerraform(struct!.keywordInputType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keyword_value: {
      value: cdktf.stringToHclTerraform(struct!.keywordValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AuditmanagerControlControlMappingSourcesSourceKeyword | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keywordInputType !== undefined) {
      hasAnyValues = true;
      internalValueResult.keywordInputType = this._keywordInputType;
    }
    if (this._keywordValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keywordValue = this._keywordValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuditmanagerControlControlMappingSourcesSourceKeyword | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keywordInputType = undefined;
      this._keywordValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keywordInputType = value.keywordInputType;
      this._keywordValue = value.keywordValue;
    }
  }

  // keyword_input_type - computed: true, optional: true, required: false
  private _keywordInputType?: string; 
  public get keywordInputType() {
    return this.getStringAttribute('keyword_input_type');
  }
  public set keywordInputType(value: string) {
    this._keywordInputType = value;
  }
  public resetKeywordInputType() {
    this._keywordInputType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keywordInputTypeInput() {
    return this._keywordInputType;
  }

  // keyword_value - computed: true, optional: true, required: false
  private _keywordValue?: string; 
  public get keywordValue() {
    return this.getStringAttribute('keyword_value');
  }
  public set keywordValue(value: string) {
    this._keywordValue = value;
  }
  public resetKeywordValue() {
    this._keywordValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keywordValueInput() {
    return this._keywordValue;
  }
}

export class AuditmanagerControlControlMappingSourcesSourceKeywordList extends cdktf.ComplexList {
  public internalValue? : AuditmanagerControlControlMappingSourcesSourceKeyword[] | cdktf.IResolvable

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
  public get(index: number): AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference {
    return new AuditmanagerControlControlMappingSourcesSourceKeywordOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AuditmanagerControlControlMappingSources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/auditmanager_control#source_description AuditmanagerControl#source_description}
  */
  readonly sourceDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/auditmanager_control#source_frequency AuditmanagerControl#source_frequency}
  */
  readonly sourceFrequency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/auditmanager_control#source_keyword AuditmanagerControl#source_keyword}
  */
  readonly sourceKeyword?: AuditmanagerControlControlMappingSourcesSourceKeyword[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/auditmanager_control#source_name AuditmanagerControl#source_name}
  */
  readonly sourceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/auditmanager_control#source_set_up_option AuditmanagerControl#source_set_up_option}
  */
  readonly sourceSetUpOption: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/auditmanager_control#source_type AuditmanagerControl#source_type}
  */
  readonly sourceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/auditmanager_control#troubleshooting_text AuditmanagerControl#troubleshooting_text}
  */
  readonly troubleshootingText?: string;
}

export function auditmanagerControlControlMappingSourcesToTerraform(struct?: AuditmanagerControlControlMappingSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_description: cdktf.stringToTerraform(struct!.sourceDescription),
    source_frequency: cdktf.stringToTerraform(struct!.sourceFrequency),
    source_keyword: cdktf.listMapper(auditmanagerControlControlMappingSourcesSourceKeywordToTerraform, false)(struct!.sourceKeyword),
    source_name: cdktf.stringToTerraform(struct!.sourceName),
    source_set_up_option: cdktf.stringToTerraform(struct!.sourceSetUpOption),
    source_type: cdktf.stringToTerraform(struct!.sourceType),
    troubleshooting_text: cdktf.stringToTerraform(struct!.troubleshootingText),
  }
}


export function auditmanagerControlControlMappingSourcesToHclTerraform(struct?: AuditmanagerControlControlMappingSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source_description: {
      value: cdktf.stringToHclTerraform(struct!.sourceDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_frequency: {
      value: cdktf.stringToHclTerraform(struct!.sourceFrequency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_keyword: {
      value: cdktf.listMapperHcl(auditmanagerControlControlMappingSourcesSourceKeywordToHclTerraform, false)(struct!.sourceKeyword),
      isBlock: true,
      type: "list",
      storageClassType: "AuditmanagerControlControlMappingSourcesSourceKeywordList",
    },
    source_name: {
      value: cdktf.stringToHclTerraform(struct!.sourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_set_up_option: {
      value: cdktf.stringToHclTerraform(struct!.sourceSetUpOption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_type: {
      value: cdktf.stringToHclTerraform(struct!.sourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    troubleshooting_text: {
      value: cdktf.stringToHclTerraform(struct!.troubleshootingText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuditmanagerControlControlMappingSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AuditmanagerControlControlMappingSources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceDescription = this._sourceDescription;
    }
    if (this._sourceFrequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceFrequency = this._sourceFrequency;
    }
    if (this._sourceKeyword?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceKeyword = this._sourceKeyword?.internalValue;
    }
    if (this._sourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceName = this._sourceName;
    }
    if (this._sourceSetUpOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceSetUpOption = this._sourceSetUpOption;
    }
    if (this._sourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceType = this._sourceType;
    }
    if (this._troubleshootingText !== undefined) {
      hasAnyValues = true;
      internalValueResult.troubleshootingText = this._troubleshootingText;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuditmanagerControlControlMappingSources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sourceDescription = undefined;
      this._sourceFrequency = undefined;
      this._sourceKeyword.internalValue = undefined;
      this._sourceName = undefined;
      this._sourceSetUpOption = undefined;
      this._sourceType = undefined;
      this._troubleshootingText = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sourceDescription = value.sourceDescription;
      this._sourceFrequency = value.sourceFrequency;
      this._sourceKeyword.internalValue = value.sourceKeyword;
      this._sourceName = value.sourceName;
      this._sourceSetUpOption = value.sourceSetUpOption;
      this._sourceType = value.sourceType;
      this._troubleshootingText = value.troubleshootingText;
    }
  }

  // source_description - computed: false, optional: true, required: false
  private _sourceDescription?: string; 
  public get sourceDescription() {
    return this.getStringAttribute('source_description');
  }
  public set sourceDescription(value: string) {
    this._sourceDescription = value;
  }
  public resetSourceDescription() {
    this._sourceDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDescriptionInput() {
    return this._sourceDescription;
  }

  // source_frequency - computed: false, optional: true, required: false
  private _sourceFrequency?: string; 
  public get sourceFrequency() {
    return this.getStringAttribute('source_frequency');
  }
  public set sourceFrequency(value: string) {
    this._sourceFrequency = value;
  }
  public resetSourceFrequency() {
    this._sourceFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFrequencyInput() {
    return this._sourceFrequency;
  }

  // source_id - computed: true, optional: false, required: false
  public get sourceId() {
    return this.getStringAttribute('source_id');
  }

  // source_keyword - computed: true, optional: true, required: false
  private _sourceKeyword = new AuditmanagerControlControlMappingSourcesSourceKeywordList(this, "source_keyword", false);
  public get sourceKeyword() {
    return this._sourceKeyword;
  }
  public putSourceKeyword(value: AuditmanagerControlControlMappingSourcesSourceKeyword[] | cdktf.IResolvable) {
    this._sourceKeyword.internalValue = value;
  }
  public resetSourceKeyword() {
    this._sourceKeyword.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceKeywordInput() {
    return this._sourceKeyword.internalValue;
  }

  // source_name - computed: false, optional: false, required: true
  private _sourceName?: string; 
  public get sourceName() {
    return this.getStringAttribute('source_name');
  }
  public set sourceName(value: string) {
    this._sourceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceNameInput() {
    return this._sourceName;
  }

  // source_set_up_option - computed: false, optional: false, required: true
  private _sourceSetUpOption?: string; 
  public get sourceSetUpOption() {
    return this.getStringAttribute('source_set_up_option');
  }
  public set sourceSetUpOption(value: string) {
    this._sourceSetUpOption = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceSetUpOptionInput() {
    return this._sourceSetUpOption;
  }

  // source_type - computed: false, optional: false, required: true
  private _sourceType?: string; 
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
  public set sourceType(value: string) {
    this._sourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
  }

  // troubleshooting_text - computed: false, optional: true, required: false
  private _troubleshootingText?: string; 
  public get troubleshootingText() {
    return this.getStringAttribute('troubleshooting_text');
  }
  public set troubleshootingText(value: string) {
    this._troubleshootingText = value;
  }
  public resetTroubleshootingText() {
    this._troubleshootingText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get troubleshootingTextInput() {
    return this._troubleshootingText;
  }
}

export class AuditmanagerControlControlMappingSourcesList extends cdktf.ComplexList {
  public internalValue? : AuditmanagerControlControlMappingSources[] | cdktf.IResolvable

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
  public get(index: number): AuditmanagerControlControlMappingSourcesOutputReference {
    return new AuditmanagerControlControlMappingSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/auditmanager_control aws_auditmanager_control}
*/
export class AuditmanagerControl extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_auditmanager_control";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AuditmanagerControl resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AuditmanagerControl to import
  * @param importFromId The id of the existing AuditmanagerControl that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/auditmanager_control#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AuditmanagerControl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_auditmanager_control", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/auditmanager_control aws_auditmanager_control} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuditmanagerControlConfig
  */
  public constructor(scope: Construct, id: string, config: AuditmanagerControlConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_auditmanager_control',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.4.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._actionPlanInstructions = config.actionPlanInstructions;
    this._actionPlanTitle = config.actionPlanTitle;
    this._description = config.description;
    this._name = config.name;
    this._region = config.region;
    this._tags = config.tags;
    this._testingInformation = config.testingInformation;
    this._controlMappingSources.internalValue = config.controlMappingSources;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action_plan_instructions - computed: false, optional: true, required: false
  private _actionPlanInstructions?: string; 
  public get actionPlanInstructions() {
    return this.getStringAttribute('action_plan_instructions');
  }
  public set actionPlanInstructions(value: string) {
    this._actionPlanInstructions = value;
  }
  public resetActionPlanInstructions() {
    this._actionPlanInstructions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionPlanInstructionsInput() {
    return this._actionPlanInstructions;
  }

  // action_plan_title - computed: false, optional: true, required: false
  private _actionPlanTitle?: string; 
  public get actionPlanTitle() {
    return this.getStringAttribute('action_plan_title');
  }
  public set actionPlanTitle(value: string) {
    this._actionPlanTitle = value;
  }
  public resetActionPlanTitle() {
    this._actionPlanTitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionPlanTitleInput() {
    return this._actionPlanTitle;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
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

  // testing_information - computed: false, optional: true, required: false
  private _testingInformation?: string; 
  public get testingInformation() {
    return this.getStringAttribute('testing_information');
  }
  public set testingInformation(value: string) {
    this._testingInformation = value;
  }
  public resetTestingInformation() {
    this._testingInformation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testingInformationInput() {
    return this._testingInformation;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // control_mapping_sources - computed: false, optional: true, required: false
  private _controlMappingSources = new AuditmanagerControlControlMappingSourcesList(this, "control_mapping_sources", true);
  public get controlMappingSources() {
    return this._controlMappingSources;
  }
  public putControlMappingSources(value: AuditmanagerControlControlMappingSources[] | cdktf.IResolvable) {
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
      action_plan_instructions: cdktf.stringToTerraform(this._actionPlanInstructions),
      action_plan_title: cdktf.stringToTerraform(this._actionPlanTitle),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      testing_information: cdktf.stringToTerraform(this._testingInformation),
      control_mapping_sources: cdktf.listMapper(auditmanagerControlControlMappingSourcesToTerraform, true)(this._controlMappingSources.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action_plan_instructions: {
        value: cdktf.stringToHclTerraform(this._actionPlanInstructions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_plan_title: {
        value: cdktf.stringToHclTerraform(this._actionPlanTitle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
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
      testing_information: {
        value: cdktf.stringToHclTerraform(this._testingInformation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      control_mapping_sources: {
        value: cdktf.listMapperHcl(auditmanagerControlControlMappingSourcesToHclTerraform, true)(this._controlMappingSources.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AuditmanagerControlControlMappingSourcesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
