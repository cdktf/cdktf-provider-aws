/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/cloudformation_type
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudformationTypeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/cloudformation_type#execution_role_arn CloudformationType#execution_role_arn}
  */
  readonly executionRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/cloudformation_type#id CloudformationType#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/cloudformation_type#region CloudformationType#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/cloudformation_type#schema_handler_package CloudformationType#schema_handler_package}
  */
  readonly schemaHandlerPackage: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/cloudformation_type#type CloudformationType#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/cloudformation_type#type_name CloudformationType#type_name}
  */
  readonly typeName: string;
  /**
  * logging_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/cloudformation_type#logging_config CloudformationType#logging_config}
  */
  readonly loggingConfig?: CloudformationTypeLoggingConfig;
}
export interface CloudformationTypeLoggingConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/cloudformation_type#log_group_name CloudformationType#log_group_name}
  */
  readonly logGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/cloudformation_type#log_role_arn CloudformationType#log_role_arn}
  */
  readonly logRoleArn: string;
}

export function cloudformationTypeLoggingConfigToTerraform(struct?: CloudformationTypeLoggingConfigOutputReference | CloudformationTypeLoggingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    log_role_arn: cdktf.stringToTerraform(struct!.logRoleArn),
  }
}


export function cloudformationTypeLoggingConfigToHclTerraform(struct?: CloudformationTypeLoggingConfigOutputReference | CloudformationTypeLoggingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_group_name: {
      value: cdktf.stringToHclTerraform(struct!.logGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_role_arn: {
      value: cdktf.stringToHclTerraform(struct!.logRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudformationTypeLoggingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudformationTypeLoggingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupName = this._logGroupName;
    }
    if (this._logRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.logRoleArn = this._logRoleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudformationTypeLoggingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logGroupName = undefined;
      this._logRoleArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logGroupName = value.logGroupName;
      this._logRoleArn = value.logRoleArn;
    }
  }

  // log_group_name - computed: false, optional: false, required: true
  private _logGroupName?: string; 
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }
  public set logGroupName(value: string) {
    this._logGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNameInput() {
    return this._logGroupName;
  }

  // log_role_arn - computed: false, optional: false, required: true
  private _logRoleArn?: string; 
  public get logRoleArn() {
    return this.getStringAttribute('log_role_arn');
  }
  public set logRoleArn(value: string) {
    this._logRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logRoleArnInput() {
    return this._logRoleArn;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/cloudformation_type aws_cloudformation_type}
*/
export class CloudformationType extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_cloudformation_type";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudformationType resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudformationType to import
  * @param importFromId The id of the existing CloudformationType that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/cloudformation_type#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudformationType to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_cloudformation_type", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/cloudformation_type aws_cloudformation_type} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudformationTypeConfig
  */
  public constructor(scope: Construct, id: string, config: CloudformationTypeConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudformation_type',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.6.0',
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
    this._executionRoleArn = config.executionRoleArn;
    this._id = config.id;
    this._region = config.region;
    this._schemaHandlerPackage = config.schemaHandlerPackage;
    this._type = config.type;
    this._typeName = config.typeName;
    this._loggingConfig.internalValue = config.loggingConfig;
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
  public set executionRoleArn(value: string) {
    this._executionRoleArn = value;
  }
  public resetExecutionRoleArn() {
    this._executionRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRoleArnInput() {
    return this._executionRoleArn;
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

  // is_default_version - computed: true, optional: false, required: false
  public get isDefaultVersion() {
    return this.getBooleanAttribute('is_default_version');
  }

  // provisioning_type - computed: true, optional: false, required: false
  public get provisioningType() {
    return this.getStringAttribute('provisioning_type');
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

  // schema - computed: true, optional: false, required: false
  public get schema() {
    return this.getStringAttribute('schema');
  }

  // schema_handler_package - computed: false, optional: false, required: true
  private _schemaHandlerPackage?: string; 
  public get schemaHandlerPackage() {
    return this.getStringAttribute('schema_handler_package');
  }
  public set schemaHandlerPackage(value: string) {
    this._schemaHandlerPackage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaHandlerPackageInput() {
    return this._schemaHandlerPackage;
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
    return this._type;
  }

  // type_arn - computed: true, optional: false, required: false
  public get typeArn() {
    return this.getStringAttribute('type_arn');
  }

  // type_name - computed: false, optional: false, required: true
  private _typeName?: string; 
  public get typeName() {
    return this.getStringAttribute('type_name');
  }
  public set typeName(value: string) {
    this._typeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeNameInput() {
    return this._typeName;
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
  private _loggingConfig = new CloudformationTypeLoggingConfigOutputReference(this, "logging_config");
  public get loggingConfig() {
    return this._loggingConfig;
  }
  public putLoggingConfig(value: CloudformationTypeLoggingConfig) {
    this._loggingConfig.internalValue = value;
  }
  public resetLoggingConfig() {
    this._loggingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingConfigInput() {
    return this._loggingConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      execution_role_arn: cdktf.stringToTerraform(this._executionRoleArn),
      id: cdktf.stringToTerraform(this._id),
      region: cdktf.stringToTerraform(this._region),
      schema_handler_package: cdktf.stringToTerraform(this._schemaHandlerPackage),
      type: cdktf.stringToTerraform(this._type),
      type_name: cdktf.stringToTerraform(this._typeName),
      logging_config: cloudformationTypeLoggingConfigToTerraform(this._loggingConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      execution_role_arn: {
        value: cdktf.stringToHclTerraform(this._executionRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      schema_handler_package: {
        value: cdktf.stringToHclTerraform(this._schemaHandlerPackage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type_name: {
        value: cdktf.stringToHclTerraform(this._typeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logging_config: {
        value: cloudformationTypeLoggingConfigToHclTerraform(this._loggingConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudformationTypeLoggingConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
