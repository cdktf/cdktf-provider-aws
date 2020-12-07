// https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CodestarnotificationsNotificationRuleConfig extends cdktf.TerraformMetaArguments {
  readonly detailType: string;
  readonly eventTypeIds: string[];
  readonly name: string;
  readonly resource: string;
  readonly status?: string;
  readonly tags?: { [key: string]: string };
  /** target block */
  readonly target?: CodestarnotificationsNotificationRuleTarget[];
}
export interface CodestarnotificationsNotificationRuleTarget {
  readonly address: string;
  readonly type?: string;
}

function codestarnotificationsNotificationRuleTargetToTerraform(struct?: CodestarnotificationsNotificationRuleTarget): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


// Resource

export class CodestarnotificationsNotificationRule extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CodestarnotificationsNotificationRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_codestarnotifications_notification_rule',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._detailType = config.detailType;
    this._eventTypeIds = config.eventTypeIds;
    this._name = config.name;
    this._resource = config.resource;
    this._status = config.status;
    this._tags = config.tags;
    this._target = config.target;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // detail_type - computed: false, optional: false, required: true
  private _detailType: string;
  public get detailType() {
    return this.getStringAttribute('detail_type');
  }
  public set detailType(value: string) {
    this._detailType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get detailTypeInput() {
    return this._detailType
  }

  // event_type_ids - computed: false, optional: false, required: true
  private _eventTypeIds: string[];
  public get eventTypeIds() {
    return this.getListAttribute('event_type_ids');
  }
  public set eventTypeIds(value: string[]) {
    this._eventTypeIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTypeIdsInput() {
    return this._eventTypeIds
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

  // resource - computed: false, optional: false, required: true
  private _resource: string;
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource
  }

  // status - computed: false, optional: true, required: false
  private _status?: string;
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string ) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status
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

  // target - computed: false, optional: true, required: false
  private _target?: CodestarnotificationsNotificationRuleTarget[];
  public get target() {
    return this.interpolationForAttribute('target') as any;
  }
  public set target(value: CodestarnotificationsNotificationRuleTarget[] ) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      detail_type: cdktf.stringToTerraform(this._detailType),
      event_type_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._eventTypeIds),
      name: cdktf.stringToTerraform(this._name),
      resource: cdktf.stringToTerraform(this._resource),
      status: cdktf.stringToTerraform(this._status),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      target: cdktf.listMapper(codestarnotificationsNotificationRuleTargetToTerraform)(this._target),
    };
  }
}
