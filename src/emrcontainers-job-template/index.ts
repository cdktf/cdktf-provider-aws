// https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/emrcontainers_job_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EmrcontainersJobTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/emrcontainers_job_template#id EmrcontainersJobTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/emrcontainers_job_template#kms_key_arn EmrcontainersJobTemplate#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/emrcontainers_job_template#name EmrcontainersJobTemplate#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/emrcontainers_job_template#tags EmrcontainersJobTemplate#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/emrcontainers_job_template#tags_all EmrcontainersJobTemplate#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * job_template_data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/emrcontainers_job_template#job_template_data EmrcontainersJobTemplate#job_template_data}
  */
  readonly jobTemplateData: EmrcontainersJobTemplateJobTemplateData;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/emrcontainers_job_template#timeouts EmrcontainersJobTemplate#timeouts}
  */
  readonly timeouts?: EmrcontainersJobTemplateTimeouts;
}
export interface EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/emrcontainers_job_template#classification EmrcontainersJobTemplate#classification}
  */
  readonly classification?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/emrcontainers_job_template#properties EmrcontainersJobTemplate#properties}
  */
  readonly properties?: { [key: string]: string };
}

export function emrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsToTerraform(struct?: EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    classification: cdktf.stringToTerraform(struct!.classification),
    properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.properties),
  }
}

export class EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._classification !== undefined) {
      hasAnyValues = true;
      internalValueResult.classification = this._classification;
    }
    if (this._properties !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._classification = undefined;
      this._properties = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._classification = value.classification;
      this._properties = value.properties;
    }
  }

  // classification - computed: false, optional: true, required: false
  private _classification?: string; 
  public get classification() {
    return this.getStringAttribute('classification');
  }
  public set classification(value: string) {
    this._classification = value;
  }
  public resetClassification() {
    this._classification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classificationInput() {
    return this._classification;
  }

  // properties - computed: false, optional: true, required: false
  private _properties?: { [key: string]: string }; 
  public get properties() {
    return this.getStringMapAttribute('properties');
  }
  public set properties(value: { [key: string]: string }) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
  }
}

export class EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList extends cdktf.ComplexList {
  public internalValue? : EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurations[] | cdktf.IResolvable

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
  public get(index: number): EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference {
    return new EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/emrcontainers_job_template#classification EmrcontainersJobTemplate#classification}
  */
  readonly classification: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/emrcontainers_job_template#properties EmrcontainersJobTemplate#properties}
  */
  readonly properties?: { [key: string]: string };
  /**
  * configurations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/emrcontainers_job_template#configurations EmrcontainersJobTemplate#configurations}
  */
  readonly configurations?: EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurations[] | cdktf.IResolvable;
}

export function emrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationToTerraform(struct?: EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    classification: cdktf.stringToTerraform(struct!.classification),
    properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.properties),
    configurations: cdktf.listMapper(emrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsToTerraform, true)(struct!.configurations),
  }
}

export class EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._classification !== undefined) {
      hasAnyValues = true;
      internalValueResult.classification = this._classification;
    }
    if (this._properties !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    if (this._configurations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configurations = this._configurations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._classification = undefined;
      this._properties = undefined;
      this._configurations.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._classification = value.classification;
      this._properties = value.properties;
      this._configurations.internalValue = value.configurations;
    }
  }

  // classification - computed: false, optional: false, required: true
  private _classification?: string; 
  public get classification() {
    return this.getStringAttribute('classification');
  }
  public set classification(value: string) {
    this._classification = value;
  }
  // Temporarily expose input value. Use with caution.
  public get classificationInput() {
    return this._classification;
  }

  // properties - computed: false, optional: true, required: false
  private _properties?: { [key: string]: string }; 
  public get properties() {
    return this.getStringMapAttribute('properties');
  }
  public set properties(value: { [key: string]: string }) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
  }

  // configurations - computed: false, optional: true, required: false
  private _configurations = new EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList(this, "configurations", false);
  public get configurations() {
    return this._configurations;
  }
  public putConfigurations(value: EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurations[] | cdktf.IResolvable) {
    this._configurations.internalValue = value;
  }
  public resetConfigurations() {
    this._configurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationsInput() {
    return this._configurations.internalValue;
  }
}

export class EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList extends cdktf.ComplexList {
  public internalValue? : EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfiguration[] | cdktf.IResolvable

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
  public get(index: number): EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference {
    return new EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/emrcontainers_job_template#log_group_name EmrcontainersJobTemplate#log_group_name}
  */
  readonly logGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/emrcontainers_job_template#log_stream_name_prefix EmrcontainersJobTemplate#log_stream_name_prefix}
  */
  readonly logStreamNamePrefix?: string;
}

export function emrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationToTerraform(struct?: EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference | EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    log_stream_name_prefix: cdktf.stringToTerraform(struct!.logStreamNamePrefix),
  }
}

export class EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupName = this._logGroupName;
    }
    if (this._logStreamNamePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.logStreamNamePrefix = this._logStreamNamePrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logGroupName = undefined;
      this._logStreamNamePrefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logGroupName = value.logGroupName;
      this._logStreamNamePrefix = value.logStreamNamePrefix;
    }
  }

  // log_group_name - computed: false, optional: false, required: true
  private _logGroupName?: string; 
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }
  public set logGroupName(value: string) {
    this._logGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNameInput() {
    return this._logGroupName;
  }

  // log_stream_name_prefix - computed: false, optional: true, required: false
  private _logStreamNamePrefix?: string; 
  public get logStreamNamePrefix() {
    return this.getStringAttribute('log_stream_name_prefix');
  }
  public set logStreamNamePrefix(value: string) {
    this._logStreamNamePrefix = value;
  }
  public resetLogStreamNamePrefix() {
    this._logStreamNamePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamNamePrefixInput() {
    return this._logStreamNamePrefix;
  }
}
export interface EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/emrcontainers_job_template#log_uri EmrcontainersJobTemplate#log_uri}
  */
  readonly logUri: string;
}

export function emrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationToTerraform(struct?: EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference | EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_uri: cdktf.stringToTerraform(struct!.logUri),
  }
}

export class EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.logUri = this._logUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logUri = value.logUri;
    }
  }

  // log_uri - computed: false, optional: false, required: true
  private _logUri?: string; 
  public get logUri() {
    return this.getStringAttribute('log_uri');
  }
  public set logUri(value: string) {
    this._logUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logUriInput() {
    return this._logUri;
  }
}
export interface EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/emrcontainers_job_template#persistent_app_ui EmrcontainersJobTemplate#persistent_app_ui}
  */
  readonly persistentAppUi?: string;
  /**
  * cloud_watch_monitoring_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/emrcontainers_job_template#cloud_watch_monitoring_configuration EmrcontainersJobTemplate#cloud_watch_monitoring_configuration}
  */
  readonly cloudWatchMonitoringConfiguration?: EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration;
  /**
  * s3_monitoring_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/emrcontainers_job_template#s3_monitoring_configuration EmrcontainersJobTemplate#s3_monitoring_configuration}
  */
  readonly s3MonitoringConfiguration?: EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration;
}

export function emrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationToTerraform(struct?: EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference | EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    persistent_app_ui: cdktf.stringToTerraform(struct!.persistentAppUi),
    cloud_watch_monitoring_configuration: emrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationToTerraform(struct!.cloudWatchMonitoringConfiguration),
    s3_monitoring_configuration: emrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationToTerraform(struct!.s3MonitoringConfiguration),
  }
}

export class EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._persistentAppUi !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistentAppUi = this._persistentAppUi;
    }
    if (this._cloudWatchMonitoringConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudWatchMonitoringConfiguration = this._cloudWatchMonitoringConfiguration?.internalValue;
    }
    if (this._s3MonitoringConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3MonitoringConfiguration = this._s3MonitoringConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._persistentAppUi = undefined;
      this._cloudWatchMonitoringConfiguration.internalValue = undefined;
      this._s3MonitoringConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._persistentAppUi = value.persistentAppUi;
      this._cloudWatchMonitoringConfiguration.internalValue = value.cloudWatchMonitoringConfiguration;
      this._s3MonitoringConfiguration.internalValue = value.s3MonitoringConfiguration;
    }
  }

  // persistent_app_ui - computed: false, optional: true, required: false
  private _persistentAppUi?: string; 
  public get persistentAppUi() {
    return this.getStringAttribute('persistent_app_ui');
  }
  public set persistentAppUi(value: string) {
    this._persistentAppUi = value;
  }
  public resetPersistentAppUi() {
    this._persistentAppUi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentAppUiInput() {
    return this._persistentAppUi;
  }

  // cloud_watch_monitoring_configuration - computed: false, optional: true, required: false
  private _cloudWatchMonitoringConfiguration = new EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference(this, "cloud_watch_monitoring_configuration");
  public get cloudWatchMonitoringConfiguration() {
    return this._cloudWatchMonitoringConfiguration;
  }
  public putCloudWatchMonitoringConfiguration(value: EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration) {
    this._cloudWatchMonitoringConfiguration.internalValue = value;
  }
  public resetCloudWatchMonitoringConfiguration() {
    this._cloudWatchMonitoringConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudWatchMonitoringConfigurationInput() {
    return this._cloudWatchMonitoringConfiguration.internalValue;
  }

  // s3_monitoring_configuration - computed: false, optional: true, required: false
  private _s3MonitoringConfiguration = new EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference(this, "s3_monitoring_configuration");
  public get s3MonitoringConfiguration() {
    return this._s3MonitoringConfiguration;
  }
  public putS3MonitoringConfiguration(value: EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration) {
    this._s3MonitoringConfiguration.internalValue = value;
  }
  public resetS3MonitoringConfiguration() {
    this._s3MonitoringConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3MonitoringConfigurationInput() {
    return this._s3MonitoringConfiguration.internalValue;
  }
}
export interface EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides {
  /**
  * application_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/emrcontainers_job_template#application_configuration EmrcontainersJobTemplate#application_configuration}
  */
  readonly applicationConfiguration?: EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfiguration[] | cdktf.IResolvable;
  /**
  * monitoring_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/emrcontainers_job_template#monitoring_configuration EmrcontainersJobTemplate#monitoring_configuration}
  */
  readonly monitoringConfiguration?: EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration;
}

export function emrcontainersJobTemplateJobTemplateDataConfigurationOverridesToTerraform(struct?: EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference | EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_configuration: cdktf.listMapper(emrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationToTerraform, true)(struct!.applicationConfiguration),
    monitoring_configuration: emrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationToTerraform(struct!.monitoringConfiguration),
  }
}

export class EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationConfiguration = this._applicationConfiguration?.internalValue;
    }
    if (this._monitoringConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoringConfiguration = this._monitoringConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._applicationConfiguration.internalValue = undefined;
      this._monitoringConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._applicationConfiguration.internalValue = value.applicationConfiguration;
      this._monitoringConfiguration.internalValue = value.monitoringConfiguration;
    }
  }

  // application_configuration - computed: false, optional: true, required: false
  private _applicationConfiguration = new EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList(this, "application_configuration", false);
  public get applicationConfiguration() {
    return this._applicationConfiguration;
  }
  public putApplicationConfiguration(value: EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfiguration[] | cdktf.IResolvable) {
    this._applicationConfiguration.internalValue = value;
  }
  public resetApplicationConfiguration() {
    this._applicationConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationConfigurationInput() {
    return this._applicationConfiguration.internalValue;
  }

  // monitoring_configuration - computed: false, optional: true, required: false
  private _monitoringConfiguration = new EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference(this, "monitoring_configuration");
  public get monitoringConfiguration() {
    return this._monitoringConfiguration;
  }
  public putMonitoringConfiguration(value: EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration) {
    this._monitoringConfiguration.internalValue = value;
  }
  public resetMonitoringConfiguration() {
    this._monitoringConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringConfigurationInput() {
    return this._monitoringConfiguration.internalValue;
  }
}
export interface EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/emrcontainers_job_template#entry_point EmrcontainersJobTemplate#entry_point}
  */
  readonly entryPoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/emrcontainers_job_template#spark_sql_parameters EmrcontainersJobTemplate#spark_sql_parameters}
  */
  readonly sparkSqlParameters?: string;
}

export function emrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverToTerraform(struct?: EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference | EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entry_point: cdktf.stringToTerraform(struct!.entryPoint),
    spark_sql_parameters: cdktf.stringToTerraform(struct!.sparkSqlParameters),
  }
}

export class EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entryPoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryPoint = this._entryPoint;
    }
    if (this._sparkSqlParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.sparkSqlParameters = this._sparkSqlParameters;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._entryPoint = undefined;
      this._sparkSqlParameters = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._entryPoint = value.entryPoint;
      this._sparkSqlParameters = value.sparkSqlParameters;
    }
  }

  // entry_point - computed: false, optional: true, required: false
  private _entryPoint?: string; 
  public get entryPoint() {
    return this.getStringAttribute('entry_point');
  }
  public set entryPoint(value: string) {
    this._entryPoint = value;
  }
  public resetEntryPoint() {
    this._entryPoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryPointInput() {
    return this._entryPoint;
  }

  // spark_sql_parameters - computed: false, optional: true, required: false
  private _sparkSqlParameters?: string; 
  public get sparkSqlParameters() {
    return this.getStringAttribute('spark_sql_parameters');
  }
  public set sparkSqlParameters(value: string) {
    this._sparkSqlParameters = value;
  }
  public resetSparkSqlParameters() {
    this._sparkSqlParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkSqlParametersInput() {
    return this._sparkSqlParameters;
  }
}
export interface EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/emrcontainers_job_template#entry_point EmrcontainersJobTemplate#entry_point}
  */
  readonly entryPoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/emrcontainers_job_template#entry_point_arguments EmrcontainersJobTemplate#entry_point_arguments}
  */
  readonly entryPointArguments?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/emrcontainers_job_template#spark_submit_parameters EmrcontainersJobTemplate#spark_submit_parameters}
  */
  readonly sparkSubmitParameters?: string;
}

export function emrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverToTerraform(struct?: EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference | EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entry_point: cdktf.stringToTerraform(struct!.entryPoint),
    entry_point_arguments: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.entryPointArguments),
    spark_submit_parameters: cdktf.stringToTerraform(struct!.sparkSubmitParameters),
  }
}

export class EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entryPoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryPoint = this._entryPoint;
    }
    if (this._entryPointArguments !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryPointArguments = this._entryPointArguments;
    }
    if (this._sparkSubmitParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.sparkSubmitParameters = this._sparkSubmitParameters;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._entryPoint = undefined;
      this._entryPointArguments = undefined;
      this._sparkSubmitParameters = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._entryPoint = value.entryPoint;
      this._entryPointArguments = value.entryPointArguments;
      this._sparkSubmitParameters = value.sparkSubmitParameters;
    }
  }

  // entry_point - computed: false, optional: false, required: true
  private _entryPoint?: string; 
  public get entryPoint() {
    return this.getStringAttribute('entry_point');
  }
  public set entryPoint(value: string) {
    this._entryPoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entryPointInput() {
    return this._entryPoint;
  }

  // entry_point_arguments - computed: false, optional: true, required: false
  private _entryPointArguments?: string[]; 
  public get entryPointArguments() {
    return cdktf.Fn.tolist(this.getListAttribute('entry_point_arguments'));
  }
  public set entryPointArguments(value: string[]) {
    this._entryPointArguments = value;
  }
  public resetEntryPointArguments() {
    this._entryPointArguments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryPointArgumentsInput() {
    return this._entryPointArguments;
  }

  // spark_submit_parameters - computed: false, optional: true, required: false
  private _sparkSubmitParameters?: string; 
  public get sparkSubmitParameters() {
    return this.getStringAttribute('spark_submit_parameters');
  }
  public set sparkSubmitParameters(value: string) {
    this._sparkSubmitParameters = value;
  }
  public resetSparkSubmitParameters() {
    this._sparkSubmitParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkSubmitParametersInput() {
    return this._sparkSubmitParameters;
  }
}
export interface EmrcontainersJobTemplateJobTemplateDataJobDriver {
  /**
  * spark_sql_job_driver block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/emrcontainers_job_template#spark_sql_job_driver EmrcontainersJobTemplate#spark_sql_job_driver}
  */
  readonly sparkSqlJobDriver?: EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver;
  /**
  * spark_submit_job_driver block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/emrcontainers_job_template#spark_submit_job_driver EmrcontainersJobTemplate#spark_submit_job_driver}
  */
  readonly sparkSubmitJobDriver?: EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver;
}

export function emrcontainersJobTemplateJobTemplateDataJobDriverToTerraform(struct?: EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference | EmrcontainersJobTemplateJobTemplateDataJobDriver): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    spark_sql_job_driver: emrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverToTerraform(struct!.sparkSqlJobDriver),
    spark_submit_job_driver: emrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverToTerraform(struct!.sparkSubmitJobDriver),
  }
}

export class EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EmrcontainersJobTemplateJobTemplateDataJobDriver | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sparkSqlJobDriver?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sparkSqlJobDriver = this._sparkSqlJobDriver?.internalValue;
    }
    if (this._sparkSubmitJobDriver?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sparkSubmitJobDriver = this._sparkSubmitJobDriver?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrcontainersJobTemplateJobTemplateDataJobDriver | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sparkSqlJobDriver.internalValue = undefined;
      this._sparkSubmitJobDriver.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sparkSqlJobDriver.internalValue = value.sparkSqlJobDriver;
      this._sparkSubmitJobDriver.internalValue = value.sparkSubmitJobDriver;
    }
  }

  // spark_sql_job_driver - computed: false, optional: true, required: false
  private _sparkSqlJobDriver = new EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference(this, "spark_sql_job_driver");
  public get sparkSqlJobDriver() {
    return this._sparkSqlJobDriver;
  }
  public putSparkSqlJobDriver(value: EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver) {
    this._sparkSqlJobDriver.internalValue = value;
  }
  public resetSparkSqlJobDriver() {
    this._sparkSqlJobDriver.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkSqlJobDriverInput() {
    return this._sparkSqlJobDriver.internalValue;
  }

  // spark_submit_job_driver - computed: false, optional: true, required: false
  private _sparkSubmitJobDriver = new EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference(this, "spark_submit_job_driver");
  public get sparkSubmitJobDriver() {
    return this._sparkSubmitJobDriver;
  }
  public putSparkSubmitJobDriver(value: EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver) {
    this._sparkSubmitJobDriver.internalValue = value;
  }
  public resetSparkSubmitJobDriver() {
    this._sparkSubmitJobDriver.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkSubmitJobDriverInput() {
    return this._sparkSubmitJobDriver.internalValue;
  }
}
export interface EmrcontainersJobTemplateJobTemplateData {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/emrcontainers_job_template#execution_role_arn EmrcontainersJobTemplate#execution_role_arn}
  */
  readonly executionRoleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/emrcontainers_job_template#job_tags EmrcontainersJobTemplate#job_tags}
  */
  readonly jobTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/emrcontainers_job_template#release_label EmrcontainersJobTemplate#release_label}
  */
  readonly releaseLabel: string;
  /**
  * configuration_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/emrcontainers_job_template#configuration_overrides EmrcontainersJobTemplate#configuration_overrides}
  */
  readonly configurationOverrides?: EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides;
  /**
  * job_driver block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/emrcontainers_job_template#job_driver EmrcontainersJobTemplate#job_driver}
  */
  readonly jobDriver: EmrcontainersJobTemplateJobTemplateDataJobDriver;
}

export function emrcontainersJobTemplateJobTemplateDataToTerraform(struct?: EmrcontainersJobTemplateJobTemplateDataOutputReference | EmrcontainersJobTemplateJobTemplateData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    execution_role_arn: cdktf.stringToTerraform(struct!.executionRoleArn),
    job_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.jobTags),
    release_label: cdktf.stringToTerraform(struct!.releaseLabel),
    configuration_overrides: emrcontainersJobTemplateJobTemplateDataConfigurationOverridesToTerraform(struct!.configurationOverrides),
    job_driver: emrcontainersJobTemplateJobTemplateDataJobDriverToTerraform(struct!.jobDriver),
  }
}

export class EmrcontainersJobTemplateJobTemplateDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EmrcontainersJobTemplateJobTemplateData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._executionRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionRoleArn = this._executionRoleArn;
    }
    if (this._jobTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobTags = this._jobTags;
    }
    if (this._releaseLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.releaseLabel = this._releaseLabel;
    }
    if (this._configurationOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configurationOverrides = this._configurationOverrides?.internalValue;
    }
    if (this._jobDriver?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobDriver = this._jobDriver?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrcontainersJobTemplateJobTemplateData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._executionRoleArn = undefined;
      this._jobTags = undefined;
      this._releaseLabel = undefined;
      this._configurationOverrides.internalValue = undefined;
      this._jobDriver.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._executionRoleArn = value.executionRoleArn;
      this._jobTags = value.jobTags;
      this._releaseLabel = value.releaseLabel;
      this._configurationOverrides.internalValue = value.configurationOverrides;
      this._jobDriver.internalValue = value.jobDriver;
    }
  }

  // execution_role_arn - computed: false, optional: false, required: true
  private _executionRoleArn?: string; 
  public get executionRoleArn() {
    return this.getStringAttribute('execution_role_arn');
  }
  public set executionRoleArn(value: string) {
    this._executionRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRoleArnInput() {
    return this._executionRoleArn;
  }

  // job_tags - computed: false, optional: true, required: false
  private _jobTags?: { [key: string]: string }; 
  public get jobTags() {
    return this.getStringMapAttribute('job_tags');
  }
  public set jobTags(value: { [key: string]: string }) {
    this._jobTags = value;
  }
  public resetJobTags() {
    this._jobTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobTagsInput() {
    return this._jobTags;
  }

  // release_label - computed: false, optional: false, required: true
  private _releaseLabel?: string; 
  public get releaseLabel() {
    return this.getStringAttribute('release_label');
  }
  public set releaseLabel(value: string) {
    this._releaseLabel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseLabelInput() {
    return this._releaseLabel;
  }

  // configuration_overrides - computed: false, optional: true, required: false
  private _configurationOverrides = new EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference(this, "configuration_overrides");
  public get configurationOverrides() {
    return this._configurationOverrides;
  }
  public putConfigurationOverrides(value: EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides) {
    this._configurationOverrides.internalValue = value;
  }
  public resetConfigurationOverrides() {
    this._configurationOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationOverridesInput() {
    return this._configurationOverrides.internalValue;
  }

  // job_driver - computed: false, optional: false, required: true
  private _jobDriver = new EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference(this, "job_driver");
  public get jobDriver() {
    return this._jobDriver;
  }
  public putJobDriver(value: EmrcontainersJobTemplateJobTemplateDataJobDriver) {
    this._jobDriver.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobDriverInput() {
    return this._jobDriver.internalValue;
  }
}
export interface EmrcontainersJobTemplateTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/emrcontainers_job_template#delete EmrcontainersJobTemplate#delete}
  */
  readonly delete?: string;
}

export function emrcontainersJobTemplateTimeoutsToTerraform(struct?: EmrcontainersJobTemplateTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class EmrcontainersJobTemplateTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EmrcontainersJobTemplateTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrcontainersJobTemplateTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/emrcontainers_job_template aws_emrcontainers_job_template}
*/
export class EmrcontainersJobTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_emrcontainers_job_template";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/emrcontainers_job_template aws_emrcontainers_job_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EmrcontainersJobTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: EmrcontainersJobTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_emrcontainers_job_template',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.20.1',
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
    this._kmsKeyArn = config.kmsKeyArn;
    this._name = config.name;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._jobTemplateData.internalValue = config.jobTemplateData;
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

  // kms_key_arn - computed: false, optional: true, required: false
  private _kmsKeyArn?: string; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn;
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

  // job_template_data - computed: false, optional: false, required: true
  private _jobTemplateData = new EmrcontainersJobTemplateJobTemplateDataOutputReference(this, "job_template_data");
  public get jobTemplateData() {
    return this._jobTemplateData;
  }
  public putJobTemplateData(value: EmrcontainersJobTemplateJobTemplateData) {
    this._jobTemplateData.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobTemplateDataInput() {
    return this._jobTemplateData.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EmrcontainersJobTemplateTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EmrcontainersJobTemplateTimeouts) {
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
      kms_key_arn: cdktf.stringToTerraform(this._kmsKeyArn),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      job_template_data: emrcontainersJobTemplateJobTemplateDataToTerraform(this._jobTemplateData.internalValue),
      timeouts: emrcontainersJobTemplateTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
