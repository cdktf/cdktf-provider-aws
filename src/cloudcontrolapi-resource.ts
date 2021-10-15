// https://www.terraform.io/docs/providers/aws/r/cloudcontrolapi_resource.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudcontrolapiResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudcontrolapi_resource.html#desired_state CloudcontrolapiResource#desired_state}
  */
  readonly desiredState: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudcontrolapi_resource.html#role_arn CloudcontrolapiResource#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudcontrolapi_resource.html#schema CloudcontrolapiResource#schema}
  */
  readonly schema?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudcontrolapi_resource.html#type_name CloudcontrolapiResource#type_name}
  */
  readonly typeName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudcontrolapi_resource.html#type_version_id CloudcontrolapiResource#type_version_id}
  */
  readonly typeVersionId?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudcontrolapi_resource.html#timeouts CloudcontrolapiResource#timeouts}
  */
  readonly timeouts?: CloudcontrolapiResourceTimeouts;
}
export interface CloudcontrolapiResourceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudcontrolapi_resource.html#create CloudcontrolapiResource#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudcontrolapi_resource.html#delete CloudcontrolapiResource#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudcontrolapi_resource.html#update CloudcontrolapiResource#update}
  */
  readonly update?: string;
}

function cloudcontrolapiResourceTimeoutsToTerraform(struct?: CloudcontrolapiResourceTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudcontrolapi_resource.html aws_cloudcontrolapi_resource}
*/
export class CloudcontrolapiResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_cloudcontrolapi_resource";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudcontrolapi_resource.html aws_cloudcontrolapi_resource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudcontrolapiResourceConfig
  */
  public constructor(scope: Construct, id: string, config: CloudcontrolapiResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudcontrolapi_resource',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._desiredState = config.desiredState;
    this._roleArn = config.roleArn;
    this._schema = config.schema;
    this._typeName = config.typeName;
    this._typeVersionId = config.typeVersionId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // desired_state - computed: false, optional: false, required: true
  private _desiredState: string;
  public get desiredState() {
    return this.getStringAttribute('desired_state');
  }
  public set desiredState(value: string) {
    this._desiredState = value;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredStateInput() {
    return this._desiredState
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // properties - computed: true, optional: false, required: false
  public get properties() {
    return this.getStringAttribute('properties');
  }

  // role_arn - computed: false, optional: true, required: false
  private _roleArn?: string;
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string ) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn
  }

  // schema - computed: true, optional: true, required: false
  private _schema?: string;
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  public resetSchema() {
    this._schema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema
  }

  // type_name - computed: false, optional: false, required: true
  private _typeName: string;
  public get typeName() {
    return this.getStringAttribute('type_name');
  }
  public set typeName(value: string) {
    this._typeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeNameInput() {
    return this._typeName
  }

  // type_version_id - computed: false, optional: true, required: false
  private _typeVersionId?: string;
  public get typeVersionId() {
    return this.getStringAttribute('type_version_id');
  }
  public set typeVersionId(value: string ) {
    this._typeVersionId = value;
  }
  public resetTypeVersionId() {
    this._typeVersionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeVersionIdInput() {
    return this._typeVersionId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CloudcontrolapiResourceTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: CloudcontrolapiResourceTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      desired_state: cdktf.stringToTerraform(this._desiredState),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      schema: cdktf.stringToTerraform(this._schema),
      type_name: cdktf.stringToTerraform(this._typeName),
      type_version_id: cdktf.stringToTerraform(this._typeVersionId),
      timeouts: cloudcontrolapiResourceTimeoutsToTerraform(this._timeouts),
    };
  }
}
