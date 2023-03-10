// https://www.terraform.io/docs/providers/aws/r/apprunner_observability_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApprunnerObservabilityConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_observability_configuration#id ApprunnerObservabilityConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_observability_configuration#observability_configuration_name ApprunnerObservabilityConfiguration#observability_configuration_name}
  */
  readonly observabilityConfigurationName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_observability_configuration#tags ApprunnerObservabilityConfiguration#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_observability_configuration#tags_all ApprunnerObservabilityConfiguration#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * trace_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_observability_configuration#trace_configuration ApprunnerObservabilityConfiguration#trace_configuration}
  */
  readonly traceConfiguration?: ApprunnerObservabilityConfigurationTraceConfiguration;
}
export interface ApprunnerObservabilityConfigurationTraceConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_observability_configuration#vendor ApprunnerObservabilityConfiguration#vendor}
  */
  readonly vendor?: string;
}

export function apprunnerObservabilityConfigurationTraceConfigurationToTerraform(struct?: ApprunnerObservabilityConfigurationTraceConfigurationOutputReference | ApprunnerObservabilityConfigurationTraceConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vendor: cdktf.stringToTerraform(struct!.vendor),
  }
}

export class ApprunnerObservabilityConfigurationTraceConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApprunnerObservabilityConfigurationTraceConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vendor !== undefined) {
      hasAnyValues = true;
      internalValueResult.vendor = this._vendor;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApprunnerObservabilityConfigurationTraceConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._vendor = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._vendor = value.vendor;
    }
  }

  // vendor - computed: false, optional: true, required: false
  private _vendor?: string; 
  public get vendor() {
    return this.getStringAttribute('vendor');
  }
  public set vendor(value: string) {
    this._vendor = value;
  }
  public resetVendor() {
    this._vendor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorInput() {
    return this._vendor;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/apprunner_observability_configuration aws_apprunner_observability_configuration}
*/
export class ApprunnerObservabilityConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_apprunner_observability_configuration";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/apprunner_observability_configuration aws_apprunner_observability_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApprunnerObservabilityConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: ApprunnerObservabilityConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_apprunner_observability_configuration',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.58.0',
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
    this._observabilityConfigurationName = config.observabilityConfigurationName;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._traceConfiguration.internalValue = config.traceConfiguration;
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

  // latest - computed: true, optional: false, required: false
  public get latest() {
    return this.getBooleanAttribute('latest');
  }

  // observability_configuration_name - computed: false, optional: false, required: true
  private _observabilityConfigurationName?: string; 
  public get observabilityConfigurationName() {
    return this.getStringAttribute('observability_configuration_name');
  }
  public set observabilityConfigurationName(value: string) {
    this._observabilityConfigurationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get observabilityConfigurationNameInput() {
    return this._observabilityConfigurationName;
  }

  // observability_configuration_revision - computed: true, optional: false, required: false
  public get observabilityConfigurationRevision() {
    return this.getNumberAttribute('observability_configuration_revision');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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

  // trace_configuration - computed: false, optional: true, required: false
  private _traceConfiguration = new ApprunnerObservabilityConfigurationTraceConfigurationOutputReference(this, "trace_configuration");
  public get traceConfiguration() {
    return this._traceConfiguration;
  }
  public putTraceConfiguration(value: ApprunnerObservabilityConfigurationTraceConfiguration) {
    this._traceConfiguration.internalValue = value;
  }
  public resetTraceConfiguration() {
    this._traceConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get traceConfigurationInput() {
    return this._traceConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      observability_configuration_name: cdktf.stringToTerraform(this._observabilityConfigurationName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      trace_configuration: apprunnerObservabilityConfigurationTraceConfigurationToTerraform(this._traceConfiguration.internalValue),
    };
  }
}
