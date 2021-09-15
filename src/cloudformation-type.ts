// https://www.terraform.io/docs/providers/aws/r/cloudformation_type.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudformationTypeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_type.html#execution_role_arn CloudformationType#execution_role_arn}
  */
  readonly executionRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_type.html#schema_handler_package CloudformationType#schema_handler_package}
  */
  readonly schemaHandlerPackage: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_type.html#type CloudformationType#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_type.html#type_name CloudformationType#type_name}
  */
  readonly typeName: string;
  /**
  * logging_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_type.html#logging_config CloudformationType#logging_config}
  */
  readonly loggingConfig?: CloudformationTypeLoggingConfig[];
}
export interface CloudformationTypeLoggingConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_type.html#log_group_name CloudformationType#log_group_name}
  */
  readonly logGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_type.html#log_role_arn CloudformationType#log_role_arn}
  */
  readonly logRoleArn: string;
}

function cloudformationTypeLoggingConfigToTerraform(struct?: CloudformationTypeLoggingConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    log_role_arn: cdktf.stringToTerraform(struct!.logRoleArn),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_type.html aws_cloudformation_type}
*/
export class CloudformationType extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_cloudformation_type";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_type.html aws_cloudformation_type} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudformationTypeConfig
  */
  public constructor(scope: Construct, id: string, config: CloudformationTypeConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudformation_type',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._executionRoleArn = config.executionRoleArn;
    this._schemaHandlerPackage = config.schemaHandlerPackage;
    this._type = config.type;
    this._typeName = config.typeName;
    this._loggingConfig = config.loggingConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // default_version_id - computed: true, optional: false, required: false
  public get defaultVersionId() {
    return this.getStringAttribute('default_version_id');
  }

  // deprecated_status - computed: true, optional: false, required: false
  public get deprecatedStatus() {
    return this.getStringAttribute('deprecated_status');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // documentation_url - computed: true, optional: false, required: false
  public get documentationUrl() {
    return this.getStringAttribute('documentation_url');
  }

  // execution_role_arn - computed: false, optional: true, required: false
  private _executionRoleArn?: string;
  public get executionRoleArn() {
    return this.getStringAttribute('execution_role_arn');
  }
  public set executionRoleArn(value: string ) {
    this._executionRoleArn = value;
  }
  public resetExecutionRoleArn() {
    this._executionRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRoleArnInput() {
    return this._executionRoleArn
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_default_version - computed: true, optional: false, required: false
  public get isDefaultVersion() {
    return this.getBooleanAttribute('is_default_version');
  }

  // provisioning_type - computed: true, optional: false, required: false
  public get provisioningType() {
    return this.getStringAttribute('provisioning_type');
  }

  // schema - computed: true, optional: false, required: false
  public get schema() {
    return this.getStringAttribute('schema');
  }

  // schema_handler_package - computed: false, optional: false, required: true
  private _schemaHandlerPackage: string;
  public get schemaHandlerPackage() {
    return this.getStringAttribute('schema_handler_package');
  }
  public set schemaHandlerPackage(value: string) {
    this._schemaHandlerPackage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaHandlerPackageInput() {
    return this._schemaHandlerPackage
  }

  // source_url - computed: true, optional: false, required: false
  public get sourceUrl() {
    return this.getStringAttribute('source_url');
  }

  // type - computed: true, optional: true, required: false
  private _type?: string;
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }

  // type_arn - computed: true, optional: false, required: false
  public get typeArn() {
    return this.getStringAttribute('type_arn');
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

  // version_id - computed: true, optional: false, required: false
  public get versionId() {
    return this.getStringAttribute('version_id');
  }

  // visibility - computed: true, optional: false, required: false
  public get visibility() {
    return this.getStringAttribute('visibility');
  }

  // logging_config - computed: false, optional: true, required: false
  private _loggingConfig?: CloudformationTypeLoggingConfig[];
  public get loggingConfig() {
    return this.interpolationForAttribute('logging_config') as any;
  }
  public set loggingConfig(value: CloudformationTypeLoggingConfig[] ) {
    this._loggingConfig = value;
  }
  public resetLoggingConfig() {
    this._loggingConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingConfigInput() {
    return this._loggingConfig
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      execution_role_arn: cdktf.stringToTerraform(this._executionRoleArn),
      schema_handler_package: cdktf.stringToTerraform(this._schemaHandlerPackage),
      type: cdktf.stringToTerraform(this._type),
      type_name: cdktf.stringToTerraform(this._typeName),
      logging_config: cdktf.listMapper(cloudformationTypeLoggingConfigToTerraform)(this._loggingConfig),
    };
  }
}
