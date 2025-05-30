/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/cloudwatch_log_anomaly_detector
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudwatchLogAnomalyDetectorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/cloudwatch_log_anomaly_detector#anomaly_visibility_time CloudwatchLogAnomalyDetector#anomaly_visibility_time}
  */
  readonly anomalyVisibilityTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/cloudwatch_log_anomaly_detector#detector_name CloudwatchLogAnomalyDetector#detector_name}
  */
  readonly detectorName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/cloudwatch_log_anomaly_detector#enabled CloudwatchLogAnomalyDetector#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/cloudwatch_log_anomaly_detector#evaluation_frequency CloudwatchLogAnomalyDetector#evaluation_frequency}
  */
  readonly evaluationFrequency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/cloudwatch_log_anomaly_detector#filter_pattern CloudwatchLogAnomalyDetector#filter_pattern}
  */
  readonly filterPattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/cloudwatch_log_anomaly_detector#kms_key_id CloudwatchLogAnomalyDetector#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/cloudwatch_log_anomaly_detector#log_group_arn_list CloudwatchLogAnomalyDetector#log_group_arn_list}
  */
  readonly logGroupArnList: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/cloudwatch_log_anomaly_detector#tags CloudwatchLogAnomalyDetector#tags}
  */
  readonly tags?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/cloudwatch_log_anomaly_detector aws_cloudwatch_log_anomaly_detector}
*/
export class CloudwatchLogAnomalyDetector extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_cloudwatch_log_anomaly_detector";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudwatchLogAnomalyDetector resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudwatchLogAnomalyDetector to import
  * @param importFromId The id of the existing CloudwatchLogAnomalyDetector that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/cloudwatch_log_anomaly_detector#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudwatchLogAnomalyDetector to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_cloudwatch_log_anomaly_detector", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/cloudwatch_log_anomaly_detector aws_cloudwatch_log_anomaly_detector} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudwatchLogAnomalyDetectorConfig
  */
  public constructor(scope: Construct, id: string, config: CloudwatchLogAnomalyDetectorConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudwatch_log_anomaly_detector',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.99.0',
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
    this._anomalyVisibilityTime = config.anomalyVisibilityTime;
    this._detectorName = config.detectorName;
    this._enabled = config.enabled;
    this._evaluationFrequency = config.evaluationFrequency;
    this._filterPattern = config.filterPattern;
    this._kmsKeyId = config.kmsKeyId;
    this._logGroupArnList = config.logGroupArnList;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // anomaly_visibility_time - computed: true, optional: true, required: false
  private _anomalyVisibilityTime?: number; 
  public get anomalyVisibilityTime() {
    return this.getNumberAttribute('anomaly_visibility_time');
  }
  public set anomalyVisibilityTime(value: number) {
    this._anomalyVisibilityTime = value;
  }
  public resetAnomalyVisibilityTime() {
    this._anomalyVisibilityTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anomalyVisibilityTimeInput() {
    return this._anomalyVisibilityTime;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // detector_name - computed: false, optional: true, required: false
  private _detectorName?: string; 
  public get detectorName() {
    return this.getStringAttribute('detector_name');
  }
  public set detectorName(value: string) {
    this._detectorName = value;
  }
  public resetDetectorName() {
    this._detectorName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectorNameInput() {
    return this._detectorName;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // evaluation_frequency - computed: false, optional: true, required: false
  private _evaluationFrequency?: string; 
  public get evaluationFrequency() {
    return this.getStringAttribute('evaluation_frequency');
  }
  public set evaluationFrequency(value: string) {
    this._evaluationFrequency = value;
  }
  public resetEvaluationFrequency() {
    this._evaluationFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationFrequencyInput() {
    return this._evaluationFrequency;
  }

  // filter_pattern - computed: false, optional: true, required: false
  private _filterPattern?: string; 
  public get filterPattern() {
    return this.getStringAttribute('filter_pattern');
  }
  public set filterPattern(value: string) {
    this._filterPattern = value;
  }
  public resetFilterPattern() {
    this._filterPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterPatternInput() {
    return this._filterPattern;
  }

  // kms_key_id - computed: false, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // log_group_arn_list - computed: false, optional: false, required: true
  private _logGroupArnList?: string[]; 
  public get logGroupArnList() {
    return this.getListAttribute('log_group_arn_list');
  }
  public set logGroupArnList(value: string[]) {
    this._logGroupArnList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupArnListInput() {
    return this._logGroupArnList;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      anomaly_visibility_time: cdktf.numberToTerraform(this._anomalyVisibilityTime),
      detector_name: cdktf.stringToTerraform(this._detectorName),
      enabled: cdktf.booleanToTerraform(this._enabled),
      evaluation_frequency: cdktf.stringToTerraform(this._evaluationFrequency),
      filter_pattern: cdktf.stringToTerraform(this._filterPattern),
      kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
      log_group_arn_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._logGroupArnList),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      anomaly_visibility_time: {
        value: cdktf.numberToHclTerraform(this._anomalyVisibilityTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      detector_name: {
        value: cdktf.stringToHclTerraform(this._detectorName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      evaluation_frequency: {
        value: cdktf.stringToHclTerraform(this._evaluationFrequency),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_pattern: {
        value: cdktf.stringToHclTerraform(this._filterPattern),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_key_id: {
        value: cdktf.stringToHclTerraform(this._kmsKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_group_arn_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._logGroupArnList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
