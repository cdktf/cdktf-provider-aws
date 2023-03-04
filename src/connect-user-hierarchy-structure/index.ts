// https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConnectUserHierarchyStructureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure#id ConnectUserHierarchyStructure#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure#instance_id ConnectUserHierarchyStructure#instance_id}
  */
  readonly instanceId: string;
  /**
  * hierarchy_structure block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure#hierarchy_structure ConnectUserHierarchyStructure#hierarchy_structure}
  */
  readonly hierarchyStructure: ConnectUserHierarchyStructureHierarchyStructure;
}
export interface ConnectUserHierarchyStructureHierarchyStructureLevelFive {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure#name ConnectUserHierarchyStructure#name}
  */
  readonly name: string;
}

export function connectUserHierarchyStructureHierarchyStructureLevelFiveToTerraform(struct?: ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference | ConnectUserHierarchyStructureHierarchyStructureLevelFive): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectUserHierarchyStructureHierarchyStructureLevelFive | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectUserHierarchyStructureHierarchyStructureLevelFive | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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
}
export interface ConnectUserHierarchyStructureHierarchyStructureLevelFour {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure#name ConnectUserHierarchyStructure#name}
  */
  readonly name: string;
}

export function connectUserHierarchyStructureHierarchyStructureLevelFourToTerraform(struct?: ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference | ConnectUserHierarchyStructureHierarchyStructureLevelFour): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectUserHierarchyStructureHierarchyStructureLevelFour | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectUserHierarchyStructureHierarchyStructureLevelFour | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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
}
export interface ConnectUserHierarchyStructureHierarchyStructureLevelOne {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure#name ConnectUserHierarchyStructure#name}
  */
  readonly name: string;
}

export function connectUserHierarchyStructureHierarchyStructureLevelOneToTerraform(struct?: ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference | ConnectUserHierarchyStructureHierarchyStructureLevelOne): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectUserHierarchyStructureHierarchyStructureLevelOne | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectUserHierarchyStructureHierarchyStructureLevelOne | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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
}
export interface ConnectUserHierarchyStructureHierarchyStructureLevelThree {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure#name ConnectUserHierarchyStructure#name}
  */
  readonly name: string;
}

export function connectUserHierarchyStructureHierarchyStructureLevelThreeToTerraform(struct?: ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference | ConnectUserHierarchyStructureHierarchyStructureLevelThree): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectUserHierarchyStructureHierarchyStructureLevelThree | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectUserHierarchyStructureHierarchyStructureLevelThree | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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
}
export interface ConnectUserHierarchyStructureHierarchyStructureLevelTwo {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure#name ConnectUserHierarchyStructure#name}
  */
  readonly name: string;
}

export function connectUserHierarchyStructureHierarchyStructureLevelTwoToTerraform(struct?: ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference | ConnectUserHierarchyStructureHierarchyStructureLevelTwo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectUserHierarchyStructureHierarchyStructureLevelTwo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectUserHierarchyStructureHierarchyStructureLevelTwo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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
}
export interface ConnectUserHierarchyStructureHierarchyStructure {
  /**
  * level_five block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure#level_five ConnectUserHierarchyStructure#level_five}
  */
  readonly levelFive?: ConnectUserHierarchyStructureHierarchyStructureLevelFive;
  /**
  * level_four block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure#level_four ConnectUserHierarchyStructure#level_four}
  */
  readonly levelFour?: ConnectUserHierarchyStructureHierarchyStructureLevelFour;
  /**
  * level_one block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure#level_one ConnectUserHierarchyStructure#level_one}
  */
  readonly levelOne?: ConnectUserHierarchyStructureHierarchyStructureLevelOne;
  /**
  * level_three block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure#level_three ConnectUserHierarchyStructure#level_three}
  */
  readonly levelThree?: ConnectUserHierarchyStructureHierarchyStructureLevelThree;
  /**
  * level_two block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure#level_two ConnectUserHierarchyStructure#level_two}
  */
  readonly levelTwo?: ConnectUserHierarchyStructureHierarchyStructureLevelTwo;
}

export function connectUserHierarchyStructureHierarchyStructureToTerraform(struct?: ConnectUserHierarchyStructureHierarchyStructureOutputReference | ConnectUserHierarchyStructureHierarchyStructure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level_five: connectUserHierarchyStructureHierarchyStructureLevelFiveToTerraform(struct!.levelFive),
    level_four: connectUserHierarchyStructureHierarchyStructureLevelFourToTerraform(struct!.levelFour),
    level_one: connectUserHierarchyStructureHierarchyStructureLevelOneToTerraform(struct!.levelOne),
    level_three: connectUserHierarchyStructureHierarchyStructureLevelThreeToTerraform(struct!.levelThree),
    level_two: connectUserHierarchyStructureHierarchyStructureLevelTwoToTerraform(struct!.levelTwo),
  }
}

export class ConnectUserHierarchyStructureHierarchyStructureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectUserHierarchyStructureHierarchyStructure | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._levelFive?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.levelFive = this._levelFive?.internalValue;
    }
    if (this._levelFour?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.levelFour = this._levelFour?.internalValue;
    }
    if (this._levelOne?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.levelOne = this._levelOne?.internalValue;
    }
    if (this._levelThree?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.levelThree = this._levelThree?.internalValue;
    }
    if (this._levelTwo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.levelTwo = this._levelTwo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectUserHierarchyStructureHierarchyStructure | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._levelFive.internalValue = undefined;
      this._levelFour.internalValue = undefined;
      this._levelOne.internalValue = undefined;
      this._levelThree.internalValue = undefined;
      this._levelTwo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._levelFive.internalValue = value.levelFive;
      this._levelFour.internalValue = value.levelFour;
      this._levelOne.internalValue = value.levelOne;
      this._levelThree.internalValue = value.levelThree;
      this._levelTwo.internalValue = value.levelTwo;
    }
  }

  // level_five - computed: false, optional: true, required: false
  private _levelFive = new ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference(this, "level_five");
  public get levelFive() {
    return this._levelFive;
  }
  public putLevelFive(value: ConnectUserHierarchyStructureHierarchyStructureLevelFive) {
    this._levelFive.internalValue = value;
  }
  public resetLevelFive() {
    this._levelFive.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelFiveInput() {
    return this._levelFive.internalValue;
  }

  // level_four - computed: false, optional: true, required: false
  private _levelFour = new ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference(this, "level_four");
  public get levelFour() {
    return this._levelFour;
  }
  public putLevelFour(value: ConnectUserHierarchyStructureHierarchyStructureLevelFour) {
    this._levelFour.internalValue = value;
  }
  public resetLevelFour() {
    this._levelFour.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelFourInput() {
    return this._levelFour.internalValue;
  }

  // level_one - computed: false, optional: true, required: false
  private _levelOne = new ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference(this, "level_one");
  public get levelOne() {
    return this._levelOne;
  }
  public putLevelOne(value: ConnectUserHierarchyStructureHierarchyStructureLevelOne) {
    this._levelOne.internalValue = value;
  }
  public resetLevelOne() {
    this._levelOne.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelOneInput() {
    return this._levelOne.internalValue;
  }

  // level_three - computed: false, optional: true, required: false
  private _levelThree = new ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference(this, "level_three");
  public get levelThree() {
    return this._levelThree;
  }
  public putLevelThree(value: ConnectUserHierarchyStructureHierarchyStructureLevelThree) {
    this._levelThree.internalValue = value;
  }
  public resetLevelThree() {
    this._levelThree.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelThreeInput() {
    return this._levelThree.internalValue;
  }

  // level_two - computed: false, optional: true, required: false
  private _levelTwo = new ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference(this, "level_two");
  public get levelTwo() {
    return this._levelTwo;
  }
  public putLevelTwo(value: ConnectUserHierarchyStructureHierarchyStructureLevelTwo) {
    this._levelTwo.internalValue = value;
  }
  public resetLevelTwo() {
    this._levelTwo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelTwoInput() {
    return this._levelTwo.internalValue;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure aws_connect_user_hierarchy_structure}
*/
export class ConnectUserHierarchyStructure extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_connect_user_hierarchy_structure";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_structure aws_connect_user_hierarchy_structure} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConnectUserHierarchyStructureConfig
  */
  public constructor(scope: Construct, id: string, config: ConnectUserHierarchyStructureConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_connect_user_hierarchy_structure',
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
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._hierarchyStructure.internalValue = config.hierarchyStructure;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // hierarchy_structure - computed: false, optional: false, required: true
  private _hierarchyStructure = new ConnectUserHierarchyStructureHierarchyStructureOutputReference(this, "hierarchy_structure");
  public get hierarchyStructure() {
    return this._hierarchyStructure;
  }
  public putHierarchyStructure(value: ConnectUserHierarchyStructureHierarchyStructure) {
    this._hierarchyStructure.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hierarchyStructureInput() {
    return this._hierarchyStructure.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      hierarchy_structure: connectUserHierarchyStructureHierarchyStructureToTerraform(this._hierarchyStructure.internalValue),
    };
  }
}
