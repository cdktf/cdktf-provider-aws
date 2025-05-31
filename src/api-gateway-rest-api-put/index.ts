// https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/api_gateway_rest_api_put
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiGatewayRestApiPutConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/api_gateway_rest_api_put#body ApiGatewayRestApiPut#body}
  */
  readonly body: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/api_gateway_rest_api_put#fail_on_warnings ApiGatewayRestApiPut#fail_on_warnings}
  */
  readonly failOnWarnings?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/api_gateway_rest_api_put#parameters ApiGatewayRestApiPut#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/api_gateway_rest_api_put#rest_api_id ApiGatewayRestApiPut#rest_api_id}
  */
  readonly restApiId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/api_gateway_rest_api_put#triggers ApiGatewayRestApiPut#triggers}
  */
  readonly triggers?: { [key: string]: string };
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/api_gateway_rest_api_put#timeouts ApiGatewayRestApiPut#timeouts}
  */
  readonly timeouts?: ApiGatewayRestApiPutTimeouts;
}
export interface ApiGatewayRestApiPutTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/api_gateway_rest_api_put#create ApiGatewayRestApiPut#create}
  */
  readonly create?: string;
}

export function apiGatewayRestApiPutTimeoutsToTerraform(struct?: ApiGatewayRestApiPutTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function apiGatewayRestApiPutTimeoutsToHclTerraform(struct?: ApiGatewayRestApiPutTimeouts | cdktf.IResolvable): any {
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

export class ApiGatewayRestApiPutTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApiGatewayRestApiPutTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApiGatewayRestApiPutTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/api_gateway_rest_api_put aws_api_gateway_rest_api_put}
*/
export class ApiGatewayRestApiPut extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_api_gateway_rest_api_put";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiGatewayRestApiPut resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiGatewayRestApiPut to import
  * @param importFromId The id of the existing ApiGatewayRestApiPut that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/api_gateway_rest_api_put#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiGatewayRestApiPut to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_api_gateway_rest_api_put", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/api_gateway_rest_api_put aws_api_gateway_rest_api_put} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiGatewayRestApiPutConfig
  */
  public constructor(scope: Construct, id: string, config: ApiGatewayRestApiPutConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_api_gateway_rest_api_put',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.99.1',
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
    this._body = config.body;
    this._failOnWarnings = config.failOnWarnings;
    this._parameters = config.parameters;
    this._restApiId = config.restApiId;
    this._triggers = config.triggers;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // body - computed: false, optional: false, required: true
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // fail_on_warnings - computed: true, optional: true, required: false
  private _failOnWarnings?: boolean | cdktf.IResolvable; 
  public get failOnWarnings() {
    return this.getBooleanAttribute('fail_on_warnings');
  }
  public set failOnWarnings(value: boolean | cdktf.IResolvable) {
    this._failOnWarnings = value;
  }
  public resetFailOnWarnings() {
    this._failOnWarnings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failOnWarningsInput() {
    return this._failOnWarnings;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string }; 
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // rest_api_id - computed: false, optional: false, required: true
  private _restApiId?: string; 
  public get restApiId() {
    return this.getStringAttribute('rest_api_id');
  }
  public set restApiId(value: string) {
    this._restApiId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get restApiIdInput() {
    return this._restApiId;
  }

  // triggers - computed: false, optional: true, required: false
  private _triggers?: { [key: string]: string }; 
  public get triggers() {
    return this.getStringMapAttribute('triggers');
  }
  public set triggers(value: { [key: string]: string }) {
    this._triggers = value;
  }
  public resetTriggers() {
    this._triggers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggersInput() {
    return this._triggers;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ApiGatewayRestApiPutTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ApiGatewayRestApiPutTimeouts) {
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
      body: cdktf.stringToTerraform(this._body),
      fail_on_warnings: cdktf.booleanToTerraform(this._failOnWarnings),
      parameters: cdktf.hashMapper(cdktf.stringToTerraform)(this._parameters),
      rest_api_id: cdktf.stringToTerraform(this._restApiId),
      triggers: cdktf.hashMapper(cdktf.stringToTerraform)(this._triggers),
      timeouts: apiGatewayRestApiPutTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      body: {
        value: cdktf.stringToHclTerraform(this._body),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fail_on_warnings: {
        value: cdktf.booleanToHclTerraform(this._failOnWarnings),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      parameters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._parameters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      rest_api_id: {
        value: cdktf.stringToHclTerraform(this._restApiId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      triggers: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._triggers),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      timeouts: {
        value: apiGatewayRestApiPutTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApiGatewayRestApiPutTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
