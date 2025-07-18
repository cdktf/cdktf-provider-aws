/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_monitoring_schedule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SagemakerMonitoringScheduleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_monitoring_schedule#id SagemakerMonitoringSchedule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_monitoring_schedule#name SagemakerMonitoringSchedule#name}
  */
  readonly name?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_monitoring_schedule#region SagemakerMonitoringSchedule#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_monitoring_schedule#tags SagemakerMonitoringSchedule#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_monitoring_schedule#tags_all SagemakerMonitoringSchedule#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * monitoring_schedule_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_monitoring_schedule#monitoring_schedule_config SagemakerMonitoringSchedule#monitoring_schedule_config}
  */
  readonly monitoringScheduleConfig: SagemakerMonitoringScheduleMonitoringScheduleConfig;
}
export interface SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_monitoring_schedule#schedule_expression SagemakerMonitoringSchedule#schedule_expression}
  */
  readonly scheduleExpression: string;
}

export function sagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigToTerraform(struct?: SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference | SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    schedule_expression: cdktf.stringToTerraform(struct!.scheduleExpression),
  }
}


export function sagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigToHclTerraform(struct?: SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference | SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    schedule_expression: {
      value: cdktf.stringToHclTerraform(struct!.scheduleExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scheduleExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduleExpression = this._scheduleExpression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._scheduleExpression = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._scheduleExpression = value.scheduleExpression;
    }
  }

  // schedule_expression - computed: false, optional: false, required: true
  private _scheduleExpression?: string; 
  public get scheduleExpression() {
    return this.getStringAttribute('schedule_expression');
  }
  public set scheduleExpression(value: string) {
    this._scheduleExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleExpressionInput() {
    return this._scheduleExpression;
  }
}
export interface SagemakerMonitoringScheduleMonitoringScheduleConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_monitoring_schedule#monitoring_job_definition_name SagemakerMonitoringSchedule#monitoring_job_definition_name}
  */
  readonly monitoringJobDefinitionName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_monitoring_schedule#monitoring_type SagemakerMonitoringSchedule#monitoring_type}
  */
  readonly monitoringType: string;
  /**
  * schedule_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_monitoring_schedule#schedule_config SagemakerMonitoringSchedule#schedule_config}
  */
  readonly scheduleConfig?: SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfig;
}

export function sagemakerMonitoringScheduleMonitoringScheduleConfigToTerraform(struct?: SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference | SagemakerMonitoringScheduleMonitoringScheduleConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    monitoring_job_definition_name: cdktf.stringToTerraform(struct!.monitoringJobDefinitionName),
    monitoring_type: cdktf.stringToTerraform(struct!.monitoringType),
    schedule_config: sagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigToTerraform(struct!.scheduleConfig),
  }
}


export function sagemakerMonitoringScheduleMonitoringScheduleConfigToHclTerraform(struct?: SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference | SagemakerMonitoringScheduleMonitoringScheduleConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    monitoring_job_definition_name: {
      value: cdktf.stringToHclTerraform(struct!.monitoringJobDefinitionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    monitoring_type: {
      value: cdktf.stringToHclTerraform(struct!.monitoringType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schedule_config: {
      value: sagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigToHclTerraform(struct!.scheduleConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerMonitoringScheduleMonitoringScheduleConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._monitoringJobDefinitionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoringJobDefinitionName = this._monitoringJobDefinitionName;
    }
    if (this._monitoringType !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoringType = this._monitoringType;
    }
    if (this._scheduleConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduleConfig = this._scheduleConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerMonitoringScheduleMonitoringScheduleConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._monitoringJobDefinitionName = undefined;
      this._monitoringType = undefined;
      this._scheduleConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._monitoringJobDefinitionName = value.monitoringJobDefinitionName;
      this._monitoringType = value.monitoringType;
      this._scheduleConfig.internalValue = value.scheduleConfig;
    }
  }

  // monitoring_job_definition_name - computed: false, optional: false, required: true
  private _monitoringJobDefinitionName?: string; 
  public get monitoringJobDefinitionName() {
    return this.getStringAttribute('monitoring_job_definition_name');
  }
  public set monitoringJobDefinitionName(value: string) {
    this._monitoringJobDefinitionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringJobDefinitionNameInput() {
    return this._monitoringJobDefinitionName;
  }

  // monitoring_type - computed: false, optional: false, required: true
  private _monitoringType?: string; 
  public get monitoringType() {
    return this.getStringAttribute('monitoring_type');
  }
  public set monitoringType(value: string) {
    this._monitoringType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringTypeInput() {
    return this._monitoringType;
  }

  // schedule_config - computed: false, optional: true, required: false
  private _scheduleConfig = new SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference(this, "schedule_config");
  public get scheduleConfig() {
    return this._scheduleConfig;
  }
  public putScheduleConfig(value: SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfig) {
    this._scheduleConfig.internalValue = value;
  }
  public resetScheduleConfig() {
    this._scheduleConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleConfigInput() {
    return this._scheduleConfig.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_monitoring_schedule aws_sagemaker_monitoring_schedule}
*/
export class SagemakerMonitoringSchedule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_sagemaker_monitoring_schedule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SagemakerMonitoringSchedule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SagemakerMonitoringSchedule to import
  * @param importFromId The id of the existing SagemakerMonitoringSchedule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_monitoring_schedule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SagemakerMonitoringSchedule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_sagemaker_monitoring_schedule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_monitoring_schedule aws_sagemaker_monitoring_schedule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagemakerMonitoringScheduleConfig
  */
  public constructor(scope: Construct, id: string, config: SagemakerMonitoringScheduleConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sagemaker_monitoring_schedule',
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
    this._id = config.id;
    this._name = config.name;
    this._region = config.region;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._monitoringScheduleConfig.internalValue = config.monitoringScheduleConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
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

  // monitoring_schedule_config - computed: false, optional: false, required: true
  private _monitoringScheduleConfig = new SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference(this, "monitoring_schedule_config");
  public get monitoringScheduleConfig() {
    return this._monitoringScheduleConfig;
  }
  public putMonitoringScheduleConfig(value: SagemakerMonitoringScheduleMonitoringScheduleConfig) {
    this._monitoringScheduleConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringScheduleConfigInput() {
    return this._monitoringScheduleConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      monitoring_schedule_config: sagemakerMonitoringScheduleMonitoringScheduleConfigToTerraform(this._monitoringScheduleConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      tags_all: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tagsAll),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      monitoring_schedule_config: {
        value: sagemakerMonitoringScheduleMonitoringScheduleConfigToHclTerraform(this._monitoringScheduleConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerMonitoringScheduleMonitoringScheduleConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
