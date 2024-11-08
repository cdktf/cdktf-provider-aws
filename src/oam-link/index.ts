// https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/oam_link
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OamLinkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/oam_link#id OamLink#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/oam_link#label_template OamLink#label_template}
  */
  readonly labelTemplate: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/oam_link#resource_types OamLink#resource_types}
  */
  readonly resourceTypes: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/oam_link#sink_identifier OamLink#sink_identifier}
  */
  readonly sinkIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/oam_link#tags OamLink#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/oam_link#tags_all OamLink#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * link_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/oam_link#link_configuration OamLink#link_configuration}
  */
  readonly linkConfiguration?: OamLinkLinkConfiguration;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/oam_link#timeouts OamLink#timeouts}
  */
  readonly timeouts?: OamLinkTimeouts;
}
export interface OamLinkLinkConfigurationLogGroupConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/oam_link#filter OamLink#filter}
  */
  readonly filter: string;
}

export function oamLinkLinkConfigurationLogGroupConfigurationToTerraform(struct?: OamLinkLinkConfigurationLogGroupConfigurationOutputReference | OamLinkLinkConfigurationLogGroupConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter: cdktf.stringToTerraform(struct!.filter),
  }
}


export function oamLinkLinkConfigurationLogGroupConfigurationToHclTerraform(struct?: OamLinkLinkConfigurationLogGroupConfigurationOutputReference | OamLinkLinkConfigurationLogGroupConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OamLinkLinkConfigurationLogGroupConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OamLinkLinkConfigurationLogGroupConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OamLinkLinkConfigurationLogGroupConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filter = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filter = value.filter;
    }
  }

  // filter - computed: false, optional: false, required: true
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }
}
export interface OamLinkLinkConfigurationMetricConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/oam_link#filter OamLink#filter}
  */
  readonly filter: string;
}

export function oamLinkLinkConfigurationMetricConfigurationToTerraform(struct?: OamLinkLinkConfigurationMetricConfigurationOutputReference | OamLinkLinkConfigurationMetricConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter: cdktf.stringToTerraform(struct!.filter),
  }
}


export function oamLinkLinkConfigurationMetricConfigurationToHclTerraform(struct?: OamLinkLinkConfigurationMetricConfigurationOutputReference | OamLinkLinkConfigurationMetricConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OamLinkLinkConfigurationMetricConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OamLinkLinkConfigurationMetricConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OamLinkLinkConfigurationMetricConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filter = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filter = value.filter;
    }
  }

  // filter - computed: false, optional: false, required: true
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }
}
export interface OamLinkLinkConfiguration {
  /**
  * log_group_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/oam_link#log_group_configuration OamLink#log_group_configuration}
  */
  readonly logGroupConfiguration?: OamLinkLinkConfigurationLogGroupConfiguration;
  /**
  * metric_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/oam_link#metric_configuration OamLink#metric_configuration}
  */
  readonly metricConfiguration?: OamLinkLinkConfigurationMetricConfiguration;
}

export function oamLinkLinkConfigurationToTerraform(struct?: OamLinkLinkConfigurationOutputReference | OamLinkLinkConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_group_configuration: oamLinkLinkConfigurationLogGroupConfigurationToTerraform(struct!.logGroupConfiguration),
    metric_configuration: oamLinkLinkConfigurationMetricConfigurationToTerraform(struct!.metricConfiguration),
  }
}


export function oamLinkLinkConfigurationToHclTerraform(struct?: OamLinkLinkConfigurationOutputReference | OamLinkLinkConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_group_configuration: {
      value: oamLinkLinkConfigurationLogGroupConfigurationToHclTerraform(struct!.logGroupConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "OamLinkLinkConfigurationLogGroupConfigurationList",
    },
    metric_configuration: {
      value: oamLinkLinkConfigurationMetricConfigurationToHclTerraform(struct!.metricConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "OamLinkLinkConfigurationMetricConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OamLinkLinkConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OamLinkLinkConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logGroupConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupConfiguration = this._logGroupConfiguration?.internalValue;
    }
    if (this._metricConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricConfiguration = this._metricConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OamLinkLinkConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logGroupConfiguration.internalValue = undefined;
      this._metricConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logGroupConfiguration.internalValue = value.logGroupConfiguration;
      this._metricConfiguration.internalValue = value.metricConfiguration;
    }
  }

  // log_group_configuration - computed: false, optional: true, required: false
  private _logGroupConfiguration = new OamLinkLinkConfigurationLogGroupConfigurationOutputReference(this, "log_group_configuration");
  public get logGroupConfiguration() {
    return this._logGroupConfiguration;
  }
  public putLogGroupConfiguration(value: OamLinkLinkConfigurationLogGroupConfiguration) {
    this._logGroupConfiguration.internalValue = value;
  }
  public resetLogGroupConfiguration() {
    this._logGroupConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupConfigurationInput() {
    return this._logGroupConfiguration.internalValue;
  }

  // metric_configuration - computed: false, optional: true, required: false
  private _metricConfiguration = new OamLinkLinkConfigurationMetricConfigurationOutputReference(this, "metric_configuration");
  public get metricConfiguration() {
    return this._metricConfiguration;
  }
  public putMetricConfiguration(value: OamLinkLinkConfigurationMetricConfiguration) {
    this._metricConfiguration.internalValue = value;
  }
  public resetMetricConfiguration() {
    this._metricConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricConfigurationInput() {
    return this._metricConfiguration.internalValue;
  }
}
export interface OamLinkTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/oam_link#create OamLink#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/oam_link#delete OamLink#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/oam_link#update OamLink#update}
  */
  readonly update?: string;
}

export function oamLinkTimeoutsToTerraform(struct?: OamLinkTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function oamLinkTimeoutsToHclTerraform(struct?: OamLinkTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OamLinkTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OamLinkTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OamLinkTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
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

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/oam_link aws_oam_link}
*/
export class OamLink extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_oam_link";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OamLink resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OamLink to import
  * @param importFromId The id of the existing OamLink that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/oam_link#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OamLink to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_oam_link", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/resources/oam_link aws_oam_link} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OamLinkConfig
  */
  public constructor(scope: Construct, id: string, config: OamLinkConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_oam_link',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.75.0',
        providerVersionConstraint: '~> 5.0'
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
    this._labelTemplate = config.labelTemplate;
    this._resourceTypes = config.resourceTypes;
    this._sinkIdentifier = config.sinkIdentifier;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._linkConfiguration.internalValue = config.linkConfiguration;
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

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // label_template - computed: false, optional: false, required: true
  private _labelTemplate?: string; 
  public get labelTemplate() {
    return this.getStringAttribute('label_template');
  }
  public set labelTemplate(value: string) {
    this._labelTemplate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelTemplateInput() {
    return this._labelTemplate;
  }

  // link_id - computed: true, optional: false, required: false
  public get linkId() {
    return this.getStringAttribute('link_id');
  }

  // resource_types - computed: false, optional: false, required: true
  private _resourceTypes?: string[]; 
  public get resourceTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('resource_types'));
  }
  public set resourceTypes(value: string[]) {
    this._resourceTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypesInput() {
    return this._resourceTypes;
  }

  // sink_arn - computed: true, optional: false, required: false
  public get sinkArn() {
    return this.getStringAttribute('sink_arn');
  }

  // sink_identifier - computed: false, optional: false, required: true
  private _sinkIdentifier?: string; 
  public get sinkIdentifier() {
    return this.getStringAttribute('sink_identifier');
  }
  public set sinkIdentifier(value: string) {
    this._sinkIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sinkIdentifierInput() {
    return this._sinkIdentifier;
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

  // link_configuration - computed: false, optional: true, required: false
  private _linkConfiguration = new OamLinkLinkConfigurationOutputReference(this, "link_configuration");
  public get linkConfiguration() {
    return this._linkConfiguration;
  }
  public putLinkConfiguration(value: OamLinkLinkConfiguration) {
    this._linkConfiguration.internalValue = value;
  }
  public resetLinkConfiguration() {
    this._linkConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkConfigurationInput() {
    return this._linkConfiguration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new OamLinkTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: OamLinkTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      label_template: cdktf.stringToTerraform(this._labelTemplate),
      resource_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._resourceTypes),
      sink_identifier: cdktf.stringToTerraform(this._sinkIdentifier),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      link_configuration: oamLinkLinkConfigurationToTerraform(this._linkConfiguration.internalValue),
      timeouts: oamLinkTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      label_template: {
        value: cdktf.stringToHclTerraform(this._labelTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._resourceTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      sink_identifier: {
        value: cdktf.stringToHclTerraform(this._sinkIdentifier),
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
      link_configuration: {
        value: oamLinkLinkConfigurationToHclTerraform(this._linkConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OamLinkLinkConfigurationList",
      },
      timeouts: {
        value: oamLinkTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OamLinkTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
