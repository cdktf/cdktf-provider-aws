// https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/bedrock_custom_models
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsBedrockCustomModelsConfig extends cdktf.TerraformMetaArguments {
}
export interface DataAwsBedrockCustomModelsModelSummaries {
}

export function dataAwsBedrockCustomModelsModelSummariesToTerraform(struct?: DataAwsBedrockCustomModelsModelSummaries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsBedrockCustomModelsModelSummariesToHclTerraform(struct?: DataAwsBedrockCustomModelsModelSummaries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsBedrockCustomModelsModelSummariesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsBedrockCustomModelsModelSummaries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsBedrockCustomModelsModelSummaries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // model_arn - computed: true, optional: false, required: false
  public get modelArn() {
    return this.getStringAttribute('model_arn');
  }

  // model_name - computed: true, optional: false, required: false
  public get modelName() {
    return this.getStringAttribute('model_name');
  }
}

export class DataAwsBedrockCustomModelsModelSummariesList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsBedrockCustomModelsModelSummariesOutputReference {
    return new DataAwsBedrockCustomModelsModelSummariesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/bedrock_custom_models aws_bedrock_custom_models}
*/
export class DataAwsBedrockCustomModels extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_bedrock_custom_models";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsBedrockCustomModels resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsBedrockCustomModels to import
  * @param importFromId The id of the existing DataAwsBedrockCustomModels that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/bedrock_custom_models#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsBedrockCustomModels to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_bedrock_custom_models", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/bedrock_custom_models aws_bedrock_custom_models} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsBedrockCustomModelsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsBedrockCustomModelsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_bedrock_custom_models',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.86.1',
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // model_summaries - computed: true, optional: false, required: false
  private _modelSummaries = new DataAwsBedrockCustomModelsModelSummariesList(this, "model_summaries", false);
  public get modelSummaries() {
    return this._modelSummaries;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
