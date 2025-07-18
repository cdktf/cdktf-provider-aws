/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GlueConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_connection#athena_properties GlueConnection#athena_properties}
  */
  readonly athenaProperties?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_connection#catalog_id GlueConnection#catalog_id}
  */
  readonly catalogId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_connection#connection_properties GlueConnection#connection_properties}
  */
  readonly connectionProperties?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_connection#connection_type GlueConnection#connection_type}
  */
  readonly connectionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_connection#description GlueConnection#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_connection#id GlueConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_connection#match_criteria GlueConnection#match_criteria}
  */
  readonly matchCriteria?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_connection#name GlueConnection#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_connection#region GlueConnection#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_connection#tags GlueConnection#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_connection#tags_all GlueConnection#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * physical_connection_requirements block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_connection#physical_connection_requirements GlueConnection#physical_connection_requirements}
  */
  readonly physicalConnectionRequirements?: GlueConnectionPhysicalConnectionRequirements;
}
export interface GlueConnectionPhysicalConnectionRequirements {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_connection#availability_zone GlueConnection#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_connection#security_group_id_list GlueConnection#security_group_id_list}
  */
  readonly securityGroupIdList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_connection#subnet_id GlueConnection#subnet_id}
  */
  readonly subnetId?: string;
}

export function glueConnectionPhysicalConnectionRequirementsToTerraform(struct?: GlueConnectionPhysicalConnectionRequirementsOutputReference | GlueConnectionPhysicalConnectionRequirements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_zone: cdktf.stringToTerraform(struct!.availabilityZone),
    security_group_id_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroupIdList),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}


export function glueConnectionPhysicalConnectionRequirementsToHclTerraform(struct?: GlueConnectionPhysicalConnectionRequirementsOutputReference | GlueConnectionPhysicalConnectionRequirements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availability_zone: {
      value: cdktf.stringToHclTerraform(struct!.availabilityZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_group_id_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroupIdList),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueConnectionPhysicalConnectionRequirementsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlueConnectionPhysicalConnectionRequirements | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZone = this._availabilityZone;
    }
    if (this._securityGroupIdList !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIdList = this._securityGroupIdList;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueConnectionPhysicalConnectionRequirements | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._availabilityZone = undefined;
      this._securityGroupIdList = undefined;
      this._subnetId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._availabilityZone = value.availabilityZone;
      this._securityGroupIdList = value.securityGroupIdList;
      this._subnetId = value.subnetId;
    }
  }

  // availability_zone - computed: false, optional: true, required: false
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // security_group_id_list - computed: false, optional: true, required: false
  private _securityGroupIdList?: string[]; 
  public get securityGroupIdList() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group_id_list'));
  }
  public set securityGroupIdList(value: string[]) {
    this._securityGroupIdList = value;
  }
  public resetSecurityGroupIdList() {
    this._securityGroupIdList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdListInput() {
    return this._securityGroupIdList;
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_connection aws_glue_connection}
*/
export class GlueConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_glue_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GlueConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GlueConnection to import
  * @param importFromId The id of the existing GlueConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GlueConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_glue_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/glue_connection aws_glue_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GlueConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: GlueConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_glue_connection',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.4.0',
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
    this._athenaProperties = config.athenaProperties;
    this._catalogId = config.catalogId;
    this._connectionProperties = config.connectionProperties;
    this._connectionType = config.connectionType;
    this._description = config.description;
    this._id = config.id;
    this._matchCriteria = config.matchCriteria;
    this._name = config.name;
    this._region = config.region;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._physicalConnectionRequirements.internalValue = config.physicalConnectionRequirements;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // athena_properties - computed: false, optional: true, required: false
  private _athenaProperties?: { [key: string]: string }; 
  public get athenaProperties() {
    return this.getStringMapAttribute('athena_properties');
  }
  public set athenaProperties(value: { [key: string]: string }) {
    this._athenaProperties = value;
  }
  public resetAthenaProperties() {
    this._athenaProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get athenaPropertiesInput() {
    return this._athenaProperties;
  }

  // catalog_id - computed: true, optional: true, required: false
  private _catalogId?: string; 
  public get catalogId() {
    return this.getStringAttribute('catalog_id');
  }
  public set catalogId(value: string) {
    this._catalogId = value;
  }
  public resetCatalogId() {
    this._catalogId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogIdInput() {
    return this._catalogId;
  }

  // connection_properties - computed: false, optional: true, required: false
  private _connectionProperties?: { [key: string]: string }; 
  public get connectionProperties() {
    return this.getStringMapAttribute('connection_properties');
  }
  public set connectionProperties(value: { [key: string]: string }) {
    this._connectionProperties = value;
  }
  public resetConnectionProperties() {
    this._connectionProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionPropertiesInput() {
    return this._connectionProperties;
  }

  // connection_type - computed: false, optional: true, required: false
  private _connectionType?: string; 
  public get connectionType() {
    return this.getStringAttribute('connection_type');
  }
  public set connectionType(value: string) {
    this._connectionType = value;
  }
  public resetConnectionType() {
    this._connectionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionTypeInput() {
    return this._connectionType;
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

  // match_criteria - computed: false, optional: true, required: false
  private _matchCriteria?: string[]; 
  public get matchCriteria() {
    return this.getListAttribute('match_criteria');
  }
  public set matchCriteria(value: string[]) {
    this._matchCriteria = value;
  }
  public resetMatchCriteria() {
    this._matchCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCriteriaInput() {
    return this._matchCriteria;
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

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // physical_connection_requirements - computed: false, optional: true, required: false
  private _physicalConnectionRequirements = new GlueConnectionPhysicalConnectionRequirementsOutputReference(this, "physical_connection_requirements");
  public get physicalConnectionRequirements() {
    return this._physicalConnectionRequirements;
  }
  public putPhysicalConnectionRequirements(value: GlueConnectionPhysicalConnectionRequirements) {
    this._physicalConnectionRequirements.internalValue = value;
  }
  public resetPhysicalConnectionRequirements() {
    this._physicalConnectionRequirements.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get physicalConnectionRequirementsInput() {
    return this._physicalConnectionRequirements.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      athena_properties: cdktf.hashMapper(cdktf.stringToTerraform)(this._athenaProperties),
      catalog_id: cdktf.stringToTerraform(this._catalogId),
      connection_properties: cdktf.hashMapper(cdktf.stringToTerraform)(this._connectionProperties),
      connection_type: cdktf.stringToTerraform(this._connectionType),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      match_criteria: cdktf.listMapper(cdktf.stringToTerraform, false)(this._matchCriteria),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      physical_connection_requirements: glueConnectionPhysicalConnectionRequirementsToTerraform(this._physicalConnectionRequirements.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      athena_properties: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._athenaProperties),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      catalog_id: {
        value: cdktf.stringToHclTerraform(this._catalogId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_properties: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._connectionProperties),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      connection_type: {
        value: cdktf.stringToHclTerraform(this._connectionType),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_criteria: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._matchCriteria),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
      tags_all: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tagsAll),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      physical_connection_requirements: {
        value: glueConnectionPhysicalConnectionRequirementsToHclTerraform(this._physicalConnectionRequirements.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GlueConnectionPhysicalConnectionRequirementsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
