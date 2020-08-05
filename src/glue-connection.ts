// https://www.terraform.io/docs/providers/aws/r/glue_connection.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "arn": {
        "type": "string",
        "computed": true
      },
      "catalog_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "connection_properties": {
        "type": [
          "map",
          "string"
        ],
        "required": true,
        "sensitive": true
      },
      "connection_type": {
        "type": "string",
        "optional": true
      },
      "description": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "match_criteria": {
        "type": [
          "list",
          "string"
        ],
        "optional": true
      },
      "name": {
        "type": "string",
        "required": true
      }
    },
    "block_types": {
      "physical_connection_requirements": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "availability_zone": {
              "type": "string",
              "optional": true
            },
            "security_group_id_list": {
              "type": [
                "list",
                "string"
              ],
              "optional": true
            },
            "subnet_id": {
              "type": "string",
              "optional": true
            }
          }
        },
        "max_items": 1
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface GlueConnectionConfig extends TerraformMetaArguments {
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

// Resource

export class GlueConnection extends TerraformResource {

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

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // catalog_id - computed: true, optional: true, required: false
  private _catalogId?: string;
  public get catalogId() {
    return this._catalogId ?? this.getStringAttribute('catalog_id');
  }
  public set catalogId(value: string | undefined) {
    this._catalogId = value;
  }

  // connection_properties - computed: false, optional: false, required: true
  private _connectionProperties: { [key: string]: string };
  public get connectionProperties() {
    return this._connectionProperties;
  }
  public set connectionProperties(value: { [key: string]: string }) {
    this._connectionProperties = value;
  }

  // connection_type - computed: false, optional: true, required: false
  private _connectionType?: string;
  public get connectionType() {
    return this._connectionType;
  }
  public set connectionType(value: string | undefined) {
    this._connectionType = value;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // match_criteria - computed: false, optional: true, required: false
  private _matchCriteria?: string[];
  public get matchCriteria() {
    return this._matchCriteria;
  }
  public set matchCriteria(value: string[] | undefined) {
    this._matchCriteria = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // physical_connection_requirements - computed: false, optional: true, required: false
  private _physicalConnectionRequirements?: GlueConnectionPhysicalConnectionRequirements[];
  public get physicalConnectionRequirements() {
    return this._physicalConnectionRequirements;
  }
  public set physicalConnectionRequirements(value: GlueConnectionPhysicalConnectionRequirements[] | undefined) {
    this._physicalConnectionRequirements = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      catalog_id: this._catalogId,
      connection_properties: this._connectionProperties,
      connection_type: this._connectionType,
      description: this._description,
      match_criteria: this._matchCriteria,
      name: this._name,
      physical_connection_requirements: this._physicalConnectionRequirements,
    };
  }
}
