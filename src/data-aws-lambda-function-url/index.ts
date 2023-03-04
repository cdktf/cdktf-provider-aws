// https://www.terraform.io/docs/providers/aws/d/lambda_function_url
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsLambdaFunctionUrlConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_function_url#function_name DataAwsLambdaFunctionUrl#function_name}
  */
  readonly functionName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_function_url#id DataAwsLambdaFunctionUrl#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_function_url#qualifier DataAwsLambdaFunctionUrl#qualifier}
  */
  readonly qualifier?: string;
}
export interface DataAwsLambdaFunctionUrlCors {
}

export function dataAwsLambdaFunctionUrlCorsToTerraform(struct?: DataAwsLambdaFunctionUrlCors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAwsLambdaFunctionUrlCorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsLambdaFunctionUrlCors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsLambdaFunctionUrlCors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_credentials - computed: true, optional: false, required: false
  public get allowCredentials() {
    return this.getBooleanAttribute('allow_credentials');
  }

  // allow_headers - computed: true, optional: false, required: false
  public get allowHeaders() {
    return this.getListAttribute('allow_headers');
  }

  // allow_methods - computed: true, optional: false, required: false
  public get allowMethods() {
    return this.getListAttribute('allow_methods');
  }

  // allow_origins - computed: true, optional: false, required: false
  public get allowOrigins() {
    return this.getListAttribute('allow_origins');
  }

  // expose_headers - computed: true, optional: false, required: false
  public get exposeHeaders() {
    return this.getListAttribute('expose_headers');
  }

  // max_age - computed: true, optional: false, required: false
  public get maxAge() {
    return this.getNumberAttribute('max_age');
  }
}

export class DataAwsLambdaFunctionUrlCorsList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsLambdaFunctionUrlCorsOutputReference {
    return new DataAwsLambdaFunctionUrlCorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/lambda_function_url aws_lambda_function_url}
*/
export class DataAwsLambdaFunctionUrl extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_lambda_function_url";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/lambda_function_url aws_lambda_function_url} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsLambdaFunctionUrlConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsLambdaFunctionUrlConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_lambda_function_url',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.57.0',
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
    this._functionName = config.functionName;
    this._id = config.id;
    this._qualifier = config.qualifier;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authorization_type - computed: true, optional: false, required: false
  public get authorizationType() {
    return this.getStringAttribute('authorization_type');
  }

  // cors - computed: true, optional: false, required: false
  private _cors = new DataAwsLambdaFunctionUrlCorsList(this, "cors", false);
  public get cors() {
    return this._cors;
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // function_arn - computed: true, optional: false, required: false
  public get functionArn() {
    return this.getStringAttribute('function_arn');
  }

  // function_name - computed: false, optional: false, required: true
  private _functionName?: string; 
  public get functionName() {
    return this.getStringAttribute('function_name');
  }
  public set functionName(value: string) {
    this._functionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionNameInput() {
    return this._functionName;
  }

  // function_url - computed: true, optional: false, required: false
  public get functionUrl() {
    return this.getStringAttribute('function_url');
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

  // last_modified_time - computed: true, optional: false, required: false
  public get lastModifiedTime() {
    return this.getStringAttribute('last_modified_time');
  }

  // qualifier - computed: false, optional: true, required: false
  private _qualifier?: string; 
  public get qualifier() {
    return this.getStringAttribute('qualifier');
  }
  public set qualifier(value: string) {
    this._qualifier = value;
  }
  public resetQualifier() {
    this._qualifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qualifierInput() {
    return this._qualifier;
  }

  // url_id - computed: true, optional: false, required: false
  public get urlId() {
    return this.getStringAttribute('url_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      function_name: cdktf.stringToTerraform(this._functionName),
      id: cdktf.stringToTerraform(this._id),
      qualifier: cdktf.stringToTerraform(this._qualifier),
    };
  }
}
