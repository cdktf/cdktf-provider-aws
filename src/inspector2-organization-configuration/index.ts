// https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/inspector2_organization_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Inspector2OrganizationConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/inspector2_organization_configuration#id Inspector2OrganizationConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * auto_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/inspector2_organization_configuration#auto_enable Inspector2OrganizationConfiguration#auto_enable}
  */
  readonly autoEnable: Inspector2OrganizationConfigurationAutoEnable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/inspector2_organization_configuration#timeouts Inspector2OrganizationConfiguration#timeouts}
  */
  readonly timeouts?: Inspector2OrganizationConfigurationTimeouts;
}
export interface Inspector2OrganizationConfigurationAutoEnable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/inspector2_organization_configuration#ec2 Inspector2OrganizationConfiguration#ec2}
  */
  readonly ec2: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/inspector2_organization_configuration#ecr Inspector2OrganizationConfiguration#ecr}
  */
  readonly ecr: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/inspector2_organization_configuration#lambda Inspector2OrganizationConfiguration#lambda}
  */
  readonly lambda?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/inspector2_organization_configuration#lambda_code Inspector2OrganizationConfiguration#lambda_code}
  */
  readonly lambdaCode?: boolean | cdktf.IResolvable;
}

export function inspector2OrganizationConfigurationAutoEnableToTerraform(struct?: Inspector2OrganizationConfigurationAutoEnableOutputReference | Inspector2OrganizationConfigurationAutoEnable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ec2: cdktf.booleanToTerraform(struct!.ec2),
    ecr: cdktf.booleanToTerraform(struct!.ecr),
    lambda: cdktf.booleanToTerraform(struct!.lambda),
    lambda_code: cdktf.booleanToTerraform(struct!.lambdaCode),
  }
}


export function inspector2OrganizationConfigurationAutoEnableToHclTerraform(struct?: Inspector2OrganizationConfigurationAutoEnableOutputReference | Inspector2OrganizationConfigurationAutoEnable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ec2: {
      value: cdktf.booleanToHclTerraform(struct!.ec2),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ecr: {
      value: cdktf.booleanToHclTerraform(struct!.ecr),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    lambda: {
      value: cdktf.booleanToHclTerraform(struct!.lambda),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    lambda_code: {
      value: cdktf.booleanToHclTerraform(struct!.lambdaCode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Inspector2OrganizationConfigurationAutoEnableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Inspector2OrganizationConfigurationAutoEnable | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ec2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ec2 = this._ec2;
    }
    if (this._ecr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ecr = this._ecr;
    }
    if (this._lambda !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambda = this._lambda;
    }
    if (this._lambdaCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaCode = this._lambdaCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Inspector2OrganizationConfigurationAutoEnable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ec2 = undefined;
      this._ecr = undefined;
      this._lambda = undefined;
      this._lambdaCode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ec2 = value.ec2;
      this._ecr = value.ecr;
      this._lambda = value.lambda;
      this._lambdaCode = value.lambdaCode;
    }
  }

  // ec2 - computed: false, optional: false, required: true
  private _ec2?: boolean | cdktf.IResolvable; 
  public get ec2() {
    return this.getBooleanAttribute('ec2');
  }
  public set ec2(value: boolean | cdktf.IResolvable) {
    this._ec2 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ec2Input() {
    return this._ec2;
  }

  // ecr - computed: false, optional: false, required: true
  private _ecr?: boolean | cdktf.IResolvable; 
  public get ecr() {
    return this.getBooleanAttribute('ecr');
  }
  public set ecr(value: boolean | cdktf.IResolvable) {
    this._ecr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ecrInput() {
    return this._ecr;
  }

  // lambda - computed: false, optional: true, required: false
  private _lambda?: boolean | cdktf.IResolvable; 
  public get lambda() {
    return this.getBooleanAttribute('lambda');
  }
  public set lambda(value: boolean | cdktf.IResolvable) {
    this._lambda = value;
  }
  public resetLambda() {
    this._lambda = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaInput() {
    return this._lambda;
  }

  // lambda_code - computed: false, optional: true, required: false
  private _lambdaCode?: boolean | cdktf.IResolvable; 
  public get lambdaCode() {
    return this.getBooleanAttribute('lambda_code');
  }
  public set lambdaCode(value: boolean | cdktf.IResolvable) {
    this._lambdaCode = value;
  }
  public resetLambdaCode() {
    this._lambdaCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaCodeInput() {
    return this._lambdaCode;
  }
}
export interface Inspector2OrganizationConfigurationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/inspector2_organization_configuration#create Inspector2OrganizationConfiguration#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/inspector2_organization_configuration#delete Inspector2OrganizationConfiguration#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/inspector2_organization_configuration#update Inspector2OrganizationConfiguration#update}
  */
  readonly update?: string;
}

export function inspector2OrganizationConfigurationTimeoutsToTerraform(struct?: Inspector2OrganizationConfigurationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function inspector2OrganizationConfigurationTimeoutsToHclTerraform(struct?: Inspector2OrganizationConfigurationTimeouts | cdktf.IResolvable): any {
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
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Inspector2OrganizationConfigurationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Inspector2OrganizationConfigurationTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Inspector2OrganizationConfigurationTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
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

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/inspector2_organization_configuration aws_inspector2_organization_configuration}
*/
export class Inspector2OrganizationConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_inspector2_organization_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Inspector2OrganizationConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Inspector2OrganizationConfiguration to import
  * @param importFromId The id of the existing Inspector2OrganizationConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/inspector2_organization_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Inspector2OrganizationConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_inspector2_organization_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/inspector2_organization_configuration aws_inspector2_organization_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Inspector2OrganizationConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: Inspector2OrganizationConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_inspector2_organization_configuration',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.39.0',
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
    this._id = config.id;
    this._autoEnable.internalValue = config.autoEnable;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // max_account_limit_reached - computed: true, optional: false, required: false
  public get maxAccountLimitReached() {
    return this.getBooleanAttribute('max_account_limit_reached');
  }

  // auto_enable - computed: false, optional: false, required: true
  private _autoEnable = new Inspector2OrganizationConfigurationAutoEnableOutputReference(this, "auto_enable");
  public get autoEnable() {
    return this._autoEnable;
  }
  public putAutoEnable(value: Inspector2OrganizationConfigurationAutoEnable) {
    this._autoEnable.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoEnableInput() {
    return this._autoEnable.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new Inspector2OrganizationConfigurationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: Inspector2OrganizationConfigurationTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      auto_enable: inspector2OrganizationConfigurationAutoEnableToTerraform(this._autoEnable.internalValue),
      timeouts: inspector2OrganizationConfigurationTimeoutsToTerraform(this._timeouts.internalValue),
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
      auto_enable: {
        value: inspector2OrganizationConfigurationAutoEnableToHclTerraform(this._autoEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Inspector2OrganizationConfigurationAutoEnableList",
      },
      timeouts: {
        value: inspector2OrganizationConfigurationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "Inspector2OrganizationConfigurationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
