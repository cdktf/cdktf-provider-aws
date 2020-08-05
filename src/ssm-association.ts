// https://www.terraform.io/docs/providers/aws/r/ssm_association.html
// generated from terraform resource schema

/*
{
  "version": 1,
  "block": {
    "attributes": {
      "association_id": {
        "type": "string",
        "computed": true
      },
      "association_name": {
        "type": "string",
        "optional": true
      },
      "automation_target_parameter_name": {
        "type": "string",
        "optional": true
      },
      "compliance_severity": {
        "type": "string",
        "optional": true
      },
      "document_version": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "instance_id": {
        "type": "string",
        "optional": true
      },
      "max_concurrency": {
        "type": "string",
        "optional": true
      },
      "max_errors": {
        "type": "string",
        "optional": true
      },
      "name": {
        "type": "string",
        "required": true
      },
      "parameters": {
        "type": [
          "map",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "schedule_expression": {
        "type": "string",
        "optional": true
      }
    },
    "block_types": {
      "output_location": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "s3_bucket_name": {
              "type": "string",
              "required": true
            },
            "s3_key_prefix": {
              "type": "string",
              "optional": true
            }
          }
        },
        "max_items": 1
      },
      "targets": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "key": {
              "type": "string",
              "required": true
            },
            "values": {
              "type": [
                "list",
                "string"
              ],
              "required": true
            }
          }
        },
        "max_items": 5
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface SsmAssociationConfig extends TerraformMetaArguments {
  readonly associationName?: string;
  readonly automationTargetParameterName?: string;
  readonly complianceSeverity?: string;
  readonly documentVersion?: string;
  readonly instanceId?: string;
  readonly maxConcurrency?: string;
  readonly maxErrors?: string;
  readonly name: string;
  readonly parameters?: { [key: string]: string };
  readonly scheduleExpression?: string;
  /** output_location block */
  readonly outputLocation?: SsmAssociationOutputLocation[];
  /** targets block */
  readonly targets?: SsmAssociationTargets[];
}
export interface SsmAssociationOutputLocation {
  readonly s3BucketName: string;
  readonly s3KeyPrefix?: string;
}
export interface SsmAssociationTargets {
  readonly key: string;
  readonly values: string[];
}

// Resource

export class SsmAssociation extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SsmAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ssm_association',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._associationName = config.associationName;
    this._automationTargetParameterName = config.automationTargetParameterName;
    this._complianceSeverity = config.complianceSeverity;
    this._documentVersion = config.documentVersion;
    this._instanceId = config.instanceId;
    this._maxConcurrency = config.maxConcurrency;
    this._maxErrors = config.maxErrors;
    this._name = config.name;
    this._parameters = config.parameters;
    this._scheduleExpression = config.scheduleExpression;
    this._outputLocation = config.outputLocation;
    this._targets = config.targets;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // association_id - computed: true, optional: false, required: true
  public get associationId() {
    return this.getStringAttribute('association_id');
  }

  // association_name - computed: false, optional: true, required: false
  private _associationName?: string;
  public get associationName() {
    return this._associationName;
  }
  public set associationName(value: string | undefined) {
    this._associationName = value;
  }

  // automation_target_parameter_name - computed: false, optional: true, required: false
  private _automationTargetParameterName?: string;
  public get automationTargetParameterName() {
    return this._automationTargetParameterName;
  }
  public set automationTargetParameterName(value: string | undefined) {
    this._automationTargetParameterName = value;
  }

  // compliance_severity - computed: false, optional: true, required: false
  private _complianceSeverity?: string;
  public get complianceSeverity() {
    return this._complianceSeverity;
  }
  public set complianceSeverity(value: string | undefined) {
    this._complianceSeverity = value;
  }

  // document_version - computed: true, optional: true, required: false
  private _documentVersion?: string;
  public get documentVersion() {
    return this._documentVersion ?? this.getStringAttribute('document_version');
  }
  public set documentVersion(value: string | undefined) {
    this._documentVersion = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: string;
  public get instanceId() {
    return this._instanceId;
  }
  public set instanceId(value: string | undefined) {
    this._instanceId = value;
  }

  // max_concurrency - computed: false, optional: true, required: false
  private _maxConcurrency?: string;
  public get maxConcurrency() {
    return this._maxConcurrency;
  }
  public set maxConcurrency(value: string | undefined) {
    this._maxConcurrency = value;
  }

  // max_errors - computed: false, optional: true, required: false
  private _maxErrors?: string;
  public get maxErrors() {
    return this._maxErrors;
  }
  public set maxErrors(value: string | undefined) {
    this._maxErrors = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // parameters - computed: true, optional: true, required: false
  private _parameters?: { [key: string]: string }
  public get parameters(): { [key: string]: string } | undefined {
    return this._parameters; // Getting the computed value is not yet implemented
  }
  public set parameters(value: { [key: string]: string } | undefined) {
    this._parameters = value;
  }

  // schedule_expression - computed: false, optional: true, required: false
  private _scheduleExpression?: string;
  public get scheduleExpression() {
    return this._scheduleExpression;
  }
  public set scheduleExpression(value: string | undefined) {
    this._scheduleExpression = value;
  }

  // output_location - computed: false, optional: true, required: false
  private _outputLocation?: SsmAssociationOutputLocation[];
  public get outputLocation() {
    return this._outputLocation;
  }
  public set outputLocation(value: SsmAssociationOutputLocation[] | undefined) {
    this._outputLocation = value;
  }

  // targets - computed: false, optional: true, required: false
  private _targets?: SsmAssociationTargets[];
  public get targets() {
    return this._targets;
  }
  public set targets(value: SsmAssociationTargets[] | undefined) {
    this._targets = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      association_name: this._associationName,
      automation_target_parameter_name: this._automationTargetParameterName,
      compliance_severity: this._complianceSeverity,
      document_version: this._documentVersion,
      instance_id: this._instanceId,
      max_concurrency: this._maxConcurrency,
      max_errors: this._maxErrors,
      name: this._name,
      parameters: this._parameters,
      schedule_expression: this._scheduleExpression,
      output_location: this._outputLocation,
      targets: this._targets,
    };
  }
}
