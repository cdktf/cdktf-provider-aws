// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Route 53
*/
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

export function route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceToTerraform(struct?: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference | Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
  }
}

export class Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._arn) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource | undefined) {
    if (value === undefined) {
      this._arn = undefined;
    }
    else {
      this._arn = value.arn;
    }
  }

  // arn - computed: false, optional: true, required: false
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  public resetArn() {
    this._arn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
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

export function route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceToTerraform(struct?: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference | Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain_name: cdktf.stringToTerraform(struct!.domainName),
    record_set_id: cdktf.stringToTerraform(struct!.recordSetId),
  }
}

export class Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._domainName) {
      hasAnyValues = true;
      internalValueResult.domainName = this._domainName;
    }
    if (this._recordSetId) {
      hasAnyValues = true;
      internalValueResult.recordSetId = this._recordSetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource | undefined) {
    if (value === undefined) {
      this._domainName = undefined;
      this._recordSetId = undefined;
    }
    else {
      this._domainName = value.domainName;
      this._recordSetId = value.recordSetId;
    }
  }

  // domain_name - computed: false, optional: true, required: false
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  public resetDomainName() {
    this._domainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // record_set_id - computed: false, optional: true, required: false
  private _recordSetId?: string; 
  public get recordSetId() {
    return this.getStringAttribute('record_set_id');
  }
  public set recordSetId(value: string) {
    this._recordSetId = value;
  }
  public resetRecordSetId() {
    this._recordSetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordSetIdInput() {
    return this._recordSetId;
  }
}
export interface Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource {
  /**
  * nlb_resource block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set.html#nlb_resource Route53RecoveryreadinessResourceSet#nlb_resource}
  */
  readonly nlbResource?: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource;
  /**
  * r53_resource block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set.html#r53_resource Route53RecoveryreadinessResourceSet#r53_resource}
  */
  readonly r53Resource?: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource;
}

export function route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceToTerraform(struct?: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference | Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nlb_resource: route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceToTerraform(struct!.nlbResource),
    r53_resource: route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceToTerraform(struct!.r53Resource),
  }
}

export class Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._nlbResource) {
      hasAnyValues = true;
      internalValueResult.nlbResource = this._nlbResource?.internalValue;
    }
    if (this._r53Resource) {
      hasAnyValues = true;
      internalValueResult.r53Resource = this._r53Resource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource | undefined) {
    if (value === undefined) {
      this._nlbResource.internalValue = undefined;
      this._r53Resource.internalValue = undefined;
    }
    else {
      this._nlbResource.internalValue = value.nlbResource;
      this._r53Resource.internalValue = value.r53Resource;
    }
  }

  // nlb_resource - computed: false, optional: true, required: false
  private _nlbResource = new Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference(this as any, "nlb_resource", true);
  public get nlbResource() {
    return this._nlbResource;
  }
  public putNlbResource(value: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource) {
    this._nlbResource.internalValue = value;
  }
  public resetNlbResource() {
    this._nlbResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nlbResourceInput() {
    return this._nlbResource.internalValue;
  }

  // r53_resource - computed: false, optional: true, required: false
  private _r53Resource = new Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference(this as any, "r53_resource", true);
  public get r53Resource() {
    return this._r53Resource;
  }
  public putR53Resource(value: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource) {
    this._r53Resource.internalValue = value;
  }
  public resetR53Resource() {
    this._r53Resource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get r53ResourceInput() {
    return this._r53Resource.internalValue;
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
  readonly targetResource?: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource;
}

export function route53RecoveryreadinessResourceSetResourcesDnsTargetResourceToTerraform(struct?: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference | Route53RecoveryreadinessResourceSetResourcesDnsTargetResource): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain_name: cdktf.stringToTerraform(struct!.domainName),
    hosted_zone_arn: cdktf.stringToTerraform(struct!.hostedZoneArn),
    record_set_id: cdktf.stringToTerraform(struct!.recordSetId),
    record_type: cdktf.stringToTerraform(struct!.recordType),
    target_resource: route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceToTerraform(struct!.targetResource),
  }
}

export class Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): Route53RecoveryreadinessResourceSetResourcesDnsTargetResource | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._domainName) {
      hasAnyValues = true;
      internalValueResult.domainName = this._domainName;
    }
    if (this._hostedZoneArn) {
      hasAnyValues = true;
      internalValueResult.hostedZoneArn = this._hostedZoneArn;
    }
    if (this._recordSetId) {
      hasAnyValues = true;
      internalValueResult.recordSetId = this._recordSetId;
    }
    if (this._recordType) {
      hasAnyValues = true;
      internalValueResult.recordType = this._recordType;
    }
    if (this._targetResource) {
      hasAnyValues = true;
      internalValueResult.targetResource = this._targetResource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Route53RecoveryreadinessResourceSetResourcesDnsTargetResource | undefined) {
    if (value === undefined) {
      this._domainName = undefined;
      this._hostedZoneArn = undefined;
      this._recordSetId = undefined;
      this._recordType = undefined;
      this._targetResource.internalValue = undefined;
    }
    else {
      this._domainName = value.domainName;
      this._hostedZoneArn = value.hostedZoneArn;
      this._recordSetId = value.recordSetId;
      this._recordType = value.recordType;
      this._targetResource.internalValue = value.targetResource;
    }
  }

  // domain_name - computed: false, optional: false, required: true
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // hosted_zone_arn - computed: false, optional: true, required: false
  private _hostedZoneArn?: string; 
  public get hostedZoneArn() {
    return this.getStringAttribute('hosted_zone_arn');
  }
  public set hostedZoneArn(value: string) {
    this._hostedZoneArn = value;
  }
  public resetHostedZoneArn() {
    this._hostedZoneArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostedZoneArnInput() {
    return this._hostedZoneArn;
  }

  // record_set_id - computed: false, optional: true, required: false
  private _recordSetId?: string; 
  public get recordSetId() {
    return this.getStringAttribute('record_set_id');
  }
  public set recordSetId(value: string) {
    this._recordSetId = value;
  }
  public resetRecordSetId() {
    this._recordSetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordSetIdInput() {
    return this._recordSetId;
  }

  // record_type - computed: false, optional: true, required: false
  private _recordType?: string; 
  public get recordType() {
    return this.getStringAttribute('record_type');
  }
  public set recordType(value: string) {
    this._recordType = value;
  }
  public resetRecordType() {
    this._recordType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordTypeInput() {
    return this._recordType;
  }

  // target_resource - computed: false, optional: true, required: false
  private _targetResource = new Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference(this as any, "target_resource", true);
  public get targetResource() {
    return this._targetResource;
  }
  public putTargetResource(value: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource) {
    this._targetResource.internalValue = value;
  }
  public resetTargetResource() {
    this._targetResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetResourceInput() {
    return this._targetResource.internalValue;
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
  readonly dnsTargetResource?: Route53RecoveryreadinessResourceSetResourcesDnsTargetResource;
}

export function route53RecoveryreadinessResourceSetResourcesToTerraform(struct?: Route53RecoveryreadinessResourceSetResources): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    readiness_scopes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.readinessScopes),
    resource_arn: cdktf.stringToTerraform(struct!.resourceArn),
    dns_target_resource: route53RecoveryreadinessResourceSetResourcesDnsTargetResourceToTerraform(struct!.dnsTargetResource),
  }
}

export interface Route53RecoveryreadinessResourceSetTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set.html#delete Route53RecoveryreadinessResourceSet#delete}
  */
  readonly delete?: string;
}

export function route53RecoveryreadinessResourceSetTimeoutsToTerraform(struct?: Route53RecoveryreadinessResourceSetTimeoutsOutputReference | Route53RecoveryreadinessResourceSetTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class Route53RecoveryreadinessResourceSetTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): Route53RecoveryreadinessResourceSetTimeouts | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._delete) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Route53RecoveryreadinessResourceSetTimeouts | undefined) {
    if (value === undefined) {
      this._delete = undefined;
    }
    else {
      this._delete = value.delete;
    }
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
    this._timeouts.internalValue = config.timeouts;
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
  private _resourceSetName?: string; 
  public get resourceSetName() {
    return this.getStringAttribute('resource_set_name');
  }
  public set resourceSetName(value: string) {
    this._resourceSetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceSetNameInput() {
    return this._resourceSetName;
  }

  // resource_set_type - computed: false, optional: false, required: true
  private _resourceSetType?: string; 
  public get resourceSetType() {
    return this.getStringAttribute('resource_set_type');
  }
  public set resourceSetType(value: string) {
    this._resourceSetType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceSetTypeInput() {
    return this._resourceSetType;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
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
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable; 
  public get tagsAll() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags_all') as any;
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // resources - computed: false, optional: false, required: true
  private _resources?: Route53RecoveryreadinessResourceSetResources[]; 
  public get resources() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('resources') as any;
  }
  public set resources(value: Route53RecoveryreadinessResourceSetResources[]) {
    this._resources = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new Route53RecoveryreadinessResourceSetTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: Route53RecoveryreadinessResourceSetTimeouts) {
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
      resource_set_name: cdktf.stringToTerraform(this._resourceSetName),
      resource_set_type: cdktf.stringToTerraform(this._resourceSetType),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      resources: cdktf.listMapper(route53RecoveryreadinessResourceSetResourcesToTerraform)(this._resources),
      timeouts: route53RecoveryreadinessResourceSetTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
