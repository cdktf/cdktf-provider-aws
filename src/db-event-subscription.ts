// https://www.terraform.io/docs/providers/aws/r/db_event_subscription.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DbEventSubscriptionConfig extends cdktf.TerraformMetaArguments {
  readonly enabled?: boolean;
  readonly eventCategories?: string[];
  readonly name?: string;
  readonly namePrefix?: string;
  readonly snsTopic: string;
  readonly sourceIds?: string[];
  readonly sourceType?: string;
  readonly tags?: { [key: string]: string };
  /** timeouts block */
  readonly timeouts?: DbEventSubscriptionTimeouts;
}
export interface DbEventSubscriptionTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function dbEventSubscriptionTimeoutsToTerraform(struct?: DbEventSubscriptionTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class DbEventSubscription extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DbEventSubscriptionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_db_event_subscription',
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
    this._namePrefix = config.namePrefix;
    this._snsTopic = config.snsTopic;
    this._sourceIds = config.sourceIds;
    this._sourceType = config.sourceType;
    this._tags = config.tags;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // customer_aws_id - computed: true, optional: false, required: false
  public get customerAwsId() {
    return this.getStringAttribute('customer_aws_id');
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean;
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean ) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
  }

  // event_categories - computed: false, optional: true, required: false
  private _eventCategories?: string[];
  public get eventCategories() {
    return this.getListAttribute('event_categories');
  }
  public set eventCategories(value: string[] ) {
    this._eventCategories = value;
  }
  public resetEventCategories() {
    this._eventCategories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventCategoriesInput() {
    return this._eventCategories
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // name_prefix - computed: false, optional: true, required: false
  private _namePrefix?: string;
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string ) {
    this._namePrefix = value;
  }
  public resetNamePrefix() {
    this._namePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namePrefixInput() {
    return this._namePrefix
  }

  // sns_topic - computed: false, optional: false, required: true
  private _snsTopic: string;
  public get snsTopic() {
    return this.getStringAttribute('sns_topic');
  }
  public set snsTopic(value: string) {
    this._snsTopic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snsTopicInput() {
    return this._snsTopic
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
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DbEventSubscriptionTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DbEventSubscriptionTimeouts ) {
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
      name_prefix: cdktf.stringToTerraform(this._namePrefix),
      sns_topic: cdktf.stringToTerraform(this._snsTopic),
      source_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._sourceIds),
      source_type: cdktf.stringToTerraform(this._sourceType),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      timeouts: dbEventSubscriptionTimeoutsToTerraform(this._timeouts),
    };
  }
}
