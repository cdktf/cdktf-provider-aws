// https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/data-sources/bedrock_foundation_model
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsBedrockFoundationModelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/data-sources/bedrock_foundation_model#model_id DataAwsBedrockFoundationModel#model_id}
  */
  readonly modelId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/data-sources/bedrock_foundation_model aws_bedrock_foundation_model}
*/
export class DataAwsBedrockFoundationModel extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_bedrock_foundation_model";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsBedrockFoundationModel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsBedrockFoundationModel to import
  * @param importFromId The id of the existing DataAwsBedrockFoundationModel that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/data-sources/bedrock_foundation_model#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsBedrockFoundationModel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_bedrock_foundation_model", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/data-sources/bedrock_foundation_model aws_bedrock_foundation_model} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsBedrockFoundationModelConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsBedrockFoundationModelConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_bedrock_foundation_model',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.75.0',
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
    this._modelId = config.modelId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // customizations_supported - computed: true, optional: false, required: false
  public get customizationsSupported() {
    return cdktf.Fn.tolist(this.getListAttribute('customizations_supported'));
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inference_types_supported - computed: true, optional: false, required: false
  public get inferenceTypesSupported() {
    return cdktf.Fn.tolist(this.getListAttribute('inference_types_supported'));
  }

  // input_modalities - computed: true, optional: false, required: false
  public get inputModalities() {
    return cdktf.Fn.tolist(this.getListAttribute('input_modalities'));
  }

  // model_arn - computed: true, optional: false, required: false
  public get modelArn() {
    return this.getStringAttribute('model_arn');
  }

  // model_id - computed: false, optional: false, required: true
  private _modelId?: string; 
  public get modelId() {
    return this.getStringAttribute('model_id');
  }
  public set modelId(value: string) {
    this._modelId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelIdInput() {
    return this._modelId;
  }

  // model_name - computed: true, optional: false, required: false
  public get modelName() {
    return this.getStringAttribute('model_name');
  }

  // output_modalities - computed: true, optional: false, required: false
  public get outputModalities() {
    return cdktf.Fn.tolist(this.getListAttribute('output_modalities'));
  }

  // provider_name - computed: true, optional: false, required: false
  public get providerName() {
    return this.getStringAttribute('provider_name');
  }

  // response_streaming_supported - computed: true, optional: false, required: false
  public get responseStreamingSupported() {
    return this.getBooleanAttribute('response_streaming_supported');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      model_id: cdktf.stringToTerraform(this._modelId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      model_id: {
        value: cdktf.stringToHclTerraform(this._modelId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
