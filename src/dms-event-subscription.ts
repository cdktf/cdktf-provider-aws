// https://www.terraform.io/docs/providers/aws/r/dms_event_subscription.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DmsEventSubscriptionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_event_subscription.html#enabled DmsEventSubscription#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_event_subscription.html#event_categories DmsEventSubscription#event_categories}
  */
  readonly eventCategories: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_event_subscription.html#name DmsEventSubscription#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_event_subscription.html#sns_topic_arn DmsEventSubscription#sns_topic_arn}
  */
  readonly snsTopicArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_event_subscription.html#source_ids DmsEventSubscription#source_ids}
  */
  readonly sourceIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_event_subscription.html#source_type DmsEventSubscription#source_type}
  */
  readonly sourceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_event_subscription.html#tags DmsEventSubscription#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_event_subscription.html#tags_all DmsEventSubscription#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_event_subscription.html#timeouts DmsEventSubscription#timeouts}
  */
  readonly timeouts?: DmsEventSubscriptionTimeouts;
}
export interface DmsEventSubscriptionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_event_subscription.html#create DmsEventSubscription#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_event_subscription.html#delete DmsEventSubscription#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_event_subscription.html#update DmsEventSubscription#update}
  */
  readonly update?: string;
}

function dmsEventSubscriptionTimeoutsToTerraform(struct?: DmsEventSubscriptionTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/dms_event_subscription.html aws_dms_event_subscription}
*/
export class DmsEventSubscription extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_dms_event_subscription";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dms_event_subscription.html aws_dms_event_subscription} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DmsEventSubscriptionConfig
  */
  public constructor(scope: Construct, id: string, config: DmsEventSubscriptionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_dms_event_subscription',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._enabled = config.enabled;
    this._eventCategories = config.eventCategories;
    this._name = config.name;
    this._snsTopicArn = config.snsTopicArn;
    this._sourceIds = config.sourceIds;
    this._sourceType = config.sourceType;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable;
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable ) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
  }

  // event_categories - computed: false, optional: false, required: true
  private _eventCategories: string[];
  public get eventCategories() {
    return this.getListAttribute('event_categories');
  }
  public set eventCategories(value: string[]) {
    this._eventCategories = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventCategoriesInput() {
    return this._eventCategories
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // sns_topic_arn - computed: false, optional: false, required: true
  private _snsTopicArn: string;
  public get snsTopicArn() {
    return this.getStringAttribute('sns_topic_arn');
  }
  public set snsTopicArn(value: string) {
    this._snsTopicArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snsTopicArnInput() {
    return this._snsTopicArn
  }

  // source_ids - computed: false, optional: true, required: false
  private _sourceIds?: string[];
  public get sourceIds() {
    return this.getListAttribute('source_ids');
  }
  public set sourceIds(value: string[] ) {
    this._sourceIds = value;
  }
  public resetSourceIds() {
    this._sourceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIdsInput() {
    return this._sourceIds
  }

  // source_type - computed: false, optional: true, required: false
  private _sourceType?: string;
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
  public set sourceType(value: string ) {
    this._sourceType = value;
  }
  public resetSourceType() {
    this._sourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DmsEventSubscriptionTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DmsEventSubscriptionTimeouts ) {
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
      enabled: cdktf.booleanToTerraform(this._enabled),
      event_categories: cdktf.listMapper(cdktf.stringToTerraform)(this._eventCategories),
      name: cdktf.stringToTerraform(this._name),
      sns_topic_arn: cdktf.stringToTerraform(this._snsTopicArn),
      source_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._sourceIds),
      source_type: cdktf.stringToTerraform(this._sourceType),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      timeouts: dmsEventSubscriptionTimeoutsToTerraform(this._timeouts),
    };
  }
}
