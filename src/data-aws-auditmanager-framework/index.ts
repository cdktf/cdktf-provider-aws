// https://www.terraform.io/docs/providers/aws/d/auditmanager_framework
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsAuditmanagerFrameworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/auditmanager_framework#framework_type DataAwsAuditmanagerFramework#framework_type}
  */
  readonly frameworkType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/auditmanager_framework#name DataAwsAuditmanagerFramework#name}
  */
  readonly name: string;
  /**
  * control_sets block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/auditmanager_framework#control_sets DataAwsAuditmanagerFramework#control_sets}
  */
  readonly controlSets?: DataAwsAuditmanagerFrameworkControlSets[] | cdktf.IResolvable;
}
export interface DataAwsAuditmanagerFrameworkControlSetsControls {
}

export function dataAwsAuditmanagerFrameworkControlSetsControlsToTerraform(struct?: DataAwsAuditmanagerFrameworkControlSetsControls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsAuditmanagerFrameworkControlSetsControls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsAuditmanagerFrameworkControlSetsControls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export class DataAwsAuditmanagerFrameworkControlSetsControlsList extends cdktf.ComplexList {
  public internalValue? : DataAwsAuditmanagerFrameworkControlSetsControls[] | cdktf.IResolvable

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
  public get(index: number): DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference {
    return new DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsAuditmanagerFrameworkControlSets {
  /**
  * controls block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/auditmanager_framework#controls DataAwsAuditmanagerFramework#controls}
  */
  readonly controls?: DataAwsAuditmanagerFrameworkControlSetsControls[] | cdktf.IResolvable;
}

export function dataAwsAuditmanagerFrameworkControlSetsToTerraform(struct?: DataAwsAuditmanagerFrameworkControlSets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    controls: cdktf.listMapper(dataAwsAuditmanagerFrameworkControlSetsControlsToTerraform, true)(struct!.controls),
  }
}

export class DataAwsAuditmanagerFrameworkControlSetsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsAuditmanagerFrameworkControlSets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._controls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.controls = this._controls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsAuditmanagerFrameworkControlSets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._controls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._controls.internalValue = value.controls;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // controls - computed: false, optional: true, required: false
  private _controls = new DataAwsAuditmanagerFrameworkControlSetsControlsList(this, "controls", true);
  public get controls() {
    return this._controls;
  }
  public putControls(value: DataAwsAuditmanagerFrameworkControlSetsControls[] | cdktf.IResolvable) {
    this._controls.internalValue = value;
  }
  public resetControls() {
    this._controls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlsInput() {
    return this._controls.internalValue;
  }
}

export class DataAwsAuditmanagerFrameworkControlSetsList extends cdktf.ComplexList {
  public internalValue? : DataAwsAuditmanagerFrameworkControlSets[] | cdktf.IResolvable

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
  public get(index: number): DataAwsAuditmanagerFrameworkControlSetsOutputReference {
    return new DataAwsAuditmanagerFrameworkControlSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/auditmanager_framework aws_auditmanager_framework}
*/
export class DataAwsAuditmanagerFramework extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_auditmanager_framework";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/auditmanager_framework aws_auditmanager_framework} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsAuditmanagerFrameworkConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsAuditmanagerFrameworkConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_auditmanager_framework',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.58.0',
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
    this._frameworkType = config.frameworkType;
    this._name = config.name;
    this._controlSets.internalValue = config.controlSets;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // compliance_type - computed: true, optional: false, required: false
  public get complianceType() {
    return this.getStringAttribute('compliance_type');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // framework_type - computed: false, optional: false, required: true
  private _frameworkType?: string; 
  public get frameworkType() {
    return this.getStringAttribute('framework_type');
  }
  public set frameworkType(value: string) {
    this._frameworkType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frameworkTypeInput() {
    return this._frameworkType;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // control_sets - computed: false, optional: true, required: false
  private _controlSets = new DataAwsAuditmanagerFrameworkControlSetsList(this, "control_sets", true);
  public get controlSets() {
    return this._controlSets;
  }
  public putControlSets(value: DataAwsAuditmanagerFrameworkControlSets[] | cdktf.IResolvable) {
    this._controlSets.internalValue = value;
  }
  public resetControlSets() {
    this._controlSets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlSetsInput() {
    return this._controlSets.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      framework_type: cdktf.stringToTerraform(this._frameworkType),
      name: cdktf.stringToTerraform(this._name),
      control_sets: cdktf.listMapper(dataAwsAuditmanagerFrameworkControlSetsToTerraform, true)(this._controlSets.internalValue),
    };
  }
}
