// https://www.terraform.io/docs/providers/aws/r/glue_connection.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GlueConnectionConfig extends cdktf.TerraformMetaArguments {
  readonly catalogId?: string;
  readonly connectionProperties: { [key: string]: string };
  readonly connectionType?: string;
  readonly description?: string;
  readonly matchCriteria?: string[];
  readonly name: string;
  /** physical_connection_requirements block */
  readonly physicalConnectionRequirements?: GlueConnectionPhysicalConnectionRequirements[];
}
export interface GlueConnectionPhysicalConnectionRequirements {
  readonly availabilityZone?: string;
  readonly securityGroupIdList?: string[];
  readonly subnetId?: string;
}

function glueConnectionPhysicalConnectionRequirementsToTerraform(struct?: GlueConnectionPhysicalConnectionRequirements): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    availability_zone: cdktf.stringToTerraform(struct!.availabilityZone),
    security_group_id_list: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroupIdList),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}


// Resource

export class GlueConnection extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: GlueConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_glue_connection',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._catalogId = config.catalogId;
    this._connectionProperties = config.connectionProperties;
    this._connectionType = config.connectionType;
    this._description = config.description;
    this._matchCriteria = config.matchCriteria;
    this._name = config.name;
    this._physicalConnectionRequirements = config.physicalConnectionRequirements;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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
    return this._catalogId
  }

  // connection_properties - computed: false, optional: false, required: true
  private _connectionProperties: { [key: string]: string };
  public get connectionProperties() {
    return this.interpolationForAttribute('connection_properties') as any;
  }
  public set connectionProperties(value: { [key: string]: string }) {
    this._connectionProperties = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionPropertiesInput() {
    return this._connectionProperties
  }

  // connection_type - computed: false, optional: true, required: false
  private _connectionType?: string;
  public get connectionType() {
    return this.getStringAttribute('connection_type');
  }
  public set connectionType(value: string ) {
    this._connectionType = value;
  }
  public resetConnectionType() {
    this._connectionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionTypeInput() {
    return this._connectionType
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // match_criteria - computed: false, optional: true, required: false
  private _matchCriteria?: string[];
  public get matchCriteria() {
    return this.getListAttribute('match_criteria');
  }
  public set matchCriteria(value: string[] ) {
    this._matchCriteria = value;
  }
  public resetMatchCriteria() {
    this._matchCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCriteriaInput() {
    return this._matchCriteria
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // physical_connection_requirements - computed: false, optional: true, required: false
  private _physicalConnectionRequirements?: GlueConnectionPhysicalConnectionRequirements[];
  public get physicalConnectionRequirements() {
    return this.interpolationForAttribute('physical_connection_requirements') as any;
  }
  public set physicalConnectionRequirements(value: GlueConnectionPhysicalConnectionRequirements[] ) {
    this._physicalConnectionRequirements = value;
  }
  public resetPhysicalConnectionRequirements() {
    this._physicalConnectionRequirements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get physicalConnectionRequirementsInput() {
    return this._physicalConnectionRequirements
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      catalog_id: cdktf.stringToTerraform(this._catalogId),
      connection_properties: cdktf.hashMapper(cdktf.anyToTerraform)(this._connectionProperties),
      connection_type: cdktf.stringToTerraform(this._connectionType),
      description: cdktf.stringToTerraform(this._description),
      match_criteria: cdktf.listMapper(cdktf.stringToTerraform)(this._matchCriteria),
      name: cdktf.stringToTerraform(this._name),
      physical_connection_requirements: cdktf.listMapper(glueConnectionPhysicalConnectionRequirementsToTerraform)(this._physicalConnectionRequirements),
    };
  }
}
