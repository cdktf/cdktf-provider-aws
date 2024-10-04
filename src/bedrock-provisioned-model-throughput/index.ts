/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/bedrock_provisioned_model_throughput
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BedrockProvisionedModelThroughputConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/bedrock_provisioned_model_throughput#commitment_duration BedrockProvisionedModelThroughput#commitment_duration}
  */
  readonly commitmentDuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/bedrock_provisioned_model_throughput#model_arn BedrockProvisionedModelThroughput#model_arn}
  */
  readonly modelArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/bedrock_provisioned_model_throughput#model_units BedrockProvisionedModelThroughput#model_units}
  */
  readonly modelUnits: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/bedrock_provisioned_model_throughput#provisioned_model_name BedrockProvisionedModelThroughput#provisioned_model_name}
  */
  readonly provisionedModelName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/bedrock_provisioned_model_throughput#tags BedrockProvisionedModelThroughput#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/bedrock_provisioned_model_throughput#timeouts BedrockProvisionedModelThroughput#timeouts}
  */
  readonly timeouts?: BedrockProvisionedModelThroughputTimeouts;
}
export interface BedrockProvisionedModelThroughputTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/bedrock_provisioned_model_throughput#create BedrockProvisionedModelThroughput#create}
  */
  readonly create?: string;
}

export function bedrockProvisionedModelThroughputTimeoutsToTerraform(struct?: BedrockProvisionedModelThroughputTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function bedrockProvisionedModelThroughputTimeoutsToHclTerraform(struct?: BedrockProvisionedModelThroughputTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockProvisionedModelThroughputTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockProvisionedModelThroughputTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockProvisionedModelThroughputTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/bedrock_provisioned_model_throughput aws_bedrock_provisioned_model_throughput}
*/
export class BedrockProvisionedModelThroughput extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_bedrock_provisioned_model_throughput";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BedrockProvisionedModelThroughput resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BedrockProvisionedModelThroughput to import
  * @param importFromId The id of the existing BedrockProvisionedModelThroughput that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/bedrock_provisioned_model_throughput#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BedrockProvisionedModelThroughput to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_bedrock_provisioned_model_throughput", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/bedrock_provisioned_model_throughput aws_bedrock_provisioned_model_throughput} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BedrockProvisionedModelThroughputConfig
  */
  public constructor(scope: Construct, id: string, config: BedrockProvisionedModelThroughputConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_bedrock_provisioned_model_throughput',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.70.0',
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
    this._commitmentDuration = config.commitmentDuration;
    this._modelArn = config.modelArn;
    this._modelUnits = config.modelUnits;
    this._provisionedModelName = config.provisionedModelName;
    this._tags = config.tags;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // commitment_duration - computed: false, optional: true, required: false
  private _commitmentDuration?: string; 
  public get commitmentDuration() {
    return this.getStringAttribute('commitment_duration');
  }
  public set commitmentDuration(value: string) {
    this._commitmentDuration = value;
  }
  public resetCommitmentDuration() {
    this._commitmentDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commitmentDurationInput() {
    return this._commitmentDuration;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // model_arn - computed: false, optional: false, required: true
  private _modelArn?: string; 
  public get modelArn() {
    return this.getStringAttribute('model_arn');
  }
  public set modelArn(value: string) {
    this._modelArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelArnInput() {
    return this._modelArn;
  }

  // model_units - computed: false, optional: false, required: true
  private _modelUnits?: number; 
  public get modelUnits() {
    return this.getNumberAttribute('model_units');
  }
  public set modelUnits(value: number) {
    this._modelUnits = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelUnitsInput() {
    return this._modelUnits;
  }

  // provisioned_model_arn - computed: true, optional: false, required: false
  public get provisionedModelArn() {
    return this.getStringAttribute('provisioned_model_arn');
  }

  // provisioned_model_name - computed: false, optional: false, required: true
  private _provisionedModelName?: string; 
  public get provisionedModelName() {
    return this.getStringAttribute('provisioned_model_name');
  }
  public set provisionedModelName(value: string) {
    this._provisionedModelName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionedModelNameInput() {
    return this._provisionedModelName;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BedrockProvisionedModelThroughputTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BedrockProvisionedModelThroughputTimeouts) {
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
      commitment_duration: cdktf.stringToTerraform(this._commitmentDuration),
      model_arn: cdktf.stringToTerraform(this._modelArn),
      model_units: cdktf.numberToTerraform(this._modelUnits),
      provisioned_model_name: cdktf.stringToTerraform(this._provisionedModelName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      timeouts: bedrockProvisionedModelThroughputTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      commitment_duration: {
        value: cdktf.stringToHclTerraform(this._commitmentDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      model_arn: {
        value: cdktf.stringToHclTerraform(this._modelArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      model_units: {
        value: cdktf.numberToHclTerraform(this._modelUnits),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      provisioned_model_name: {
        value: cdktf.stringToHclTerraform(this._provisionedModelName),
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
      timeouts: {
        value: bedrockProvisionedModelThroughputTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BedrockProvisionedModelThroughputTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
