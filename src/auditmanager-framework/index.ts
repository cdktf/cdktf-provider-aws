/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/auditmanager_framework
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuditmanagerFrameworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/auditmanager_framework#compliance_type AuditmanagerFramework#compliance_type}
  */
  readonly complianceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/auditmanager_framework#description AuditmanagerFramework#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/auditmanager_framework#name AuditmanagerFramework#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/auditmanager_framework#region AuditmanagerFramework#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/auditmanager_framework#tags AuditmanagerFramework#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * control_sets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/auditmanager_framework#control_sets AuditmanagerFramework#control_sets}
  */
  readonly controlSets?: AuditmanagerFrameworkControlSets[] | cdktf.IResolvable;
}
export interface AuditmanagerFrameworkControlSetsControls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/auditmanager_framework#id AuditmanagerFramework#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function auditmanagerFrameworkControlSetsControlsToTerraform(struct?: AuditmanagerFrameworkControlSetsControls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function auditmanagerFrameworkControlSetsControlsToHclTerraform(struct?: AuditmanagerFrameworkControlSetsControls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuditmanagerFrameworkControlSetsControlsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AuditmanagerFrameworkControlSetsControls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuditmanagerFrameworkControlSetsControls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class AuditmanagerFrameworkControlSetsControlsList extends cdktf.ComplexList {
  public internalValue? : AuditmanagerFrameworkControlSetsControls[] | cdktf.IResolvable

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
  public get(index: number): AuditmanagerFrameworkControlSetsControlsOutputReference {
    return new AuditmanagerFrameworkControlSetsControlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AuditmanagerFrameworkControlSets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/auditmanager_framework#name AuditmanagerFramework#name}
  */
  readonly name: string;
  /**
  * controls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/auditmanager_framework#controls AuditmanagerFramework#controls}
  */
  readonly controls?: AuditmanagerFrameworkControlSetsControls[] | cdktf.IResolvable;
}

export function auditmanagerFrameworkControlSetsToTerraform(struct?: AuditmanagerFrameworkControlSets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    controls: cdktf.listMapper(auditmanagerFrameworkControlSetsControlsToTerraform, true)(struct!.controls),
  }
}


export function auditmanagerFrameworkControlSetsToHclTerraform(struct?: AuditmanagerFrameworkControlSets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    controls: {
      value: cdktf.listMapperHcl(auditmanagerFrameworkControlSetsControlsToHclTerraform, true)(struct!.controls),
      isBlock: true,
      type: "set",
      storageClassType: "AuditmanagerFrameworkControlSetsControlsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuditmanagerFrameworkControlSetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AuditmanagerFrameworkControlSets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._controls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.controls = this._controls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuditmanagerFrameworkControlSets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._controls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._controls.internalValue = value.controls;
    }
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

  // controls - computed: false, optional: true, required: false
  private _controls = new AuditmanagerFrameworkControlSetsControlsList(this, "controls", true);
  public get controls() {
    return this._controls;
  }
  public putControls(value: AuditmanagerFrameworkControlSetsControls[] | cdktf.IResolvable) {
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

export class AuditmanagerFrameworkControlSetsList extends cdktf.ComplexList {
  public internalValue? : AuditmanagerFrameworkControlSets[] | cdktf.IResolvable

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
  public get(index: number): AuditmanagerFrameworkControlSetsOutputReference {
    return new AuditmanagerFrameworkControlSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/auditmanager_framework aws_auditmanager_framework}
*/
export class AuditmanagerFramework extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_auditmanager_framework";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AuditmanagerFramework resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AuditmanagerFramework to import
  * @param importFromId The id of the existing AuditmanagerFramework that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/auditmanager_framework#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AuditmanagerFramework to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_auditmanager_framework", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/auditmanager_framework aws_auditmanager_framework} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuditmanagerFrameworkConfig
  */
  public constructor(scope: Construct, id: string, config: AuditmanagerFrameworkConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_auditmanager_framework',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.14.0',
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
    this._complianceType = config.complianceType;
    this._description = config.description;
    this._name = config.name;
    this._region = config.region;
    this._tags = config.tags;
    this._controlSets.internalValue = config.controlSets;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // compliance_type - computed: false, optional: true, required: false
  private _complianceType?: string; 
  public get complianceType() {
    return this.getStringAttribute('compliance_type');
  }
  public set complianceType(value: string) {
    this._complianceType = value;
  }
  public resetComplianceType() {
    this._complianceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get complianceTypeInput() {
    return this._complianceType;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // framework_type - computed: true, optional: false, required: false
  public get frameworkType() {
    return this.getStringAttribute('framework_type');
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: false, required: false
  private _tagsAll = new cdktf.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
  }

  // control_sets - computed: false, optional: true, required: false
  private _controlSets = new AuditmanagerFrameworkControlSetsList(this, "control_sets", true);
  public get controlSets() {
    return this._controlSets;
  }
  public putControlSets(value: AuditmanagerFrameworkControlSets[] | cdktf.IResolvable) {
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
      compliance_type: cdktf.stringToTerraform(this._complianceType),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      control_sets: cdktf.listMapper(auditmanagerFrameworkControlSetsToTerraform, true)(this._controlSets.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compliance_type: {
        value: cdktf.stringToHclTerraform(this._complianceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      control_sets: {
        value: cdktf.listMapperHcl(auditmanagerFrameworkControlSetsToHclTerraform, true)(this._controlSets.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AuditmanagerFrameworkControlSetsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
