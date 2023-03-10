// https://www.terraform.io/docs/providers/aws/r/kendra_experience
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KendraExperienceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#description KendraExperience#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#id KendraExperience#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#index_id KendraExperience#index_id}
  */
  readonly indexId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#name KendraExperience#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#role_arn KendraExperience#role_arn}
  */
  readonly roleArn: string;
  /**
  * configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#configuration KendraExperience#configuration}
  */
  readonly configuration?: KendraExperienceConfiguration;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#timeouts KendraExperience#timeouts}
  */
  readonly timeouts?: KendraExperienceTimeouts;
}
export interface KendraExperienceEndpoints {
}

export function kendraExperienceEndpointsToTerraform(struct?: KendraExperienceEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class KendraExperienceEndpointsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): KendraExperienceEndpoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraExperienceEndpoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // endpoint_type - computed: true, optional: false, required: false
  public get endpointType() {
    return this.getStringAttribute('endpoint_type');
  }
}

export class KendraExperienceEndpointsList extends cdktf.ComplexList {

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
  public get(index: number): KendraExperienceEndpointsOutputReference {
    return new KendraExperienceEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KendraExperienceConfigurationContentSourceConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#data_source_ids KendraExperience#data_source_ids}
  */
  readonly dataSourceIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#direct_put_content KendraExperience#direct_put_content}
  */
  readonly directPutContent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#faq_ids KendraExperience#faq_ids}
  */
  readonly faqIds?: string[];
}

export function kendraExperienceConfigurationContentSourceConfigurationToTerraform(struct?: KendraExperienceConfigurationContentSourceConfigurationOutputReference | KendraExperienceConfigurationContentSourceConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_source_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dataSourceIds),
    direct_put_content: cdktf.booleanToTerraform(struct!.directPutContent),
    faq_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.faqIds),
  }
}

export class KendraExperienceConfigurationContentSourceConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KendraExperienceConfigurationContentSourceConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataSourceIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSourceIds = this._dataSourceIds;
    }
    if (this._directPutContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.directPutContent = this._directPutContent;
    }
    if (this._faqIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.faqIds = this._faqIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraExperienceConfigurationContentSourceConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataSourceIds = undefined;
      this._directPutContent = undefined;
      this._faqIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataSourceIds = value.dataSourceIds;
      this._directPutContent = value.directPutContent;
      this._faqIds = value.faqIds;
    }
  }

  // data_source_ids - computed: false, optional: true, required: false
  private _dataSourceIds?: string[]; 
  public get dataSourceIds() {
    return cdktf.Fn.tolist(this.getListAttribute('data_source_ids'));
  }
  public set dataSourceIds(value: string[]) {
    this._dataSourceIds = value;
  }
  public resetDataSourceIds() {
    this._dataSourceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceIdsInput() {
    return this._dataSourceIds;
  }

  // direct_put_content - computed: false, optional: true, required: false
  private _directPutContent?: boolean | cdktf.IResolvable; 
  public get directPutContent() {
    return this.getBooleanAttribute('direct_put_content');
  }
  public set directPutContent(value: boolean | cdktf.IResolvable) {
    this._directPutContent = value;
  }
  public resetDirectPutContent() {
    this._directPutContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directPutContentInput() {
    return this._directPutContent;
  }

  // faq_ids - computed: false, optional: true, required: false
  private _faqIds?: string[]; 
  public get faqIds() {
    return cdktf.Fn.tolist(this.getListAttribute('faq_ids'));
  }
  public set faqIds(value: string[]) {
    this._faqIds = value;
  }
  public resetFaqIds() {
    this._faqIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faqIdsInput() {
    return this._faqIds;
  }
}
export interface KendraExperienceConfigurationUserIdentityConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#identity_attribute_name KendraExperience#identity_attribute_name}
  */
  readonly identityAttributeName: string;
}

export function kendraExperienceConfigurationUserIdentityConfigurationToTerraform(struct?: KendraExperienceConfigurationUserIdentityConfigurationOutputReference | KendraExperienceConfigurationUserIdentityConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_attribute_name: cdktf.stringToTerraform(struct!.identityAttributeName),
  }
}

export class KendraExperienceConfigurationUserIdentityConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KendraExperienceConfigurationUserIdentityConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identityAttributeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityAttributeName = this._identityAttributeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraExperienceConfigurationUserIdentityConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._identityAttributeName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._identityAttributeName = value.identityAttributeName;
    }
  }

  // identity_attribute_name - computed: false, optional: false, required: true
  private _identityAttributeName?: string; 
  public get identityAttributeName() {
    return this.getStringAttribute('identity_attribute_name');
  }
  public set identityAttributeName(value: string) {
    this._identityAttributeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityAttributeNameInput() {
    return this._identityAttributeName;
  }
}
export interface KendraExperienceConfiguration {
  /**
  * content_source_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#content_source_configuration KendraExperience#content_source_configuration}
  */
  readonly contentSourceConfiguration?: KendraExperienceConfigurationContentSourceConfiguration;
  /**
  * user_identity_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#user_identity_configuration KendraExperience#user_identity_configuration}
  */
  readonly userIdentityConfiguration?: KendraExperienceConfigurationUserIdentityConfiguration;
}

export function kendraExperienceConfigurationToTerraform(struct?: KendraExperienceConfigurationOutputReference | KendraExperienceConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_source_configuration: kendraExperienceConfigurationContentSourceConfigurationToTerraform(struct!.contentSourceConfiguration),
    user_identity_configuration: kendraExperienceConfigurationUserIdentityConfigurationToTerraform(struct!.userIdentityConfiguration),
  }
}

export class KendraExperienceConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KendraExperienceConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentSourceConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentSourceConfiguration = this._contentSourceConfiguration?.internalValue;
    }
    if (this._userIdentityConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userIdentityConfiguration = this._userIdentityConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraExperienceConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contentSourceConfiguration.internalValue = undefined;
      this._userIdentityConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contentSourceConfiguration.internalValue = value.contentSourceConfiguration;
      this._userIdentityConfiguration.internalValue = value.userIdentityConfiguration;
    }
  }

  // content_source_configuration - computed: false, optional: true, required: false
  private _contentSourceConfiguration = new KendraExperienceConfigurationContentSourceConfigurationOutputReference(this, "content_source_configuration");
  public get contentSourceConfiguration() {
    return this._contentSourceConfiguration;
  }
  public putContentSourceConfiguration(value: KendraExperienceConfigurationContentSourceConfiguration) {
    this._contentSourceConfiguration.internalValue = value;
  }
  public resetContentSourceConfiguration() {
    this._contentSourceConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentSourceConfigurationInput() {
    return this._contentSourceConfiguration.internalValue;
  }

  // user_identity_configuration - computed: false, optional: true, required: false
  private _userIdentityConfiguration = new KendraExperienceConfigurationUserIdentityConfigurationOutputReference(this, "user_identity_configuration");
  public get userIdentityConfiguration() {
    return this._userIdentityConfiguration;
  }
  public putUserIdentityConfiguration(value: KendraExperienceConfigurationUserIdentityConfiguration) {
    this._userIdentityConfiguration.internalValue = value;
  }
  public resetUserIdentityConfiguration() {
    this._userIdentityConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdentityConfigurationInput() {
    return this._userIdentityConfiguration.internalValue;
  }
}
export interface KendraExperienceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#create KendraExperience#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#delete KendraExperience#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience#update KendraExperience#update}
  */
  readonly update?: string;
}

export function kendraExperienceTimeoutsToTerraform(struct?: KendraExperienceTimeoutsOutputReference | KendraExperienceTimeouts | cdktf.IResolvable): any {
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

export class KendraExperienceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KendraExperienceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KendraExperienceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience aws_kendra_experience}
*/
export class KendraExperience extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_kendra_experience";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/kendra_experience aws_kendra_experience} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KendraExperienceConfig
  */
  public constructor(scope: Construct, id: string, config: KendraExperienceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_kendra_experience',
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
    this._description = config.description;
    this._id = config.id;
    this._indexId = config.indexId;
    this._name = config.name;
    this._roleArn = config.roleArn;
    this._configuration.internalValue = config.configuration;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // endpoints - computed: true, optional: false, required: false
  private _endpoints = new KendraExperienceEndpointsList(this, "endpoints", true);
  public get endpoints() {
    return this._endpoints;
  }

  // experience_id - computed: true, optional: false, required: false
  public get experienceId() {
    return this.getStringAttribute('experience_id');
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

  // index_id - computed: false, optional: false, required: true
  private _indexId?: string; 
  public get indexId() {
    return this.getStringAttribute('index_id');
  }
  public set indexId(value: string) {
    this._indexId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexIdInput() {
    return this._indexId;
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

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration = new KendraExperienceConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: KendraExperienceConfiguration) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new KendraExperienceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: KendraExperienceTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      index_id: cdktf.stringToTerraform(this._indexId),
      name: cdktf.stringToTerraform(this._name),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      configuration: kendraExperienceConfigurationToTerraform(this._configuration.internalValue),
      timeouts: kendraExperienceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
