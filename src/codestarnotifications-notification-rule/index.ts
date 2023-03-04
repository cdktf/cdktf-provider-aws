// https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CodestarnotificationsNotificationRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule#detail_type CodestarnotificationsNotificationRule#detail_type}
  */
  readonly detailType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule#event_type_ids CodestarnotificationsNotificationRule#event_type_ids}
  */
  readonly eventTypeIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule#id CodestarnotificationsNotificationRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule#name CodestarnotificationsNotificationRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule#resource CodestarnotificationsNotificationRule#resource}
  */
  readonly resource: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule#status CodestarnotificationsNotificationRule#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule#tags CodestarnotificationsNotificationRule#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule#tags_all CodestarnotificationsNotificationRule#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * target block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule#target CodestarnotificationsNotificationRule#target}
  */
  readonly target?: CodestarnotificationsNotificationRuleTarget[] | cdktf.IResolvable;
}
export interface CodestarnotificationsNotificationRuleTarget {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule#address CodestarnotificationsNotificationRule#address}
  */
  readonly address: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule#type CodestarnotificationsNotificationRule#type}
  */
  readonly type?: string;
}

export function codestarnotificationsNotificationRuleTargetToTerraform(struct?: CodestarnotificationsNotificationRuleTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class CodestarnotificationsNotificationRuleTargetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CodestarnotificationsNotificationRuleTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodestarnotificationsNotificationRuleTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._type = value.type;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class CodestarnotificationsNotificationRuleTargetList extends cdktf.ComplexList {
  public internalValue? : CodestarnotificationsNotificationRuleTarget[] | cdktf.IResolvable

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
  public get(index: number): CodestarnotificationsNotificationRuleTargetOutputReference {
    return new CodestarnotificationsNotificationRuleTargetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule aws_codestarnotifications_notification_rule}
*/
export class CodestarnotificationsNotificationRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_codestarnotifications_notification_rule";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule aws_codestarnotifications_notification_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CodestarnotificationsNotificationRuleConfig
  */
  public constructor(scope: Construct, id: string, config: CodestarnotificationsNotificationRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_codestarnotifications_notification_rule',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.57.0',
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
    this._detailType = config.detailType;
    this._eventTypeIds = config.eventTypeIds;
    this._id = config.id;
    this._name = config.name;
    this._resource = config.resource;
    this._status = config.status;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._target.internalValue = config.target;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // detail_type - computed: false, optional: false, required: true
  private _detailType?: string; 
  public get detailType() {
    return this.getStringAttribute('detail_type');
  }
  public set detailType(value: string) {
    this._detailType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get detailTypeInput() {
    return this._detailType;
  }

  // event_type_ids - computed: false, optional: false, required: true
  private _eventTypeIds?: string[]; 
  public get eventTypeIds() {
    return cdktf.Fn.tolist(this.getListAttribute('event_type_ids'));
  }
  public set eventTypeIds(value: string[]) {
    this._eventTypeIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTypeIdsInput() {
    return this._eventTypeIds;
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

  // resource - computed: false, optional: false, required: true
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
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

  // target - computed: false, optional: true, required: false
  private _target = new CodestarnotificationsNotificationRuleTargetList(this, "target", true);
  public get target() {
    return this._target;
  }
  public putTarget(value: CodestarnotificationsNotificationRuleTarget[] | cdktf.IResolvable) {
    this._target.internalValue = value;
  }
  public resetTarget() {
    this._target.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      detail_type: cdktf.stringToTerraform(this._detailType),
      event_type_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._eventTypeIds),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      resource: cdktf.stringToTerraform(this._resource),
      status: cdktf.stringToTerraform(this._status),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      target: cdktf.listMapper(codestarnotificationsNotificationRuleTargetToTerraform, true)(this._target.internalValue),
    };
  }
}
