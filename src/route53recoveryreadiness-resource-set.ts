// https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Route53RecoveryreadinessResourceSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set.html#resource_set_name Route53RecoveryreadinessResourceSet#resource_set_name}
  */
  readonly resourceSetName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set.html#resource_set_type Route53RecoveryreadinessResourceSet#resource_set_type}
  */
  readonly resourceSetType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set.html#tags Route53RecoveryreadinessResourceSet#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set.html#tags_all Route53RecoveryreadinessResourceSet#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * resources block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set.html#resources Route53RecoveryreadinessResourceSet#resources}
  */
  readonly resources: Route53RecoveryreadinessResourceSetResources[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set.html#timeouts Route53RecoveryreadinessResourceSet#timeouts}
  */
  readonly timeouts?: Route53RecoveryreadinessResourceSetTimeouts;
}
export interface Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set.html#arn Route53RecoveryreadinessResourceSet#arn}
  */
  readonly arn?: string;
}

function route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceToTerraform(struct?: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
  }
}

export interface Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set.html#domain_name Route53RecoveryreadinessResourceSet#domain_name}
  */
  readonly domainName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set.html#record_set_id Route53RecoveryreadinessResourceSet#record_set_id}
  */
  readonly recordSetId?: string;
}

function route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceToTerraform(struct?: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    domain_name: cdktf.stringToTerraform(struct!.domainName),
    record_set_id: cdktf.stringToTerraform(struct!.recordSetId),
  }
}

export interface Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource {
  /**
  * nlb_resource block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set.html#nlb_resource Route53RecoveryreadinessResourceSet#nlb_resource}
  */
  readonly nlbResource?: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource[];
  /**
  * r53_resource block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set.html#r53_resource Route53RecoveryreadinessResourceSet#r53_resource}
  */
  readonly r53Resource?: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource[];
}

function route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceToTerraform(struct?: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    nlb_resource: cdktf.listMapper(route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceToTerraform)(struct!.nlbResource),
    r53_resource: cdktf.listMapper(route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceToTerraform)(struct!.r53Resource),
  }
}

export interface Route53RecoveryreadinessResourceSetResourcesDnsTargetResource {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set.html#domain_name Route53RecoveryreadinessResourceSet#domain_name}
  */
  readonly domainName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set.html#hosted_zone_arn Route53RecoveryreadinessResourceSet#hosted_zone_arn}
  */
  readonly hostedZoneArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set.html#record_set_id Route53RecoveryreadinessResourceSet#record_set_id}
  */
  readonly recordSetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set.html#record_type Route53RecoveryreadinessResourceSet#record_type}
  */
  readonly recordType?: string;
  /**
  * target_resource block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set.html#target_resource Route53RecoveryreadinessResourceSet#target_resource}
  */
  readonly targetResource?: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource[];
}

function route53RecoveryreadinessResourceSetResourcesDnsTargetResourceToTerraform(struct?: Route53RecoveryreadinessResourceSetResourcesDnsTargetResource): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    domain_name: cdktf.stringToTerraform(struct!.domainName),
    hosted_zone_arn: cdktf.stringToTerraform(struct!.hostedZoneArn),
    record_set_id: cdktf.stringToTerraform(struct!.recordSetId),
    record_type: cdktf.stringToTerraform(struct!.recordType),
    target_resource: cdktf.listMapper(route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceToTerraform)(struct!.targetResource),
  }
}

export interface Route53RecoveryreadinessResourceSetResources {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set.html#readiness_scopes Route53RecoveryreadinessResourceSet#readiness_scopes}
  */
  readonly readinessScopes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set.html#resource_arn Route53RecoveryreadinessResourceSet#resource_arn}
  */
  readonly resourceArn?: string;
  /**
  * dns_target_resource block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set.html#dns_target_resource Route53RecoveryreadinessResourceSet#dns_target_resource}
  */
  readonly dnsTargetResource?: Route53RecoveryreadinessResourceSetResourcesDnsTargetResource[];
}

function route53RecoveryreadinessResourceSetResourcesToTerraform(struct?: Route53RecoveryreadinessResourceSetResources): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    readiness_scopes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.readinessScopes),
    resource_arn: cdktf.stringToTerraform(struct!.resourceArn),
    dns_target_resource: cdktf.listMapper(route53RecoveryreadinessResourceSetResourcesDnsTargetResourceToTerraform)(struct!.dnsTargetResource),
  }
}

export interface Route53RecoveryreadinessResourceSetTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set.html#delete Route53RecoveryreadinessResourceSet#delete}
  */
  readonly delete?: string;
}

function route53RecoveryreadinessResourceSetTimeoutsToTerraform(struct?: Route53RecoveryreadinessResourceSetTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set.html aws_route53recoveryreadiness_resource_set}
*/
export class Route53RecoveryreadinessResourceSet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_route53recoveryreadiness_resource_set";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set.html aws_route53recoveryreadiness_resource_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Route53RecoveryreadinessResourceSetConfig
  */
  public constructor(scope: Construct, id: string, config: Route53RecoveryreadinessResourceSetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_route53recoveryreadiness_resource_set',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._resourceSetName = config.resourceSetName;
    this._resourceSetType = config.resourceSetType;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._resources = config.resources;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // resource_set_name - computed: false, optional: false, required: true
  private _resourceSetName: string;
  public get resourceSetName() {
    return this.getStringAttribute('resource_set_name');
  }
  public set resourceSetName(value: string) {
    this._resourceSetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceSetNameInput() {
    return this._resourceSetName
  }

  // resource_set_type - computed: false, optional: false, required: true
  private _resourceSetType: string;
  public get resourceSetType() {
    return this.getStringAttribute('resource_set_type');
  }
  public set resourceSetType(value: string) {
    this._resourceSetType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceSetTypeInput() {
    return this._resourceSetType
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable;
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable
  public get tagsAll(): { [key: string]: string } | cdktf.IResolvable {
    return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll
  }

  // resources - computed: false, optional: false, required: true
  private _resources: Route53RecoveryreadinessResourceSetResources[];
  public get resources() {
    return this.interpolationForAttribute('resources') as any;
  }
  public set resources(value: Route53RecoveryreadinessResourceSetResources[]) {
    this._resources = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: Route53RecoveryreadinessResourceSetTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: Route53RecoveryreadinessResourceSetTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      resource_set_name: cdktf.stringToTerraform(this._resourceSetName),
      resource_set_type: cdktf.stringToTerraform(this._resourceSetType),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      resources: cdktf.listMapper(route53RecoveryreadinessResourceSetResourcesToTerraform)(this._resources),
      timeouts: route53RecoveryreadinessResourceSetTimeoutsToTerraform(this._timeouts),
    };
  }
}
