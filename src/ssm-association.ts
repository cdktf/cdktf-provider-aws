// https://www.terraform.io/docs/providers/aws/r/ssm_association.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SsmAssociationConfig extends cdktf.TerraformMetaArguments {
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

function ssmAssociationOutputLocationToTerraform(struct?: SsmAssociationOutputLocation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    s3_bucket_name: cdktf.stringToTerraform(struct!.s3BucketName),
    s3_key_prefix: cdktf.stringToTerraform(struct!.s3KeyPrefix),
  }
}

export interface SsmAssociationTargets {
  readonly key: string;
  readonly values: string[];
}

function ssmAssociationTargetsToTerraform(struct?: SsmAssociationTargets): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}


// Resource

export class SsmAssociation extends cdktf.TerraformResource {

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

  // association_id - computed: true, optional: false, required: false
  public get associationId() {
    return this.getStringAttribute('association_id');
  }

  // association_name - computed: false, optional: true, required: false
  private _associationName?: string;
  public get associationName() {
    return this.getStringAttribute('association_name');
  }
  public set associationName(value: string ) {
    this._associationName = value;
  }
  public resetAssociationName() {
    this._associationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associationNameInput() {
    return this._associationName
  }

  // automation_target_parameter_name - computed: false, optional: true, required: false
  private _automationTargetParameterName?: string;
  public get automationTargetParameterName() {
    return this.getStringAttribute('automation_target_parameter_name');
  }
  public set automationTargetParameterName(value: string ) {
    this._automationTargetParameterName = value;
  }
  public resetAutomationTargetParameterName() {
    this._automationTargetParameterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automationTargetParameterNameInput() {
    return this._automationTargetParameterName
  }

  // compliance_severity - computed: false, optional: true, required: false
  private _complianceSeverity?: string;
  public get complianceSeverity() {
    return this.getStringAttribute('compliance_severity');
  }
  public set complianceSeverity(value: string ) {
    this._complianceSeverity = value;
  }
  public resetComplianceSeverity() {
    this._complianceSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get complianceSeverityInput() {
    return this._complianceSeverity
  }

  // document_version - computed: true, optional: true, required: false
  private _documentVersion?: string;
  public get documentVersion() {
    return this.getStringAttribute('document_version');
  }
  public set documentVersion(value: string) {
    this._documentVersion = value;
  }
  public resetDocumentVersion() {
    this._documentVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentVersionInput() {
    return this._documentVersion
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: string;
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string ) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId
  }

  // max_concurrency - computed: false, optional: true, required: false
  private _maxConcurrency?: string;
  public get maxConcurrency() {
    return this.getStringAttribute('max_concurrency');
  }
  public set maxConcurrency(value: string ) {
    this._maxConcurrency = value;
  }
  public resetMaxConcurrency() {
    this._maxConcurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrencyInput() {
    return this._maxConcurrency
  }

  // max_errors - computed: false, optional: true, required: false
  private _maxErrors?: string;
  public get maxErrors() {
    return this.getStringAttribute('max_errors');
  }
  public set maxErrors(value: string ) {
    this._maxErrors = value;
  }
  public resetMaxErrors() {
    this._maxErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxErrorsInput() {
    return this._maxErrors
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

  // parameters - computed: true, optional: true, required: false
  private _parameters?: { [key: string]: string }
  public get parameters(): { [key: string]: string } {
    return this.interpolationForAttribute('parameters') as any; // Getting the computed value is not yet implemented
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters
  }

  // schedule_expression - computed: false, optional: true, required: false
  private _scheduleExpression?: string;
  public get scheduleExpression() {
    return this.getStringAttribute('schedule_expression');
  }
  public set scheduleExpression(value: string ) {
    this._scheduleExpression = value;
  }
  public resetScheduleExpression() {
    this._scheduleExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleExpressionInput() {
    return this._scheduleExpression
  }

  // output_location - computed: false, optional: true, required: false
  private _outputLocation?: SsmAssociationOutputLocation[];
  public get outputLocation() {
    return this.interpolationForAttribute('output_location') as any;
  }
  public set outputLocation(value: SsmAssociationOutputLocation[] ) {
    this._outputLocation = value;
  }
  public resetOutputLocation() {
    this._outputLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputLocationInput() {
    return this._outputLocation
  }

  // targets - computed: false, optional: true, required: false
  private _targets?: SsmAssociationTargets[];
  public get targets() {
    return this.interpolationForAttribute('targets') as any;
  }
  public set targets(value: SsmAssociationTargets[] ) {
    this._targets = value;
  }
  public resetTargets() {
    this._targets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsInput() {
    return this._targets
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      association_name: cdktf.stringToTerraform(this._associationName),
      automation_target_parameter_name: cdktf.stringToTerraform(this._automationTargetParameterName),
      compliance_severity: cdktf.stringToTerraform(this._complianceSeverity),
      document_version: cdktf.stringToTerraform(this._documentVersion),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      max_concurrency: cdktf.stringToTerraform(this._maxConcurrency),
      max_errors: cdktf.stringToTerraform(this._maxErrors),
      name: cdktf.stringToTerraform(this._name),
      parameters: cdktf.hashMapper(cdktf.anyToTerraform)(this._parameters),
      schedule_expression: cdktf.stringToTerraform(this._scheduleExpression),
      output_location: cdktf.listMapper(ssmAssociationOutputLocationToTerraform)(this._outputLocation),
      targets: cdktf.listMapper(ssmAssociationTargetsToTerraform)(this._targets),
    };
  }
}
