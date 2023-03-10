// https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ElasticBeanstalkApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application#description ElasticBeanstalkApplication#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application#id ElasticBeanstalkApplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application#name ElasticBeanstalkApplication#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application#tags ElasticBeanstalkApplication#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application#tags_all ElasticBeanstalkApplication#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * appversion_lifecycle block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application#appversion_lifecycle ElasticBeanstalkApplication#appversion_lifecycle}
  */
  readonly appversionLifecycle?: ElasticBeanstalkApplicationAppversionLifecycle;
}
export interface ElasticBeanstalkApplicationAppversionLifecycle {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application#delete_source_from_s3 ElasticBeanstalkApplication#delete_source_from_s3}
  */
  readonly deleteSourceFromS3?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application#max_age_in_days ElasticBeanstalkApplication#max_age_in_days}
  */
  readonly maxAgeInDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application#max_count ElasticBeanstalkApplication#max_count}
  */
  readonly maxCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application#service_role ElasticBeanstalkApplication#service_role}
  */
  readonly serviceRole: string;
}

export function elasticBeanstalkApplicationAppversionLifecycleToTerraform(struct?: ElasticBeanstalkApplicationAppversionLifecycleOutputReference | ElasticBeanstalkApplicationAppversionLifecycle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete_source_from_s3: cdktf.booleanToTerraform(struct!.deleteSourceFromS3),
    max_age_in_days: cdktf.numberToTerraform(struct!.maxAgeInDays),
    max_count: cdktf.numberToTerraform(struct!.maxCount),
    service_role: cdktf.stringToTerraform(struct!.serviceRole),
  }
}

export class ElasticBeanstalkApplicationAppversionLifecycleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ElasticBeanstalkApplicationAppversionLifecycle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deleteSourceFromS3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteSourceFromS3 = this._deleteSourceFromS3;
    }
    if (this._maxAgeInDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAgeInDays = this._maxAgeInDays;
    }
    if (this._maxCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCount = this._maxCount;
    }
    if (this._serviceRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceRole = this._serviceRole;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticBeanstalkApplicationAppversionLifecycle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deleteSourceFromS3 = undefined;
      this._maxAgeInDays = undefined;
      this._maxCount = undefined;
      this._serviceRole = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deleteSourceFromS3 = value.deleteSourceFromS3;
      this._maxAgeInDays = value.maxAgeInDays;
      this._maxCount = value.maxCount;
      this._serviceRole = value.serviceRole;
    }
  }

  // delete_source_from_s3 - computed: false, optional: true, required: false
  private _deleteSourceFromS3?: boolean | cdktf.IResolvable; 
  public get deleteSourceFromS3() {
    return this.getBooleanAttribute('delete_source_from_s3');
  }
  public set deleteSourceFromS3(value: boolean | cdktf.IResolvable) {
    this._deleteSourceFromS3 = value;
  }
  public resetDeleteSourceFromS3() {
    this._deleteSourceFromS3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteSourceFromS3Input() {
    return this._deleteSourceFromS3;
  }

  // max_age_in_days - computed: false, optional: true, required: false
  private _maxAgeInDays?: number; 
  public get maxAgeInDays() {
    return this.getNumberAttribute('max_age_in_days');
  }
  public set maxAgeInDays(value: number) {
    this._maxAgeInDays = value;
  }
  public resetMaxAgeInDays() {
    this._maxAgeInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeInDaysInput() {
    return this._maxAgeInDays;
  }

  // max_count - computed: false, optional: true, required: false
  private _maxCount?: number; 
  public get maxCount() {
    return this.getNumberAttribute('max_count');
  }
  public set maxCount(value: number) {
    this._maxCount = value;
  }
  public resetMaxCount() {
    this._maxCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCountInput() {
    return this._maxCount;
  }

  // service_role - computed: false, optional: false, required: true
  private _serviceRole?: string; 
  public get serviceRole() {
    return this.getStringAttribute('service_role');
  }
  public set serviceRole(value: string) {
    this._serviceRole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceRoleInput() {
    return this._serviceRole;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application aws_elastic_beanstalk_application}
*/
export class ElasticBeanstalkApplication extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_elastic_beanstalk_application";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application aws_elastic_beanstalk_application} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ElasticBeanstalkApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: ElasticBeanstalkApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_elastic_beanstalk_application',
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
    this._name = config.name;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._appversionLifecycle.internalValue = config.appversionLifecycle;
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

  // appversion_lifecycle - computed: false, optional: true, required: false
  private _appversionLifecycle = new ElasticBeanstalkApplicationAppversionLifecycleOutputReference(this, "appversion_lifecycle");
  public get appversionLifecycle() {
    return this._appversionLifecycle;
  }
  public putAppversionLifecycle(value: ElasticBeanstalkApplicationAppversionLifecycle) {
    this._appversionLifecycle.internalValue = value;
  }
  public resetAppversionLifecycle() {
    this._appversionLifecycle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appversionLifecycleInput() {
    return this._appversionLifecycle.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      appversion_lifecycle: elasticBeanstalkApplicationAppversionLifecycleToTerraform(this._appversionLifecycle.internalValue),
    };
  }
}
